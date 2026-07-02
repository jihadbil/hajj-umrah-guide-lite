import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, StepCard } from "@/components/PageHeader";

export const Route = createFileRoute("/umrah")({
  component: UmrahPage,
  head: () => ({
    meta: [
      { title: "مناسك العمرة — الطواف والسعي والتقصير" },
      { name: "description", content: "خطوات العمرة بالتفصيل: الإحرام، الطواف بالبيت سبعاً، السعي بين الصفا والمروة، ثم الحلق أو التقصير." },
    ],
  }),
});

const steps = [
  { title: "الاستعداد والإحرام", body: "الاغتسال والتطيّب في البدن (لا في ثياب الإحرام)، ولبس ثوبي الإحرام للرجل، ونيّة الدخول في العمرة من الميقات، مع التلبية." },
  { title: "التلبية إلى مكة", body: "الإكثار من قول: «لبّيك اللهم بعمرة، لبّيك اللهم لبّيك، لبّيك لا شريك لك لبّيك، إنّ الحمد والنعمة لك والملك، لا شريك لك» حتى يبدأ الطواف." },
  { title: "الطواف بالبيت سبعة أشواط", body: "يبدأ من الحجر الأسود، ويجعل البيت عن يساره، ويستلم الحجر أو يشير إليه في بداية كل شوط قائلاً: «الله أكبر»، ويرمل الرجل في الأشواط الثلاثة الأولى." },
  { title: "ركعتان خلف مقام إبراهيم", body: "بعد إتمام الطواف، يصلّي ركعتين خلف المقام إن تيسّر، يقرأ في الأولى الكافرون وفي الثانية الإخلاص، ثم يشرب من ماء زمزم." },
  { title: "السعي بين الصفا والمروة", body: "يبدأ من الصفا فيرقى عليه ويستقبل القبلة ويكبّر ويدعو، ثم ينزل ماشياً إلى المروة (شوط)، ثم يعود إلى الصفا (شوط ثانٍ)، وهكذا حتى سبعة أشواط تنتهي عند المروة." },
  { title: "الحلق أو التقصير", body: "بعد إتمام السعي، يحلق الرجل رأسه كاملاً (أفضل) أو يقصّر من جميع شعره، وتقصّر المرأة قدر أنملة من ضفائرها. وبذلك تتم العمرة ويحلّ من إحرامه." },
];

const pillars = ["الإحرام", "الطواف", "السعي", "الحلق أو التقصير"];

function UmrahPage() {
  return (
    <div>
      <PageHeader
        eyebrow="مناسك العمرة"
        title="خطوات العمرة بالترتيب"
        description="أركان وخطوات العمرة بأسلوب واضح ومبسّط ليؤدّيها المعتمر على أكمل وجه."
      />
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-10 rounded-3xl border border-primary/20 bg-primary-soft/60 p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-primary">أركان العمرة الأربعة</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {pillars.map((p, i) => (
              <span key={p} className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-soft">
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
