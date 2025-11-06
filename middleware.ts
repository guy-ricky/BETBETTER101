// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest } from "next/server";

const isPublicRoute = createRouteMatcher([
  // ---- Auth & webhooks (public) ----
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks/clerk(.*)",
  "/api/webhooks/paddle(.*)",
  "/api/webhooks/paystack(.*)",
  "/api/telegram/webhook(.*)",

  // ---- Core public pages ----
  "/",
  "/home-feed(.*)",
  "/about(.*)",
  "/how-it-works(.*)",
  "/affiliate(.*)",
  "/faq(.*)",
  "/pricing(.*)",
  "/contact(.*)",
  "/refunds(.*)",
  "/privacy(.*)",
  "/privacy-policy(.*)",
  "/terms(.*)",
  "/terms-of-service(.*)",
  "/.well-known(.*)",

  // ---- Blog & content must be public ----
  "/blog(.*)",
  "/league(.*)",
  "/predictions(.*)",

  // ---- APIs that must remain public ----
  "/api/home-feed(.*)",
  "/api/home-upcoming-preds(.*)",
  "/api/football/feed(.*)",
  "/api/referrals/click(.*)",
  "/api/db-health(.*)",
  "/api/predict/generate(.*)",
  "/api/predict/sync-results(.*)",
  "/api/admin/affiliates",

  // ---- Billing / subscription endpoints (public entry points) ----
  "/billing/verify(.*)",
  "/user/subscribe(.*)",

  // ---- ABSOLUTE EXCLUSIONS for SEO endpoints (no auth, no redirects) ----
  "/sitemap.xml",
  "/robots.txt",
]);

const REF_COOKIE = "bb_ref";
const REF_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { pathname, origin, searchParams } = req.nextUrl;

  // 0) Hard bypass for SEO endpoints (defense-in-depth; also excluded in matcher below)
  if (pathname === "/sitemap.xml" || pathname === "/robots.txt") {
    return NextResponse.next();
  }

  // 1) Always bypass ALL webhooks early
  if (pathname.startsWith("/api/webhooks/")) {
    return NextResponse.next();
  }

  // 2) Optional cron bypass
  const cronSecret = req.headers.get("x-cron-secret");
  if (cronSecret && cronSecret === process.env.CRON_SECRET) {
    return NextResponse.next();
  }

  // 3) Protect non-public routes (let Clerk handle the response/redirect)
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  // 4) Build the response we’ll return (and attach cookies to it)
  const res = NextResponse.next();

  // 5) Capture ?ref=<code> and log the click (GET only, no SEO endpoints)
  if (req.method === "GET" && pathname !== "/sitemap.xml" && pathname !== "/robots.txt") {
    const refCode = searchParams.get("ref");
    if (refCode) {
      res.cookies.set({
        name: REF_COOKIE,
        value: refCode,
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: REF_COOKIE_MAX_AGE,
      });

      // Fire-and-forget: must be PUBLIC (see list above)
      void fetch(`${origin}/api/referrals/click`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          code: refCode,
          ip:
            req.headers.get("x-forwarded-for")?.split(",")?.[0]?.trim() ||
            req.headers.get("x-real-ip") ||
            null,
          ua: req.headers.get("user-agent") || null,
          referrer: req.headers.get("referer") || null,
        }),
      }).catch(() => { /* swallow */ });
    }
  }

  return res;
});

export const config = {
  matcher: [
    // Skip Next internals, assets, and explicitly skip sitemap/robots so no middleware runs there.
    "/((?!_next|_vercel|.*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)|sitemap\\.xml|robots\\.txt).*)",
    // Always run on API routes
    "/(api|trpc)(.*)",
  ],
};
