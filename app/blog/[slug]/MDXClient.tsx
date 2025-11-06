"use client";

import React from "react";

export default function MDXClient({ slug }: { slug: string }) {
  const [Comp, setComp] = React.useState<React.ComponentType | null>(null);
  const [err, setErr] = React.useState<string | null>(null);

  React.useEffect(() => {
    let mounted = true;
    setComp(null);
    setErr(null);

    import(`../../../content/blog/${slug}.mdx`)
      .then((mod) => {
        if (mounted) {
          // store component
          setComp(() => (mod.default as React.ComponentType));
        }
      })
      .catch((e) => {
        console.error("Failed to load MDX:", e);
        if (mounted) setErr("Could not load article. Please refresh.");
      });

    return () => {
      mounted = false;
    };
  }, [slug]);

  if (err) {
    return <p className="text-sm text-red-400">{err}</p>;
  }

  if (!Comp) {
    // Skeleton placeholder
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-6 w-3/4 rounded bg-white/10" />
        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-5/6 rounded bg-white/10" />
        <div className="h-4 w-2/3 rounded bg-white/10" />
        <div className="h-64 w-full rounded-xl bg-white/10" />
        <div className="h-4 w-3/4 rounded bg-white/10" />
        <div className="h-4 w-1/2 rounded bg-white/10" />
      </div>
    );
  }

  // Fade-in wrapper for the MDX content
  return (
    <div className="prose prose-invert max-w-none opacity-0 [animation:fadeIn_300ms_ease-out_forwards]">
      <Comp />
      {/* local keyframes without config file (Tailwind v4 supports @keyframes in CSS file) */}
    </div>
  );
}
