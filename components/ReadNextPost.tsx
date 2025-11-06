/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ReadNextPost.tsx
import Link from "next/link";
import Image from "next/image";

const ReadNextPost = ({ posts, limit = 2 }: any) => {
  const displayPosts = posts.slice(0, limit);

  if (displayPosts.length === 0) return null;

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {displayPosts.map((post: any) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group rounded-xl overflow-hidden border border-gray-700/50 bg-[#121212] hover:border-green-500/40 transition"
        >
          {post.fm?.cover && (
            <div className="relative aspect-[16/9]">
              <Image
                src={post.cover}
                alt={post.title || post.slug}
                fill
                className="object-cover group-hover:opacity-95"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          )}
          <div className="p-4">
            <h4 className="text-white font-semibold group-hover:text-green-400 transition">
              {post.title}
            </h4>
            <p className="text-xs text-gray-400 mt-1">
              {post.date
                ? new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : ""}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReadNextPost;
