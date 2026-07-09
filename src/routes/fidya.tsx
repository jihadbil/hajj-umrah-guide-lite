// ===================================================
// fidya.tsx — صفحة أحكام الفدية
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/fidya")({
  component: FidyaPage,
  head: () => ({
    meta: [
      { title: "أحكام الفدية — مرشد" },
      { name: "description", content: "أحكام الفدية في العمرة: متى تجب، وكيف تُؤدى، والفرق بين ترك الركن وترك الواجب وفعل المحظور." },
    ],
  }),
});

// ---- بيانات أقسام الفدية ----
const sections = [
  {
    id: 1,
    title: "ما المقصود بالفدية؟",
    icon: "📖",
    color: "#1B4332",
    content: `الفدية هي ما أوجبه الشرع على المحرم في بعض الحالات التي يترك فيها واجبًا من واجبات النسك، أو يفعل بعض محظورات الإحرام، على التفصيل الذي بيّنه القرآن الكريم والسنة النبوية.

وليست كل مخالفة تستوجب الفدية، بل تختلف الأحكام باختلاف نوع المخالفة وحال صاحبها. ولذلك تُعدّ الفدية من أدق أبواب فقه الحج والعمرة.`,
    list: [],
    daleel: "",
    warning: "الفدية من أدق أبواب الحج والعمرة. ينبغي للمعتمر ألا يُفتي نفسه في المسائل التي يترتب عليها دم أو فدية، بل يرجع إلى أهل العلم.",
  },
  {
    id: 2,
    title: "أولًا: من ترك ركنًا من أركان العمرة",
    icon: "🔴",
    color: "#dc2626",
    content: "إذا ترك المعتمر ركنًا من أركان العمرة — كالطواف أو السعي — فلا تجبره الفدية أصلًا، بل يجب عليه الإتيان بذلك الركن؛ لأن العمرة لا تصح إلا به.",
    list: [
      "ترك الطواف — لا تصح العمرة وعليه الإتيان به.",
      "ترك السعي — لا تصح العمرة وعليه الإتيان به.",
    ],
    daleel: "",
    note: "لا يتحلل المعتمر من عمرته حتى يأتي بما تركه من الأركان.",
    warning: "",
  },
  {
    id: 3,
    title: "ثانيًا: من ترك واجبًا من واجبات العمرة",
    icon: "🟡",
    color: "#b45309",
    content: "إذا ترك المعتمر واجبًا من واجبات العمرة — كالإحرام من الميقات أو الحلق أو التقصير — فقد ذهب جمهور الفقهاء إلى أن عليه دمًا إذا لم يُمكنه تدارك الواجب.",
    list: [
      "تجاوز الميقات دون إحرام مع عدم الرجوع إليه.",
      "ترك الحلق أو التقصير.",
    ],
    daleel: "استدل العلماء بما ثبت عن عبد الله بن عباس رضي الله عنهما أنه قال: «من نسي من نسكه شيئًا أو تركه فليهرق دمًا» — رواه الموطأ، وقد أخذ به جمهور أهل العلم.",
    note: "والدم هو ذبح شاة توزع على فقراء مكة المكرمة.",
    warning: "",
  },
  {
    id: 4,
    title: "ثالثًا: فدية الأذى",
    icon: "🩺",
    color: "#0369a1",
    content: "إذا احتاج المحرم إلى فعل بعض محظورات الإحرام لعذر — كحلق الرأس بسبب المرض أو وجود القمل أو الأذى — جاز له ذلك، وعليه فدية الأذى.",
    list: [],
    daleel: "قال الله تعالى: ﴿فَمَن كَانَ مِنكُم مَّرِيضًا أَوْ بِهِ أَذًى مِّن رَّأْسِهِ فَفِدْيَةٌ مِّن صِيَامٍ أَوْ صَدَقَةٍ أَوْ نُسُكٍ﴾ [البقرة: ١٩٦]\n\nوثبت أن النبي ﷺ قال لكعب بن عجرة رضي الله عنه لما آذاه القمل: «احلق رأسك، وصم ثالثة أيام، أو أطعم ستة مساكين، أو انسك شاة» — متفق عليه.",
    options: [
      { icon: "🐑", title: "ذبح شاة", desc: "وتوزَّع على فقراء الحرم" },
      { icon: "🍚", title: "إطعام ستة مساكين", desc: "لكل مسكين نصف صاع من الطعام" },
      { icon: "📅", title: "صيام ثالثة أيام", desc: "متتابعة أو متفرقة" },
    ],
    note: "وللمحرم أن يختار أي هذه الخيارات شاء، ولا يتقيد بترتيب.",
    warning: "",
  },
  {
    id: 5,
    title: "رابعًا: من فعل محظورًا ناسيًا أو جاهلًا",
    icon: "🟢",
    color: "#065f46",
    content: "قرر الشيخ ابن باز والشيخ ابن عثيمين أن من فعل محظورًا من محظورات الإحرام ناسيًا أو جاهلًا أو مكرهًا فلا إثم عليه.\n\nأما الفدية ففيها خلاف بين أهل العلم باختلاف نوع المحظور وحال المكلف.",
    list: [],
    daleel: "قال الله تعالى: ﴿رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا﴾\n\nوقال تعالى: ﴿وَلَيْسَ عَلَيْكُمْ جُنَاحٌ فِيمَا أَخْطَأْتُم بِهِ وَلَٰكِن مَّا تَعَمَّدَتْ قُلُوبُكُمْ﴾ [الأحزاب: ٥]",
    note: "",
    warning: "اختار الشيخ ابن باز أنه لا فدية على من فعل المحظور ناسيًا أو جاهلًا. وينبغي الرجوع إلى أهل العلم في التفاصيل.",
  },
  {
    id: 6,
    title: "خامسًا: من تعمد ارتكاب محظور",
    icon: "🔴",
    color: "#dc2626",
    content: "من تعمد فعل محظور من محظورات الإحرام وهو يعلم الحكم فقد أثم، ويترتب على بعض المحظورات فدية، بحسب نوع المحظور.\n\nوليس جميع المحظورات حكمها واحدًا، ولذلك تختلف أحكامها باختلاف نوعها.",
    list: [
      "لبس المخيط للرجل — فدية الأذى الثلاثية (شاة / إطعام / صيام).",
      "استعمال الطيب — فدية الأذى الثلاثية.",
      "حلق الشعر — فدية الأذى الثلاثية.",
      "الجماع قبل التحلل — يُفسد النسك عند الجمهور ويوجب الكفارة.",
    ],
    daleel: "",
    note: "",
    warning: "هذا تفصيل مجمل. يجب الرجوع إلى أهل العلم في كل مسألة يترتب عليها دم أو فدية.",
  },
];

