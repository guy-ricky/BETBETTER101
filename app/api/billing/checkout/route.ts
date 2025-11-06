/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/billing/checkout/route.ts
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/utils";
import { planConfig, lszHeaders, LSZ_API } from "@/lib/lemon";

type PlanKey = "monthly" | "seven_months";

function isPlan(v: unknown): v is PlanKey {
    return v === "monthly" || v === "seven_months";
}

export async function POST(req: NextRequest) {
    try {
        const { userId } = await auth();
        if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const body = await req.json();
        const plan = body.plan as PlanKey;
        if (!isPlan(plan)) return NextResponse.json({ error: "Invalid plan" }, { status: 400 });

        const user = await prisma.user.findUnique({ where: { clerkUserId: userId } });
        if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

        const { variantId } = planConfig(plan);

        // Prepare success/cancel URLs
        const base = process.env.NEXT_PUBLIC_APP_URL!;
        const successUrl = `${base}/billing/success?plan=${plan}`;
        const cancelUrl = `${base}/billing/cancel`;

        // Lemon Squeezy Checkout
        const res = await fetch(`${LSZ_API}/checkouts`, {
            method: "POST",
            headers: lszHeaders(),
            body: JSON.stringify({
                data: {
                    type: "checkouts",
                    attributes: {
                        checkout_data: {
                            email: user.email,
                            custom: {
                                userId: user.id, // helpful for reconciliation in webhook
                                plan,
                            },
                        },
                        product_options: {
                            // One-time vs subscription is defined by the Variant itself
                        },
                        success_url: successUrl,
                        cancel_url: cancelUrl,
                    },
                    relationships: {
                        store: { data: { type: "stores", id: process.env.LEMON_SQUEEZY_STORE_ID! } },
                        variant: { data: { type: "variants", id: variantId } },
                    },
                },
            }),
        });

        if (!res.ok) {
            const err = await res.text();
            return NextResponse.json({ error: "Lemon Squeezy error", detail: err }, { status: 500 });
        }

        const json = await res.json();
        const checkoutUrl = json?.data?.attributes?.url as string;
        return NextResponse.json({ url: checkoutUrl });
    } catch (e: any) {
        console.log("Checkout error", e);
        return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
    }
}
