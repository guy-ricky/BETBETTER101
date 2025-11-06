/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type VerifyResult = {
  ok: boolean;
  providerStatus?: string;
  reference?: string;
  amountMinor?: number;
  currency?: string;
  paidAt?: string;
  email?: string;
  message?: string;
  error?: string;
  // optionally returned by your API
  code?: string | number;
};

type MySubscription = {
  id: string;
  productName: string | null;
  currency: string | null;
  unitAmountMinor: number | null;
  interval: string | null;
  intervalCount: number | null;
  currentPeriodStart: string | null;
  currentPeriodEnd: string | null;
  cancelAtPeriodEnd: boolean | null;
} | null;

function formatMoneyGBP(minor?: number | null) {
  if (!minor && minor !== 0) return "";
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format((minor || 0) / 100);
}

function formatDate(d?: string | Date | null) {
  if (!d) return "";
  const dt = typeof d === "string" ? new Date(d) : d;
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(dt);
}

/**
 * Outer page component that provides a Suspense boundary
 * above any hook that reads from the URL (useSearchParams).
 */
export default function BillingVerifyPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-3xl p-6">
          <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--gray-800)]">
            <div className="h-1.5 w-full animate-pulse-slow bg-gradient-to-r from-[var(--primary-green)] via-[var(--primary-gold)] to-[var(--primary-green)]" />
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                <span className="bg-brb-gradient bg-clip-text text-transparent">
                  Payment Verification
                </span>
              </h1>
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--gray-800)] p-4">
                <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-[var(--primary-green)]" />
                <p className="text-[color:var(--gray-300)]">Loading…</p>
              </div>
            </div>
            <div className="h-1.5 w-full animate-pulse-slow bg-gradient-to-r from-[var(--primary-gold)] via-[var(--primary-green)] to-[var(--primary-gold)]" />
          </div>
        </main>
      }
    >
      <BillingVerifyInner />
    </Suspense>
  );
}

/**
 * All client hooks (useSearchParams, useRouter, useEffect) live here.
 * This component is rendered inside the Suspense boundary above.
 */
