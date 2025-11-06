/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type BlogFrontmatter = {
  title: string;
  slug?: string;        // ← optional now
  date: string;         // ISO-ish; we'll normalize
  excerpt?: string;
  cover?: string;
  tags?: string[];
  author?: string;
  draft?: boolean;
};

export type BlogSummary = BlogFrontmatter & { readingMinutes: number; slug: string };

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const isPostFile = (f: string) => f.endsWith(".mdx") || f.endsWith(".md");

export async function getAllPosts(): Promise<BlogSummary[]> {
  const files = (await fs.readdir(BLOG_DIR)).filter(isPostFile);

  const out: BlogSummary[] = [];
  for (const file of files) {
    const sourcePath = path.join(BLOG_DIR, file);
    const raw = await fs.readFile(sourcePath, "utf8");
    const { data, content } = matter(raw);
    const fm = (data || {}) as BlogFrontmatter;

    // derive slug from filename if not provided
    const derivedSlug = file.replace(/\.(mdx|md)$/, "");
    const slug = (fm.slug || derivedSlug).trim();

    // normalize/validate date
    const d = new Date(fm.date as any);
    const isoDate = isNaN(+d) ? new Date().toISOString() : d.toISOString();

    // skip drafts if present
    if (fm.draft) continue;

    // require minimum fields
    if (!fm.title) continue;

    const words = content.split(/\s+/).filter(Boolean).length;
    const readingMinutes = Math.max(1, Math.round(words / 220));

    out.push({
      ...fm,
      slug,
      date: isoDate,
      readingMinutes,
    });
  }

  // newest first
  out.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return out;
}

export async function getPostBySlug(slug: string): Promise<{
  tags: string[]; fm: BlogFrontmatter; sourcePath: string
} | null> {
  const tryFiles = [path.join(BLOG_DIR, `${slug}.mdx`), path.join(BLOG_DIR, `${slug}.md`)];
  for (const p of tryFiles) {
    try {
      const raw = await fs.readFile(p, "utf8");
      const { data } = matter(raw);
      const fm = (data || {}) as BlogFrontmatter;
      return { tags: fm.tags ?? [], fm: { ...fm, slug }, sourcePath: p };
    } catch {
      // keep trying
    }
  }
  return null;
}
