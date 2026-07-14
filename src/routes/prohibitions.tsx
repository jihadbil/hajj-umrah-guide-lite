// ===================================================
// prohibitions.tsx — صفحة محظورات الإحرام
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

// تعريف مسار الصفحة وبيانات SEO
export const Route = createFileRoute("/prohibitions")({
  component: ProhibitionsPage,
  head: () => ({
    meta: [
      { title: "محظورات الإحرام — مرشد" },
      { name: "description", content: "محظورات الإحرام التسعة التي يجب على المعتمر اجتنابها بعد دخوله في النسك." },
    ],
  }),
});

// ---- قائمة المحظورات التسعة ----
// كل محظور يحتوي على: رقم، عنوان، أيقونة، شرح، دليل (اختياري)، استثناء (اختياري)
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

// ---- الأسئلة الشائعة حول محظورات الإحرام ----
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

// ---- مكوّن صفحة المحظورات ----
function ProhibitionsPage() {
  return (
    <div>
      {/* رأس الصفحة */}
      <PageHeader
        eyebrow="أحكام الإحرام"
        title="محظورات الإحرام"
        description="الأمور التي يُمنع منها المحرم بعد دخوله في النسك حتى يتحلل منه، مع الأدلة والتنبيهات."
      />

      <div className="mx-auto max-w-4xl px-4 py-12">

        {/* تنبيه فقهي مهم يظهر في أعلى الصفحة */}
        <div className="mb-8 rounded-3xl border border-amber-250 bg-amber-50/70 p-5 md:p-6 shadow-soft relative overflow-hidden">
          <div className="flex items-start gap-3.5 relative z-10">
            <span className="text-2xl mt-0.5 animate-gold-pulse">⚠️</span>
            <div>
              <h3 className="font-display font-bold text-amber-900 text-base mb-1.5">تنبيه فقهي مهم للمعتمر</h3>
              <p className="text-sm text-amber-800 leading-relaxed font-medium">
                من ارتكب محظورًا من محظورات الإحرام متعمدًا، عالمًا بالحكم، مختارًا، فإنه يأثم، ويترتب على بعض المحظورات فدية بحسب نوعها. أما من وقع في المحظور نسيانًا أو جهلًا أو إكراهًا فهذه المسألة فيها تفصيل يختلف باختلاف نوع المحظور.
              </p>
            </div>
          </div>
        </div>

        {/* قائمة المحظورات التسعة */}
        <div className="grid gap-5 mb-14">
          {prohibitions.map((p) => (
            <div key={p.n} className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-md hover:border-primary/25 transition-all duration-300 relative overflow-hidden bg-islamic-pattern">
              {/* Subtle background floating icon */}
              <div className="absolute -top-6 -left-6 text-7xl opacity-5 select-none font-display text-gold pointer-events-none group-hover:scale-110 transition-transform duration-500">{p.icon}</div>
              
              <div className="flex items-start gap-4">
                {/* رقم المحظور */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold-green font-display text-lg font-bold text-white shadow-soft border border-white/10">
                  {p.n}
                </div>

                <div className="flex-1 min-w-0 text-right">
                  {/* عنوان المحظور وأيقونته */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl transition-transform duration-300 group-hover:scale-110">{p.icon}</span>
                    <h3 className="font-display text-lg font-bold text-foreground tracking-wide leading-none">{p.title}</h3>
                  </div>

                  {/* شرح المحظور */}
                  <p className="text-sm text-foreground/80 leading-relaxed">{p.body}</p>

                  {/* الدليل الشرعي — يظهر فقط إن وُجد */}
                  {p.daleel && (
                    <div className="mt-3.5 rounded-xl bg-primary-soft/40 border border-primary/10 p-4">
                      <div className="text-[10px] font-bold text-primary mb-1.5 uppercase">الدليل الشرعي</div>
                      <p className="font-display text-sm leading-loose text-foreground font-semibold">{p.daleel}</p>
                    </div>
                  )}

                  {/* الاستثناء أو التنبيه — يظهر فقط إن وُجد */}
                  {p.note && (
                    <div className="mt-3.5 rounded-xl bg-blue-50/70 border border-blue-100 p-3.5 text-xs text-blue-800 leading-relaxed shadow-sm">
                      <span className="font-bold">💡 استثناء وتنبيه: </span>{p.note}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* قسم الأسئلة الشائعة */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <h2 className="font-display text-xl font-bold text-foreground px-2">أسئلة شائعة وتنبيهات</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-gold/20 transition-all duration-300 bg-islamic-pattern">
                <div className="flex items-start gap-3">
                  {/* أيقونة علامة الاستفهام */}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold-green text-white text-[10px] font-bold border border-white/5 mt-0.5 shadow-sm">
                    ؟
                  </span>
                  <div className="text-right">
                    {/* السؤال */}
                    <div className="font-bold text-foreground text-sm mb-1.5">{f.q}</div>
                    {/* الجواب */}
                    <div className="text-sm text-foreground/75 leading-relaxed">{f.a}</div>
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
