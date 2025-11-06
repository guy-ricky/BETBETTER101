import Link from "next/link";

export type Event = {
  id: string;
  title: string;
  url: string;
  league?: string;
  sport?: string;
  kickoffISO?: string;
  bestPrice?: number;
  bookies?: string[];
};

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h2>

      {event.league && (
        <p className="text-sm text-gray-500 mb-1 capitalize">
          League: {event.league.replace(/-/g, " ")}
        </p>
      )}

      {event.bestPrice && (
        <p className="text-sm text-gray-700 mb-2">
          Best Odds: <strong>{event.bestPrice.toFixed(2)}</strong>
        </p>
      )}

      {event.kickoffISO && (
        <p className="text-xs text-gray-400">
          Kickoff: {new Date(event.kickoffISO).toLocaleString()}
        </p>
      )}

      <Link
        href={event.url}
        className="mt-3 inline-block rounded bg-blue-600 px-3 py-1.5 text-xs text-white hover:bg-blue-700"
      >
        View Odds
      </Link>
    </div>
  );
}
