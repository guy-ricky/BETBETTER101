/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";
import { LEAGUES } from "@/utils/constants";

/**
 * Universal League Sidebar
 * - mode="query": navigates by setting ?league_id=...
 * - mode="slug":  navigates to /league/{slug} and preserves current query (season/team)
 *
 * Usage:
 *   // On /league/[slug] page
 *   <LeagueSidebar mode="slug" activeSlug={slug} className="lg:sticky lg:top-6" />
 *
 *   // On /premium page
 *   <LeagueSidebar mode="query" />
 */
export default function LeagueSidebar({
  mode = "slug",
  activeSlug,
  className = "",
}: {
  mode?: "query" | "slug";
  activeSlug?: string; // required for mode="slug" to highlight active
  className?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sort leagues by optional "order"
  const leagues = useMemo(
    () => [...LEAGUES].sort((a, b) => (a.order ?? 999) - (b.order ?? 999)),
    []
  );

  // Fallback mapping leagueId -> slug if your LEAGUES items don’t include a slug
  const leagueIdToSlug: Record<number, string> = {
    39: "premier-league",
    140: "la-liga",
    135: "serie-a",
    78: "bundesliga",
    61: "ligue-1",
    88: "eredivisie",
    2: "uefa-champions-league",
  };

  // Prefer slug in the constant if present, otherwise use our mapping
  const getSlug = (league: any) =>
    league.slug || leagueIdToSlug[Number(league.leagueId)];

  // Active detection
  const currentLeagueIdParam = searchParams?.get("league_id") || "140";
  const isActive = (league: any) => {
    if (mode === "query")
      return String(league.leagueId) === String(currentLeagueIdParam);
    const s = getSlug(league);
    return s && (activeSlug === s || pathname === `/league/${s}`);
  };

  // Build href for slug mode (preserve season/team in query)
  const buildSlugHref = (league: any) => {
    const s = getSlug(league);
    if (!s) return "#";
    const preserved = new URLSearchParams(searchParams.toString());
    return preserved.toString() ? `/league/${s}?${preserved}` : `/league/${s}`;
  };

  const handleLeagueChange = (league: any) => {
    if (mode === "query") {
      const params = new URLSearchParams(searchParams?.toString() || "");
      params.set("league_id", String(league.leagueId));
      router.push(`?${params.toString()}`);
    } else {
      const href = buildSlugHref(league);
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  };

  const currentLeague =
    mode === "query"
      ? leagues.find((l) => String(l.leagueId) === String(currentLeagueIdParam))
      : leagues.find((l) => getSlug(l) === activeSlug);

  // Shared item UI
  const LeagueButton = ({ league }: { league: any }) => {
    const active = isActive(league);
    return (
      <button
        onClick={() => handleLeagueChange(league)}
        className={`w-full text-left p-3 rounded-lg flex items-center space-x-3 transition-colors ${
          active
            ? "bg-green-900/30 border border-green-500/30"
            : "hover:bg-gray-800/50"
        }`}
      >
        <Image
          src={league.logo || "/default-league.png"}
          alt={league.name}
          className="w-6 h-6 object-contain"
          width={24}
          height={24}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/default-league.png";
          }}
        />
        <span className="text-sm font-medium text-gray-300 truncate">
          {league.name}
        </span>
        {league.country !== "World" && league.countryFlag && (
          <Image
            src={league.countryFlag}
            alt={league.country}
            className="w-5 h-5 ml-auto rounded-full object-cover"
            width={20}
            height={20}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/default-flag.png";
            }}
          />
        )}
      </button>
    );
  };

  return (
    <>
      {/* Mobile Selector */}
      <div className="md:hidden sticky top-0 z-30 bg-[#0d0d0d] border-b border-gray-800">
        <button
          onClick={() => setIsMobileMenuOpen((s) => !s)}
          className="w-full flex items-center justify-between p-4 text-left"
        >
          <div className="flex items-center space-x-3">
            {currentLeague && (
              <Image
                src={currentLeague.logo || "/default-league.png"}
                alt={currentLeague.name || "League logo"}
                className="w-6 h-6 object-contain"
                width={24}
                height={24}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/default-league.png";
                }}
              />
            )}
            <span className="text-sm font-medium text-gray-300 truncate">
              {currentLeague?.name || "Select League"}
            </span>
          </div>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isMobileMenuOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/70 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0d0d0d] p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-green-400">
                  Select League
                </h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-2">
                {leagues.map((league) => (
                  <div key={league.leagueId} className="w-full">
                    <LeagueButton league={league} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Sidebar (non-fixed so it can sit inside your grid on /league/[slug]) */}
      <aside
        className={`hidden md:block rounded-2xl border border-white/10 bg-white/[0.04] p-4 ${className}`}
      >
        <div className="mb-3">
          <h3 className="text-sm font-semibold text-gray-200">Leagues</h3>
          <p className="text-xs text-gray-500">Top 6 + UCL</p>
        </div>
        <div className="space-y-1">
          {leagues.map((league) => (
            <div key={league.leagueId}>
              <LeagueButton league={league} />
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
