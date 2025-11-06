import { Item } from "../UpcomingMatchPredictions";

const pickBadgeClass: Record<NonNullable<Item["pick"]>, string> = {
  HOME: "bg-[color:var(--primary-green)] text-[color:var(--primary-foreground)]",
  AWAY: "bg-indigo-500 text-white",
  DRAW: "bg-amber-500 text-black",
};

const PickBadge = ({ pick }: { pick: Item["pick"] }) => {
  if (!pick) return null;
  return (
    <span
      className={`ml-2 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-medium tracking-wide shadow-brb-gold ${pickBadgeClass[pick]}`}
      title={`Model pick: ${pick}`}
    >
      {pick}
    </span>
  );
};

export default PickBadge;
