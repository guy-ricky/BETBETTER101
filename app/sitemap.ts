// src/app/sitemap.ts
import { getAllQueryTags, regions } from "./data/betting";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.betbetter101.com";

  // Core URLs
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/premium",
    "/blog",
  ];

  // Programmatic SEO pages (region + query)
  const tags = await getAllQueryTags({});
  const dynamicRoutes = regions.flatMap((region) =>
    tags.map((tag) => `/${region}/${tag}`)
  );

  // Merge both
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return allRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: path === "" ? 1.0 : 0.8,
  }));
}
