// Server Component
import FootballNewsFeed from "@/components/FootballNewsFeed";

export const dynamic = "force-dynamic"; // don't cache; we want fresh data

export default async function Page() {
  // Initial server-side fetch for instant content (SEO + fast first paint)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/football/feed`,
    {
      cache: "no-store",
      // In Vercel, absolute URL is safest. Fallback to relative if BASE_URL not set:
      next: { revalidate: 0 },
    }
  ).catch(() => null);

  let initial = null;
  try {
    if (res && res.ok) {
      initial = await res.json();
    }
  } catch {
    // ignore SSR errors; client will hydrate and fetch
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Football Feed
        </h1>
        <p className="text-gray-400 mt-1">
          Live events, fixtures, injuries, and transfers (auto-refreshes every
          minute).
        </p>
      </div>

      {/* Client component handles refreshing & interactions */}
      <FootballNewsFeed initial={initial ?? undefined} refreshMs={60_000} />
    </main>
  );
}
