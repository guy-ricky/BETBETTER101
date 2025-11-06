"use client";

import { useState } from "react";

type Tab = { key: string; label: string };

export default function LeagueTabs({
  tabs,
  panels,
  initial = tabs[0]?.key,
}: {
  tabs: Tab[];
  panels: Record<string, React.ReactNode>;
  initial?: string;
}) {
  const [active, setActive] = useState(initial);

  return (
    <div className="mt-8">
      <div className="flex gap-2 overflow-x-auto">
        {tabs.map((t) => {
          const isActive = t.key === active;
          return (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4 py-2 rounded-full border transition-all
                ${
                  isActive
                    ? "border-[#00FF66]/60 bg-[#00FF66]/10 text-white"
                    : "border-white/10 bg-white/[0.04] text-gray-300 hover:border-[#00FF66]/40"
                }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        {panels[active] ?? <div className="text-gray-400">No data.</div>}
      </div>
    </div>
  );
}
