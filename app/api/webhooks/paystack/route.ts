// app/api/webhooks/paystack/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { verifyPaystackSignature } from "@/lib/paystack";
import prisma from "@/utils";
import { createClerkClient } from "@clerk/nextjs/server";
import dayjs from "dayjs";

const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY! });

/** ------- helpers ------- **/

function addPeriod(start: Date, interval: string, intervalCount: number) {
    if (interval === "year") return dayjs(start).add(intervalCount, "year").toDate();
    return dayjs(start).add(intervalCount, "month").toDate();
}

function looksLikeObjectId(v?: string) {
    return !!v && /^[0-9a-fA-F]{24}$/.test(v);
}

async function resolveIdsFromMeta(meta: any): Promise<{ dbUserId?: string; clerkUserId?: string }> {
    const dbUserId: string | undefined = looksLikeObjectId(meta?.dbUserId) ? meta.dbUserId : undefined;
    const clerkUserId: string | undefined = meta?.clerkUserId || meta?.userId;

    if (dbUserId && clerkUserId) return { dbUserId, clerkUserId };

    if (dbUserId && !clerkUserId) {
        const u = await prisma.user.findUnique({ where: { id: dbUserId }, select: { clerkUserId: true } });
        return { dbUserId, clerkUserId: u?.clerkUserId };
    }

    if (clerkUserId && !dbUserId) {
        const u = await prisma.user.findUnique({ where: { clerkUserId }, select: { id: true } });
        return { dbUserId: u?.id, clerkUserId };
    }

    return {};
}

/**
 * Award £5 (500 minor units GBP) ONCE per user — only on their first successful paid plan.
 */
async function awardFirstReferralIfEligible(opts: { paymentId: string; userId: string }) {
    const { paymentId, userId } = opts;

    await prisma.$transaction(async (tx) => {
        const user = await tx.user.findUnique({
            where: { id: userId },
            select: { id: true, firstPaidAt: true, referredByAffiliateId: true },
        });
        if (!user?.referredByAffiliateId || user.firstPaidAt) return;

        const [payment, affiliate] = await Promise.all([
            tx.payment.findUnique({ where: { id: paymentId }, select: { id: true, status: true } }),
            tx.affiliate.findUnique({
                where: { id: user.referredByAffiliateId },
                select: { id: true, isActive: true, userId: true },
            }),
        ]);
        if (!payment || payment.status !== "success") return;
        if (!affiliate || !affiliate.isActive) return;
        if (affiliate.userId && affiliate.userId === user.id) return;

        const existing = await tx.commission.findFirst({
            where: { affiliateId: affiliate.id, userId: user.id, paymentId: payment.id },
            select: { id: true },
        });
        if (existing) return;

        const commission = await tx.commission.create({
            data: {
                affiliateId: affiliate.id,
                userId: user.id,
                paymentId: payment.id,
                currency: "GBP",
                amountMinor: 500,
                status: "PENDING",
                reason: "FIRST_PAID_PLAN",
            },
            select: { id: true },
        });

        await tx.user.update({
            where: { id: user.id },
            data: { firstPaidAt: new Date() },
        });

        await tx.affiliate.update({
            where: { id: affiliate.id },
            data: {
                conversions: { increment: 1 },
                lifetimeMinor: { increment: 500 },
            },
        });

        await tx.payment.update({
            where: { id: payment.id },
            data: { commissionId: commission.id },
        });
    });
}

