// ===================================================
// attractions.tsx — صفحة المزارات والمعالم
// ===================================================

import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { attractions } from "@/lib/attractions";

export const Route = createFileRoute("/attractions")({
  component: AttractionsPage,
  head: () => ({
    meta: [
      { title: "المزارات — مرشد" },
      { name: "description", content: "أبرز المزارات والمعالم التاريخية في مكة المكرمة والمدينة المنورة." },
    ],
  }),
});

const cities = ["الكل", "مكة المكرمة", "المدينة المنورة"] as const;

function AttractionsPage() {
  const [active, setActive] = useState<(typeof cities)[number]>("الكل");

  const filtered = active === "الكل" ? attractions : attractions.filter((a) => a.city === active);

  return (
    <div>
      <PageHeader
        eyebrow="المزارات"
        title="مزارات ومعالم مكة والمدينة"
        description="تعرّف على أبرز المعالم التاريخية التي يمكن زيارتها في مكة المكرمة والمدينة المنورة، مع بيان حكم الزيارة الشرعي."
      />

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* فلاتر المدن */}
        <div className="mb-10 flex justify-center gap-2 rounded-2xl border border-border/60 bg-muted/40 p-1.5 shadow-soft max-w-md mx-auto">
          {cities.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`flex-1 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active === c
                  ? "bg-[#1B4332] text-white shadow-md scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* الشبكة */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <article
              key={a.id}
              className="group flex flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-card hover:shadow-soft hover:border-primary/20 transition-all duration-300 relative overflow-hidden bg-islamic-pattern"
            >
              {/* Subtle background floating icon */}
              <div className="absolute -top-6 -left-6 text-7xl opacity-5 select-none font-display text-gold pointer-events-none transition-transform duration-500 group-hover:scale-110">{a.icon}</div>
              
              <div className="mb-4 flex items-center gap-3 relative z-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold-green text-white text-xl shadow-soft border border-white/5 group-hover:scale-105 transition-transform duration-300">
                  {a.icon}
                </div>
                <div className="min-w-0 text-right">
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug">{a.name}</h3>
                  <span className="text-xs text-muted-foreground">{a.city} · {a.distance}</span>
                </div>
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground/80 text-right relative z-10">{a.description}</p>
              <div className="rounded-xl bg-primary-soft/40 border border-primary/10 px-4 py-3 text-xs leading-relaxed text-primary mt-auto shadow-inner text-right relative z-10">
                💡 {a.tip}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
