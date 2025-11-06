import React from "react";

export default function KeyValue({ k, v }: { k: string; v?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2 px-1 border-b border-[#1a1a1a] last:border-b-0">
      <span className="text-sm text-gray-400 font-medium">{k}</span>
      <span className="text-sm text-gray-200 font-semibold text-right">
        {v ?? "—"}
      </span>
    </div>
  );
}