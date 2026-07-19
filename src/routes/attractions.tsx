// ===================================================
// attractions.tsx — صفحة المزارات والمعالم (عرض قائمة)
// ===================================================

import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { getAttractions } from "@/lib/attractions";
import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/attractions")({
  component: AttractionsPage,
  head: () => ({
    meta: [
      { title: "المزارات — مرشد" },
      {
        name: "description",
        content: "أبرز المزارات والمعالم التاريخية في مكة المكرمة والمدينة المنورة.",
      },
    ],
  }),
});

function AttractionsPage() {
  const { t } = useTranslation("attractions");
  const [active, setActive] = useState<"all" | "makkah" | "madinah">("all");

  const cities = [
    { id: "all" as const, label: t("cities.all") },
    { id: "makkah" as const, label: t("cities.makkah") },
    { id: "madinah" as const, label: t("cities.madinah") },
  ];

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
    document.title = `${t("title")} — ${brandName}`;
  }, [t]);

  const attractionsList = getAttractions(t);
  const filtered = active === "all" ? attractionsList : attractionsList.filter((a) => a.cityKey === active);

  return (
    <div>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* فلاتر المدن */}
        <div className="mb-10 flex justify-center gap-2 rounded-2xl border border-border/60 bg-muted/40 dark:bg-card/30 p-1.5 shadow-soft max-w-md mx-auto transition-colors duration-300">
          {cities.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`flex-1 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer ${
                active === c.id
                  ? "bg-[#1B4332] dark:bg-primary text-white shadow-md scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50 dark:hover:bg-card/25"
              }`}
            >
              {c.label}
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
              className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card hover:shadow-soft hover:border-primary/20 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-all duration-300 sm:h-56 sm:flex-row"
            >
              <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-full sm:w-64">
                <img
                  src={a.image}
                  alt={a.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 dark:bg-card/90 text-primary dark:text-[#C5A85C] shadow-sm backdrop-blur-sm">
                  <LucideIcon name={a.icon} size={20} />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 text-right overflow-hidden">
                <div className="mb-2 flex flex-wrap items-center justify-end gap-2">
                  <span className="rounded-full bg-primary-soft/50 dark:bg-primary-soft/20 px-2.5 py-0.5 text-[10px] font-bold text-primary dark:text-[#C5A85C]">
                    {a.city}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground leading-snug line-clamp-1 group-hover:text-primary transition-colors md:text-xl">
                  {a.name}
                </h3>
                <p className="mt-2 flex-1 line-clamp-2 text-sm leading-relaxed text-foreground/80">
                  {a.description}
                </p>
                <span className="mt-3 self-end text-xs font-bold text-primary dark:text-[#C5A85C] group-hover:text-gold transition-colors">
                  {t("labels.viewDetails")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
