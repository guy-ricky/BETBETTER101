export const runtime = "nodejs";
import { NextResponse } from "next/server";
import prisma from "@/utils";
import { createClerkClient } from "@clerk/nextjs/server";

const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY! });

export async function GET() {
    const now = new Date();

    const expired = await prisma.subscription.findMany({
        where: {
            currentPeriodEnd: { lt: now },
            OR: [{ status: "ACTIVE" }, { cancelAtPeriodEnd: true }],
        },
        select: { id: true, userId: true },
    });

    for (const s of expired) {
        await prisma.subscription.update({
            where: { id: s.id },
            data: { status: "CANCELED", canceledAt: now },
        });
        const appUser = await prisma.user.update({ where: { id: s.userId }, data: { isSubscribed: false } });
        await clerk.users.updateUserMetadata(s.userId, { publicMetadata: { isSubscribed: false, userId: appUser.id, role: appUser.role } });
    }

    return NextResponse.json({ updated: expired.length });
}
