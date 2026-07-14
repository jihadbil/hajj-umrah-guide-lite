// ===================================================
// hotels.$hotelId.tsx — صفحة تفاصيل فندق
// ===================================================

import { createFileRoute, Link } from "@tanstack/react-router";
import { hotels } from "@/lib/hotelsGuides";

export const Route = createFileRoute("/hotels_/$hotelId")({
  component: HotelDetailPage,
  head: ({ params }) => {
    const hotel = hotels.find((h) => String(h.id) === params.hotelId);
    return {
      meta: [
        { title: hotel ? `${hotel.name} — مرشد` : "الفنادق — مرشد" },
        { name: "description", content: hotel?.description ?? "تفاصيل الفندق" },
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

function NotFoundBlock() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-2xl font-bold text-foreground">الفندق غير موجود</h1>
      <p className="mt-2 text-sm text-muted-foreground">تعذّر العثور على الفندق المطلوب.</p>
      <Link
        to="/hotels"
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#1B4332] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#14342A] transition-colors"
      >
        العودة إلى الفنادق
      </Link>
    </div>
  );
}

function HotelDetailPage() {
  const { hotelId } = Route.useParams();
  const hotel = hotels.find((h) => String(h.id) === hotelId);

  if (!hotel) return <NotFoundBlock />;

  return (
    <div>
      <div className="relative overflow-hidden border-b border-[oklch(0.72_0.14_85)]/20 bg-[#1B4332] bg-islamic-pattern-dark">
        <div className="absolute top-4 right-4 text-8xl opacity-5 select-none font-display text-gold pointer-events-none">{hotel.image}</div>
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 relative z-10 animate-fade-in-up">
          <nav className="mb-5 flex items-center justify-center gap-2 text-xs text-white/50">
            <Link to="/hotels" className="hover:text-gold transition-colors">الفنادق والمرشدين</Link>
            <span>/</span>
            <span className="text-white/80">{hotel.name}</span>
          </nav>
          <div className="text-center">
            <div className="mb-3.5 inline-block rounded-full bg-gold/15 border border-gold/30 px-3.5 py-1 text-xs font-bold text-gold shadow-sm">
              {hotel.city}
            </div>
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-gold-green text-4xl shadow-soft border border-white/10">
              {hotel.image}
            </div>
            <h1 className="font-display text-3xl font-extrabold text-white md:text-5xl tracking-wide">{hotel.name}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70 text-sm leading-relaxed md:text-base">{hotel.description}</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs text-white/80">
                📍 {hotel.distance}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs text-white/80">
                ★ {hotel.rating.toFixed(1)} ({hotel.reviews.toLocaleString("ar")} تقييم)
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.14_85)]/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-4 rounded-xl border border-gold/30 bg-[oklch(0.97_0.03_85)] px-4 py-3 text-xs text-foreground/80 md:text-sm">
          ⚠️ هذه بيانات تجريبية لأغراض العرض فقط، وسيتم استبدالها ببيانات حقيقية ومحدثة عند توفرها.
        </div>

        {/* معرض صور بديل */}
        <div className="mb-10 grid grid-cols-3 gap-4">
          {hotel.gallery.map((g, idx) => (
            <div
              key={idx}
              className="flex aspect-square items-center justify-center rounded-3xl border border-border/60 text-6xl shadow-card"
              style={{ background: "linear-gradient(135deg, oklch(0.95 0.035 155), oklch(0.9 0.05 155))" }}
            >
              {g}
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 flex flex-col gap-6">
            <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft md:p-8">
              <h2 className="mb-3 font-display text-xl font-bold text-primary flex items-center gap-2">
                <span className="text-gold">❋</span> عن الفندق
              </h2>
              <p className="text-sm leading-relaxed text-foreground/80 md:text-base">{hotel.description}</p>
            </article>

            <article className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft md:p-8">
              <h2 className="mb-3 font-display text-xl font-bold text-primary flex items-center gap-2">
                <span className="text-gold">❋</span> المرافق والخدمات
              </h2>
              <div className="flex flex-wrap gap-2">
                {hotel.amenities.map((a) => (
                  <span key={a} className="rounded-xl bg-primary-soft/40 px-3 py-1.5 text-xs font-bold text-primary border border-primary/5">
                    {a}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <aside className="flex flex-col gap-5">
            <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-card">
              <div className="mb-3 flex items-center justify-between border-b border-border/40 pb-3">
                <div>
                  <div className="text-[10px] text-muted-foreground">يبدأ من</div>
                  <div className="font-display text-lg font-bold text-[#1B4332]">{hotel.price} / الليلة</div>
                </div>
                <StarRating rating={hotel.rating} />
              </div>
              <dl className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">العنوان</dt>
                  <dd className="font-semibold text-foreground text-left">{hotel.address}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">تسجيل الدخول</dt>
                  <dd className="font-semibold text-foreground">{hotel.checkIn}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">تسجيل المغادرة</dt>
                  <dd className="font-semibold text-foreground">{hotel.checkOut}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">للتواصل</dt>
                  <dd className="font-semibold text-foreground" dir="ltr">{hotel.phone}</dd>
                </div>
              </dl>
              <button className="mt-4 w-full rounded-xl bg-[#1B4332] py-2.5 text-center text-xs font-bold text-white hover:bg-[#14342A] hover:shadow-soft transition-all duration-300 active:scale-95">
                طلب الحجز
              </button>
            </div>
            <Link
              to="/hotels"
              className="block w-full rounded-xl border border-border py-2.5 text-center text-xs font-bold text-foreground hover:border-primary/40 hover:text-primary transition-all"
            >
              ← العودة لجميع الفنادق
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
