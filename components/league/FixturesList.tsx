// components/league/FixturesList.tsx
import type { Fixture, StandingRow } from "@/types/football";
import MatchCard from "./MatchCard";
import EmptyState from "./EmptyState";
import { getFixtureProbabilities } from "@/lib/league";

export default function FixturesList({
  fixtures,
  standings,
  teamId,
}: {
  fixtures: Fixture[];
  standings: StandingRow[];
  teamId?: number;
}) {
  const data = teamId
    ? fixtures.filter((f) => f.home.id === teamId || f.away.id === teamId)
    : fixtures;

  if (!data?.length) return <EmptyState text="No upcoming fixtures." />;

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {data.map((fx) => {
        const probs = getFixtureProbabilities(standings, fx);
        return <MatchCard key={fx.id} fx={fx} probs={probs} />;
      })}
    </div>
  );
}
