// ===================================================
// about.tsx — صفحة "من نحن" التعريفية بالمنصة
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, StepCard } from "@/components/PageHeader";
import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "من نحن — مرشد" },
      {
        name: "description",
        content:
          "تعرّف على منصة مرشد ورسالتها في تقديم دليل تفاعلي وشامل للمعتمرين وحجاج بيت الله الحرام.",
      },
    ],
  }),
});

function AboutPage() {
  const { t } = useTranslation("about");

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

      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* قسم القصة والرسالة */}
        <section className="mb-16 grid gap-10 md:grid-cols-2 items-center">
          <div className="text-right space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-bold text-gold">
              {t("mission.badge")}
            </span>
            <h2 className="font-display text-3xl font-extrabold text-foreground tracking-wide">
              {t("mission.title")}
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {t("mission.p1")}
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {t("mission.p2")}
            </p>
          </div>
          <div className="relative flex justify-center">
            {/* Visual Decorative Box */}
            <div className="relative w-full max-w-sm rounded-3xl border border-gold/20 bg-gradient-to-tr from-[#1B4332]/40 to-[#14342A]/20 p-8 shadow-xl bg-islamic-pattern text-center overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="mx-auto h-24 w-24 items-center justify-center rounded-3xl bg-[#FAF6F0] border border-gold/30 p-2.5 shadow-soft transition-all duration-500 hover:scale-105 hover:shadow-gold/20 hover:border-gold flex mb-4">
                <img src="/images/brand/logo-full.png?v=3" alt={t("brand.name")} className="h-full w-full object-contain" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{t("card.title")}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {t("card.quote")}
              </p>
              <div className="mt-6 flex justify-center gap-4 text-xs font-semibold">
                <span className="rounded-xl bg-card border border-border px-3 py-2">{t("card.badge1")}</span>
                <span className="rounded-xl bg-card border border-border px-3 py-2">{t("card.badge2")}</span>
                <span className="rounded-xl bg-card border border-border px-3 py-2">{t("card.badge3")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* قيمنا الأساسية */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground">
              {t("values.title")}
            </h2>
            <p className="text-xs text-muted-foreground mt-1.5 max-w-md mx-auto">
              {t("values.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <StepCard n="1" title={t("values.v1_title")}>
              <p className="text-sm">
                {t("values.v1_body")}
              </p>
            </StepCard>
            <StepCard n="2" title={t("values.v2_title")}>
              <p className="text-sm">
                {t("values.v2_body")}
              </p>
            </StepCard>
            <StepCard n="3" title={t("values.v3_title")}>
              <p className="text-sm">
                {t("values.v3_body")}
              </p>
            </StepCard>
          </div>
        </section>

        {/* مميزات منصة مرشد */}
        <section className="rounded-3xl border border-border bg-card p-6 md:p-8 bg-islamic-pattern relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-2 left-2 opacity-5 pointer-events-none">
            <LucideIcon name="🕋" size={120} className="text-gold" />
          </div>
          <h3 className="font-display text-xl font-bold text-[#1B4332] dark:text-[#C5A85C] border-r-4 border-gold pr-3 mb-6">
            {t("features.title")}
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/20">
                <LucideIcon name="🧭" size={16} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">{t("features.f1_title")}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {t("features.f1_body")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/20">
                <LucideIcon name="🤲" size={16} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">{t("features.f2_title")}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {t("features.f2_body")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/20">
                <LucideIcon name="⚠️" size={16} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">{t("features.f3_title")}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {t("features.f3_body")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/20">
                <LucideIcon name="🎒" size={16} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">{t("features.f4_title")}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {t("features.f4_body")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* تواصلوا معنا */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            {t("footer.text")}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1B4332] dark:bg-primary text-white px-5 py-2.5 text-xs font-bold hover:bg-[#14342A] dark:hover:bg-primary/95 hover:shadow-soft hover:translate-x-[-2px] transition-all focus-visible:outline-none mt-4"
          >
            <LucideIcon name="contact" size={14} />
            <span>{t("footer.button")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
