/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { auth, createClerkClient } from "@clerk/nextjs/server";
import prisma from "@/utils";

function isAdmin(roles?: string | string[] | null) {
  return roles?.includes("admin") || roles?.includes("ADMIN");
}

const clerkClient = createClerkClient({
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
  secretKey: process.env.CLERK_SECRET_KEY!,
});

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const {
    subject,
    message,
    category = "OTHER",
    priority = "MEDIUM",
  } = await req.json();

  if (!subject || !message) {
    return NextResponse.json(
      { error: "Subject and message are required" },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const ticket = await prisma.ticket.create({
    data: {
      userId: user.id,
      subject,
      category,
      priority,
      messages: {
        create: {
          authorId: user.id,
          body: message,
          isStaff: false,
        },
      },
    },
    include: { messages: true },
  });

  return NextResponse.json({ ticket }, { status: 201 });
}

export async function GET(req: Request) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(req.url);
  const all = url.searchParams.get("all") === "1";

  const where: any = {};
  if (all) {
    // Only admins can view all tickets
    const currentUser = await clerkClient.users.getUser(userId);
    if (
      !isAdmin(
        currentUser?.publicMetadata?.role as
          | string
          | string[]
          | null
          | undefined
      )
    ) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  } else {
    where.userId =
      (userId &&
        (await prisma.user.findUnique({ where: { clerkUserId: userId } }))
          ?.id) ||
      null;
  }

  const tickets = await prisma.ticket.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      messages: true,
      user: { select: { id: true, username: true, email: true } },
    },
  });

  return NextResponse.json(tickets);
}
