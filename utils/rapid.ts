/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = "https://v3.football.api-sports.io";
const API_KEY =
  process.env.APISPORTS_KEY ||
  process.env.API_FOOTBALL_KEY ||
  process.env.NEXT_PUBLIC_API_FOOTBALL_KEY!;

/**
 * Generic fetcher for API-SPORTS (direct, not RapidAPI).
 */
async function apiSports(
  path: string,
  params: Record<string, any> = {}
): Promise<any> {
  const url = new URL(`${BASE_URL}/${path}`);
  Object.entries(params).forEach(([k, v]) =>
    url.searchParams.set(k, String(v))
  );

  const res = await fetch(url.toString(), {
    headers: {
      "x-apisports-key": API_KEY,
    },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `API-SPORTS error ${res.status} ${res.statusText}: ${body.slice(0, 150)}`
    );
  }
  return res.json();
}

/**
 * Fetch a single fixture by its ID.
 */
export async function fetchFixtureById(fixtureId: number) {
  const json = await apiSports("fixtures", { id: fixtureId });
  return json?.response?.[0];
}

/**
 * Fetch fixtures by date & league (optionally include season).
 */
export async function fetchFixturesByDateLeague(
  dateISO: string,
  leagueId: number,
  season?: number,
  timezone = "Africa/Nairobi"
) {
  const json = await apiSports("fixtures", {
    date: dateISO,
    league: leagueId,
    season,
    timezone,
  });
  return json?.response || [];
}
