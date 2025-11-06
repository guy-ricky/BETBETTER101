"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <section className="rounded-3xl border border-red-500/20 bg-[#120b0b] p-8">
      <h2 className="text-red-400 text-xl font-semibold">
        Something went wrong
      </h2>
      <p className="text-red-200/80 mt-2">{error.message}</p>
    </section>
  );
}