// ---- أسئلة مهمة ----
const faqs = [
  {
    q: "هل تجب الفدية على من لبس المخيط ناسيًا؟",
    a: "إذا لبسه ناسيًا أو جاهلًا بالحكم، فلا إثم عليه. أما الفدية ففيها خلاف؛ واختار الشيخ ابن باز أنه لا فدية عليه إذا كان معذورًا بالنسيان أو الجهل.",
  },
  {
    q: "هل تجب الفدية على من تطيّب ناسيًا؟",
    a: "إذا كان ناسيًا أو جاهلًا، فلا إثم عليه، ويُزيل الطيب متى تذكّر. أما الفدية ففيها خلاف كما في مسألة لبس المخيط.",
  },
  {
    q: "هل تجب الفدية على من حلق شعره لعذر شرعي؟",
    a: "نعم. إذا حلق شعره لعذر شرعي كالمرض، جاز له ذلك، وعليه فدية الأذى المذكورة في الآية الكريمة: يختار بين ذبح شاة أو إطعام ستة مساكين أو صيام ثلاثة أيام.",
  },
  {
    q: "أين يُؤدى الدم؟",
    a: "الأفضل أن يُذبح الدم في مكة المكرمة ويوزَّع على فقرائها. ويرى بعض أهل العلم جواز توكيل من يفعل ذلك.",
  },
];

