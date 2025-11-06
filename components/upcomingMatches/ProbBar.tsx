import { Item } from "../UpcomingMatchPredictions";

const ProbBar = ({ probs }: { probs: Item["probs"] }) => {
  if (!probs) return null;
  const total = Math.max(1, probs.home + probs.draw + probs.away);
  const pct = {
    home: Math.round((probs.home / total) * 100),
    draw: Math.round((probs.draw / total) * 100),
    away: Math.round((probs.away / total) * 100),
  };

  return (
    <div className="mt-3">
      <div className="h-2.5 w-full rounded-full bg-[color:var(--gray-700)] overflow-hidden flex ring-1 ring-[color:var(--border)]">
        <div
          className="h-full bg-[color:var(--primary-green)] transition-[width] duration-500 ease-out"
          style={{ width: `${pct.home}%` }}
          title={`Home ${pct.home}%`}
        />
        <div
          className="h-full bg-amber-500 transition-[width] duration-500 ease-out"
          style={{ width: `${pct.draw}%` }}
          title={`Draw ${pct.draw}%`}
        />
        <div
          className="h-full bg-indigo-500 transition-[width] duration-500 ease-out"
          style={{ width: `${pct.away}%` }}
          title={`Away ${pct.away}%`}
        />
      </div>
      <div className="mt-1.5 text-[11px] text-white/70 flex gap-4">
        <span>H {pct.home}%</span>
        <span>D {pct.draw}%</span>
        <span>A {pct.away}%</span>
      </div>
    </div>
  );
};

export default ProbBar;
