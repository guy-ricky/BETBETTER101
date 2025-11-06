import Link from "next/link";
import Image from "next/image";

export type BlogCardProps = {
  slug?: string;
  title: string;
  date: string; // ISO
  excerpt?: string;
  cover?: string;
  tags?: string[];
  readingMinutes?: number;
};

export default function BlogCard({
  slug,
  title,
  date,
  excerpt,
  cover,
  tags = [],
  readingMinutes,
}: BlogCardProps) {
  return (
    <article className="group relative flex flex-col h-full overflow-hidden rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-500 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-1">
      {/* Subtle background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-transparent to-yellow-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/20 via-green-500/20 to-yellow-400/20 blur-sm" />
      </div>

      {/* Make whole card clickable */}
      <Link
        href={`/blog/${slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Read "${title}"`}
      />

      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-900 flex-shrink-0">
        {cover ? (
          <>
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={false}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

            {/* Reading time badge */}
            {readingMinutes && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm z-10">
                {readingMinutes} min
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="text-gray-600 text-4xl font-bold">
              {title.length > 30
                ? title.slice(0, 27) + "..."
                : title.charAt(0).toUpperCase() + title.slice(1)}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 relative">
        {/* Date */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>

        {/* Title - Fixed height with line clamp */}
        <h3 className="font-bold text-white text-xl leading-tight line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-yellow-400 group-hover:bg-clip-text transition-all duration-300 mb-3 min-h-[3.5rem]">
          {title}
        </h3>

        {/* Excerpt - Fixed height with line clamp */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 min-h-[4rem] flex-grow">
          {excerpt ||
            "Discover insights, strategies, and expert analysis to enhance your betting experience."}
        </p>

        {/* Tags - Fixed height container */}
        <div className="min-h-[2.5rem] mb-4">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/30 px-2.5 py-1 text-xs text-green-400 font-medium transition-all duration-300 group-hover:bg-green-500 group-hover:text-black group-hover:border-green-500"
                >
                  #{tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="inline-flex items-center rounded-full bg-gray-700/50 border border-gray-600 px-2.5 py-1 text-xs text-gray-400 font-medium">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Read More CTA - Always at bottom */}
        <div className="relative z-20 flex items-center justify-between pt-4 mt-auto border-t border-gray-700/50 group-hover:border-green-500/30 transition-colors duration-300">
          <Link
            href={`/blog/${slug}`}
            className="text-green-400 text-sm font-bold hover:text-green-300 transition-colors duration-300 flex items-center gap-2"
            aria-label={`Read more about ${title}`}
          >
            Read Article
            <svg
              className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          {/* Animated indicator */}
          <div className="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </article>
  );
}
