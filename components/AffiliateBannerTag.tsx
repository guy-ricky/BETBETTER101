"use client";
import Script from "next/script";

type Props = {
  prefix: string; // e.g. "Sh5q-z6I3kXGs5YK48Vb6WNd7ZgqdRLk"
  media: number; // e.g. 690
  campaign?: number; // e.g. 102
  className?: string;
  fallbackHref?: string;
  fallbackLabel?: string;
};

export default function AffiliateBannerTag({
  prefix,
  media,
  campaign,
  className = "",
  fallbackHref,
  fallbackLabel = "Bet Now",
}: Props) {
  const src =
    `https://js.revmasters.com/javascript.php?prefix=${encodeURIComponent(
      prefix
    )}` +
    `&media=${media}` +
    (campaign ? `&campaign=${campaign}` : "");

  return (
    <div
      className={[
        "rounded-2xl border border-gray-700/50 overflow-hidden shadow-lg hover:shadow-green-500/20 transition-shadow",
        className,
      ].join(" ")}
    >
      {/* RevMasters injects the banner markup when this runs */}
      <Script src={src} strategy="afterInteractive" />

      {/* Fallback if JS is blocked */}
      {fallbackHref && (
        <div className="bg-[#0b0b0b] px-3 py-2 text-center">
          <a
            href={fallbackHref}
            target="_blank"
            rel="nofollow sponsored"
            className="text-sm font-semibold text-green-400 hover:text-green-300"
          >
            {fallbackLabel}
          </a>
        </div>
      )}

      <div className="bg-[#0b0b0b] px-3 py-2 text-center text-[11px] text-gray-500">
        Partner link. 18+ Gamble Responsibly.
      </div>
    </div>
  );
}
