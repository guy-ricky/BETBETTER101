import React from "react";

export default function Section({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="h-6 w-1 rounded-full bg-gradient-to-b from-[#00FF66] to-[#FFD700]" />
        <div className="flex items-center gap-2">
          {icon}
          <h4 className="text-sm font-semibold tracking-wide text-white/90">
            {title}
          </h4>
        </div>
      </div>
      <div className="rounded-2xl border border-[#272727] bg-gradient-to-br from-[#111111] to-[#0a0a0a] p-4 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
