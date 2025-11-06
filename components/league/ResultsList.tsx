// components/league/ResultsList.tsx
import type { Fixture } from "@/types/football";
import MatchCard from "./MatchCard";
import EmptyState from "./EmptyState";

export default function ResultsList({
  fixtures,
  teamId,
}: {
  fixtures: Fixture[];
  teamId?: number;
}) {
  const data = teamId
    ? fixtures.filter((f) => f.home.id === teamId || f.away.id === teamId)
    : fixtures;

  if (!data?.length) return <EmptyState text="No recent results." />;

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {data.map((fx) => (
        <MatchCard key={fx.id} fx={fx} />
      ))}
    </div>
  );
}
