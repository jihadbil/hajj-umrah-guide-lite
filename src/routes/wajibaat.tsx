// ===================================================
// wajibaat.tsx — صفحة الواجبات والسنن والمكروهات والمستحبات
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/wajibaat")({
  component: WajibaatPage,
  head: () => ({
    meta: [
      { title: "الواجبات والسنن — مرشد" },
      { name: "description", content: "واجبات العمرة وسننها ومستحباتها ومكروهاتها — دليل فقهي شامل لكل معتمر." },
    ],
  }),
});

type TabId = "wajibaat" | "sunan" | "mustahabbat" | "makrohaat";

const TABS: { id: TabId; label: string; icon: string }[] = [
  { id: "wajibaat",    label: "الواجبات",        icon: "🔴" },
  { id: "sunan",       label: "السنن",            icon: "🌿" },
  { id: "mustahabbat", label: "المستحبات",        icon: "✅" },
  { id: "makrohaat",   label: "المكروهات",        icon: "⚠️" },
];

// ---- الواجبات ----
const wajibaat = [
  {
    title: "الإحرام من الميقات",
    icon: "📍",
    body: "يجب على كل من أراد العمرة أن يُحرم من الميقات الذي يمر به. فمن تجاوز الميقات دون إحرام وجب عليه العودة إليه، وإلا لزمه دم عند جمهور الفقهاء.",
    daleel: "قال ﷺ: «هن لهن ولمن أتى عليهن من غير أهلهن ممن أراد الحج والعمرة» — متفق عليه.",
    consequence: "من تجاوز الميقات دون إحرام ولم يرجع إليه لزمه دم (ذبح شاة) عند جمهور أهل العلم.",
  },
  {
    title: "الحلق أو التقصير",
    icon: "✂️",
    body: "الحلق أو التقصير واجب من واجبات العمرة عند جمهور الفقهاء، وهو الذي يتم به التحلل من الإحرام. ولا يجزئ الاقتصار على جزء من الشعر.",
    daleel: "قال اهلل تعالى: ﴿مُحَلِّقِينَ رُءُوسَكُمْ وَمُقَصِّرِينَ﴾ [الفتح: ٢٧]",
    consequence: "من ترك الحلق والتقصير لم يتحلل من إحرامه، ويلزمه دم عند بعض أهل العلم.",
  },
];

// ---- السنن ----
const sunanGroups = [
  {
    title: "سنن الإحرام",
    icon: "🕋",
    items: [
      "الاغتسال قبل الإحرام — سنة مؤكدة ولو لغير الجنابة.",
      "لبس الإزار والرداء الأبيضين النظيفين للرجل.",
      "التطيب في بدن الرجل قبل الإحرام دون الثوب.",
      "صلاة ركعتين في الميقات إن كان هناك مسجد.",
      "التلفظ بنية الإحرام بالعمرة والبدء بالتلبية فورًا.",
      "الاشتراط لمن يخشى مانعًا: «فإن حبسني حابس فمحلي حيث حبستني».",
      "رفع الصوت بالتلبية للرجل، وخفض الصوت للمرأة.",
    ],
  },
  {
    title: "سنن الطواف",
    icon: "🌀",
    items: [
      "الاضطباع للرجل في طواف العمرة — كشف الكتف الأيمن.",
      "الرمل في الأشواط الثلاثة الأولى للرجل — الإسراع مع تقارب الخطوات.",
      "استلام الحجر الأسود أو الإشارة إليه مع التكبير في بداية كل شوط.",
      "استلام الركن اليماني باليد في كل شوط إن أمكن دون أذى.",
      "قراءة «ربنا آتنا في الدنيا حسنة» بين الركن اليماني والحجر الأسود.",
      "صلاة ركعتين خلف مقام إبراهيم بعد الطواف — وتُجزئ في أي مكان بالمسجد.",
      "الشرب من ماء زمزم والدعاء بعد ركعتي الطواف.",
    ],
  },
  {
    title: "سنن السعي",
    icon: "🏃",
    items: [
      "الصعود على الصفا والمروة عند بلوغهما.",
      "قراءة «إن الصفا والمروة من شعائر الله» عند الصعود على الصفا.",
      "استقبال القبلة وتكرار الذكر والتهليل والدعاء على الصفا والمروة ثلاثًا.",
      "الإسراع بين العلمين الأخضرين للرجل فقط.",
      "الطهارة أثناء السعي — مستحبة وإن صح السعي بدونها.",
    ],
  },
  {
    title: "سنن الحلق والتقصير",
    icon: "✂️",
    items: [
      "الحلق الكامل أفضل للرجل من التقصير ما لم يكن يريد الحج قريبًا.",
      "التقصير من جميع أرجاء الرأس لا من جانب واحد.",
      "المبادرة إلى الحلق أو التقصير فور الانتهاء من السعي.",
    ],
  },
];

