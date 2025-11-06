import React from "react";

export default function SmallChip({
  icon,
  children,
  title,
  variant = "default",
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
  title?: string;
  variant?: "default" | "green" | "gold";
}) {
  const variants = {
    default: "border-[#2a2a2a] bg-[#121212] text-gray-300",
    green: "border-green-500/30 bg-green-500/10 text-green-300",
    gold: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
  };

  return (
    <span
      title={title}
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border backdrop-blur-sm ${variants[variant]} transition-colors duration-200`}
    >
      {icon}
      {children}
    </span>
  );
}