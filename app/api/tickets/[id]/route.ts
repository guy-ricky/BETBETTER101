// app/api/tickets/[id]/route.ts
import { NextResponse } from "next/server";
import { auth, createClerkClient } from "@clerk/nextjs/server";
import prisma from "@/utils";
import { ParamProps } from "@/types";

const clerkClient = createClerkClient({
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
  secretKey: process.env.CLERK_SECRET_KEY!,
});

async function isAdmin() {
  const { userId } = await auth();
  if (!userId) return false;
  const user = await clerkClient.users.getUser(userId);
  return user?.publicMetadata?.role === "ADMIN";
}

export async function GET(_req: Request, { params }: { params: ParamProps }) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const ticket = await prisma.ticket.findUnique({
    where: { id: (await params).id },
    include: { messages: true },
  });
  if (!ticket)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (ticket.userId !== userId && !isAdmin()) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return NextResponse.json(ticket);
}

export async function PATCH(req: Request, { params }: { params: ParamProps }) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { status, priority, category, adminNote } = body as {
    status?: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
    priority?: "LOW" | "MEDIUM" | "HIGH";
    category?: "BILLING" | "SUBSCRIPTION" | "TECHNICAL" | "ACCOUNT" | "OTHER";
    adminNote?: string;
  };

  const ticket = await prisma.ticket.findUnique({
    where: { id: (await params).id },
  });
  if (!ticket)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Only admins can change status/priority/category
  if (!isAdmin()) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const updated = await prisma.ticket.update({
    where: { id: (await params).id },
    data: {
      status: status ?? ticket.status,
      priority: priority ?? ticket.priority,
      category: category ?? ticket.category,
      ...(adminNote
        ? {
            messages: {
              create: {
                authorId: userId,
                body: adminNote,
                isStaff: true,
              },
            },
          }
        : {}),
    },
    include: { messages: true },
  });

  return NextResponse.json(updated);
}
