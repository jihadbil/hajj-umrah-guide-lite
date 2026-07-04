import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/prohibitions")({
  component: ProhibitionsPage,
  head: () => ({
    meta: [
      { title: "محظورات الإحرام — مرشد" },
      { name: "description", content: "محظورات الإحرام التسعة التي يجب على المعتمر اجتنابها بعد دخوله في النسك." },
    ],
  }),
});

const prohibitions = [
  {
    n: "١",
    title: "إزالة الشعر",
    icon: "✂️",
    body: "يحرم على المحرم إزالة شعر رأسه أو بدنه عمدًا بالحلق أو النتف أو غيرهما، إلا لعذر شرعي كوجود أذى يحتاج معه إلى إزالة الشعر.",
    daleel: "﴿وَلَا تَحْلِقُوا رُءُوسَكُمْ حَتَّىٰ يَبْلُغَ الْهَدْيُ مَحِلَّهُ﴾ [البقرة: ١٩٦]",
    note: "إذا سقط الشعر بغير قصد أثناء الوضوء أو الاغتسال أو تمشيط الشعر، فلا حرج في ذلك.",
  },
  {
    n: "٢",
    title: "تقليم الأظافر",
    icon: "💅",
    body: "يحرم على المحرم تعمد قص أظافر اليدين أو القدمين حتى يتحلل من إحرامه.",
    daleel: null,
    note: "أما إذا انكسر الظفر وتأذى به، فلا بأس بإزالة الجزء المؤذي.",
  },
  {
    n: "٣",
    title: "استعمال الطيب",
    icon: "🌹",
    body: "يحرم على المحرم استعمال الطيب بعد الإحرام في بدنه أو ثوبه أو رأسه. ويدخل في الطيب: العطور، دهن العود، المسك، والبخور بقصد التطيب.",
    daleel: null,
    note: "أما الطيب الذي استعمله قبل الإحرام، فلا يضره ولو بقي أثره بعد الإحرام؛ لأن النبي ﷺ تطيب قبل إحرامه.",
  },
  {
    n: "٤",
    title: "لبس المخيط (للرجل)",
    icon: "👔",
    body: "يحرم على الرجل المحرم لبس ما فُصِّل على قدر البدن أو بعضه، كالقميص والسروال والعمامة والبرنس والجوارب والخفاف.",
    daleel: null,
    note: "يجوز له لبس النعلين، فإن لم يجد نعلين لبس الخفين. أما المرأة فليس لها لباس مخصوص للإحرام، وتلبس ما شاءت من الثياب الساترة غير المتبرجة.",
  },
  {
    n: "٥",
    title: "تغطية الرأس (للرجل)",
    icon: "🧢",
    body: "يحرم على الرجل تغطية رأسه بما يلاصقه عادة، كالطاقية أو الغترة أو العمامة.",
    daleel: null,
    note: "أما الاستظلال بالشمسية أو سقف السيارة أو الخيمة فلا حرج فيه؛ لأنه لا يعد من تغطية الرأس المنهي عنها.",
  },
  {
    n: "٦",
    title: "لبس النقاب والقفازين (للمرأة)",
    icon: "🧕",
    body: "لا تنتقب المرأة وهي محرمة، ولا تلبس القفازين.",
    daleel: null,
    note: "فإن كانت بحضرة رجال أجانب، شرع لها أن تسدل خمارها على وجهها دون أن تلبس النقاب.",
  },
  {
    n: "٧",
    title: "عقد النكاح",
    icon: "💍",
    body: "لا يجوز للمحرم أن يعقد لنفسه أو لغيره عقد زواج، ولا أن يخطب امرأة حتى يتحلل من إحرامه.",
    daleel: null,
    note: null,
  },
  {
    n: "٨",
    title: "الجماع ودواعيه",
    icon: "🔴",
    body: "الجماع من أعظم محظورات الإحرام، كما يحرم كل ما كان سببًا إليه كالمباشرة بشهوة أو التقبيل أو اللمس بشهوة.",
    daleel: null,
    note: null,
  },
  {
    n: "٩",
    title: "قتل الصيد البري",
    icon: "🦌",
    body: "يحرم على المحرم صيد الحيوانات البرية المباحة، أو الإعانة على صيدها، أو الدلالة عليها.",
    daleel: null,
    note: "أما صيد البحر فلا يدخل في هذا الحكم.",
  },
];

