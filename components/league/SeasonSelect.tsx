"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useMemo } from "react";

export default function SeasonSelect({
  seasons,
  value,
}: {
  seasons: number[];
  value: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // Ensure seasons start from 2025 by default, sorted DESC, unique
  const normalizedSeasons = useMemo(() => {
    const MIN_START = 2025; // default starting season
    const merged = Array.from(new Set([...seasons, MIN_START]));
    return merged.sort((a, b) => b - a);
  }, [seasons]);

  const latestSeason = normalizedSeasons[0] ?? 2025;
  // If incoming value isn't in list or is older than 2025, default to latest (>=2025)
  const currentSeason =
    value && normalizedSeasons.includes(value) && value >= 2025
      ? value
      : latestSeason;

  function onChange(season: number) {
    const next = new URLSearchParams(sp.toString());
    next.set("season", season.toString());
    // reset team filter when season changes
    next.delete("team");
    router.replace(`${pathname}?${next.toString()}`);
    setIsOpen(false);
  }

  return (
    <div className="relative min-w-[200px] z-10">
      {/* Season Label */}
      <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
        <svg
          className="w-4 h-4 text-[#00FF66]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="opacity-75">Select Season</span>
      </div>

      {/* Custom Select */}
      <div className="relative">
        {/* Selected Value Display */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full bg-white/[0.06] border border-white/10 hover:border-[#00FF66]/50 rounded-xl px-4 py-3 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00FF66]/20 focus:border-[#00FF66]"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00FF66] rounded-full animate-pulse" />
            <span className="font-semibold">{currentSeason}</span>
          </div>
          <svg
            className={`w-5 h-5 text-[#00FF66] transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#0f0f0f] border border-white/10 rounded-xl shadow-2xl shadow-black/50 z-50 overflow-hidden">
            {/* Season Options */}
            <div className="max-h-60 overflow-y-auto">
              {normalizedSeasons.map((season) => (
                <button
                  key={season}
                  onClick={() => onChange(season)}
                  className={`flex items-center w-full px-4 py-3 text-left transition-all duration-200 hover:bg-[#00FF66]/10 border-b border-white/10 last:border-b-0 ${
                    currentSeason === season
                      ? "bg-[#00FF66]/15 text-[#00FF66] font-semibold"
                      : "text-white hover:text-[#00FF66]"
                  }`}
                  role="option"
                  aria-selected={currentSeason === season}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#00FF66]/50 flex items-center justify-center">
                      {currentSeason === season && (
                        <div className="w-2 h-2 bg-[#00FF66] rounded-full" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{season}</span>
                      {season === latestSeason && (
                        <span className="px-2 py-1 bg-[#00FF66]/15 text-[#00FF66] text-xs rounded-full font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Season Info */}
            <div className="border-t border-white/10 p-3 bg-gradient-to-r from-[#00FF66]/5 to-transparent">
              <p className="text-xs text-gray-400 text-center">
                Changing season will reset team filters
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
