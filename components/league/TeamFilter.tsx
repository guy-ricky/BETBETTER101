"use client";

import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";

type Team = { id: number; name: string; logo?: string };

export default function TeamFilter({
  teams,
  value,
}: {
  teams: Team[];
  value?: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  function onChange(teamId: number | null) {
    const next = new URLSearchParams(sp.toString());
    if (teamId) {
      next.set("team", teamId.toString());
    } else {
      next.delete("team");
    }
    router.replace(`${pathname}?${next.toString()}`);
    setIsOpen(false);
  }

  const selectedTeam = teams.find((t) => t.id === value);

  return (
    <div className="relative min-w-56">
      {/* Filter Label */}
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
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
          />
        </svg>
        <span className="opacity-75">Filter by Team</span>
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
          <span className={selectedTeam ? "text-white" : "text-gray-400"}>
            {selectedTeam ? selectedTeam.name : "All teams"}
          </span>
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
            {/* All Teams Option */}
            <button
              onClick={() => onChange(null)}
              className={`flex items-center w-full px-4 py-3 text-left transition-all duration-200 hover:bg-[#00FF66]/10 border-b border-white/10 ${
                !selectedTeam
                  ? "bg-[#00FF66]/15 text-[#00FF66]"
                  : "text-white hover:text-[#00FF66]"
              }`}
              role="option"
              aria-selected={!selectedTeam}
            >
              <div className="w-6 h-6 rounded-full border-2 border-[#00FF66]/50 flex items-center justify-center mr-3">
                {!selectedTeam && (
                  <div className="w-2 h-2 bg-[#00FF66] rounded-full" />
                )}
              </div>
              <span>All teams</span>
            </button>

            {/* Team Options */}
            <div className="max-h-60 overflow-y-auto">
              {teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => onChange(team.id)}
                  className={`flex items-center w-full px-4 py-3 text-left transition-all duration-200 hover:bg-[#00FF66]/10 ${
                    selectedTeam?.id === team.id
                      ? "bg-[#00FF66]/15 text-[#00FF66]"
                      : "text-white hover:text-[#00FF66]"
                  }`}
                  role="option"
                  aria-selected={selectedTeam?.id === team.id}
                >
                  <div className="w-6 h-6 rounded-full border-2 border-[#00FF66]/50 flex items-center justify-center mr-3">
                    {selectedTeam?.id === team.id && (
                      <div className="w-2 h-2 bg-[#00FF66] rounded-full" />
                    )}
                  </div>
                  {team.logo && (
                    <div className="w-6 h-6 relative mr-3">
                      <Image
                        src={team.logo}
                        alt={team.name}
                        fill
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <span>{team.name}</span>
                </button>
              ))}
            </div>

            {/* Clear Filter */}
            {selectedTeam && (
              <div className="border-t border-white/10 p-2">
                <button
                  onClick={() => onChange(null)}
                  className="w-full text-center py-2 text-sm text-gray-400 hover:text-[#00FF66] transition-colors duration-200"
                >
                  Clear filter
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Selected Team Badge */}
      {selectedTeam && (
        <div className="flex items-center gap-2 mt-3 p-2 bg-[#00FF66]/10 border border-[#00FF66]/20 rounded-lg">
          <div className="w-2 h-2 bg-[#00FF66] rounded-full animate-pulse" />
          <span className="text-sm text-[#00FF66] font-medium">
            Showing: {selectedTeam.name}
          </span>
          <button
            onClick={() => onChange(null)}
            className="ml-auto text-[#00FF66] hover:text-emerald-400 transition-colors duration-200"
            aria-label="Clear team filter"
            title="Clear team filter"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
      )}

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
