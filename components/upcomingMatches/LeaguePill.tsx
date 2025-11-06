const LeaguePill = ({ name }: { name: string }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--gray-800)]/80 px-2 py-1 text-[10px] md:text-xs text-[color:var(--muted-foreground)]">
    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary-green)] shadow-brb-green" />
    {name}
  </span>
);

export default LeaguePill;
