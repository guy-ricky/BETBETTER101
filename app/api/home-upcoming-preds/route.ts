/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = "nodejs";

import { NextResponse } from "next/server";

/**
 * Set this in your .env (pointing to the FastAPI server you ran earlier):
 * POISSON_API_BASE=http://localhost:8000
 *    or your deployed URL, e.g. https://api.betbetter101.com
 */
const POISSON_API_BASE =
  process.env.POISSON_API_BASE || "http://localhost:8000";

/**
 * Proxies FastAPI: GET /upcoming-matches-with-predictions
 * Optionally support ?league_id=<id>&take=<n>
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const league_id = searchParams.get("league_id");
  const takeParam = Number(searchParams.get("take") ?? 10);

  const url = new URL(
    `${POISSON_API_BASE}/upcoming-matches-with-predictions`
  );
  if (league_id) url.searchParams.set("league_id", league_id);

  try {
    const res = await fetch(url.toString(), { cache: "no-store" });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: `Upstream ${res.status}: ${text.slice(0, 200)}` },
        { status: 502 }
      );
    }

    const json = await res.json();
    const matches: any[] = json?.matches ?? [];

    // Shape down for the home widget
    const items = matches
      .map((m) => {
        const fx = m;
        return {
          fixtureId: fx.fixture_id ?? fx.fixture?.id ?? null,
          date: fx.date ?? fx.fixture?.date ?? null,
          league: fx.league ?? fx.league_name ?? fx.league?.name ?? "",
          leagueId: fx.league_id ?? fx.league?.id ?? null,
          status: fx.status ?? fx.fixture?.status?.short ?? null,
          homeTeam: fx.home_team ?? fx.homeTeam ?? fx.teams?.home?.name ?? "",
          awayTeam: fx.away_team ?? fx.awayTeam ?? fx.teams?.away?.name ?? "",
          // From poisson prediction:
          predicted: fx.prediction
            ? `${Math.round(
                fx.prediction.top_scoreline?.score?.split("-")?.[0] ??
                  fx.prediction.home_expected_goals ?? 1
              )}-${Math.round(
                fx.prediction.top_scoreline?.score?.split("-")?.[1] ??
                  fx.prediction.away_expected_goals ?? 1
              )}`
            : fx.predictedHome != null && fx.predictedAway != null
            ? `${fx.predictedHome}-${fx.predictedAway}`
            : null,
          // Also pass computed probs if present
          probs: fx.prediction
            ? {
                home: fx.prediction.home_win_prob,
                draw: fx.prediction.draw_prob,
                away: fx.prediction.away_win_prob,
              }
            : null,
          pick: fx.pick ?? null,
          impliedOdds: fx.implied_odds ?? null,
        };
      })
      .slice(0, Math.max(1, takeParam));

    //console.log("Upcoming matches:", items);

    return NextResponse.json({ items });
  } catch (err: any) {
    console.log("Error in /home-upcoming-preds proxy:", err);
    return NextResponse.json(
      { error: `Proxy failed: ${err?.message || "unknown error"}` },
      { status: 500 }
    );
  }
}
