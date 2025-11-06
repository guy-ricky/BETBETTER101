/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import prisma from "@/utils";
import { requireAdmin } from "@/lib/auth";

// Helpers
const GBP = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

function toISODateOrDefault(s: string | null, d: Date) {
  return s ? new Date(s) : d;
}

function daysAgo(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

export async function GET(req: Request) {
  try {
    await requireAdmin();

    const url = new URL(req.url);
    const fromParam = url.searchParams.get("from");
    const toParam = url.searchParams.get("to");

    // default: last 90 days window for predictions, but MRR proxy is last 30
    const defaultFrom = daysAgo(90);
    const defaultTo = new Date();

    const from = toISODateOrDefault(fromParam, defaultFrom);
    const to = toISODateOrDefault(toParam, defaultTo);

    // Revenue proxy windows
    const now = new Date();
    const currentFrom = daysAgo(30);
    const currentTo = now;

    const prevFrom = daysAgo(60);
    const prevTo = daysAgo(30);

    // 1) Users (active flag)
    const [activeUsers, allUsers] = await Promise.all([
      prisma.user.count({ where: { isSubscribed: true } }),
      prisma.user.count(),
    ]);

    // 2) Payments (status "SUCCEEDED", "PAID", "SUCCESS", "COMPLETED")
    const successStatus = ["SUCCEEDED", "PAID", "SUCCESS", "COMPLETED"];
    const [paymentsCurrent, paymentsPrev] = await Promise.all([
      prisma.payment.findMany({
        where: {
          status: { in: successStatus },
          createdAt: { gte: currentFrom, lte: currentTo },
        },
        select: { id: true, amount: true, userId: true },
      }),
      prisma.payment.findMany({
        where: {
          status: { in: successStatus },
          createdAt: { gte: prevFrom, lte: prevTo },
        },
        select: { id: true, amount: true, userId: true },
      }),
    ]);

    const mrr = GBP(paymentsCurrent.reduce((s, p) => s + (p.amount || 0), 0));
    const paidUsersCurrent = new Set(paymentsCurrent.map((p) => p.userId));
    const paidUsersPrev = new Set(paymentsPrev.map((p) => p.userId));
    const activeDerived = paidUsersCurrent.size;

    // Proxy churn: were active last window (paid) but not in current
    let churnLogos = 0;
    for (const id of paidUsersPrev) if (!paidUsersCurrent.has(id)) churnLogos++;
    const churnRatePercent = paidUsersPrev.size
      ? +((churnLogos / paidUsersPrev.size) * 100).toFixed(2)
      : 0;

    // ARPU (use admin-flag or derived—choose the larger for safety)
    const denom = activeUsers || activeDerived || 1;
    const arpu = GBP(mrr / denom);

    // 3) Predictions (accuracy, buckets, leagues)
    const predictions = await prisma.prediction.findMany({
      where: { date: { gte: from, lte: to } },
      select: {
        id: true,
        leagueSlug: true,
        outcome: true,
        impliedOdds: true,
        exactHit: true,
        status: true,
      },
    });

    // consider a prediction "settled" if outcome is present
    const settled = predictions.filter((p) => !!p.outcome);
    const total = settled.length;
    const wins = settled.filter((p) => p.outcome === "WIN").length;
    const exacts = settled.filter((p) => p.exactHit).length;
    const accuracy = total ? +((wins / total) * 100).toFixed(2) : 0;
    const exactHitRate = total ? +((exacts / total) * 100).toFixed(2) : 0;

    // confidence buckets from impliedOdds (decimal odds -> implied probability = 1/odds)
    // if impliedOdds missing, we skip
    const withOdds = settled.filter(
      (p) => typeof p.impliedOdds === "number" && p.impliedOdds! > 0
    );
    function probFromOdds(o: number) {
      return 1 / o;
    } // decimal odds
    const buckets = [
      { label: "0.90–1.00", min: 0.9, max: 1.0 },
      { label: "0.75–0.89", min: 0.75, max: 0.89 },
      { label: "0.60–0.74", min: 0.6, max: 0.74 },
      { label: "0.00–0.59", min: 0.0, max: 0.59 },
    ].map((b) => {
      const inBucket = withOdds.filter((p) => {
        const prob = probFromOdds(p.impliedOdds!);
        return prob >= b.min && prob <= b.max;
      });
      const w = inBucket.filter((p) => p.outcome === "WIN").length;
      const acc = inBucket.length
        ? +((w / inBucket.length) * 100).toFixed(2)
        : 0;
      return { bucket: b.label, count: inBucket.length, accuracy: acc };
    });

    // League accuracy
    const byLeague = new Map<string, { total: number; wins: number }>();
    for (const p of settled) {
      const k = p.leagueSlug || "unknown";
      const v = byLeague.get(k) ?? { total: 0, wins: 0 };
      v.total++;
      if (p.outcome === "WIN") v.wins++;
      byLeague.set(k, v);
    }
    const leagueAccuracy = Array.from(byLeague.entries())
      .map(([league, v]) => ({
        league,
        total: v.total,
        accuracy: +((v.wins / v.total) * 100).toFixed(2),
      }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 12);

    return NextResponse.json({
      range: { from: from.toISOString(), to: to.toISOString() },
      kpis: {
        mrr, // £ per last 30 days (proxy)
        activeSubscribersFlag: activeUsers,
        activeSubscribersDerived: activeDerived,
        arpu,
        churnRatePercent, // proxy
        predictionAccuracyPercent: accuracy,
        exactHitRatePercent: exactHitRate,
        totalSettled: total,
      },
      buckets, // may be empty if no impliedOdds
      leagueAccuracy,
      totals: {
        users: allUsers,
        paymentsCurrent: paymentsCurrent.length,
        paymentsPrev: paymentsPrev.length,
      },
      notes: [
        "MRR/churn are computed from successful payments in 30-day windows (proxy).",
        "For precise SaaS metrics, add a Subscription model with start/cancel and price.",
      ],
    });
  } catch (e: any) {
    console.log("[ADMIN_METRICS]", e);
    return NextResponse.json({ error: e.message ?? "Error" }, { status: 401 });
  }
}
