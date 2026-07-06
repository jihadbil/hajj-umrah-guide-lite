// ===================================================
// tips.tsx — صفحة نصائح وإرشادات المعتمر
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

// تعريف مسار الصفحة وبيانات SEO
export const Route = createFileRoute("/tips")({
  component: TipsPage,
  head: () => ({
    meta: [
      { title: "نصائح الرحلة — إرشادات للمعتمر" },
      { name: "description", content: "نصائح صحية وتنظيمية وروحانية للمعتمرين لرحلة ميسّرة ومباركة." },
    ],
  }),
});

// ---- مجموعات النصائح مصنّفة حسب الموضوع ----
const groups = [
  {
    title: "قبل السفر",
    icon: "🧳",
    items: [
      "التوبة الصادقة وردّ المظالم إلى أهلها.",
      "قضاء الديون أو الاستئذان من أصحابها.",
      "تعلّم صفة العمرة قبل الإحرام.",
      "تجهيز حقيبة صغيرة تحوي الأساسيات فقط.",
      "التطعيمات المطلوبة ومراجعة الطبيب لأصحاب الأمراض المزمنة.",
    ],
  },
  {
    title: "نصائح صحية",
    icon: "🩺",
    items: [
      "الإكثار من شرب الماء وتجنّب الجفاف.",
      "استخدام مظلّة أو غطاء للرأس (لغير المُحرم) لتجنّب ضربة الشمس.",
      "لبس أحذية مريحة وأخذ حذاء احتياطي.",
      "حمل كمامة عند الازدحام لتفادي العدوى.",
      "أخذ قسط كافٍ من الراحة بين المناسك.",
    ],
  },
  {
    title: "أثناء المناسك",
    icon: "🕋",
    items: [
      "الحرص على الطهارة قبل الطواف.",
      "الرفق بالنفس والآخرين، وتجنّب المزاحمة الشديدة.",
      "الإكثار من الذكر والدعاء في كل الأوقات.",
      "حفظ بطاقة تعريفية بها بيانات الحملة والجوال.",
      "تحديد نقطة تجمّع مع الرفقة عند التفرّق.",
    ],
  },
  {
    title: "نصائح روحانية",
    icon: "🌿",
    items: [
      "استحضار النيّة الخالصة لله في كل شعيرة.",
      "التخلّق بحسن الخلق والصبر على الأذى.",
      "الابتعاد عن الرفث والفسوق والجدال.",
      "اغتنام الأوقات الفاضلة كالثلث الأخير من الليل.",
      "الدعاء للأهل والأحباب والمسلمين جميعاً.",
    ],
  },
];

// ---- مكوّن صفحة النصائح ----
function TipsPage() {
  return (
    <div>
      {/* رأس الصفحة */}
      <PageHeader
        eyebrow="نصائح الرحلة"
        title="إرشادات للمعتمر"
        description="نصائح عملية تجعل رحلتك أسهل وأكثر خشوعاً وطمأنينة."
      />

      {/* شبكة بطاقات النصائح — عمودان في الشاشات الكبيرة */}
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            // بطاقة مجموعة نصائح
            <article key={g.title} className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft md:p-8">
              {/* رأس البطاقة: أيقونة + عنوان المجموعة */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-2xl">{g.icon}</div>
                <h2 className="font-display text-2xl font-bold text-primary">{g.title}</h2>
              </div>

              {/* قائمة النصائح */}
              <ul className="space-y-3">
                {g.items.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-foreground/80">
                    {/* نقطة زخرفية بلون المشروع الأساسي */}
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
