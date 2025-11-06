import prisma from "@/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { code, ip, ua, referrer } = await req.json();

    const affiliate = await prisma.affiliate.findUnique({ where: { code } });
    if (!affiliate || !affiliate.isActive) {
        return NextResponse.json({ ok: false }, { status: 200 });
    }

    await prisma.$transaction([
        prisma.referralClick.create({
            data: { affiliateId: affiliate.id, ip, ua, referrer },
        }),
        prisma.affiliate.update({
            where: { id: affiliate.id },
            data: { clicks: { increment: 1 } },
        }),
    ]);

    return NextResponse.json({ ok: true });
}
