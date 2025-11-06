/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/football/feed/route.ts
export const runtime = "nodejs";
import { NextResponse } from "next/server";

/** ---------- API-SPORTS base & key (direct, not RapidAPI) ---------- */
const BASE_URL = "https://v3.football.api-sports.io";
const API_KEY =
  process.env.API_FOOTBALL_KEY!;

/** ---------- Tunables ---------- */
// How many fixtures to fetch deep details for (events/lineups/stats)
const MAX_DETAILED_FIXTURES = 12;
// Cap team breadth for injuries/transfers (optional extras)
const MAX_TEAMS = 10;
// Delay between back-to-back per-fixture calls to avoid 429s
const PER_CALL_DELAY_MS = 400;
// NEW: Per-category items cap
const CATEGORY_LIMIT = 20;

/** Big 4 league IDs (API-Football): EPL(39), LaLiga(140), Bundesliga(78), Serie A(135) */
const LEAGUE_IDS: number[] = [39, 140, 78, 135];

/** ---------- Types ---------- */
type FeedItem = {
  id: string;
  type: "fixture" | "event" | "injury" | "transfer" | "lineup" | "stat";
  title: string;
  subtitle?: string;
  when: string;          // ISO timestamp for sorting
  league?: string;
  teams?: string;
  payload: any;          // raw item for details modal
};

