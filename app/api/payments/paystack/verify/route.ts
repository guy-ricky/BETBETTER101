/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { paystackFetch } from "@/lib/paystack";

/**
 * GET /api/payments/paystack/verify?reference=REF_123
 */
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const reference = searchParams.get("reference");
        if (!reference) {
            return NextResponse.json({ ok: false, error: "Missing reference" }, { status: 400 });
        }

        // Paystack verify
        const verifyRes = await paystackFetch<{
            status: boolean;
            data: {
                status: string;               // "success" | "failed" | ...
                reference: string;
                amount: number;               // pence (GBP minor)
                currency: string;             // "GBP"
                paid_at: string;              // ISO
                metadata?: Record<string, any>;
                customer?: { email: string };
            };
        }>(`/transaction/verify/${reference}`, { method: "GET" });

        const ok = verifyRes?.data?.status === "success";
        return NextResponse.json({
            ok,
            providerStatus: verifyRes?.data?.status,
            reference: verifyRes?.data?.reference,
            amountMinor: verifyRes?.data?.amount,
            currency: verifyRes?.data?.currency?.toUpperCase?.() || "GBP",
            paidAt: verifyRes?.data?.paid_at,
            email: verifyRes?.data?.customer?.email,
            metadata: verifyRes?.data?.metadata || {},
            message: ok ? "Payment confirmed." : "Payment not successful.",
        });
    } catch (err: any) {
        return NextResponse.json({ ok: false, error: err?.message || "Verify failed" }, { status: 500 });
    }
}
