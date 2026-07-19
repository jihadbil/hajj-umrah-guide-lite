// ===================================================
// duas.tsx — صفحة الأدعية والأذكار المأثورة
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, DuaCard } from "@/components/PageHeader";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

// تعريف مسار الصفحة وبيانات SEO الخاصة بها
export const Route = createFileRoute("/duas")({
  component: DuasPage,
  head: () => ({
    meta: [
      { title: "الأدعية والأذكار — مرشد" },
      {
        name: "description",
        content:
          "مجموعة من الأدعية والأذكار المأثورة للعمرة: التلبية، دعاء الطواف، دعاء الصفا والمروة، وأذكار عامة.",
      },
    ],
  }),
});

const groupsKeys = [
  { key: "talbiyah" },
  { key: "tawaf" },
  { key: "sai" },
  { key: "general" },
] as const;

// ---- مكوّن صفحة الأدعية ----
function DuasPage() {
  const { t } = useTranslation("duas");

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
    document.title = `${t("title")} — ${brandName}`;
  }, [t]);

  const groupsList = groupsKeys.map((group) => {
    const groupKey = `groups.${group.key}`;
    const itemsRaw = t(`${groupKey}.items`, { returnObjects: true }) as any[];
    const items = Array.isArray(itemsRaw) ? itemsRaw.map((item) => ({
      title: item.title,
      arabic: item.arabic,
      translation: item.translation || undefined,
      source: item.source || undefined,
    })) : [];

    return {
      title: t(`${groupKey}.title`),
      items,
    };
  });

  return (
    <div>
      {/* رأس الصفحة مع العنوان والوصف */}
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      {/* قائمة المجموعات — كل مجموعة في قسم مستقل */}
      <div className="mx-auto max-w-5xl px-4 py-12 space-y-10">
        {groupsList.map((g) => (
          <section key={g.title}>
            {/* عنوان المجموعة مع خط فاصل على الجانبين */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
                {g.title}
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* بطاقات الأدعية — شبكتين في الشاشات الكبيرة */}
            <div className="grid gap-5 md:grid-cols-2">
              {g.items.map((d) => (
                <DuaCard
                  key={d.title}
                  title={d.title}
                  arabic={d.arabic}
                  translation={d.translation}
                  source={d.source}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
