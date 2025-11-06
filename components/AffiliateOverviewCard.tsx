/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Copy,
  Share2,
  Link as LinkIcon,
  TrendingUp,
  Coins,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";
import { toast } from "react-hot-toast";
import Link from "next/link";

type Overview = {
  affiliate: {
    id: string;
    code: string;
    name: string | null;
    email: string | null;
    isActive: boolean;
    currency: string;
  };
  myLink: string;
  counters: {
    clicks: number;
    conversions: number;
    lifetimeMinor: number;
    commissions: {
      pendingMinor: number;
      approvedMinor: number;
      paidMinor: number;
      reversedMinor: number;
      unpaidMinor: number;
      withdrawableMinor: number;
    };
  };
  recent: {
    clicks: {
      id: string;
      createdAt: string;
      ipMasked: string | null;
      referrer: string | null;
    }[];
    commissions: {
      id: string;
      amountMinor: number;
      status: "PENDING" | "APPROVED" | "PAID" | "REVERSED";
      createdAt: string;
      user: { id: string | null; email: string | null };
    }[];
  };
};

function gbp(minor: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format((minor || 0) / 100);
}

export default function AffiliateOverviewCard() {
  const [data, setData] = useState<Overview | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  async function fetchOverview() {
    try {
      setErr(null);
      setLoading(true);
      const res = await fetch("/api/affiliates/me/overview", {
        cache: "no-store",
      });
      // If the user simply doesn't have an affiliate profile yet, show CTA instead of an error
      if (res.status === 404) {
        setData(null);
        setErr(null);
        return;
      }
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to load overview");
      setData(json as Overview);
    } catch (e: any) {
      setErr(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let mounted = true;
    (async () => {
      await fetchOverview();
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const hasAffiliate = !!data?.affiliate?.id;

  const statBlocks = useMemo(() => {
    if (!data) return [];
    const c = data.counters;
    return [
      {
        label: "Clicks",
        value: c.clicks.toLocaleString(),
        icon: <TrendingUp className="w-4 h-4 text-brb-green" />,
        tip: "Total tracked visits via your link",
      },
      {
        label: "Signups (first paid)",
        value: c.conversions.toLocaleString(),
        icon: <CheckCircle2 className="w-4 h-4 text-brb-green" />,
        tip: "Users who made their first successful paid plan",
      },
      {
        label: "Unpaid",
        value: gbp(c.commissions.unpaidMinor),
        icon: <Clock3 className="w-4 h-4 text-yellow-400" />,
        tip: "Pending + Approved commissions",
      },
      {
        label: "Withdrawable",
        value: gbp(c.commissions.withdrawableMinor),
        icon: <Coins className="w-4 h-4 text-brb-gold" />,
        tip: "Approved and ready to payout",
      },
      {
        label: "Paid",
        value: gbp(c.commissions.paidMinor),
        icon: <Coins className="w-4 h-4 text-brb-gold" />,
        tip: "Already paid to you",
      },
      {
        label: "Lifetime",
        value: gbp(c.lifetimeMinor),
        icon: <TrendingUp className="w-4 h-4 text-brb-gold" />,
        tip: "All-time earnings accrued",
      },
    ];
  }, [data]);

  function copyLink() {
    if (!data?.myLink) return;
    navigator.clipboard.writeText(data.myLink);
    toast.success("Referral link copied!");
  }

  async function shareLink() {
    if (!data?.myLink) return;
    if (navigator.share) {
      try {
        await navigator.share({ title: "BetBetter101", url: data.myLink });
      } catch {
        /* user cancelled */
      }
    } else {
      copyLink();
    }
  }

  return (
    <div className="bg-[#151515] p-6 rounded-2xl border border-[#2a2a2a] shadow-lg backdrop-blur-sm lg:col-span-3 hover:border-brb-gold transition-all">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <h2 className="text-xl font-semibold text-brb-gold">
            Referral Program
          </h2>
          <p className="text-gray-400 text-sm">
            Earn <span className="text-brb-green font-semibold">£5</span> for
            every new user who buys their first plan via your link.
          </p>
        </div>
        {data?.affiliate && (
          <span
            className={`text-xs px-2 py-1 rounded-md border ${
              data.affiliate.isActive
                ? "border-green-700 text-green-400"
                : "border-gray-700 text-gray-400"
            }`}
            title={
              data.affiliate.isActive
                ? "Active affiliate"
                : "Inactive affiliate"
            }
          >
            {data.affiliate.isActive ? "ACTIVE" : "INACTIVE"}
          </span>
        )}
      </div>

      {/* Loading / Error / No affiliate */}
      {loading && (
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-[#1e1e1e] rounded-md" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-20 bg-[#1b1b1b] rounded-lg border border-[#222]"
              />
            ))}
          </div>
          <div className="h-36 bg-[#1b1b1b] rounded-lg border border-[#222]" />
        </div>
      )}

      {!loading && err && (
        <div className="flex items-center gap-2 text-red-400 bg-red-900/20 border border-red-800 rounded-md p-3 text-sm">
          <AlertTriangle className="w-4 h-4" />
          <span>{err}</span>
        </div>
      )}

      {!loading && !err && !hasAffiliate && (
        <NoAffiliateCTA
          onEnabled={async () => {
            await fetchOverview();
          }}
        />
      )}

      {/* Main content */}
      {!loading && !err && hasAffiliate && data && (
        <>
          {/* Link row */}
          <div className="rounded-lg border border-[#2a2a2a] bg-[#0d0d0d] p-4 mb-5">
            <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
              <LinkIcon className="w-4 h-4 text-brb-green" />
              <span>Your referral link</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <code className="flex-1 text-xs break-all text-gray-100 bg-[#1a1a1a] p-2 rounded-md border border-gray-800">
                {data.myLink}
              </code>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={copyLink}
                  className="px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white text-sm inline-flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" /> Copy
                </button>
                <button
                  onClick={shareLink}
                  className="px-3 py-2 rounded-md bg-gradient-to-r from-green-600 to-yellow-500 text-black font-semibold text-sm inline-flex items-center gap-2 hover:from-green-500 hover:to-yellow-400"
                >
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Your code: <b className="text-brb-gold">{data.affiliate.code}</b>
            </div>
          </div>

          {/* 🔽 Withdraw CTA (added) */}
          {data.counters.commissions.withdrawableMinor > 0 && (
            <div className="mb-5 flex items-center justify-between rounded-lg border border-[#2a2a2a] bg-[#0d0d0d] p-4">
              <div className="text-sm text-gray-300">
                <div>
                  Withdrawable balance:{" "}
                  <b className="text-brb-gold">
                    {gbp(data.counters.commissions.withdrawableMinor)}
                  </b>
                </div>
                <div className="text-xs text-gray-500">
                  Minimum withdrawal: £20.00
                </div>
              </div>
              <button
                onClick={async () => {
                  try {
                    const res = await fetch("/api/affiliates/me/withdraw", {
                      method: "POST",
                    });
                    const json = await res.json();
                    if (!res.ok || !json?.ok)
                      throw new Error(
                        json?.error || "Failed to request withdrawal"
                      );
                    toast.success(
                      "Withdrawal requested! We’ll notify you when it’s paid."
                    );
                    await fetchOverview();
                  } catch (e: any) {
                    toast.error(e?.message || "Unable to request withdrawal");
                  }
                }}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-green-600 to-yellow-500 text-black font-semibold hover:from-green-500 hover:to-yellow-400"
              >
                Request Withdrawal
              </button>
            </div>
          )}

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
            {statBlocks.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4 hover:border-brb-green/70 transition-all"
                title={s.tip}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">{s.label}</span>
                  {s.icon}
                </div>
                <div className="mt-2 text-lg font-semibold">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Recent activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Recent clicks */}
            <div className="rounded-xl border border-[#2a2a2a] bg-[#111111]">
              <div className="px-4 py-3 border-b border-[#232323] flex items-center justify-between">
                <h3 className="text-brb-gold font-semibold">Recent Clicks</h3>
                <Link
                  href="/privacy"
                  className="text-xs text-gray-400 hover:text-gray-300 inline-flex items-center gap-1"
                >
                  Privacy <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
              <div className="max-h-[240px] overflow-y-auto custom-scrollbar">
                {data.recent.clicks.length === 0 ? (
                  <div className="p-4 text-gray-400 text-sm">
                    No clicks yet.
                  </div>
                ) : (
                  <ul className="divide-y divide-[#1e1e1e]">
                    {data.recent.clicks.map((c) => (
                      <li
                        key={c.id}
                        className="px-4 py-3 text-sm flex items-center justify-between"
                      >
                        <div className="space-y-0.5">
                          <div className="text-gray-200">
                            {c.referrer || "Direct"}
                          </div>
                          <div className="text-xs text-gray-500">
                            {c.ipMasked || "—"}
                          </div>
                        </div>
                        <div className="text-xs text-gray-400">
                          {new Date(c.createdAt).toLocaleString()}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Recent commissions */}
            <div className="rounded-xl border border-[#2a2a2a] bg-[#111111]">
              <div className="px-4 py-3 border-b border-[#232323]">
                <h3 className="text-brb-gold font-semibold">
                  Recent Commissions
                </h3>
              </div>
              <div className="max-h-[240px] overflow-y-auto custom-scrollbar">
                {data.recent.commissions.length === 0 ? (
                  <div className="p-4 text-gray-400 text-sm">
                    No commissions yet.
                  </div>
                ) : (
                  <ul className="divide-y divide-[#1e1e1e]">
                    {data.recent.commissions.map((c) => (
                      <li
                        key={c.id}
                        className="px-4 py-3 text-sm flex items-center justify-between"
                      >
                        <div>
                          <div className="text-gray-200">
                            {gbp(c.amountMinor)}
                          </div>
                          <div className="text-xs text-gray-500">
                            {c.user?.email || "New user"}
                          </div>
                        </div>
                        <div className="text-right">
                          <span
                            className={`text-xs px-2 py-1 rounded-full border ${
                              c.status === "PAID"
                                ? "border-green-700 text-green-400"
                                : c.status === "APPROVED"
                                ? "border-brb-gold text-brb-gold"
                                : c.status === "PENDING"
                                ? "border-yellow-700 text-yellow-400"
                                : "border-red-700 text-red-400"
                            }`}
                          >
                            {c.status}
                          </span>
                          <div className="text-[10px] text-gray-500 mt-1">
                            {new Date(c.createdAt).toLocaleString()}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/** CTA shown when user doesn't yet have an affiliate profile */
function NoAffiliateCTA({ onEnabled }: { onEnabled: () => Promise<void> }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function enable() {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/affiliates/me/enable", { method: "POST" });
      const json = await res.json();
      if (!res.ok || !json?.ok)
        throw new Error(json?.error || "Unable to enable affiliate profile");
      toast.success("Marketer profile created! Fetching your link…");
      await onEnabled();
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg p-5 text-sm">
      <p className="text-gray-300 mb-3">
        Become a marketer and earn <b className="text-brb-green">£5</b> for
        every new user who buys their first plan via your link.
      </p>
      <button
        onClick={enable}
        disabled={busy}
        className="px-4 py-2 rounded-md bg-gradient-to-r from-green-600 to-yellow-500 text-black font-semibold hover:from-green-500 hover:to-yellow-400 disabled:opacity-60"
      >
        {busy ? "Enabling…" : "Join Marketer Program"}
      </button>
      {error && <div className="mt-3 text-red-400">{error}</div>}
    </div>
  );
}
