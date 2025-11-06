"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function BillingFailurePage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-3xl p-6">
          <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--gray-800)]">
            <div className="h-1.5 w-full animate-pulse-slow bg-gradient-to-r from-[var(--primary-gold)] via-[var(--primary-green)] to-[var(--primary-gold)]" />
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                <span className="bg-brb-gradient bg-clip-text text-transparent">
                  Payment Failed
                </span>
              </h1>
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--gray-800)] p-4">
                <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-[var(--primary-gold)]" />
                <p className="text-[color:var(--gray-300)]">Loading details…</p>
              </div>
            </div>
            <div className="h-1.5 w-full animate-pulse-slow bg-gradient-to-r from-[var(--primary-green)] via-[var(--primary-gold)] to-[var(--primary-green)]" />
          </div>
        </main>
      }
    >
      <FailureInner />
    </Suspense>
  );
}

function FailureInner() {
  const sp = useSearchParams();
  const router = useRouter();

  const reference = sp.get("reference") || "";
  const message = sp.get("message") || "Payment was not confirmed.";
  const code = sp.get("code") || "";
  const currency = sp.get("currency") || "";
  const amountMinorStr = sp.get("amountMinor");
  const amountMinor = amountMinorStr ? Number(amountMinorStr) : undefined;
  const email = sp.get("email") || "";

  const formattedAmount =
    typeof amountMinor === "number" && !Number.isNaN(amountMinor)
      ? new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: currency || "GBP",
        }).format(amountMinor / 100)
      : undefined;

  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--gray-800)]">
        {/* Top gradient */}
        <div className="h-1.5 w-full animate-pulse-slow bg-gradient-to-r from-[var(--primary-gold)] via-[var(--primary-green)] to-[var(--primary-gold)]" />

        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="bg-brb-gradient bg-clip-text text-transparent">
              Payment Failed
            </span>
          </h1>

          <div className="mt-6 rounded-xl border border-[color:var(--border)] bg-[rgba(239,68,68,0.1)] p-4">
            <p className="font-medium text-red-400">
              We couldn’t confirm your payment.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-[var(--gray-300)]">
              <li>
                <span className="font-semibold text-white">Reason:</span>{" "}
                {message}
              </li>
              {reference && (
                <li>
                  <span className="font-semibold text-white">Reference:</span>{" "}
                  {reference}
                </li>
              )}
              {formattedAmount && (
                <li>
                  <span className="font-semibold text-white">Amount:</span>{" "}
                  {formattedAmount} {currency}
                </li>
              )}
              {email && (
                <li>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  {email}
                </li>
              )}
              {code && (
                <li>
                  <span className="font-semibold text-white">Code:</span> {code}
                </li>
              )}
            </ul>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                className="inline-flex items-center rounded-xl border border-[color:var(--border)] px-4 py-2 text-white transition hover:bg-[color:var(--gray-700)]"
                onClick={() => router.push("/pricing")}
              >
                Try again
              </button>

              <button
                className="inline-flex items-center rounded-xl border border-[color:var(--border)] bg-brb-gradient-reverse px-4 py-2 font-semibold text-[#111827] transition hover:opacity-90"
                onClick={() => router.push("/user/dashboard")}
              >
                Go to dashboard
              </button>

              <a
                className="inline-flex items-center rounded-xl border border-[color:var(--border)] px-4 py-2 text-white/90 hover:text-white transition"
                href={`mailto:support@betbetter101.com?subject=Payment%20help%20${encodeURIComponent(
                  reference || ""
                )}&body=${encodeURIComponent(
                  `Hi team,\n\nI need help with a payment.\n\nReference: ${reference}\nMessage: ${message}\nCode: ${code}\nEmail: ${email}\n\nThanks.`
                )}`}
              >
                Contact support
              </a>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-6 rounded-xl border border-[color:var(--border)] bg-[color:var(--gray-800)] p-4">
            <p className="font-medium text-white">Common causes</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-[var(--gray-300)] space-y-1">
              <li>Card declined or insufficient funds.</li>
              <li>Currency/channel not supported by your bank.</li>
              <li>Temporary network issues.</li>
            </ul>
          </div>
        </div>

        {/* Bottom halo */}
        <div className="h-1.5 w-full animate-pulse-slow bg-gradient-to-r from-[var(--primary-green)] via-[var(--primary-gold)] to-[var(--primary-green)]" />
      </div>
    </main>
  );
}
