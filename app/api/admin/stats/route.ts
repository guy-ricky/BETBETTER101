export const runtime = "nodejs";

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/utils";

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const admin = await prisma.user.findUnique({ where: { clerkUserId: userId } });
  if (!admin || admin.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const [totalUsers, activeSubscribers, todayPayments, pendingPayments] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { isSubscribed: true } }),
    prisma.payment.aggregate({
      _sum: { amount: true },
      where: {
        status: "COMPLETED",
        createdAt: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
        },
      },
    }),
    prisma.payment.count({ where: { status: "PENDING" } }),
  ]);

  return NextResponse.json({
    totalUsers,
    activeSubscribers,
    todayPayments: todayPayments._sum.amount || 0,
    pendingPayments,
  });
}
