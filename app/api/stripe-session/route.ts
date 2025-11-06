/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe secret key not configured" },
        { status: 500 }
      );
    }

    const url = new URL(req.url);
    const sessionId = url.searchParams.get("sessionId");

    if (!sessionId || typeof sessionId !== "string") {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Expand subscription and line items so we can report more context (interval/count)
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["subscription", "line_items"],
    });

    // Safe field access & narrowing
    const customerEmail =
      session.customer_details?.email ??
      (typeof session.customer_email === "string"
        ? session.customer_email
        : null);

    const amountTotal =
      typeof session.amount_total === "number" ? session.amount_total : null;

    const currency =
      typeof session.currency === "string" ? session.currency : null;

    const paymentStatus =
      typeof session.payment_status === "string"
        ? session.payment_status
        : "unknown";

    // Pull plan from metadata set at checkout/subscription creation
    const planFromSession =
      (session.metadata &&
        (session.metadata as Record<string, unknown>).plan) ||
      null;

    const subscription =
      session.subscription && typeof session.subscription === "object"
        ? (session.subscription as Stripe.Subscription)
        : null;

    const planFromSubscription = subscription?.metadata?.plan ?? null;

    // Interval info (from the first line item, if present)
    const lineItems = session.line_items;
    let interval: Stripe.Price.Recurring.Interval | null = null;
    let intervalCount: number | null = null;

    const firstItem = lineItems?.data?.[0];
    const recurring = firstItem?.price?.recurring ?? null;
    if (recurring) {
      interval = recurring.interval;
      intervalCount =
        typeof recurring.interval_count === "number"
          ? recurring.interval_count
          : null;
    }

    return NextResponse.json({
      customer_email: customerEmail,
      amount_total: amountTotal, // e.g. 3500 for £35.00
      currency, // e.g. "gbp"
      payment_status: paymentStatus, // "paid" | "unpaid" | "no_payment_required" | etc.
      plan: (planFromSession || planFromSubscription) ?? null, // "monthly" | "seven_months" (if you used those keys)
      subscription_status: subscription?.status ?? null, // "active" | "trialing" | ...
      interval, // "month" (for both plans)
      interval_count: intervalCount, // 1 for monthly, 7 for 7-months
      session_mode: session.mode ?? null, // "subscription" expected
    });
  } catch (error: any) {
    const message =
      error instanceof Error ? error.message : String(error ?? "Unknown error");
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
