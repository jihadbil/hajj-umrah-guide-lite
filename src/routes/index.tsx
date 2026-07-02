import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "دليل الحاج والمعتمر — الرحلة الروحانية المباركة" },
      { name: "description", content: "دليلك الشامل لأداء مناسك الحج والعمرة، مع الأدعية والأذكار والنصائح خطوة بخطوة." },
    ],
  }),
});

const sections = [
  { to: "/hajj", title: "مناسك الحج", desc: "خطوات الحج مرتّبة من الإحرام إلى طواف الوداع.", icon: "🕋" },
  { to: "/umrah", title: "مناسك العمرة", desc: "الطواف والسعي والتقصير بالترتيب الصحيح.", icon: "🌙" },
  { to: "/duas", title: "الأدعية والأذكار", desc: "أدعية مأثورة لكل موقف من مواقف الرحلة.", icon: "📿" },
  { to: "/tips", title: "نصائح الرحلة", desc: "إرشادات صحية وتنظيمية لرحلة ميسّرة.", icon: "🧭" },
] as const;

const stats = [
  { n: "٥", l: "أركان الحج" },
  { n: "٤", l: "أركان العمرة" },
  { n: "٧", l: "أشواط الطواف" },
  { n: "٧", l: "أشواط السعي" },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-xs font-medium text-primary">
              <span>﷽</span>
              <span>بسم الله نبدأ رحلتنا المباركة</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
              دليلك <span className="text-gradient-primary">الشامل</span> لأداء
              <br />
              مناسك الحج والعمرة
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              كل ما تحتاجه في رحلتك الروحانية: خطوات المناسك، الأدعية المأثورة، الأذكار اليومية، ونصائح عملية — كل ذلك بترتيب واضح وبسيط.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/hajj" className="rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105">
                ابدأ بمناسك الحج
              </Link>
              <Link to="/duas" className="rounded-full border border-primary/30 bg-background px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft">
                الأدعية والأذكار
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl border border-border/60 bg-card/80 p-5 text-center shadow-soft backdrop-blur">
                <div className="font-display text-3xl font-bold text-primary">{s.n}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections grid */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">ماذا يقدّم لك الدليل؟</h2>
          <p className="mt-3 text-muted-foreground">أقسام مرتّبة تسير معك خطوة بخطوة في رحلتك</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary-soft transition-transform group-hover:scale-125" />
              <div className="relative">
                <div className="text-4xl">{s.icon}</div>
                <h3 className="mt-4 font-display text-2xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  <span>اعرف المزيد</span>
                  <span className="transition-transform group-hover:-translate-x-1">←</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Verse */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-3xl border border-primary/20 bg-gradient-soft p-10 text-center shadow-soft">
          <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">آية كريمة</div>
          <p className="font-display text-2xl leading-loose text-foreground md:text-3xl">
            ﴿ وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ ﴾
          </p>
          <div className="mt-4 text-sm text-muted-foreground">سورة الحج — الآية ٢٧</div>
        </div>
      </section>
    </div>
  );
}
