// ===================================================
// hotels.tsx — صفحة الفنادق والمرشدين
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { hotels, guides } from "@/lib/hotelsGuides";

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
    <article className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card transition-shadow hover:shadow-soft">
      <div
        className="flex h-32 items-center justify-center text-5xl"
        style={{ background: "linear-gradient(135deg, oklch(0.95 0.035 155), oklch(0.9 0.05 155))" }}
      >
        {h.image}
      </div>
      <div className="p-5">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-foreground leading-snug">{h.name}</h3>
          <StarRating rating={h.rating} />
        </div>
        <div className="mb-3 text-xs text-muted-foreground">
          {h.city} · {h.distance} · {h.reviews.toLocaleString("ar")} تقييم
        </div>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {h.amenities.map((a) => (
            <span key={a} className="rounded-full bg-primary-soft px-2.5 py-0.5 text-[11px] font-medium text-primary">
              {a}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-border/60 pt-3">
          <div>
            <div className="text-xs text-muted-foreground">يبدأ من</div>
            <div className="font-display text-base font-bold text-primary">{h.price} / الليلة</div>
          </div>
          <button
            className="rounded-md px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#2D6A4F" }}
          >
            عرض التفاصيل
          </button>
        </div>
      </div>
    </article>
  );
}

function GuideCard({ g }: { g: (typeof guides)[number] }) {
  return (
    <article className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-card transition-shadow hover:shadow-soft">
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-3xl"
        style={{ backgroundColor: "#E9F3EC" }}
      >
        {g.avatar}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-display text-base font-bold text-foreground">{g.name}</h3>
          {g.licensed && (
            <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
              مرشد معتمد ✓
            </span>
          )}
        </div>
        <div className="mt-0.5 text-xs text-muted-foreground">
          {g.city} · خبرة {g.experience} سنوات
        </div>
        <p className="mt-1 text-xs text-foreground/80 truncate">{g.specialty}</p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <StarRating rating={g.rating} />
          <span className="text-xs text-muted-foreground">({g.reviews} تقييم)</span>
          <span className="text-xs text-muted-foreground">اللغات: {g.languages.join("، ")}</span>
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
