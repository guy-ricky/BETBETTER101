// lib/subscription.ts
import prisma from "@/utils";

export async function computeIsSubscribed(userId: string) {
  const now = new Date();
  const sub = await prisma.subscription.findFirst({
    where: {
      userId,
      status: { in: ["ACTIVE", "TRIALING", "PAUSED"] },
      OR: [
        { currentPeriodEnd: null },      // if LSZ has no end, treat as active
        { currentPeriodEnd: { gt: now } }
      ],
    },
    orderBy: { updatedAt: "desc" },
  });
  return !!sub;
}
