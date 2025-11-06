const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="group relative rounded-[var(--radius-xl)] p-[1px] bg-gradient-to-br from-[rgba(0,255,102,0.25)] via-[rgba(255,215,0,0.22)] to-[rgba(0,255,102,0.25)] shadow-brb-green">
    <div className="rounded-[calc(var(--radius-xl)-1px)] bg-[color:var(--card)]/80 backdrop-blur-md border border-[color:var(--border)] px-4 py-4 md:px-5 md:py-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-brb-gold">
      {/* glow accent */}
      <div className="pointer-events-none absolute -inset-px rounded-[var(--radius-xl)] bg-brb-gradient opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
      {children}
    </div>
  </div>
);

export default Card;