export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type PlanKey = "monthly" | "seven_months";

function isPlanKey(v: unknown): v is PlanKey {
  return v === "monthly" || v === "seven_months";
}

function planConfig(plan: PlanKey) {
  return plan === "monthly"
    ? {
        name: "BetBetter101 — Monthly",
        unitAmount: 35_00,
        interval: "month" as const,
        intervalCount: 1 as const,
      }
    : {
        name: "BetBetter101 — 7 Months",
        unitAmount: 250_00,
        interval: "month" as const,
        intervalCount: 7 as const,
      };
}

/** Parse plan from JSON, urlencoded, or multipart bodies */
async function readPlan(req: NextRequest): Promise<PlanKey | null> {
  const rawCtype = req.headers.get("content-type") || "";
  const ctype = rawCtype.split(";")[0].trim().toLowerCase();

  // JSON
  if (ctype === "application/json") {
    try {
      const body = (await req.json()) as { plan?: unknown };
      return isPlanKey(body?.plan) ? body.plan : null;
    } catch {}
  }

  // x-www-form-urlencoded or text/plain
  if (ctype === "application/x-www-form-urlencoded" || ctype === "text/plain") {
    try {
      const text = await req.text();
      const params = new URLSearchParams(text);
      const v = params.get("plan");
      return isPlanKey(v) ? v : null;
    } catch {}
  }

  // multipart/form-data
  if (ctype.startsWith("multipart/form-data")) {
    try {
      const form = await req.formData();
      const v = form.get("plan");
      return isPlanKey(v) ? v : null;
    } catch {}
  }

  // fallback: try text → params → JSON
  try {
    const text = await req.text();
    const params = new URLSearchParams(text);
    const v = params.get("plan");
    if (isPlanKey(v)) return v;
    try {
      const maybe = JSON.parse(text);
      const v2 = maybe?.plan;
      if (isPlanKey(v2)) return v2;
    } catch {}
  } catch {}

  return null;
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe secret key not configured" },
        { status: 500 }
      );
    }

    const plan = await readPlan(req);
    if (!plan) {
      return NextResponse.json(
        { error: "Invalid or missing plan. Use 'monthly' or 'seven_months'." },
        { status: 400 }
      );
    }

    const cfg = planConfig(plan);
    const origin =
      req.headers.get("origin") ??
      process.env.NEXT_PUBLIC_APP_URL ??
      "https://betbetter101.com";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            unit_amount: cfg.unitAmount,
            product_data: { name: cfg.name, metadata: { plan } },
            recurring: {
              interval: cfg.interval,
              interval_count: cfg.intervalCount,
            },
          },
          quantity: 1,
        },
      ],
      // ⬇⬇⬇ Updated to point to your Success + Cancel pages
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      allow_promotion_codes: false,
      metadata: { plan },
      subscription_data: { metadata: { plan } },
    });

    const url = typeof session.url === "string" ? session.url : null;
    if (!url) {
      return NextResponse.json(
        { error: "Failed to create checkout session URL" },
        { status: 500 }
      );
    }

    // Robust navigation detection for real <form> submits:
    const mode = (req.headers.get("sec-fetch-mode") || "").toLowerCase(); // "navigate" for real navigations
    const dest = (req.headers.get("sec-fetch-dest") || "").toLowerCase(); // "document" for page loads
    const isNavigation = mode === "navigate" || dest === "document";

    const accept = (req.headers.get("accept") || "").toLowerCase();
    const wantsHtml = accept.includes("text/html");

    const ctype = (req.headers.get("content-type") || "").toLowerCase();
    const isForm =
      ctype.startsWith("application/x-www-form-urlencoded") ||
      ctype.startsWith("multipart/form-data");

    // If it's a browser navigation or a form submit, redirect user to Stripe UI.
    if (isNavigation || isForm || wantsHtml) {
      return NextResponse.redirect(url, 303); // See Other
    }

    // Otherwise (programmatic clients), return JSON.
    return NextResponse.json({ url });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Checkout error";
    console.error("checkout_sessions POST error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
