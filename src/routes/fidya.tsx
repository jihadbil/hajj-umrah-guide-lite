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
    daleel: "قال الله تعالى: ﴿فَمَن كَانَ مِنكُم مَّرِيضًا أَوْ بِهِ أَذًى مِّن رَّأْسِهِ فَفِدْيَةٌ مِّن صِيَامٍ أَوْ صَدَقَةٍ أَوْ نُسُكٍ﴾ [البقرة: ١٩٦]\n\nوثبت أن النبي ﷺ قال لكعب بن عجرة رضي الله عنه لما آذاه القمل: «احلق رأسك، وصم ثلاثة أيام، أو أطعم ستة مساكين، أو انسك شاة» — متفق عليه.",
    options: [
      { icon: "🐑", title: "ذبح شاة", desc: "وتوزَّع على فقراء الحرم" },
      { icon: "🍚", title: "إطعام ستة مساكين", desc: "لكل مسكين نصف صاع من الطعام" },
      { icon: "📅", title: "صيام ثلاثة أيام", desc: "متتابعة أو متفرقة" },
    ],
    note: "وللمحرم أن يختار أي هذه الخيارات شاء، ولا يتقيد بترتيب.",
    warning: "",
  },
  {
    id: 5,
    title: "رابعًا: من فعل محظورًا ناسيًا أو جاهلًا",
    icon: "🟢",
    color: "#065f46",
    content: "من فعل محظورًا من محظورات الإحرام ناسيًا أو جاهلًا أو مكرهًا فلا إثم عليه.\n\nأما الفدية ففيها خلاف بين أهل العلم باختلاف نوع المحظور وحال المكلف.",
    list: [],
    daleel: "قال الله تعالى: ﴿رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا﴾ [البقرة: ٢٨٦]\n\nوقال تعالى: ﴿وَلَيْسَ عَلَيْكُمْ جُنَاحٌ فِيمَا أَخْطَأْتُم بِهِ وَلَٰكِن مَّا تَعَمَّدَتْ قُلُوبُكُمْ﴾ [الأحزاب: ٥]",
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

      <div className="mx-auto max-w-4xl px-4 py-12 space-y-8 animate-fade-in-up">

        {/* تنبيه رئيسي */}
        <div className="rounded-3xl border border-amber-250 bg-amber-50/70 p-5 md:p-6 shadow-soft relative overflow-hidden bg-islamic-pattern">
          <div className="flex items-start gap-3.5 relative z-10">
            <span className="text-2xl mt-0.5 animate-gold-pulse">⚠️</span>
            <div className="text-right">
              <h3 className="font-display font-bold text-amber-900 text-base mb-1.5">تنبيه فقهي مهم</h3>
              <p className="text-sm text-amber-850 leading-relaxed font-medium">
                الفدية من أدق أبواب الحج والعمرة. لا ينبغي للمعتمر أن يُفتي نفسه في المسائل التي يترتب عليها دم أو فدية، بل يرجع إلى أهل العلم أو الجهات الرسمية للإفتاء إذا أشكلت عليه المسألة.
              </p>
            </div>
          </div>
        </div>

        {/* الأقسام */}
        <div className="grid gap-6">
          {sections.map((section) => (
            <div key={section.id} className="rounded-3xl border border-border/60 bg-card shadow-soft overflow-hidden hover:shadow-md transition-all duration-300">
              {/* رأس القسم */}
              <div 
                className="flex items-center gap-3.5 px-6 py-4.5 text-white bg-islamic-pattern border-b border-white/10" 
                style={{ 
                  backgroundColor: section.color,
                  backgroundImage: `linear-gradient(135deg, ${section.color} 0%, rgba(20,52,42,0.95) 100%)`
                }}
              >
                <span className="text-2xl">{section.icon}</span>
                <h2 className="font-display text-lg font-bold text-white tracking-wide leading-none">{section.title}</h2>
              </div>

              <div className="p-6 space-y-4 text-right">
                {/* المحتوى */}
                {section.content.split("\n\n").map((para, i) => (
                  <p key={i} className="text-sm text-foreground/80 leading-relaxed">{para}</p>
                ))}

                {/* قائمة الأمثلة */}
                {section.list && section.list.length > 0 && (
                  <ul className="space-y-2.5 pr-1">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <span 
                          className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white text-[9px]" 
                          style={{ backgroundColor: section.color }}
                        >
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* الدليل */}
                {section.daleel && (
                  <div className="rounded-2xl bg-primary-soft/40 border border-primary/10 p-5 shadow-inner">
                    <div className="text-[10px] font-bold text-primary mb-2 uppercase">الدليل من الكتاب والسنة</div>
                    {section.daleel.split("\n\n").map((para, i) => (
                      <p key={i} className="font-display text-sm leading-loose text-foreground font-semibold mb-1">{para}</p>
                    ))}
                  </div>
                )}

                {/* خيارات فدية الأذى */}
                {section.options && (
                  <div className="grid gap-3.5 sm:grid-cols-3 pt-2">
                    {section.options.map((opt, i) => (
                      <div key={i} className="rounded-2xl border border-border/50 bg-[#1B4332]/5 p-5 text-center transition-all duration-300 hover:bg-[#1B4332]/10 hover:border-gold/30">
                        <div className="text-4xl mb-2.5 animate-float">{opt.icon}</div>
                        <div className="font-bold text-foreground text-sm mb-1">{opt.title}</div>
                        <div className="text-[11px] text-muted-foreground leading-snug">{opt.desc}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* ملاحظة */}
                {section.note && (
                  <div className="rounded-xl bg-blue-50/70 border border-blue-100 p-3.5 text-xs text-blue-800 leading-relaxed shadow-sm">
                    <span className="font-bold">💡 ملاحظة فقهية: </span>{section.note}
                  </div>
                )}

                {/* تحذير */}
                {section.warning && (
                  <div className="rounded-xl bg-amber-50/80 border border-amber-200 p-3.5 text-xs text-amber-850 leading-relaxed shadow-sm">
                    <span className="font-bold">⚠️ تنبيه: </span>{section.warning}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* الأسئلة الشائعة */}
        <div className="pt-4">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <h2 className="font-display text-xl font-bold text-foreground px-2">مسائل وتفريعات هامة</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <div className="grid gap-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-gold/20 transition-all duration-300 bg-islamic-pattern">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold-green text-white text-[10px] font-bold border border-white/5 mt-0.5 shadow-sm">
                    ؟
                  </span>
                  <div className="text-right">
                    <div className="font-bold text-foreground text-sm mb-1.5">{f.q}</div>
                    <div className="text-sm text-foreground/75 leading-relaxed">{f.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* المراجع */}
        <div className="rounded-3xl border border-border/60 bg-muted/40 p-6 bg-islamic-pattern">
          <h3 className="font-display font-bold text-foreground text-lg mb-3 border-r-2 border-gold pr-2">المراجع العلمية والشرعية</h3>
          <ul className="grid gap-2.5 sm:grid-cols-2 text-xs text-muted-foreground mt-4 pr-1">
            <li className="flex items-center gap-2"><span className="text-[#C5A85C]">✦</span> القرآن الكريم</li>
            <li className="flex items-center gap-2"><span className="text-[#C5A85C]">✦</span> صحيح البخاري وصحيح مسلم</li>
            <li className="flex items-center gap-2"><span className="text-[#C5A85C]">✦</span> الموطأ للإمام مالك بن أنس</li>
            <li className="flex items-center gap-2"><span className="text-[#C5A85C]">✦</span> التحقيق والإيضاح — الشيخ ابن باز</li>
            <li className="flex items-center gap-2"><span className="text-[#C5A85C]">✦</span> فتاوى الحج والعمرة والزيارة — الشيخ ابن باز</li>
            <li className="flex items-center gap-2"><span className="text-[#C5A85C]">✦</span> الشرح الممتع على زاد المستقنع — الشيخ ابن عثيمين</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
