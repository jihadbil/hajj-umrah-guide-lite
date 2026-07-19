// ===================================================
// hotels.tsx — صفحة الفنادق والمرشدين
// ===================================================

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { getHotels, getGuides, type Hotel, type Guide } from "@/lib/hotelsGuides";
import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function FazahBanner() {
  const { t } = useTranslation("hotels");

  return (
    <Link
      to="/fazah"
      className="group mx-auto flex max-w-6xl flex-col items-center gap-4 rounded-3xl border border-gold/30 bg-[#1B4332] bg-islamic-pattern-dark px-6 py-6 text-center shadow-soft transition-all duration-300 hover:shadow-gold/10 md:flex-row md:text-right relative overflow-hidden cursor-pointer"
    >
      <div className="absolute -top-6 -left-6 opacity-10 pointer-events-none">
        <LucideIcon name="🆘" size={96} className="text-gold" />
      </div>
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/15 border border-gold/30 relative z-10">
        <LucideIcon name="🆘" size={28} className="text-gold" />
      </div>
      <div className="flex-1 relative z-10 text-right">
        <div className="text-xs font-bold text-gold mb-1">{t("fazahBanner.badge")}</div>
        <h3 className="font-display text-lg font-bold text-white md:text-xl">
          {t("fazahBanner.title")}
        </h3>
        <p className="mt-1 text-xs text-white/60 md:text-sm">
          {t("fazahBanner.desc")}
        </p>
      </div>
      <span className="relative z-10 shrink-0 rounded-xl bg-gold px-5 py-2.5 text-xs font-bold text-[#14342A] group-hover:bg-white transition-colors">
        {t("fazahBanner.btn")}
      </span>
    </Link>
  );
}

export const Route = createFileRoute("/hotels")({
  component: HotelsPage,
  head: () => ({
    meta: [
      { title: "الفنادق والمرشدين — مرشد" },
      {
        name: "description",
        content: "أفضل الفنادق القريبة من الحرمين الشريفين، ومرشدون معتمدون لمرافقة المعتمرين.",
      },
    ],
  }),
});

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-gold text-sm">★</span>
      <span className="text-sm font-semibold text-foreground">{rating.toFixed(1)}</span>
    </div>
  );
}

function HotelCard({ h }: { h: Hotel }) {
  const { t } = useTranslation("hotels");

  return (
    <Link
      to="/hotels/$hotelId"
      params={{ hotelId: String(h.id) }}
      className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition-all duration-300 hover:shadow-soft hover:border-primary/20 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold relative bg-islamic-pattern block cursor-pointer"
    >
      <div className="h-44 overflow-hidden border-b border-border/40 relative">
        <img
          src={h.image}
          alt={h.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
      <div className="p-5 text-right">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-foreground leading-snug">{h.name}</h3>
          <StarRating rating={h.rating} />
        </div>
        <div className="mb-3 text-xs text-muted-foreground">
          {h.city} · {h.distance} · {t("labels.reviewsCount", { count: h.reviews })}
        </div>
        <div className="mb-4 flex flex-wrap gap-1.5 justify-start">
          {h.amenities.map((a) => (
            <span
              key={a}
              className="rounded-xl bg-primary-soft/40 dark:bg-primary-soft/10 px-2.5 py-1 text-[10px] font-bold text-primary dark:text-[#C5A85C] border border-primary/5"
            >
              {a}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-border/40 pt-4 mt-2">
          <div className="text-right">
            <div className="text-[10px] text-muted-foreground">{t("labels.startFrom")}</div>
            <div className="font-display text-base font-bold text-[#1B4332] dark:text-[#C5A85C]">
              {t("labels.pricePerNight", { price: h.price })}
            </div>
          </div>
          <span className="rounded-xl px-4.5 py-2.5 text-xs font-bold text-white bg-[#1B4332] dark:bg-primary group-hover:bg-[#14342A] dark:group-hover:bg-primary/95 group-hover:shadow-soft transition-all duration-300 shadow-sm inline-block">
            {t("labels.viewDetails")}
          </span>
        </div>
      </div>
    </Link>
  );
}

function GuideCard({ g }: { g: Guide }) {
  const { t } = useTranslation("hotels");

  return (
    <article className="group flex items-center gap-4 rounded-3xl border border-border/60 bg-card p-5 shadow-card hover:shadow-soft hover:border-primary/20 hover:scale-[1.01] transition-all duration-300 bg-islamic-pattern relative overflow-hidden">
      {/* Subtle guide emoji in background */}
      <div className="absolute -top-6 -left-6 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
        <LucideIcon name={g.avatar} size={72} className="text-gold" />
      </div>

      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold-green shadow-soft border border-white/5 group-hover:scale-105 transition-transform duration-300">
        <LucideIcon name={g.avatar} size={28} className="text-white" />
      </div>
      <div className="min-w-0 flex-1 text-right relative z-10">
        <div className="flex items-center gap-2 justify-start mb-0.5">
          <h3 className="truncate font-display text-base font-bold text-foreground leading-snug">
            {g.name}
          </h3>
          {g.licensed && (
            <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-[9px] font-bold text-primary border border-primary/5">
              {t("labels.licensedGuide")}
            </span>
          )}
        </div>
        <div className="text-[11px] text-muted-foreground">
          {g.city} · {t("labels.experienceYears", { count: g.experience })}
        </div>
        <p className="mt-1 text-xs text-foreground/80 truncate">{g.specialty}</p>
        <div className="mt-2 flex flex-wrap items-center gap-3 justify-start">
          <StarRating rating={g.rating} />
          <span className="text-[10px] text-muted-foreground">({t("labels.reviewsCount", { count: g.reviews })})</span>
          <span className="text-[10px] text-muted-foreground border-r border-border pr-2.5">
            {t("labels.languages", { list: g.languages.join("، ") })}
          </span>
        </div>
      </div>
    </article>
  );
}

function HotelsPage() {
  const { t } = useTranslation("hotels");
  const hotelsList = getHotels(t);
  const guidesList = getGuides(t);

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
    document.title = `${t("title")} — ${brandName}`;
  }, [t]);

  return (
    <div>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="rounded-xl border border-gold/30 bg-[oklch(0.97_0.03_85)] dark:bg-gold/10 px-4 py-3 text-xs text-foreground/80 dark:text-foreground/90 md:text-sm transition-colors duration-300 text-right">
          {t("demoNotice")}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-4">
        <FazahBanner />
      </div>

      {/* الفنادق */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
            {t("sections.hotelsTitle")}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hotelsList.map((h) => (
            <HotelCard key={h.id} h={h} />
          ))}
        </div>
      </section>

      {/* المرشدون */}
      <section className="mx-auto max-w-6xl px-4 py-8 pb-16">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
            {t("sections.guidesTitle")}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {guidesList.map((g) => (
            <GuideCard key={g.id} g={g} />
          ))}
        </div>
      </section>
    </div>
  );
}
