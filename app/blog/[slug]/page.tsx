/* eslint-disable @typescript-eslint/no-explicit-any */
// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "node:fs/promises";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ParamSlugProps } from "@/types";
import { Calendar, Clock, User, ArrowLeft, Sparkles } from "lucide-react";
import ShareBtn from "@/components/ShareBtn";
import RelatedPosts from "@/components/RelatedPosts";
import ReadNextPost from "@/components/ReadNextPost";
import AffiliateCTA from "@/components/AffiliateCTA";

export const dynamic = "force-static";
export const revalidate = 86400; // daily

export async function generateStaticParams() {
  const { getAllPosts } = await import("@/lib/posts");
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: ParamSlugProps;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  if (!post)
    return { title: "Not found", robots: { index: false, follow: false } };

  const title = post.fm.title ?? slug;
  const description = post.fm.excerpt ?? `Article: ${title}`;
  const cover = post.fm.cover ?? "/opengraph-image.jpg";

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      url: `/blog/${slug}`,
      images: [{ url: cover, width: 1200, height: 630 }],
      type: "article",
    },
    robots: { index: true, follow: true },
  };
}

/**
 * Lightweight related-posts selector:
 * - Prioritize tag overlap
 * - Fallback to most recent
 */
async function getRelatedPosts(currentSlug: string, tags: string[] = []) {
  const { getAllPosts } = await import("@/lib/posts");
  const all = await getAllPosts();

  // Exclude current post
  const others = all.filter((p) => p.slug !== currentSlug);

  // Score by tag overlap
  const scored = others
    .map((p: any) => {
      const overlap =
        (p.fm?.tags || []).filter((t: string) => tags.includes(t)).length || 0;
      return { p, overlap };
    })
    .sort((a, b) => {
      if (b.overlap !== a.overlap) return b.overlap - a.overlap;
      // Secondary sort by recency (descending)
      return (
        new Date(b.p.fm?.date || 0).getTime() -
        new Date(a.p.fm?.date || 0).getTime()
      );
    });

  return scored.slice(0, 4).map((x) => x.p);
}

