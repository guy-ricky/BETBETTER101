/* eslint-disable @typescript-eslint/no-unused-vars */
// app/api/affiliates/me/enable/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/utils";

function randomSuffix(len = 4) {
    return Math.random().toString(36).slice(2, 2 + len).toUpperCase();
}
function sanitizeBase(base: string) {
    return base.replace(/[^A-Za-z0-9]/g, "").slice(0, 12).toUpperCase() || "AFF";
}

// Try a few codes to avoid collisions
async function generateUniqueCode(base: string) {
    const clean = sanitizeBase(base);

    for (let i = 0; i < 5; i++) {
        const candidate = i === 0
            ? `${clean}-${generateRandomString(4)}`
            : `${clean}-${generateRandomString(4)}-${generateRandomString(3)}`;

        const exists = await prisma.affiliate.findUnique({ where: { code: candidate } });
        if (!exists) return candidate;
    }

    // ultra-rare fallback with timestamp
    return `${clean}-${Date.now().toString(36).slice(-6).toUpperCase()}`;
}

function generateRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export async function POST(req: NextRequest) {
    try {
        const { userId: clerkUserId } = await auth();
        if (!clerkUserId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const me = await prisma.user.findUnique({
            where: { clerkUserId },
            select: { id: true, username: true, email: true },
        });
        if (!me) return NextResponse.json({ error: "User not found" }, { status: 404 });

        // If already an affiliate, just OK (idempotent)
        const existing = await prisma.affiliate.findFirst({ where: { userId: me.id } });
        if (existing) {
            return NextResponse.json({ ok: true, already: true, code: existing.code });
        }

        const base = me.username || me.email?.split("@")[0] || "AFF";
        const code = await generateUniqueCode(base);

        await prisma.affiliate.create({
            data: {
                userId: me.id,
                name: me.username || "Anonymous",
                email: me.email || null,
                code,
                currency: "GBP",
                isActive: true,
            },
        });

        return NextResponse.json({ ok: true, code });
    } catch (e: any) {
        console.error("[affiliates:enable] error", e);
        return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
    }
}