const faqs = [
  {
    q: "هل يجوز استخدام الصابون أو الشامبو؟",
    a: "يجوز استعمال الصابون والشامبو إذا كانا غير معطرين. أما إذا كانا يحتويان على عطر يُقصد به التطيب، فينبغي اجتنابهما أثناء الإحرام.",
  },
  {
    q: "هل يجوز لبس الساعة والنظارة؟",
    a: "نعم، يجوز لبس الساعة والنظارة وسماعات الأذن والحزام وساعة تتبع الخطوات وحمل الهاتف واستعماله؛ لأنها ليست من محظورات الإحرام.",
  },
  {
    q: "هل يجوز استخدام المظلة؟",
    a: "نعم، يجوز الاستظلال بالمظلة أو سقف السيارة أو المظلات الموجودة في الحرم، ولا يؤثر ذلك في الإحرام.",
  },
  {
    q: "هل يجوز تغيير ملابس الإحرام؟",
    a: "يجوز للمحرم تغيير ملابس الإحرام إذا اتسخت أو احتاج إلى غيرها، كما يجوز غسلها.",
  },
  {
    q: "هل يجوز الاغتسال أثناء الإحرام؟",
    a: "يجوز للمحرم الاغتسال وغسل الرأس والوضوء، ما دام لا يتعمد إزالة الشعر.",
  },
];

function ProhibitionsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="أحكام الإحرام"
        title="محظورات الإحرام"
        description="الأمور التي يُمنع منها المحرم بعد دخوله في النسك حتى يتحلل منه، مع الأدلة والتنبيهات."
      />

      <div className="mx-auto max-w-4xl px-4 py-12">

        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">⚠️</span>
            <div>
              <h3 className="font-display font-bold text-amber-900 mb-1">تنبيه فقهي مهم</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                من ارتكب محظورًا من محظورات الإحرام متعمدًا، عالمًا بالحكم، مختارًا، فإنه يأثم، ويترتب على بعض المحظورات فدية بحسب نوعها. أما من وقع في المحظور نسيانًا أو جهلًا أو إكراهًا فهذه المسألة فيها تفصيل يختلف باختلاف نوع المحظور.
              </p>
            </div>
          </div>
        </div>

        {/* Prohibitions list */}
        <div className="grid gap-4 mb-12">
          {prohibitions.map((p) => (
            <div key={p.n} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold text-white text-sm"
                  style={{ backgroundColor: "#1B4332" }}
                >
                  {p.n}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{p.icon}</span>
                    <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{p.body}</p>
                  {p.daleel && (
                    <div className="mt-3 rounded-xl bg-primary-soft border border-primary/20 p-3">
                      <div className="text-xs font-semibold text-primary mb-1">الدليل</div>
                      <p className="font-display text-sm leading-loose text-foreground">{p.daleel}</p>
                    </div>
                  )}
                  {p.note && (
                    <div className="mt-3 rounded-xl bg-blue-50 border border-blue-100 p-3 text-xs text-blue-800 leading-relaxed">
                      <span className="font-semibold">💡 استثناء: </span>{p.note}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <h2 className="font-display text-xl font-bold text-foreground px-2">أسئلة شائعة</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-3">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white mt-0.5"
                    style={{ backgroundColor: "#2D6A4F" }}
                  >
                    ؟
                  </span>
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-1.5">{f.q}</div>
                    <div className="text-sm text-foreground/70 leading-relaxed">{f.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
