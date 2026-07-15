// ===================================================
// hotels.tsx — صفحة الفنادق والمرشدين
// ===================================================

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { hotels, guides } from "@/lib/hotelsGuides";

function FazahBanner() {
  return (
    <Link
      to="/fazah"
      className="group mx-auto flex max-w-6xl flex-col items-center gap-4 rounded-3xl border border-gold/30 bg-[#1B4332] bg-islamic-pattern-dark px-6 py-6 text-center shadow-soft transition-all duration-300 hover:shadow-gold/10 md:flex-row md:text-right relative overflow-hidden"
    >
      <div className="absolute -top-6 -left-6 text-8xl opacity-10 select-none pointer-events-none">🆘</div>
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/15 border border-gold/30 text-3xl relative z-10">
        🆘
      </div>
      <div className="flex-1 relative z-10">
        <div className="text-xs font-bold text-gold mb-1">جديد — شبكة الإغاثة اللامركزية</div>
        <h3 className="font-display text-lg font-bold text-white md:text-xl">خدمة فزعة: بطاقة تربط كل معتمر بأقرب مرشد أو استقبال فندق</h3>
        <p className="mt-1 text-xs text-white/60 md:text-sm">تعرّف على كيفية عمل بطاقة الاستجابة السريعة وسلسلة التنبيه الفوري عند الطوارئ.</p>
      </div>
      <span className="relative z-10 shrink-0 rounded-xl bg-gold px-5 py-2.5 text-xs font-bold text-[#14342A] group-hover:bg-white transition-colors">
        تعرّف على فزعة ←
      </span>
    </Link>
  );
}

export const Route = createFileRoute("/hotels")({
  component: HotelsPage,
  head: () => ({
    meta: [
      { title: "الفنادق والمرشدين — مرشد" },
      { name: "description", content: "أفضل الفنادق القريبة من الحرمين الشريفين، ومرشدون معتمدون لمرافقة المعتمرين." },
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

function HotelCard({ h }: { h: (typeof hotels)[number] }) {
  return (
    <Link
      to="/hotels/$hotelId"
      params={{ hotelId: String(h.id) }}
      className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition-all duration-300 hover:shadow-soft hover:border-primary/20 relative bg-islamic-pattern block"
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
          {h.city} · {h.distance} · {h.reviews.toLocaleString("ar")} تقييم
        </div>
        <div className="mb-4 flex flex-wrap gap-1.5 justify-start">
          {h.amenities.map((a) => (
            <span key={a} className="rounded-xl bg-primary-soft/40 px-2.5 py-1 text-[10px] font-bold text-primary border border-primary/5">
              {a}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-border/40 pt-4 mt-2">
          <div>
            <div className="text-[10px] text-muted-foreground">يبدأ من</div>
            <div className="font-display text-base font-bold text-[#1B4332]">{h.price} / الليلة</div>
          </div>
          <span
            className="rounded-xl px-4.5 py-2.5 text-xs font-bold text-white bg-[#1B4332] group-hover:bg-[#14342A] group-hover:shadow-soft transition-all duration-300 shadow-sm inline-block"
          >
            عرض التفاصيل
          </span>
        </div>
      </div>
    </Link>
  );
}

function GuideCard({ g }: { g: (typeof guides)[number] }) {
  return (
    <article className="group flex items-center gap-4 rounded-3xl border border-border/60 bg-card p-5 shadow-card hover:shadow-soft hover:border-primary/20 transition-all duration-300 bg-islamic-pattern relative overflow-hidden">
      {/* Subtle guide emoji in background */}
      <div className="absolute -top-6 -left-6 text-7xl opacity-5 select-none font-display text-gold pointer-events-none group-hover:scale-110 transition-transform duration-500">{g.avatar}</div>
      
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold-green text-3xl shadow-soft border border-white/5 group-hover:scale-105 transition-transform duration-300">
        {g.avatar}
      </div>
      <div className="min-w-0 flex-1 text-right relative z-10">
        <div className="flex items-center gap-2 justify-start mb-0.5">
          <h3 className="truncate font-display text-base font-bold text-foreground leading-snug">{g.name}</h3>
          {g.licensed && (
            <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-[9px] font-bold text-primary border border-primary/5">
              مرشد معتمد ✓
            </span>
          )}
        </div>
        <div className="text-[11px] text-muted-foreground">
          {g.city} · خبرة {g.experience} سنوات
        </div>
        <p className="mt-1 text-xs text-foreground/80 truncate">{g.specialty}</p>
        <div className="mt-2 flex flex-wrap items-center gap-3 justify-start">
          <StarRating rating={g.rating} />
          <span className="text-[10px] text-muted-foreground">({g.reviews} تقييم)</span>
          <span className="text-[10px] text-muted-foreground border-r border-border pr-2.5">اللغات: {g.languages.join("، ")}</span>
        </div>
      </div>
    </article>
  );
}

function HotelsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="الفنادق والمرشدين"
        title="السكن والإرشاد للمعتمر"
        description="اختر من فنادق قريبة من الحرمين الشريفين، وتعرّف على مرشدين معتمدين لمرافقتك في أداء المناسك."
      />

      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="rounded-xl border border-gold/30 bg-[oklch(0.97_0.03_85)] px-4 py-3 text-xs text-foreground/80 md:text-sm">
          ⚠️ هذه بيانات تجريبية لأغراض العرض فقط، وسيتم استبدالها ببيانات حقيقية ومحدثة عند توفرها.
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-4">
        <FazahBanner />
      </div>

      {/* الفنادق */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">الفنادق القريبة من الحرمين</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((h) => (
            <HotelCard key={h.id} h={h} />
          ))}
        </div>
      </section>

      {/* المرشدون */}
      <section className="mx-auto max-w-6xl px-4 py-6 pb-16">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">المرشدون المعتمدون</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {guides.map((g) => (
            <GuideCard key={g.id} g={g} />
          ))}
        </div>
      </section>
    </div>
  );
}
