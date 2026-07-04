import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, StepCard } from "@/components/PageHeader";

export const Route = createFileRoute("/hajj")({
  component: PillarsPage,
  head: () => ({
    meta: [
      { title: "الأركان والواجبات والسنن — مرشد" },
      { name: "description", content: "أركان العمرة وواجباتها وسننها المستحبة مع الأدلة من القرآن والسنة الصحيحة." },
    ],
  }),
});

const pillars = [
  {
    n: "١",
    title: "الإحرام",
    icon: "🧎",
    body: "الإحرام هو نية الدخول في النسك، ويكون من الميقات الذي حدده النبي ﷺ.",
    daleel: "﴿وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ﴾ [البقرة: ١٩٦]",
    note: "ليس المقصود بالإحرام لبس الرداء والإزار فقط، وإنما نية الدخول في العمرة. أما لباس الإحرام فهو من صفته.",
  },
  {
    n: "٢",
    title: "الطواف",
    icon: "🌀",
    body: "الطواف سبعة أشواط حول الكعبة، يبدأ بالحجر الأسود وينتهي إليه، مع جعل الكعبة عن يسار الطائف.",
    daleel: "﴿وَلْيَطَّوَّفُوا بِالْبَيْتِ الْعَتِيقِ﴾ [الحج: ٢٩]",
    note: "قال النبي ﷺ: «خذوا عني مناسككم» — رواه مسلم. وقد طاف ﷺ سبعة أشواط وأمر الأمة أن تأخذ مناسكها عنه.",
  },
  {
    n: "٣",
    title: "السعي",
    icon: "🏃",
    body: "السعي سبعة أشواط بين الصفا والمروة، يبدأ بالصفا وينتهي بالمروة.",
    daleel: "﴿إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ﴾ [البقرة: ١٥٨]",
    note: "قال النبي ﷺ: «اسعوا؛ فإن الله كتب عليكم السعي» — رواه أحمد وصححه جمع من أهل العلم.",
  },
];

const obligations = [
  {
    title: "الإحرام من الميقات",
    icon: "📍",
    body: "يجب على من أراد العمرة أن يحرم من الميقات الذي يمر به، ولا يجوز له تجاوزه دون إحرام.",
    note: "من تجاوز الميقات دون إحرام وجب عليه الرجوع إليه ليحرم منه، فإن لم يرجع فعليه دم يُذبح في مكة عند جمهور أهل العلم.",
  },
  {
    title: "الحلق أو التقصير",
    icon: "✂️",
    body: "إذا فرغ المعتمر من السعي، وجب عليه أن يحلق شعره أو يقصره، وبه يتحلل من عمرته.",
    note: "الحلق أفضل للرجل. والمرأة لا تحلق رأسها، وإنما تقصر من أطراف شعرها قدر أنملة تقريبًا.",
  },
];

