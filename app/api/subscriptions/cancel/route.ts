/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/utils";

export const runtime = "nodejs";

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY!;
const PADDLE_API_KEY = process.env.PADDLE_API_KEY; // optional

// Paystack: customer self-serve manage link
async function getPaystackManageLink(subscriptionCode: string) {
  const r = await fetch(
    `https://api.paystack.co/subscription/${subscriptionCode}/manage/link`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${PAYSTACK_SECRET}` },
      cache: "no-store",
    }
  );
  const j = await r.json();
  if (!r.ok || !j?.status) throw new Error(j?.message || "Failed to get manage link");
  return j?.data?.link as string;
}

// Paystack: disable (requires email_token)
async function disablePaystackSubscription(opts: { code: string; emailToken: string }) {
  const r = await fetch("https://api.paystack.co/subscription/disable", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code: opts.code, token: opts.emailToken }),
  });
  const j = await r.json();
  if (!r.ok || !j?.status) throw new Error(j?.message || "Failed to disable subscription");
  return true;
}

export async function POST(req: Request) {
  try {
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { when = "period_end" } = (await req.json().catch(() => ({}))) as {
      when?: "period_end" | "immediately";
    };

    const user = await prisma.user.findUnique({
      where: { clerkUserId },
      select: { id: true },
    });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const sub = await prisma.subscription.findFirst({
      where: {
        userId: user.id,
        status: { in: ["ACTIVE", "TRIALING", "PAUSED"] },
      },
      orderBy: { currentPeriodEnd: "desc" },
    });

    if (!sub) {
      return NextResponse.json({ error: "No active subscription" }, { status: 400 });
    }

    // Idempotency guard
    if (sub.cancelAtPeriodEnd) {
      return NextResponse.json({
        ok: true,
        message: "Auto-renew is already off. Your plan ends at the period end.",
      });
    }

    // Provider handling
    let manageUrl: string | null = null;

    if (sub.paystackSubscriptionCode) {
      // If you store email_token (you added `paystackEmailToken` in your model)
      const paystackEmailToken = sub.paystackEmailToken || null;

      if (paystackEmailToken) {
        await disablePaystackSubscription({
          code: sub.paystackSubscriptionCode,
          emailToken: paystackEmailToken,
        });
        // one-click done; no manage link needed
      } else {
        // no email_token yet → return Paystack manage link for user to finalize
        manageUrl = await getPaystackManageLink(sub.paystackSubscriptionCode);
      }
    } else if (PADDLE_API_KEY) {
      // Optional Paddle branch if/when you store Paddle subscription id
      // await cancelPaddleSubscription(sub.paddleSubscriptionId!, when === "immediately" ? "immediately" : "period_end");
    }

    // App-side effect: stop renewals (keep access until end of paid period)
    const updates: any = { cancelAtPeriodEnd: true };
    if (when === "immediately") {
      updates.canceledAt = new Date();
      // optional: updates.status = "CANCELED";
    }

    await prisma.subscription.update({
      where: { id: sub.id },
      data: updates,
    });

    return NextResponse.json({
      ok: true,
      message: manageUrl
        ? "Your subscription will not renew once you complete cancellation at Paystack."
        : "Your subscription won't renew.",
      manageUrl,
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Something went wrong" }, { status: 500 });
  }
}
