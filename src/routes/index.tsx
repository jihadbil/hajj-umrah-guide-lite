import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { umrahJourneySteps } from "@/lib/umrahJourney";
import { PrayerTimes } from "@/components/PrayerTimes";
import { HeroSlideshow } from "@/components/HeroSlideshow";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "مرشد — دليل المعتمر" },
      { name: "description", content: "دليلك الإرشادي الشامل لأداء العمرة بسهولة وطمأنينة." },
    ],
  }),
});

const quickCards = [
  { to: "/umrah",        icon: "🕋", label: "رحلة العمرة",        desc: "خطوة بخطوة" },
  { to: "/arkaan",       icon: "🏛️", label: "أركان العمرة",       desc: "المستحبات والمكروهات" },
  { to: "/wajibaat",     icon: "📋", label: "الواجبات والسنن",    desc: "الفرائض والمستحبات" },
  { to: "/prohibitions", icon: "🚫", label: "محظورات الإحرام",    desc: "ما يجب اجتنابه" },
  { to: "/fidya",        icon: "⚖️", label: "أحكام الفدية",       desc: "متى تجب وكيف تُؤدى" },
  { to: "/mistakes",     icon: "⚠️", label: "الأخطاء الشائعة",   desc: "تجنّب الأخطاء" },
  { to: "/duas",         icon: "🤲", label: "الأدعية والأذكار",   desc: "أدعية مأثورة" },
  { to: "/tips",         icon: "🧳", label: "حقيبة المعتمر",     desc: "قائمة التجهيزات والنصائح" },
  { to: "/attractions",  icon: "🕌", label: "المزارات",           desc: "معالم مكة والمدينة" },
  { to: "/hotels",       icon: "🏨", label: "الفنادق والمرشدين",  desc: "أماكن الإقامة والمرافقة" },
  { to: "/fazah",        icon: "🆘", label: "فزعة",               desc: "شبكة الإغاثة اللامركزية" },
];

