"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function PricingPage() {
  const features = [
    "AI-powered match predictions",
    "In-depth sports analytics and statistics",
    "Access to VIP-only tips & Telegram channel",
    "Ad-free premium experience",
    "Instant updates on game outcomes",
  ];

  return (
    <main className="min-h-screen bg-[#111827] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#00FF66]">
          Choose Your Plan
        </h1>
        <p className="text-gray-400 mb-12">
          Unlock full access to BetBetter101’s VIP analytics and predictions.
          Choose the plan that fits your betting strategy.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* === Monthly Plan === */}
          <div className="border border-gray-700 rounded-2xl bg-[#1F2937] p-8 hover:border-[#00FF66] transition-all">
            <h2 className="text-2xl font-semibold mb-2 text-[#FFD700]">
              Monthly Access
            </h2>
            <p className="text-4xl font-bold mb-6">
              £35<span className="text-lg text-gray-400"> / month</span>
            </p>

            <ul className="space-y-3 mb-8 text-left">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="text-[#00FF66]" size={20} />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/user/subscribe"
              className="w-full bg-[#00FF66] text-black py-3 rounded-lg font-semibold hover:bg-[#00cc52] transition-colors"
            >
              Subscribe Monthly
            </Link>
          </div>

          {/* === 7-Month Plan === */}
          <div className="border border-gray-700 rounded-2xl bg-[#1F2937] p-8 hover:border-[#FFD700] transition-all">
            <h2 className="text-2xl font-semibold mb-2 text-[#FFD700]">
              7-Month VIP Access
            </h2>
            <p className="text-4xl font-bold mb-6">
              £250<span className="text-lg text-gray-400"> / 7 months</span>
            </p>

            <ul className="space-y-3 mb-8 text-left">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="text-[#FFD700]" size={20} />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/user/subscribe"
              className="w-full bg-[#FFD700] text-black py-3 rounded-lg font-semibold hover:bg-[#e6c200] transition-colors"
            >
              Subscribe 7-Month Plan
            </Link>
          </div>
        </div>

        <p className="mt-12 text-gray-500 text-sm">
          By subscribing, you agree to our{" "}
          <Link href="/terms" className="underline text-[#FFD700]">
            Terms & Conditions
          </Link>
          ,{" "}
          <Link href="/privacy" className="underline text-[#FFD700]">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/refunds" className="underline text-[#FFD700]">
            Refund Policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
