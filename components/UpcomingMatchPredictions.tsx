/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import PickBadge from "./upcomingMatches/PickBadge";
import ProbBar from "./upcomingMatches/ProbBar";
import LeaguePill from "./upcomingMatches/LeaguePill";
import VSChip from "./upcomingMatches/VSChip";
import LoadingSkeleton from "./upcomingMatches/LoadingSkeleton";
import Card from "./upcomingMatches/Card";
import { Share2 } from "lucide-react";

export type Item = {
  fixtureId: number | null;
  date: string | null;
  league: string;
  leagueId: number | null;
  status: string | null;
  homeTeam: string;
  awayTeam: string;
  predicted: string | null;
  probs: { home: number; draw: number; away: number } | null;
  pick: "HOME" | "AWAY" | "DRAW" | null;
  impliedOdds: number | null;
};

export type Props = {
  leagueId?: number; // optional filter
  take?: number; // how many to show (default 6)
};

const fmtTime = (iso: string | null) => {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
      weekday: "short",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso || "";
  }
};

const fmtPct = (v?: number | null) =>
  typeof v === "number" && !isNaN(v) ? `${Math.round(v * 100)}%` : "—";

const pickToLabel = (m: Item) =>
  m.pick === "HOME"
    ? m.homeTeam
    : m.pick === "AWAY"
    ? m.awayTeam
    : m.pick === "DRAW"
    ? "Draw"
    : "—";

/**
 * Normalize probabilities to decimals in [0,1] and re-scale if needed.
 * - If values are > 1 and <= 100, assume percentages (divide by 100).
 * - If values are > 100, assume basis points (divide by 10,000).
 * - Renormalize so home+draw+away = 1 (when sum > 0).
 */
const normalizeProbs = (
  p: { home: number; draw: number; away: number } | null
): { home: number; draw: number; away: number } | null => {
  if (!p) return null;

  let { home, draw, away } = p;

  const maxVal = Math.max(home ?? 0, draw ?? 0, away ?? 0);
  let divisor = 1;
  if (maxVal > 1 && maxVal <= 100) divisor = 100; // percentages
  else if (maxVal > 100) divisor = 10000; // basis points

  home = (Number(home) || 0) / divisor;
  draw = (Number(draw) || 0) / divisor;
  away = (Number(away) || 0) / divisor;

  // Clamp to [0,1]
  home = Math.max(0, Math.min(1, home));
  draw = Math.max(0, Math.min(1, draw));
  away = Math.max(0, Math.min(1, away));

  const sum = home + draw + away;
  if (sum > 0) {
    home /= sum;
    draw /= sum;
    away /= sum;
  }

  return { home, draw, away };
};

const buildShareUrl = () => {
  return `${window.location.origin}/#predictions`;
};

const buildShareText = (m: Item) => {
  const time = fmtTime(m.date);
  const pickLabel = pickToLabel(m);
  const url = buildShareUrl();

  const lines: string[] = [];
  if (m.league || time)
    lines.push([m.league, time].filter(Boolean).join(" • "));
  lines.push(`${m.homeTeam} vs ${m.awayTeam}`);
  lines.push(`BetBetter101 Pick: ${pickLabel}`);
  lines.push(`Predicted score: ${m.predicted ?? "—"}`);

  const np = normalizeProbs(m.probs);
  if (np) {
    lines.push(
      `Probabilities: Home ${fmtPct(np.home)} | Draw ${fmtPct(
        np.draw
      )} | Away ${fmtPct(np.away)}`
    );
  }

  if (m.impliedOdds) lines.push(`Implied odds: ${m.impliedOdds}`);
  lines.push(`More picks: ${url}`);

  return lines.join("\n");
};

