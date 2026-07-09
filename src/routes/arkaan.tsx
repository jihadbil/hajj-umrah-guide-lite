// ===================================================
// arkaan.tsx — صفحة أركان العمرة
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/arkaan")({
  component: ArkaanPage,
  head: () => ({
    meta: [
      { title: "أركان العمرة — مرشد" },
      { name: "description", content: "أركان العمرة الأربعة: الإحرام، الطواف، السعي، الحلق والتقصير — مع المستحبات والمكروهات في كل ركن." },
    ],
  }),
});

// ---- أنواع البيانات ----
interface Rukn {
  id: number;
  title: string;
  icon: string;
  arabicNum: string;
  definition: string;
  ruling: string;     // الحكم الشرعي
  details: string[];  // تفاصيل الركن
  mustahabb: string[]; // المستحبات
  makrooh: string[];  // المكروهات
  note?: string;
}

// ---- بيانات الأركان الأربعة ----
const arkaan: Rukn[] = [
  {
    id: 1,
    title: "الإحرام",
    icon: "🕋",
    arabicNum: "١",
    definition: "نية الدخول في النسك، وهو الركن الذي تبدأ به العمرة. لا تصح العمرة إلا بالإحرام من الميقات المحدد.",
    ruling: "ركن — لا تصح العمرة بدونه، فمن لم يُحرم لم تنعقد عمرته أصلًا.",
    details: [
      "ينعقد الإحرام بالنية، فإذا نوى الدخول في العمرة وتلفّظ بها دخل في النسك.",
      "من الميقات يُحرم المعتمر، ولا يجوز تجاوز الميقات دون إحرام.",
      "يُستحب الاغتسال ولبس الإزار والرداء الأبيضين للرجل قبل الإحرام.",
      "المرأة تُحرم في لباسها المعتاد الساتر، وتجتنب النقاب والقفازين.",
      "تبدأ التلبية فور الإحرام وتستمر حتى الشروع في الطواف.",
    ],
    mustahabb: [
      "الاغتسال قبل الإحرام — سنة مؤكدة ولو لغير الجنابة.",
      "لبس الإزار والرداء الأبيضين النظيفين للرجل.",
      "التطيب في بدن الرجل قبل الإحرام، وإن بقي أثره بعده فلا حرج.",
      "استقبال القبلة عند التلبية إن تيسر.",
      "رفع الصوت بالتلبية للرجل رفعًا معتدلًا.",
      "الاشتراط عند من يخشى مانعًا: «فإن حبسني حابس فمحلي حيث حبستني».",
      "الإكثار من التلبية في طريقه إلى المسجد الحرام.",
    ],
    makrooh: [
      "تأخير التلبية بعد نية الإحرام دون عذر.",
      "الانشغال بالهاتف والحديث فور الإحرام قبل البدء بالتلبية.",
      "رفع المرأة صوتها بالتلبية أمام الرجال الأجانب.",
      "الاشتراط مع عدم الحاجة إليه، فهو رخصة لا يُستحب لمن هو معافى.",
      "وضع الطيب على ثوب الإحرام بعد نية الإحرام.",
    ],
    note: "الإحرام هو النية، لا مجرد لبس الثوبين. فمن لبس الإزار والرداء دون أن ينوي دخل في الإحرام فلا إحرام له.",
  },
  {
    id: 2,
    title: "الطواف",
    icon: "🌀",
    arabicNum: "٢",
    definition: "الطواف بالكعبة المشرفة سبعة أشواط كاملة، تبدأ من الحجر الأسود وتنتهي إليه، والكعبة عن يسار الطائف طوال الوقت.",
    ruling: "ركن — لا تصح العمرة إلا به، فمن ترك الطواف لم تتم عمرته ولا يتحلل حتى يأتي به.",
    details: [
      "يبدأ كل شوط من محاذاة الحجر الأسود ويُستلم أو يُشار إليه مع التكبير.",
      "يجب أن تكون الكعبة عن يسار الطائف في جميع الأشواط.",
      "يشمل الطواف سبعة أشواط كاملة، ولا يصح الطواف داخل حجر إسماعيل.",
      "يُشترط للطواف الطهارة من الحدثين الأصغر والأكبر.",
      "الاضطباع والرمل سنة للرجل في طواف العمرة فقط.",
    ],
    mustahabb: [
      "الاضطباع طوال الطواف للرجل — كشف الكتف الأيمن بجعل الرداء تحت الإبط.",
      "الرمل في الأشواط الثلاثة الأولى للرجل — الإسراع مع تقارب الخطوات.",
      "استلام الحجر الأسود أو الإشارة إليه مع التكبير في بداية كل شوط.",
      "استلام الركن اليماني باليد اليمنى في كل شوط إن أمكن دون أذى.",
      "قراءة «ربنا آتنا في الدنيا حسنة» بين الركن اليماني والحجر الأسود.",
      "الإكثار من الذكر والدعاء وقراءة القرآن طوال الطواف.",
      "الخشوع والهدوء وعدم الانشغال بأمور الدنيا.",
    ],
    makrooh: [
      "رفع الصوت بالدعاء جماعةً خلف قائد مما يُشوش على الطائفين.",
      "مزاحمة الناس وإيذاؤهم للوصول إلى الحجر الأسود أو الركن اليماني.",
      "استلام جميع أركان الكعبة أو مس جدرانها — السنة استلام الحجر والركن اليماني فقط.",
      "الانشغال بالحديث في أمور الدنيا أثناء الطواف.",
      "الإشارة إلى الركن اليماني مع عدم التمكن من استلامه — السنة عدم الإشارة إليه.",
      "الجري في جميع الأشواط — الرمل في الثلاثة الأولى فقط.",
    ],
    note: "تقبيل اليد بعد الإشارة إلى الحجر الأسود لم يثبت عن النبي ﷺ، وإنما الإشارة فقط مع التكبير.",
  },
  {
    id: 3,
    title: "السعي بين الصفا والمروة",
    icon: "🏃",
    arabicNum: "٣",
    definition: "السعي سبعة أشواط بين جبل الصفا وجبل المروة، يبدأ من الصفا وينتهي عند المروة.",
    ruling: "ركن — لا تصح العمرة إلا به. من ترك السعي لم يتم نسكه ولا يتحلل حتى يأتي به.",
    details: [
      "السعي سبعة أشواط: الذهاب من الصفا إلى المروة شوط، والعودة شوط آخر.",
      "يبدأ السعي من الصفا وينتهي بالمروة في الشوط السابع.",
      "يُستحب الصعود على الصفا والمروة عند كل شوط إن تيسر.",
      "الطهارة مستحبة للسعي وليست شرطًا لصحته.",
      "الإسراع بين العلمين الأخضرين سنة للرجال دون النساء.",
    ],
    mustahabb: [
      "قراءة الآية الكريمة «إن الصفا والمروة من شعائر الله» عند الصعود على الصفا.",
      "استقبال القبلة على الصفا والمروة وتكرار الذكر والدعاء ثلاثًا.",
      "الإسراع بين العلمين الأخضرين للرجل فقط.",
      "الإكثار من الذكر والدعاء وقراءة ما تيسر من القرآن.",
      "الطهارة — مستحبة وإن صح السعي بدونها.",
      "الصعود على الصفا والمروة عند كل شوط إن أمكن.",
    ],
    makrooh: [
      "إسراع المرأة بين العلمين الأخضرين — السنة أن تمشي مشيًا عاديًا.",
      "الجري في جميع المسعى — السنة الإسراع بين العلمين فقط.",
      "البدء بالمروة قبل الصفا — السنة البدء بالصفا.",
      "الانشغال بالحديث وترك الذكر والدعاء.",
      "إلزام نفسه دعاءً مخصوصًا لكل شوط — لم يثبت ذلك عن النبي ﷺ.",
    ],
    note: "السعي يصح بدون طهارة عند جمهور أهل العلم، غير أن الطهارة أفضل وأكمل.",
  },
  {
    id: 4,
    title: "الحلق أو التقصير",
    icon: "✂️",
    arabicNum: "٤",
    definition: "حلق شعر الرأس كله أو تقصيره بعد السعي، وهو ما يُكمل به المعتمر نسكه ويتحلل من إحرامه.",
    ruling: "واجب عند جمهور الفقهاء — وإن اعتبره بعضهم ركنًا. من تركه لم يتحلل من إحرامه.",
    details: [
      "للرجل: الحلق أفضل وأكمل، والتقصير يكفي. ويجب أن يشمل جميع الرأس.",
      "للمرأة: تأخذ من أطراف شعرها قدر أنملة تقريبًا، ولا تحلق رأسها.",
      "من كان قريبًا من موسم الحج ويريد الحج فالأفضل له التقصير ليحلق في الحج.",
      "لا يكفي قص شعرات يسيرة من مقدمة الرأس فقط.",
      "بإتمام الحلق أو التقصير يتحلل المعتمر ويحل له كل ما كان محظورًا.",
    ],
    mustahabb: [
      "الحلق الكامل للرجل ما لم يكن يريد الحج قريبًا.",
      "المبادرة إلى الحلق أو التقصير فور الانتهاء من السعي.",
      "الدعاء بعد الحلق والحمد لله على إتمام النسك.",
    ],
    makrooh: [
      "الاكتفاء بقص بضع شعرات من مقدمة الرأس فقط.",
      "التقصير من جانب واحد دون سائر الرأس.",
      "التحلل أو خلع ملابس الإحرام قبل إتمام الحلق أو التقصير.",
      "حلق المرأة لشعر رأسها.",
    ],
    note: "بإتمام الحلق أو التقصير تنتهي عمرتك وتتحلل من إحرامك. نسأل الله القبول.",
  },
];

