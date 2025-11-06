// app/api/auth/after-signup/route.ts (or wherever you finalize a user row)
import { cookies } from "next/headers";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/utils";

export async function POST() {
    const { userId } = await auth(); // adapt to your flow
    if (!userId) return new Response("Unauthorized", { status: 401 });

    const refCode = (await cookies()).get("bb_ref")?.value;
    if (refCode) {
        const aff = await prisma.affiliate.findUnique({ where: { code: refCode } });
        if (aff) {
            await prisma.user.update({
                where: { clerkUserId: userId },
                data: { referredByAffiliateId: aff.id },
            });
        }
    }

    return new Response(JSON.stringify({ ok: true }));
}
