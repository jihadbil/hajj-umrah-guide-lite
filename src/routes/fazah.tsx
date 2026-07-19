// ===================================================
// fazah.tsx — صفحة خدمة "فزعة": شبكة الإنذار والإغاثة للمعتمرين
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageHeader, StepCard } from "@/components/PageHeader";
import { getSampleFazahCard, getFazahSteps, getFazahBenefits } from "@/lib/fazah";
import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/fazah")({
  component: FazahPage,
  head: () => ({
    meta: [
      { title: "فزعة — شبكة الإغاثة اللامركزية للمعتمر — مرشد" },
      {
        name: "description",
        content:
          "تعرّف على خدمة فزعة، بطاقة الاستجابة السريعة التي تربط كل معتمر بالمرشدين والفنادق لتوفير مساعدة فورية عند الحاجة.",
      },
    ],
  }),
});

// ---- بطاقة الفزعة القابلة للتقليب (وجه/ظهر) ----
function FazahCardDemo() {
  const { t } = useTranslation("fazah");
  const [flipped, setFlipped] = useState(false);
  const card = getSampleFazahCard(t);

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="[perspective:1400px]">
        <div
          className={`relative h-64 w-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
        >
          {/* الوجه الأمامي */}
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl border border-gold/30 bg-[#1B4332] bg-islamic-pattern-dark p-5 shadow-soft flex flex-col justify-between text-white text-right">
            <div className="flex items-center justify-between flex-row-reverse">
              <div className="flex items-center gap-2 flex-row-reverse">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
                  <LucideIcon name="🕌" size={16} />
                </span>
                <span className="font-display text-sm font-bold">{t("cardLabels.title")}</span>
              </div>
              <span className="rounded-full bg-gold/15 border border-gold/30 px-2.5 py-0.5 text-[9px] font-bold text-gold">
                {card.cardId}
              </span>
            </div>

            <div className="text-right">
              <div className="text-[10px] text-white/50">{t("cardLabels.pilgrimName")}</div>
              <div className="font-display text-lg font-bold">{card.name}</div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-right">
              <div>
                <div className="text-[9px] text-white/50">{t("cardLabels.hotel")}</div>
                <div className="text-[11px] font-semibold truncate">{card.hotel}</div>
              </div>
              <div>
                <div className="text-[9px] text-white/50">{t("cardLabels.roomNumber")}</div>
                <div className="text-[11px] font-semibold">{card.roomNumber}</div>
              </div>
              <div>
                <div className="text-[9px] text-white/50">{t("cardLabels.groupLeaderPhone")}</div>
                <div className="text-[11px] font-semibold" dir="ltr">
                  {card.groupLeaderPhone}
                </div>
              </div>
              <div>
                <div className="text-[9px] text-white/50">{t("cardLabels.bloodType")}</div>
                <div className="text-[11px] font-semibold">{card.bloodType}</div>
              </div>
            </div>
          </div>

          {/* الوجه الخلفي: رمز QR توضيحي */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl border border-gold/30 bg-card p-5 shadow-soft flex flex-col items-center justify-center gap-3">
            <div className="grid grid-cols-6 grid-rows-6 gap-1 rounded-xl bg-white p-3 border border-border/50 shadow-inner">
              {Array.from({ length: 36 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2.5 w-2.5 rounded-[2px] ${
                    // نمط ثابت بشكل زخرفي لمحاكاة رمز QR (لأغراض العرض فقط)
                    [
                      0, 1, 2, 5, 6, 8, 11, 12, 13, 15, 17, 18, 20, 23, 24, 25, 27, 29, 30, 32, 35,
                    ].includes(i)
                      ? "bg-[#1B4332]"
                      : "bg-transparent"
                  }`}
                />
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground text-center max-w-[220px] leading-relaxed">
              {t("cardLabels.qrDesc")}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setFlipped((f) => !f)}
        className="mx-auto mt-5 flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary/40 hover:text-primary transition-all cursor-pointer group"
      >
        <LucideIcon
          name="🔄"
          size={14}
          className="text-foreground group-hover:text-primary transition-colors"
        />
        <span>{flipped ? t("cardLabels.flipFront") : t("cardLabels.flipQr")}</span>
      </button>
    </div>
  );
}

// ---- محاكاة تفاعلية لعملية المسح وسلسلة التنبيه ----
type ScanStage = "idle" | "scanning" | "done";

