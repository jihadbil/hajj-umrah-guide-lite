// ===================================================
// hotels.$hotelId.tsx — صفحة تفاصيل فندق
// ===================================================

import { createFileRoute, Link } from "@tanstack/react-router";
import { getHotels, type Hotel } from "@/lib/hotelsGuides";
import { GallerySlideshow } from "@/components/GallerySlideshow";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const Route = createFileRoute("/hotels_/$hotelId")({
  component: HotelDetailPage,
  head: () => {
    return {
      meta: [
        { title: "الفنادق — مرشد" },
        { name: "description", content: "تفاصيل الفندق" },
      ],
    };
  },
});

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-gold text-sm">★</span>
      <span className="text-sm font-semibold text-foreground">{rating.toFixed(1)}</span>
    </div>
  );
}

// مكوّن عرض رسالة الخطأ في حال عدم وجود الفندق
function NotFoundBlock() {
  const { t } = useTranslation("hotels");

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-2xl font-bold text-foreground">
        {t("labels.notFoundTitle", { defaultValue: "الفندق غير موجود" })}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {t("labels.notFoundDesc", { defaultValue: "تعذّر العثور على الفندق المطلوب." })}
      </p>
      <Link
        to="/hotels"
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#1B4332] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#14342A] transition-colors cursor-pointer"
      >
        {t("labels.notFoundBack", { defaultValue: "العودة إلى الفنادق" })}
      </Link>
    </div>
  );
}

function HotelDetailPage() {
  const { t } = useTranslation("hotels");
  const { hotelId } = Route.useParams();
  const hotelsList = getHotels(t);
  const hotel = hotelsList.find((h) => String(h.id) === hotelId);

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    if (hotel) {
      const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
      document.title = `${hotel.name} — ${brandName}`;
    }
  }, [t, hotel]);

  if (!hotel) return <NotFoundBlock />;

  return (
    <div>
      <div className="relative overflow-hidden border-b border-[oklch(0.72_0.14_85)]/20">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/95 via-[#1B4332]/75 to-[#1B4332]/40" />
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 relative z-10 animate-fade-in-up">
          <nav className="mb-5 flex items-center justify-center gap-2 text-xs text-white/50">
            <Link to="/hotels" className="hover:text-gold transition-colors">
              {t("eyebrow")}
            </Link>
            <span>/</span>
            <span className="text-white/80">{hotel.name}</span>
          </nav>
          <div className="text-center">
            <div className="mb-3.5 inline-block rounded-full bg-gold/15 border border-gold/30 px-3.5 py-1 text-xs font-bold text-gold shadow-sm">
              {hotel.city}
            </div>
            <h1 className="font-display text-3xl font-extrabold text-white md:text-5xl tracking-wide">
              {hotel.name}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70 text-sm leading-relaxed md:text-base text-center">
              {hotel.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs text-white/80">
                📍 {hotel.distance}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs text-white/80">
                ★ {hotel.rating.toFixed(1)} ({t("labels.reviewsCount", { count: hotel.reviews })})
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.14_85)]/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-4 rounded-xl border border-gold/30 bg-[oklch(0.97_0.03_85)] dark:bg-gold/10 px-4 py-3 text-xs text-foreground/80 dark:text-foreground/90 md:text-sm text-right transition-colors duration-300">
          {t("demoNotice")}
        </div>

        {/* معرض صور */}
        <GallerySlideshow images={hotel.gallery} alt={hotel.name} />

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 flex flex-col gap-6">
            <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft md:p-8">
              <h2 className="mb-3 font-display text-xl font-bold text-primary flex items-center gap-2 justify-start">
                <span className="text-gold">❋</span> {t("labels.aboutHotel")}
              </h2>
              <p className="text-sm leading-relaxed text-foreground/80 md:text-base text-right">
                {hotel.description}
              </p>
            </article>

            <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft md:p-8">
              <h2 className="mb-3 font-display text-xl font-bold text-primary flex items-center gap-2 justify-start">
                <span className="text-gold">❋</span> {t("labels.amenities")}
              </h2>
              <div className="flex flex-wrap gap-2 justify-start">
                {hotel.amenities.map((a) => (
                  <span
                    key={a}
                    className="rounded-xl bg-primary-soft/40 dark:bg-primary-soft/10 px-3 py-1.5 text-xs font-bold text-primary dark:text-[#C5A85C] border border-primary/5"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <aside className="flex flex-col gap-5 text-right">
            <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-card">
              <div className="mb-3 flex items-center justify-between border-b border-border/40 pb-3">
                <div className="text-right">
                  <div className="text-[10px] text-muted-foreground">{t("labels.startFrom")}</div>
                  <div className="font-display text-lg font-bold text-[#1B4332] dark:text-[#C5A85C]">
                    {t("labels.pricePerNight", { price: hotel.price })}
                  </div>
                </div>
                <StarRating rating={hotel.rating} />
              </div>
              <dl className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{t("labels.address")}</dt>
                  <dd className="font-semibold text-foreground text-left">{hotel.address}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{t("labels.checkIn")}</dt>
                  <dd className="font-semibold text-foreground">{hotel.checkIn}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{t("labels.checkOut")}</dt>
                  <dd className="font-semibold text-foreground">{hotel.checkOut}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{t("labels.contact")}</dt>
                  <dd className="font-semibold text-foreground" dir="ltr">
                    {hotel.phone}
                  </dd>
                </div>
              </dl>
              <button className="mt-4 w-full rounded-xl bg-[#1B4332] dark:bg-primary hover:bg-[#14342A] dark:hover:bg-primary/95 py-2.5 text-center text-xs font-bold text-white hover:shadow-soft transition-all duration-300 active:scale-95 cursor-pointer">
                {t("labels.bookRequest")}
              </button>
            </div>
            <Link
              to="/hotels"
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
