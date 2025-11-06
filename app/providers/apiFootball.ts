/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE = "https://v3.football.api-sports.io";
const KEY = process.env.API_FOOTBALL_KEY!;

function qs(params: Record<string, any>) {
  const u = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => (v !== undefined && v !== null) && u.append(k, String(v)));
  return u.toString();
}

async function call(path: string, params: Record<string, any> = {}, revalidate = 300) {
  const url = `${BASE}/${path}?${qs(params)}`;
  const res = await fetch(url, {
    headers: { "x-apisports-key": KEY },
    next: { revalidate }, // Next caching layer
  });
  if (!res.ok) throw new Error(`API-FOOTBALL ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return json?.response ?? [];
}

// Basic helpers
export async function searchLeaguesByText(text: string) {
  return call("leagues", { search: text }, 86400); // 24h
}

export async function searchTeamsByText(text: string) {
  return call("teams", { search: text }, 86400);
}

export async function fixturesByLeague(leagueId: number, season: number, date?: string, timezone = "Africa/Nairobi") {
  return call("fixtures", { league: leagueId, season, date, timezone }, 900);
}

export async function fixturesH2H(homeTeamId: number, awayTeamId: number, last = 20, timezone = "Africa/Nairobi") {
  // h2h expects "homeId-awayId"
  return call("fixtures/headtohead", { h2h: `${homeTeamId}-${awayTeamId}`, last, timezone }, 900);
}

// Season helper (Europe-style)
export function currentSeason() {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = now.getUTCMonth() + 1;
  return m >= 7 ? y : y - 1;
}

// Slug + title utils
export function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
export function titleCase(s: string) {
  return s.replace(/\b\w/g, (m) => m.toUpperCase());
}
