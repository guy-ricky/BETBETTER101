// lib/lemon.ts
export const LSZ_API = "https://api.lemonsqueezy.com/v1";

export function lszHeaders() {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY!}`,
    };
}

export function planConfig(plan: "monthly" | "seven_months") {
    if (plan === "monthly")
        return {
            variantId: process.env.LEMON_SQUEEZY_MONTHLY_VARIANT_ID!,
            unitAmountMinor: 35_00,
            interval: "month",
            intervalCount: 1,
        };
    return {
        variantId: process.env.LEMON_SQUEEZY_SEVEN_MONTHS_VARIANT_ID!,
        unitAmountMinor: 250_00,
        interval: "month",
        intervalCount: 7,
    };
}
