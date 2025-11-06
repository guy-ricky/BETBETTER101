"use client";

import { cache } from "react";
import Script from "next/script";

import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import {
  getAllQueryTags, // e.g., ["premier-league-btts","over-2-5","man-city-vs-arsenal-odds"]
  regions,          // e.g., ["kenya","uk","usa"]
  searchEvents,     // (q, region) => Promise<EventResult[]>
} from "../../data/betting";
import { toTitle, deSlug } from "@/lib/strings";
import { buildItemListJsonLd } from "@/lib/seo";

// Revalidate every 6 hours
export const revalidate = 21600;

// --- Pre-generate a subset of routes at build time ---
export async function generateStaticParams() {
  const tags = await getAllQueryTags({});
  return tags.flatMap((tag) => regions.map((region) => ({ region, q: tag })));
}

// Cache to avoid duplicate fetches in one render
const getResults = cache(searchEvents);

// --- Dynamic SEO metadata ---
export async function generateMetadata({ params }) {
  const { q, region } = params;

  const query = decodeURIComponent(q);
  const location = decodeURIComponent(region);
  const year = new Date().getFullYear();

  const title = `${query.toUpperCase()} Odds, Predictions & Stats (${location.toUpperCase()} ${year}) | BetBetter101`;
  const description = `Compare live ${query} odds, stats, and predictions for top football matches in ${location}. Updated ${year}.`;
  const canonical = `${process.env.NEXT_PUBLIC_SITE_URL}/${region}/${q}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "BetBetter101",
      locale: "en_KE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@BetBetter101",
    },
  };
}

// --- Main Page Component ---
export default async function Page({ params }) {
  const { q, region } = params;

  const qDecoded = decodeURIComponent(q);
  const regionDecoded = decodeURIComponent(region);

  const results = await getResults(qDecoded, regionDecoded);

  const niceQ = toTitle(deSlug(qDecoded));
  const niceRegion = toTitle(deSlug(regionDecoded));
  const canonical = `${process.env.NEXT_PUBLIC_SITE_URL}/${regionDecoded}/${qDecoded}`;

  const first = results[0];

  // ---- JSON-LD Structured Data ----
  const sportsEventJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: first?.title || `${niceQ} Betting Odds`,
    sport: "Football",
    location: {
      "@type": "Place",
      name: niceRegion,
      address: niceRegion,
    },
    startDate: first?.kickoffISO || new Date().toISOString(),
    url: canonical,
    organizer: {
      "@type": "Organization",
      name: "BetBetter101",
      url: "https://www.betbetter101.com",
    },
  });

  const faqJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What does ${niceQ.toUpperCase()} mean in betting?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${niceQ.toUpperCase()} is a betting market where odds are compared for ${niceQ} outcomes.`,
        },
      },
      {
        "@type": "Question",
        name: `Where can I find ${niceQ} odds in ${niceRegion}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can view updated ${niceQ} odds, predictions, and match stats on BetBetter101 — updated daily for ${niceRegion}.`,
        },
      },
    ],
  });

  const breadcrumbJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.betbetter101.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Football Odds",
        item: "https://www.betbetter101.com/odds/football",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: niceQ,
        item: canonical,
      },
    ],
  });

  const itemListJson = buildItemListJsonLd({
    name: `${niceQ} in ${niceRegion}`,
    urlBase: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.betbetter101.com",
    items: results.map((r, idx) => ({
      position: idx + 1,
      name: r.title,
      url: r.url,
    })),
  });

  return (
    <div>
      <Header q={niceQ} region={niceRegion} />

      <main className="container mx-auto space-y-8 px-4 py-8">
        <h1 className="text-center text-3xl font-bold">
          Top {results.length} {niceQ} in {niceRegion}
        </h1>

        <p className="mx-auto max-w-3xl text-center text-sm text-muted-foreground">
          Explore real-time odds, implied probabilities, and expert analysis.
          Use filters to switch markets (1X2, Over/Under, BTTS) and compare
          bookmakers.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((ev) => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
        
      </main>

      {/* ---- Structured Data Scripts ---- */}
      <Script id="sportsEventJson" type="application/ld+json" dangerouslySetInnerHTML={{ __html: sportsEventJson }} />
      <Script id="faqJson" type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJson }} />
      <Script id="breadcrumbJson" type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJson }} />
      <Script id="itemListJson" type="application/ld+json" dangerouslySetInnerHTML={{ __html: itemListJson }} />
    </div>
  );
}
