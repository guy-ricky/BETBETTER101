/* eslint-disable @typescript-eslint/no-explicit-any */
export type FeedItem = {
  id: string;
  type: "event" | "injury" | "transfer" | "fixture" | "lineup" | "stat";
  title: string;
  subtitle?: string;
  when: string;
  league?: string;
  teams?: string;
  payload: any;
};

export type ApiResponse = { date: string; items: FeedItem[] } | { error: string };

export const TABS = [
  { key: "all", label: "All", count: 0 },
  { key: "fixture", label: "Fixtures", count: 0 },
  { key: "event", label: "Events", count: 0 },
  { key: "injury", label: "Injuries", count: 0 },
  { key: "transfer", label: "Transfers", count: 0 },
  { key: "lineup", label: "Lineups", count: 0 },
  { key: "stat", label: "Stats", count: 0 },
] as const;

export type TabKey = (typeof TABS)[number]["key"];