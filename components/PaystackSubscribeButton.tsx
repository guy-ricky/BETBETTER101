/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";

type PlanKey = "monthly" | "quarterly";

const CURRENCY = "£";
const MONTHLY_PRICE = 35; // £35
const THREE_MONTHS_PRICE = 75; // £75

export default function PaystackSubscribeButton() {
  const [loadingPlan, setLoadingPlan] = useState<PlanKey | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout(planKey: PlanKey) {
    try {
      setError(null);
      setLoadingPlan(planKey);
      const res = await fetch("/api/payments/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planKey }),
      });
      const data = await res.json();
      if (!res.ok || !data?.url) {
        throw new Error(data?.error || "Failed to initialize checkout");
      }
      window.location.href = data.url;
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
      setLoadingPlan(null);
    }
  }

  return (
    <section aria-label="BetBetter101 Pricing" className="w-full">
      {/* Header */}
      <div className="mx-auto max-w-4xl text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Unlock smarter betting with{" "}
          <span className="bg-brb-gradient bg-clip-text text-white">
            data-driven insights
          </span>
        </h2>
        <p className="mt-3 text-[color:var(--gray-300)]">
          Secure Paystack checkout in GBP. Instant access. Cancel anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 sm:p-6">
        {/* Monthly */}
        <div className="relative group rounded-2xl">
          {/* glow frame */}
          <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-[var(--primary-green)] to-[var(--primary-gold)] opacity-70 blur-sm group-hover:opacity-100 transition duration-300"></div>

          <div className="relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--gray-800)] p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-widest text-[color:var(--gray-400)] uppercase">
                Monthly
              </span>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold bg-brb-gradient bg-clip-text text-white rounded p-1">
                {CURRENCY}
                {MONTHLY_PRICE}
              </span>
              <span className="text-sm text-[color:var(--gray-500)]">
                /month
              </span>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-[color:var(--gray-300)] text-left">
              <li className="flex gap-2">
                <span className="text-brb-green">●</span> Daily & weekly
                predictions
              </li>
              <li className="flex gap-2">
                <span className="text-brb-green">●</span> Telegram alerts
              </li>
              <li className="flex gap-2">
                <span className="text-brb-green">●</span> Cancel anytime
              </li>
            </ul>

            <button
              aria-label="Subscribe to Monthly Plan"
              onClick={() => startCheckout("monthly")}
              disabled={loadingPlan !== null}
              className={[
                "mt-6 w-full rounded-xl px-5 py-3 font-semibold",
                "bg-[color:var(--gray-700)] hover:bg-[color:var(--gray-600)]",
                "text-white transition-all duration-300",
                "group-hover:shadow-brb-green",
                loadingPlan
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:scale-[1.02]",
              ].join(" ")}
            >
              {loadingPlan === "monthly"
                ? "Redirecting…"
                : "Start monthly plan"}
            </button>

            <p className="mt-3 text-xs text-[color:var(--gray-400)] flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="opacity-80"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18L19 6v5c0 4.73-3.16 9.18-7 10.44C8.16 20.18 5 15.73 5 11V6l7-2.82zM11 7h2v6h-2V7zm0 8h2v2h-2v-2z" />
              </svg>
              Secure Paystack checkout • GBP
            </p>
          </div>
        </div>

        {/* 3 Months – Featured */}
        <div className="relative group rounded-2xl">
          {/* animated halo */}
          <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-[var(--primary-gold)] via-[var(--primary-green)] to-[var(--primary-gold)] blur-sm opacity-90 animate-pulse-slow group-hover:opacity-100 transition"></div>

          <div className="relative rounded-2xl border border-brb-green bg-[color:var(--gray-800)] p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-widest text-[color:var(--primary-green)] uppercase">
                3 Months
              </span>
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-[var(--primary-gold)] text-[color:var(--background)]">
                BEST VALUE
              </span>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-brb-gold">
                {CURRENCY}
                {THREE_MONTHS_PRICE}
              </span>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-[color:var(--gray-300)]">
              <li className="flex gap-2">
                <span className="text-brb-gold">●</span> Full 3-month access
              </li>
              <li className="flex gap-2">
                <span className="text-brb-green">●</span> Telegram alerts
              </li>
              <li className="flex gap-2">
                <span className="text-brb-gold">●</span> Priority support
              </li>
              <li className="flex gap-2">
                <span className="text-brb-gold">●</span> Pro insights & streaks
                tracker
              </li>
            </ul>

            <button
              aria-label="Subscribe to 3 Months Plan"
              onClick={() => startCheckout("quarterly")}
              disabled={loadingPlan !== null}
              className={[
                "mt-6 w-full rounded-xl px-5 py-3 font-semibold",
                "bg-brb-gradient hover:opacity-90",
                "text-[#111827] transition-all duration-300",
                "group-hover:shadow-brb-gold",
                loadingPlan
                  ? "opacity-80 cursor-not-allowed"
                  : "hover:scale-[1.02]",
              ].join(" ")}
            >
              {loadingPlan === "quarterly"
                ? "Redirecting…"
                : "Get 3 Months Access"}
            </button>

            <p className="mt-3 text-xs text-[color:var(--gray-400)]">
              One-time payment • No hidden fees
            </p>
          </div>
        </div>
      </div>

      {/* Error banner */}
      {error && (
        <div className="mx-auto max-w-3xl mt-4 rounded-lg border border-[color:var(--border)] bg-[color:var(--gray-800)] p-4 text-[color:var(--destructive)]">
          {error}
        </div>
      )}
    </section>
  );
}