// ---- مكوّن صفحة الفدية ----
function FidyaPage() {
  return (
    <div>
      <PageHeader
        eyebrow="أحكام شرعية"
        title="أحكام الفدية في العمرة"
        description="متى تجب الفدية وكيف تُؤدى — مستخرج من القرآن الكريم والسنة النبوية وفتاوى أهل العلم."
      />

      <div className="mx-auto max-w-4xl px-4 py-10 space-y-6">

        {/* تنبيه رئيسي */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">⚠️</span>
            <div>
              <h3 className="font-display font-bold text-amber-900 mb-1">تنبيه فقهي مهم</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                الفدية من أدق أبواب الحج والعمرة. لا ينبغي للمعتمر أن يُفتي نفسه في المسائل التي يترتب عليها دم أو فدية، بل يرجع إلى أهل العلم أو الجهات الرسمية للإفتاء إذا أشكلت عليه المسألة.
              </p>
            </div>
          </div>
        </div>

        {/* الأقسام */}
        {sections.map((section) => (
          <div key={section.id} className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
            {/* رأس القسم */}
            <div className="flex items-center gap-3 px-5 py-4 text-white" style={{ backgroundColor: section.color }}>
              <span className="text-2xl">{section.icon}</span>
              <h2 className="font-display text-lg font-bold text-white">{section.title}</h2>
            </div>

            <div className="p-5 space-y-4">
              {/* المحتوى */}
              {section.content.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm text-foreground/80 leading-relaxed">{para}</p>
              ))}

              {/* قائمة الأمثلة */}
              {section.list && section.list.length > 0 && (
                <ul className="space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundColor: section.color, fontSize: "9px" }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* الدليل */}
              {section.daleel && (
                <div className="rounded-xl bg-primary-soft border border-primary/20 p-4">
                  <div className="text-xs font-semibold text-primary mb-2">الدليل من القرآن والسنة</div>
                  {section.daleel.split("\n\n").map((para, i) => (
                    <p key={i} className="font-display text-sm leading-loose text-foreground mb-1">{para}</p>
                  ))}
                </div>
              )}

              {/* خيارات فدية الأذى */}
              {"options" in section && section.options && (
                <div className="grid gap-3 sm:grid-cols-3">
                  {(section.options as { icon: string; title: string; desc: string }[]).map((opt, i) => (
                    <div key={i} className="rounded-xl border border-border bg-muted/30 p-4 text-center">
                      <div className="text-3xl mb-2">{opt.icon}</div>
                      <div className="font-semibold text-foreground text-sm mb-1">{opt.title}</div>
                      <div className="text-xs text-muted-foreground">{opt.desc}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* ملاحظة */}
              {"note" in section && section.note && (
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-3 text-xs text-blue-800 leading-relaxed">
                  <span className="font-semibold">💡 </span>{section.note}
                </div>
              )}

              {/* تحذير */}
              {section.warning && (
                <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800 leading-relaxed">
                  <span className="font-semibold">⚠️ تنبيه: </span>{section.warning}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* الأسئلة الشائعة */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <h2 className="font-display text-xl font-bold text-foreground px-2">مسائل مهمة</h2>
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

        {/* المراجع */}
        <div className="rounded-2xl border border-border bg-muted/30 p-5">
          <h3 className="font-display font-bold text-foreground mb-3">المراجع</h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• القرآن الكريم</li>
            <li>• صحيح البخاري ومسلم</li>
            <li>• الموطأ للإمام مالك</li>
            <li>• التحقيق والإيضاح لكثير من مسائل الحج والعمرة والزيارة — الشيخ عبد العزيز بن باز</li>
            <li>• مجموع فتاوى ومقالات متنوعة — الشيخ عبد العزيز بن باز</li>
            <li>• الشرح الممتع ومجموع فتاوى ورسائل — الشيخ محمد بن صالح العثيمين</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