function BillingVerifyInner() {
  const sp = useSearchParams();
  const router = useRouter();
  const reference = useMemo(() => sp.get("reference") || "", [sp]);

  const [verifying, setVerifying] = useState(true);
  const [verify, setVerify] = useState<VerifyResult | null>(null);
  const [sub, setSub] = useState<MySubscription>(null);
  const [loadingSub, setLoadingSub] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!reference) {
        setVerifying(false);
        setVerify({ ok: false, error: "Missing reference in URL." });
        return;
      }

      try {
        setVerifying(true);
        const res = await fetch(
          `/api/payments/paystack/verify?reference=${encodeURIComponent(
            reference
          )}`,
          { method: "GET" }
        );
        const data: VerifyResult = await res.json();
        if (!cancelled) setVerify(data);
      } catch (e: any) {
        if (!cancelled)
          setVerify({ ok: false, error: e?.message || "Verification failed" });
      } finally {
        if (!cancelled) setVerifying(false);
      }

      // Fetch current subscription (requires user signed in)
      try {
        setLoadingSub(true);
        const r2 = await fetch("/api/billing/me", { method: "GET" });
        const d2 = await r2.json();
        if (!cancelled) setSub(d2?.subscription || null);
      } finally {
        if (!cancelled) setLoadingSub(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [reference]);

  /**
   * Redirect to failure page if verification finished and was NOT successful.
   * Placed BEFORE the success redirect to ensure proper precedence.
   */
  useEffect(() => {
    if (verifying) return;
    if (!verify || verify.ok !== false) return;

    const params = new URLSearchParams();
    if (verify.reference) params.set("reference", verify.reference);
    if (verify.message) params.set("message", verify.message);
    else if (verify.error) params.set("message", verify.error);
    if (verify.currency) params.set("currency", verify.currency);
    if (typeof verify.amountMinor === "number")
      params.set("amountMinor", String(verify.amountMinor));
    if (verify.email) params.set("email", verify.email);
    if (verify.code != null) params.set("code", String(verify.code));

    // Replace so back button doesn't bounce between verify/failure
    router.replace(`/billing/failure?${params.toString()}`);
  }, [verifying, verify, router]);

  // Auto redirect when success
  useEffect(() => {
    if (!verify?.ok) return;
    setCountdown(3);
    const tick = setInterval(
      () => setCountdown((c) => (c > 0 ? c - 1 : 0)),
      1000
    );
    const pushTimer = setTimeout(() => {
      router.push("/user/dashboard");
    }, 3000);
    return () => {
      clearInterval(tick);
      clearTimeout(pushTimer);
    };
  }, [verify?.ok, router]);

  const success = verify?.ok === true;

  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--gray-800)]">
        {/* Top gradient bar */}
        <div className="h-1.5 w-full animate-pulse-slow bg-gradient-to-r from-[var(--primary-green)] via-[var(--primary-gold)] to-[var(--primary-green)]" />

        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="bg-brb-gradient bg-clip-text text-transparent">
              Payment Verification
            </span>
          </h1>

          {verifying ? (
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--gray-800)] p-4">
              <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-[var(--primary-green)]" />
              <p className="text-[color:var(--gray-300)]">
                Verifying your payment…
              </p>
            </div>
          ) : success ? (
            <div className="mt-6 grid gap-6">
              {/* Success banner */}
              <div className="rounded-xl border border-[color:var(--border)] bg-[rgba(0,255,102,0.08)] p-4">
                <p className="font-medium text-[var(--primary-green)]">
                  Payment confirmed 🎉
                </p>
                <ul className="mt-2 space-y-1 text-sm text-[var(--gray-300)]">
                  <li>
                    <span className="font-semibold text-white">Reference:</span>{" "}
                    {verify?.reference}
                  </li>
                  <li>
                    <span className="font-semibold text-white">Amount:</span>{" "}
                    {formatMoneyGBP(verify?.amountMinor)} {verify?.currency}
                  </li>
                  {verify?.paidAt && (
                    <li>
                      <span className="font-semibold text-white">Paid at:</span>{" "}
                      {formatDate(verify?.paidAt)}
                    </li>
                  )}
                  {verify?.email && (
                    <li>
                      <span className="font-semibold text-white">Email:</span>{" "}
                      {verify?.email}
                    </li>
                  )}
                </ul>
                <div className="mt-3 text-sm text-[var(--gray-300)]">
                  Redirecting to your dashboard in{" "}
                  <span className="font-semibold text-brb-gold">
                    {countdown}s
                  </span>
                  …
                </div>
              </div>

              {/* Subscription card */}
              <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--gray-800)] p-4">
                <p className="font-medium text-white">Your Subscription</p>
                {loadingSub ? (
                  <p className="mt-2 text-sm text-[color:var(--gray-400)]">
                    Loading subscription…
                  </p>
                ) : sub ? (
                  <ul className="mt-3 space-y-1 text-sm text-[var(--gray-300)]">
                    {sub.productName && (
                      <li>
                        <span className="font-semibold text-white">Plan:</span>{" "}
                        {sub.productName}
                      </li>
                    )}
                    {typeof sub.unitAmountMinor === "number" && (
                      <li>
                        <span className="font-semibold text-white">Price:</span>{" "}
                        {formatMoneyGBP(sub.unitAmountMinor)} /{" "}
                        {sub.intervalCount && sub.intervalCount > 1
                          ? `${sub.intervalCount} ${sub.interval}${
                              sub.intervalCount > 1 ? "s" : ""
                            }`
                          : sub.interval}
                      </li>
                    )}
                    {sub.currentPeriodEnd && (
                      <li>
                        <span className="font-semibold text-white">
                          Next billing date:
                        </span>{" "}
                        {formatDate(sub.currentPeriodEnd)}
                      </li>
                    )}
                    {sub.cancelAtPeriodEnd ? (
                      <li className="text-amber-400">
                        Auto-renew is off. You will keep access until{" "}
                        {formatDate(sub.currentPeriodEnd)}.
                      </li>
                    ) : (
                      <li className="text-[var(--primary-green)]">
                        Auto-renew is active.
                      </li>
                    )}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-[color:var(--gray-400)]">
                    No active subscription found yet. If you just paid, this
                    usually appears within a few seconds after webhook
                    processing.
                  </p>
                )}
              </div>

              {/* Manual button */}
              <div className="flex justify-end">
                <button
                  className="inline-flex items-center rounded-xl border border-[color:var(--border)] bg-brb-gradient-reverse px-4 py-2 font-semibold text-[#111827] transition hover:opacity-90"
                  onClick={() => router.push("/user/dashboard")}
                >
                  Go to dashboard now
                </button>
              </div>
            </div>
          ) : (
            // In practice, we won't render this block because the failure effect above
            // will redirect to /billing/failure. Kept as a safe fallback.
            <div className="mt-6 rounded-xl border border-[color:var(--border)] bg-[rgba(239,68,68,0.1)] p-4">
              <p className="font-medium text-red-400">Payment not confirmed</p>
              <p className="mt-1 text-sm text-[color:var(--gray-300)]">
                {verify?.message ||
                  verify?.error ||
                  "Please try again or contact support."}
              </p>
              {verify?.reference && (
                <p className="mt-2 text-xs text-[color:var(--gray-400)]">
                  Reference: {verify.reference}
                </p>
              )}
              <div className="mt-4">
                <button
                  className="inline-flex items-center rounded-xl border border-[color:var(--border)] px-4 py-2 text-white transition hover:bg-[color:var(--gray-700)]"
                  onClick={() => router.push("/pricing")}
                >
                  Try again
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom halo */}
        <div className="h-1.5 w-full animate-pulse-slow bg-gradient-to-r from-[var(--primary-gold)] via-[var(--primary-green)] to-[var(--primary-gold)]" />
      </div>
    </main>
  );
}
