import { Info } from "lucide-react";
import EventDetails from "./EventDetails";
import FixtureDetails from "./FixtureDetails";
import InjuryDetails from "./InjuryDetails";
import LineupDetails from "./LineupDetails";
import Section from "./Section";
import StatsDetails from "./StatsDetails";
import TransferDetails from "./TransferDetails";
import { FeedItem } from "@/types/footballFeed";

export default function DetailsBody({ item }: { item: FeedItem }) {
  const { type, payload } = item;
  switch (type) {
    case "fixture":
      return <FixtureDetails p={payload} />;
    case "event":
      return <EventDetails p={payload} />;
    case "lineup":
      return <LineupDetails p={payload} />;
    case "stat":
      return <StatsDetails p={payload} />;
    case "injury":
      return <InjuryDetails p={payload} />;
    case "transfer":
      return <TransferDetails p={payload} />;
    default:
      return (
        <Section
          title="Details"
          icon={<Info className="h-4 w-4 text-[#00FF66]" />}
        >
          <p className="text-sm text-gray-300 text-center py-4">
            No structured view available.
          </p>
        </Section>
      );
  }
}