// ===================================================
// attractions.tsx — صفحة المزارات والمعالم (عرض قائمة)
// ===================================================

import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
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

      <div className="mx-auto max-w-4xl px-4 py-8">
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

        {/* القائمة */}
        <div className="flex flex-col gap-5">
          {filtered.map((a) => (
            <Link
              key={a.id}
              to="/attractions/$attractionId"
              params={{ attractionId: String(a.id) }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card hover:shadow-soft hover:border-primary/20 transition-all duration-300 sm:flex-row"
            >
              <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-64">
                <img
                  src={a.image}
                  alt={a.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 text-lg shadow-sm backdrop-blur-sm">
                  {a.icon}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 text-right">
                <div className="mb-2 flex flex-wrap items-center justify-end gap-2">
                  <span className="rounded-full bg-primary-soft/50 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                    {a.city}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{a.distance}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors md:text-xl">
                  {a.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/80">{a.description}</p>
                <div className="mt-3 rounded-xl bg-primary-soft/40 border border-primary/10 px-4 py-2.5 text-xs leading-relaxed text-primary shadow-inner">
                  💡 {a.tip}
                </div>
                <span className="mt-3 self-end text-xs font-bold text-primary group-hover:text-gold transition-colors">
                  عرض التفاصيل ←
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
