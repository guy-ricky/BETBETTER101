/* eslint-disable @typescript-eslint/no-explicit-any */
import { BarChart2 } from "lucide-react";
import Section from "./Section";

export default function StatsDetails({ p }: { p: any }) {
  const team = p?.team?.name || "—";
  const stats: Array<{ type: string; value: string | number | null }> =
    p?.statistics || [];

  return (
    <div className="space-y-4">
      <Section
        title={`Team: ${team}`}
        icon={<BarChart2 className="h-4 w-4 text-[#00FF66]" />}
      >
        {stats.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl bg-gradient-to-r from-[#101010] to-[#1a1a1a] border border-[#262626] px-4 py-3 hover:border-[#333] transition-colors duration-200"
              >
                <span className="text-sm font-medium text-gray-300">
                  {s?.type ?? "—"}
                </span>
                <span className="text-sm font-bold text-gray-100">
                  {s?.value ?? "—"}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400 text-center py-4">
            No statistics available.
          </p>
        )}
      </Section>
    </div>
  );
}