import type { Metadata } from "next";
import { ParamSlugProps } from "@/types";
import {
  getLeagueMeta,
  getStandings,
  getFixtures,
  getTopScorers,
  getSeasons,
  getTeams,
} from "@/lib/league";
import LeagueHero from "@/components/league/LeagueHero";
import LeagueTabs from "@/components/league/LeagueTabs";
import StandingsTable from "@/components/league/StandingsTable";
import FixturesList from "@/components/league/FixturesList";
import ResultsList from "@/components/league/ResultsList";
import TopScorersList from "@/components/league/TopScorersList";
import StatBadge from "@/components/league/StatBadge";
import SeasonSelect from "@/components/league/SeasonSelect";
import TeamFilter from "@/components/league/TeamFilter";
import LeagueSidebar from "@/components/LeagueSidebar";

export const revalidate = 600;

export async function generateMetadata({
  params,
}: {
  params: ParamSlugProps;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const meta = await getLeagueMeta(slug);
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://betbetter101.com";
  return {
    title: `${meta.name} ${meta.season} — Predictions & Stats`,
    description: `Live standings, fixtures, results and top scorers for ${meta.name} ${meta.season}.`,
    alternates: { canonical: `${base}/league/${slug}` },
  };
}

export default async function LeaguePage({
  params,
  searchParams,
}: {
  params: ParamSlugProps;
  searchParams?: Promise<{ season?: string; team?: string }>;
}) {
  const slug = (await params).slug;
  const metaBase = await getLeagueMeta(slug);
  const desiredSeason = Number((await searchParams)?.season) || metaBase.season;
  const teamId = (await searchParams)?.team
    ? Number((await searchParams)?.team)
    : undefined;

  const [standings, upcoming, recent, scorers, seasons, teams] =
    await Promise.all([
      getStandings(metaBase.leagueId, desiredSeason),
      getFixtures(metaBase.leagueId, desiredSeason, "NS", 12),
      getFixtures(metaBase.leagueId, desiredSeason, "FT", 12),
      getTopScorers(metaBase.leagueId, desiredSeason, 15),
      getSeasons(metaBase.leagueId),
      getTeams(metaBase.leagueId, desiredSeason),
    ]);

  const meta = { ...metaBase, season: desiredSeason };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* League Sidebar */}
        <LeagueSidebar
          mode="slug"
          activeSlug={slug}
          className="lg:sticky lg:top-6 lg:self-start"
        />

        {/* Main Content */}
        <section className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 md:p-8">
          <LeagueHero meta={meta} />

          {/* Controls */}
          <div className="mt-6 flex items-start gap-6 flex-wrap">
            <SeasonSelect seasons={seasons} value={desiredSeason} />
            <TeamFilter teams={teams} value={teamId} />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatBadge label="Season" value={meta.season} />
            <StatBadge label="Type" value={meta.type} />
            <StatBadge label="Country" value={meta.country} />
            <StatBadge label="Teams" value={standings.length || "—"} />
          </div>

          <LeagueTabs
            tabs={[
              { key: "standings", label: "Standings" },
              { key: "fixtures", label: "Fixtures" },
              { key: "results", label: "Results" },
              { key: "topscorers", label: "Top Scorers" },
            ]}
            panels={{
              standings: <StandingsTable rows={standings} />,
              fixtures: (
                <FixturesList
                  fixtures={upcoming}
                  standings={standings}
                  teamId={teamId}
                />
              ),
              results: <ResultsList fixtures={recent} teamId={teamId} />,
              topscorers: <TopScorersList players={scorers} />,
            }}
          />
        </section>
      </div>
    </div>
  );
}
