import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, StepCard } from "@/components/PageHeader";

export const Route = createFileRoute("/hajj")({
  component: HajjPage,
  head: () => ({
    meta: [
      { title: "مناسك الحج — خطوات وأركان الحج بالترتيب" },
      { name: "description", content: "شرح مبسّط لمناسك الحج: الإحرام، التلبية، الوقوف بعرفة، المزدلفة، منى، رمي الجمرات، الطواف والسعي." },
    ],
  }),
});

const steps = [
  { title: "الإحرام من الميقات", body: "الاغتسال، ولبس ثوبي الإحرام للرجال، ونيّة الدخول في النسك من الميقات، ثم التلبية: «لبّيك اللهم لبّيك، لبّيك لا شريك لك لبّيك، إنّ الحمد والنعمة لك والملك، لا شريك لك»." },
  { title: "التوجّه إلى منى (يوم التروية ٨ ذي الحجة)", body: "المبيت في منى وأداء الصلوات الخمس قصراً بلا جمع (الظهر والعصر والمغرب والعشاء وفجر التاسع)." },
  { title: "الوقوف بعرفة (٩ ذي الحجة)", body: "التوجه إلى عرفة بعد شروق الشمس، وصلاة الظهر والعصر جمعاً وقصراً، والإكثار من الدعاء والذكر حتى غروب الشمس. الوقوف بعرفة ركن الحج الأعظم." },
  { title: "المبيت بالمزدلفة", body: "بعد غروب شمس التاسع يتوجه الحاج إلى مزدلفة، فيصلي المغرب والعشاء جمعاً وقصراً، ويبيت بها، ويلتقط حصى الجمار (٧٠ حصاة تكفي)." },
  { title: "رمي جمرة العقبة والنحر والحلق", body: "يوم النحر (١٠ ذي الحجة): رمي جمرة العقبة الكبرى بسبع حصيات، ثم ذبح الهدي، ثم الحلق أو التقصير، وبذلك يتحلّل التحلّل الأصغر." },
  { title: "طواف الإفاضة والسعي", body: "التوجه إلى مكة لأداء طواف الإفاضة (ركن)، ثم السعي بين الصفا والمروة لمن كان متمتعاً أو لم يسعَ مع طواف القدوم." },
  { title: "أيام التشريق ورمي الجمرات", body: "المبيت في منى ليالي (١١، ١٢، ١٣)، ورمي الجمرات الثلاث كل يوم بعد الزوال (الصغرى فالوسطى فالكبرى)، لمن تعجّل يخرج في الثاني عشر." },
  { title: "طواف الوداع", body: "آخر ما يفعله الحاج قبل مغادرة مكة هو طواف الوداع سبعة أشواط، ولا وداع على الحائض والنفساء." },
];

const pillars = ["الإحرام", "الوقوف بعرفة", "طواف الإفاضة", "السعي", "الترتيب بين هذه الأركان"];

function HajjPage() {
  return (
    <div>
      <PageHeader
        eyebrow="مناسك الحج"
        title="خطوات الحج بالترتيب"
        description="دليل عملي مرتّب يومًا بيوم لأداء مناسك الحج على السنة النبوية."
      />
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-10 rounded-3xl border border-primary/20 bg-primary-soft/60 p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-primary">أركان الحج الخمسة</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {pillars.map((p, i) => (
              <span key={p} className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft">
                <span className="text-primary">{i + 1}.</span> {p}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          {steps.map((s, i) => (
            <StepCard key={s.title} n={i + 1} title={s.title}>
              <p>{s.body}</p>
            </StepCard>
          ))}
        </div>
      </div>
    </div>
  );
}
