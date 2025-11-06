import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Parse YAML `---` blocks and expose them to MDX as `export const frontmatter = {...}`
    remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: "frontmatter" }]],
  },
});

const nextConfig: NextConfig = {
  // Make Next treat .md/.mdx as pages so dynamic imports work cleanly
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "cdn.pixabay.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "cdn.discordapp.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "i.pinimg.com", port: "", pathname: "/**" }, // Pinterest CDN
      { protocol: "https", hostname: "ik.imagekit.io", port: "", pathname: "/**" },
      { protocol: "https", hostname: "lh3.googleusercontent.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "avatars.githubusercontent.com", port: "", pathname: "/**" },
      // NOTE: "i.ping.com" looks like a typo — remove it or correct to i.pinimg.com (already present)
      { protocol: "https", hostname: "img.clerk.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "media.api-sports.io", port: "", pathname: "/**" },
      { protocol: "https", hostname: "flagcdn.com", port: "", pathname: "/**" },
    ],
  },
};

export default withMDX(nextConfig);
