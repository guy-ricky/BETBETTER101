/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@/utils";
import { LEAGUES } from "@/utils/leagues";

// Prefer a server-side key. Falls back to NEXT_PUBLIC_* if needed (SSR only).
const API_KEY =
  process.env.APISPORTS_KEY ||
  process.env.API_FOOTBALL_KEY ||
  process.env.NEXT_PUBLIC_API_FOOTBALL_KEY;

if (!API_KEY) {
  // It's better to fail loudly during build/runtime than to get 401s silently.
  console.warn(
    "[predict.ts] Missing APISPORTS key. Set APISPORTS_KEY or API_FOOTBALL_KEY."
  );
}

/** ===== Direct API-SPORTS base (Option B) ===== */
const BASE_URL = "https://v3.football.api-sports.io";

/**
 * Fetch fixtures for a specific date & league (Option B — direct API-SPORTS).
 * Mirrors the signature of the old Rapid helper so the rest of the file stays the same.
 */
async function fetchFixturesByDateLeague(
  dateISO: string,
  leagueId: number,
  season: number,
  timezone = "Africa/Nairobi"
): Promise<any[]> {
  const url = new URL(`${BASE_URL}/fixtures`);
  url.searchParams.set("date", dateISO.slice(0, 10)); // YYYY-MM-DD
  url.searchParams.set("league", String(leagueId));
  url.searchParams.set("season", String(season));
  url.searchParams.set("timezone", timezone);

  const res = await fetch(url.toString(), {
    headers: { "x-apisports-key": API_KEY as string },
    // Cache lightly to reduce quota, tweak as needed.
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `fixtures ${res.status} ${res.statusText} — ${body?.slice(0, 200)}`
    );
  }

  const json = await res.json();
  return json?.response ?? [];
}

/**
 * You’ll also add a tiny helper here to call API-Football (API-SPORTS) teams/statistics.
 * API path: v3/teams/statistics?league={id}&season={year}&team={id}
 *
 * NOTE: For first pass, we grab league avg goals and team gf/ga per match.
 * If you already cache this in DB, swap fetchers accordingly.
 */

type TeamStats = {
  goalsForPerMatch: number;
  goalsAgainstPerMatch: number;
};

/**
 * Fetches statistical data for a given football team from API-SPORTS (direct).
 * Retrieves average goals scored and conceded per match, both overall and split by home/away games.
 * Falls back to league baseline values if specific statistics are unavailable.
 */