// ---- مكوّن عرض الركن ----
function RuknCard({ rukn }: { rukn: Rukn }) {
  const [activeTab, setActiveTab] = useState<"details" | "mustahabb" | "makrooh">("details");

  const tabs = [
    { id: "details" as const, label: "التفاصيل", icon: "📖" },
    { id: "mustahabb" as const, label: "المستحبات", icon: "✅" },
    { id: "makrooh" as const, label: "المكروهات", icon: "⚠️" },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
      {/* رأس الركن */}
      <div className="p-5 text-white" style={{ backgroundColor: "#1B4332" }}>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-2xl">
            {rukn.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-white/60 mb-0.5">الركن {rukn.arabicNum}</div>
            <h2 className="font-display text-xl font-bold text-white">{rukn.title}</h2>
            <p className="mt-1 text-sm text-white/80 leading-relaxed">{rukn.definition}</p>
          </div>
        </div>
        {/* الحكم */}
        <div className="mt-3 rounded-xl bg-white/10 px-4 py-2 text-xs text-white/90">
          <span className="font-bold text-white">الحكم: </span>{rukn.ruling}
        </div>
      </div>

      {/* تبويبات */}
      <div className="flex border-b border-border bg-muted/30">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1 items-center justify-center gap-1.5 py-3 text-sm font-medium transition-all border-b-2 ${
              activeTab === tab.id
                ? "border-primary text-primary bg-card"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="text-base leading-none hidden sm:inline">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* محتوى التبويب */}
      <div className="p-5">
        {activeTab === "details" && (
          <ul className="space-y-3">
            {rukn.details.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold"
                  style={{ backgroundColor: "#2D6A4F" }}
                >
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
            {rukn.note && (
              <li className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 leading-relaxed">
                <span className="font-bold">💡 تنبيه: </span>{rukn.note}
              </li>
            )}
          </ul>
        )}

        {activeTab === "mustahabb" && (
          <div className="flex flex-col gap-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 mb-1">
              <p className="text-xs text-emerald-800">يُثاب فاعلها اقتداءً بالنبي ﷺ، ولا يأثم تاركها.</p>
            </div>
            {rukn.mustahabb.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-white p-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">{i + 1}</span>
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "makrooh" && (
          <div className="flex flex-col gap-2">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 mb-1">
              <p className="text-xs text-amber-800">أمور يُنصح بتجنبها لأنها تُنقص الأجر أو تُنافي كمال العبادة.</p>
            </div>
            {rukn.makrooh.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-amber-100 bg-white p-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white text-xs font-bold">!</span>
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ---- مكوّن صفحة الأركان ----
function ArkaanPage() {
  return (
    <div>
      <PageHeader
        eyebrow="فقه العمرة"
        title="أركان العمرة"
        description="الأركان هي الأعمال الأساسية التي تُقوم عليها العمرة، ولا تصح إلا بها جميعًا."
      />

      <div className="mx-auto max-w-4xl px-4 py-10 space-y-6">

        {/* مقدمة */}
        <div className="rounded-2xl border border-primary/20 bg-primary-soft p-5">
          <h2 className="font-display text-lg font-bold text-primary mb-2">ما الفرق بين الركن والواجب والسنة؟</h2>
          <div className="grid gap-3 sm:grid-cols-3 text-sm">
            <div className="rounded-xl bg-white border border-border p-3">
              <div className="font-bold text-foreground mb-1">🔴 الركن</div>
              <p className="text-foreground/70 leading-relaxed text-xs">ما لا تصح العمرة إلا به، ومن تركه بقي في إحرامه حتى يأتي به.</p>
            </div>
            <div className="rounded-xl bg-white border border-border p-3">
              <div className="font-bold text-foreground mb-1">🟡 الواجب</div>
              <p className="text-foreground/70 leading-relaxed text-xs">ما يجب فعله، ومن تركه أثم وعليه دم عند الجمهور، لكن عمرته صحيحة.</p>
            </div>
            <div className="rounded-xl bg-white border border-border p-3">
              <div className="font-bold text-foreground mb-1">🟢 السنة</div>
              <p className="text-foreground/70 leading-relaxed text-xs">ما يُستحب فعله اقتداءً بالنبي ﷺ، ولا يُلزَم به، ولا يترتب على تركه شيء.</p>
            </div>
          </div>
        </div>

        {/* الأركان */}
        {arkaan.map((rukn) => (
          <RuknCard key={rukn.id} rukn={rukn} />
        ))}

        {/* آية ختامية */}
        <div className="rounded-2xl border border-primary/20 bg-primary-soft p-5 text-center">
          <p className="font-display text-lg leading-loose text-foreground">
            ﴿ وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ ﴾
          </p>
          <div className="mt-2 text-xs text-muted-foreground">سورة البقرة — الآية ١٩٦</div>
        </div>

      </div>
    </div>
  );
}
