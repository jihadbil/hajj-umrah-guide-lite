// ===================================================
// prohibitions.tsx — صفحة محظورات الإحرام
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

// تعريف مسار الصفحة وبيانات SEO
export const Route = createFileRoute("/prohibitions")({
  component: ProhibitionsPage,
  head: () => ({
    meta: [
      { title: "محظورات الإحرام — مرشد" },
      {
        name: "description",
        content: "محظورات الإحرام التسعة التي يجب على المعتمر اجتنابها بعد دخوله في النسك.",
      },
    ],
  }),
});

const prohibitionKeys = [
  { n: "p1", icon: "✂️" },
  { n: "p2", icon: "💅" },
  { n: "p3", icon: "🌹" },
  { n: "p4", icon: "👔" },
  { n: "p5", icon: "🧢" },
  { n: "p6", icon: "🧕" },
  { n: "p7", icon: "💍" },
  { n: "p8", icon: "🔴" },
  { n: "p9", icon: "🦌" },
] as const;

// ---- مكوّن صفحة المحظورات ----
function ProhibitionsPage() {
  const { t } = useTranslation("prohibitions");

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
    document.title = `${t("title")} — ${brandName}`;
  }, [t]);

  const prohibitionsList = prohibitionKeys.map((item) => {
    return {
      n: t(`items.${item.n}.n`),
      title: t(`items.${item.n}.title`),
      icon: item.icon,
      body: t(`items.${item.n}.body`),
      daleel: t(`items.${item.n}.daleel`, { defaultValue: null }),
      note: t(`items.${item.n}.note`, { defaultValue: null }),
    };
  });

  const faqsList = (t("faqs", { returnObjects: true }) as { q: string; a: string }[]) || [];

  return (
    <div>
      {/* رأس الصفحة */}
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* تنبيه فقهي مهم يظهر في أعلى الصفحة */}
        <div className="mb-8 rounded-3xl border border-warning-border bg-warning-surface p-5 md:p-6 shadow-soft relative overflow-hidden bg-islamic-pattern">
          <div className="flex items-start gap-3.5 relative z-10">
            <LucideIcon
              name="⚠️"
              size={24}
              className="text-warning-foreground mt-0.5 animate-gold-pulse"
            />
            <div>
              <h3 className="font-display font-bold text-warning-foreground text-base mb-1.5">
                {t("warning_title")}
              </h3>
              <p className="text-sm text-warning-foreground leading-relaxed font-medium">
                {t("warning_body")}
              </p>
            </div>
          </div>
        </div>

        {/* قائمة المحظورات التسعة */}
        <div className="grid gap-5 mb-14">
          {prohibitionsList.map((p) => (
            <div
              key={p.n}
              className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-md hover:border-primary/25 transition-all duration-300 relative overflow-hidden bg-islamic-pattern text-right"
            >
              {/* Subtle background floating icon */}
              <div className="absolute -top-6 -left-6 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <LucideIcon name={p.icon} size={72} className="text-gold" />
              </div>

              <div className="flex items-start gap-4">
                {/* رقم المحظور */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold-green font-display text-lg font-bold text-white shadow-soft border border-white/10">
                  {p.n}
                </div>

                <div className="flex-1 min-w-0 text-right">
                  {/* عنوان المحظور وأيقونته */}
                  <div className="flex items-center gap-2 mb-2">
                    <LucideIcon
                      name={p.icon}
                      size={20}
                      className="text-primary transition-transform duration-300 group-hover:scale-110"
                    />
                    <h3 className="font-display text-lg font-bold text-foreground tracking-wide leading-none">
                      {p.title}
                    </h3>
                  </div>

                  {/* شرح المحظور */}
                  <p className="text-sm text-foreground/80 leading-relaxed">{p.body}</p>

                  {/* الدليل الشرعي — يظهر فقط إن وُجد */}
                  {p.daleel && (
                    <div className="mt-3.5 rounded-xl bg-primary-soft/40 border border-primary/10 p-4">
                      <div className="text-[10px] font-bold text-primary mb-1.5 uppercase">
                        {t("labels.daleel")}
                      </div>
                      <p className="font-serif text-sm leading-loose text-foreground font-semibold">
                        {p.daleel}
                      </p>
                    </div>
                  )}

                  {/* الاستثناء أو التنبيه — يظهر فقط إن وُجد */}
                  {p.note && (
                    <div className="mt-3.5 rounded-xl bg-info-surface border border-info-border p-3.5 text-xs text-info-foreground leading-relaxed shadow-sm">
                      <span className="font-bold">{t("labels.note")}</span>
                      {p.note}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* قسم الأسئلة الشائعة */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <h2 className="font-display text-xl font-bold text-foreground px-2">
              {t("labels.faqTitle")}
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-4">
            {faqsList.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-gold/20 transition-all duration-300 bg-islamic-pattern"
              >
                <div className="flex items-start gap-3">
                  {/* أيقونة علامة الاستفهام */}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold-green text-white text-[10px] font-bold border border-white/5 mt-0.5 shadow-sm">
                    ؟
                  </span>
                  <div className="text-right">
                    {/* السؤال */}
                    <div className="font-bold text-foreground text-sm mb-1.5">{f.q}</div>
                    {/* الجواب */}
                    <div className="text-sm text-foreground/75 leading-relaxed">{f.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
