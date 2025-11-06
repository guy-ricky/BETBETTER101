/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CancelSubscriptionButton({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "ghost";
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [manageUrl, setManageUrl] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const handleCancel = async () => {
    setLoading(true);
    setMsg(null);
    setManageUrl(null);

    try {
      const res = await fetch("/api/subscriptions/cancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ when: "period_end" }),
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(data?.error || "Failed to cancel subscription");

      if (data.manageUrl) {
        setManageUrl(data.manageUrl);
        setMsg(
          "To finalize cancellation with Paystack, open the secure manage link below."
        );
      } else {
        setMsg(
          data.message ||
            "Your subscription won't renew. You'll keep access until the end of the current period."
        );
      }

      // Close dialog after successful cancellation
      setOpen(false);
    } catch (error: any) {
      setMsg(error.message || "Something went wrong.");
      console.log("Cancel Subscription error!", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              variant === "ghost"
                ? "border border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50"
                : "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl"
            } hover:scale-[1.02] active:scale-[0.98]`}
          >
            Cancel Subscription
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-gray-800 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground">
              Cancel Subscription?
            </DialogTitle>
            <DialogDescription className="text-gray-300 pt-2">
              Are you sure you want to cancel your subscription? You&apos;ll
              keep access until your current period ends.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0 mt-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              disabled={loading}
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-200 border border-gray-600 text-gray-300 hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Keep Subscription
            </button>
            <button
              type="button"
              onClick={handleCancel}
              disabled={loading}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl ${
                loading
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:scale-[1.02] active:scale-[0.98]"
              }`}
              aria-busy={loading}
            >
              {loading ? "Processing..." : "Yes, Cancel"}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {msg && (
        <div className="mt-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700 animate-modal-in">
          <p className="text-sm text-gray-300 leading-relaxed">
            {msg}{" "}
            {manageUrl && (
              <Link
                href={manageUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 underline text-brb-green hover:text-[#00e055] transition-colors decoration-brb-green/30 hover:decoration-brb-green underline-offset-2"
              >
                Open manage link
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
