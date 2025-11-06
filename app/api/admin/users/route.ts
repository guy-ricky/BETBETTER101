/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import prisma from "@/utils";
import { auth, createClerkClient } from "@clerk/nextjs/server";

const clerkClient = createClerkClient({
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
  secretKey: process.env.CLERK_SECRET_KEY!,
});

type Role = "USER" | "ADMIN";

async function isAdminUser(clerkUserId: string) {
  const u = await prisma.user.findFirst({ where: { clerkUserId } });
  return !!u && u.role === "ADMIN";
}

function ensureUsernameFromEmail(email: string) {
  const local = email.split("@")[0] ?? "user";
  return (
    local
      .toLowerCase()
      .replace(/[^a-z0-9._-]/g, "")
      .slice(0, 32) || "user"
  );
}

export async function GET() {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (await isAdminUser(userId))
    ? NextResponse.json(users)
    : NextResponse.json({ error: "Admins only" }, { status: 403 });
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!(await isAdminUser(userId))) {
    return NextResponse.json({ error: "Admins only" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const rawEmail: string | undefined = body?.email;
    const firstName: string | undefined = body?.firstName || undefined;
    const lastName: string | undefined = body?.lastName || undefined;
    const role: Role = (body?.role === "ADMIN" ? "ADMIN" : "USER") as Role;

    if (!rawEmail) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }
    const email = String(rawEmail).trim().toLowerCase();

    // Check if there is already a Clerk user for this email
    const list = await clerkClient.users.getUserList({ emailAddress: [email] });
    // Support both newer (paginated) and older SDK return shapes
    const existingClerk = Array.isArray((list as any)?.data)
      ? (list as any).data[0] ?? null
      : (list as any)?.[0] ?? null;

    if (existingClerk) {
      // Already a real Clerk user: sync metadata & Prisma row
      const clerkUserId = existingClerk.id as string;

      await clerkClient.users.updateUser(clerkUserId, {
        // Only set names if Clerk is missing them; otherwise keep Clerk as source of truth
        firstName: existingClerk.firstName ?? firstName,
        lastName: existingClerk.lastName ?? lastName,
        publicMetadata: {
          role,
          isSubscribed:
            Boolean((existingClerk.publicMetadata as any)?.isSubscribed) ||
            false,
        },
      });

      // Ensure Prisma row exists & is linked
      let dbUser = await prisma.user.findUnique({ where: { email } });
      if (!dbUser) {
        dbUser = await prisma.user.create({
          data: {
            email,
            username: ensureUsernameFromEmail(email),
            role,
            isSubscribed: false,
            clerkUserId,
          },
        });
      } else {
        // backfill clerkUserId and role if needed
        if (
          !dbUser.clerkUserId ||
          dbUser.clerkUserId !== clerkUserId ||
          dbUser.role !== role
        ) {
          dbUser = await prisma.user.update({
            where: { id: dbUser.id },
            data: {
              clerkUserId,
              role,
            },
          });
        }
      }

      // Ensure Clerk has our DB id in publicMetadata
      await clerkClient.users.updateUser(clerkUserId, {
        publicMetadata: {
          ...(existingClerk.publicMetadata || {}),
          userId: dbUser.id,
          role,
          isSubscribed: dbUser.isSubscribed ?? false,
        },
      });

      return NextResponse.json({
        status: "updated",
        note: "Existing Clerk user; metadata and DB were synced.",
        db: {
          id: dbUser.id,
          email: dbUser.email,
          role: dbUser.role,
          isSubscribed: dbUser.isSubscribed,
        },
        clerk: { id: clerkUserId, email, role },
      });
    }

    // No Clerk user exists -> SEND INVITATION ONLY (do not create DB row yet)
    const redirectUrl = process.env.INVITE_REDIRECT_URL || undefined; // e.g. https://www.betbetter101.com/sign-up
    const invite = await clerkClient.invitations.createInvitation({
      emailAddress: email,
      publicMetadata: { role, isSubscribed: false },
      ...(redirectUrl ? { redirectUrl } : {}),
      ignoreExisting: true,
    });

    // Log invite details
    console.log("[Clerk Invitation] Sent:", {
      id: invite.id,
      status: invite.status,
      emailAddress: invite.emailAddress,
      createdAt: invite.createdAt,
      redirectUrl: (invite as any)?.redirectUrl ?? redirectUrl ?? null,
    });

    // IMPORTANT: Do NOT create a Prisma row yet.
    // Handle DB creation in your Clerk webhook (e.g. on user.created).
    return NextResponse.json(
      {
        status: "invited",
        invitationId: invite.id,
        email,
        role,
        redirectUrl: (invite as any)?.redirectUrl ?? redirectUrl ?? null,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error inviting/upserting user:", error);
    return NextResponse.json(
      {
        error:
          error?.errors?.[0]?.message ||
          error?.message ||
          "Failed to invite user",
      },
      { status: 500 }
    );
  }
}
