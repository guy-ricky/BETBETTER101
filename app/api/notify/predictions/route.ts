export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "@/utils";
import { tgSend } from "@/utils/telegram";
import { LEAGUES, LeagueSlug } from "@/utils/leagues";

function mdEscape(s: string) {
  // minimal escape for Telegram Markdown v2/v1 pitfalls
  return s.replace(/([_*[\]()~`>#+=|{}.!-])/g, "\\$1");
}

export async function POST(req: Request) {
  // Protect with your cron secret
  const secret = req.headers.get("x-cron-secret");
  if (!secret || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { league = "epl", date } = await req.json();
  const slug = league as LeagueSlug;
  if (!LEAGUES[slug]) {
    return NextResponse.json({ error: "Unknown league" }, { status: 400 });
  }

  const dateISO = date || new Date().toISOString().slice(0, 10);
  const start = new Date(`${dateISO}T00:00:00.000Z`);
  const end = new Date(`${dateISO}T23:59:59.999Z`);

  // Predictions for that league/date
  const preds = await prisma.prediction.findMany({
    where: { leagueSlug: slug, date: { gte: start, lte: end } },
    orderBy: { date: "asc" },
  });

  if (!preds.length) {
    return NextResponse.json({ ok: true, sent: 0, note: "No predictions" });
  }

  // Recipients: subscribed + linked to Telegram
  const recipients = await prisma.user.findMany({
    where: { isSubscribed: true, telegramChatId: { not: null } },
    select: { telegramChatId: true },
  });
  if (!recipients.length) {
    return NextResponse.json({ ok: true, sent: 0, note: "No recipients" });
  }

  // Build a compact message
  const header = `*${mdEscape(LEAGUES[slug].name)} — ${mdEscape(dateISO)}*\n`;
  const lines = preds.map((p) => {
    const hh = new Date(p.date).toISOString().slice(11, 16); // HH:MM UTC
    return `• ${hh} — ${mdEscape(p.homeTeam)} vs ${mdEscape(p.awayTeam)}: *${p.predictedHome}-${p.predictedAway}*`;
  });
  const footer = `\n_You receive this because your subscription is active. Reply /stop to opt out._`;
  const text = header + lines.join("\n") + footer;

  // Send (basic rate-limit spacing)
  let sent = 0;
  for (const r of recipients) {
    try {
      await tgSend(r.telegramChatId!, text, "Markdown");
      sent++;
      await new Promise((res) => setTimeout(res, 40)); // ~25 msgs/sec
    } catch {
      // optionally mark invalid chats or log
    }
  }

  return NextResponse.json({ ok: true, league: slug, date: dateISO, sent });
}
