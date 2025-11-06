import { formatWhen } from "@/utils/constants";
import SmallChip from "./SmallChip";
import TypeBadge from "./TypeBadge";
import { useState } from "react";
import { FeedItem } from "@/types/footballFeed";

export default /** ---------- Enhanced Card ---------- */
function Card({
  item,
  onOpen,
}: {
  item: FeedItem;
  onOpen: (i: FeedItem) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-3xl border border-[#2a2a2a] bg-gradient-to-br from-[#151515] to-[#0f0f0f] p-6 transition-all duration-500 hover:scale-[1.02] hover:border-[#333] cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpen(item)}
    >
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#00FF66]/5 to-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00FF66]/10 to-[#FFD700]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-4">
          <TypeBadge type={item.type} />
          <span className="text-xs text-gray-400 font-medium bg-[#1a1a1a] px-2 py-1 rounded-lg border border-[#2a2a2a]">
            {formatWhen(item.when)}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00FF66] group-hover:to-[#FFD700] transition-all duration-300">
          {item.title}
        </h3>

        {item.subtitle && (
          <p className="text-gray-400 mb-4 leading-relaxed line-clamp-2">
            {item.subtitle}
          </p>
        )}

        {(item.league || item.teams) && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {item.league && (
              <SmallChip variant="green">{item.league}</SmallChip>
            )}
            {item.teams && <SmallChip variant="gold">{item.teams}</SmallChip>}
          </div>
        )}

        <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[#00FF66] hover:text-[#FFD700] transition-all duration-300 hover:gap-3">
          View details
          <div className="group-hover/btn:translate-x-1 transition-transform duration-300">
            →
          </div>
        </button>
      </div>
    </div>
  );
}