"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Ticket, TicketWithMessages } from "@/types";
import {
  STATUS_OPTIONS,
  PRIORITY_OPTIONS,
  CATEGORY_OPTIONS,
} from "@/utils/constants";

export default function AdminTicketsManager() {
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState<TicketWithMessages[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Filters
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("ALL");
  const [priority, setPriority] = useState<string>("ALL");
  const [category, setCategory] = useState<string>("ALL");

  // Edit controls (per-ticket)
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [replyBody, setReplyBody] = useState<string>("");

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/tickets?all=1", { cache: "no-store" });
      if (!res.ok) {
        throw new Error(await res.text());
      }
      const data: TicketWithMessages[] = await res.json();
      setTickets(data || []);
    } catch (err) {
      console.error("Failed to fetch tickets:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const norm = (s: string) => s.toLowerCase();
    return tickets.filter((t) => {
      const matchesQ =
        !q ||
        norm(t.subject).includes(norm(q)) ||
        t.messages?.some((m) => norm(m.body).includes(norm(q)));
      const matchesStatus = status === "ALL" || t.status === status;
      const matchesPriority = priority === "ALL" || t.priority === priority;
      const matchesCategory = category === "ALL" || t.category === category;
      return matchesQ && matchesStatus && matchesPriority && matchesCategory;
    });
  }, [tickets, q, status, priority, category]);

  function badgeColorForStatus(s: string) {
    switch (s) {
      case "OPEN":
        return "bg-blue-500/10 text-blue-300 border-blue-500/30";
      case "IN_PROGRESS":
        return "bg-yellow-500/10 text-yellow-300 border-yellow-500/30";
      case "RESOLVED":
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
      case "CLOSED":
        return "bg-gray-500/10 text-gray-300 border-gray-500/30";
      default:
        return "bg-gray-500/10 text-gray-300 border-gray-500/30";
    }
  }
  function textColorForPriority(p: string) {
    switch (p) {
      case "HIGH":
        return "text-red-400";
      case "MEDIUM":
        return "text-yellow-400";
      case "LOW":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  }

  async function updateTicket(
    id: string,
    patch: Partial<Pick<Ticket, "status" | "priority" | "category">> & {
      adminNote?: string;
    }
  ) {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/tickets/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (!res.ok) {
        throw new Error(await res.text());
      }
      await load();
    } catch (err) {
      console.error("Failed to update ticket:", err);
    } finally {
      setUpdatingId(null);
    }
  }

  async function sendStaffReply(id: string) {
    const body = replyBody.trim();
    if (!body) return;
    setUpdatingId(id);
    try {
      // Either via PATCH with adminNote OR via /reply route (both supported in prior API sketch).
      // Using /reply here:
      const res = await fetch(`/api/tickets/${id}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body }),
      });
      if (!res.ok) throw new Error(await res.text());
      setReplyBody("");
      await load();
      setExpandedId(id);
    } catch (err) {
      console.error("Failed to send staff reply:", err);
    } finally {
      setUpdatingId(null);
    }
  }

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-white">Support Tickets</h2>
          <p className="text-gray-400 text-sm">
            Review, reply, and resolve user issues.
          </p>
        </div>
        <button
          onClick={load}
          className="px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 border border-gray-700 text-sm"
        >
          Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 bg-gray-900 border border-gray-800 rounded-xl p-4">
        <div className="md:col-span-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search subject or message…"
            className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
          />
        </div>
        <div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
          >
            <option value="ALL">All Statuses</option>
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
          >
            <option value="ALL">All Priorities</option>
            {PRIORITY_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
          >
            <option value="ALL">All Categories</option>
            {CATEGORY_OPTIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* List */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="flex items-center text-gray-400">
            <svg
              className="animate-spin h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V2C5.373 2 2 5.373 2 12h2zm2 5.291A7.962 7.962 0 014 12H2c0 3.042 1.135 5.824 3 7.938l1-2.647z"
              />
            </svg>
            Loading tickets…
          </div>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 bg-gray-900 border border-gray-800 rounded-xl">
          <h3 className="text-lg font-semibold text-white">No tickets found</h3>
          <p className="text-gray-400 text-sm">Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition"
            >
              {/* Row header */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold text-white truncate">
                        {t.subject}
                      </div>
                      <span
                        className={`text-[10px] px-2 py-0.5 border rounded-full ${badgeColorForStatus(
                          t.status
                        )}`}
                      >
                        {t.status}
                      </span>
                    </div>
                    <div className="text-xs flex flex-wrap gap-2 mt-2">
                      <span className="bg-gray-800 px-2 py-1 rounded-md">
                        {t.category}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-md ${textColorForPriority(
                          t.priority
                        )}`}
                      >
                        {t.priority}
                      </span>
                      <span className="text-gray-500">
                        {new Date(t.createdAt).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setExpandedId(expandedId === t.id ? null : t.id)
                    }
                    className="flex-shrink-0 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm"
                  >
                    {expandedId === t.id ? "Collapse" : "Expand"}
                  </button>
                </div>

                {/* Expanded details */}
                {expandedId === t.id && (
                  <div className="mt-4 pt-4 border-t border-gray-800 space-y-5">
                    {/* Thread */}
                    <div className="space-y-2">
                      {t.messages.map((m) => (
                        <div
                          key={m.id}
                          className={`p-3 rounded-lg ${
                            m.isStaff
                              ? "bg-blue-500/10 border border-blue-500/20"
                              : "bg-white/5 border border-white/10"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span
                              className={`text-[11px] font-medium ${
                                m.isStaff ? "text-blue-300" : "text-gray-400"
                              }`}
                            >
                              {m.isStaff ? "Support" : "User"} -{" "}
                              {`${t.user?.username} (${t.user?.email})`}
                            </span>
                            <span className="text-[11px] text-gray-500">
                              {new Date(m.createdAt).toLocaleString()}
                            </span>
                          </div>
                          <div className="text-sm">{m.body}</div>
                        </div>
                      ))}
                      {t.messages.length === 0 && (
                        <div className="text-sm text-gray-400 bg-white/5 border border-white/10 p-3 rounded-lg">
                          No messages yet.
                        </div>
                      )}
                    </div>

                    {/* Controls */}
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="grid gap-1">
                        <label className="text-xs text-gray-400">Status</label>
                        <select
                          className="bg-black/30 border border-white/10 rounded-md p-2 text-sm text-white"
                          value={t.status}
                          onChange={(e) =>
                            updateTicket(t.id, {
                              status: e.target.value as Ticket["status"],
                            })
                          }
                          disabled={updatingId === t.id}
                        >
                          {STATUS_OPTIONS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="grid gap-1">
                        <label className="text-xs text-gray-400">
                          Priority
                        </label>
                        <select
                          className="bg-black/30 border border-white/10 rounded-md p-2 text-sm text-white"
                          value={t.priority}
                          onChange={(e) =>
                            updateTicket(t.id, {
                              priority: e.target.value as Ticket["priority"],
                            })
                          }
                          disabled={updatingId === t.id}
                        >
                          {PRIORITY_OPTIONS.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="grid gap-1">
                        <label className="text-xs text-gray-400">
                          Category
                        </label>
                        <select
                          className="bg-black/30 border border-white/10 rounded-md p-2 text-sm text-white"
                          value={t.category}
                          onChange={(e) =>
                            updateTicket(t.id, {
                              category: e.target.value as Ticket["category"],
                            })
                          }
                          disabled={updatingId === t.id}
                        >
                          {CATEGORY_OPTIONS.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Staff reply */}
                    <div className="grid gap-2">
                      <label className="text-xs text-gray-400">
                        Staff reply
                      </label>
                      <div className="flex gap-2">
                        <textarea
                          value={replyBody}
                          onChange={(e) => setReplyBody(e.target.value)}
                          rows={2}
                          placeholder="Write a message to the user…"
                          className="flex-1 bg-black/30 border border-white/10 rounded-md p-2 text-sm text-white"
                        />
                        <button
                          onClick={() => sendStaffReply(t.id)}
                          disabled={updatingId === t.id || !replyBody.trim()}
                          className="self-end px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm disabled:opacity-50"
                        >
                          {updatingId === t.id ? "Sending…" : "Send"}
                        </button>
                      </div>
                      <p className="text-[11px] text-gray-500">
                        Tip: set the status to{" "}
                        <span className="text-emerald-400">RESOLVED</span> after
                        replying if the issue is addressed.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
