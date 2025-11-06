/* eslint-disable @typescript-eslint/no-explicit-any */
// Webhook to sync Clerk users into your database (idempotent + email-safe)
// Uses Clerk's new verifyWebhook() helper (no manual Svix header parsing).

import { NextRequest } from "next/server";
import prisma from "@/utils";
import { createClerkClient } from "@clerk/nextjs/server";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";

/**
 * Load one or more signing secrets.
 * - Preferred: CLERK_WEBHOOK_SIGNING_SECRET (single)
 * - Optional multi-endpoint: CLERK_WEBHOOK_SIGNING_SECRETS (comma-separated)
 * - Back-compat: CLERK_WEBHOOK_SECRET (older name you used)
 */
function getSigningSecrets(): string[] {
  const multi = process.env.CLERK_WEBHOOK_SIGNING_SECRETS;
  const single =
    process.env.CLERK_WEBHOOK_SIGNING_SECRET ||
    process.env.CLERK_WEBHOOK_SECRET; // back-compat

  const arr = [
    ...(multi ? multi.split(",") : []),
    ...(single ? [single] : []),
  ]
    .map((s) => s.trim())
    .filter(Boolean);

  return Array.from(new Set(arr));
}

async function verifyWithAnySecret(req: NextRequest): Promise<WebhookEvent> {
  const secrets = getSigningSecrets();
  if (!secrets.length) {
    throw new Error(
      "Missing CLERK_WEBHOOK_SIGNING_SECRET(S) (or CLERK_WEBHOOK_SECRET)"
    );
  }

  let lastErr: unknown;
  for (const signingSecret of secrets) {
    try {
      // If no options are passed, verifyWebhook() reads CLERK_WEBHOOK_SIGNING_SECRET from env.
      // Here we pass each secret explicitly to support multiple endpoints. :contentReference[oaicite:1]{index=1}
      const evt = await verifyWebhook(req, { signingSecret });
      return evt as WebhookEvent;
    } catch (err) {
      lastErr = err;
      // try next secret
    }
  }
  throw lastErr instanceof Error
    ? lastErr
    : new Error("Webhook verification failed for all secrets");
}

export async function POST(req: NextRequest) {
  let event: WebhookEvent;

  // 1) Verify signature (no manual body read, the helper handles raw body + Svix headers) :contentReference[oaicite:2]{index=2}
  try {
    event = await verifyWithAnySecret(req);
  } catch (err) {
    console.error("Clerk webhook verification failed:", err);
    return new Response("Webhook verification failed", { status: 400 });
  }

  // 2) Handle events
  try {
    if (event.type === "user.created") {
      const {
        id: clerkUserId,
        email_addresses,
        first_name,
        last_name,
        image_url,
        primary_email_address_id,
      } = event.data;

      const primaryEmail =
        email_addresses?.find((e) => e.id === primary_email_address_id)
          ?.email_address ||
        email_addresses?.[0]?.email_address ||
        null;

      if (!primaryEmail) {
        // No email on record; acknowledge to avoid retries
        return new Response("No email on user", { status: 200 });
      }

      // Email-first reconciliation to avoid dupes
      const existingByEmail = await prisma.user.findUnique({
        where: { email: primaryEmail },
      });

      let dbUser;
      if (existingByEmail) {
        dbUser = await prisma.user.update({
          where: { email: primaryEmail },
          data: {
            clerkUserId: existingByEmail.clerkUserId ?? clerkUserId,
            username:
              first_name || last_name
                ? `${first_name ?? ""} ${last_name ?? ""}`.trim().toLowerCase()
                : existingByEmail.username ?? primaryEmail.split("@")[0],
            avatar: image_url ?? existingByEmail.avatar ?? null,
          },
        });
      } else {
        dbUser = await prisma.user.upsert({
          where: { clerkUserId: clerkUserId },
          update: {
            email: primaryEmail,
            username:
              first_name || last_name
                ? `${first_name ?? ""} ${last_name ?? ""}`.trim().toLowerCase()
                : primaryEmail.split("@")[0],
            avatar: image_url ?? null,
          },
          create: {
            clerkUserId,
            email: primaryEmail,
            username:
              first_name || last_name
                ? `${first_name ?? ""} ${last_name ?? ""}`.trim().toLowerCase()
                : primaryEmail.split("@")[0],
            avatar: image_url ?? null,
          },
        });
      }

      // Optional: write back public metadata to Clerk for convenience
      if (process.env.CLERK_SECRET_KEY) {
        const clerkClient = createClerkClient({
          publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
          secretKey: process.env.CLERK_SECRET_KEY,
        });
        try {
          await clerkClient.users.updateUser(dbUser.clerkUserId, {
            publicMetadata: {
              userId: dbUser.id,
              role: dbUser.role,
              isSubscribed: dbUser.isSubscribed,
            },
          });
        } catch (e) {
          console.warn("Clerk metadata update failed:", (e as Error)?.message);
        }
      } else {
        console.warn(
          "Skipping Clerk metadata update: CLERK_SECRET_KEY not set."
        );
      }

      return new Response("OK", { status: 200 });
    }

    // (Optional) Add more handlers as needed:
    // if (event.type === "user.updated") { ... }
    // if (event.type === "user.deleted") { ... }

    return new Response("OK", { status: 200 });
  } catch (err: any) {
    console.error("Webhook processing error:", err?.message || err);
    return new Response("Internal error", { status: 500 });
  }
}
