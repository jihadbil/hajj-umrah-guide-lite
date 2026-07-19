// ===================================================
// mistakes.tsx — صفحة الأخطاء الشائعة في العمرة
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

// تعريف مسار الصفحة وبيانات SEO
export const Route = createFileRoute("/mistakes")({
  component: MistakesPage,
  head: () => ({
    meta: [
      { title: "الأخطاء الشائعة في العمرة — مرشد" },
      {
        name: "description",
        content:
          "أبرز الأخطاء التي يقع فيها المعتمرون في الإحرام والطواف والسعي والحلق، مع بيان الصواب.",
      },
    ],
  }),
});

const groupsKeys = [
  { key: "ihram", icon: "🧎", color: "#7c3aed" },
  { key: "tawaf", icon: "🌀", color: "#0369a1" },
  { key: "sai", icon: "🏃", color: "#065f46" },
  { key: "halq", icon: "✂️", color: "#b45309" },
  { key: "general", icon: "⚠️", color: "#dc2626" },
] as const;

// ---- مكوّن صفحة الأخطاء الشائعة ----
function MistakesPage() {
  const { t } = useTranslation("mistakes");

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
    document.title = `${t("title")} — ${brandName}`;
  }, [t]);

  const mistakeGroupsList = groupsKeys.map((group) => {
    const groupKey = `groups.${group.key}`;
    const mistakesRaw = t(`${groupKey}.mistakes`, { returnObjects: true }) as any[];
    
    const mistakes = Array.isArray(mistakesRaw) ? mistakesRaw.map((m) => ({
      title: m.title,
      wrong: m.wrong,
      right: m.right,
      daleel: m.daleel || undefined,
    })) : [];

    return {
      category: t(`${groupKey}.category`),
      icon: group.icon,
      color: group.color,
      mistakes,
    };
  });

  return (
    <div>
      {/* رأس الصفحة */}
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 space-y-8">
        {/* اقتباس تحفيزي في أعلى الصفحة */}
        <div className="rounded-2xl border border-primary/20 bg-primary-soft p-5 text-center">
          <p className="text-sm text-foreground/80 leading-relaxed">
            {t("quote")}
          </p>
        </div>

        {/* عرض مجموعات الأخطاء — كل مجموعة في قسم مستقل */}
        <div className="grid gap-8">
          {mistakeGroupsList.map((group) => (
            <section key={group.category} className="space-y-4">
              {/* رأس المجموعة: أيقونة + اسم الفئة */}
              <div className="mb-4 flex items-center gap-3 pr-1 text-right">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-xl text-white shadow-soft border border-white/5"
                  style={{
                    backgroundColor: group.color,
                    backgroundImage: `linear-gradient(135deg, ${group.color} 0%, rgba(20,52,42,0.9) 100%)`,
                  }}
                >
                  <LucideIcon name={group.icon} size={20} className="text-white" />
                </div>
                <h2 className="font-display text-xl font-bold text-foreground">{group.category}</h2>
              </div>

              {/* قائمة أخطاء المجموعة */}
              <div className="grid gap-5">
                {group.mistakes.map((m, i) => (
                  <div
                    key={i}
                    className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-md hover:border-primary/25 transition-all duration-300 relative overflow-hidden bg-islamic-pattern text-right"
                  >
                    {/* Floating decoration */}
                    <div className="absolute -top-6 -left-6 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                      <LucideIcon name="⚠️" size={72} className="text-gold" />
                    </div>

                    {/* عنوان الخطأ مع رقم تسلسلي */}
                    <h3 className="font-bold text-foreground text-base mb-4 flex items-center gap-2.5">
                      <span
                        className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full text-white text-[10px] font-bold shadow-sm border border-white/5"
                        style={{
                          backgroundColor: group.color,
                          backgroundImage: `linear-gradient(135deg, ${group.color} 0%, rgba(20,52,42,0.95) 100%)`,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span>{m.title}</span>
                    </h3>

                    <div className="space-y-3">
                      {/* صندوق الخطأ — خلفية حمراء */}
                      <div className="flex items-start gap-3 rounded-2xl bg-error-surface border border-error-border p-4 shadow-sm">
                        <span className="text-error-foreground mt-0.5 shrink-0 text-base font-bold">
                          ✗
                        </span>
                        <p className="text-sm text-error-foreground leading-relaxed font-medium">
                          {m.wrong}
                        </p>
                      </div>

                      {/* صندوق الصواب — خلفية خندراء */}
                      <div className="flex items-start gap-3 rounded-2xl bg-success-surface border border-success-border p-4 shadow-sm">
                        <span className="text-success-foreground mt-0.5 shrink-0 text-base font-bold">
                          ✓
                        </span>
                        <div className="text-right">
                          <p className="text-sm text-success-foreground leading-relaxed font-medium">
                            {m.right}
                          </p>
                          {/* الدليل — يظهر فقط إن وُجد */}
                          {m.daleel && (
                            <p className="mt-2 text-xs text-success-foreground/80 font-semibold bg-success-surface/40 rounded-lg p-2.5 border border-success-border/20 inline-block font-serif leading-loose">
                              {m.daleel}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
