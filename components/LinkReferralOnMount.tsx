"use client";
import { useEffect, useRef } from "react";

export default function LinkReferralOnMount() {
  const done = useRef(false);
  useEffect(() => {
    if (done.current) return;
    done.current = true;
    // fire-and-forget; ignore errors
    fetch("/api/auth/link-referral", { method: "POST" }).catch(() => {});
  }, []);
  return null;
}
