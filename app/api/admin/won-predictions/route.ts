/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/admin/won-predictions/route.ts

export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { auth, createClerkClient } from "@clerk/nextjs/server";
import prisma from "@/utils";

/**
 * Computation rules:
 * - EXACT HIT: predictedHome === actualHome AND predictedAway === actualAway
 * - WIN (non-exact): outcome type matches (draw vs not draw) and, for non-draw,
 *   the winning side matches (same sign of (home - away)).
 *   Examples:
 *     predicted 1-1 vs actual 0-0  -> WIN (draw), not exact
 *     predicted 1-2 vs actual 3-5  -> WIN (away win), not exact
 *     predicted 2-0 vs actual 1-2  -> LOSE (pred home win vs actual away win)
 */
function computeOutcome(
  predictedHome: number,
  predictedAway: number,
  actualHome: number | null | undefined,
  actualAway: number | null | undefined
) {
  if (actualHome == null || actualAway == null) {
    return { pending: true, exactHit: false, win: false, outcome: "PENDING" as const };
  }

  const exactHit = predictedHome === actualHome && predictedAway === actualAway;
  const predDiff = predictedHome - predictedAway;
  const actDiff = actualHome - actualAway;

  const predIsDraw = predDiff === 0;
  const actIsDraw = actDiff === 0;

  const win =
    exactHit ||
    (predIsDraw && actIsDraw) ||
    (!predIsDraw && !actIsDraw && Math.sign(predDiff) === Math.sign(actDiff));

  return { pending: false, exactHit, win, outcome: win ? (exactHit ? "EXACT_HIT" : "WIN") : "LOSE" as const };
}

/* type PredictionDTO = {
  id: string;
  date: Date;
  league: string;           // leagueSlug for display (map to full name client-side if desired)
  homeTeam: string;
  awayTeam: string;
  pick: string;
  predictedScore: string;   // "PH-PA"
  actualScore: string;      // "AH-AA" or ""
  win: boolean;
  exactHit: boolean;
  outcome: "PENDING" | "WIN" | "EXACT_HIT" | "LOSE";
}; */

export async function GET(req: Request) {
  try {
    // ---------- AuthZ ----------
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const clerkClient = createClerkClient({
      publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
      secretKey: process.env.CLERK_SECRET_KEY!,
    });
    const user = await clerkClient.users.getUser(userId);
    const email =
      user?.primaryEmailAddress?.emailAddress ||
      user?.emailAddresses?.[0]?.emailAddress ||
      "";

    // Prefer DB role when available, fall back to Clerk metadata/email heuristic
    const dbUser = await prisma.user.findUnique({
      where: { clerkUserId: userId },
      select: { role: true },
    });
    const role =
      (dbUser?.role as "ADMIN" | "USER" | undefined) ??
      ((user?.publicMetadata?.role as string | undefined) as
        | "ADMIN"
        | "USER"
        | undefined);

    const isAdmin = role === "ADMIN" || email.includes("admin");
    if (!isAdmin) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // ---------- Query params ----------
    const { searchParams } = new URL(req.url);
    const q = (searchParams.get("query") || "").trim();
    const pageParam = parseInt(searchParams.get("page") || "1", 10);
    const sizeParam = parseInt(searchParams.get("pageSize") || "12", 10);

    const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;
    const pageSizeRaw =
      Number.isFinite(sizeParam) && sizeParam > 0 ? sizeParam : 12;
    const pageSize = Math.min(Math.max(pageSizeRaw, 1), 100); // clamp 1..100

    // ---------- Filter: finished predictions (have actual scores) ----------
    const where: any = {
      // Only include predictions that have actual scores (i.e., previous/finished)
      actualHome: { not: null },
      actualAway: { not: null },
    };

    // Optional search
    if (q) {
      const asNumber = Number(q);
      const isNum = !Number.isNaN(asNumber);
      where.OR = [
        { homeTeam: { contains: q, mode: "insensitive" } },
        { awayTeam: { contains: q, mode: "insensitive" } },
        { leagueSlug: { contains: q, mode: "insensitive" } },
        { pick: { contains: q, mode: "insensitive" } },
        // allow searching by predicted or actual goal counts
        isNum ? { predictedHome: { equals: asNumber } } : undefined,
        isNum ? { predictedAway: { equals: asNumber } } : undefined,
        isNum ? { actualHome: { equals: asNumber } } : undefined,
        isNum ? { actualAway: { equals: asNumber } } : undefined,
      ].filter(Boolean);
    }

    // ---------- Count ----------
    const total = await prisma.prediction.count({ where });

    // ---------- Pagination ----------
    const maxPage = Math.max(1, Math.ceil(total / pageSize));
    const safePage = Math.min(page, maxPage);
    const skip = (safePage - 1) * pageSize;

    // ---------- Query ----------
    const rows = await prisma.prediction.findMany({
      where,
      orderBy: { date: "desc" },
      skip,
      take: pageSize,
      select: {
        id: true,
        date: true,
        leagueSlug: true,
        homeTeam: true,
        awayTeam: true,
        pick: true,
        predictedHome: true,
        predictedAway: true,
        actualHome: true,
        actualAway: true,
        exactHit: true, // stored flag; we will OR with computed exactness below
      },
    });

    // ---------- Map & compute ----------
    const items: any = rows.map((r) => {
      const haveActual = r.actualHome != null && r.actualAway != null;
      const calc = computeOutcome(
        r.predictedHome,
        r.predictedAway,
        haveActual ? r.actualHome! : null,
        haveActual ? r.actualAway! : null
      );

      // Respect stored exactHit if present, but ensure correctness via compute
      const exact = Boolean(r.exactHit) || calc.exactHit;

      return {
        id: r.id,
        date: r.date,
        league: r.leagueSlug,
        homeTeam: r.homeTeam,
        awayTeam: r.awayTeam,
        pick: r.pick ?? "",
        predictedScore: `${r.predictedHome}-${r.predictedAway}`,
        actualScore: haveActual ? `${r.actualHome}-${r.actualAway}` : "",
        win: calc.win || exact, // exact implies win
        exactHit: exact,
        outcome: exact ? "EXACT_HIT" : calc.outcome,
      };
    });

    return NextResponse.json({
      items,
      total,
      page: safePage,
      pageSize,
    });
  } catch (err) {
    console.error("admin previous-predictions GET error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
