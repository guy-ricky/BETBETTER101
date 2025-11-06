"use client";

import Link from "next/link";

interface HeaderProps {
  q?: string;
  region?: string;
}

export default function Header({ q, region }: HeaderProps) {
  return (
    <header className="border-b bg-gray-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-blue-700">
          BetBetter101
        </Link>
        <div className="text-sm text-gray-600">
          {q && region ? (
            <p>
              Showing results for <strong>{q}</strong> in{" "}
              <strong>{region}</strong>
            </p>
          ) : (
            <p>Smart Odds • Expert Analysis • Winning Insights</p>
          )}
        </div>
      </div>
    </header>
  );
}