/** ---------- Small helpers (same shape as your helper file) ---------- */
async function apiSports(path: string, params: Record<string, any> = {}) {
  const url = new URL(`${BASE_URL}/${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));

  const res = await fetch(url.toString(), {
    headers: { "x-apisports-key": API_KEY },
    // small cache window on the edge; live bits (events) still change often
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `API-SPORTS error ${res.status} ${res.statusText}: ${body.slice(0, 180)}`
    );
  }
  return res.json();
}

async function fetchFixturesByDateLeague(
  dateISO: string,
  leagueId: number,
  season?: number,
  timezone = "Africa/Nairobi"
) {
  const json = await apiSports("fixtures", {
    date: dateISO,
    league: leagueId,
    season,
    timezone,
  });
  return json?.response || [];
}

/** Nairobi-local YYYY-MM-DD */
function iso(d = new Date()) {
  const tz = "Africa/Nairobi";
  const s = new Date(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: tz,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(d)
  );
  return s.toISOString().slice(0, 10);
}

/** Compute European season: e.g., July 2024 → 2024; March 2025 → 2024 */
function currentSeason() {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = now.getUTCMonth() + 1; // 1..12
  return m >= 7 ? y : y - 1;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function statusShort(f: any) {
  return String(f?.fixture?.status?.short || "");
}
const LIVE = new Set(["1H", "HT", "2H", "ET", "BT", "P", "LIVE"]);
const FIN = new Set(["FT", "AET", "PEN"]);

/** Sort helper */
function sortNewest(a: FeedItem, b: FeedItem) {
  return (b.when || "").localeCompare(a.when || "");
}

/** ---------- Route ---------- */
export async function GET() {
  try {
    const tz = "Africa/Nairobi";
    const season = currentSeason();

    const today = iso(new Date());
    const yest = iso(new Date(Date.now() - 86_400_000));
    const tomo = iso(new Date(Date.now() + 86_400_000));

    /** 1) FIXTURES (today; light fallbacks per league, with season) */
    const perLeagueFixtures = LEAGUE_IDS.map(async (league) => {
      let fx: any[] = await fetchFixturesByDateLeague(today, league, season, tz);
      if (!fx?.length) {
        const [fy, ft] = await Promise.all([
          fetchFixturesByDateLeague(yest, league, season, tz),
          fetchFixturesByDateLeague(tomo, league, season, tz),
        ]);
        fx = [...(fy || []), ...(ft || [])];
      }
      // Defensive filter
      return fx.filter((f) => LEAGUE_IDS.includes(Number(f?.league?.id)));
    });

    const fixtures: any[] = (await Promise.all(perLeagueFixtures)).flat();

    // Prefer LIVE → FIN today → others (by recency)
    const todayStart = Date.parse(`${today}T00:00:00Z`);
    const todayEnd = Date.parse(`${today}T23:59:59Z`);
    const live = fixtures.filter((f) => LIVE.has(statusShort(f)));
    const finishedToday = fixtures.filter((f) => {
      const s = statusShort(f);
      const t = Date.parse(f?.fixture?.date ?? "");
      return FIN.has(s) && Number.isFinite(t) && t >= todayStart && t <= todayEnd;
    });
    const others = fixtures.filter(
      (f) => !LIVE.has(statusShort(f)) && !FIN.has(statusShort(f))
    );
    const detailedList = [...live, ...finishedToday, ...others]
      .filter((f) => Number.isFinite(Number(f?.fixture?.id)))
      .slice(0, MAX_DETAILED_FIXTURES);

    /** 2) Per-fixture: EVENTS → LINEUPS → STATISTICS (docs order) */
    const eventsBlocks: any[] = [];
    const lineupsBlocks: any[] = [];
    const statsBlocks: any[] = [];

    for (const f of detailedList) {
      const fixtureId = Number(f?.fixture?.id);
      if (!Number.isFinite(fixtureId)) continue;

      try {
        const ev = await apiSports("fixtures/events", { fixture: fixtureId });
        eventsBlocks.push({ fixtureId, rows: ev?.response ?? [] });
      } catch (e) {
        console.warn("events error", fixtureId, e);
      }
      await sleep(PER_CALL_DELAY_MS);

      try {
        const lu = await apiSports("fixtures/lineups", { fixture: fixtureId });
        lineupsBlocks.push({ fixtureId, rows: lu?.response ?? [] });
      } catch (e) {
        console.warn("lineups error", fixtureId, e);
      }
      await sleep(PER_CALL_DELAY_MS);

      try {
        const st = await apiSports("fixtures/statistics", { fixture: fixtureId });
        statsBlocks.push({ fixtureId, rows: st?.response ?? [] });
      } catch (e) {
        console.warn("stats error", fixtureId, e);
      }
      await sleep(PER_CALL_DELAY_MS);
    }

    /** 3) Optional: team-based extras (injuries/transfers) from these fixtures */
    const teamIds: number[] = Array.from(
      new Set(
        fixtures.flatMap((f: any) => [f.teams?.home?.id, f.teams?.away?.id]).filter(Boolean)
      )
    )
      .map((v: any) => Number(v))
      .filter((n) => Number.isFinite(n))
      .slice(0, MAX_TEAMS);

    const [injuriesBatches, transfersBatches] = await Promise.all([
      teamIds.length
        ? Promise.all(
          teamIds.map((id) => apiSports("injuries", { team: id, season }))
        )
        : Promise.resolve([]),
      teamIds.length
        ? Promise.all(
          teamIds.map((id) => apiSports("transfers", { team: id }))
        )
        : Promise.resolve([]),
    ]);

    /** 4) Assemble per-category arrays */
    const itemsFixtures: FeedItem[] = [];
    const itemsEvents: FeedItem[] = [];
    const itemsLineups: FeedItem[] = [];
    const itemsStats: FeedItem[] = [];
    const itemsInjuries: FeedItem[] = [];
    const itemsTransfers: FeedItem[] = [];

    // Fixtures
    for (const f of fixtures) {
      const league = `${f.league?.name} ${f.league?.season ?? ""}`.trim();
      const teams = `${f.teams?.home?.name} vs ${f.teams?.away?.name}`;
      itemsFixtures.push({
        id: `fx_${f.fixture?.id}`,
        type: "fixture",
        title: teams,
        subtitle: league,
        when: f.fixture?.date,
        league,
        teams,
        payload: f,
      });
    }

    // Events
    for (const block of eventsBlocks) {
      const rows = Array.isArray(block.rows) ? block.rows : [];
      rows.forEach((e: any, idx: number) => {
        const t = e.time?.elapsed ? `${e.time.elapsed}'` : "Event";
        const title = e.detail || e.type || "Event";
        const teams = e.team?.name;
        itemsEvents.push({
          id: `ev_${block.fixtureId}_${idx}`,
          type: "event",
          title: `${title} — ${t}`,
          subtitle: teams,
          when: e.time?.timestamp
            ? new Date(e.time.timestamp * 1000).toISOString()
            : new Date().toISOString(),
          teams,
          payload: e,
        });
      });
    }

    // Lineups
    for (const block of lineupsBlocks) {
      const rows = Array.isArray(block.rows) ? block.rows : [];
      rows.forEach((lu: any, idx: number) => {
        const t1 = lu?.team?.name || "Lineup";
        const formation = lu?.formation ? ` • ${lu.formation}` : "";
        itemsLineups.push({
          id: `lu_${block.fixtureId}_${idx}`,
          type: "lineup",
          title: `${t1}${formation}`,
          subtitle: "Starting XI & Bench",
          when: new Date().toISOString(),
          teams: lu?.team?.name,
          payload: lu,
        });
      });
    }

    // Statistics
    for (const block of statsBlocks) {
      const rows = Array.isArray(block.rows) ? block.rows : [];
      rows.forEach((st: any, idx: number) => {
        const tm = st?.team?.name || "Statistics";
        itemsStats.push({
          id: `st_${block.fixtureId}_${idx}`,
          type: "stat",
          title: `${tm} — Match statistics`,
          subtitle: "Shots, Possession, Passes, Fouls…",
          when: new Date().toISOString(),
          teams: tm,
          payload: st,
        });
      });
    }

    // Injuries
    injuriesBatches.flatMap((b: any) => b?.response ?? []).forEach((row: any, i: number) => {
      const p = row.player;
      const team = row.team?.name;
      const reason = row?.player?.reason || row?.injury?.type || "Injury/Unknown";
      itemsInjuries.push({
        id: `inj_${i}_${p?.id ?? ""}`,
        type: "injury",
        title: `${p?.name} doubtful/out`,
        subtitle: `${team} — ${reason}`,
        when: row?.fixture?.date || new Date().toISOString(),
        teams: team,
        payload: row,
      });
    });

    // Transfers (last 14 days)
    const cutoff = Date.now() - 14 * 24 * 60 * 60 * 1000;
    transfersBatches.flatMap((b: any) => b?.response ?? []).forEach((tBlock: any, i: number) => {
      const p = tBlock?.player?.name;
      (tBlock?.transfers || []).forEach((mv: any, j: number) => {
        const whenMs = mv?.date ? Date.parse(mv.date) : Date.now();
        if (!Number.isFinite(whenMs) || whenMs < cutoff) return;
        const from = mv?.teams?.out?.name || "—";
        const to = mv?.teams?.in?.name || "—";
        itemsTransfers.push({
          id: `tr_${i}_${j}_${tBlock?.player?.id ?? ""}`,
          type: "transfer",
          title: `${p} → ${to}`,
          subtitle: from === "—" ? "New signing" : `From ${from}`,
          when: new Date(whenMs).toISOString(),
          payload: mv,
        });
      });
    });

    /** 5) Apply per-category cap of 20, then merge and final sort */
    const cappedFixtures = itemsFixtures.sort(sortNewest).slice(0, CATEGORY_LIMIT);
    const cappedEvents = itemsEvents.sort(sortNewest).slice(0, CATEGORY_LIMIT);
    const cappedLineups = itemsLineups.sort(sortNewest).slice(0, CATEGORY_LIMIT);
    const cappedStats = itemsStats.sort(sortNewest).slice(0, CATEGORY_LIMIT);
    const cappedInjuries = itemsInjuries.sort(sortNewest).slice(0, CATEGORY_LIMIT);
    const cappedTransfers = itemsTransfers.sort(sortNewest).slice(0, CATEGORY_LIMIT);

    const items: FeedItem[] = [
      ...cappedFixtures,
      ...cappedEvents,
      ...cappedLineups,
      ...cappedStats,
      ...cappedInjuries,
      ...cappedTransfers,
    ].sort(sortNewest);

    // quick sanity log
    console.log("feed:", {
      fixtures_total: itemsFixtures.length,
      fixtures_returned: cappedFixtures.length,
      events_total: itemsEvents.length,
      events_returned: cappedEvents.length,
      lineups_total: itemsLineups.length,
      lineups_returned: cappedLineups.length,
      stats_total: itemsStats.length,
      stats_returned: cappedStats.length,
      injuries_total: itemsInjuries.length,
      injuries_returned: cappedInjuries.length,
      transfers_total: itemsTransfers.length,
      transfers_returned: cappedTransfers.length,
    });

    return NextResponse.json({ date: today, items });
  } catch (e: any) {
    console.log("Football feed error", e?.message || e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
