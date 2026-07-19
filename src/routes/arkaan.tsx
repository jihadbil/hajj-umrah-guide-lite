// ===================================================
// arkaan.tsx — صفحة أركان العمرة
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";
import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/arkaan")({
  component: ArkaanPage,
  head: () => ({
    meta: [
      { title: "أركان العمرة — مرشد" },
      {
        name: "description",
        content:
          "أركان العمرة الأربعة: الإحرام، الطواف، السعي، الحلق والتقصير — مع المستحبات والمكروهات في كل ركن.",
      },
    ],
  }),
});

// ---- أنواع البيانات ----
interface Rukn {
  id: number;
  title: string;
  icon: string;
  arabicNum: string;
  definition: string;
  ruling: string; // الحكم الشرعي
  details: string[]; // تفاصيل الركن
  mustahabb: string[]; // المستحبات
  makrooh: string[]; // المكروهات
  note?: string;
}

const arkaanKeys = [
  { id: 1, key: "rukn1", icon: "🕋" },
  { id: 2, key: "rukn2", icon: "🌀" },
  { id: 3, key: "rukn3", icon: "🏃" },
  { id: 4, key: "rukn4", icon: "✂️" },
] as const;

// ---- مكوّن عرض الركن ----
function RuknCard({ rukn }: { rukn: Rukn }) {
  const { t } = useTranslation("arkaan");
  const [activeTab, setActiveTab] = useState<"details" | "mustahabb" | "makrooh">("details");

  const tabs = [
    { id: "details" as const, label: t("tabs.details"), icon: "📖" },
    { id: "mustahabb" as const, label: t("tabs.mustahabb"), icon: "✅" },
    { id: "makrooh" as const, label: t("tabs.makrooh"), icon: "⚠️" },
  ];

  return (
    <div className="group rounded-3xl border border-border/60 bg-card shadow-soft overflow-hidden hover:shadow-md hover:border-primary/20 transition-all duration-300">
      {/* رأس الركن */}
      <div className="p-6 text-white bg-[#1B4332] bg-islamic-pattern relative border-b border-[oklch(0.72_0.14_85)]/20 shadow-inner">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/5 shadow-soft transition-transform duration-300 group-hover:scale-105">
            <LucideIcon name={rukn.icon} size={22} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-gold/80 mb-0.5">
              {t("labels.ruknLabel", { num: rukn.arabicNum })}
            </div>
            <h2 className="font-display text-xl font-bold text-white tracking-wide">
              {rukn.title}
            </h2>
            <p className="mt-1 text-sm text-white/80 leading-relaxed">{rukn.definition}</p>
          </div>
        </div>
        {/* الحكم */}
        <div className="mt-4 rounded-xl bg-white/10 px-4 py-2.5 text-xs text-white/90 border border-white/5">
          <span className="font-bold text-gold">{t("labels.ruling")}</span>
          {rukn.ruling}
        </div>
      </div>

      {/* تبويبات */}
      <div className="flex border-b border-border/40 bg-muted/40 p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1 items-center justify-center gap-1.5 py-3 text-sm font-semibold transition-all duration-300 rounded-xl ${
              activeTab === tab.id
                ? "text-primary bg-card shadow-sm font-bold border-b-2 border-[#1B4332]"
                : "text-muted-foreground hover:text-foreground hover:bg-card/50"
            }`}
          >
            <LucideIcon
              name={tab.icon}
              size={14}
              className={activeTab === tab.id ? "text-primary" : "text-muted-foreground"}
            />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* محتوى التبويب */}
      <div key={activeTab} className="p-6 animate-fade-in-up">
        {activeTab === "details" && (
          <ul className="space-y-3.5 pr-1">
            {rukn.details && rukn.details.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-gold-green text-white text-[10px] font-bold shadow-sm border border-white/5">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
            {rukn.note && (
              <li className="mt-5 rounded-2xl border border-warning-border bg-warning-surface p-4 text-sm text-warning-foreground leading-relaxed shadow-sm">
                <span className="font-bold">{t("labels.noteLabel")}</span>
                {rukn.note}
              </li>
            )}
          </ul>
        )}

        {activeTab === "mustahabb" && (
          <div className="flex flex-col gap-2.5">
            <div className="rounded-xl border border-success-border bg-success-surface p-3 mb-1">
              <p className="text-xs text-success-foreground font-medium">
                {t("labels.mustahabbSub")}
              </p>
            </div>
            {rukn.mustahabb && rukn.mustahabb.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-success-border/20 bg-card p-3.5 shadow-sm hover:shadow-soft transition-all duration-300"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px] font-bold border border-white/5">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground/85 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "makrooh" && (
          <div className="flex flex-col gap-2.5">
            <div className="rounded-xl border border-warning-border bg-warning-surface p-3 mb-1">
              <p className="text-xs text-warning-foreground font-medium">
                {t("labels.makroohSub")}
              </p>
            </div>
            {rukn.makrooh && rukn.makrooh.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-warning-border/20 bg-card p-3.5 shadow-sm hover:shadow-soft transition-all duration-300"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white text-[10px] font-bold border border-white/5">
                  !
                </span>
                <p className="text-sm text-foreground/85 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ---- مكوّن صفحة الأركان ----
function ArkaanPage() {
  const { t } = useTranslation("arkaan");

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
    document.title = `${t("title")} — ${brandName}`;
  }, [t]);

  // بناء قائمة الأركان من الترجمات الحالية
  const arkaanList: Rukn[] = arkaanKeys.map((item) => {
    const rKey = item.key;
    return {
      id: item.id,
      icon: item.icon,
      arabicNum: t(`${rKey}.arabicNum`),
      title: t(`${rKey}.title`),
      definition: t(`${rKey}.definition`),
      ruling: t(`${rKey}.ruling`),
      details: t(`${rKey}.details`, { returnObjects: true }) as string[],
      mustahabb: t(`${rKey}.mustahabb`, { returnObjects: true }) as string[],
      makrooh: t(`${rKey}.makrooh`, { returnObjects: true }) as string[],
      note: t(`${rKey}.note`, { defaultValue: "" }),
    };
  });

  return (
    <div>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 space-y-8">
        {/* مقدمة */}
        <div className="rounded-3xl border border-primary/10 bg-primary-soft/45 p-6 shadow-soft bg-islamic-pattern">
          <h2 className="font-display text-xl font-bold text-primary mb-3.5">
            {t("intro.title")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-3 text-sm">
            <div className="rounded-2xl bg-card border border-border p-4 shadow-sm hover:shadow-soft transition-shadow duration-300">
              <div className="font-bold text-error-foreground mb-1.5 flex items-center gap-1.5">
                <LucideIcon name="circleDot" size={12} className="text-red-500" />
                <span>{t("intro.rukn_title")}</span>
              </div>
              <p className="text-foreground/75 leading-relaxed text-xs">
                {t("intro.rukn_body")}
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-4 shadow-sm hover:shadow-soft transition-shadow duration-300">
              <div className="font-bold text-warning-foreground mb-1.5 flex items-center gap-1.5">
                <LucideIcon name="circleAlert" size={12} className="text-amber-500" />
                <span>{t("intro.wajib_title")}</span>
              </div>
              <p className="text-foreground/75 leading-relaxed text-xs">
                {t("intro.wajib_body")}
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-4 shadow-sm hover:shadow-soft transition-shadow duration-300">
              <div className="font-bold text-success-foreground mb-1.5 flex items-center gap-1.5">
                <LucideIcon name="circleCheck" size={12} className="text-emerald-500" />
                <span>{t("intro.sunnah_title")}</span>
              </div>
              <p className="text-foreground/75 leading-relaxed text-xs">
                {t("intro.sunnah_body")}
              </p>
            </div>
          </div>
        </div>

        {/* الأركان */}
        <div className="grid gap-6">
          {arkaanList.map((rukn) => (
            <RuknCard key={rukn.id} rukn={rukn} />
          ))}
        </div>

        {/* آية ختامية */}
        <div className="rounded-3xl border border-primary/10 bg-primary-soft/40 p-6 text-center relative overflow-hidden bg-islamic-pattern">
          <p className="font-serif text-xl leading-loose text-foreground font-semibold">
            {t("conclusion.verse")}
          </p>
          <div className="mt-2 text-xs text-muted-foreground">{t("conclusion.source")}</div>
        </div>
      </div>
    </div>
  );
}
