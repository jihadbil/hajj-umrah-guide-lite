// ===================================================
// contact.tsx — صفحة "اتصل بنا" ونموذج التواصل
// ===================================================

import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "اتصل بنا — مرشد" },
      {
        name: "description",
        content:
          "تواصل مع فريق منصة مرشد لإرسال المقترحات أو الاستفسارات أو الملاحظات حول دليل العمرة الشامل.",
      },
    ],
  }),
});

function ContactPage() {
  const { t } = useTranslation("contact");

  // تحديث عنوان تبويب المتصفح ديناميكياً
  useEffect(() => {
    const brandName = t("brand.name", { ns: "common", defaultValue: "مرشد" });
    document.title = `${t("title")} — ${brandName}`;
  }, [t]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "suggestion",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Mocking API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "suggestion", message: "" });
    }, 1200);
  };

  return (
    <div>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* كارد معلومات التواصل */}
          <div className="md:col-span-5 space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8 bg-islamic-pattern relative overflow-hidden transition-all duration-300 hover:border-gold/20 shadow-soft">
              <div className="absolute top-2 left-2 opacity-5 pointer-events-none">
                <LucideIcon name="📞" size={96} className="text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                {t("channels.title")}
              </h3>

              <div className="space-y-6 text-right">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/20">
                    <LucideIcon name="document" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{t("channels.email_title")}</h4>
                    <p className="text-xs text-muted-foreground mt-1">support@morshid.app</p>
                    <p className="text-[10px] text-gold mt-0.5">{t("channels.email_sub")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/20">
                    <LucideIcon name="phone" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">
                      {t("channels.support_title")}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1" dir="ltr">
                      +966 50 000 0000
                    </p>
                    <p className="text-[10px] text-gold mt-0.5">{t("channels.support_sub")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/20">
                    <LucideIcon name="mappin" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{t("channels.address_title")}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {t("channels.address_body")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* بطاقة تقييم */}
            <div className="rounded-3xl border border-gold/15 bg-gradient-to-tr from-[#1B4332]/20 to-card/50 p-6 text-center">
              <p className="font-serif text-sm leading-relaxed text-[#1B4332] dark:text-[#C5A85C]">
                {t("channels.quote")}
              </p>
              <span className="block text-[10px] text-muted-foreground mt-2">
                {t("channels.quote_sub")}
              </span>
            </div>
          </div>

          {/* نموذج التواصل (Form) */}
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 text-right">
                {t("form.title")}
              </h3>

              {submitted ? (
                <div className="text-center py-12 px-4 space-y-4 animate-fade-in-up">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
                    <LucideIcon name="check" size={28} />
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground">
                    {t("form.success_title")}
                  </h4>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    {t("form.success_desc")}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2.5 text-xs font-semibold hover:bg-muted transition-colors cursor-pointer"
                  >
                    {t("form.send_another")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-right">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-bold text-foreground">
                        {t("form.name")} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder={t("form.name_placeholder")}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold text-foreground">
                        {t("form.email")} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder={t("form.email_placeholder")}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground text-left placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-bold text-foreground">
                      {t("form.subject")}
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20view%20box%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1em_1em] bg-[position:left_1rem_center] bg-no-repeat"
                    >
                      <option value="suggestion">{t("form.subject_options.suggestion")}</option>
                      <option value="bug">{t("form.subject_options.bug")}</option>
                      <option value="fiqh">{t("form.subject_options.fiqh")}</option>
                      <option value="other">{t("form.subject_options.other")}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-bold text-foreground">
                      {t("form.message")} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder={t("form.message_placeholder")}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors resize-y min-h-[120px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1B4332] dark:bg-primary hover:bg-[#14342A] dark:hover:bg-primary/95 text-white py-3 text-sm font-bold shadow-md transition-all active:scale-98 disabled:opacity-55 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>{t("form.sending")}</span>
                      </span>
                    ) : (
                      <>
                        <LucideIcon name="spirituality" size={16} />
                        <span>{t("form.submit")}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