// ---- المستحبات العامة ----
const mustahabbat = [
  {
    category: "في المسجد الحرام",
    icon: "🕌",
    items: [
      "الدخول من باب بني شيبة (باب السلام) اقتداءً بالنبي ﷺ.",
      "الدخول بالقدم اليمنى مع دعاء دخول المسجد.",
      "الخشوع والسكينة عند رؤية الكعبة والتفرغ للدعاء.",
      "الإكثار من الطواف المتطوع به.",
      "الإقامة في مكة والإكثار من الصلاة في المسجد الحرام.",
    ],
  },
  {
    category: "في العبادة عمومًا",
    icon: "🤲",
    items: [
      "الإكثار من الذكر والتلاوة والدعاء في جميع أوقات الرحلة.",
      "إحياء الليل بالصلاة والذكر في هذه الأيام المباركة.",
      "الصدقة على الفقراء والمحتاجين في مكة المكرمة.",
      "الدعاء للوالدين والأقارب والمسلمين في المواطن الشريفة.",
      "التحلي بحسن الخلق والصبر على الأذى.",
      "الابتعاد عن اللغو والرفث والجدال وأمور الدنيا.",
    ],
  },
];

// ---- المكروهات ----
const makrohaat = [
  {
    category: "في الإحرام",
    icon: "🧎",
    items: [
      "تأخير التلبية بعد نية الإحرام دون عذر.",
      "وضع الطيب على ثوب الإحرام بعد عقد النية.",
      "رفع المرأة صوتها بالتلبية أمام الرجال الأجانب.",
      "الانشغال بالهاتف والحديث عوضًا عن التلبية والذكر.",
    ],
  },
  {
    category: "في الطواف",
    icon: "🌀",
    items: [
      "رفع الصوت بالدعاء جماعةً مما يُشوش على الطائفين.",
      "الإشارة إلى الركن اليماني عند تعذر استلامه — السنة عدم الإشارة.",
      "الاستمرار في الاضطباع بعد انتهاء الطواف وقبل صلاة الركعتين.",
      "الانشغال بحفظ أدعية طويلة على حساب الخشوع والحضور.",
    ],
  },
  {
    category: "في السعي",
    icon: "🏃",
    items: [
      "إسراع المرأة بين العلمين الأخضرين.",
      "الجري في جميع المسعى بدلًا من الإسراع المعتدل بين العلمين.",
      "البدء من المروة بدلًا من الصفا.",
      "ترك الدعاء والذكر على الصفا والمروة والاكتفاء بالعبور.",
    ],
  },
  {
    category: "عمومًا",
    icon: "⚠️",
    items: [
      "الانشغال بالتصوير ونقل البث المباشر على حساب الخشوع.",
      "إيذاء المسلمين بالدفع والمزاحمة ورفع الأصوات.",
      "كثرة الكلام في أمور الدنيا في المواطن الشريفة.",
      "التهاون في المحافظة على الصلوات في أوقاتها.",
    ],
  },
];

