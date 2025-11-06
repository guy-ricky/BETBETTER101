// lib/apiFootball.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = "https://v3.football.api-sports.io";
const API_KEY =
  process.env.APISPORTS_KEY ||
  process.env.API_FOOTBALL_KEY ||
  process.env.NEXT_PUBLIC_API_FOOTBALL_KEY!;

export async function apiSports(
  path: string,
  params: Record<string, any> = {},
  revalidateSeconds = 300
): Promise<any> {
  const url = new URL(`${BASE_URL}/${path}`);

  // ✅ Only set params that are not null/undefined
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) {
      url.searchParams.set(k, String(v));
    }
  });

  const res = await fetch(url.toString(), {
    headers: { "x-apisports-key": API_KEY },
    next: { revalidate: revalidateSeconds },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `API-SPORTS error ${res.status} ${res.statusText}: ${body.slice(0, 180)}`
    );
  }
  const json = await res.json();
  return json?.response ?? [];
}
