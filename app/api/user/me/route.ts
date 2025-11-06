/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/utils";
import { computeNextBillingDate } from "@/lib/billing";

export async function GET() {
  // 1) Auth
  const { userId } = await auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // 2) Fetch the local user + payments (now includes id + clerkUserId)
  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId },
    select: {
      // identifiers
      id: true,                 // <- Prisma user id (Mongo ObjectId as string)
      clerkUserId: true,        // <- Clerk user id

      // core
      email: true,
      username: true,
      role: true,
      isSubscribed: true,

      // optional Paddle linkage (useful in UI/debug)
      paddleCustomerId: true,
      paddleEmail: true,

      // telegram linkage
      telegramChatId: true,
      telegramUsername: true,
      telegramLinkedAt: true,

      // payments (latest first)
      payments: {
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          amount: true,
          method: true,
          status: true,
          reference: true,
          createdAt: true,
        },
      },
      subscriptions: {
        where: {
          status: { in: ["ACTIVE", "TRIALING", "PAST_DUE"] },
        },
        orderBy: [{ currentPeriodEnd: "desc" }, { createdAt: "desc" }],
        take: 1,
        select: {
          status: true,
          interval: true,
          intervalCount: true,
          currentPeriodStart: true,
          currentPeriodEnd: true,
          cancelAtPeriodEnd: true,
          currency: true,
          productName: true,
        },
      }
    },
  });

  if (!user) {
    return new NextResponse("User not found", { status: 404 });
  }

  const sub = user.subscriptions?.[0] || null;
  const { date, label } = computeNextBillingDate(
    sub
      ? {
        status: sub.status as any,
        interval: sub.interval,
        intervalCount: sub.intervalCount,
        currentPeriodStart: sub.currentPeriodStart,
        currentPeriodEnd: sub.currentPeriodEnd,
        cancelAtPeriodEnd: sub.cancelAtPeriodEnd,
      }
      : null
  );

  // 3) Normalize/serialize date fields for JSON
  const safe = {
    ...user,
    telegramLinkedAt: user.telegramLinkedAt
      ? user.telegramLinkedAt.toISOString()
      : null,
    payments: user.payments.map((p) => ({
      ...p,
      createdAt: p.createdAt.toISOString(),
    })),
    subscriptionSummary: sub ? {
      status: sub.status,
      productName: sub.productName,
      currency: sub.currency,
      interval: sub.interval,
      intervalCount: sub.intervalCount,
      cancelAtPeriodEnd: sub.cancelAtPeriodEnd,
      currentPeriodEndISO: sub.currentPeriodEnd
        ? new Date(sub.currentPeriodEnd).toISOString()
        : null,
      nextBillingDateISO: date ? date.toISOString() : null,
      nextBillingLabel: label,
    } : null,
  };

  // Now the client can use: safe.id (prismaUserId) & safe.clerkUserId
  return NextResponse.json({ user: safe }, { status: 200 });
}
