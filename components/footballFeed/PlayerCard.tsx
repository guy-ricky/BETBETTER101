/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const PlayerCard = ({
  player,
  isGK = false,
}: {
  player: any;
  isGK?: boolean;
}) => {
  const rawName: string = player?.player?.name || "—";
  const number = player?.player?.number;
  const pos = player?.player?.pos || player?.player?.position;

  // Prefer last name if available (e.g., "Bukayo Saka" -> "Saka")
  const parts = String(rawName).trim().split(/\s+/).filter(Boolean);
  const displayName = parts.length > 1 ? parts[parts.length - 1] : rawName;

  const kitClasses = isGK
    ? "bg-yellow-500/20 border-yellow-500 text-yellow-400"
    : "bg-[#00FF66]/20 border-[#00FF66] text-[#00FF66]";

  return (
    <div
      className="
        flex flex-col items-center
        gap-1.5 sm:gap-2
        w-14 sm:w-16 md:w-20
      "
      title={rawName} // show full name on hover
      aria-label={`${rawName || "Unknown player"} ${pos ? `(${pos})` : ""}`}
    >
      <div
        className={`
          rounded-full flex items-center justify-center font-bold border-2
          ${kitClasses}
          w-10 h-10 text-sm
          sm:w-12 sm:h-12 sm:text-base
          md:w-14 md:h-14 md:text-lg
        `}
        aria-label={`Shirt number ${number ?? "unknown"}`}
      >
        {number ?? "?"}
      </div>

      <div className="text-center w-full">
        <p
          className="
            font-semibold text-gray-200 truncate
            text-[10px] sm:text-xs md:text-sm
            max-w-full
          "
        >
          {displayName || "—"}
        </p>
        <p
          className="
            text-gray-500
            text-[9px] sm:text-[10px] md:text-xs
            leading-tight
          "
        >
          {pos ?? "—"}
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;