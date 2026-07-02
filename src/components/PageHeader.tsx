export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="border-b border-border/60 bg-gradient-soft">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center md:py-20">
        <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{eyebrow}</div>
        <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function StepCard({ n, title, children }: { n: number | string; title: string; children: React.ReactNode }) {
  return (
    <article className="relative rounded-3xl border border-border/60 bg-card p-6 shadow-soft transition-all hover:border-primary/40 md:p-8">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary font-display text-xl font-bold text-primary-foreground shadow-soft">
          {n}
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground">{title}</h3>
      </div>
      <div className="space-y-3 text-foreground/80 leading-relaxed">{children}</div>
    </article>
  );
}

export function DuaCard({ title, arabic, source }: { title: string; arabic: string; source?: string }) {
  return (
    <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft md:p-8">
      <div className="mb-3 text-sm font-semibold text-primary">{title}</div>
      <p className="font-display text-xl leading-loose text-foreground md:text-2xl">{arabic}</p>
      {source && <div className="mt-4 text-xs text-muted-foreground">— {source}</div>}
    </article>
  );
}
