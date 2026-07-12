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
        <div className="mb-8 flex justify-center gap-2">
          {cities.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
              style={
                active === c
                  ? { backgroundColor: "#2D6A4F", color: "white" }
                  : { backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }
              }
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
              className="flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-card transition-shadow hover:shadow-soft"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-2xl">
                  {a.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug">{a.name}</h3>
                  <span className="text-xs text-muted-foreground">{a.city} · {a.distance}</span>
                </div>
              </div>
              <p className="mb-3 flex-1 text-sm leading-relaxed text-foreground/80">{a.description}</p>
              <div className="rounded-lg bg-primary-soft/60 px-3 py-2 text-xs leading-relaxed text-primary">
                💡 {a.tip}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
