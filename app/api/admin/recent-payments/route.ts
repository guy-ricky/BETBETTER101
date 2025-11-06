export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "@/utils";

export async function GET() {
  const payments = await prisma.payment.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: {
          email: true,
        },
      },
    },
  });

  return NextResponse.json(payments);
}
