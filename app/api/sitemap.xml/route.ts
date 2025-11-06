import { NextResponse } from "next/server";

// If any server-only code/FS is used, uncomment:
// export const runtime = "nodejs";

export async function GET() {
    const base = `https://betbetter101.com`.replace(/\/$/, "");

    // core pages
    const urls = [
        "/", "/about", "/how-it-works", "/pricing",
        "/affiliate", "/predictions", "/blog", "/faq",
    ].map((p) => `${base}${p}`);

    // OPTIONAL: append blog posts here in try/catch
    // try {
    //   const { getAllPosts } = await import("@/lib/posts");
    //   const posts = await getAllPosts();
    //   urls.push(...posts.map(p => `${base}/blog/${p.slug}`));
    // } catch (e) {
    //   console.error("sitemap posts error:", e);
    // }

    const items = urls
        .map((u) =>
            `<url><loc>${u}</loc><changefreq>weekly</changefreq><priority>${u === `${base}/` ? "1.0" : "0.6"
            }</priority></url>`
        )
        .join("");

    const xml =
        `<?xml version="1.0" encoding="UTF-8"?>` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}</urlset>`;

    return new NextResponse(xml, {
        status: 200,
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
        },
    });
}
