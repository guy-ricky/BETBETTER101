/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowLeftRight } from "lucide-react";
import KeyValue from "./KeyValue";
import Section from "./Section";

export default function TransferDetails({ p }: { p: any }) {
  const dateIso = p?.date;
  const from = p?.teams?.out?.name || "—";
  const to = p?.teams?.in?.name || "—";
  const type = p?.type || p?.type_name;

  return (
    <div className="space-y-4">
      <Section
        title="Transfer"
        icon={<ArrowLeftRight className="h-4 w-4 text-[#00FF66]" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <KeyValue k="From" v={from} />
            <KeyValue k="To" v={to} />
          </div>
          <div className="space-y-1">
            <KeyValue k="Type" v={type || "—"} />
            <KeyValue
              k="Date (Nairobi)"
              v={
                dateIso
                  ? new Intl.DateTimeFormat("en-GB", {
                      timeZone: "Africa/Nairobi",
                      dateStyle: "medium",
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