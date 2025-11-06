/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity } from "lucide-react";
import Section from "./Section";
import KeyValue from "./KeyValue";

export default function EventDetails({ p }: { p: any }) {
  const minute = p?.time?.elapsed ? `${p.time.elapsed}'` : undefined;
  const extra = p?.time?.extra ? `+${p.time.extra}` : "";
  const team = p?.team?.name;
  const player = p?.player?.name;
  const assist = p?.assist?.name;
  const type = p?.type;
  const detail = p?.detail;

  return (
    <div className="space-y-4">
      <Section
        title="Event"
        icon={<Activity className="h-4 w-4 text-[#00FF66]" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <KeyValue k="Type" v={type || "—"} />
            <KeyValue k="Detail" v={detail || "—"} />
            <KeyValue k="Team" v={team || "—"} />
          </div>
          <div className="space-y-1">
            <KeyValue k="Player" v={player || "—"} />
            <KeyValue k="Assist" v={assist || "—"} />
            <KeyValue k="Time" v={minute ? `${minute}${extra}` : "—"} />
          </div>
        </div>
      </Section>
    </div>
  );
}