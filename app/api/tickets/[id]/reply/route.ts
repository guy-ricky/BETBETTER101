import { NextResponse } from "next/server";
import { auth, createClerkClient } from "@clerk/nextjs/server";
import prisma from "@/utils";
import { ParamProps } from "@/types";

const clerkClient = createClerkClient({
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
  secretKey: process.env.CLERK_SECRET_KEY!,
});

export async function POST(req: Request, { params }: { params: ParamProps }) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const ticket = await prisma.ticket.findUnique({
    where: { id: (await params).id },
  });
  if (!ticket)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  const user = await clerkClient.users.getUser(userId);
  const role = user?.publicMetadata?.role;
  const isStaff = role === "STAFF" || role === "ADMIN";

  if (!isStaff && ticket.userId !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { body } = await req.json();
  if (!body)
    return NextResponse.json({ error: "Message required" }, { status: 400 });

  // Users can only reply to their own tickets; staff can reply to any
  if (!isStaff && ticket.userId !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const message = await prisma.ticketMessage.create({
    data: {
      ticketId: ticket.id,
      authorId: userId,
      body,
      isStaff,
    },
  });

  return NextResponse.json(message, { status: 201 });
}
