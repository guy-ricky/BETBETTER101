export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "@/utils";
const BASE = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

async function reply(chatId: string, text: string) {
  await fetch(`${BASE}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

export async function POST(req: Request) {
  // Verify Telegram secret header
  const secret = req.headers.get("x-telegram-bot-api-secret-token");
  if (secret !== process.env.TELEGRAM_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const update = await req.json();
  const msg = update?.message;
  const chatId = msg?.chat?.id?.toString?.();
  const username = msg?.from?.username ?? null;
  const text: string = msg?.text ?? "";

  if (!chatId) return NextResponse.json({ ok: true });

  // unlink
  if (text.startsWith("/stop")) {
    await prisma.user.updateMany({
      where: { telegramChatId: chatId },
      data: {
        telegramChatId: null,
        telegramUsername: null,
        telegramLinkedAt: null,
      },
    });
    await reply(
      chatId,
      "🔕 Unlinked. You’ll no longer receive Telegram updates."
    );
    return NextResponse.json({ ok: true });
  }

  // link: /start <token>
  if (text.startsWith("/start")) {
    const token = text.split(" ")[1];
    if (!token) {
      await reply(
        chatId,
        "Hi! Open the BetBetter101 website, go to your dashboard, and click “Connect Telegram” to get a link."
      );
      return NextResponse.json({ ok: true });
    }

    const link = await prisma.telegramLinkToken.findUnique({
      where: { token },
    });
    if (!link || link.usedAt || link.expiresAt < new Date()) {
      await reply(
        chatId,
        "❌ Link token invalid or expired. Generate a new one from your profile."
      );
      return NextResponse.json({ ok: true });
    }

    // Ensure chatId is unique across users
    const existing = await prisma.user.findFirst({
      where: { telegramChatId: chatId },
    });
    if (existing && existing.id !== link.userId) {
      await prisma.user.update({
        where: { id: existing.id },
        data: {
          telegramChatId: null,
          telegramUsername: null,
          telegramLinkedAt: null,
        },
      });
    }

    await prisma.$transaction([
      prisma.user.update({
        where: { id: link.userId },
        data: {
          telegramChatId: chatId,
          telegramUsername: username,
          telegramLinkedAt: new Date(),
        },
      }),
      prisma.telegramLinkToken.update({
        where: { token },
        data: { usedAt: new Date() },
      }),
    ]);

    await reply(
      chatId,
      "✅ Telegram linked! You’ll receive subscriber predictions here."
    );
    return NextResponse.json({ ok: true });
  }

  await reply(chatId, "Commands:\n/start <token> → link\n/stop → unlink");
  return NextResponse.json({ ok: true });
}
