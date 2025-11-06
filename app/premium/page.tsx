/* eslint-disable @typescript-eslint/no-explicit-any */

export const runtime = "nodejs";

import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/utils";
import LeagueSidebar from "@/components/LeagueSidebar";
import { ProcessedPick } from "@/types";
import Script from "next/script";
import { /* Copy, */ Share2 } from "lucide-react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const POISSON_API_BASE =
  process.env.POISSON_API_BASE || "http://localhost:8000";

const PremiumPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  // Check VIP subscription
  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user?.isSubscribed) {
    redirect("/user/subscribe");
  }

  // Safely read query param
  const leagueIdParam = (await searchParams)?.league_id;
  const leagueId =
    typeof leagueIdParam === "string"
      ? leagueIdParam
      : Array.isArray(leagueIdParam)
        ? leagueIdParam[0]
        : "140"; // Default to La Liga

  // ---- Fetch VIP picks from Poisson FastAPI (Option B backend) ----
  // GET /upcoming-matches-with-predictions?league_id=<id>
  let vipPicks: any[] = [];
  try {
    const url = new URL(
      `${POISSON_API_BASE}/upcoming-matches-with-predictions`
    );
    if (leagueId) url.searchParams.set("league_id", leagueId);

    const res = await fetch(url.toString(), {
      cache: "no-store",
      // headers: { Authorization: `Bearer ${process.env.POISSON_TOKEN}` },
    });

    if (!res.ok) {
      const t = await res.text().catch(() => "");
      throw new Error(`Upstream ${res.status}: ${t.slice(0, 200)}`);
    }

    const data = await res.json();
    vipPicks = Array.isArray(data?.matches) ? data.matches : [];
  } catch (e: any) {
    console.error(
      "[Premium] Failed to fetch Poisson upcoming matches:",
      e?.message
    );
    vipPicks = [];
  }

  // ---- Process data into your UI shape ----
  const processedPicks: ProcessedPick[] = vipPicks
    .map((match: any) => {
      if (!match?.prediction) {
        return {
          id: match?.fixture_id,
          date: match?.date,
          match: `${match?.home_team} vs ${match?.away_team}`,
          league: match?.league,
          prediction: "Analysis in progress",
          odds: "N/A",
          status: match?.status,
        } as ProcessedPick;
      }

      const homeProb = Number(match.prediction.home_win_prob) || 0;
      const drawProb = Number(match.prediction.draw_prob) || 0;
      const awayProb = Number(match.prediction.away_win_prob) || 0;

      let prediction = "";
      let odds: string = "0.00";

      if (homeProb >= drawProb && homeProb >= awayProb) {
        prediction = "Home Win";
        odds = homeProb > 0 ? (100 / homeProb).toFixed(2) : "0.00";
      } else if (awayProb >= homeProb && awayProb >= drawProb) {
        prediction = "Away Win";
        odds = awayProb > 0 ? (100 / awayProb).toFixed(2) : "0.00";
      } else {
        prediction = "Draw";
        odds = drawProb > 0 ? (100 / drawProb).toFixed(2) : "0.00";
      }

      return {
        id: match?.fixture_id,
        date: match?.date,
        match: `${match?.home_team} vs ${match?.away_team}`,
        league: match?.league,
        prediction,
        odds,
        status: match?.status,
        detailedPrediction: match?.prediction,
      } as ProcessedPick;
    })
    // Keep only not-started matches for VIP grid
    .filter((pick: any) => pick?.status === "NS");

  // Group picks by date (human-readable group)
  const groupedPicks: Record<string, ProcessedPick[]> = processedPicks.reduce(
    (groups, pick) => {
      const date = new Date(pick.date).toDateString();
      if (!groups[date]) groups[date] = [];
      groups[date].push(pick);
      return groups;
    },
    {} as Record<string, ProcessedPick[]>
  );

  return (
    <div className="min-h-screen bg-brb-dark text-white">
      {/* Tiny client-side script to power the copy buttons */}
      <Script id="copy-predictions-script" strategy="afterInteractive">
        {`
          (function () {
            function handleClick(e) {
              const btn = e.currentTarget;
              const text = btn?.getAttribute('data-copy-text') || '';
              if (!text) return;
              // Clipboard API with graceful fallback
              if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                  btn.dataset.copied = 'true';
                  const original = btn.innerText;
                  btn.innerText = 'Copied!';
                  setTimeout(() => {
                    btn.dataset.copied = 'false';
                    btn.innerText = original;
                  }, 1500);
                }).catch(() => {
                  fallbackCopy(text, btn);
                });
              } else {
                fallbackCopy(text, btn);
              }
            }
            function fallbackCopy(text, btn) {
              const ta = document.createElement('textarea');
              ta.value = text;
              ta.style.position = 'fixed';
              ta.style.top = '-9999px';
              document.body.appendChild(ta);
              ta.select();
              try { document.execCommand('copy'); } catch (err) {}
              document.body.removeChild(ta);
              btn.dataset.copied = 'true';
              const original = btn.innerText;
              btn.innerText = 'Copied!';
              setTimeout(() => {
                btn.dataset.copied = 'false';
                btn.innerText = original;
              }, 1500);
            }
            function bind() {
              document.querySelectorAll('[data-copy-text]').forEach((el) => {
                el.removeEventListener('click', handleClick);
                el.addEventListener('click', handleClick);
              });
            }
            // Initial and on navigation (Next.js SPA)
            bind();
            document.addEventListener('visibilitychange', bind);
          })();
        `}
      </Script>

      <LeagueSidebar mode="query" />

      <div className="md:ml-64 flex-1 overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-gray-900/80 to-yellow-900/20"></div>
          <div className="relative px-4 sm:px-6 py-8 sm:py-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-500/30 rounded-full px-4 sm:px-6 py-2 mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-green-400 font-medium text-xs sm:text-sm">
                    VIP MEMBER ACTIVE
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                    🔥 VIP Smart Picks
                  </span>
                </h1>
                <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                  Get exclusive access to premium betting picks for upcoming
                  matches. Enjoy smarter insights and make confident choices
                  with our VIP recommendations.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0">
                <div className="bg-gray-800/50 backdrop-blur border border-green-500/20 rounded-2xl p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
                    {processedPicks.length}
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base">
                    Upcoming Matches
                  </div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur border border-yellow-500/20 rounded-2xl p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
                    {processedPicks.length > 0
                      ? Math.max(
                        ...processedPicks.map(
                          (p) => parseFloat(p.odds as string) || 0
                        )
                      ).toFixed(2)
                      : "0.00"}
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base">
                    Highest Odds
                  </div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur border border-green-500/20 rounded-2xl p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
                    {processedPicks.length > 0
                      ? Math.min(
                        ...processedPicks.map(
                          (p) => parseFloat(p.odds as string) || 0
                        )
                      ).toFixed(2)
                      : "0.00"}
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base">
                    Lowest Odds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
          {processedPicks.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8 sm:p-12 max-w-md mx-auto">
                <div className="text-4xl sm:text-6xl mb-6">⏱️</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-4">
                  No Upcoming Matches
                </h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  Our system is analyzing the next set of fixtures. Premium
                  picks will be available soon!
                </p>
                <div className="inline-flex items-center gap-2 text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-medium">
                    Check back later for updates
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 sm:space-y-8">
              {Object.entries(groupedPicks).map(
                ([date, picks]: [string, ProcessedPick[]]) => (
                  <div key={date} className="space-y-4">
                    {/* Date Header */}
                    <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                      <div className="bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-500/30 rounded-full px-4 sm:px-6 py-2">
                        <span className="text-green-400 font-medium text-xs sm:text-sm">
                          {new Date(date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                    </div>

                    {/* Picks Grid */}
                    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                      {picks.map((pick, index) => {
                        const kickoffTime = new Date(pick.date).toLocaleTimeString(
                          "en-US",
                          { hour: "2-digit", minute: "2-digit" }
                        );

                        // Build a clean copy payload per pick
                        const home =
                          pick?.detailedPrediction?.home_win_prob ?? "—";
                        const draw =
                          pick?.detailedPrediction?.draw_prob ?? "—";
                        const away =
                          pick?.detailedPrediction?.away_win_prob ?? "—";

                        const copyPayload =
                          `BetBetter101 VIP Pick\n` +
                          `Match: ${pick.match}\n` +
                          `League: ${pick.league}\n` +
                          `Kickoff: ${new Date(pick.date).toLocaleString("en-US")}\n` +
                          `Prediction: ${pick.prediction} @ ${pick.odds}\n` +
                          `Probabilities: H ${home}% | D ${draw}% | A ${away}%\n` +
                          `#BetBetter101 #SmartPicks`;

                        return (
                          <div
                            key={pick.id}
                            className="group relative bg-gray-800/50 backdrop-blur border border-gray-700 hover:border-green-500/50 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                          >
                            {/* Pick Number Badge */}
                            <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm">
                              {index + 1}
                            </div>

                            {/* Match Info */}
                            <div className="mb-4">
                              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                                {pick.match}
                              </h3>
                              <div className="text-xs sm:text-sm text-gray-400 mb-2">
                                {pick.league}
                              </div>
                              <div className="flex items-center gap-2 mb-3">
                                <span className="bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-500/30 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-green-400">
                                  {pick.prediction}
                                </span>
                              </div>
                            </div>

                            {/* Odds Display */}
                            <div className="mb-4">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-400 text-xs sm:text-sm">
                                  Calculated Odds
                                </span>
                                <span className="text-xl sm:text-2xl font-bold text-yellow-400">
                                  {pick.odds}
                                </span>
                              </div>
                            </div>

                            {/* Probability Info */}
                            {pick.detailedPrediction && (
                              <div className="mb-4 space-y-2">
                                <div className="flex justify-between text-xs">
                                  <span className="text-gray-400">
                                    Home Win:
                                  </span>
                                  <span className="text-green-400">
                                    {pick.detailedPrediction.home_win_prob}%
                                  </span>
                                </div>
                                <div className="flex justify-between text-xs">
                                  <span className="text-gray-400">Draw:</span>
                                  <span className="text-yellow-400">
                                    {pick.detailedPrediction.draw_prob}%
                                  </span>
                                </div>
                                <div className="flex justify-between text-xs">
                                  <span className="text-gray-400">
                                    Away Win:
                                  </span>
                                  <span className="text-green-400">
                                    {pick.detailedPrediction.away_win_prob}%
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* Status + Copy */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span className="text-green-400 text-xs sm:text-sm font-medium">
                                  Upcoming Match
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-gray-500 text-xs">
                                  {kickoffTime}
                                </span>
                                {/* Copy Button */}
                                <button
                                  type="button"
                                  className="inline-flex items-center gap-1.5 rounded-md border border-green-500/40 bg-green-500/10 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-green-300 hover:bg-green-500/20 transition-colors"
                                  aria-label="Copy prediction"
                                  data-copy-text={copyPayload}
                                >
                                  <Share2 className="w-4 h-4" />
                                  <span>Share</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              )}
            </div>
          )}

          {/* Bottom CTA */}
          {processedPicks.length > 0 && (
            <div className="mt-12 sm:mt-16 text-center">
              <div className="bg-gradient-to-r from-green-500/10 to-yellow-500/10 border border-green-500/20 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                    How to Use These Predictions
                  </span>
                </h3>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  Our predictions are based on statistical analysis of team
                  performance. The odds shown are calculated from win
                  probabilities. Remember that all betting involves risk - use
                  these insights responsibly.
                </p>
                <div className="flex items-center justify-center gap-2 text-yellow-400">
                  <span className="text-base sm:text-lg">⚡</span>
                  <span className="font-medium text-sm sm:text-base">
                    Good luck with your bets!
                  </span>
                  <span className="text-base sm:text-lg">⚡</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;
