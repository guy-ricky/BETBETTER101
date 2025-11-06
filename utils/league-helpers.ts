import { LEAGUES } from "@/utils/leagues";

/**
 * Your LEAGUES sometimes comes as an array or a record.
 * Each entry tends to look like:
 *   { id?: number; leagueId?: number; slug?: string; name: string }
 * We normalize lookups across slug/id.
 */

type LeagueLike = {
  id?: number;
  leagueId?: number;
  slug?: string;
  name: string;
};

/** Build a normalized array for search-friendly lookups */
function asList(): LeagueLike[] {
  if (Array.isArray(LEAGUES)) return LEAGUES as LeagueLike[];
  return Object.values(LEAGUES as Record<string, LeagueLike>);
}

/**
 * getLeagueName
 * Accepts either a slug (string) or an id (number-like),
 * returns a nice display name, with a safe fallback.
 */
export function getLeagueName(
  leagueKey: string | number | null | undefined,
  fallback = "League"
): string {
  if (leagueKey == null) return fallback;

  const list = asList();

  // numeric id path
  const maybeId = Number(leagueKey);
  if (!Number.isNaN(maybeId) && String(maybeId) === String(leagueKey)) {
    const found = list.find((l) => (l.leagueId ?? l.id) === maybeId);
    return found?.name ?? fallback;
  }

  // string path: try slug match (case-insensitive)
  const key = String(leagueKey).toLowerCase();
  const found =
    list.find((l) => l.slug && l.slug.toLowerCase() === key) ||
    list.find((l) => l.name && l.name.toLowerCase() === key);
  return found?.name ?? fallback;
}

/**
 * getLeagueByName
 * Find the league object using a (case-insensitive) display name.
 * Useful if you get "Premier League" from UI and need ids/slugs.
 */
export function getLeagueByName(name: string): LeagueLike | null {
  if (!name) return null;
  const key = name.trim().toLowerCase();
  const found = asList().find((l) => l.name?.toLowerCase() === key);
  return found ?? null;
}
