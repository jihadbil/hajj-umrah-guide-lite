// ===================================================
// tips.tsx — صفحة نصائح وإرشادات المعتمر مع حقيبة المعتمر التفاعلية
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";
import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// تعريف مسار الصفحة وبيانات SEO
export const Route = createFileRoute("/tips")({
  component: TipsPage,
  head: () => ({
    meta: [
      { title: "نصائح الرحلة — إرشادات للمعتمر" },
      {
        name: "description",
        content:
          "حقيبة المعتمر التفاعلية لتجهيز لوازم السفر، بالإضافة لنصائح صحية وتنظيمية وروحانية لرحلة ميسّرة ومباركة.",
      },
    ],
  }),
});

const categoryKeys = [
  { key: "documents", icon: "📄" },
  { key: "worship", icon: "🕋" },
  { key: "hygiene", icon: "🧼" },
  { key: "tech", icon: "🔌" },
] as const;

const tipsGroupKeys = [
  { key: "health", icon: "🩺" },
  { key: "spiritual", icon: "🌿" },
] as const;

function TipsPage() {
  const { t } = useTranslation("tips");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [isResetOpen, setIsResetOpen] = useState(false);

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
    document.title = `${t("title")} — ${brandName}`;
  }, [t]);

  // تحميل البيانات المخزنة عند تحميل الصفحة أول مرة
  useEffect(() => {
    const saved = localStorage.getItem("umrah_packing_checklist");
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading checklist from localStorage", e);
      }
    }
  }, []);

  // دالة لتعديل حالة عنصر وحفظها
  const toggleItem = (id: string) => {
    const updated = {
      ...checkedItems,
      [id]: !checkedItems[id],
    };
    setCheckedItems(updated);
    localStorage.setItem("umrah_packing_checklist", JSON.stringify(updated));
  };

  // دالة لإعادة تهيئة الحقيبة وتصفيرها
  const handleResetConfirm = () => {
    setCheckedItems({});
    localStorage.removeItem("umrah_packing_checklist");
    setIsResetOpen(false);
  };

  const packingCategories = categoryKeys.map((cat) => {
    const catKey = `bag.categories.${cat.key}`;
    const itemsRaw = t(`${catKey}.items`, { returnObjects: true }) as any[];
    const items = Array.isArray(itemsRaw) ? itemsRaw.map((item) => ({
      id: item.id,
      text: item.text,
    })) : [];

    return {
      title: t(`${catKey}.title`),
      icon: cat.icon,
      items,
    };
  });

  const tipsGroups = tipsGroupKeys.map((group) => {
    const groupKey = `tips.${group.key}`;
    const items = t(`${groupKey}.items`, { returnObjects: true, defaultValue: [] }) as string[];
    return {
      title: t(`${groupKey}.title`),
      icon: group.icon,
      items: Array.isArray(items) ? items : [],
    };
  });

  // حساب إحصائيات الحقيبة
  const totalItems = packingCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / totalItems) * 100) || 0;

  return (
    <div className="pb-16">
      {/* رأس الصفحة */}
      <PageHeader
        eyrow={t("eyebrow")} // Fallback in PageHeader uses eyebrow but keep it consistent
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 space-y-12">
        {/* ================= قسم حقيبة المعتمر التفاعلية ================= */}
        <section className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 shadow-soft relative overflow-hidden bg-islamic-pattern">
          {/* Mosque background decor */}
          <div className="absolute -top-12 -left-12 opacity-5 pointer-events-none">
            <LucideIcon name="briefcase" size={144} className="text-gold" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/40 pb-6 mb-6">
            <div className="text-right">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-bold text-gold">
                <LucideIcon name="briefcase" size={12} />
                <span>{t("bag.badge")}</span>
              </span>
              <h2 className="font-display text-2xl font-bold text-foreground mt-2 md:text-3xl">
                {t("bag.title")}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {t("bag.subtitle")}
              </p>
            </div>

            <button
              onClick={() => setIsResetOpen(true)}
              className="self-start sm:self-center rounded-xl border border-red-200 bg-red-50/50 hover:bg-red-50 hover:text-red-700 px-4 py-2.5 text-xs font-bold text-red-600 transition-colors cursor-pointer"
            >
              {t("bag.resetBtn")}
            </button>
          </div>

          {/* شريط التقدم الفاخر */}
          <div className="bg-primary-soft/30 rounded-2xl p-4.5 mb-8 border border-primary/10">
            <div className="flex justify-between items-center mb-2.5">
              <span className="text-xs font-bold text-foreground">{t("bag.progressTitle")}</span>
              <span className="text-xs font-bold text-primary">
                {t("bag.progressLabel", { percent: progressPercent, count: checkedCount, total: totalItems })}
              </span>
            </div>
            <div className="h-3.5 rounded-full bg-border overflow-hidden p-[1.5px] shadow-inner">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-primary transition-all duration-500 shadow-[0_0_6px_rgba(45,106,79,0.5)]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {progressPercent === 100 && (
              <div className="mt-3 text-center text-xs font-bold text-emerald-700 animate-bounce">
                {t("bag.progressCompleted")}
              </div>
            )}
          </div>

          {/* شبكة التصنيفات */}
          <div className="grid gap-6 md:grid-cols-2">
            {packingCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm hover:shadow-soft transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center gap-3 border-b border-border/30 pb-3.5 mb-4 justify-start">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-gold-green text-white shadow-sm">
                    <LucideIcon name={category.icon} size={16} />
                  </div>
                  <h3 className="font-display text-base font-bold text-primary">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.items.map((item) => {
                    const isChecked = !!checkedItems[item.id];
                    return (
                      <div
                        key={item.id}
                        className={`flex items-start gap-3 rounded-xl p-3 border transition-all duration-300 ${
                          isChecked
                            ? "bg-primary-soft/20 border-primary/20 text-muted-foreground"
                            : "bg-card border-border text-foreground hover:border-primary/20 hover:bg-primary-soft/5"
                        }`}
                      >
                        <input
                          type="checkbox"
                          id={item.id}
                          checked={isChecked}
                          onChange={() => toggleItem(item.id)}
                          className="mt-1 h-4.5 w-4.5 rounded border-border text-primary focus:ring-primary/30 cursor-pointer"
                        />
                        <label
                          htmlFor={item.id}
                          className={`text-xs leading-relaxed transition-all select-none cursor-pointer ${isChecked ? "line-through opacity-75 font-medium" : "font-semibold"}`}
                        >
                          {item.text}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= قسم النصائح والإرشادات العامة ================= */}
        <section className="grid gap-6 md:grid-cols-2">
          {tipsGroups.map((group) => (
            <article
              key={group.title}
              className="group rounded-3xl border border-border/60 bg-card p-6 md:p-8 shadow-soft hover:shadow-md hover:border-primary/20 transition-all duration-300 relative overflow-hidden bg-islamic-pattern text-right"
            >
              {/* Floating decor */}
              <div className="absolute -top-6 -left-6 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <LucideIcon name={group.icon} size={72} className="text-gold" />
              </div>

              <div className="mb-6 flex items-center gap-3 relative z-10 justify-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold-green text-white shadow-soft border border-white/5 group-hover:scale-105 transition-transform duration-300">
                  <LucideIcon name={group.icon} size={20} />
                </div>
                <h2 className="font-display text-2xl font-bold text-[#1B4332] dark:text-[#C5A85C]">
                  {group.title}
                </h2>
              </div>

              <ul className="space-y-4 pr-1 relative z-10">
                {group.items.map((t, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3.5 text-foreground/80 leading-relaxed text-sm"
                  >
                    {/* Bullet point */}
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 shadow-sm" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>

      {/* reset alert dialog */}
      <AlertDialog open={isResetOpen} onOpenChange={setIsResetOpen}>
        <AlertDialogContent
          className="rounded-3xl border border-border bg-card text-right"
          dir="rtl"
        >
          <AlertDialogHeader>
            <AlertDialogTitle className="font-display text-lg font-bold text-foreground">
              {t("dialog.title")}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-muted-foreground mt-2">
              {t("dialog.desc")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-6 flex gap-3 justify-end">
            <AlertDialogCancel className="rounded-xl border border-border px-4 py-2.5 text-xs font-semibold cursor-pointer">
              {t("dialog.cancel")}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleResetConfirm}
              className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 text-xs font-semibold cursor-pointer"
            >
              {t("dialog.confirm")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