async function fetchTeamStats(teamId: number, leagueId: number, season: number) {
  const url = new URL(`${BASE_URL}/teams/statistics`);
  url.searchParams.set("league", String(leagueId));
  url.searchParams.set("season", String(season));
  url.searchParams.set("team", String(teamId));

  const res = await fetch(url.toString(), {
    headers: { "x-apisports-key": API_KEY as string },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`team/statistics ${res.status}`);

  const json = await res.json();
  const st = json?.response;

  // Defensive guards; fall back to generic rates if missing
  const gf = st?.goals?.for?.average?.total ?? 1.3; // league-ish baseline
  const ga = st?.goals?.against?.average?.total ?? 1.3;

  const homeGF = st?.goals?.for?.average?.home ?? gf;
  const homeGA = st?.goals?.against?.average?.home ?? ga;
  const awayGF = st?.goals?.for?.average?.away ?? gf;
  const awayGA = st?.goals?.against?.average?.away ?? ga;

  // return both generic and split (we'll choose per context)
  return {
    home: {
      goalsForPerMatch: homeGF,
      goalsAgainstPerMatch: homeGA,
    } as TeamStats,
    away: {
      goalsForPerMatch: awayGF,
      goalsAgainstPerMatch: awayGA,
    } as TeamStats,
    avg: { goalsForPerMatch: gf, goalsAgainstPerMatch: ga } as TeamStats,
  };
}

/* =========================
   Poisson Helpers
   ========================= */

// Factorial function
function factorial(n: number) {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

// Poisson probability mass function
function poissonProb(goals: number, lambda: number) {
  return (Math.exp(-lambda) * Math.pow(lambda, goals)) / factorial(goals);
}

/**
 * Basic expected-goals recipe:
 * λ_home ≈ max(0.2, homeAttack * awayDefenseWeakness * HFA)
 * λ_away ≈ max(0.2, awayAttack * homeDefenseWeakness)
 *
 * Where:
 *   homeAttack ~ home goals for per match
 *   awayDefenseWeakness ~ away goals against per match
 *   HFA (home field advantage) ~ 1.08–1.15 (tunable)
 */

function computeLambdas(
  home: TeamStats,
  away: TeamStats,
  opts?: { hfa?: number }
) {
  const HFA = opts?.hfa ?? 1.1;

  // Attack vs defence mixing. Keep it simple and bounded.
  const lambdaHome = Math.max(
    0.2,
    home.goalsForPerMatch * away.goalsAgainstPerMatch * HFA
  );
  const lambdaAway = Math.max(
    0.2,
    away.goalsForPerMatch * home.goalsAgainstPerMatch
  );

  return { lambdaHome, lambdaAway };
}

/** Search a 0–5 score grid to pick the highest exact-score probability */
function bestScoreLine(lambdaHome: number, lambdaAway: number, maxGoals = 5) {
  let best = { h: 0, a: 0, p: 0 };
  for (let h = 0; h <= maxGoals; h++) {
    for (let a = 0; a <= maxGoals; a++) {
      const p = poissonProb(h, lambdaHome) * poissonProb(a, lambdaAway);
      if (p > best.p) best = { h, a, p };
    }
  }
  return best; // {h, a, p}
}

function winnerFrom(h: number, a: number) {
  return h === a ? "DRAW" : h > a ? "HOME" : "AWAY";
}

/**
 * Try to infer season from date (e.g. August–May).
 * You can hardcode 2025 or improve this later.
 */
function inferSeason(dateISO: string) {
  const d = new Date(dateISO);
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth() + 1;
  // In Europe, season typically starts mid-year:
  return m >= 7 ? y : y - 1;
}

/**
 * Generate predictions for a given date & leagueSlug (e.g. 'epl').
 * - Pull fixtures (direct API-SPORTS)
 * - For each, get stats for both teams
 * - Compute λ and pick best scoreline
 * - Upsert into Prediction
 */
export async function generatePredictionsForDate(
  leagueSlug: keyof typeof LEAGUES,
  dateISO: string
) {
  const league = LEAGUES[leagueSlug];
  if (!league) throw new Error("Unknown league " + leagueSlug);
  const season = inferSeason(dateISO);

  // 1. Fixtures for that date (direct API-SPORTS)
  const fixtures = await fetchFixturesByDateLeague(dateISO, league.id, season);

  // 2. For each fixture, compute prediction
  const results: any[] = [];
  for (const fx of fixtures) {
    const fixtureId: number = fx?.fixture?.id;
    const homeTeamId: number = fx?.teams?.home?.id;
    const awayTeamId: number = fx?.teams?.away?.id;
    const homeTeamName: string = fx?.teams?.home?.name;
    const awayTeamName: string = fx?.teams?.away?.name;
    const kickISO: string = fx?.fixture?.date;

    if (!fixtureId || !homeTeamId || !awayTeamId || !kickISO) continue;

    let predictedHome = 1;
    let predictedAway = 1;

    try {
      // 2a) Team Stats (direct API-SPORTS)
      const [homeStats, awayStats] = await Promise.all([
        fetchTeamStats(homeTeamId, league.id, season),
        fetchTeamStats(awayTeamId, league.id, season),
      ]);

      // Prefer split stats: home attack vs away defence, etc.
      const { lambdaHome, lambdaAway } = computeLambdas(
        {
          goalsForPerMatch: homeStats.home.goalsForPerMatch,
          goalsAgainstPerMatch: homeStats.home.goalsAgainstPerMatch,
        },
        {
          goalsForPerMatch: awayStats.away.goalsForPerMatch,
          goalsAgainstPerMatch: awayStats.away.goalsAgainstPerMatch,
        },
        { hfa: 1.1 }
      );

      const best = bestScoreLine(lambdaHome, lambdaAway, 5);
      predictedHome = best.h;
      predictedAway = best.a;
    } catch (error) {
      // If stats unavailable, keep 1-1 as conservative default (or add a markets fallback later)
      console.warn("Prediction fallback for fixture", fixtureId, error);
      predictedHome = 1;
      predictedAway = 1;
    }

    const pick = winnerFrom(predictedHome, predictedAway);

    // 3. Upsert prediction
    const created = await prisma.prediction.upsert({
      where: { fixtureId }, // ✅ upsert on unique fixtureId
      update: {
        leagueId: league.id,
        leagueSlug,
        date: new Date(kickISO),
        homeTeam: homeTeamName,
        awayTeam: awayTeamName,
        predictedHome,
        predictedAway,
        pick,
      },
      create: {
        fixtureId, // ✅ keep native ObjectId for id if your schema uses a separate id
        leagueId: league.id,
        leagueSlug,
        date: new Date(kickISO),
        homeTeam: homeTeamName,
        awayTeam: awayTeamName,
        predictedHome,
        predictedAway,
        pick,
      },
    });

    results.push(created);
  }

  return { count: results.length };
}
