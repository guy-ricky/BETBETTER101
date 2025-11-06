import Image from "next/image";
import type { LeagueMeta } from "@/types/football";

export default function LeagueHero({ meta }: { meta: LeagueMeta }) {
  return (
    <div className="flex items-center gap-4">
      {!!meta.logo && (
        <div className="relative h-14 w-14">
          <Image src={meta.logo} alt={meta.name} fill sizes="56px" />
        </div>
      )}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          {meta.name} <span className="text-[#00FF66]">{meta.season}</span>
        </h1>
        <p className="text-gray-400">
          Live standings, fixtures, results & top scorers.
        </p>
      </div>
    </div>
  );
}
