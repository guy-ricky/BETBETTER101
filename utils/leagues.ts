// src/utils/leagues.ts

/**
 * Supported leagues with their API-Football IDs
 * Docs: https://www.api-football.com/documentation-v3
 *
 * You can extend this list as needed.
 */
export const LEAGUES = {
  epl: {
    id: 39,
    name: "Premier League",
  },
  laliga: {
    id: 140,
    name: "La Liga",
  },
  seriea: {
    id: 135,
    name: "Serie A",
  },
  bundesliga: {
    id: 78,
    name: "Bundesliga",
  },
  ligue1: {
    id: 61,
    name: "Ligue 1",
  },
  eredivisie: {
    id: 88,
    name: "Eredivisie",
  },
  champions: {
    id: 2,
    name: "Champions League",
  },
} as const;

export type LeagueSlug = keyof typeof LEAGUES;

/**
 * Convenience helper: get a league by slug safely
 */
export function getLeague(slug: LeagueSlug) {
  return LEAGUES[slug];
}

/**
 * Reverse lookup: get slug from API-Football league ID
 */
export function getLeagueSlugById(id: number): LeagueSlug | undefined {
  return Object.keys(LEAGUES).find(
    (slug) => LEAGUES[slug as LeagueSlug].id === id
  ) as LeagueSlug | undefined;
}
