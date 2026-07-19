// ===================================================
// umrah.tsx — صفحة رحلة العمرة خطوة بخطوة
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getUmrahSteps, type JourneyStep } from "@/lib/umrahJourney";
import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/umrah")({
  component: UmrahJourneyPage,
  head: () => ({
    meta: [
      { title: "رحلة العمرة — مرشد" },
      {
        name: "description",
        content: "دليلك خطوة بخطوة لأداء العمرة: من الاستعداد للإحرام إلى الطواف والسعي والتقصير.",
      },
    ],
  }),
});

type TabId = "guide" | "recommended" | "disliked" | "mistakes" | "duas";

function StepSidebar({
  steps,
  activeId,
  onSelect,
}: {
  steps: JourneyStep[];
  activeId: number;
  onSelect: (id: number) => void;
}) {
  const { t } = useTranslation("umrah");

  return (
    <nav className="flex flex-col gap-1.5">
      {steps.map((step) => {
        const isActive = step.id === activeId;
        const isDone = step.id < activeId;
        return (
          <button
            key={step.id}
            onClick={() => onSelect(step.id)}
            className={`group flex items-center gap-3.5 rounded-2xl px-4 py-3 text-right transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-[#1B4332] text-white shadow-soft scale-[1.02] border-r-4 border-gold"
                : "hover:bg-primary-soft/45 hover:translate-x-[-3px]"
            }`}
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all shadow-sm ${
                isActive
                  ? "bg-white text-[#1B4332]"
                  : isDone
                    ? "bg-emerald-600 text-white"
                    : "bg-muted-foreground/20 text-muted-foreground"
              }`}
            >
              {isDone ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                step.id
              )}
            </div>
            <div className="flex-1 min-w-0 text-right">
              <div
                className={`text-sm font-bold leading-tight ${
                  isActive ? "text-white" : isDone ? "text-primary" : "text-foreground"
                }`}
              >
                {step.title}
              </div>
              <div
                className={`mt-0.5 text-xs truncate ${isActive ? "text-white/70" : "text-muted-foreground"}`}
              >
                {step.subtitle}
              </div>
            </div>
          </button>
        );
      })}
    </nav>
  );
}

function GuideTab({ step }: { step: JourneyStep }) {
  const { t } = useTranslation("umrah");

  return (
    <div className="flex flex-col gap-4">
      {step.sections.map((section, i) => (
        <div
          key={i}
          className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-md hover:border-primary/20 transition-all duration-300 relative overflow-hidden bg-islamic-pattern"
        >
          <h2 className="font-display text-base font-bold text-foreground mb-3 flex items-center gap-2.5">
            <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-lg bg-gradient-gold-green text-white text-[10px] font-bold shadow-sm border border-white/5">
              {i + 1}
            </span>
            <span className="tracking-wide">{section.heading}</span>
          </h2>
          {section.body.split("\n\n").map((para, j) => {
            const isQuote = para.startsWith("«");
            return (
              <p
                key={j}
                className={`mt-2 leading-relaxed text-sm ${
                  isQuote
                    ? "font-serif text-xl leading-loose text-foreground rounded-2xl bg-primary-soft/40 border border-primary/10 p-5 my-4 shadow-inner text-center font-semibold bg-islamic-pattern"
                    : "text-foreground/80 text-right"
                }`}
              >
                {para}
              </p>
            );
          })}
          {section.list && (
            <ul className="mt-3.5 space-y-2 pr-1 text-right">
              {section.list.map((item, k) => (
                <li key={k} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1B4332] text-white text-[8px] font-bold shadow-sm">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {step.note && (
        <div className="rounded-2xl border border-amber-250 bg-amber-50/70 p-5 shadow-sm text-right">
          <div className="flex items-center gap-2 mb-1.5 justify-start">
            <span className="animate-gold-pulse">⚠️</span>
            <h3 className="font-display font-bold text-amber-900 text-sm">
              {t("labels.warningTitle")}
            </h3>
          </div>
          <p className="text-sm text-amber-850 leading-relaxed font-medium">{step.note}</p>
        </div>
      )}
    </div>
  );
}

function RecommendedTab({ step }: { step: JourneyStep }) {
  const { t } = useTranslation("umrah");

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 mb-1">
        <p className="text-sm text-emerald-800 font-medium">{t("banners.recommended")}</p>
      </div>
      {step.recommended.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-2xl border border-emerald-100/50 bg-white p-4 shadow-sm hover:shadow-soft transition-all duration-300"
        >
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold-green text-white text-[10px] font-bold border border-white/5 shadow-sm mt-0.5">
            {i + 1}
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed pt-0.5 text-right">{item}</p>
        </div>
      ))}
    </div>
  );
}

// ---- المكروهات ----
function DislikedTab({ step }: { step: JourneyStep }) {
  const { t } = useTranslation("umrah");

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-4 mb-1">
        <p className="text-sm text-amber-800 font-medium">{t("banners.disliked")}</p>
      </div>
      {step.disliked.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-2xl border border-amber-100/50 bg-white p-4 shadow-sm hover:shadow-soft transition-all duration-300"
        >
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white text-[10px] font-bold border border-white/5 shadow-sm mt-0.5">
            !
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed pt-0.5 text-right">{item}</p>
        </div>
      ))}
    </div>
  );
}

// ---- الأخطاء الشائعة ----
function MistakesTab({ step }: { step: JourneyStep }) {
  const { t } = useTranslation("umrah");

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-red-100 bg-red-50/60 p-4 mb-1">
        <p className="text-sm text-red-800 font-medium">{t("banners.mistakes")}</p>
      </div>
      {step.mistakeItems.map((item, i) => (
        <div
          key={i}
          className="rounded-3xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-start gap-3 bg-red-50/60 border-b border-red-100 p-4.5 text-right">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold mt-0.5 border border-white/5">
              ✗
            </span>
            <p className="text-sm text-red-800 leading-relaxed font-medium">{item.wrong}</p>
          </div>
          <div className="flex items-start gap-3 bg-emerald-50/60 p-4.5 text-right">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px] font-bold mt-0.5 border border-white/5">
              ✓
            </span>
            <p className="text-sm text-emerald-800 leading-relaxed font-medium">{item.right}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---- الأدعية والأذكار ----
function DuasTab({ step }: { step: JourneyStep }) {
  const { t } = useTranslation("umrah");

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-violet-100 bg-violet-50/60 p-4 mb-1">
        <p className="text-sm text-violet-800 font-medium">{t("banners.duas")}</p>
      </div>
      {step.duas.map((dua, i) => (
        <div
          key={i}
          className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-md hover:border-primary/20 transition-all duration-300 relative overflow-hidden bg-islamic-pattern text-right"
        >
          <div className="flex items-center gap-2 mb-3.5 justify-start">
            <span className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-gradient-gold-green text-white text-[10px] font-bold shrink-0 border border-white/5 shadow-sm">
              {i + 1}
            </span>
            <h3 className="text-sm font-bold text-foreground">{dua.title}</h3>
          </div>
          <div className="rounded-2xl bg-primary-soft/40 border border-primary/10 p-5 mb-3 shadow-inner bg-islamic-pattern">
            <p className="font-serif text-2xl leading-loose text-foreground text-center" dir="rtl">
              {dua.arabic}
            </p>
            {dua.translation && (
              <p className="mt-4 pt-4 border-t border-primary/10 text-sm text-foreground/75 text-center italic leading-relaxed">
                {dua.translation}
              </p>
            )}
          </div>
          {dua.source && <p className="text-xs text-muted-foreground text-left">— {dua.source}</p>}
        </div>
      ))}
    </div>
  );
}

function StepContent({
  step,
  onPrev,
  onNext,
  isFirst,
  isLast,
  stepsCount,
}: {
  step: JourneyStep;
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  stepsCount: number;
}) {
  const { t } = useTranslation("umrah");
  const [activeTab, setActiveTab] = useState<TabId>("guide");

  const tabItems = [
    { id: "guide" as const, label: t("labels.guide"), icon: "📖" },
    { id: "recommended" as const, label: t("labels.recommended"), icon: "✅" },
    { id: "disliked" as const, label: t("labels.disliked"), icon: "⚠️" },
    { id: "mistakes" as const, label: t("labels.mistakes"), icon: "↔️" },
    { id: "duas" as const, label: t("labels.duas"), icon: "🤲" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Step header */}
      <div className="rounded-3xl p-6 text-white bg-[#1B4332] bg-islamic-pattern relative border border-[oklch(0.72_0.14_85)]/20 shadow-md">
        <div className="flex items-center gap-3.5 mb-3.5 justify-start">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 shrink-0 border border-white/5 shadow-soft">
            <LucideIcon name={step.icon} size={22} className="text-white" />
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold text-gold/80 mb-0.5">
              {t("labels.stepOf", { id: step.id, total: stepsCount })}
            </div>
            <h2 className="font-display text-xl font-bold text-white leading-tight md:text-2xl">
              {step.title}
            </h2>
          </div>
        </div>
        <p className="text-white/80 text-sm leading-relaxed text-right">{step.intro}</p>
      </div>

      {/* Tabs */}
      <div className="rounded-3xl border border-border/60 bg-card shadow-soft overflow-hidden">
        {/* Tab bar */}
        <div className="flex overflow-x-auto gap-1 border-b border-border/40 bg-muted/40 p-1.5 scrollbar-none z-10 relative">
          {tabItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap px-4 py-3.5 text-xs font-bold transition-all duration-300 rounded-xl cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#1B4332] text-white shadow-md scale-[1.02] border-b-2 border-gold"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
              }`}
            >
              <LucideIcon
                name={tab.icon}
                size={14}
                className={activeTab === tab.id ? "text-white" : "text-muted-foreground"}
              />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div key={activeTab} className="p-6 animate-fade-in-up">
          {activeTab === "guide" && <GuideTab step={step} />}
          {activeTab === "recommended" && <RecommendedTab step={step} />}
          {activeTab === "disliked" && <DislikedTab step={step} />}
          {activeTab === "mistakes" && <MistakesTab step={step} />}
          {activeTab === "duas" && <DuasTab step={step} />}
        </div>
      </div>

      {/* Next step pointer */}
      {step.nextStep && !isLast && (
        <div className="rounded-3xl border border-primary/20 bg-primary-soft/45 p-5 flex items-center gap-3.5 text-right bg-islamic-pattern">
          <LucideIcon name="chevronLeft" size={16} className="text-primary animate-float" />
          <div>
            <div className="text-[10px] font-bold text-muted-foreground uppercase">
              {t("labels.nextStep")}
            </div>
            <div className="font-bold text-[#1B4332] text-sm mt-0.5">{step.nextStep}</div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="flex items-center gap-2 rounded-2xl border border-border/60 px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-muted active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm bg-card cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
          {t("navigation.prev", { ns: "common", defaultValue: "السابقة" })}
        </button>
        <button
          onClick={onNext}
          disabled={isLast}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-white bg-[#1B4332] hover:bg-[#14342A] hover:shadow-soft transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed shadow-md border border-white/5 cursor-pointer"
        >
          {t("navigation.next", { ns: "common", defaultValue: "الخطوة التالية" })}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function UmrahJourneyPage() {
  const { t } = useTranslation("umrah");
  const umrahJourneySteps = getUmrahSteps(t);
  const [activeStep, setActiveStep] = useState(1);

  const currentStep = umrahJourneySteps.find((s) => s.id === activeStep)!;
  const isFirst = activeStep === 1;
  const isLast = activeStep === umrahJourneySteps.length;

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
    document.title = `${t("title")} — ${brandName}`;
  }, [t]);

  const handleSelect = (id: number) => {
    setActiveStep(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Page header */}
      <div className="border-b border-border bg-[#1B4332] bg-islamic-pattern relative shadow-inner">
        {/* Glow decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[150px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 py-12 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold text-gold/90 mb-3 border border-white/5">
            <LucideIcon name="🕋" size={12} className="text-gold" />
            <span>{t("eyebrow")}</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl tracking-wide">
            {t("title")}
          </h1>
          <p className="mt-2 text-white/70 text-sm max-w-xl mx-auto leading-relaxed">
            {t("description")}
          </p>
          <div className="mt-6 mx-auto max-w-sm">
            <div className="h-2 rounded-full bg-white/20 overflow-hidden shadow-inner p-[1px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold to-amber-300 transition-all duration-500 shadow-[0_0_8px_rgba(197,168,92,0.8)]"
                style={{ width: `${(activeStep / umrahJourneySteps.length) * 100}%` }}
              />
            </div>
            <div className="mt-2 text-xs text-white/60 font-bold">
              {t("labels.stepsCount", { count: umrahJourneySteps.length })}
            </div>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex gap-6 items-start">
          {/* Fixed sidebar */}
          <aside className="w-64 shrink-0 hidden lg:block">
            <div className="sticky top-[88px] rounded-3xl border border-border/60 bg-card shadow-card p-4 bg-islamic-pattern">
              <div className="mb-3 px-3 py-1 text-right">
                <p className="text-[10px] font-bold text-[#1B4332] uppercase tracking-wider border-r-2 border-gold pr-2">
                  {t("sidebarTitle", { defaultValue: "مسار خطوات الرحلة" })}
                </p>
              </div>
              <StepSidebar
                steps={umrahJourneySteps}
                activeId={activeStep}
                onSelect={handleSelect}
              />
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Mobile step selector */}
            <div className="mb-6 flex gap-2 overflow-x-auto pb-1.5 lg:hidden scrollbar-none">
              {umrahJourneySteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => handleSelect(step.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                    step.id === activeStep
                      ? "text-white shadow-soft scale-[1.02] border-b-2 border-gold bg-[#1B4332]"
                      : "border border-border/60 bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  <LucideIcon
                    name={step.icon}
                    size={14}
                    className={
                      step.id === activeStep ? "text-white" : "text-[#1B4332] dark:text-[#C5A85C]"
                    }
                  />
                  <span className="whitespace-nowrap">{step.title}</span>
                </button>
              ))}
            </div>

            <StepContent
              step={currentStep}
              onPrev={() => setActiveStep((p) => Math.max(1, p - 1))}
              onNext={() => setActiveStep((p) => Math.min(umrahJourneySteps.length, p + 1))}
              isFirst={isFirst}
              isLast={isLast}
              stepsCount={umrahJourneySteps.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