const sunnahs = [
  { icon: "🚿", title: "الاغتسال قبل الإحرام", body: "يستحب لمن أراد الإحرام أن يغتسل، سواء كان رجلًا أو امرأة، حتى وإن كانت المرأة حائضًا أو نفساء." },
  { icon: "🌸", title: "التطيب قبل الإحرام", body: "يستحب للرجل أن يتطيب في بدنه قبل عقد نية الإحرام، ولا يضع الطيب على ثوبي الإحرام. أما المرأة فلا تتطيب إذا كانت ستمر بالرجال الأجانب." },
  { icon: "👘", title: "لبس الإزار والرداء الأبيضين", body: "يستحب للرجل أن يحرم في إزار ورداء، والأفضل أن يكونا أبيضين نظيفين. قال ﷺ: «البسوا من ثيابكم البياض فإنها من خير ثيابكم»." },
  { icon: "🔊", title: "الإكثار من التلبية", body: "يُسن للمعتمر أن يرفع صوته بالتلبية إذا كان رجلًا، ويكثر منها حتى يبدأ الطواف. والمرأة تلبي بقدر ما تسمع نفسها." },
  { icon: "💪", title: "الاضطباع في الطواف", body: "يُسن للرجل في طواف العمرة فقط أن يجعل وسط ردائه تحت إبطه الأيمن وطرفيه على كتفه الأيسر طوال الطواف." },
  { icon: "🏃", title: "الرمل في الأشواط الثلاثة الأولى", body: "الرمل هو الإسراع في المشي مع تقارب الخطوات. يُسن للرجل في الأشواط الثلاثة الأولى من طواف العمرة، ولا يُشرع للنساء." },
  { icon: "🖤", title: "استلام الحجر الأسود وتقبيله", body: "يُسن استلام الحجر الأسود وتقبيله إن تيسر من غير مزاحمة. فإن لم يتمكن استلمه بيده، فإن لم يستطع أشار إليه وكبّر." },
  { icon: "🟫", title: "استلام الركن اليماني", body: "يُسن استلام الركن اليماني باليد إن تيسر. أما تقبيله أو الإشارة إليه عند تعذر استلامه فلم يثبت عن النبي ﷺ." },
  { icon: "🤲", title: "الدعاء بين الركنين", body: "يستحب أن يقول بين الركن اليماني والحجر الأسود: ﴿رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ﴾." },
  { icon: "🙏", title: "صلاة ركعتي الطواف", body: "يستحب أن يصلي بعد الفراغ من الطواف ركعتين خلف مقام إبراهيم، يقرأ في الأولى سورة الكافرون وفي الثانية سورة الإخلاص." },
  { icon: "💧", title: "الشرب من ماء زمزم", body: "يستحب للمعتمر أن يشرب من ماء زمزم بعد الفراغ من الطواف، وأن يدعو الله بما أحب. قال ﷺ: «ماء زمزم لما شُرب له»." },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-px flex-1 bg-border" />
      <h2 className="font-display text-xl font-bold text-foreground px-2">{children}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function PillarsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="أحكام العمرة"
        title="الأركان والواجبات والسنن"
        description="الأعمال التي تقوم عليها العمرة مع الأدلة من القرآن الكريم والسنة الصحيحة."
      />

      <div className="mx-auto max-w-4xl px-4 py-12 space-y-16">

        {/* Pillars */}
        <section>
          <SectionTitle>أركان العمرة الثلاثة</SectionTitle>
          <p className="mb-8 text-sm text-muted-foreground leading-relaxed text-center max-w-xl mx-auto">
            الأركان هي الأعمال التي لا تصح العمرة إلا بها، ولا يجبر تركها بدم، بل لا بد من الإتيان بها.
          </p>
          <div className="grid gap-5">
            {pillars.map((p) => (
              <StepCard key={p.title} n={p.n} title={`${p.icon}  ${p.title}`}>
                <p>{p.body}</p>
                <div className="mt-3 rounded-xl bg-primary-soft border border-primary/20 p-4">
                  <div className="text-xs font-semibold text-primary mb-1">الدليل من القرآن</div>
                  <p className="font-display text-base leading-loose text-foreground">{p.daleel}</p>
                </div>
                {p.note && (
                  <div className="mt-3 rounded-xl bg-amber-50 border border-amber-200 p-3 text-sm text-amber-800">
                    <span className="font-semibold">تنبيه: </span>{p.note}
                  </div>
                )}
              </StepCard>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-primary/20 bg-primary-soft p-5">
            <h3 className="font-display font-bold text-primary mb-2">فائدة فقهية</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              الحلق أو التقصير ليس ركنًا عند جمهور أهل العلم، وإنما هو واجب من واجبات العمرة. ولذلك فرّق الفقهاء بين الأركان — التي لا تصح العمرة بدونها — والواجبات التي يُجبر تركها بدم.
            </p>
          </div>
        </section>

        {/* Obligations */}
        <section>
          <SectionTitle>واجبات العمرة</SectionTitle>
          <p className="mb-8 text-sm text-muted-foreground leading-relaxed text-center max-w-xl mx-auto">
            الواجبات هي الأعمال التي يجب الإتيان بها، فإن تركها المعتمر عمدًا أثم، وإن تركها جبرها بدم — خلافًا للأركان.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {obligations.map((o) => (
              <div key={o.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-xl text-white font-bold shrink-0"
                    style={{ backgroundColor: "#1B4332" }}
                  >
                    {o.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{o.title}</h3>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{o.body}</p>
                {o.note && (
                  <div className="mt-3 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">
                    <span className="font-semibold">تنبيه: </span>{o.note}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-border bg-card p-5">
            <h3 className="font-display font-bold text-foreground mb-3 text-center">الفرق بين الركن والواجب</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center p-3 rounded-xl bg-red-50 border border-red-100">
                <div className="font-display font-bold text-red-800 mb-1">الركن</div>
                <div className="text-red-700 text-xs">لا تصح العمرة بدونه ولا يُجبر بدم</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-amber-50 border border-amber-100">
                <div className="font-display font-bold text-amber-800 mb-1">الواجب</div>
                <div className="text-amber-700 text-xs">تصح العمرة مع تركه لكن يلزمه دم عند جمهور أهل العلم</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sunnahs */}
        <section>
          <SectionTitle>سنن العمرة المستحبة</SectionTitle>
          <p className="mb-8 text-sm text-muted-foreground leading-relaxed text-center max-w-xl mx-auto">
            سنن العمرة هي الأعمال التي يُستحب فعلها اقتداءً بالنبي ﷺ، ويُثاب عليها ولا يأثم بتركها، ولا تؤثر في صحة العمرة.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {sunnahs.map((s) => (
              <div key={s.title} className="flex gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
                  style={{ backgroundColor: "#f0faf5" }}
                >
                  {s.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground mb-1">{s.title}</div>
                  <div className="text-xs text-foreground/70 leading-relaxed">{s.body}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-primary/20 bg-primary-soft p-5">
            <h3 className="font-display font-bold text-primary mb-2">تنبيه فقهي</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              ليس كل ما فعله النبي ﷺ في العمرة يكون واجبًا، بل منه ما هو ركن، ومنه ما هو واجب، ومنه ما هو سنة. وقد اعتنى الفقهاء بتمييز ذلك حتى لا يختلط على المسلم ما يلزمه بما يستحب له.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
