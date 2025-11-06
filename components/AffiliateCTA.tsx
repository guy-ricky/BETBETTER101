"use client";

import { Sparkles, Zap, TrendingUp, Star } from "lucide-react";

type Props = {
  /** "blog" uses Campaign 101, "home" uses Campaign 102 */
  variant?: "blog" | "home";
  /** compact sidebar style */
  compact?: boolean;
  /** override URL if you ever need a special landing page */
  href?: string;
  /** override CTA text */
  label?: string;
};

/**
 * Central place to manage RevMasters links.
 * Put your real tracking URLs below (Blog=101, Home=102).
 */
const BLOG_CTA_URL = "https://record.revmasters.com/_Sh5q-z6I3kWk_ppIYX5OOGNd7ZgqdRLk/101/";
const HOME_CTA_URL = "https://record.revmasters.com/_Sh5q-z6I3kWk_ppIYX5OOGNd7ZgqdRLk/102/";

export default function AffiliateCTA({
  variant = "blog",
  compact = false,
  href,
  label,
}: Props) {
  const url = href ?? (variant === "home" ? HOME_CTA_URL : BLOG_CTA_URL);
  const ctaText =
    label ??
    (variant === "home"
      ? "Join BetUS — Boosted Soccer Odds"
      : "Bet Now at BetUS — Claim up to 250%");

  if (compact) {
    // Stunning Compact/Sidebar Style
    return (
      <div className="group relative rounded-2xl overflow-hidden border border-gray-700/60 shadow-2xl hover:shadow-brb-green transition-all duration-500">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-600/10 to-gray-900/40 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        <a
          href={url}
          target="_blank"
          rel="nofollow sponsored"
          className="relative block px-5 py-5 text-center"
        >
          {/* Icon badge */}
          <div className="mb-3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-40 animate-pulse-gold" />
              <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 p-2.5 rounded-xl">
                <Sparkles className="w-5 h-5 text-gray-900" />
              </div>
            </div>
          </div>

          {/* CTA Text */}
          <div className="space-y-1.5">
            <div className="text-sm font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              {ctaText}
            </div>
            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span>Exclusive Offer</span>
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        </a>

        {/* Disclaimer footer */}
        <div className="relative bg-gray-900/80 backdrop-blur-sm px-3 py-2.5 text-center text-[10px] text-gray-500 border-t border-gray-700/40">
          Partner link. 18+ Gamble Responsibly.
        </div>
      </div>
    );
  }

  // Stunning Full In-Article Block
  return (
    <div className="relative group my-12 mx-auto max-w-3xl">
      {/* Outer glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-700" />

      <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-gray-800/90 via-gray-900/95 to-black/90 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        </div>

        {/* Content */}
        <div className="relative p-8 text-center">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30">
            <Zap className="w-4 h-4 text-yellow-400 animate-pulse-gold" />
            <span className="text-xs font-semibold text-yellow-300 tracking-wide uppercase">
              Limited Time Offer
            </span>
          </div>

          {/* Headline */}
          <h3 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Ready to place your bets?
            </span>
          </h3>

          {/* Subheadline */}
          <p className="mb-6 text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Back your prediction with{" "}
            <span className="text-green-400 font-semibold">BetUS</span> and
            enjoy up to{" "}
            <span className="inline-block px-2 py-0.5 bg-yellow-400/20 text-yellow-300 font-bold rounded border border-yellow-500/30">
              250% bonus
            </span>{" "}
            on your first deposit!
          </p>

          {/* CTA Button */}
          <a
            href={url}
            target="_blank"
            rel="nofollow sponsored"
            className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold text-lg rounded-2xl shadow-brb-green hover:shadow-brb-gold hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

            <TrendingUp className="relative w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
            <span className="relative">{ctaText}</span>
            <Sparkles className="relative w-5 h-5 group-hover/btn:rotate-180 transition-transform duration-500" />
          </a>

          {/* Trust indicators */}
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-green" />
              <span>Secure Payment</span>
            </div>
            <div className="w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse-gold" />
              <span>Instant Withdrawal</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-4 border-t border-gray-700/50 text-xs text-gray-500">
            Partner link. 18+ Gamble Responsibly.
          </div>
        </div>
      </div>
    </div>
  );
}
