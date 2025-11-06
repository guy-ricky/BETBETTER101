const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="relative rounded-[var(--radius-xl)] p-[1px] bg-gradient-to-br from-[rgba(0,255,102,0.25)] via-[rgba(255,215,0,0.18)] to-[rgba(0,255,102,0.25)]"
      >
        <div className="rounded-[calc(var(--radius-xl)-1px)] bg-[color:var(--card)]/70 backdrop-blur-md border border-[color:var(--border)] p-4 animate-pulse-slow">
          <div className="h-3 w-24 bg-white/10 rounded mb-3" />
          <div className="h-5 w-44 bg-white/10 rounded mb-2" />
          <div className="h-5 w-40 bg-white/10 rounded mb-4" />
          <div className="h-2.5 w-full bg-white/10 rounded" />
        </div>
      </div>
    ))}
  </div>
);

export default LoadingSkeleton