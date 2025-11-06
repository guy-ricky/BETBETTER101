export const runtime = "nodejs";

import { NextResponse } from "next/server";

// simple in-memory cache (per server instance)
let cachedRate: number | null = null;
let cachedAt = 0;
// 6h cache window
const TTL_MS = 6 * 60 * 60 * 1000;
// last-resort fallback (rough mid-rate; adjust if you like)
const FALLBACK_RATE = 1 / 180; // ≈ £1 = KES 180

export async function GET() {
    const now = Date.now();
    try {
        if (!cachedRate || now - cachedAt > TTL_MS) {
            // Free ECB feed (Frankfurter) — no key needed
            const res = await fetch(
                "https://api.frankfurter.app/latest?from=KES&to=GBP",
                { next: { revalidate: TTL_MS / 1000 } } // extra caching hint
            );
            if (!res.ok) throw new Error("FX fetch failed");
            const json = await res.json();
            const rate = Number(json?.rates?.GBP);
            if (!Number.isFinite(rate)) throw new Error("Bad FX data");
            cachedRate = rate;
            cachedAt = now;
        }
        return NextResponse.json({ rate: cachedRate });
    } catch {
        // serve fallback so UI never shows £—
        return NextResponse.json({ rate: FALLBACK_RATE });
    }
}
