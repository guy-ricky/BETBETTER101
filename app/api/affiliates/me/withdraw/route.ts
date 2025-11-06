/* eslint-disable @typescript-eslint/no-unused-vars */
// app/api/affiliates/me/withdraw/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/utils";

const MIN_WITHDRAW_MINOR = 1000; // £50.00 (adjust as you like)
const DEFAULT_CURRENCY = "GBP";

export async function POST(req: NextRequest) {
    try {
        const { userId: clerkUserId } = await auth();
        if (!clerkUserId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const me = await prisma.user.findUnique({
            where: { clerkUserId },
            select: { id: true, email: true },
        });
        if (!me) return NextResponse.json({ error: "User not found" }, { status: 404 });

        const affiliate = await prisma.affiliate.findFirst({
            where: { userId: me.id, isActive: true },
            select: { id: true, currency: true },
        });
        if (!affiliate) {
            return NextResponse.json({ error: "No active affiliate profile" }, { status: 400 });
        }

        // Commissions that are APPROVED (withdrawable), newest first
        const approved = await prisma.commission.findMany({
            where: { affiliateId: affiliate.id, status: "APPROVED" },
            orderBy: { createdAt: "desc" },
            select: { id: true, amountMinor: true, currency: true },
        });

        if (approved.length === 0) {
            return NextResponse.json({ error: "No withdrawable commissions yet" }, { status: 400 });
        }

        // Exclude commissions already in a payout (DRAFT/PROCESSING/PAID)
        const existingPayouts = await prisma.payout.findMany({
            where: {
                affiliateId: affiliate.id,
                status: { in: ["DRAFT", "PROCESSING", "PAID"] },
            },
            select: { commissionIds: true },
        });

        const alreadyUsed = new Set<string>();
        for (const p of existingPayouts) for (const id of p.commissionIds) alreadyUsed.add(id);

        const eligible = approved.filter((c) => !alreadyUsed.has(c.id));

        if (eligible.length === 0) {
            return NextResponse.json({ error: "All approved commissions are already in payouts" }, { status: 400 });
        }

        // (Optional) ensure same currency; your system standardizes commissions to GBP
        const currency = affiliate.currency || DEFAULT_CURRENCY;
        const mixed = eligible.some((c) => c.currency !== currency);
        if (mixed) {
            return NextResponse.json({ error: "Mixed currency commissions cannot be withdrawn together" }, { status: 400 });
        }

        const totalMinor = eligible.reduce((acc, c) => acc + (c.amountMinor || 0), 0);

        if (totalMinor < MIN_WITHDRAW_MINOR) {
            return NextResponse.json(
                { error: `Minimum withdrawal is £${(MIN_WITHDRAW_MINOR / 100).toFixed(2)}` },
                { status: 400 }
            );
        }

        // Create payout in DRAFT; you can show this to the user as "requested"
        const payout = await prisma.payout.create({
            data: {
                affiliateId: affiliate.id,
                status: "DRAFT", // or "PROCESSING" if you auto-start flow
                currency,
                amountMinor: totalMinor,
                note: `Requested by ${me.email} via dashboard`,
                commissionIds: eligible.map((e) => e.id),
            },
            select: { id: true, status: true, amountMinor: true, currency: true },
        });

        return NextResponse.json({ ok: true, payout });
    } catch (e: any) {
        console.error("[affiliates:withdraw] error", e);
        return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
    }
}