/** ------- main handler ------- **/
export async function POST(req: NextRequest) {
    const rawBody = await req.text();
    const signature = req.headers.get("x-paystack-signature") || undefined;

    if (!verifyPaystackSignature(rawBody, signature)) {
        console.error("[paystack:webhook] Invalid signature");
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    let evt: { event?: string; data?: any };
    try {
        evt = JSON.parse(rawBody);
    } catch {
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const eventName = String(evt.event || "").toLowerCase();

    try {
        switch (eventName) {
            /**
             * One-off checkout (new subscription)
             */
            case "charge.success": {
                const meta = evt.data?.metadata || {};
                const { dbUserId } = await resolveIdsFromMeta(meta);
                if (!dbUserId) return NextResponse.json({ ok: true, note: "No user found" });

                const dbUser = await prisma.user.findUnique({
                    where: { id: dbUserId },
                    select: { referredByAffiliateId: true, clerkUserId: true, role: true },
                });

                const amountMinor = Number(evt.data?.amount || 0);
                const currency = String(evt.data?.currency || "USD").toUpperCase();
                const interval = meta.interval || "month";
                const intervalCount = Number(meta.intervalCount || 1);
                const productName = meta.displayName || "Subscription";

                const now = new Date();
                const end = addPeriod(now, interval, intervalCount);

                const payment = await prisma.payment.create({
                    data: {
                        userId: dbUserId,
                        amount: amountMinor / 100,
                        amountMinor,
                        method: "card",
                        status: "success",
                        reference: evt.data?.reference,
                        provider: "paystack",
                        chargedCurrency: currency,
                        affiliateId: dbUser?.referredByAffiliateId || null,
                    },
                    select: { id: true },
                });

                // NOTE: upsert by userId requires Subscription.userId to be UNIQUE in your Prisma schema.
                await prisma.subscription.upsert({
                    where: { userId: dbUserId },
                    update: {
                        status: "ACTIVE",
                        currency,
                        unitAmountMinor: amountMinor,
                        interval,
                        intervalCount,
                        productName,
                        currentPeriodStart: now,
                        currentPeriodEnd: end,
                        cancelAtPeriodEnd: false,
                        canceledAt: null,
                    },
                    create: {
                        userId: dbUserId,
                        status: "ACTIVE",
                        currency,
                        unitAmountMinor: amountMinor,
                        interval,
                        intervalCount,
                        productName,
                        currentPeriodStart: now,
                        currentPeriodEnd: end,
                        cancelAtPeriodEnd: false,
                    },
                });

                const appUser = await prisma.user.update({
                    where: { id: dbUserId },
                    data: { isSubscribed: true },
                    select: { clerkUserId: true, id: true, role: true },
                });

                // Clerk public metadata → subscribed = true
                if (appUser.clerkUserId) {
                    try {
                        await clerk.users.updateUserMetadata(appUser.clerkUserId, {
                            publicMetadata: {
                                isSubscribed: true,
                                dbUserId: appUser.id,
                                role: appUser.role,
                            },
                        });
                    } catch (e) {
                        console.warn("[paystack:webhook] clerk update failed (charge.success)", e);
                    }
                }

                await awardFirstReferralIfEligible({ paymentId: payment.id, userId: dbUserId });
                break;
            }

            /**
             * Recurring renewal
             */
            case "invoice.payment_success": {
                const subCode = evt.data?.subscription?.subscription_code || "";
                const emailToken = evt.data?.subscription?.email_token || "";
                if (!subCode) return NextResponse.json({ ok: true, note: "No subCode" });

                const sub = await prisma.subscription.findFirst({
                    where: { paystackSubscriptionCode: subCode },
                    select: { id: true, userId: true, interval: true, intervalCount: true },
                });
                if (!sub) return NextResponse.json({ ok: true, note: "Subscription not found" });

                const newStart = new Date();
                const newEnd = addPeriod(newStart, sub.interval, sub.intervalCount);
                const amountMinor = Number(evt.data?.amount || 0);
                const currency = String(evt.data?.currency || "USD").toUpperCase();

                await prisma.subscription.update({
                    where: { id: sub.id },
                    data: {
                        status: "ACTIVE",
                        currentPeriodStart: newStart,
                        currentPeriodEnd: newEnd,
                        cancelAtPeriodEnd: false,
                        canceledAt: null,
                        unitAmountMinor: amountMinor,
                        currency,
                        ...(emailToken ? { paystackEmailToken: emailToken } : {}),
                    },
                });

                const updatedUser = await prisma.user.update({
                    where: { id: sub.userId },
                    data: { isSubscribed: true },
                    select: { id: true, role: true, clerkUserId: true },
                });

                // Clerk public metadata → subscribed = true
                if (updatedUser.clerkUserId) {
                    try {
                        await clerk.users.updateUserMetadata(updatedUser.clerkUserId, {
                            publicMetadata: {
                                isSubscribed: true,
                                dbUserId: updatedUser.id,
                                role: updatedUser.role,
                            },
                        });
                    } catch (e) {
                        console.warn("[paystack:webhook] clerk update failed (invoice.payment_success)", e);
                    }
                }
                break;
            }

            /**
             * Renewal failed — mark inactive
             */
            case "invoice.payment_failed": {
                const subCode = evt.data?.subscription?.subscription_code || "";
                if (!subCode) return NextResponse.json({ ok: true, note: "No subCode" });

                const sub = await prisma.subscription.findFirst({
                    where: { paystackSubscriptionCode: subCode },
                    select: { id: true, userId: true },
                });
                if (!sub) return NextResponse.json({ ok: true, note: "Subscription not found" });

                await prisma.subscription.update({
                    where: { id: sub.id },
                    data: { cancelAtPeriodEnd: true, status: "PAST_DUE" },
                });

                const updatedUser = await prisma.user.update({
                    where: { id: sub.userId },
                    data: { isSubscribed: false },
                    select: { id: true, role: true, clerkUserId: true },
                });

                // Clerk public metadata → subscribed = false
                if (updatedUser.clerkUserId) {
                    try {
                        await clerk.users.updateUserMetadata(updatedUser.clerkUserId, {
                            publicMetadata: {
                                isSubscribed: false,
                                dbUserId: updatedUser.id,
                                role: updatedUser.role,
                            },
                        });
                    } catch (e) {
                        console.warn("[paystack:webhook] clerk update failed (invoice.payment_failed)", e);
                    }
                }
                break;
            }

            /**
             * Cancel / disable event — user manually canceled or Paystack auto-disables
             */
            case "subscription.disable":
            case "subscription.not_renew": {
                const subCode = evt.data?.subscription_code || "";
                if (!subCode) return NextResponse.json({ ok: true, note: "No subCode" });

                const sub = await prisma.subscription.findFirst({
                    where: { paystackSubscriptionCode: subCode },
                    select: { id: true, userId: true },
                });
                if (!sub) return NextResponse.json({ ok: true, note: "Subscription not found" });

                await prisma.subscription.update({
                    where: { id: sub.id },
                    data: {
                        status: "CANCELED",
                        cancelAtPeriodEnd: true,
                        canceledAt: new Date(),
                    },
                });

                const u = await prisma.user.update({
                    where: { id: sub.userId },
                    data: { isSubscribed: false },
                    select: { clerkUserId: true, id: true, role: true },
                });

                // Clerk public metadata → subscribed = false
                if (u.clerkUserId) {
                    try {
                        await clerk.users.updateUserMetadata(u.clerkUserId, {
                            publicMetadata: {
                                isSubscribed: false,
                                dbUserId: u.id,
                                role: u.role,
                            },
                        });
                    } catch (e) {
                        console.warn("[paystack:webhook] clerk update failed (subscription.disable/not_renew)", e);
                    }
                }
                break;
            }

            default:
                console.log("[paystack:webhook] Unhandled event", eventName);
                break;
        }

        return NextResponse.json({ ok: true });
    } catch (err: any) {
        console.error("[paystack:webhook] handler error", err);
        return NextResponse.json({ error: err.message || "Webhook error" }, { status: 500 });
    }
}
