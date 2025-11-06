/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils";
import { auth } from "@clerk/nextjs/server";


/**
 * GET /api/affiliates/me/overview
 * Returns an overview for the authenticated affiliate (linked via User.userId).
 *
 * Query params (optional):
 * - limit: number of recent items to include (default 5, max 25)
 *
 * Shape:
 * {
 *   affiliate: { id, code, name, email, isActive, currency },
 *   myLink: "https://betbetter101.com/?ref=CODE",
 *   counters: {
 *     clicks, conversions, lifetimeMinor,
 *     commissions: { pendingMinor, approvedMinor, paidMinor, reversedMinor, unpaidMinor, withdrawableMinor }
 *   },
 *   recent: {
 *     clicks: [{ id, createdAt, ipMasked, referrer }],
 *     commissions: [{ id, amountMinor, status, createdAt, user: { id, email } }]
 *   }
 * }
 */

function maskIp(ip: string | null) {
    if (!ip) return null;
    // Simple IPv4 masking
    if (ip.includes(".")) {
        const parts = ip.split(".");
        return parts.length === 4 ? `${parts[0]}.${parts[1]}.*.*` : ip;
    }

    if (ip.includes(":")) {
        const segs = ip.split(":");
        return segs.length > 2 ? `${segs[0]}:${segs[1]}:*:*` : ip;
    }
    return ip;
}

export async function GET(req: NextRequest) {
    try {
        const { userId: clerkUserId } = await auth();
        if (!clerkUserId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const url = new URL(req.url);
        const limitParam = Number(url.searchParams.get("limit") || 5);
        const limit = Number.isFinite(limitParam) ? Math.min(Math.max(0, limitParam), 25) : 5;

        // resolve our app user
        const me = await prisma.user.findUnique({
            where: { clerkUserId },
            select: { id: true, email: true },
        });
        if (!me) return NextResponse.json({ error: "User not found" }, { status: 404 });

        // find affiliate linked to this user
        const affiliate = await prisma.affiliate.findFirst({
            where: { userId: me.id },
            select: {
                id: true,
                code: true,
                name: true,
                email: true,
                isActive: true,
                currency: true,
                clicks: true,
                conversions: true,
                lifetimeMinor: true,
            },
        });
        if (!affiliate) {
            return NextResponse.json(
                { error: "Affiliate profile not found for this user." },
                { status: 404 }
            );
        }

        // Build origin for myLink
        const origin = url.origin;
        const myLink = `${origin}/?ref=${affiliate.code}`;

        // Parallelize counts & aggregates
        const [sumPending, sumApproved, sumPaid, sumReversed, recentClicks, recentCommissions] =
            await Promise.all([
                prisma.commission.aggregate({
                    where: { affiliateId: affiliate.id, status: "PENDING" },
                    _sum: { amountMinor: true },
                }),
                prisma.commission.aggregate({
                    where: { affiliateId: affiliate.id, status: "APPROVED" },
                    _sum: { amountMinor: true },
                }),
                prisma.commission.aggregate({
                    where: { affiliateId: affiliate.id, status: "PAID" },
                    _sum: { amountMinor: true },
                }),
                prisma.commission.aggregate({
                    where: { affiliateId: affiliate.id, status: "REVERSED" },
                    _sum: { amountMinor: true },
                }),
                prisma.referralClick.findMany({
                    where: { affiliateId: affiliate.id },
                    orderBy: { createdAt: "desc" },
                    take: limit,
                    select: { id: true, createdAt: true, ip: true, referrer: true },
                }),
                prisma.commission.findMany({
                    where: { affiliateId: affiliate.id },
                    orderBy: { createdAt: "desc" },
                    take: limit,
                    select: {
                        id: true,
                        amountMinor: true,
                        status: true,
                        createdAt: true,
                        user: { select: { id: true, email: true } },
                    },
                }),
            ]);

        const pendingMinor = sumPending._sum.amountMinor || 0;
        const approvedMinor = sumApproved._sum.amountMinor || 0;
        const paidMinor = sumPaid._sum.amountMinor || 0;
        const reversedMinor = sumReversed._sum.amountMinor || 0;

        // Policy:
        // - unpaid = pending + approved
        // - withdrawable = approved (you can change to only APPROVED)
        const unpaidMinor = pendingMinor + approvedMinor;
        const withdrawableMinor = approvedMinor;

        // Shape recent outputs
        const recent = {
            clicks: recentClicks.map((c) => ({
                id: c.id,
                createdAt: c.createdAt,
                ipMasked: maskIp(c.ip),
                referrer: c.referrer,
            })),
            commissions: recentCommissions.map((c) => ({
                id: c.id,
                amountMinor: c.amountMinor,
                status: c.status,
                createdAt: c.createdAt,
                user: {
                    id: c.user?.id || null,
                    email: c.user?.email || null,
                },
            })),
        };

        const res = {
            affiliate: {
                id: affiliate.id,
                code: affiliate.code,
                name: affiliate.name,
                email: affiliate.email,
                isActive: affiliate.isActive,
                currency: affiliate.currency || "GBP",
            },
            myLink,
            counters: {
                clicks: affiliate.clicks,
                conversions: affiliate.conversions,
                lifetimeMinor: affiliate.lifetimeMinor,
                commissions: {
                    pendingMinor,
                    approvedMinor,
                    paidMinor,
                    reversedMinor,
                    unpaidMinor,
                    withdrawableMinor,
                },
            },
            recent,
        };

        return NextResponse.json(res);
    } catch (error: any) {
        console.error("[affiliates:overview] error", error);
        return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
    }
};