/* eslint-disable @typescript-eslint/no-explicit-any */
import { Info, Shirt, Users } from "lucide-react";
import Section from "./Section";
import KeyValue from "./KeyValue";
import SmallChip from "./SmallChip";
import PlayerCard from "./PlayerCard";
import React, { useMemo } from "react";

type StartXIEntry = {
  player?: {
    name?: string;
    number?: number | string;
    pos?: string; // "G", "D", "M", "F"
    position?: string; // sometimes provided as "G", "D", "M", "F"
    grid?: string; // like "1:3"
  };
};

type LineupPayload = {
  team?: { name?: string };
  coach?: { name?: string };
  formation?: string; // e.g., "4-3-3"
  startXI?: StartXIEntry[];
  substitutes?: StartXIEntry[];
};

export default function LineupDetails({ p }: { p: LineupPayload | any }) {
  const team = p?.team?.name ?? "";
  const coach = p?.coach?.name ?? "";
  const formation = p?.formation ?? "";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const startXI: StartXIEntry[] = Array.isArray(p?.startXI) ? p.startXI : [];
  const subs: StartXIEntry[] = Array.isArray(p?.substitutes) ? p.substitutes : [];

  /** Parse formation string into array of line counts, e.g. "4-3-3" -> [4,3,3] */
  const getFormationLines = (f: string): number[] => {
    if (!f || typeof f !== "string") return [];
    const parts = f.split("-").map((n) => Number(n));
    return parts.filter((n) => Number.isFinite(n) && n > 0);
  };

  /** Extract numeric row from "grid" like "3:2" -> 3, used as a defensive→attacking sort key */
  const getGridRow = (entry?: StartXIEntry) => {
    const g = entry?.player?.grid;
    if (!g || typeof g !== "string") return Number.POSITIVE_INFINITY;
    const first = g.split(":")[0];
    const asNum = Number(first);
    return Number.isFinite(asNum) ? asNum : Number.POSITIVE_INFINITY;
  };

  /** Organize players into GK + formation lines (defense → attack) */
  const organized = useMemo(() => {
    const linesFromFormation = getFormationLines(formation);

    const gk = startXI.filter(
      (x) => (x?.player?.pos ?? x?.player?.position) === "G"
    );

    const outfield = startXI
      .filter((x) => (x?.player?.pos ?? x?.player?.position) !== "G")
      .sort((a, b) => getGridRow(a) - getGridRow(b));

    // If the formation is missing or malformed, try to derive rough buckets by grid row
    if (!linesFromFormation.length) {
      // Group by grid row
      const buckets = new Map<number, StartXIEntry[]>();
      for (const pl of outfield) {
        const r = getGridRow(pl);
        const key = Number.isFinite(r) ? r : 99;
        buckets.set(key, [...(buckets.get(key) ?? []), pl]);
      }
      const lines = [...buckets.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([, arr]) => arr);
      return { goalkeeper: gk, lines };
    }

    // Slice outfield by given formation counts
    const lines: StartXIEntry[][] = [];
    let cursor = 0;
    for (const count of linesFromFormation) {
      lines.push(outfield.slice(cursor, cursor + count));
      cursor += count;
    }

    // If we still have extra or missing players, distribute remaining ones
    if (cursor < outfield.length) {
      // append any extras to the most attacking line
      lines[lines.length - 1] = [
        ...lines[lines.length - 1],
        ...outfield.slice(cursor),
      ];
    } else if (cursor > outfield.length) {
      // (rare) not enough players to fill — leave gaps gracefully
    }

    return { goalkeeper: gk, lines };
  }, [formation, startXI]);

  const goalkeeper = organized.goalkeeper ?? [];
  const lines = organized.lines ?? [];

  // Determine the max number of columns among lines, to build a stable responsive grid
  const maxCols = Math.max(3, ...lines.map((l) => l.length));

  // Helper to place N players evenly across maxCols (1-indexed grid columns)
  const columnForIndex = (i: number, count: number, cols: number) => {
    // Distribute approximately evenly: (k * (cols+1)) / (count+1)
    return Math.round(((i + 1) * (cols + 1)) / (count + 1));
  };

  return (
    <div className="space-y-4">
      <Section title="Overview" icon={<Info className="h-4 w-4 text-[#00FF66]" />}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <KeyValue k="Team" v={team || "—"} />
          <KeyValue k="Coach" v={coach || "—"} />
          <KeyValue k="Formation" v={formation || "—"} />
        </div>
      </Section>

      <Section title="Starting XI" icon={<Shirt className="h-4 w-4 text-[#00FF66]" />}>
        {startXI.length ? (
          <div className="relative">
            {/* Pitch container:
                - Uses aspect ratio for consistent sizing.
                - Scales height at different breakpoints for readability.
            */}
            <div
              aria-label="Football pitch with player positions"
              className="
                relative rounded-2xl border-2 border-green-700/50
                bg-gradient-to-b from-green-900/30 to-green-800/30
                p-3 xs:p-4 sm:p-5 md:p-6
                aspect-[3/4] sm:aspect-[2/3] md:aspect-[5/8] lg:aspect-[3/5]
                min-h-[420px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[620px]
              "
            >
              {/* Field markings */}
              <div className="pointer-events-none absolute inset-0 opacity-25">
                {/* Halfway line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-white/80 -translate-y-1/2" />
                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 w-20 h-20 md:w-28 md:h-28 border-2 border-white/80 rounded-full -translate-x-1/2 -translate-y-1/2" />
                {/* Penalty boxes (simplified) */}
                <div className="absolute left-1/2 -translate-x-1/2 inset-x-10 top-3 h-16 md:h-20 border-2 border-white/70 rounded-md" />
                <div className="absolute left-1/2 -translate-x-1/2 inset-x-10 bottom-3 h-16 md:h-20 border-2 border-white/70 rounded-md" />
              </div>

              {/* Grid layout:
                  Rows: 1 GK row + one row per formation line.
                  Columns: maxCols to ensure consistent spacing across lines.
               */}
              <div
                className="grid h-full w-full"
                style={{
                  gridTemplateRows: `repeat(${Math.max(1, lines.length + 1)}, minmax(0, 1fr))`,
                  gridTemplateColumns: `repeat(${maxCols}, minmax(0, 1fr))`,
                  gap: "0.75rem",
                }}
              >
                {/* Goalkeeper row (top) */}
                <div
                  className="contents"
                  aria-label="Goalkeeper line"
                >
                  {/* Place each GK centered; if multiple GKs, distribute */}
                  {goalkeeper.length > 0 ? (
                    goalkeeper.map((gk, i) => {
                      const col =
                        goalkeeper.length === 1
                          ? Math.ceil(maxCols / 2)
                          : columnForIndex(i, goalkeeper.length, maxCols);
                      return (
                        <div
                          key={`gk-${i}`}
                          style={{
                            gridRow: 1,
                            gridColumn: `${col} / span 1`,
                            alignSelf: "start",
                            justifySelf: "center",
                          }}
                          className="flex items-center justify-center"
                        >
                          <PlayerCard player={gk} isGK />
                        </div>
                      );
                    })
                  ) : (
                    // If no GK provided, leave the row empty
                    <div
                      style={{
                        gridRow: 1,
                        gridColumn: `1 / -1`,
                        alignSelf: "center",
                        justifySelf: "center",
                      }}
                      className="text-xs text-gray-400"
                    >
                      {/* Intentionally blank to keep structure */}
                    </div>
                  )}
                </div>

                {/* Formation lines (defense → attack), start from row 2 */}
                {lines.map((line, idx) => {
                  const row = idx + 2; // since GK occupies row 1
                  const count = Math.max(1, line.length); // avoid zero division
                  return (
                    <React.Fragment key={`line-${idx}`}>
                      {count > 0 ? (
                        line.map((player, pIdx) => {
                          const col = columnForIndex(pIdx, count, maxCols);
                          return (
                            <div
                              key={`line-${idx}-p-${pIdx}`}
                              style={{
                                gridRow: row,
                                gridColumn: `${col} / span 1`,
                                alignSelf: "center",
                                justifySelf: "center",
                              }}
                              className="flex items-center justify-center"
                            >
                              <PlayerCard player={player} />
                            </div>
                          );
                        })
                      ) : (
                        <div
                          style={{
                            gridRow: row,
                            gridColumn: `1 / -1`,
                          }}
                          className="flex items-center justify-center text-xs text-gray-400"
                        >
                          —
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Small-screen textual fallback/helper (hidden ≥sm) */}
            <div className="sm:hidden mt-3 text-[11px] text-gray-400 leading-snug">
              Tip: Rotate your phone for a wider view of the formation.
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-400 text-center py-4">No starters data.</p>
        )}
      </Section>

      <Section title="Bench" icon={<Users className="h-4 w-4 text-[#00FF66]" />}>
        <div
          className="
            grid
            grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
            gap-2 xs:gap-3
          "
        >
          {subs.length ? (
            subs.map((r, i) => {
              const name = r?.player?.name || "—";
              const number = r?.player?.number;
              const pos = r?.player?.pos || r?.player?.position;

              return (
                <div
                  key={i}
                  className="
                    flex flex-col items-center gap-2
                    rounded-xl
                    bg-gradient-to-r from-[#101010] to-[#1a1a1a]
                    border border-[#262626]
                    px-2.5 py-3 sm:px-3 sm:py-4
                    hover:border-[#333] transition-colors duration-200
                  "
                  title={name}
                >
                  <div
                    className="
                      w-10 h-10 sm:w-12 sm:h-12 rounded-full
                      flex items-center justify-center
                      text-[11px] sm:text-sm font-bold
                      border-2 bg-gray-700/20 border-gray-500 text-gray-300
                    "
                    aria-label={`Shirt number ${number ?? "unknown"}`}
                  >
                    {number ?? "?"}
                  </div>
                  <div className="text-center w-full">
                    <p className="text-[11px] sm:text-xs font-medium text-gray-200 truncate">
                      {name}
                    </p>
                    <div className="mt-1 flex justify-center">
                      <SmallChip variant="gold">{pos ?? "—"}</SmallChip>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-sm text-gray-400 text-center py-4 col-span-full">
              No substitutes data.
            </p>
          )}
        </div>
      </Section>
    </div>
  );
}