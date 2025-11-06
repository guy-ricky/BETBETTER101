import Image from "next/image";
import type { StandingRow } from "@/types/football";

export default function StandingsTable({ rows }: { rows: StandingRow[] }) {
  if (!rows?.length)
    return (
      <div className="rounded-2xl border border-white/10 p-6 text-gray-400">
        Standings not available.
      </div>
    );

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full text-sm">
        <thead className="bg-white/5 text-gray-300">
          <tr>
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Team</th>
            <th className="px-4 py-3 text-center">P</th>
            <th className="px-4 py-3 text-center">W</th>
            <th className="px-4 py-3 text-center">D</th>
            <th className="px-4 py-3 text-center">L</th>
            <th className="px-4 py-3 text-center">GF</th>
            <th className="px-4 py-3 text-center">GA</th>
            <th className="px-4 py-3 text-center">GD</th>
            <th className="px-4 py-3 text-center text-[#00FF66]">Pts</th>
            <th className="px-4 py-3 text-left">Form</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {rows.map((r) => (
            <tr key={r.teamId} className="text-gray-200">
              <td className="px-4 py-3">{r.rank}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  {r.logo && (
                    <Image
                      src={r.logo}
                      alt={r.team}
                      width={20}
                      height={20}
                      className="rounded"
                    />
                  )}
                  <span>{r.team}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-center">{r.played}</td>
              <td className="px-4 py-3 text-center">{r.win}</td>
              <td className="px-4 py-3 text-center">{r.draw}</td>
              <td className="px-4 py-3 text-center">{r.lose}</td>
              <td className="px-4 py-3 text-center">{r.gf}</td>
              <td className="px-4 py-3 text-center">{r.ga}</td>
              <td className="px-4 py-3 text-center">{r.gd}</td>
              <td className="px-4 py-3 text-center text-[#00FF66] font-semibold">
                {r.points}
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-1">
                  {r.form?.split("")?.map((c, i) => (
                    <span
                      key={i}
                      className={`inline-flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ${
                        c === "W"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : c === "D"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : c === "L"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-white/10 text-gray-300"
                      }`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
