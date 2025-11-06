export default function AffiliateCardSkeleton() {
  return (
    <div className="bg-[#151515] p-6 rounded-2xl border border-[#2a2a2a] shadow-lg backdrop-blur-sm lg:col-span-3">
      <div className="animate-pulse space-y-4">
        <div className="h-6 w-56 bg-[#1e1e1e] rounded" />
        <div className="h-4 w-80 bg-[#1b1b1b] rounded" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-20 bg-[#111] rounded-xl border border-[#2a2a2a]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
