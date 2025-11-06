import { NextResponse } from "next/server";
import prisma from "@/utils";
import { ParamProps } from "@/types";
import { auth, createClerkClient } from "@clerk/nextjs/server";

export async function PATCH(req: Request, { params }: { params: ParamProps }) {
  const userId = (await params).id;
  const { userId: clerkUserId } = await auth();

  const updates = await req.json();

  const user = await prisma.user.update({
    where: { id: userId },
    data: updates,
  });

  const clerkClient = createClerkClient({
    publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
    secretKey: process.env.CLERK_SECRET_KEY!,
  });

  await clerkClient.users.updateUser(clerkUserId!, { ...updates });

  return NextResponse.json(user);
}
