export default function Loading() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-8">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-64 bg-white/10 rounded" />
        <div className="h-4 w-80 bg-white/10 rounded" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-20 rounded-2xl bg-white/5" />
          ))}
        </div>
        <div className="h-10 w-40 bg-white/10 rounded" />
        <div className="h-64 rounded-2xl bg-white/5" />
      </div>
    </section>
  );
}
