/* eslint-disable @typescript-eslint/no-explicit-any */
import crypto from 'crypto';

const BASE = process.env.PAYSTACK_BASE_URL || 'https://api.paystack.co';
const SECRET = process.env.PAYSTACK_SECRET_KEY!;

export async function paystackFetch<T = any>(
    path: string,
    init?: RequestInit
): Promise<T> {
    const res = await fetch(`${BASE}${path}`, {
        ...init,
        headers: {
            Authorization: `Bearer ${SECRET}`,
            "Content-Type": "application/json",
            ...(init?.headers || {}),
        },
        cache: 'no-store',
    });

    if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`Paystack error ${res.status}: ${text || res.statusText}`);
    }

    return res.json() as Promise<T>;
};

/* Verify Paystack Signature (x-paystack-signature, sha512 of raw body) */
export function verifyPaystackSignature(rawBody: string, signature?: string) {
    if (!signature) return false;
    const hash = crypto.createHmac("sha512", SECRET).update(rawBody).digest("hex");
    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(signature));
};