/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  RefreshCw,
  Search,
  X,
  ChevronDown,
  Filter,
} from "lucide-react";
import type { FeedItem, TabKey, ApiResponse } from "../types/footballFeed";
import { TABS } from "../types/footballFeed";
import Card from "./footballFeed/Card";
import DetailsModal from "./footballFeed/DetailsModal";

/** ---------- Enhanced Main Feed ---------- */
export default function FootballNewsFeed({
  initial,
  refreshMs = 600_000,
}: {
  initial?: ApiResponse;
  refreshMs?: number;
}) {
  const [data, setData] = useState<ApiResponse | null>(initial ?? null);
  const [loading, setLoading] = useState(!initial);
  const [err, setErr] = useState<string | null>(null);

  const [tab, setTab] = useState<TabKey>("all");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<FeedItem | null>(null);
  const [reloading, setReloading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const load = async () => {
    try {
      setErr(null);
      if (!data) setLoading(true);
      setReloading(true);
      const res = await fetch("/api/football/feed", { cache: "no-store" });
      const json: ApiResponse = await res.json();
      if (!res.ok) throw new Error((json as any)?.error || "Failed to load");
      setData(json);
    } catch (e: any) {
      setErr(e?.message || "Failed to load");
    } finally {
      setLoading(false);
      setReloading(false);
    }
  };

  useEffect(() => {
    if (!initial) load();
    const id = setInterval(load, refreshMs);
    return () => clearInterval(id);
  }, []);

  const items = (data as any)?.items as FeedItem[] | undefined;

  const filtered = useMemo(() => {
    if (!items) return [];
    let list = items;
    if (tab !== "all") list = list.filter((x) => x.type === tab);
    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter(
        (x) =>
          x.title.toLowerCase().includes(s) ||
          (x.subtitle?.toLowerCase().includes(s) ?? false) ||
          (x.league?.toLowerCase().includes(s) ?? false) ||
          (x.teams?.toLowerCase().includes(s) ?? false)
      );
    }
    return list;
  }, [items, tab, q]);

  // Calculate counts for tabs
  const tabCounts = useMemo(() => {
    if (!items) return {};
    return {
      all: items.length,
      fixture: items.filter((x) => x.type === "fixture").length,
      event: items.filter((x) => x.type === "event").length,
      injury: items.filter((x) => x.type === "injury").length,
      transfer: items.filter((x) => x.type === "transfer").length,
      lineup: items.filter((x) => x.type === "lineup").length,
      stat: items.filter((x) => x.type === "stat").length,
    };
  }, [items]);

  return (
    <div className="space-y-8">
      {/* Enhanced Controls */}
      <div className="space-y-4">
        {/* Search and Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          {/* Search Input */}
          <div className="relative flex-1 group">
            <Search className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-white group-focus-within:text-[#00FF66] transition-colors duration-200" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search leagues, teams, players, events..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-[#2a2a2a] text-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-[#00FF66] focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Filter Toggle for Mobile */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-[#2a2a2a] bg-gradient-to-br from-[#121212] to-[#0a0a0a] text-gray-200 hover:bg-[#1b1b1b] transition-all duration-300"
          >
            <Filter className="h-5 w-5" />
            Filters
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                showFilters ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Refresh Button */}
          <button
            onClick={load}
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-[#2a2a2a] bg-gradient-to-br from-[#121212] to-[#0a0a0a] text-gray-200 hover:bg-[#1b1b1b] hover:border-[#00FF66]/30 transition-all duration-300 group/refresh"
            title="Refresh"
          >
            <RefreshCw
              className={`h-5 w-5 ${
                reloading
                  ? "animate-spin"
                  : "group-hover/refresh:rotate-180 transition-transform duration-500"
              }`}
            />
            <span className="text-sm font-medium">Refresh</span>
          </button>
        </div>

        {/* Enhanced Tabs */}
        <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
          <div className="flex gap-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-2 overflow-x-auto">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`relative px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 group ${
                  tab === t.key
                    ? "text-[#111] font-bold"
                    : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"
                }`}
              >
                {tab === t.key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00FF66] to-[#FFD700] rounded-xl" />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {t.label}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      tab === t.key
                        ? "bg-[#111] text-white"
                        : "bg-[#1a1a1a] text-gray-400"
                    }`}
                  >
                    {tabCounts[t.key] || 0}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Loading States */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-3xl border border-[#2a2a2a] bg-gradient-to-br from-[#151515] to-[#0f0f0f] p-6 animate-pulse"
            >
              <div className="h-6 w-32 bg-[#1f1f1f] rounded-full mb-4" />
              <div className="h-6 w-4/5 bg-[#1d1d1d] rounded mb-3" />
              <div className="h-4 w-2/3 bg-[#1a1a1a] rounded mb-4" />
              <div className="h-4 w-24 bg-[#1a1a1a] rounded" />
            </div>
          ))}
        </div>
      )}

      {/* Enhanced Error State */}
      {err && !loading && (
        <div className="flex items-center gap-3 text-red-300 bg-gradient-to-br from-[#1a1212] to-[#251515] border border-red-500/30 p-4 rounded-2xl backdrop-blur-sm">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <div>
            <span className="text-sm font-medium">Failed to load</span>
            <p className="text-xs text-red-400/80 mt-1">{err}</p>
          </div>
        </div>
      )}

      {/* Enhanced Results */}
      {!loading && !err && (
        <>
          {filtered.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl flex items-center justify-center border border-[#2a2a2a]">
                <Search className="h-10 w-10 text-gray-600" />
              </div>
              <p className="text-gray-400 text-lg font-medium">
                No items match your filters
              </p>
              <p className="text-gray-500 text-sm">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((it) => (
                <Card key={it.id} item={it} onOpen={setOpen} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Enhanced Details Modal */}
      <DetailsModal open={open} onClose={() => setOpen(null)} />
    </div>
  );
};