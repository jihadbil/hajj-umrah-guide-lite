// ===================================================
// attractions.$attractionId.tsx — صفحة تفاصيل معلم/مزار
// ===================================================

import { createFileRoute, Link } from "@tanstack/react-router";
import { getAttractions } from "@/lib/attractions";
import { GallerySlideshow } from "@/components/GallerySlideshow";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const Route = createFileRoute("/attractions_/$attractionId")({
  component: AttractionDetailPage,
  head: () => {
    return {
      meta: [
        { title: "المزارات — مرشد" },
        { name: "description", content: "تفاصيل المزار التاريخي" },
      ],
    };
  },
});

function NotFoundBlock() {
  const { t } = useTranslation("attractions");

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-2xl font-bold text-foreground">
        {t("labels.notFoundTitle", { defaultValue: "المزار غير موجود" })}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {t("labels.notFoundDesc", { defaultValue: "تعذّر العثور على المزار المطلوب." })}
      </p>
      <Link
        to="/attractions"
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#1B4332] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#14342A] transition-colors cursor-pointer"
      >
        {t("labels.notFoundBack", { defaultValue: "العودة إلى المزارات" })}
      </Link>
    </div>
  );
}

function AttractionDetailPage() {
  const { t } = useTranslation("attractions");
  const { attractionId } = Route.useParams();
  const attractionsList = getAttractions(t);
  const attraction = attractionsList.find((a) => String(a.id) === attractionId);

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    if (attraction) {
      const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
      document.title = `${attraction.name} — ${brandName}`;
    }
  }, [t, attraction]);

  if (!attraction) return <NotFoundBlock />;

  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-[oklch(0.72_0.14_85)]/20">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/95 via-[#1B4332]/75 to-[#1B4332]/40" />
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 relative z-10 animate-fade-in-up">
          <nav className="mb-5 flex items-center justify-center gap-2 text-xs text-white/50">
            <Link to="/attractions" className="hover:text-gold transition-colors">
              {t("eyebrow")}
            </Link>
            <span>/</span>
            <span className="text-white/80">{attraction.name}</span>
          </nav>
          <div className="text-center">
            <div className="mb-3.5 inline-block rounded-full bg-gold/15 border border-gold/30 px-3.5 py-1 text-xs font-bold text-gold shadow-sm">
              {attraction.city}
            </div>
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-gold-green text-4xl shadow-soft border border-white/10 select-none">
              {attraction.icon}
            </div>
            <h1 className="font-display text-3xl font-extrabold text-white md:text-5xl tracking-wide">
              {attraction.name}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70 text-sm leading-relaxed md:text-base">
              {attraction.description}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs text-white/80">
              <span>📍</span>
              <span>{attraction.distance}</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.14_85)]/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12">
        {/* معرض صور */}
        <GallerySlideshow images={attraction.gallery} alt={attraction.name} />

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 flex flex-col gap-6">
            <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft md:p-8">
              <h2 className="mb-3 font-display text-xl font-bold text-primary flex items-center gap-2 justify-start">
                <span className="text-gold">❋</span> {t("labels.historyTitle")}
              </h2>
              <p className="text-sm leading-relaxed text-foreground/80 md:text-base text-right">
                {attraction.history}
              </p>
            </article>

            <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft md:p-8">
              <h2 className="mb-3 font-display text-xl font-bold text-primary flex items-center gap-2 justify-start">
                <span className="text-gold">❋</span> {t("labels.visitHowTitle")}
              </h2>
              <p className="text-sm leading-relaxed text-foreground/80 md:text-base text-right">
                {attraction.howToVisit}
              </p>
            </article>

            <div className="rounded-2xl bg-primary-soft/40 border border-primary/10 px-5 py-4 text-sm leading-relaxed text-primary shadow-inner text-right">
              💡 {attraction.tip}
            </div>
          </div>

          <aside className="flex flex-col gap-5 text-right">
            <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-card">
              <div className="text-xs font-bold text-muted-foreground mb-1">{t("labels.city")}</div>
              <div className="text-sm font-semibold text-foreground">{attraction.city}</div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-card">
              <div className="text-xs font-bold text-muted-foreground mb-1">{t("labels.distanceFromHaram")}</div>
              <div className="text-sm font-semibold text-foreground">{attraction.distance}</div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-card">
              <div className="text-xs font-bold text-muted-foreground mb-1">{t("labels.bestTimeToVisit")}</div>
              <div className="text-sm font-semibold text-foreground">{attraction.bestTime}</div>
            </div>
            <Link
              to="/attractions"
              className="block w-full rounded-xl border border-border py-2.5 text-center text-xs font-bold text-foreground hover:border-primary/40 hover:text-primary transition-all cursor-pointer"
            >
              {t("labels.backToAll")}
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
