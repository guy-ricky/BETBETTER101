"use client";

import { useEffect, useMemo, useState } from "react";
import { Share2, Link2, Check } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

interface ShareBtnProps {
  title: string;
  url?: string;
  description?: string;
  hashtags?: string[];
}

export default function ShareBtn({
  title,
  url,
  description,
  hashtags = [],
}: ShareBtnProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    if (
      typeof navigator !== "undefined" &&
      typeof navigator.share === "function"
    ) {
      setCanNativeShare(true);
    }
  }, []);

  // Resolve the URL only on the client to avoid hydration mismatches
  const shareUrl = useMemo(
    () => (typeof window !== "undefined" ? url || window.location.href : ""),
    [url]
  );
  const shareText = description || title;

  const copyToClipboard = async (text = shareUrl) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const openPopup = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer,width=600,height=600");
    setIsOpen(false);
  };

  const nativeShare = async () => {
    try {
      await navigator.share({ title, text: shareText, url: shareUrl });
      setIsOpen(false);
    } catch {
      // user cancelled or unsupported
    }
  };

  // sanitize hashtags (remove leading #)
  const hashList = (hashtags || []).map((h) => h.replace(/^#/, ""));

  const items = [
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      onClick: () =>
        openPopup(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText || title
          )}&url=${encodeURIComponent(shareUrl)}${
            hashList.length
              ? `&hashtags=${encodeURIComponent(hashList.join(","))}`
              : ""
          }`
        ),
      color: "hover:bg-sky-500/20 hover:border-sky-500/50 hover:text-sky-400",
      bgGradient: "from-sky-500/10 to-sky-600/10",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      onClick: () =>
        openPopup(
          `https://wa.me/?text=${encodeURIComponent(`${title}\n${shareUrl}`)}`
        ),
      color:
        "hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-400",
      bgGradient: "from-green-500/10 to-green-600/10",
    },
    // Instagram/TikTok: copy first, then open so the user can paste
    {
      name: "Instagram",
      icon: FaInstagram,
      onClick: async () => {
        await copyToClipboard(`${title} - ${shareUrl}`);
        window.open(
          "https://www.instagram.com/",
          "_blank",
          "noopener,noreferrer"
        );
        setIsOpen(false);
      },
      color:
        "hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-400",
      bgGradient: "from-pink-500/10 to-pink-600/10",
    },
    {
      name: "TikTok",
      icon: AiFillTikTok,
      onClick: async () => {
        await copyToClipboard(`${title} - ${shareUrl}`);
        window.open("https://www.tiktok.com/", "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
      color:
        "hover:bg-fuchsia-500/20 hover:border-fuchsia-500/50 hover:text-fuchsia-400",
      bgGradient: "from-fuchsia-500/10 to-fuchsia-600/10",
    },
  ] as const;

  return (
    <div className="relative inline-block">
      {/* Main Share Button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 px-4 py-2.5 text-sm font-semibold text-green-400 hover:from-green-500/20 hover:to-green-600/20 hover:border-green-500/50 hover:text-green-300 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-green-500/10"
        aria-label="Share"
        aria-expanded={isOpen}
      >
        <Share2 className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        <span>Share</span>
        <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl shadow-black/50 backdrop-blur-sm animate-modal-in">
            <div className="absolute -top-2 right-4 h-4 w-4 rotate-45 bg-gray-800 border-l border-t border-gray-700/50" />
            <div className="relative space-y-2 p-3">
              {/* Native device share (if supported) */}
              {canNativeShare && (
                <button
                  onClick={nativeShare}
                  className="group/item w-full flex items-center gap-3 rounded-lg border border-gray-700/50 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 px-4 py-3 text-left text-sm font-medium text-gray-200 transition-all duration-300 hover:bg-emerald-500/15 hover:border-emerald-500/50 hover:text-white transform hover:translate-x-1"
                >
                  <Share2 className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                  <span>Share via device</span>
                </button>
              )}

              {/* Platform buttons */}
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    className={`group/item w-full flex items-center gap-3 rounded-lg border border-gray-700/50 bg-gradient-to-r ${item.bgGradient} px-4 py-3 text-left text-sm font-medium text-gray-300 transition-all duration-300 ${item.color} transform hover:translate-x-1`}
                    aria-label={`Share on ${item.name}`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                    <span>Share on {item.name}</span>
                  </button>
                );
              })}

              {/* Copy Link */}
              <button
                onClick={() => copyToClipboard()}
                className="group/item w-full flex items-center gap-3 rounded-lg border border-gray-700/50 bg-gradient-to-r from-gray-700/10 to-gray-800/10 px-4 py-3 text-left text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-gray-700/20 hover:border-green-500/50 hover:text-green-400 transform hover:translate-x-1"
                aria-label="Copy link"
              >
                {copied ? (
                  <>
                    <Check className="h-5 w-5 flex-shrink-0 text-green-400" />
                    <span className="font-semibold text-green-400">
                      Link copied!
                    </span>
                  </>
                ) : (
                  <>
                    <Link2 className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                    <span>Copy link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