const UpcomingMatchPredictions: React.FC<Props> = ({ leagueId, take = 6 }) => {
  const [items, setItems] = useState<Item[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  /* const [copiedLinkId, setCopiedLinkId] = useState<string | number | null>(
    null
  ); */
  const [copiedTextId, setCopiedTextId] = useState<string | number | null>(
    null
  );

  useEffect(() => {
    const u = new URL("/api/home-upcoming-preds", window.location.origin);
    if (leagueId) u.searchParams.set("league_id", String(leagueId));
    u.searchParams.set("take", String(take));

    (async () => {
      try {
        const r = await fetch(u.toString(), { cache: "no-store" });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const j = await r.json();
        setItems(j.items ?? []);
      } catch (e: any) {
        setError(e?.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    })();
  }, [leagueId, take]);

  const handleCopyText = async (m: Item) => {
    const matchId = m.fixtureId ?? `${m.homeTeam}-${m.awayTeam}`;
    const text = buildShareText(m);
    try {
      await navigator.clipboard.writeText(text);
      setCopiedTextId(matchId);
      setTimeout(() => setCopiedTextId(null), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
      alert("Failed to copy text. Please try again.");
    }
  };

  if (error) {
    return (
      <div className="rounded-[var(--radius-xl)] border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
        Failed to load upcoming predictions: {error}
      </div>
    );
  }

  if (!items) return <LoadingSkeleton />;

  if (items.length === 0) {
    return (
      <div className="rounded-[var(--radius-xl)] border border-[color:var(--border)] p-6 text-white/70 bg-[color:var(--card)]/60">
        No upcoming matches found.
      </div>
    );
  }

  if (loading) return <LoadingSkeleton />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {items.map((m) => {
        const time = fmtTime(m.date);
        const matchId = m.fixtureId ?? `${m.homeTeam}-${m.awayTeam}-${m.date}`;
        const isTextCopied =
          copiedTextId === (m.fixtureId ?? `${m.homeTeam}-${m.awayTeam}`);

        return (
          <Card key={matchId}>
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div className="text-xs md:text-sm text-white/70">{time}</div>
              <div className="flex items-center gap-2">
                <LeaguePill name={m.league} />

                {/* Copy Text */}
                <button
                  onClick={() => handleCopyText(m)}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg border border-[color:var(--border)] bg-[color:var(--input)]/70 hover:bg-[color:var(--input)] transition-colors text-xs text-white/80 hover:text-white cursor-pointer"
                  title="Copy text summary"
                >
                  {isTextCopied ? (
                    <>
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="text-[10px]" />
                      <span className="hidden sm:inline">Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Match-up */}
            <div className="mt-3 flex items-center">
              <div className="flex-1 min-w-0">
                <div className="truncate font-semibold text-white text-base md:text-lg">
                  {m.homeTeam}
                </div>
              </div>
              <VSChip />
              <div className="flex-1 min-w-0 text-right">
                <div className="truncate font-semibold text-white text-base md:text-lg">
                  {m.awayTeam}
                </div>
              </div>
              <PickBadge pick={m.pick} />
            </div>

            {/* Predicted score + odds */}
            <div className="mt-2 text-sm md:text-[15px] text-white/80">
              Predicted score:{" "}
              <span className="font-semibold text-white">
                {m.predicted ?? "—"}
              </span>
              {m.impliedOdds ? (
                <span className="ml-2 text-xs text-white/60">
                  (Implied odds {m.impliedOdds})
                </span>
              ) : null}
            </div>

            {/* Probabilities */}
            <ProbBar probs={normalizeProbs(m.probs)} />

            {/* Footer mini chips */}
            <div className="mt-3 flex flex-wrap gap-2">
              {m.status ? (
                <span className="text-[10px] md:text-xs rounded-full border border-[color:var(--border)] bg-[color:var(--input)]/70 px-2 py-0.5 text-white/70">
                  Status: {m.status}
                </span>
              ) : null}
              {m.leagueId ? (
                <span className="text-[10px] md:text-xs rounded-full border border-[color:var(--border)] bg-[color:var(--input)]/70 px-2 py-0.5 text-white/70">
                  League ID: {m.leagueId}
                </span>
              ) : null}
              {m.fixtureId ? (
                <span className="text-[10px] md:text-xs rounded-full border border-[color:var(--border)] bg-[color:var(--input)]/70 px-2 py-0.5 text-white/70">
                  Fixture: {m.fixtureId}
                </span>
              ) : null}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default UpcomingMatchPredictions;
