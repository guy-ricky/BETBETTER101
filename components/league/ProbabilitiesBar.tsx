export default function ProbabilitiesBar({
  home,
  draw,
  away,
}: {
  home: number;
  draw: number;
  away: number;
}) {
  const pct = (x: number) => Math.round(x * 100);

  // Avoid zero-width slices
  const h = Math.max(2, pct(home));
  const d = Math.max(2, pct(draw));
  const a = Math.max(2, pct(away));
  const total = h + d + a;
  const hw = (h / total) * 100;
  const dw = (d / total) * 100;
  const aw = (a / total) * 100;

  return (
    <div className="mt-3">
      <div className="h-2 w-full rounded-full overflow-hidden bg-white/10 flex">
        <div className="h-full bg-emerald-500/60" style={{ width: `${hw}%` }} />
        <div className="h-full bg-yellow-500/60" style={{ width: `${dw}%` }} />
        <div className="h-full bg-red-500/60" style={{ width: `${aw}%` }} />
      </div>
      <div className="mt-1.5 flex justify-between text-[11px] text-gray-300">
        <span className="font-medium">Home {pct(home)}%</span>
        <span>Draw {pct(draw)}%</span>
        <span className="font-medium">Away {pct(away)}%</span>
      </div>
    </div>
  );
}
