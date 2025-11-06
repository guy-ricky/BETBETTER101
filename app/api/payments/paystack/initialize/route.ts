// app/api/payments/paystack/initialize/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { paystackFetch } from "@/lib/paystack";
import { auth, createClerkClient } from "@clerk/nextjs/server";
import prisma from "@/utils";
import crypto from "crypto";

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY! });

type PlanKey = "monthly" | "quarterly"; // <-- 3 months

type Body = { planKey: PlanKey };

const toMinor = (major: number) => Math.round(major * 100);
const newRef = (p = "BETB") => `${p}_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;

/** Add GBP by default */
function getAllowedCurrencies() {
  const raw = process.env.PAYSTACK_ALLOWED_CURRENCIES || "GBP,USD,KES";
  return raw.split(",").map(s => s.trim().toUpperCase()).filter(Boolean);
}

/**
 * Pricing resolver (major units).
 * - GBP: £35 monthly, £75 quarterly (3 months). Overridable via envs.
 * - USD/KES remain configurable via envs (fallbacks kept).
 */
function getPlanPriceMajor(planKey: PlanKey, currency: string) {
  const cur = currency.toUpperCase();

  if (cur === "GBP") {
    if (planKey === "monthly") {
      return Number(process.env.PAYSTACK_PRICE_GBP_MONTHLY || 35);
    } else { // quarterly
      return Number(process.env.PAYSTACK_PRICE_GBP_QUARTERLY || 75);
    }
  }

  if (cur === "USD") {
    if (planKey === "monthly") {
      return Number(process.env.PAYSTACK_PRICE_USD_MONTHLY || 35); // set your USD equivalent if needed
    } else { // quarterly
      return Number(process.env.PAYSTACK_PRICE_USD_QUARTERLY || 75);
    }
  }

  if (cur === "KES") {
    if (planKey === "monthly") {
      return Number(process.env.PAYSTACK_PRICE_KES_MONTHLY || 4500);
    } else { // quarterly
      return Number(process.env.PAYSTACK_PRICE_KES_QUARTERLY || 9500);
    }
  }

  // Generic fallbacks if some other currency slips through
  return planKey === "monthly" ? 4500 : 9500;
}

async function getEmail(clerkId: string) {
  try {
    const u = await clerkClient.users.getUser(clerkId);
    return (
      u?.emailAddresses?.find(e => e.id === u.primaryEmailAddressId)?.emailAddress ||
      u?.emailAddresses?.[0]?.emailAddress ||
      "support@betbetter101.com"
    );
  } catch {
    return "support@betbetter101.com";
  }
}

async function tryInitializeOnce({
  email, clerkUserId, dbUserId, planKey, currency, callback_url,
}: {
  email: string;
  clerkUserId: string;
  dbUserId: string | null;
  planKey: PlanKey;
  currency: string;
  callback_url: string;
}) {
  const amountMajor = getPlanPriceMajor(planKey, currency);
  const payload = {
    email,
    amount: toMinor(amountMajor),
    currency,
    reference: newRef(`BETB${currency}`),
    callback_url,
    channels: ["card"] as const,
    metadata: {
      clerkUserId,
      dbUserId, // may be null
      planKey,
      interval: "month",
      intervalCount: planKey === "monthly" ? 1 : 3, // <-- quarterly = 3 months
      displayName: planKey === "monthly" ? "Monthly Subscription" : "3-Month Subscription",
      displayCurrency: currency,
    },
  };

  const res = await paystackFetch<{
    status: boolean;
    message?: string;
    data?: { authorization_url: string; reference: string };
  }>("/transaction/initialize", { method: "POST", body: JSON.stringify(payload) });

  if (!res?.status || !res?.data?.authorization_url) {
    throw new Error(`Paystack init failed: ${res?.message || "no authorization_url"}`);
  }
  return res.data;
}

export async function POST(req: NextRequest) {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { planKey } = (await req.json()) as Body;
    if (planKey !== "monthly" && planKey !== "quarterly") {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    // Clerk → DB id (may be null if user row not created yet)
    const userRow = await prisma.user.findUnique({
      where: { clerkUserId: clerkUserId },
      select: { id: true },
    });
    const dbUserId = userRow?.id ?? null;

    const email = await getEmail(clerkUserId);
    const callback_url = `${process.env.APP_URL}/billing/verify`;
    const candidates = getAllowedCurrencies();

    let lastDetail: any = null;
    let lastMsg = "";

    for (const currency of candidates) {
      try {
        const data = await tryInitializeOnce({
          email, clerkUserId, dbUserId, planKey, currency, callback_url,
        });
        return NextResponse.json(
          { url: data.authorization_url, reference: data.reference, currencyTried: currency },
          { status: 200 }
        );
      } catch (e: any) {
        const msg = String(e?.message || "");
        const jsonStr = msg.includes("{") ? msg.slice(msg.indexOf("{")) : "";
        try { lastDetail = jsonStr ? JSON.parse(jsonStr) : null; } catch { lastDetail = null; }
        lastMsg = msg;
        const unsupported = lastDetail?.code === "unsupported_currency" || /Currency not supported/i.test(lastDetail?.message || msg);
        const noChannel = lastDetail?.code === "invalid_params" && /No active channel/i.test(lastDetail?.message || msg);
        if (unsupported || noChannel) continue;
        return NextResponse.json({ error: "Initialization failed", message: lastDetail?.message || msg, code: lastDetail?.code, type: lastDetail?.type }, { status: 400 });
      }
    }

    return NextResponse.json(
      {
        error: "No available payment channel for your configured currencies.",
        message: lastDetail?.message || lastMsg || "Ask Paystack to enable the currency or add a supported one in PAYSTACK_ALLOWED_CURRENCIES.",
        code: lastDetail?.code,
        type: lastDetail?.type,
        tried: candidates,
      },
      { status: 400 }
    );
  } catch (e: any) {
    const msg = String(e?.message || "");
    const jsonStr = msg.includes("{") ? msg.slice(msg.indexOf("{")) : "";
    let detail: any = null;
    try { detail = jsonStr ? JSON.parse(jsonStr) : null; } catch { }
    console.error("Paystack initialize error:", { msg, detail, e });
    return NextResponse.json({ error: "Paystack initialize failed", message: detail?.message || msg, code: detail?.code, type: detail?.type }, { status: 400 });
  }
}
