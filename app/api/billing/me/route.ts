// app/api/billing/me/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/utils";

export async function GET() {
    try {
        const { userId: clerkUserId } = await auth();
        if (!clerkUserId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        // Map Clerk → DB ObjectId
        const user = await prisma.user.findUnique({
            where: { clerkUserId },
            select: { id: true },
        });
        if (!user) return NextResponse.json({ subscription: null });

        const sub = await prisma.subscription.findFirst({
            where: { userId: user.id, status: "ACTIVE" },
            select: {
                id: true,
                productName: true,
                currency: true,
                unitAmountMinor: true,
                interval: true,
                intervalCount: true,
                currentPeriodStart: true,
                currentPeriodEnd: true,
                cancelAtPeriodEnd: true,
            },
            orderBy: { updatedAt: "desc" },
        });

        return NextResponse.json({ subscription: sub || null });
    } catch (err: any) {
        console.error("Error fetching subscription:", err);
        return NextResponse.json({ error: err?.message || "Failed to load billing" }, { status: 500 });
    }
}
