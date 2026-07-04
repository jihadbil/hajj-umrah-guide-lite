import { createFileRoute, Link } from "@tanstack/react-router";
import { umrahJourneySteps } from "@/lib/umrahJourney";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "مرشد — دليل الحاج والمعتمر" },
      { name: "description", content: "دليلك الإرشادي الشامل لأداء الحج والعمرة بسهولة وطمأنينة." },
    ],
  }),
});

const quickCards = [
  { to: "/umrah", icon: "🕋", label: "رحلة العمرة", desc: "خطوة بخطوة" },
  { to: "/hajj", icon: "📖", label: "الأركان والواجبات", desc: "أحكام العمرة" },
  { to: "/prohibitions", icon: "🚫", label: "محظورات الإحرام", desc: "ما يجب اجتنابه" },
  { to: "/mistakes", icon: "⚠️", label: "الأخطاء الشائعة", desc: "تجنّب الأخطاء" },
  { to: "/duas", icon: "🤲", label: "الأدعية والأذكار", desc: "أدعية مأثورة" },
];

const articles = [
  {
    to: "/hajj",
    img: "/article1.png",
    category: "الأحكام",
    title: "أركان العمرة الثلاثة",
    desc: "الإحرام والطواف والسعي — الأعمال التي لا تصح العمرة إلا بها، مع الأدلة من الكتاب والسنة.",
    reads: "١٢٤",
  },
  {
    to: "/prohibitions",
    img: "/article2.png",
    category: "الإحرام",
    title: "محظورات الإحرام التسعة",
    desc: "الأمور التي يمنع منها المحرم بعد دخوله في النسك، مع توضيح الحكم والدليل.",
    reads: "٢١٥",
  },
  {
    to: "/mistakes",
    img: "/article3.png",
    category: "التنبيهات",
    title: "أخطاء شائعة في العمرة",
    desc: "أبرز الأخطاء التي يقع فيها كثير من المعتمرين في الإحرام والطواف والسعي والحلق.",
    reads: "٨٩",
  },
];


function Index() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[480px] flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url(/kaaba.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* Overlay — dark on the right (RTL start), fades to transparent on left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, rgba(15,45,28,0.92) 0%, rgba(15,45,28,0.75) 45%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 flex justify-end">
          <div className="max-w-md text-right">
            <p className="mb-3 text-sm font-medium text-white/70">دليل إرشادي شامل</p>
            <h1 className="font-display text-4xl font-bold leading-snug text-white md:text-5xl">
              مرشد
            </h1>
            <p className="mt-3 text-base text-white/80 leading-relaxed md:text-lg">
              دليل إرشادي شامل لأداء العمرة والحج
              <br />
              بسهولة وطمأنينة
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-end">
              <Link
                to="/hajj"
                className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#2D6A4F" }}
              >
                ابدأ بمناسك الحج
              </Link>
              <Link
                to="/umrah"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                استكشف الدليل
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick access cards */}
      <section className="px-4 -mt-6 relative z-10">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-md">
          <div className="grid grid-cols-2 divide-x divide-x-reverse divide-border md:grid-cols-5">
            {quickCards.map((c) => (
              <Link
                key={c.label}
                to={c.to}
                className="group flex flex-col items-center gap-2 px-4 py-5 text-center transition-colors hover:bg-primary-soft"
              >
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary">
                    {c.label}
                  </div>
                  <div className="text-xs text-muted-foreground">{c.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Articles */}
          <div className="flex-1 min-w-0">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold text-foreground">مقالات مختارة</h2>
              <Link to="/hajj" className="text-sm font-medium text-primary hover:underline">
                عرض جميع المقالات ←
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {articles.map((a) => (
                <Link
                  key={a.title}
                  to={a.to}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-soft"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={a.img}
                      alt={a.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=600&q=80";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-medium text-primary">
                      {a.category}
                    </span>
                    <h3 className="mt-2 font-display text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {a.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{a.desc}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                      <span>{a.reads} قراءة</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick guide sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
              <div className="px-5 py-4" style={{ backgroundColor: "#1B4332" }}>
                <h3 className="font-display text-lg font-bold text-white">دليل سريع</h3>
                <p className="text-xs text-white/60 mt-0.5">خطوات العمرة المختصرة</p>
              </div>
              <div className="divide-y divide-border">
                {umrahJourneySteps.map((step) => (
                  <div key={step.id} className="flex items-center gap-3 px-5 py-3.5">
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: "#2D6A4F" }}
                    >
                      {step.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground">{step.title}</div>
                      <div className="text-xs text-muted-foreground truncate">{step.subtitle}</div>
                    </div>
                    <span className="text-base">{step.icon}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-4">
                <Link
                  to="/umrah"
                  className="block w-full rounded-lg py-2.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#2D6A4F" }}
                >
                  عرض دليل العمرة كاملاً
                </Link>
              </div>
            </div>

            {/* Verse card */}
            <div className="mt-5 rounded-xl border border-primary/20 bg-primary-soft p-5 text-center">
              <div className="mb-2 text-xs font-medium text-primary">آية كريمة</div>
              <p className="font-display text-sm leading-loose text-foreground">
                ﴿ وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا ﴾
              </p>
              <div className="mt-2 text-xs text-muted-foreground">سورة الحج — الآية ٢٧</div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