function InteractiveStepper() {
  const [active, setActive] = useState(1);
  const current = umrahJourneySteps.find((s) => s.id === active) || umrahJourneySteps[0];

  return (
    <div className="rounded-3xl border border-border bg-card shadow-soft p-6 md:p-8 bg-islamic-pattern animate-fade-in-up mt-12 relative overflow-hidden">
      {/* Decorative background dome shape */}
      <div className="absolute -top-12 -left-12 text-9xl opacity-5 select-none font-display text-gold pointer-events-none hidden md:block">🕌</div>
      
      <div className="text-center mb-8 relative z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-bold text-gold">
          🗺️ خارطة الطريق التفاعلية
        </span>
        <h2 className="font-display text-2xl font-bold text-foreground mt-2.5 md:text-3xl">مسار العمرة خطوة بخطوة</h2>
        <p className="text-sm text-muted-foreground mt-1.5 max-w-md mx-auto">تتبع المناسك والخطوات بالتفصيل وتعرف على الأدعية والأعمال المستحبة في كل مرحلة.</p>
      </div>
      
      {/* Step Navigation Track */}
      <div className="relative mb-10 overflow-x-auto pb-4 pt-2 px-4 scrollbar-none">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 hidden md:block" />
        <div 
          className="absolute top-1/2 right-0 h-0.5 bg-gradient-to-l from-primary to-gold -translate-y-1/2 hidden md:block transition-all duration-500" 
          style={{ width: `${((active - 1) / (umrahJourneySteps.length - 1)) * 100}%` }}
        />
        
        {/* Step Buttons */}
        <div className="relative flex justify-between gap-6 md:gap-2 min-w-[750px] md:min-w-0">
          {umrahJourneySteps.map((step) => {
            const isCompleted = step.id < active;
            const isActive = step.id === active;
            return (
              <button
                key={step.id}
                onClick={() => setActive(step.id)}
                className="group flex flex-col items-center focus:outline-none transition-transform duration-300 active:scale-95"
              >
                {/* Outer Ring */}
                <div 
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 transition-all duration-300 shadow-md ${
                    isActive 
                      ? "bg-[#1B4332] border-[#C5A85C] text-white scale-110 ring-4 ring-[#1B4332]/10" 
                      : isCompleted 
                      ? "bg-primary border-primary text-white" 
                      : "bg-card border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary group-hover:bg-primary-soft/30"
                  }`}
                >
                  <span className="text-lg transition-transform duration-300 group-hover:scale-110">{step.icon}</span>
                </div>
                <span className={`mt-2 text-xs font-bold ${isActive ? "text-[#1B4332]" : "text-muted-foreground"}`}>
                  الخطوة {step.id}
                </span>
                <span className={`text-[10px] hidden md:block max-w-[80px] text-center truncate ${isActive ? "text-foreground font-semibold" : "text-muted-foreground/60"}`}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Selected Step Card Details */}
      <div className="grid gap-6 md:grid-cols-12 items-stretch rounded-2xl border border-primary/10 bg-primary-soft/45 p-5 md:p-6 transition-all duration-500">
        {/* Step Info */}
        <div className="md:col-span-8 flex flex-col justify-between text-right">
          <div>
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary text-white text-xl shadow-soft">
                {current.icon}
              </div>
              <div>
                <span className="text-[10px] font-bold text-gold">الخطوة {current.id} من {umrahJourneySteps.length}</span>
                <h3 className="font-display text-xl font-bold text-foreground leading-none mt-0.5">{current.title}</h3>
              </div>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">{current.intro}</p>
            
            {/* Top recommended previews */}
            {current.recommended.length > 0 && (
              <div className="mt-4">
                <span className="text-xs font-bold text-primary block mb-2.5">💡 أهم السنن والمستحبات:</span>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {current.recommended.slice(0, 2).map((rec, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-foreground/75 bg-card/70 backdrop-blur-sm rounded-xl p-2.5 border border-border/30 shadow-sm">
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                      <span className="leading-relaxed">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 flex justify-end">
            <Link
              to="/umrah"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1B4332] text-white px-5 py-2.5 text-xs font-bold hover:bg-[#14342A] hover:shadow-soft hover:translate-x-[-2px] transition-all"
            >
              <span>عرض الدليل الكامل والسنن والأخطاء</span>
              <span>←</span>
            </Link>
          </div>
        </div>
        
        {/* Step Quote / Supplication Preview */}
        <div className="md:col-span-4 border-r border-primary/10 pr-0 md:pr-6 flex flex-col justify-center mt-5 md:mt-0">
          <div className="rounded-xl bg-card border border-primary/15 p-4 flex flex-col gap-2 relative overflow-hidden h-full justify-between shadow-sm">
            <span className="text-[10px] font-bold text-gold block border-b border-border/50 pb-2">🤲 من أدعية هذه المرحلة:</span>
            {current.duas.length > 0 ? (
              <div className="my-auto py-3">
                <p className="font-display text-base leading-relaxed text-center text-foreground font-semibold">
                  {current.duas[0].arabic}
                </p>
                {current.duas[0].source && (
                  <span className="block text-[10px] text-muted-foreground text-left mt-2.5">— {current.duas[0].title}</span>
                )}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground my-auto text-center leading-relaxed">تخير من الدعاء ما شئت من خيري الدنيا والآخرة وأكثر من الاستغفار.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden pb-16">
        {/* Auto-rotating photo slideshow with a light overlay */}
        <HeroSlideshow />

        {/* Glowing floating calligraphic motif in background */}
        <div className="absolute top-1/4 left-1/4 text-[200px] opacity-5 select-none font-display text-gold pointer-events-none hidden lg:block animate-float">
          🕌
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 flex justify-start">
          <div className="max-w-xl text-right animate-fade-in-up w-full">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 border border-gold/30 px-3.5 py-1 text-xs font-semibold text-gold mb-4 shadow-sm">
              ✨ بوابتك الإرشادية لبيت الله العتيق
            </div>
            <h1 className="font-display text-6xl font-extrabold leading-tight text-white md:text-7xl">
              مُـرْشِـد
            </h1>
            <p className="mt-4 text-lg text-white/90 leading-relaxed md:text-xl font-display">
              دليلك الإرشادي والتفاعلي الشامل لأداء مناسك العمرة والزيارة بكل طمأنينة ويسر، وفق الهدي النبوي الشريف.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-start">
              <Link
                to="/umrah"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold text-[#14342A] px-6 py-3 text-sm font-bold shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-gold/25"
              >
                <span>🕋</span>
                <span>ابدأ رحلة العمرة</span>
              </Link>
              <Link
                to="/duas"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                <span>🤲</span>
                <span>الأدعية والأذكار</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Curved Islamic SVG Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[50px] md:h-[70px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C300,100 900,20 1200,80 L1200,120 L0,120 Z" fill="oklch(0.72 0.14 85 / 0.08)"></path>
            <path d="M0,80 C300,120 900,40 1200,100 L1200,120 L0,120 Z" fill="var(--background)"></path>
          </svg>
        </div>
      </section>

      {/* Quick access cards */}
      <section className="px-4 -mt-10 relative z-10">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white/70 backdrop-blur-md border border-white/20 p-5 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {quickCards.map((c) => (
              <Link
                key={c.label}
                to={c.to}
                className="group flex flex-col items-center justify-between gap-2.5 rounded-2xl border border-border/30 bg-white/95 p-3.5 text-center shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-soft hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/15 shadow-sm">
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                    {c.label}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 group-hover:text-muted-foreground/80 leading-tight">{c.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Stepper Section */}
      <section className="mx-auto max-w-7xl px-4 mt-8">
        <InteractiveStepper />
      </section>

      {/* Prayer times */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <PrayerTimes />
      </section>
    </div>
  );
}
