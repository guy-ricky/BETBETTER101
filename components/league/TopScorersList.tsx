import Image from "next/image";
import type { Scorer } from "@/types/football";
import EmptyState from "./EmptyState";

export default function TopScorersList({ players }: { players: Scorer[] }) {
  if (!players?.length) return <EmptyState text="Top scorers unavailable." />;

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      <div className="grid grid-cols-[48px_1fr_80px_80px] gap-3 px-4 py-3 bg-white/5 text-xs text-gray-300">
        <span>#</span>
        <span>Player</span>
        <span className="text-right">Goals</span>
        <span className="text-right">Assists</span>
      </div>

      <ul className="divide-y divide-white/5">
        {players.map((p, i) => (
          <li
            key={p.playerId}
            className="grid grid-cols-[48px_1fr_80px_80px] gap-3 px-4 py-3 items-center"
          >
            <span className="text-gray-400">{i + 1}</span>
            <div className="flex items-center gap-2">
              {p.photo && (
                <Image
                  src={p.photo}
                  alt={p.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="text-gray-200 text-sm">{p.name}</p>
                <p className="text-xs text-gray-500">{p.team}</p>
              </div>
            </div>
            <span className="text-right text-[#00FF66] font-semibold">
              {p.goals}
            </span>
            <span className="text-right text-gray-300">{p.assists ?? 0}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
