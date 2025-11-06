/* eslint-disable @typescript-eslint/no-explicit-any */
// components/RelatedPosts.tsx
import Image from "next/image";
import Link from "next/link";

export default function RelatedPosts({ items }: { items: any[] }) {
  if (!items?.length) return null;

  //console.log("Related Blog items", items);
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.slug}>
          <Link
            href={`/blog/${item.slug}`}
            className="group flex gap-3 items-center"
          >
            {item?.cover ? (
              <div className="relative w-16 h-10 rounded-md overflow-hidden border border-gray-700/50 shrink-0">
                <Image
                  src={item?.cover}
                  alt={item?.title ?? item.slug}
                  fill
                  className="object-cover group-hover:opacity-90"
                  sizes="64px"
                />
              </div>
            ) : (
              <div className="w-16 h-10 rounded-md border border-gray-700/50 bg-[#0f0f0f] shrink-0" />
            )}

            <div className="min-w-0">
              <p className="truncate text-sm text-gray-200 group-hover:text-green-400 transition">
                {item?.title || item.slug}
              </p>
              {item?.date && (
                <p className="text-[11px] text-gray-500">
                  {new Date(item?.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
