// ===================================================
// wajibaat.tsx — صفحة الواجبات والسنن والمكروهات والمستحبات
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";
import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/wajibaat")({
  component: WajibaatPage,
  head: () => ({
    meta: [
      { title: "الواجبات والسنن — مرشد" },
      {
        name: "description",
        content: "واجبات العمرة وسننها ومستحباتها ومكروهاتها — دليل فقهي شامل لكل معتمر.",
      },
    ],
  }),
});

type TabId = "wajibaat" | "sunan" | "mustahabbat" | "makrohaat";

// ---- مكوّنات التبويبات ----
function WajibaatTab() {
  const { t } = useTranslation("wajibaat");

  const wajibaatList = [
    {
      title: t("wajibaat_items.miqat.title"),
      icon: "📍",
      body: t("wajibaat_items.miqat.body"),
      daleel: t("wajibaat_items.miqat.daleel"),
      consequence: t("wajibaat_items.miqat.consequence"),
    },
    {
      title: t("wajibaat_items.halq.title"),
      icon: "✂️",
      body: t("wajibaat_items.halq.body"),
      daleel: t("wajibaat_items.halq.daleel"),
      consequence: t("wajibaat_items.halq.consequence"),
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-2xl border border-error-border bg-error-surface p-4">
        <p className="text-sm text-error-foreground leading-relaxed font-medium">
          {t("banners.wajibaat")}
        </p>
      </div>
      {wajibaatList.map((w, i) => (
        <div
          key={i}
          className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-md hover:border-primary/20 transition-all duration-300 relative overflow-hidden bg-islamic-pattern"
        >
          <div className="flex items-start gap-3.5 mb-3.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 shadow-sm">
              <LucideIcon name={w.icon} size={18} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground leading-tight">
              {w.title}
            </h3>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed mb-4">{w.body}</p>
          {w.daleel && (
            <div className="rounded-xl bg-primary-soft/40 border border-primary/10 p-4 mb-4">
              <div className="text-[10px] font-bold text-primary mb-1.5 uppercase">
                {t("labels.daleel")}
              </div>
              <p className="font-serif text-sm leading-loose text-foreground font-semibold">
                {w.daleel}
              </p>
            </div>
          )}
          <div className="rounded-xl bg-warning-surface border border-warning-border p-4">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-warning-foreground mb-1.5 uppercase">
              <LucideIcon name="⚠️" size={10} />
              <span>{t("labels.consequence")}</span>
            </div>
            <p className="text-xs text-warning-foreground leading-relaxed font-medium">
              {w.consequence}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SunanTab() {
  const { t } = useTranslation("wajibaat");

  const sunanGroups = [
    {
      title: t("sunan_items.ihram.title"),
      icon: "🕋",
      items: t("sunan_items.ihram.items", { returnObjects: true }) as string[],
    },
    {
      title: t("sunan_items.tawaf.title"),
      icon: "🌀",
      items: t("sunan_items.tawaf.items", { returnObjects: true }) as string[],
    },
    {
      title: t("sunan_items.sai.title"),
      icon: "🏃",
      items: t("sunan_items.sai.items", { returnObjects: true }) as string[],
    },
    {
      title: t("sunan_items.halq.title"),
      icon: "✂️",
      items: t("sunan_items.halq.items", { returnObjects: true }) as string[],
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-success-border bg-success-surface p-4">
        <p className="text-sm text-success-foreground leading-relaxed font-medium">
          {t("banners.sunan")}
        </p>
      </div>
      {sunanGroups.map((group) => (
        <section key={group.title} className="space-y-3.5">
          <div className="mb-2 flex items-center gap-2 pr-1">
            <LucideIcon name={group.icon} size={20} className="text-primary" />
            <h3 className="font-display text-lg font-bold text-foreground">{group.title}</h3>
          </div>
          <div className="flex flex-col gap-3">
            {group.items && group.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-success-border/20 bg-card p-4 shadow-sm hover:shadow-soft hover:border-success-border/40 transition-all duration-300"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px] font-bold border border-white/5 shadow-sm">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function MustahabbatTab() {
  const { t } = useTranslation("wajibaat");

  const mustahabbatList = [
    {
      category: t("mustahabbat_items.haram.category"),
      icon: "🕌",
      items: t("mustahabbat_items.haram.items", { returnObjects: true }) as string[],
    },
    {
      category: t("mustahabbat_items.worship.category"),
      icon: "🤲",
      items: t("mustahabbat_items.worship.items", { returnObjects: true }) as string[],
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-info-border bg-info-surface p-4">
        <p className="text-sm text-info-foreground leading-relaxed font-medium">
          {t("banners.mustahabbat")}
        </p>
      </div>
      {mustahabbatList.map((group) => (
        <section key={group.category} className="space-y-3.5">
          <div className="mb-2 flex items-center gap-2 pr-1">
            <LucideIcon name={group.icon} size={20} className="text-primary" />
            <h3 className="font-display text-lg font-bold text-foreground">{group.category}</h3>
          </div>
          <div className="flex flex-col gap-3">
            {group.items && group.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-info-border/20 bg-card p-4 shadow-sm hover:shadow-soft hover:border-info-border/40 transition-all duration-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 shadow-sm" />
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function MakrohaatTab() {
  const { t } = useTranslation("wajibaat");

  const makrohaatList = [
    {
      category: t("makrohaat_items.ihram.category"),
      icon: "🧎",
      items: t("makrohaat_items.ihram.items", { returnObjects: true }) as string[],
    },
    {
      category: t("makrohaat_items.tawaf.category"),
      icon: "🌀",
      items: t("makrohaat_items.tawaf.items", { returnObjects: true }) as string[],
    },
    {
      category: t("makrohaat_items.sai.category"),
      icon: "🏃",
      items: t("makrohaat_items.sai.items", { returnObjects: true }) as string[],
    },
    {
      category: t("makrohaat_items.general.category"),
      icon: "⚠️",
      items: t("makrohaat_items.general.items", { returnObjects: true }) as string[],
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-warning-border bg-warning-surface p-4">
        <p className="text-sm text-warning-foreground leading-relaxed font-medium">
          {t("banners.makrohaat")}
        </p>
      </div>
      {makrohaatList.map((group) => (
        <section key={group.category} className="space-y-3.5">
          <div className="mb-2 flex items-center gap-2 pr-1">
            <LucideIcon name={group.icon} size={20} className="text-primary" />
            <h3 className="font-display text-lg font-bold text-foreground">{group.category}</h3>
          </div>
          <div className="flex flex-col gap-3">
            {group.items && group.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-warning-border/20 bg-card p-4 shadow-sm hover:shadow-soft hover:border-warning-border/40 transition-all duration-300"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white text-[10px] font-bold border border-white/5 shadow-sm">
                  !
                </span>
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

// ---- مكوّن الصفحة الرئيسي ----
function WajibaatPage() {
  const { t } = useTranslation("wajibaat");
  const [activeTab, setActiveTab] = useState<TabId>("wajibaat");

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
    document.title = `${t("title")} — ${brandName}`;
  }, [t]);

  const tabs = [
    { id: "wajibaat" as const, label: t("tabs.wajibaat"), icon: "🔴" },
    { id: "sunan" as const, label: t("tabs.sunan"), icon: "🌿" },
    { id: "mustahabbat" as const, label: t("tabs.mustahabbat"), icon: "✅" },
    { id: "makrohaat" as const, label: t("tabs.makrohaat"), icon: "⚠️" },
  ];

  return (
    <div>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* شريط التبويبات */}
        <div className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-2xl border border-border/60 bg-muted/40 p-1.5 shadow-soft">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1.5 py-3 px-2 text-center rounded-xl transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#1B4332] text-white shadow-md font-bold scale-[1.02] border-b-2 border-gold"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
              }`}
            >
              <LucideIcon
                name={tab.icon}
                size={16}
                className={activeTab === tab.id ? "text-white" : "text-muted-foreground"}
              />
              <span className="text-[11px] mt-0.5">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* محتوى التبويب */}
        <div key={activeTab} className="animate-fade-in-up">
          {activeTab === "wajibaat" && <WajibaatTab />}
          {activeTab === "sunan" && <SunanTab />}
          {activeTab === "mustahabbat" && <MustahabbatTab />}
          {activeTab === "makrohaat" && <MakrohaatTab />}
        </div>
      </div>
    </div>
  );
}
