/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { auth, createClerkClient } from "@clerk/nextjs/server";
import { LEAGUES, LeagueSlug } from "@/utils/leagues";
import { generatePredictionsForDate } from "@/services/predict";

async function fireNotify(league: LeagueSlug, dateISO: string) {
  const base = 'https://betbetter101.com';
  try {
    await fetch(`${base}/api/notify/predictions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-cron-secret": process.env.CRON_SECRET || "",
      },
      body: JSON.stringify({ league, date: dateISO }),
      cache: "no-store",
    });
  } catch {
    // swallow notify errors; generation is the primary task
  }
}

export async function POST(req: Request) {
  // 1) Allow CRON bypass (no user required)
  const cronSecret = req.headers.get("x-cron-secret");
  const cronOK = Boolean(cronSecret && cronSecret === process.env.CRON_SECRET);

  // 2) If no cron, allow ADMINs to trigger
  if (!cronOK) {
    const { userId, sessionClaims } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let isAdmin = false;
    const roleFromClaims = (sessionClaims?.publicMetadata as any)?.role;
    if (roleFromClaims === "ADMIN") {
      isAdmin = true;
    } else {
      try {
        const clerkClient = createClerkClient({
          publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
          secretKey: process.env.CLERK_SECRET_KEY!,
        });
        const user = await clerkClient.users.getUser(userId);
        const role = (user?.publicMetadata as any)?.role;
        isAdmin = role === "ADMIN";
      } catch {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }
    if (!isAdmin) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  // 3) Parse body and run generation (works for both cron + admin paths)
  try {
    const { league = "epl", date, notify } = await req.json().catch(() => ({}));
    const leagueSlug = (league as LeagueSlug) || "epl";
    if (!LEAGUES[leagueSlug]) {
      return NextResponse.json({ error: "Unknown league" }, { status: 400 });
    }

    const dateISO = date || new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const out = await generatePredictionsForDate(leagueSlug, dateISO);

    // fire-and-forget notify (optional)
    if (notify === true || notify === "true") {
      fireNotify(leagueSlug, dateISO);
    }

    return NextResponse.json({
      ok: true,
      ...out,
      league: leagueSlug,
      date: dateISO,
      notified: Boolean(notify),
    });
  } catch (err: any) {
    console.error("Prediction generation error:", err);
    return NextResponse.json(
      { error: "Failed to generate predictions" },
      { status: 500 }
    );
  }
}
