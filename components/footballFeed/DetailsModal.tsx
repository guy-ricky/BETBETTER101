"use client";

import { formatWhen } from "@/utils/constants";
import DetailsBody from "./DetailsBody";
import SmallChip from "./SmallChip";
import TypeBadge from "./TypeBadge";
import { Info, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { FeedItem } from "@/types/footballFeed";

export default /** ---------- Enhanced Modal ---------- */
function DetailsModal({
  open,
  onClose,
}: {
  open: FeedItem | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!panelRef.current) return;
      if (e.target instanceof Node && !panelRef.current.contains(e.target)) {
        onClose();
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-[60] grid place-items-center p-4"
    >
      {/* Enhanced Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-[#00FF66]/5 to-[#FFD700]/5 animate-pulse-slow rounded-full" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-[#FFD700]/5 to-[#00FF66]/5 animate-pulse-slow animation-delay-2000 rounded-full" />
      </div>

      {/* Enhanced Panel */}
      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-4xl rounded-3xl border border-[#2a2a2a] bg-gradient-to-br from-[#161616] via-[#111111] to-[#0a0a0a] shadow-2xl animate-modal-in backdrop-blur-xl"
        style={{
          boxShadow:
            "0 25px 50px -12px rgba(0, 255, 102, 0.15), 0 0 30px rgba(255, 215, 0, 0.1)",
        }}
      >
        {/* Header with gradient border */}
        <div className="relative p-6 border-b border-[#2a2a2a]">
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#00FF66] to-transparent" />

          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <TypeBadge type={open.type} />
                <span className="text-xs text-gray-400 font-medium bg-[#1a1a1a] px-2 py-1 rounded-lg">
                  {formatWhen(open.when)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:bg-[#252525] text-gray-300 transition-all duration-200 hover:scale-110 active:scale-95"
                  aria-label="Close"
                  title="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white leading-tight">
                {open.title}
              </h3>
              {open.subtitle && (
                <p className="text-lg text-gray-300 leading-relaxed">
                  {open.subtitle}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {open.league && (
                  <SmallChip
                    icon={<Info className="h-3.5 w-3.5" />}
                    variant="green"
                  >
                    {open.league}
                  </SmallChip>
                )}
                {open.teams && (
                  <SmallChip variant="gold">{open.teams}</SmallChip>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar space-y-6">
          <DetailsBody item={open} />
        </div>
      </div>
    </div>
  );
}