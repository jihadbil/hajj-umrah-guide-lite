// ===================================================
// fidya.tsx — صفحة أحكام الفدية
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const Route = createFileRoute("/fidya")({
  component: FidyaPage,
  head: () => ({
    meta: [
      { title: "أحكام الفدية — مرشد" },
      {
        name: "description",
        content:
          "أحكام الفدية في العمرة: متى تجب، وكيف تُؤدى، والفرق بين ترك الركن وترك الواجب وفعل المحظور.",
      },
    ],
  }),
});

const sectionKeys = [
  { id: 1, key: "sec1", icon: "📖", color: "#1B4332" },
  { id: 2, key: "sec2", icon: "🔴", color: "#dc2626" },
  { id: 3, key: "sec3", icon: "🟡", color: "#b45309" },
  { id: 4, key: "sec4", icon: "🩺", color: "#0369a1" },
  { id: 5, key: "sec5", icon: "🟢", color: "#065f46" },
  { id: 6, key: "sec6", icon: "🔴", color: "#dc2626" },
] as const;

// ---- مكوّن صفحة الفدية ----
function FidyaPage() {
  const { t } = useTranslation("fidya");

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
    document.title = `${t("title")} — ${brandName}`;
  }, [t]);

  const sectionsList = sectionKeys.map((sec) => {
    const sKey = `sections.${sec.key}`;
    const optionsRaw = t(`${sKey}.options`, { returnObjects: true });
    
    let options = undefined;
    if (Array.isArray(optionsRaw)) {
      const icons = ["🐑", "🍚", "📅"];
      options = optionsRaw.map((opt: any, idx: number) => ({
        icon: icons[idx] || "🐑",
        title: opt.title,
        desc: opt.desc,
      }));
    }

    return {
      id: sec.id,
      title: t(`${sKey}.title`),
      icon: sec.icon,
      color: sec.color,
      content: t(`${sKey}.content`, { returnObjects: true }) as string[],
      list: t(`${sKey}.list`, { returnObjects: true, defaultValue: [] }) as string[],
      daleel: t(`${sKey}.daleel`, { returnObjects: true, defaultValue: [] }) as string[],
      note: t(`${sKey}.note`, { defaultValue: "" }),
      warning: t(`${sKey}.warning`, { defaultValue: "" }),
      options,
    };
  });

  const faqsList = (t("faqs", { returnObjects: true }) as { q: string; a: string }[]) || [];
  const referencesList = (t("references", { returnObjects: true }) as string[]) || [];

  return (
    <div>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 space-y-8 animate-fade-in-up">
        {/* تنبيه رئيسي */}
        <div className="rounded-3xl border border-warning-border bg-warning-surface p-5 md:p-6 shadow-soft relative overflow-hidden bg-islamic-pattern">
          <div className="flex items-start gap-3.5 relative z-10">
            <LucideIcon
              name="⚠️"
              size={24}
              className="text-warning-foreground mt-0.5 animate-gold-pulse"
            />
            <div className="text-right">
              <h3 className="font-display font-bold text-warning-foreground text-base mb-1.5">
                {t("warningTitle")}
              </h3>
              <p className="text-sm text-warning-foreground leading-relaxed font-medium">
                {t("warningBody")}
              </p>
            </div>
          </div>
        </div>

        {/* الأقسام */}
        <div className="grid gap-6">
          {sectionsList.map((section) => (
            <div
              key={section.id}
              className="rounded-3xl border border-border/60 bg-card shadow-soft overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* رأس القسم */}
              <div
                className="flex items-center gap-3.5 px-6 py-4.5 text-white bg-islamic-pattern border-b border-white/10 text-right"
                style={{
                  backgroundColor: section.color,
                  backgroundImage: `linear-gradient(135deg, ${section.color} 0%, rgba(20,52,42,0.95) 100%)`,
                }}
              >
                <LucideIcon name={section.icon} size={22} className="text-white" />
                <h2 className="font-display text-lg font-bold text-white tracking-wide leading-none">
                  {section.title}
                </h2>
              </div>

              <div className="p-6 space-y-4 text-right">
                {/* المحتوى */}
                {section.content && section.content.map((para, i) => (
                  <p key={i} className="text-sm text-foreground/80 leading-relaxed">
                    {para}
                  </p>
                ))}

                {/* قائمة الأمثلة */}
                {section.list && section.list.length > 0 && (
                  <ul className="space-y-2.5 pr-1">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <span
                          className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white text-[9px]"
                          style={{ backgroundColor: section.color }}
                        >
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* الدليل */}
                {section.daleel && section.daleel.length > 0 && (
                  <div className="rounded-2xl bg-primary-soft/40 border border-primary/10 p-5 shadow-inner">
                    <div className="text-[10px] font-bold text-primary mb-2 uppercase">
                      {t("labels.daleel")}
                    </div>
                    {section.daleel.map((para, i) => (
                      <p
                        key={i}
                        className="font-serif text-sm leading-loose text-foreground font-semibold mb-1"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {/* خيارات فدية الأذى */}
                {section.options && (
                  <div className="grid gap-3.5 sm:grid-cols-3 pt-2">
                    {section.options.map((opt, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-border/50 bg-[#1B4332]/5 dark:bg-[#1B4332]/10 p-5 text-center transition-all duration-300 hover:bg-[#1B4332]/10 hover:border-gold/30"
                      >
                        <div className="flex justify-center text-4xl mb-2.5 animate-float">
                          <LucideIcon
                            name={opt.icon}
                            size={36}
                            className="text-[#1B4332] dark:text-[#C5A85C]"
                          />
                        </div>
                        <div className="font-bold text-foreground text-sm mb-1">{opt.title}</div>
                        <div className="text-[11px] text-muted-foreground leading-snug">
                          {opt.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* ملاحظة */}
                {section.note && (
                  <div className="rounded-xl bg-info-surface border border-info-border p-3.5 text-xs text-info-foreground leading-relaxed shadow-sm">
                    <span className="font-bold">{t("labels.note")}</span>
                    {section.note}
                  </div>
                )}

                {/* تحذير */}
                {section.warning && (
                  <div className="rounded-xl bg-warning-surface border border-warning-border p-3.5 text-xs text-warning-foreground leading-relaxed shadow-sm">
                    <span className="font-bold">{t("labels.warning")}</span>
                    {section.warning}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* الأسئلة الشائعة */}
        <div className="pt-4">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <h2 className="font-display text-xl font-bold text-foreground px-2 text-center">
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
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold-green text-white text-[10px] font-bold border border-white/5 mt-0.5 shadow-sm">
                    ؟
                  </span>
                  <div className="text-right">
                    <div className="font-bold text-foreground text-sm mb-1.5">{f.q}</div>
                    <div className="text-sm text-foreground/75 leading-relaxed">{f.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* المراجع */}
        <div className="rounded-3xl border border-border/60 bg-muted/40 p-6 bg-islamic-pattern text-right">
          <h3 className="font-display font-bold text-foreground text-lg mb-3 border-r-2 border-gold pr-2">
            {t("labels.referenceTitle")}
          </h3>
          <ul className="grid gap-2.5 sm:grid-cols-2 text-xs text-muted-foreground mt-4 pr-1">
            {referencesList.map((ref, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-[#C5A85C]">✦</span> {ref}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
