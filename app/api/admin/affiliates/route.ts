import prisma from "@/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const affiliates = await prisma.affiliate.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            avatar: true,
          },
        },
        referralClicks: true,
        commissions: true,
        payouts: true,
      },
    });

    return NextResponse.json(affiliates);
  } catch (error) {
    console.log("Affiliates admin endpoint error", error);
    return NextResponse.json(
      { error: "Failed to fetch affiliates." },
      { status: 500 }
    );
  }
}
