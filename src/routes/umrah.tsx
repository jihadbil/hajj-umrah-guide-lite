import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { umrahJourneySteps, type JourneyStep } from "@/lib/umrahJourney";

export const Route = createFileRoute("/umrah")({
  component: UmrahJourneyPage,
  head: () => ({
    meta: [
      { title: "رحلة العمرة — مرشد" },
      { name: "description", content: "دليلك خطوة بخطوة لأداء العمرة: من الاستعداد للإحرام إلى الطواف والسعي والتقصير." },
    ],
  }),
});

function StepSidebar({
  steps,
  activeId,
  onSelect,
}: {
  steps: JourneyStep[];
  activeId: number;
  onSelect: (id: number) => void;
}) {
  return (
    <nav className="flex flex-col gap-1">
      {steps.map((step) => {
        const isActive = step.id === activeId;
        const isDone = step.id < activeId;
        return (
          <button
            key={step.id}
            onClick={() => onSelect(step.id)}
            className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-right transition-all ${
              isActive
                ? "shadow-soft"
                : "hover:bg-muted"
            }`}
            style={isActive ? { backgroundColor: "#1B4332" } : {}}
          >
            {/* Step number bubble */}
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all ${
                isActive
                  ? "bg-white text-[#1B4332]"
                  : isDone
                  ? "bg-primary/20 text-primary"
                  : "bg-muted-foreground/20 text-muted-foreground"
              }`}
            >
              {isDone ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              ) : (
                step.id
              )}
            </div>
            <div className="flex-1 min-w-0 text-right">
              <div
                className={`text-sm font-semibold leading-tight ${
                  isActive ? "text-white" : isDone ? "text-primary" : "text-foreground"
                }`}
              >
                {step.title}
              </div>
              <div
                className={`mt-0.5 text-xs truncate ${
                  isActive ? "text-white/70" : "text-muted-foreground"
                }`}
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

function StepContent({ step, onPrev, onNext, isFirst, isLast }: {
  step: JourneyStep;
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div
        className="rounded-2xl p-6 text-white"
        style={{ backgroundColor: "#1B4332" }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-2xl">
            {step.icon}
          </div>
          <div>
            <div className="text-xs font-medium text-white/60">الخطوة {step.id} من {umrahJourneySteps.length}</div>
            <h1 className="font-display text-2xl font-bold text-white leading-tight">{step.title}</h1>
          </div>
        </div>
        <p className="text-white/80 text-sm leading-relaxed">{step.intro}</p>
      </div>

      {/* Sections */}
      {step.sections.map((section, i) => (
        <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-card">
          <h2 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white"
              style={{ backgroundColor: "#2D6A4F" }}
            >
              {i + 1}
            </span>
            {section.heading}
          </h2>
          {section.body.split("\n\n").map((para, j) => {
            const isQuote = para.startsWith("«");
            return (
              <p
                key={j}
                className={`mt-2 leading-relaxed text-sm ${
                  isQuote
                    ? "font-display text-base text-foreground rounded-xl bg-primary-soft border border-primary/20 p-4 my-3"
                    : "text-foreground/80"
                }`}
              >
                {para}
              </p>
            );
          })}
          {section.list && (
            <ul className="mt-3 space-y-2">
              {section.list.map((item, k) => (
                <li key={k} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <span
                    className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: "#2D6A4F", fontSize: "9px" }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* Important note */}
      {step.note && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">⚠️</span>
            <h3 className="font-display font-bold text-amber-900">تنبيه مهم</h3>
          </div>
          <p className="text-sm text-amber-800 leading-relaxed">{step.note}</p>
        </div>
      )}

      {/* Common mistakes */}
      {step.mistakes && step.mistakes.length > 0 && (
        <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">❌</span>
            <h3 className="font-display font-bold text-red-900">أخطاء شائعة</h3>
          </div>
          <ul className="space-y-2">
            {step.mistakes.map((m, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                <span className="mt-1 shrink-0 text-red-500">•</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Next step pointer */}
      {step.nextStep && !isLast && (
        <div className="rounded-2xl border border-primary/20 bg-primary-soft p-4 flex items-center gap-3">
          <span className="text-primary text-lg">➡️</span>
          <div>
            <div className="text-xs text-muted-foreground">الخطوة التالية</div>
            <div className="font-semibold text-primary text-sm">{step.nextStep}</div>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          السابقة
        </button>
        <button
          onClick={onNext}
          disabled={isLast}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#1B4332" }}
        >
          الخطوة التالية
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
      </div>
    </div>
  );
}

function UmrahJourneyPage() {
  const [activeStep, setActiveStep] = useState(1);

  const currentStep = umrahJourneySteps.find((s) => s.id === activeStep)!;
  const isFirst = activeStep === 1;
  const isLast = activeStep === umrahJourneySteps.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="border-b border-border" style={{ backgroundColor: "#1B4332" }}>
        <div className="mx-auto max-w-7xl px-4 py-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 mb-3">
            🕋 رحلة مناسك العمرة
          </div>
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            رحلة العمرة خطوة بخطوة
          </h1>
          <p className="mt-2 text-white/70 text-sm max-w-xl mx-auto">
            دليل تفصيلي يأخذك من الاستعداد للإحرام إلى إتمام مناسك العمرة
          </p>
          {/* Progress bar */}
          <div className="mt-5 mx-auto max-w-sm">
            <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-white transition-all duration-500"
                style={{ width: `${(activeStep / umrahJourneySteps.length) * 100}%` }}
              />
            </div>
            <div className="mt-1.5 text-xs text-white/60">
              {activeStep} من {umrahJourneySteps.length} خطوات
            </div>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex gap-6 items-start">
          {/* Fixed sidebar */}
          <aside className="w-64 shrink-0 hidden lg:block">
            <div className="sticky top-[72px] rounded-2xl border border-border bg-card shadow-card p-3">
              <div className="mb-2 px-3 py-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">خطوات الرحلة</p>
              </div>
              <StepSidebar
                steps={umrahJourneySteps}
                activeId={activeStep}
                onSelect={setActiveStep}
              />
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Mobile step selector */}
            <div className="mb-5 flex gap-2 overflow-x-auto pb-1 lg:hidden">
              {umrahJourneySteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all ${
                    step.id === activeStep
                      ? "text-white shadow-soft"
                      : "border border-border bg-card text-foreground hover:bg-muted"
                  }`}
                  style={step.id === activeStep ? { backgroundColor: "#1B4332" } : {}}
                >
                  <span>{step.icon}</span>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}