function ScanSimulator() {
  const { t } = useTranslation("fazah");
  const [stage, setStage] = useState<ScanStage>("idle");
  const [revealedCount, setRevealedCount] = useState(0);

  const notifyChain = [
    { label: t("simulator.chain.step1"), icon: "🪪" },
    { label: t("simulator.chain.step2"), icon: "📞" },
    { label: t("simulator.chain.step3"), icon: "📍" },
    { label: t("simulator.chain.step4"), icon: "🏨" },
  ];

  function startScan() {
    setStage("scanning");
    setRevealedCount(0);
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setRevealedCount(i);
      if (i >= notifyChain.length) {
        clearInterval(interval);
        setStage("done");
      }
    }, 650);
  }

  function reset() {
    setStage("idle");
    setRevealedCount(0);
  }

  return (
    <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft md:p-8">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-display text-xl font-bold text-primary">{t("simulator.title")}</h3>
        <span className="rounded-full bg-primary-soft/50 px-3 py-1 text-[10px] font-bold text-primary">
          {t("simulator.badge")}
        </span>
      </div>

      {stage === "idle" && (
        <div className="flex flex-col items-center gap-4 py-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-gold-green text-3xl shadow-soft">
            📷
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
            {t("simulator.idleDesc")}
          </p>
          <button
            onClick={startScan}
            className="rounded-xl bg-[#1B4332] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#14342A] transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            {t("simulator.idleBtn")}
          </button>
        </div>
      )}

      {stage !== "idle" && (
        <div className="flex flex-col gap-3">
          {notifyChain.map((item, idx) => {
            const active = idx < revealedCount;
            return (
              <div
                key={item.label}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-500 ${
                  active
                    ? "border-primary/20 bg-primary-soft/40 opacity-100 translate-x-0"
                    : "border-border/40 bg-muted/20 opacity-40"
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-card border border-border text-primary shadow-sm">
                  <LucideIcon name={item.icon} size={18} />
                </span>
                <span className="flex-1 text-sm font-semibold text-foreground text-right">
                  {item.label}
                </span>
                <span
                  className={`text-sm font-bold ${active ? "text-emerald-600 dark:text-[#C5A85C]" : "text-muted-foreground/40"}`}
                >
                  {active ? "✓" : "…"}
                </span>
              </div>
            );
          })}

          {stage === "done" && (
            <div className="mt-2 flex flex-col items-center gap-3 rounded-2xl border border-success-border bg-success-surface px-4 py-4 text-center">
              <p className="flex items-center gap-1.5 text-sm font-bold text-success-foreground">
                <LucideIcon name="check" size={16} className="text-success-foreground shrink-0" />
                <span>{t("simulator.doneText")}</span>
              </p>
              <button
                onClick={reset}
                className="rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary/40 hover:text-primary transition-all cursor-pointer"
              >
                {t("simulator.resetBtn")}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FazahPage() {
  const { t } = useTranslation("fazah");
  const fazahStepsList = getFazahSteps(t);
  const fazahBenefitsList = getFazahBenefits(t);

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
    document.title = `${t("title")} — ${brandName}`;
  }, [t]);

  return (
    <div>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      {/* بيان توضيحي */}
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="rounded-xl border border-warning-border bg-warning-surface px-4 py-3 text-xs text-warning-foreground md:text-sm flex items-center gap-1.5 justify-start text-right">
          <LucideIcon name="⚠️" size={14} className="text-warning-foreground shrink-0" />
          <span>{t("demoNotice")}</span>
        </div>
      </div>

      {/* لماذا فزعة */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="text-right order-2 lg:order-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-bold text-gold mb-3">
              <LucideIcon name="🆘" size={12} className="text-gold" />
              <span>{t("why.badge")}</span>
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl mb-4">
              {t("why.title")}
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80 md:text-base mb-6">
              {t("why.desc")}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {fazahBenefitsList.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-2.5 rounded-2xl border border-border/50 bg-card p-3.5 text-right shadow-sm justify-start"
                >
                  <LucideIcon name={b.icon} size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-foreground">{b.title}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                      {b.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <FazahCardDemo />
          </div>
        </div>
      </section>

      {/* كيف تعمل الخدمة */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 text-center">
          <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
            {t("how.title")}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            {t("how.desc")}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {fazahStepsList.map((s) => (
            <StepCard key={s.n} n={s.icon} title={s.title}>
              <p>{s.description}</p>
            </StepCard>
          ))}
        </div>
      </section>

      {/* محاكاة تفاعلية */}
      <section className="mx-auto max-w-4xl px-4 py-10 pb-16">
        <ScanSimulator />
      </section>
    </div>
  );
}
