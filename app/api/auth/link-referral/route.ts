// app/api/auth/link-referral/route.ts
import { cookies } from "next/headers";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/utils";

export const runtime = "nodejs";

export async function POST() {
    const { userId } = await auth();
    if (!userId) return new Response("Unauthorized", { status: 401 });

    const refCode = (await cookies()).get("bb_ref")?.value;
    if (!refCode) return new Response(JSON.stringify({ ok: true, note: "No ref cookie" }), { status: 200 });

    // Resolve affiliate
    const aff = await prisma.affiliate.findUnique({ where: { code: refCode } });
    if (!aff) return new Response(JSON.stringify({ ok: true, note: "Affiliate not found" }), { status: 200 });

    // Link the current user row by clerkUserId
    await prisma.user.update({
        where: { clerkUserId: userId },
        data: { referredByAffiliateId: aff.id },
    });

    return new Response(JSON.stringify({ ok: true }));
}
