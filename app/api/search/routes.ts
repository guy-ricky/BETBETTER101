/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import {
  currentSeason,
  fixturesByLeague,
  fixturesH2H,
  searchLeaguesByText,
  searchTeamsByText,
  slug,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  titleCase,
} from "../../providers/apiFootball";

export const runtime = "nodejs";

// Very small in-memory TTL cache (Node runtime). Swap to KV later if needed.
type Entry<T> = { value: T; exp: number };
const cache = new Map<string, Entry<any>>();
const get = <T,>(k: string) => {
  const v = cache.get(k);
  if (!v) return null;
  if (Date.now() > v.exp) { cache.delete(k); return null; }
  return v.value as T;
};
const set = (k: string, v: any, ttlMs: number) => cache.set(k, { value: v, exp: Date.now() + ttlMs });

type EventResult = {
  id: string;
  title: string;
  url: string;
  league?: string;
  sport?: string;
  region?: string;
  kickoffISO?: string;
  bestPrice?: number;
  bookies?: string[];
};

function normalizeFixture(f: any, region: string): EventResult {
  const home = f?.teams?.home?.name || "Home";
  const away = f?.teams?.away?.name || "Away";
  const league = slug(f?.league?.name || "league");
  const event = slug(`${home} vs ${away}`);
  return {
    id: `fx-${f?.fixture?.id}`,
    title: `${home} vs ${away} — Odds & Predictions`,
    url: `/odds/football/${region}/${league}/${event}`,
    league,
    sport: "football",
    region,
    kickoffISO: f?.fixture?.date,
  };
}

// Very simple q parser: tries H2H first ("team a vs team b"), else league search.
function parseQ(q: string) {
  const raw = q.toLowerCase();
  const vsMatch = raw.split(/\s+vs\s+| - |—/i);
  if (vsMatch.length === 2) {
    return { type: "h2h" as const, home: vsMatch[0].trim(), away: vsMatch[1].trim() };
  }
  return { type: "league" as const, leagueText: q };
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = (searchParams.get("q") || "").trim();
    const region = (searchParams.get("region") || "uk").toLowerCase();
    const date = searchParams.get("date") || undefined; // optionally constrain to a date
    const ttlMs = 10 * 60 * 1000;

    const key = `search:${region}:${date ?? "any"}:${q.toLowerCase()}`;
    const hit = get<EventResult[]>(key);
    if (hit) return NextResponse.json(hit);

    const season = currentSeason();
    const parsed = parseQ(q);
    let rows: any[] = [];

    if (parsed.type === "h2h") {
      // Resolve team IDs from text, then fetch fixtures head-to-head
      const [homeCandidates, awayCandidates] = await Promise.all([
        searchTeamsByText(parsed.home),
        searchTeamsByText(parsed.away),
      ]);
      const homeTeamId = Number(homeCandidates?.[0]?.team?.id);
      const awayTeamId = Number(awayCandidates?.[0]?.team?.id);
      if (Number.isFinite(homeTeamId) && Number.isFinite(awayTeamId)) {
        rows = await fixturesH2H(homeTeamId, awayTeamId, 20);
      }
    } else {
      // League text → league id → fixtures (today if date supplied; otherwise upcoming)
      const leagues = await searchLeaguesByText(parsed.leagueText);
      const leagueId = Number(leagues?.[0]?.league?.id);
      if (Number.isFinite(leagueId)) {
        rows = await fixturesByLeague(leagueId, season, date /* optional */);
        // If no rows for the day, try the next few days (small expansion)
        if (!rows?.length && !date) {
          const today = new Date();
          for (let i = 0; i < 3 && rows.length === 0; i++) {
            const d = new Date(today.getTime() + i * 86400000);
            const ds = d.toISOString().slice(0, 10);
            rows = await fixturesByLeague(leagueId, season, ds);
          }
        }
      }
    }

    // Normalize to EventResult[]
    const out: EventResult[] = (rows || []).map((f: any) => normalizeFixture(f, region));

    set(key, out, ttlMs);
    return NextResponse.json(out);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "search error" }, { status: 500 });
  }
}
