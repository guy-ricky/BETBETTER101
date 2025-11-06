import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Predictions",
  description: "All upcoming football predictions and value picks.",
  alternates: { canonical: "https://betbetter101.com/predictions" },
};

export default function PredictionsIndex() {
  const items = [
    "arsenal-vs-chelsea",
    "barcelona-vs-sevilla",
    "napoli-vs-inter",
  ];
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-8">
      <h1 className="text-3xl font-bold text-white">Predictions</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((slug) => (
          <a
            key={slug}
            href={`/predictions/${slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-[#00FF66]/40"
          >
            <p className="font-semibold text-white capitalize">
              {slug.replace(/-/g, " ")}
            </p>
            <p className="text-sm text-gray-400">Poisson preview • Today</p>
          </a>
        ))}
      </div>
    </section>
  );
}
