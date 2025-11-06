import { ParamSlugProps } from "@/types";
import type { Metadata } from "next";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getMatch(slug: string) {
  // TODO: fetch from DB/API
  return {
    home: "Arsenal",
    away: "Chelsea",
    dateISO: "2025-10-28T19:00:00Z",
    leagueName: "Premier League",
    preview: "Stats-driven preview and Poisson-based prediction.",
    image: "/og-matches/arsenal-chelsea.jpg",
  } as const;
}

export async function generateMetadata({
  params,
}: {
  params: ParamSlugProps;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const m = await getMatch(slug);
  const title = `${m.home} vs ${m.away} Prediction (${new Date(
    m.dateISO
  ).toLocaleDateString()})`;
  return {
    title,
    description: m.preview,
    openGraph: {
      title,
      description: m.preview,
      images: [{ url: m.image, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://betbetter101.com/predictions/${slug}`,
    },
  };
}

export default async function MatchPage({
  params,
}: {
  params: ParamSlugProps;
}) {
  const slug = (await params).slug;
  const m = await getMatch(slug);
  const ld = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${m.home} vs ${m.away}`,
    startDate: m.dateISO,
    sport: "Soccer",
    location: { "@type": "Place", name: m.leagueName },
    url: `https://betbetter101.com/predictions/${slug}`,
    description: m.preview,
  } as const;

  return (
    <section className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          {m.home} <span className="text-[#00FF66]">vs</span> {m.away}
        </h1>
        <p className="text-sm text-gray-400">
          {new Date(m.dateISO).toUTCString()}
        </p>
      </div>
      <p className="mt-3 text-gray-300">{m.preview}</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { k: "Home Win", v: "41%" },
          { k: "Draw", v: "29%" },
          { k: "Away Win", v: "30%" },
        ].map((x) => (
          <div
            key={x.k}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <p className="text-gray-400 text-sm">{x.k}</p>
            <p className="text-xl font-semibold text-white">{x.v}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex gap-3">
        <Link
          href="/pricing"
          className="rounded-xl bg-[#00FF66] px-5 py-3 font-semibold text-black hover:brightness-95"
        >
          Unlock full card
        </Link>
        <Link
          href={`https://wa.me/?text=${encodeURIComponent(
            `Check this prediction: https://betbetter101.com/predictions/${slug}`
          )}`}
          className="rounded-xl border border-white/15 px-5 py-3 hover:border-white/30"
        >
          Share on WhatsApp
        </Link>
      </div>
    </section>
  );
}
