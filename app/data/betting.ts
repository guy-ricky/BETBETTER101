export type EventResult = {
  id: string;
  title: string;
  url: string;
  league?: string;
  sport?: string;
  region?: string;
  kickoffISO?: string;
  bestPrice?: number;
  bookies?: string[];
};

export const regions = ["kenya", "uk", "usa"] as const;

export async function getAllQueryTags({ limit }: { limit?: number } = {}) {
  const tags = [
    "premier league",            // league-style
    "premier league btts",       // market text still fine
    "man city vs arsenal",       // h2h-style
    "la liga", "bundesliga",
  ];
  return limit ? tags.slice(0, limit) : tags;
}

// ✅ API-backed search (no DB)
export async function searchEvents(q: string, region: string): Promise<EventResult[]> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const url = `${base}/api/search?q=${encodeURIComponent(q)}&region=${encodeURIComponent(region)}`;
  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) return [];
  return res.json();
}

export function buildCanonicalFor(region: string, q: string) {
  return `/${encodeURIComponent(region)}/${encodeURIComponent(q)}`;
}
