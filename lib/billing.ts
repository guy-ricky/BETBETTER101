// lib/billing.ts
import { SubscriptionStatus } from "@/lib/generated/prisma"; // adjust path if different

type Sub = {
    status: SubscriptionStatus;
    interval: string;          // "day" | "week" | "month" | "year"
    intervalCount: number;     // 1, 3, 12, etc.
    currentPeriodStart: Date | null;
    currentPeriodEnd: Date | null;
    cancelAtPeriodEnd: boolean;
};

/** Add intervalCount * interval to a given date */
export function addInterval(base: Date, unit: string, count: number): Date {
    const d = new Date(base);
    switch (unit) {
        case "day":
        case "days":
            d.setDate(d.getDate() + count);
            break;
        case "week":
        case "weeks":
            d.setDate(d.getDate() + count * 7);
            break;
        case "month":
        case "months":
            d.setMonth(d.getMonth() + count);
            break;
        case "year":
        case "years":
            d.setFullYear(d.getFullYear() + count);
            break;
        default:
            // fallback as month
            d.setMonth(d.getMonth() + count);
    }
    return d;
}

/**
 * Decide what to show as the "next billing date".
 * - If cancelAtPeriodEnd=true, we still show currentPeriodEnd but label as "Ends".
 * - If ACTIVE and currentPeriodEnd exists -> use it
 * - Else, if currentPeriodStart exists -> compute fallback
 * - Else return null
 */
export function computeNextBillingDate(sub: Sub | null): {
    date: Date | null;
    label: "RENEWS" | "ENDS" | "N/A";
} {
    if (!sub) return { date: null, label: "N/A" };

    const ends = Boolean(sub.cancelAtPeriodEnd);
    const label = ends ? "ENDS" : "RENEWS";

    if (sub.currentPeriodEnd) {
        return { date: new Date(sub.currentPeriodEnd), label };
    }

    if (sub.currentPeriodStart) {
        const next = addInterval(
            new Date(sub.currentPeriodStart),
            sub.interval,
            sub.intervalCount || 1
        );
        return { date: next, label };
    }

    return { date: null, label: "N/A" };
}
