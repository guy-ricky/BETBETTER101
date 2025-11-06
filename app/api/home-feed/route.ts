/* eslint-disable @typescript-eslint/no-explicit-any */

export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "@/utils";
import { calcOutcome } from "@/utils/outcome";
import { LEAGUES } from "@/utils/leagues";
import { fetchFixtureById } from "@/utils/rapid";

const DEFAULT_PAST_DAYS = 3;
const DEFAULT_FUTURE_DAYS = 14;
const DEFAULT_TAKE = 60;
const DEFAULT_GRACE_MINUTES = 120;

// how far back to look for previously won predictions (days) + how many to return
const DEFAULT_WINS_PAST_DAYS = 14;
const DEFAULT_WINS_TAKE = 12;

type LeagueLike = { leagueId?: number; id?: number; name?: string };
const LEAGUE_LIST: LeagueLike[] = Array.isArray(LEAGUES)
  ? (LEAGUES as LeagueLike[])
  : Object.values(LEAGUES as Record<string, LeagueLike>);

const leagueNameById = (id: number, fallback: string) =>
  LEAGUE_LIST.find((l) => (l.leagueId ?? l.id) === id)?.name ?? fallback;

function isFinished(short?: string | null) {
  const finished = new Set(["FT", "AET", "PEN", "AWD", "WO", "ABD"]);
  return !!short && finished.has(short);
}
function isUpcoming(short?: string | null) {
  const upcoming = new Set(["NS", "TBD", "PST"]);
  return !!short && upcoming.has(short);
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const now = new Date();

  const pastDays = Number(
    url.searchParams.get("past_days") ?? DEFAULT_PAST_DAYS
  );
  const futureDays = Number(
    url.searchParams.get("future_days") ?? DEFAULT_FUTURE_DAYS
  );
  const take = Number(url.searchParams.get("take") ?? DEFAULT_TAKE);
  const graceMinutes = Number(
    url.searchParams.get("grace_minutes") ?? DEFAULT_GRACE_MINUTES
  );

  const winsPastDays = Number(
    url.searchParams.get("wins_past_days") ?? DEFAULT_WINS_PAST_DAYS
  );
  const winsTake = Number(
    url.searchParams.get("wins_take") ?? DEFAULT_WINS_TAKE
  );

  // Time windows
  const from = new Date(now);
  from.setDate(from.getDate() - pastDays);
  const to = new Date(now);
  to.setDate(to.getDate() + futureDays);

  // Main feed (upcoming + recent finished)
  const preds = await prisma.prediction.findMany({
    where: { date: { gte: from, lte: to } },
    orderBy: { date: "asc" },
    take,
  });

  const enriched = await Promise.all(
    preds.map(async (p) => {
      let actualHome = p.actualHome;
      let actualAway = p.actualAway;
      let status = p.status ?? null;

      try {
        const fx = await fetchFixtureById(p.fixtureId);
        const g = fx?.goals;
        if (g) {
          actualHome = g.home ?? actualHome ?? null;
          actualAway = g.away ?? actualAway ?? null;
        }
        status = fx?.fixture?.status?.short ?? status ?? null;
      } catch {
        /* ignore network errors per item */
      }

      const { outcome, exact } = calcOutcome(
        p.predictedHome,
        p.predictedAway,
        actualHome,
        actualAway
      );

      const kickoff = p.date;
      const leagueName = leagueNameById(p.leagueId, p.leagueSlug);

      return {
        id: p.id,
        date: kickoff.toISOString(),
        kickoff, // Date object; will serialize to ISO in JSON
        league: leagueName,
        match: `${p.homeTeam} vs ${p.awayTeam}`,
        predicted: `${p.predictedHome}-${p.predictedAway}`,
        actual:
          actualHome != null && actualAway != null
            ? `${actualHome}-${actualAway}`
            : null,
        status,
        outcome, // "WIN" | "LOSE" | "PENDING" (depends on your calcOutcome)
        exactHit: exact, // boolean
      };
    })
  );

  // Partition for UI
  const graceMs = graceMinutes * 60 * 1000;
  const cutoff = new Date(now.getTime() - graceMs);

  const upcoming: typeof enriched = [];
  const recentPast: typeof enriched = [];

  for (const item of enriched) {
    const k = item.kickoff as Date;
    const finished = isFinished(item.status);

    if (!finished && (isUpcoming(item.status) || k > now)) {
      upcoming.push(item);
    } else if (finished) {
      if (k >= cutoff) recentPast.push(item);
    } else {
      // live / edge cases treated as upcoming
      upcoming.push(item);
    }
  }

  upcoming.sort((a, b) => +a.kickoff - +b.kickoff);
  recentPast.sort((a, b) => +b.kickoff - +a.kickoff);

  const ordered = [...upcoming, ...recentPast].slice(0, take);
  const items = ordered.map(({ ...rest }) => rest);

  // --- Previously won predictions (EXACT_HIT or WIN) ---
  const winsFrom = new Date(now);
  winsFrom.setDate(winsFrom.getDate() - winsPastDays);

  const recentFinished = await prisma.prediction.findMany({
    where: {
      date: { gte: winsFrom, lte: now },
      actualHome: { not: null },
      actualAway: { not: null },
    },
    orderBy: { date: "desc" },
    take: 5 * winsTake, // pull more, then filter/map and slice
  });

  const wonPredictions = recentFinished
    .map((p) => {
      if (p.actualHome == null || p.actualAway == null) return null;

      const { outcome, exact } = calcOutcome(
        p.predictedHome,
        p.predictedAway,
        p.actualHome,
        p.actualAway
      );

      // Only keep winners; upgrade to EXACT_HIT when exact is true
      if (!exact && outcome !== "WIN") return null;

      const leagueName = leagueNameById(p.leagueId, p.leagueSlug);
      return {
        id: p.id,
        date: p.date.toISOString(),
        league: leagueName,
        homeTeam: p.homeTeam,
        awayTeam: p.awayTeam,
        pick: p.pick ?? `${p.predictedHome}-${p.predictedAway}`,
        result: `${p.actualHome}-${p.actualAway}`,
        outcome: (exact ? "EXACT_HIT" : "WIN") as "EXACT_HIT" | "WIN",
      };
    })
    .filter(Boolean)
    // newest first
    .sort((a: any, b: any) => +new Date(b.date) - +new Date(a.date))
    .slice(0, winsTake);
  
  console.log('wonPredictions:\nItems fetched', wonPredictions,items);

  return NextResponse.json({
    items,
    wonPredictions,
    meta: {
      now: now.toISOString(),
      pastDays,
      futureDays,
      graceMinutes,
      counts: {
        upcoming: upcoming.length,
        recentPast: recentPast.length,
        total: items.length,
        won: wonPredictions.length,
      },
    },
  });
}
