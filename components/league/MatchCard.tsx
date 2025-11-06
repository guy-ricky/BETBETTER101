/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import type { Fixture } from "@/types/football";
import ProbabilitiesBar from "./ProbabilitiesBar";

export default function MatchCard({
  fx,
  probs,
}: {
  fx: Fixture;
  probs?: { home: number; draw: number; away: number };
}) {
  const date = new Date(fx.date);
  const time = date.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const isFinal = fx.status === "FT";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>{time}</span>
        <span className="uppercase tracking-wide">{fx.status}</span>
      </div>

      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <TeamCell name={fx.home.name} logo={fx.home.logo} align="right" />
        <ScoreCell
          home={fx.home.goals}
          away={fx.away.goals}
          status={fx.status}
          isFinal={isFinal}
        />
        <TeamCell name={fx.away.name} logo={fx.away.logo} align="left" />
      </div>

      {fx.venue && (
        <p className="mt-2 text-xs text-gray-500">
          Venue: <span className="text-gray-300">{fx.venue}</span>
        </p>
      )}

      {/* probabilities strip */}
      {probs && fx.status !== "FT" && (
        <ProbabilitiesBar
          home={probs.home}
          draw={probs.draw}
          away={probs.away}
        />
      )}
    </div>
  );
}

function TeamCell({
  name,
  logo,
  align,
}: {
  name: string;
  logo?: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`flex items-center gap-2 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      {align === "right" && name && (
        <span className="text-sm text-gray-200">{name}</span>
      )}
      {logo && (
        <Image
          src={logo}
          alt={name}
          width={28}
          height={28}
          className="rounded"
        />
      )}
      {align === "left" && name && (
        <span className="text-sm text-gray-200">{name}</span>
      )}
    </div>
  );
}

function ScoreCell({
  home,
  away,
  status,
  isFinal,
}: {
  home: number | null;
  away: number | null;
  status: string;
  isFinal: boolean;
}) {
  const display = home != null && away != null ? `${home} - ${away}` : "vs";
  return (
    <div
      className={`min-w-[64px] text-center text-sm font-semibold rounded px-3 py-1
      ${
        isFinal
          ? "text-white bg-white/10"
          : "text-[#00FF66] border border-[#00FF66]/40"
      }`}
    >
      {display}
    </div>
  );
}
