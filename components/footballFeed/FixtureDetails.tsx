/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Section from "./Section";
import { CalendarDays, Clock4, MapPin, Shirt, User2 } from "lucide-react";
import KeyValue from "./KeyValue";

export default function FixtureDetails({ p }: { p: any }) {
  const kickoff = p?.fixture?.date
    ? new Date(p.fixture.date).toISOString()
    : undefined;
  const venue = p?.fixture?.venue?.name;
  const city = p?.fixture?.venue?.city;
  const ref = p?.fixture?.referee;
  const league = p?.league?.name;
  const season = p?.league?.season;
  const status = p?.fixture?.status?.long || p?.fixture?.status?.short;

  const home = p?.teams?.home?.name;
  const away = p?.teams?.away?.name;
  const hLogo = p?.teams?.home?.logo;
  const aLogo = p?.teams?.away?.logo;
  const goals = p?.goals;
  const score =
    goals && Number.isFinite(goals.home) && Number.isFinite(goals.away)
      ? `${goals.home} : ${goals.away}`
      : "—";

  return (
    <div className="space-y-4">
      <Section
        title="Match"
        icon={<CalendarDays className="h-4 w-4 text-[#00FF66]" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <KeyValue k="Competition" v={`${league ?? "—"} ${season ?? ""}`} />
            <KeyValue k="Status" v={status} />
            <KeyValue
              k="Kickoff (Nairobi)"
              v={
                kickoff ? (
                  <span className="inline-flex items-center gap-2">
                    <Clock4 className="h-4 w-4 text-[#00FF66]" />
                    {new Intl.DateTimeFormat("en-GB", {
                      timeZone: "Africa/Nairobi",
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(new Date(kickoff))}
                  </span>
                ) : (
                  "—"
                )
              }
            />
          </div>
          <div className="space-y-1">
            <KeyValue
              k="Venue"
              v={
                venue ? (
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#00FF66]" />
                    {venue}
                    {city ? (
                      <span className="text-gray-400">, {city}</span>
                    ) : null}
                  </span>
                ) : (
                  "—"
                )
              }
            />
            <KeyValue
              k="Referee"
              v={
                ref ? (
                  <span className="inline-flex items-center gap-2">
                    <User2 className="h-4 w-4 text-[#00FF66]" />
                    {ref}
                  </span>
                ) : (
                  "—"
                )
              }
            />
            <KeyValue k="Score" v={score} />
          </div>
        </div>
      </Section>

      <Section
        title="Teams"
        icon={<Shirt className="h-4 w-4 text-[#00FF66]" />}
      >
        <div className="grid grid-cols-2 items-center gap-4 p-4 bg-[#0a0a0a] rounded-xl border border-[#2a2a2a]">
          <div className="flex items-center gap-3">
            {hLogo ? (
              <Image
                src={hLogo}
                alt={home || "Home"}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-contain bg-white p-1 border border-[#333]"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-[#333]" />
            )}
            <span className="text-sm font-semibold text-gray-200">
              {home ?? "—"}
            </span>
          </div>
          <div className="flex items-center justify-end gap-3">
            <span className="text-sm font-semibold text-gray-200">
              {away ?? "—"}
            </span>
            {aLogo ? (
              <Image
                src={aLogo}
                alt={away || "Away"}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-contain bg-white p-1 border border-[#333]"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-[#333]" />
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}