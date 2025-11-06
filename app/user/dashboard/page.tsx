/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Copy, PlugZap, Unplug } from "lucide-react";
import dynamic from "next/dynamic";
import AffiliateCardSkeleton from "@/components/AffiliateCardSkeleton";
import type { UserData } from "@/types/userDashboard";

const AffiliateOverviewCard = dynamic(
  () => import("@/components/AffiliateOverviewCard"),
  { ssr: false, loading: () => <AffiliateCardSkeleton /> }
);

export default function UserDashboard() {
  const { user, isLoaded } = useUser();
  const [data, setData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Telegram link UI state
  const [tgLoading, setTgLoading] = useState(false);
  const [tgUnlinking, setTgUnlinking] = useState(false);
  const [deepLink, setDeepLink] = useState<string | null>(null);
  const [expiresAt, setExpiresAt] = useState<string | null>(null);
  const [tgError, setTgError] = useState<string | null>(null);

  // 🚫 Cancel subscription UI state
  const [cancelLoading, setCancelLoading] = useState(false);
  const [cancelMsg, setCancelMsg] = useState<string | null>(null);
  const [cancelManageUrl, setCancelManageUrl] = useState<string | null>(null);
  const [cancelError, setCancelError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded || !user) return;

    setIsLoading(true);
    fetch("/api/user/me")
      .then((res) => res.json())
      .then((userData) => {
        setData(userData.user as UserData);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [user, isLoaded]);

  async function createTelegramLink() {
    setTgLoading(true);
    setTgError(null);
    try {
      const res = await fetch("/api/telegram/create-link", {
        method: "POST",
        headers: { "content-type": "application/json" },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to create link");
      setDeepLink(json.deepLink);
      setExpiresAt(json.expiresAt);
    } catch (e: any) {
      setTgError(e?.message || "Something went wrong");
    } finally {
      setTgLoading(false);
    }
  }

  async function unlinkTelegram() {
    setTgUnlinking(true);
    setTgError(null);
    try {
      const res = await fetch("/api/telegram/unlink", { method: "POST" });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json?.error || "Failed to unlink Telegram");
      }
      setDeepLink(null);
      setExpiresAt(null);
      setData((prev) =>
        prev
          ? {
              ...prev,
              telegramChatId: null,
              telegramUsername: null,
              telegramLinkedAt: null,
            }
          : prev
      );
    } catch (e: any) {
      setTgError(e?.message || "Something went wrong");
    } finally {
      setTgUnlinking(false);
    }
  }

  function copyDeepLink() {
    if (deepLink) navigator.clipboard.writeText(deepLink);
  }

  // 🔻 Cancel Subscription (period_end by default)
  async function cancelSubscription(
    when: "period_end" | "immediately" = "period_end"
  ) {
    if (
      !confirm(
        when === "immediately"
          ? "Cancel right now? You may lose access immediately."
          : "Cancel auto-renew? You'll keep access until your current period ends."
      )
    ) {
      return;
    }

    setCancelLoading(true);
    setCancelMsg(null);
    setCancelManageUrl(null);
    setCancelError(null);

    try {
      const res = await fetch("/api/subscriptions/cancel", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ when }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to cancel");

      // If backend returns a provider manage URL (e.g., Paystack),
      // show it so the user can finalize cancellation.
      if (json.manageUrl) setCancelManageUrl(json.manageUrl);
      if (json.message) setCancelMsg(json.message);

      // Optimistically reflect cancelAtPeriodEnd in UI
      setData((prev) =>
        prev && prev.subscriptionSummary
          ? {
              ...prev,
              subscriptionSummary: {
                ...prev.subscriptionSummary,
                cancelAtPeriodEnd: true,
                nextBillingLabel: "ENDS",
              },
            }
          : prev
      );
    } catch (e: any) {
      setCancelError(e?.message || "Something went wrong.");
    } finally {
      setCancelLoading(false);
    }
  }

  const remaining = useExpiryCountdown(expiresAt);

  if (!isLoaded || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0d0d] via-[#141414] to-[#1a1a1a]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-brb-green border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-brb-gold text-lg font-medium">
            Preparing your dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (!user || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brb-dark">
        <div className="text-center p-8 bg-[#111] rounded-lg border border-brb-gold shadow-lg max-w-md mx-4">
          <h2 className="text-2xl font-bold text-brb-green mb-4">
            Access Denied
          </h2>
          <p className="text-gray-300 mb-6">
            Please sign in to access your dashboard
          </p>
          <Link
            href="/sign-in"
            className="bg-brb-green hover:bg-brb-green/90 text-black font-bold py-2 px-6 rounded-md transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const telegramLinked = Boolean(data.telegramChatId);
  const canShowCancel =
    !!data.isSubscribed &&
    !!data.subscriptionSummary &&
    !data.subscriptionSummary.cancelAtPeriodEnd &&
    (data.subscriptionSummary.status === "ACTIVE" ||
      data.subscriptionSummary.status === "TRIALING" ||
      data.subscriptionSummary.status === "PAUSED");

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-brb-green animate-pulse-green">
              👋 Welcome back, {data.username || user.firstName}!
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              {data.isSubscribed
                ? "You have full VIP access to all BRB 50/3 Pot Picks"
                : "Upgrade to unlock premium predictions"}
            </p>
          </div>
          {data.isSubscribed && (
            <div className="mt-4 md:mt-0 bg-gradient-to-r from-brb-green to-brb-gold rounded-lg p-0.5 shadow-lg">
              <div className="bg-[#111] rounded-md px-4 py-2">
                <p className="font-bold text-brb-gold tracking-wide">
                  VIP MEMBER
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 🔔 Subscriptions banner */}
        {data.isSubscribed && data.subscriptionSummary?.nextBillingDateISO && (
          <div className="mb-8 rounded-lg border border-[#2a2a2a] bg-[#121212] p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm text-gray-300">
                {data.subscriptionSummary.nextBillingLabel === "ENDS"
                  ? "Plan ends on "
                  : "Next billing on "}
                <span className="text-brb-gold font-semibold">
                  {fmtDate(data.subscriptionSummary.nextBillingDateISO)}
                </span>
                {data.subscriptionSummary.productName && (
                  <span className="text-gray-400">
                    {" "}
                    • {data.subscriptionSummary.productName}
                  </span>
                )}
              </div>

              {/* Cancel Subscription CTA */}
              {canShowCancel && (
                <div className="flex items-center gap-2">
                  <button
                    disabled={cancelLoading}
                    onClick={() => cancelSubscription("period_end")}
                    className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold disabled:opacity-60"
                    title="Cancel auto-renew"
                  >
                    {cancelLoading ? "Processing..." : "Cancel Subscription"}
                  </button>
                </div>
              )}
            </div>

            {/* Cancel outcome messaging */}
            {(cancelMsg || cancelManageUrl || cancelError) && (
              <div className="mt-3 text-sm">
                {cancelMsg && <p className="text-gray-300">{cancelMsg}</p>}
                {cancelManageUrl && (
                  <p className="text-yellow-300">
                    To finalize, open your secure manage page:{" "}
                    <a
                      href={cancelManageUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-brb-green"
                    >
                      Manage subscription
                    </a>
                  </p>
                )}
                {cancelError && <p className="text-red-400">{cancelError}</p>}
              </div>
            )}
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ✅ Affiliate card */}
          <AffiliateOverviewCard />

          {/* Account Info (now includes Subscription Summary) */}
          <div className="bg-[#151515] p-6 rounded-2xl border border-[#2a2a2a] shadow-lg backdrop-blur-sm hover:border-brb-green transition-all">
            <h2 className="text-xl font-semibold text-brb-gold mb-4">
              Account Info
            </h2>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-white break-all">{data.email}</p>
              </div>

              <div>
                <p className="text-gray-400">Account Type</p>
                <p className="text-white">
                  {data.role === "ADMIN" ? "Admin" : "Standard"}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Membership Status</p>
                <p
                  className={`font-semibold ${
                    data.isSubscribed ? "text-brb-green" : "text-red-400"
                  }`}
                >
                  {data.isSubscribed ? "Active ✅" : "Not Active ❌"}
                </p>
              </div>

              {/* ⬇️ Subscription Summary */}
              {data.subscriptionSummary && (
                <div className="mt-4 rounded-lg border border-[#2a2a2a] bg-[#101010] p-4">
                  <p className="text-sm font-semibold text-brb-gold mb-2">
                    Subscription
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-400">Plan</p>
                      <p className="text-white">
                        {data.subscriptionSummary.productName || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">Status</p>
                      <span
                        className={`px-2 py-1 text-[10px] rounded-full border ${
                          data.subscriptionSummary.status === "ACTIVE" ||
                          data.subscriptionSummary.status === "TRIALING"
                            ? "bg-green-900/30 text-green-300 border-green-800/40"
                            : data.subscriptionSummary.status === "PAST_DUE"
                            ? "bg-yellow-900/30 text-yellow-300 border-yellow-800/40"
                            : "bg-red-900/30 text-red-300 border-red-800/40"
                        }`}
                      >
                        {data.subscriptionSummary.status}
                      </span>
                    </div>

                    <div>
                      <p className="text-gray-400">Interval</p>
                      <p className="text-white">
                        {`${data.subscriptionSummary.intervalCount} ${data.subscriptionSummary.interval}`}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">
                        {data.subscriptionSummary.cancelAtPeriodEnd
                          ? "Ends"
                          : "Next billing"}
                      </p>
                      <p className="text-white">
                        {data.subscriptionSummary.nextBillingDateISO
                          ? fmtDate(data.subscriptionSummary.nextBillingDateISO)
                          : "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">Auto-renew</p>
                      <p className="text-white">
                        {data.subscriptionSummary.cancelAtPeriodEnd
                          ? "Off"
                          : "On"}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">Period end</p>
                      <p className="text-white">
                        {data.subscriptionSummary.currentPeriodEndISO
                          ? fmtDate(
                              data.subscriptionSummary.currentPeriodEndISO
                            )
                          : "—"}
                      </p>
                    </div>
                  </div>

                  {data.subscriptionSummary.cancelAtPeriodEnd && (
                    <p className="text-xs text-yellow-400 mt-2">
                      Auto-renew is off. Access ends on the date above.
                    </p>
                  )}

                  {/* Secondary Cancel CTA inside the card (visible only if not already turned off) */}
                  {canShowCancel && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        disabled={cancelLoading}
                        onClick={() => cancelSubscription("period_end")}
                        className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold disabled:opacity-60"
                        title="Cancel auto-renew"
                      >
                        {cancelLoading
                          ? "Processing..."
                          : "Cancel Subscription"}
                      </button>
                      {/* Optional immediate cancel (hidden by default; uncomment if you support it server-side) */}
                      {/* <button
                        disabled={cancelLoading}
                        onClick={() => cancelSubscription("immediately")}
                        className="px-4 py-2 rounded-md border border-red-500/40 text-red-300 hover:bg-red-500/10 font-semibold disabled:opacity-60"
                        title="Cancel now"
                      >
                        Cancel Now
                      </button> */}
                    </div>
                  )}

                  {(cancelMsg || cancelManageUrl || cancelError) && (
                    <div className="mt-3 text-sm">
                      {cancelMsg && (
                        <p className="text-gray-300">{cancelMsg}</p>
                      )}
                      {cancelManageUrl && (
                        <p className="text-yellow-300">
                          To finalize, open your secure manage page:{" "}
                          <a
                            href={cancelManageUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="underline text-brb-green"
                          >
                            Manage subscription
                          </a>
                        </p>
                      )}
                      {cancelError && (
                        <p className="text-red-400">{cancelError}</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Payment History */}
          <section className="bg-[#151515] p-6 rounded-2xl border border-[#2a2a2a] shadow-lg backdrop-blur-sm lg:col-span-2 hover:border-brb-gold transition-all" id="billing">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-brb-gold">
                Payment History
              </h2>
            </div>

            {!data.payments || data.payments.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-400 mb-4">
                  You haven’t made any payments yet.
                </p>
                <Link
                  href="/premium"
                  className="bg-brb-gradient hover:opacity-90 text-black px-6 py-3 rounded-md font-semibold text-sm shadow-md inline-block transition-all"
                >
                  Make First Payment
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-md border border-[#333] max-h-[320px] overflow-y-auto custom-scrollbar">
                <table className="min-w-full divide-y divide-[#333] text-sm">
                  <thead className="bg-[#1c1c1c] sticky top-0 z-10">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-gray-400 uppercase tracking-wider">
                        Amount (KES)
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-gray-400 uppercase tracking-wider">
                        Method
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#222]">
                    {data.payments.slice(0, 20).map((pay) => (
                      <tr
                        key={pay.id}
                        className="hover:bg-[#202020]/80 transition-colors"
                      >
                        <td className="px-4 py-3 whitespace-nowrap text-brb-green font-semibold">
                          {pay.amount.toLocaleString("en-KE", {
                            style: "currency",
                            currency: "KES",
                          })}
                        </td>
                        <td className="px-4 py-3 text-gray-300">
                          {pay.method}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              pay.status === "COMPLETED"
                                ? "bg-green-900/40 text-green-400"
                                : pay.status === "FAILED"
                                ? "bg-red-900/40 text-red-400"
                                : "bg-yellow-900/40 text-yellow-300"
                            }`}
                          >
                            {pay.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-400 text-sm">
                          {new Date(pay.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {/* Latest Pick */}
          {data.isSubscribed && data.lastActivePick && (
            <div className="bg-[#151515] p-6 rounded-2xl border border-[#2a2a2a] shadow-lg backdrop-blur-sm lg:col-span-3 hover:border-brb-green transition-all">
              <h2 className="text-xl font-semibold text-brb-gold mb-4">
                Your Latest VIP Pick
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#1c1c1c] p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Match</p>
                  <p className="text-white font-medium">
                    {data.lastActivePick.match}
                  </p>
                </div>
                <div className="bg-[#1c1c1c] p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Prediction</p>
                  <p className="text-brb-green font-bold">
                    {data.lastActivePick.prediction}
                  </p>
                </div>
                <div className="bg-[#1c1c1c] p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Odds</p>
                  <p className="text-brb-gold font-bold">
                    {data.lastActivePick.odds}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Link
                  href="/vip-picks"
                  className="text-brb-green hover:text-brb-green/80 text-sm font-medium flex items-center"
                >
                  View all VIP picks →
                </Link>
              </div>
            </div>
          )}

          {/* Telegram Section — unchanged */}
          {data.isSubscribed && (
            <div className="bg-[#151515] p-6 rounded-2l border border-[#2a2a2a] shadow-lg backdrop-blur-sm lg:col-span-3 hover:border-brb-gold transition-all rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold text-brb-gold">
                  Telegram Notifications
                </h2>
                {telegramLinked ? (
                  <button
                    onClick={unlinkTelegram}
                    disabled={tgUnlinking}
                    className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 text-white font-medium disabled:opacity-60"
                  >
                    {tgUnlinking ? (
                      "Disconnecting..."
                    ) : (
                      <span className="flex items-center gap-2 font-medium">
                        <Unplug className="w-6 h-6 text-white" /> Disconnect
                      </span>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={createTelegramLink}
                    className="px-4 py-2 rounded-md bg-gradient-to-r from-green-600 to-yellow-500 text-black font-semibold hover:from-green-500 hover:to-yellow-400 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
                    title="Connect Telegram"
                  >
                    {tgLoading ? (
                      "Generating..."
                    ) : (
                      <span className="flex items-center gap-2  font-medium">
                        <PlugZap className="w-6 h-6 text-white" /> Connect
                        Telegram
                      </span>
                    )}
                  </button>
                )}
              </div>

              {telegramLinked ? (
                <div className="text-sm text-gray-300">
                  Linked{" "}
                  {data.telegramUsername ? `(@${data.telegramUsername})` : ""}{" "}
                  ✅
                  {data.telegramLinkedAt && (
                    <div className="text-xs text-gray-500 mt-1">
                      Linked at{" "}
                      {new Date(data.telegramLinkedAt).toLocaleString()}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-300">
                  Not linked. Connect to receive your predictions directly in
                  Telegram.
                </p>
              )}

              {!telegramLinked && deepLink && (
                <div className="mt-5 rounded-lg border border-gray-700 p-4 bg-[#0d0d0d]">
                  <div className="text-sm text-gray-400 mb-2">Deep link</div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <code className="flex-1 text-xs break-all text-gray-200 bg-[#1a1a1a] p-2 rounded-md border border-gray-800">
                      {deepLink}
                    </code>
                    <div className="flex gap-2">
                      <button
                        onClick={() => window.open(deepLink, "_blank")}
                        className="px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white text-sm"
                      >
                        Open
                      </button>
                      <button
                        onClick={copyDeepLink}
                        className="px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white text-sm"
                        title="Copy link"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Expires in:{" "}
                    <span
                      className={remaining ? "text-green-400" : "text-red-400"}
                    >
                      {remaining}
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-yellow-400">
                    After opening the link in Telegram, press <b>Start</b> to
                    complete linking.
                  </div>
                </div>
              )}

              {tgError && (
                <div className="mt-4 text-sm text-red-400">{tgError}</div>
              )}
            </div>
          )}

          {/* Upgrade Card */}
          {!data.isSubscribed && (
            <div className="bg-[#151515] p-6 rounded-2xl border border-[#2a2a2a] shadow-lg backdrop-blur-sm lg:col-span-3 hover:border-brb-green transition-all">
              <div className="md:flex md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-xl font-semibold text-brb-gold mb-2">
                    Unlock BRB 50/3 Pot Picks
                  </h2>
                  <p className="text-gray-300 max-w-2xl text-sm">
                    Get access to our premium betting predictions with odds of
                    50+ via our exclusive 3 Smart Games system. Maximize your
                    winnings with our carefully analyzed picks.
                  </p>
                </div>
                <Link
                  href="/premium"
                  className="bg-brb-gradient hover:opacity-90 text-black px-6 py-3 rounded-md font-bold shadow-lg inline-block text-center"
                >
                  Upgrade to VIP Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Helpers */
function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleString("en-GB", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "—";
  }
}

/** Countdown hook for token expiry display */
function useExpiryCountdown(expiresAt: string | null) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  return useMemo(() => {
    if (!expiresAt) return "—";
    const exp = new Date(expiresAt).getTime();
    const diff = exp - now;
    if (diff <= 0) return "expired";

    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    return `${minutes}m ${seconds}s`;
  }, [expiresAt, now]);
}
