import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import type { SearchParams } from "@/types/blogPage";
import Link from "next/link";

// IMPORTANT: allow responses to vary by ?q= and ?page=
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blog - BetBetter",
  description: "Education, bankroll tips, and model deep-dives.",
  alternates: { canonical: "/blog" },
};

const PER_PAGE = 9; // shows nicely as 3x3 on desktop

export default async function BlogIndex({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const posts = await getAllPosts();

  // ---- Normalize query params ----
  const rawQ = (await searchParams)?.q;
  const q = Array.isArray(rawQ) ? rawQ.join(" ") : rawQ ?? "";
  const query = q.toLowerCase().trim();

  const rawPage = (await searchParams)?.page;
  const pageInput = Array.isArray(rawPage) ? rawPage[0] : rawPage;
  const parsed = Number.parseInt(pageInput ?? "1", 10);
  const requestedPage = Number.isFinite(parsed) && parsed > 0 ? parsed : 1;

  // ---- Filter by search ----
  const filtered = query
    ? posts.filter((p) => {
      const haystack = [
        p.title ?? "",
        p.excerpt ?? "",
        Array.isArray(p.tags) ? p.tags.join(" ") : "",
        p.slug ?? "",
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    })
    : posts;

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const currentPage = Math.min(requestedPage, totalPages);
  const startIndex = (currentPage - 1) * PER_PAGE;
  const endIndex = Math.min(startIndex + PER_PAGE, total);
  const pagePosts = filtered.slice(startIndex, endIndex);

  // Build href preserving q
  const hrefFor = (p: number) => {
    const params = new URLSearchParams();
    if (query) params.set("q", q);
    if (p > 1) params.set("page", String(p));
    const qs = params.toString();
    return `/blog${qs ? `?${qs}` : ""}`;
  };

  // Compact page list: 1 ... c-1 c c+1 ... total
  const buildPageList = (c: number, t: number) => {
    const pages: (number | string)[] = [];
    const push = (v: number | string) => pages.push(v);

    const windowSize = 1; // neighbors on each side
    const start = Math.max(1, c - windowSize);
    const end = Math.min(t, c + windowSize);

    // always show first
    push(1);
    if (start > 2) push("…");

    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== t) push(i);
    }

    if (end < t - 1) push("…");
    if (t > 1) push(t);

    // de-dup if t==1 etc.
    return Array.from(new Set(pages));
  };

  const pageList = buildPageList(currentPage, totalPages);

  // Optional: server log (safe)
  console.log(
    `Blog search -> q="${query}" | results=${total} | page=${currentPage}/${totalPages}`
  );

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            BetBetter101 Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Expert insights, betting strategies, and deep dives into our
            prediction methodology
          </p>

          {/* Search bar */}
          <form action="/blog" method="GET" className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                name="q"
                defaultValue={q}
                placeholder="Search articles, tags, teams, leagues…"
                className="w-full pl-4 pr-32 py-4 rounded-full bg-card border-2 border-border text-white placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 shadow-lg"
                aria-label="Search blog posts"
              />
              {/* Search Icon */}
              {/* <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-3.6-3.6" />
                </svg>
              </span> */}

              {/* Right-side actions */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                {q ? (
                  <Link
                    href="/blog"
                    className="px-4 py-2.5 rounded-full text-sm font-medium border border-border text-gray-200 hover:bg-card/80 hover:border-muted-foreground/30 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
                    aria-label="Clear search"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Clear
                  </Link>
                ) : null}
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-green-500 hover:shadow-brb-green/40 transition-all duration-300 shadow-brb-green flex items-center gap-2 group"
                >
                  <svg
                    className="h-4 w-4 group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>

            {/* Results hint */}
            <div className="mt-4 text-sm text-muted-foreground">
              {query ? (
                <>
                  Showing{" "}
                  <span className="text-white font-medium">
                    {total === 0 ? 0 : startIndex + 1}–{endIndex}
                  </span>{" "}
                  of{" "}
                  <span className="text-white font-medium">{total}</span>{" "}
                  result{total === 1 ? "" : "s"} for{" "}
                  <span className="text-white font-medium">
                    &ldquo;{q}&rdquo;
                  </span>
                </>
              ) : (
                <>
                  Showing{" "}
                  <span className="text-white font-medium">
                    {total === 0 ? 0 : startIndex + 1}–{endIndex}
                  </span>{" "}
                  of{" "}
                  <span className="text-white font-medium">{posts.length}</span>{" "}
                  articles
                </>
              )}
            </div>
          </form>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {posts.length}+
              </div>
              <div className="text-sm text-muted-foreground">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">5</div>
              <div className="text-sm text-muted-foreground">Min Avg Read</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Weekly</div>
              <div className="text-sm text-muted-foreground">Updates</div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <section className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-2xl">
          {pagePosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pagePosts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    date={post.date}
                    excerpt={post.excerpt}
                    cover={post.cover}
                    tags={post.tags}
                    readingMinutes={post.readingMinutes}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav
                  className="mt-10 flex items-center justify-center gap-2"
                  aria-label="Pagination"
                >
                  {/* Prev */}
                  <Link
                    href={hrefFor(Math.max(1, currentPage - 1))}
                    aria-disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-lg border border-border text-sm ${currentPage === 1
                        ? "pointer-events-none opacity-40"
                        : "hover:bg-card/70"
                      }`}
                  >
                    ← Prev
                  </Link>

                  {/* Numbers */}
                  {pageList.map((p, i) =>
                    typeof p === "number" ? (
                      <Link
                        key={`${p}-${i}`}
                        href={hrefFor(p)}
                        aria-current={p === currentPage ? "page" : undefined}
                        className={`px-3 py-2 rounded-lg border text-sm ${p === currentPage
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border hover:bg-card/70"
                          }`}
                      >
                        {p}
                      </Link>
                    ) : (
                      <span
                        key={`sep-${i}`}
                        className="px-2 text-muted-foreground select-none"
                      >
                        {p}
                      </span>
                    )
                  )}

                  {/* Next */}
                  <Link
                    href={hrefFor(Math.min(totalPages, currentPage + 1))}
                    aria-disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-lg border border-border text-sm ${currentPage === totalPages
                        ? "pointer-events-none opacity-40"
                        : "hover:bg-card/70"
                      }`}
                  >
                    Next →
                  </Link>
                </nav>
              )}
            </>
          ) : (
            // Empty State
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No results found
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Try searching different keywords, like a team, competition, or a
                topic (e.g., “bankroll”, “Poisson”, “Premier League”).
              </p>
              <div className="mt-6">
                <Link
                  href="/blog"
                  className="inline-block px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-green-500 transition shadow-brb-green"
                >
                  Back to all posts
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-white mb-4">
              Never Miss an Update
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest betting insights and strategy tips delivered
              straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-background border border-border text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary hover:bg-green-500 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-brb-green">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="flex justify-center mt-12 space-x-3">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse-slow"></div>
          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-slow animation-delay-2000"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse-slow animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
}
