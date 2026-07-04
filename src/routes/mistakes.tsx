import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/mistakes")({
  component: MistakesPage,
  head: () => ({
    meta: [
      { title: "الأخطاء الشائعة في العمرة — مرشد" },
      { name: "description", content: "أبرز الأخطاء التي يقع فيها المعتمرون في الإحرام والطواف والسعي والحلق، مع بيان الصواب." },
    ],
  }),
});

interface Mistake {
  title: string;
  wrong: string;
  right: string;
  daleel?: string;
}

interface MistakeGroup {
  category: string;
  icon: string;
  color: string;
  mistakes: Mistake[];
}

const mistakeGroups: MistakeGroup[] = [
  {
    category: "أخطاء الإحرام",
    icon: "🧎",
    color: "#7c3aed",
    mistakes: [
      {
        title: "تجاوز الميقات دون إحرام",
        wrong: "يتجاوز بعض المعتمرين الميقات دون أن يُحرموا، ثم يُحرمون بعده.",
        right: "يجب على من أراد العمرة أن يُحرم من الميقات الذي يمر به.",
        daleel: "قال ﷺ: «هن لهن ولمن أتى عليهن من غير أهلهن ممن أراد الحج والعمرة» — متفق عليه.",
      },
      {
        title: "الاعتقاد بأن الإحرام هو لبس الثوبين فقط",
        wrong: "يظن بعض الناس أن الإحرام هو مجرد ارتداء الإزار والرداء.",
        right: "الإحرام هو نية الدخول في النسك. أما لبس ثياب الإحرام فهو من صفته لا حقيقته.",
      },
      {
        title: "ترك التلبية أو الانشغال عنها",
        wrong: "يترك بعض المعتمرين التلبية بعد الإحرام أو ينشغلون عنها بالحديث وهاتف.",
        right: "يُستحب الإكثار من التلبية حتى يبدأ الطواف.",
        daleel: "ثبت أن النبي ﷺ لبّى من حين أحرم حتى شرع في الطواف — متفق عليه.",
      },
    ],
  },
  {
    category: "أخطاء الطواف",
    icon: "🌀",
    color: "#0369a1",
    mistakes: [
      {
        title: "بدء الطواف قبل الحجر الأسود أو بعده",
        wrong: "يبدأ بعض المعتمرين الطواف قبل محاذاة الحجر الأسود أو بعد تجاوزه.",
        right: "يبدأ كل شوط من محاذاة الحجر الأسود وينتهي إليه.",
      },
      {
        title: "مزاحمة الناس لاستلام الحجر الأسود",
        wrong: "يشتد بعض المعتمرين في المزاحمة حتى يؤذي المسلمين.",
        right: "إن تيسر استلامه بلا أذى فذلك سنة، وإلا أشار إليه وكبّر. الوصول إلى الحجر الأسود سنة، وإيذاء المسلمين حرام.",
      },
      {
        title: "الاعتقاد بوجود دعاء لكل شوط",
        wrong: "يحمل بعض المعتمرين كتيبات خُصصت لكل شوط دعاء معينًا ويظنون أن ذلك سنة.",
        right: "لم يثبت عن النبي ﷺ تخصيص كل شوط بدعاء معين، وإنما يدعو المسلم بما شاء ويكثر من الذكر وقراءة القرآن.",
      },
      {
        title: "رفع الصوت بالدعاء جماعةً",
        wrong: "يجتمع بعض الناس على دعاء واحد بصوت مرتفع خلف قائد المجموعة.",
        right: "الأصل أن يدعو كل معتمر بنفسه؛ لما في رفع الأصوات من التشويش على الطائفين.",
      },
      {
        title: "استلام جميع أركان الكعبة",
        wrong: "يستلم بعض المعتمرين جميع أركان الكعبة أو يمسحون جدرانها.",
        right: "ثبت عن النبي ﷺ أنه لم يستلم إلا الحجر الأسود والركن اليماني.",
        daleel: "رواه البخاري ومسلم.",
      },
    ],
  },
  {
    category: "أخطاء السعي",
    icon: "🏃",
    color: "#065f46",
    mistakes: [
      {
        title: "الاعتقاد بأن الطهارة شرط لصحة السعي",
        wrong: "يظن بعضهم أن السعي لا يصح بدون طهارة.",
        right: "الطهارة مستحبة للسعي، لكن السعي يصح بدونها عند جمهور أهل العلم.",
      },
      {
        title: "إسراع النساء بين العلمين الأخضرين",
        wrong: "تسرع بعض النساء بين العلمين الأخضرين كما يفعل الرجال.",
        right: "الإسراع بين العلمين الأخضرين سنة للرجال فقط. أما المرأة فتمشي مشيًا معتادًا في جميع السعي.",
      },
      {
        title: "الخطأ في عدد الأشواط",
        wrong: "يحسب بعض الناس الذهاب والعودة شوطًا واحدًا.",
        right: "الذهاب من الصفا إلى المروة شوط، والعودة من المروة إلى الصفا شوط آخر. فالسعي سبعة أشواط تبدأ بالصفا وتنتهي بالمروة.",
      },
    ],
  },
  {
    category: "أخطاء الحلق والتقصير",
    icon: "✂️",
    color: "#b45309",
    mistakes: [
      {
        title: "قص جزء يسير من الشعر",
        wrong: "يأخذ بعض المعتمرين شعرات قليلة من مقدمة الرأس ويظنون أن ذلك يكفي.",
        right: "التقصير المشروع يكون من جميع شعر الرأس.",
        daleel: "وهو ما أفتى به الشيخان ابن باز وابن عثيمين.",
      },
      {
        title: "حلق المرأة لشعرها",
        wrong: "تحلق بعض النساء رؤوسهن ظنًا أن ذلك أفضل.",
        right: "تجمع المرأة شعرها وتأخذ من أطرافه قدر أنملة تقريبًا، ولا تحلق رأسها.",
        daleel: "قال ﷺ: «ليس على النساء حلق، إنما على النساء التقصير» — رواه سنن أبي داود وصححه أهل العلم.",
      },
    ],
  },
  {
    category: "أخطاء عامة",
    icon: "⚠️",
    color: "#dc2626",
    mistakes: [
      {
        title: "الانشغال بالتصوير",
        wrong: "ينشغل بعض المعتمرين بالتصوير ونقل البث المباشر أكثر من انشغالهم بالعبادة.",
        right: "المقصود من العمرة تحقيق الخشوع والإقبال على الله، فينبغي أن يكون التصوير بقدر الحاجة دون أن يشغل القلب أو يؤذي الآخرين.",
      },
      {
        title: "إيذاء المسلمين",
        wrong: "يقع بعضهم في الدفع والصياح وشق الصفوف ومزاحمة كبار السن والنساء.",
        right: "قال ﷺ: «المسلم من سلم المسلمون من لسانه ويده» — متفق عليه. إيذاء المسلمين حرام في كل وقت، فكيف في بيت الله الحرام.",
      },
      {
        title: "الانشغال بالحديث أثناء الطواف والسعي",
        wrong: "يكثر بعضهم من الكلام في أمور الدنيا أثناء الطواف والسعي.",
        right: "هذه مواطن شريفة ينبغي اغتنامها بالطاعة والذكر والدعاء، فلا يُفوّت فضلها بكثرة الكلام.",
      },
    ],
  },
];

function MistakesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="التنبيهات والإرشادات"
        title="الأخطاء الشائعة في العمرة"
        description="أبرز الأخطاء التي يقع فيها كثير من المعتمرين، مع بيان الصواب والدليل."
      />

      <div className="mx-auto max-w-4xl px-4 py-12 space-y-10">

        <div className="rounded-2xl border border-primary/20 bg-primary-soft p-5 text-center">
          <p className="text-sm text-foreground/80 leading-relaxed">
            قال عبد الله بن مسعود رضي الله عنه: <span className="font-display font-bold text-primary">«اتّبعوا ولا تبتدعوا فقد كُفيتم».</span>
            <br />
            كلما كان المعتمر أحرص على متابعة هدي النبي ﷺ كان نسكه أكمل وأقرب إلى القبول بإذن الله.
          </p>
        </div>

        {mistakeGroups.map((group) => (
          <section key={group.category}>
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg text-white"
                style={{ backgroundColor: group.color }}
              >
                {group.icon}
              </div>
              <h2 className="font-display text-xl font-bold text-foreground">{group.category}</h2>
            </div>

            <div className="grid gap-4">
              {group.mistakes.map((m, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold"
                      style={{ backgroundColor: group.color }}
                    >
                      {i + 1}
                    </span>
                    {m.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5 rounded-xl bg-red-50 border border-red-100 p-3">
                      <span className="text-red-500 mt-0.5 shrink-0 text-sm font-bold">✗</span>
                      <p className="text-sm text-red-800 leading-relaxed">{m.wrong}</p>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-xl bg-green-50 border border-green-100 p-3">
                      <span className="text-green-600 mt-0.5 shrink-0 text-sm font-bold">✓</span>
                      <div>
                        <p className="text-sm text-green-800 leading-relaxed">{m.right}</p>
                        {m.daleel && (
                          <p className="mt-1.5 text-xs text-green-700 italic">{m.daleel}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

      </div>
    </div>
  );
}
