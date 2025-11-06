export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/utils";
import crypto from "crypto";

export async function POST() {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Find our local user row (you already sync via Clerk webhook)
  const local = await prisma.user.findFirst({ where: { clerkUserId: userId } });
  if (!local)
    return NextResponse.json({ error: "No local user" }, { status: 404 });

  const token = crypto.randomBytes(16).toString("hex");
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

  await prisma.telegramLinkToken.create({
    data: { token, userId: local.id, expiresAt },
  });

  const deepLink = `https://t.me/${process.env.TELEGRAM_BOT_USERNAME}?start=${token}`;
  return NextResponse.json({ deepLink, token, expiresAt });
}