export default async function BlogPostPage({
  params,
}: {
  params: ParamSlugProps;
}) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  // Read MDX file and strip top-level imports
  const raw = await fs.readFile(post.sourcePath, "utf8");
  const { content: rawContent } = matter(raw);
  const content = rawContent.replace(/^\s*import\s.+$/gm, "");

  // Components available to MDX
  const components = {
    Image,
    AffiliateCTA,
    BetCta: AffiliateCTA,
    img: (p: any) => {
      const { src = "", alt = "", width, height, ...rest } = p || {};
      const w = Number(width) || 1200;
      const h = Number(height) || Math.round((w * 9) / 16);
      return (
        <Image
          src={String(src)}
          alt={String(alt)}
          width={w}
          height={h}
          sizes="100vw"
          style={{ height: "auto", width: "100%" }}
          {...rest}
        />
      );
    },
  };

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.fm.title,
    datePublished: post.fm.date,
    author: post.fm.author ?? "BetBetter101 Team",
    image: post.fm.cover ? [post.fm.cover] : undefined,
    url: `https://www.betbetter101.com/blog/${slug}`,
    description: post.fm.excerpt,
  } as const;

  // Word count for "x min read"
  const words = content.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));

  // Related posts (based on tags or recency)
  const related = await getRelatedPosts(slug, post?.tags || []);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />

      {/* Top bar with back + share (full width) */}
      <nav className="mb-6 flex items-center justify-between gap-4 flex-wrap">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Blog
        </Link>
        <ShareBtn
          title={post.fm.title}
          description={post.fm.excerpt}
          hashtags={post.fm.tags}
        />
      </nav>

      {/* CONTENT + SIDEBAR LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* MAIN ARTICLE */}
        <article className="lg:col-span-8">
          {/* Cover Image - Full Width within main column */}
          {post.fm.cover && (
            <div className="relative mb-8 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10 pointer-events-none" />
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src={post.fm.cover}
                  alt={post.fm.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>

              {/* Title + Meta overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
                <nav
                  aria-label="Breadcrumb"
                  className="mb-4 text-xs sm:text-sm"
                >
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Blog
                  </Link>
                  <span className="mx-2 text-gray-500">/</span>
                  <span className="text-gray-400">{post.fm.title}</span>
                </nav>

                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white mb-4 drop-shadow-2xl leading-tight max-w-4xl">
                  {post.fm.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-200">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={post.fm.date}>
                      {new Date(post.fm.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>

                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.fm.author ?? "BetBetter101 Team"}</span>
                  </div>

                  <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-full px-3 py-1.5 border border-green-400/30">
                    <Clock className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 font-medium">
                      {minutes} min read
                    </span>
                  </div>
                </div>

                {/* Tags */}
                {post.fm.tags && post.fm.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.fm.tags.slice(0, 4).map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-gray-200 hover:border-green-400/50 hover:text-green-400 transition-all duration-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Header without cover image */}
          {!post.fm.cover && (
            <header className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 lg:p-10 mb-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              <nav
                aria-label="Breadcrumb"
                className="mb-4 text-sm relative z-10"
              >
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Blog
                </Link>
                <span className="mx-2 text-gray-600">/</span>
                <span className="text-gray-300">{post.fm.title}</span>
              </nav>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 relative z-10 leading-tight">
                {post.fm.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 relative z-10">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.fm.date}>
                    {new Date(post.fm.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>

                <span className="text-gray-600">•</span>

                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.fm.author ?? "BetBetter101 Team"}</span>
                </div>

                <span className="text-gray-600">•</span>

                <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/30 px-3 py-1 text-green-400 font-medium">
                  <Clock className="w-4 h-4" />
                  {minutes} min read
                </div>
              </div>
            </header>
          )}

          {/* In-article AD slot (placeholder) */}
          <AffiliateCTA variant="blog" />
          {/* <section
            aria-label="Advertisement"
            className="mb-6 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-4 min-h-[120px] flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">Advertisement</div>
              <div className="text-xs text-gray-600">Ad space available</div>
            </div>
          </section> */}

          {/* ARTICLE BODY */}
          <section className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 sm:p-8 lg:p-10 prose prose-invert max-w-none mb-8">
            <MDXRemote source={content} components={components} />
          </section>

          {/* Share Section - Below Article */}
          <div className="flex items-center justify-between flex-wrap gap-4 p-6 rounded-xl border border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm mb-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30">
                <Sparkles className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Enjoyed this article?
                </p>
                <p className="text-gray-400 text-xs">
                  Share it with your network
                </p>
              </div>
            </div>
            <ShareBtn
              title={post.fm.title}
              description={post.fm.excerpt}
              hashtags={post.fm.tags}
            />
          </div>

          {/* "Read next" inline (bottom of main column) */}
          {related.length > 0 && (
            <section className="mb-10">
              <h3 className="text-lg font-semibold text-white mb-4">
                Read next
              </h3>
              <ReadNextPost posts={related} limit={2} />
            </section>
          )}

          {/* CTA Section */}
          <aside className="relative overflow-hidden rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 via-gray-800/50 to-yellow-500/10 p-6 sm:p-8">
            <div className="absolute top-4 right-4 text-yellow-400 opacity-50">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">
                Get More Winning Insights
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Join our premium members and get model-backed picks, expert
                analysis, and weekly insights to elevate your betting strategy.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-sm font-bold text-black hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30"
                >
                  See Premium Plans
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-600 bg-gray-800/50 px-6 py-3 text-sm font-semibold text-gray-200 hover:border-gray-500 hover:bg-gray-700/50 transition-all duration-300"
                >
                  More Articles
                </Link>
              </div>
            </div>
          </aside>
        </article>

        {/* SIDEBAR: Ads + Related */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Sticky container so ads & related stay visible */}
          <div className="lg:sticky lg:top-6 space-y-6">
            {/* Sidebar Ad Slot 1 (placeholder) */}
            <AffiliateCTA variant="home" compact />
            {/* <section
              aria-label="Advertisement"
              className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-4 min-h-[250px] flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-xs text-gray-500 mb-1">Advertisement</div>
                <div className="text-xs text-gray-600">Ad space available</div>
              </div>
            </section> */}

            {/* Related Posts (sidebar) */}
            {related.length > 0 && (
              <section className="rounded-2xl border border-gray-700/50 bg-[#121212] p-4">
                <h3 className="text-sm font-semibold text-white mb-3">
                  Related posts
                </h3>
                <RelatedPosts items={related} />
              </section>
            )}

            {/* Sidebar Ad Slot 2 (placeholder) */}
            {/* <AffiliateCTA variant="home" compact /> */}
            <section
              aria-label="Advertisement"
              className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-4 min-h-[280px] flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-xs text-gray-500 mb-1">Advertisement</div>
                <div className="text-xs text-gray-600">Ad space available</div>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </main>
  );
}
