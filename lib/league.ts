/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
    LeagueMeta,
    StandingRow,
    Fixture,
    Scorer,
} from "@/types/football";
import { apiSports } from "./apiFootball";
import { poissonMatchProb } from "./model";

/** Convert 'premier-league' -> 'Premier League' */
export function titleCaseSlug(slug: string) {
    return slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

/**
 * Simple mapping from your URL slug to API-Football league/season.
 * Replace with your DB mapping if you have one.
 */
function mapSlugToLeague(slug: string): { leagueId: number; season: number } {
    const map: Record<string, { leagueId: number; season: number }> = {
        "premier-league": { leagueId: 39, season: new Date().getFullYear() }, // England
        "la-liga": { leagueId: 140, season: new Date().getFullYear() }, // Spain
        "serie-a": { leagueId: 135, season: new Date().getFullYear() }, // Italy
        "bundesliga": { leagueId: 78, season: new Date().getFullYear() }, // Germany
        "ligue-1": { leagueId: 61, season: new Date().getFullYear() }, // France
    };
    return map[slug] ?? { leagueId: 39, season: new Date().getFullYear() };
}

export async function getLeagueMeta(slug: string): Promise<LeagueMeta> {
    const { leagueId, season } = mapSlugToLeague(slug);

    const [leagues] = await Promise.all([
        apiSports("leagues", { id: leagueId }),
    ]);

    const league = leagues?.league;
    const country = leagues?.country;

    return {
        slug,
        leagueId,
        season,
        name: league?.name ?? titleCaseSlug(slug),
        country: country?.name ?? "",
        logo: league?.logo ?? "",
        flag: country?.flag ?? "",
        type: leagues?.league?.type ?? "League",
    };
}

export async function getStandings(
    leagueId: number,
    season: number
): Promise<StandingRow[]> {
    const rows = await apiSports("standings", { league: leagueId, season });
    const table = rows?.[0]?.league?.standings?.[0] ?? [];
    return table.map((r: any) => ({
        rank: r.rank,
        teamId: r.team?.id,
        team: r.team?.name,
        logo: r.team?.logo,
        played: r.all?.played,
        win: r.all?.win,
        draw: r.all?.draw,
        lose: r.all?.lose,
        gf: r.all?.goals?.for,
        ga: r.all?.goals?.against,
        gd: (r.all?.goals?.for ?? 0) - (r.all?.goals?.against ?? 0),
        points: r.points,
        form: r.form ?? "",
    }));
}

export async function getFixtures(
    leagueId: number,
    season: number,
    status: "NS" | "FT" | "LIVE" = "NS",
    limit = 10
): Promise<Fixture[]> {
    // ✅ Build params explicitly to avoid undefined keys
    const params: Record<string, any> = { league: leagueId, season, status };
    if (status === "NS") params.next = limit;
    if (status === "FT") params.last = limit;

    const resp = await apiSports("fixtures", params);

    return (resp ?? []).map((x: any) => ({
        id: x.fixture?.id,
        date: x.fixture?.date,
        status: x.fixture?.status?.short,
        venue: x.fixture?.venue?.name ?? "",
        home: {
            id: x.teams?.home?.id,
            name: x.teams?.home?.name,
            logo: x.teams?.home?.logo,
            goals: x.goals?.home ?? null,
        },
        away: {
            id: x.teams?.away?.id,
            name: x.teams?.away?.name,
            logo: x.teams?.away?.logo,
            goals: x.goals?.away ?? null,
        },
    }));
}


export async function getTopScorers(
    leagueId: number,
    season: number,
    limit = 10
): Promise<Scorer[]> {
    const resp = await apiSports("players/topscorers", { league: leagueId, season });
    return (resp ?? []).slice(0, limit).map((p: any) => ({
        playerId: p.player?.id,
        name: p.player?.name,
        photo: p.player?.photo,
        team: p.statistics?.[0]?.team?.name,
        goals: p.statistics?.[0]?.goals?.total ?? 0,
        assists: p.statistics?.[0]?.goals?.assists ?? 0,
        matches: p.statistics?.[0]?.games?.appearences ?? 0,
    }));
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getSeasons(leagueId: number): Promise<number[]> {
    // API-FOOTBALL returns all seasons for a league
    const seasons = await apiSports("leagues/seasons");
    // Keep the last ~10 for sanity
    return (seasons ?? []).slice(-10).reverse();
}

export async function getTeams(leagueId: number, season: number) {
    const resp = await apiSports("teams", { league: leagueId, season });
    return (resp ?? []).map((t: any) => ({
        id: t.team?.id,
        name: t.team?.name,
        logo: t.team?.logo,
    }));
}

/**
 * Derive a lightweight strength estimate from standings row.
 * (You likely have a better internal model—plug it in!)
 */
export function estimateStrength(standings: StandingRow[], teamId: number) {
    const row = standings.find((r) => r.teamId === teamId);
    if (!row) return { att: 1, def: 1 };
    // crude rates per game
    const att = Math.max(0.2, row.gf / Math.max(1, row.played));
    const def = Math.max(0.2, row.ga / Math.max(1, row.played));
    return { att, def };
}

/**
 * Produce probabilities for a fixture using a simple Poisson approach.
 * You should replace with your full BetBetter model when ready.
 */
export function getFixtureProbabilities(
    standings: StandingRow[],
    fx: Fixture
) {
    const h = estimateStrength(standings, fx.home.id);
    const a = estimateStrength(standings, fx.away.id);

    // naive expectation: home attack vs away defense & vice versa
    const lambdaHome = Math.max(0.1, h.att * (1.2 / Math.max(0.6, a.def))); // 1.2 = small home edge
    const lambdaAway = Math.max(0.1, a.att * (1.0 / Math.max(0.6, h.def)));

    return poissonMatchProb(lambdaHome, lambdaAway);
}
