/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stethoscope } from "lucide-react";
import KeyValue from "./KeyValue";
import Section from "./Section";

export default function InjuryDetails({ p }: { p: any }) {
  const player = p?.player?.name;
  const reason = p?.player?.reason || p?.injury?.type;
  const team = p?.team?.name;
  const dateIso = p?.fixture?.date || p?.date;

  return (
    <div className="space-y-4">
      <Section
        title="Injury"
        icon={<Stethoscope className="h-4 w-4 text-[#00FF66]" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <KeyValue k="Player" v={player || "—"} />
            <KeyValue k="Team" v={team || "—"} />
          </div>
          <div className="space-y-1">
            <KeyValue k="Reason/Type" v={reason || "—"} />
            <KeyValue
              k="Reported (Nairobi)"
              v={
                dateIso
                  ? new Intl.DateTimeFormat("en-GB", {
                      timeZone: "Africa/Nairobi",
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(new Date(dateIso))
                  : "—"
              }
            />
          </div>
        </div>
      </Section>
    </div>
  );
}