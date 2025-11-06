import { FeedItem } from '@/types/footballFeed';
import { CalendarDays,Activity, Stethoscope, ArrowLeftRight, Shirt, BarChart2 } from 'lucide-react';
import React from 'react'

export default function TypeBadge({ type }: { type: FeedItem["type"] }) {
  const map: Record<
    FeedItem["type"],
    { label: string; icon: React.ReactNode; cls: string; gradient: string }
  > = {
    fixture: {
      label: "Fixture",
      icon: <CalendarDays className="h-3.5 w-3.5" />,
      cls: "bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-300 border-purple-500/30",
      gradient: "from-purple-500 to-blue-500",
    },
    event: {
      label: "Event",
      icon: <Activity className="h-3.5 w-3.5" />,
      cls: "bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-[#9bffb9] border-green-500/30",
      gradient: "from-green-500 to-emerald-500",
    },
    injury: {
      label: "Injury",
      icon: <Stethoscope className="h-3.5 w-3.5" />,
      cls: "bg-gradient-to-r from-red-500/10 to-pink-500/10 text-[#ffb3b3] border-red-500/30",
      gradient: "from-red-500 to-pink-500",
    },
    transfer: {
      label: "Transfer",
      icon: <ArrowLeftRight className="h-3.5 w-3.5" />,
      cls: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-[#b3d4ff] border-blue-500/30",
      gradient: "from-blue-500 to-cyan-500",
    },
    lineup: {
      label: "Lineup",
      icon: <Shirt className="h-3.5 w-3.5" />,
      cls: "bg-gradient-to-r from-indigo-500/10 to-violet-500/10 text-[#d4b3ff] border-indigo-500/30",
      gradient: "from-indigo-500 to-violet-500",
    },
    stat: {
      label: "Stats",
      icon: <BarChart2 className="h-3.5 w-3.5" />,
      cls: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-[#b9ffcf] border-emerald-500/30",
      gradient: "from-emerald-500 to-teal-500",
    },
  };

  const { label, icon, cls, gradient } = map[type];
  return (
    <div className="relative group">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
      />
      <span
        className={`relative inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm ${cls} transition-all duration-300 group-hover:scale-105`}
      >
        {icon}
        {label}
      </span>
    </div>
  );
}