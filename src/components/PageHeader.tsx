export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="border-b border-[oklch(0.72_0.14_85)]/20 bg-[#1B4332] bg-islamic-pattern-dark relative overflow-hidden">
      {/* Decorative mosque icon */}
      <div className="absolute top-4 right-4 text-7xl opacity-5 select-none font-display text-gold pointer-events-none">🕌</div>
      <div className="absolute bottom-4 left-4 text-7xl opacity-5 select-none font-display text-gold pointer-events-none">🕋</div>
      
      <div className="mx-auto max-w-5xl px-4 py-16 text-center md:py-20 relative z-10 animate-fade-in-up">
        <div className="mb-3.5 inline-block rounded-full bg-gold/15 border border-gold/30 px-3.5 py-1 text-xs font-bold text-gold shadow-sm">{eyebrow}</div>
        <h1 className="font-display text-4xl font-extrabold text-white md:text-5xl tracking-wide">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70 text-sm leading-relaxed md:text-base">{description}</p>
      </div>

      {/* Glowing gold line at the bottom of the header */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.14_85)]/30 to-transparent" />
    </div>
  );
}

export function StepCard({ n, title, children }: { n: number | string; title: string; children: React.ReactNode }) {
  return (
    <article className="relative rounded-3xl border border-border/60 bg-card p-6 shadow-soft transition-all duration-300 hover:border-gold/30 hover:shadow-soft hover:-translate-y-1 md:p-8">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold-green font-display text-xl font-bold text-white shadow-soft border border-white/10">
          {n}
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground tracking-wide">{title}</h3>
      </div>
      <div className="space-y-3 text-foreground/80 leading-relaxed text-sm md:text-base pr-1">{children}</div>
    </article>
  );
}

export function DuaCard({ title, arabic, source }: { title: string; arabic: string; source?: string }) {
  return (
    <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft transition-all duration-300 hover:border-primary/25 hover:shadow-soft md:p-8 relative overflow-hidden bg-islamic-pattern">
      <div className="absolute -top-6 -left-6 text-6xl opacity-5 select-none font-display text-gold pointer-events-none">🤲</div>
      <div className="mb-3.5 text-xs font-bold text-primary flex items-center gap-1.5">
        <span className="text-gold">❋</span>
        <span>{title}</span>
      </div>
      <div className="rounded-2xl bg-primary-soft/40 border border-primary/10 p-5 md:p-6 my-4 shadow-inner">
        <p className="font-display text-xl leading-loose text-foreground text-center font-semibold md:text-2xl">{arabic}</p>
      </div>
      {source && (
        <div className="mt-3.5 text-[10px] text-muted-foreground text-left border-t border-border/30 pt-2">— {source}</div>
      )}
    </article>
  );
}
