/* eslint-disable @next/next/no-img-element */
// components/AffiliateBannerImage.tsx
import Link from "next/link";

export default function AffiliateBannerImage({
  href,
  src,
  alt = "BetUS — Bet Now",
  className = "",
}: {
  href: string; // your Landing page URL (campaign=102 for homepage)
  src: string; // the banner image URL from "View media"
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-gray-700/50 overflow-hidden shadow-lg ${className}`}
    >
      <Link
        href={href}
        target="_blank"
        rel="nofollow sponsored"
        aria-label={alt}
        className="block bg-[#0d0f12]"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-[70px] object-cover"
          loading="lazy"
        />
      </Link>
      <div className="bg-[#0b0b0b] px-3 py-2 text-center text-[11px] text-gray-500">
        Partner link. 18+ Gamble Responsibly.
      </div>
    </div>
  );
}