// ---- مكوّنات التبويبات ----
function WajibaatTab() {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-2xl border border-red-100 bg-red-50/60 p-4">
        <p className="text-sm text-red-800 leading-relaxed font-medium">
          الواجبات هي الأعمال التي أوجبها الشرع في العمرة، ومن تركها أثم وعليه دم (ذبح شاة) عند جمهور الفقهاء، غير أن العمرة تصح مع الإثم — بخلاف الأركان التي لا تصح العمرة إلا بها.
        </p>
      </div>
      {wajibaat.map((w, i) => (
        <div key={i} className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-md hover:border-primary/20 transition-all duration-300 relative overflow-hidden bg-islamic-pattern">
          <div className="flex items-start gap-3.5 mb-3.5">
            <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{w.icon}</span>
            <h3 className="font-display text-lg font-bold text-foreground leading-tight">{w.title}</h3>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed mb-4">{w.body}</p>
          {w.daleel && (
            <div className="rounded-xl bg-primary-soft/40 border border-primary/10 p-4 mb-4">
              <div className="text-[10px] font-bold text-primary mb-1.5 uppercase">الدليل الشرعي</div>
              <p className="font-display text-sm leading-loose text-foreground font-semibold">{w.daleel}</p>
            </div>
          )}
          <div className="rounded-xl bg-amber-50/80 border border-amber-100 p-4">
            <div className="text-[10px] font-bold text-amber-800 mb-1.5 uppercase">⚠️ الحكم عند الترك</div>
            <p className="text-xs text-amber-850 leading-relaxed font-medium">{w.consequence}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SunanTab() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
        <p className="text-sm text-emerald-800 leading-relaxed font-medium">
          السنن هي ما فعله النبي ﷺ أو أقره، يُثاب فاعلها ولا يأثم تاركها. والحرص عليها يُكمل العمرة ويرفع الأجر.
        </p>
      </div>
      {sunanGroups.map((group) => (
        <section key={group.title} className="space-y-3.5">
          <div className="mb-2 flex items-center gap-2 pr-1">
            <span className="text-xl">{group.icon}</span>
            <h3 className="font-display text-lg font-bold text-foreground">{group.title}</h3>
          </div>
          <div className="flex flex-col gap-3">
            {group.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border border-emerald-100/50 bg-white p-4 shadow-sm hover:shadow-soft hover:border-emerald-200/50 transition-all duration-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px] font-bold border border-white/5 shadow-sm">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function MustahabbatTab() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
        <p className="text-sm text-blue-800 leading-relaxed font-medium">
          المستحبات أعمال يُحب الله فعلها وتزيد في الأجر والقرب منه، وهي أشمل من السنن لتشمل ما وردت به نصوص عامة من الكتاب والسنة.
        </p>
      </div>
      {mustahabbat.map((group) => (
        <section key={group.category} className="space-y-3.5">
          <div className="mb-2 flex items-center gap-2 pr-1">
            <span className="text-xl">{group.icon}</span>
            <h3 className="font-display text-lg font-bold text-foreground">{group.category}</h3>
          </div>
          <div className="flex flex-col gap-3">
            {group.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border border-blue-100/50 bg-white p-4 shadow-sm hover:shadow-soft hover:border-blue-200/50 transition-all duration-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 shadow-sm" />
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function MakrohaatTab() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-4">
        <p className="text-sm text-amber-800 leading-relaxed font-medium">
          المكروهات أمور يُنصح بتجنبها لأنها تُنقص الأجر أو تُنافي كمال العبادة، دون أن تبلغ حد التحريم.
        </p>
      </div>
      {makrohaat.map((group) => (
        <section key={group.category} className="space-y-3.5">
          <div className="mb-2 flex items-center gap-2 pr-1">
            <span className="text-xl">{group.icon}</span>
            <h3 className="font-display text-lg font-bold text-foreground">{group.category}</h3>
          </div>
          <div className="flex flex-col gap-3">
            {group.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border border-amber-100/50 bg-white p-4 shadow-sm hover:shadow-soft hover:border-amber-200/50 transition-all duration-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white text-[10px] font-bold border border-white/5 shadow-sm">!</span>
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

// ---- مكوّن الصفحة الرئيسي ----
function WajibaatPage() {
  const [activeTab, setActiveTab] = useState<TabId>("wajibaat");

  return (
    <div>
      <PageHeader
        eyebrow="فقه العمرة"
        title="الواجبات والسنن والمستحبات"
        description="كل ما يحتاجه المعتمر من الناحية الفقهية: الواجبات التي يأثم بتركها، والسنن التي يُثاب على فعلها، والمكروهات التي ينبغي اجتنابها."
      />

      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* شريط التبويبات */}
        <div className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-2xl border border-border/60 bg-muted/40 p-1.5 shadow-soft">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 py-3 px-2 text-center rounded-xl transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#1B4332] text-white shadow-md font-bold scale-[1.02] border-b-2 border-gold"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
              }`}
            >
              <span className="text-xl leading-none">{tab.icon}</span>
              <span className="text-[11px] mt-0.5">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* محتوى التبويب */}
        <div className="animate-fade-in-up">
          {activeTab === "wajibaat"    && <WajibaatTab />}
          {activeTab === "sunan"       && <SunanTab />}
          {activeTab === "mustahabbat" && <MustahabbatTab />}
          {activeTab === "makrohaat"   && <MakrohaatTab />}
        </div>
      </div>
    </div>
  );
}
