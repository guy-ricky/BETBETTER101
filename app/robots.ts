// src/app/robots.ts
import { type MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.betbetter101.com";

  return {
    rules: [
      {
        userAgent: "*",
        // Allow everything by default
        allow: "/",
        // Block only truly private endpoints
        disallow: ["/api/", "/admin/", "/private/"], // ⬅️ removed "/_next/"
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    // 'host' is optional; Google ignores it, but you can keep it
    host: baseUrl,
  };
}
