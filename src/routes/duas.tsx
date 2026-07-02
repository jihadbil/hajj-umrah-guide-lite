import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, DuaCard } from "@/components/PageHeader";

export const Route = createFileRoute("/duas")({
  component: DuasPage,
  head: () => ({
    meta: [
      { title: "الأدعية والأذكار — للحاج والمعتمر" },
      { name: "description", content: "مجموعة من الأدعية والأذكار المأثورة للحج والعمرة: التلبية، دعاء الطواف، دعاء الصفا والمروة، ودعاء عرفة." },
    ],
  }),
});

const groups = [
  {
    title: "التلبية",
    items: [
      { title: "تلبية النبي ﷺ", arabic: "لبّيك اللهم لبّيك، لبّيك لا شريك لك لبّيك، إنّ الحمد والنعمة لك والملك، لا شريك لك.", source: "متفق عليه" },
    ],
  },
  {
    title: "أدعية الطواف",
    items: [
      { title: "بداية كل شوط", arabic: "بسم الله، والله أكبر، اللهم إيماناً بك، وتصديقاً بكتابك، ووفاءً بعهدك، واتّباعاً لسنّة نبيك محمد ﷺ.", source: "أثر عن ابن عمر" },
      { title: "بين الركن اليماني والحجر الأسود", arabic: "﴿ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ ﴾", source: "البقرة ٢٠١" },
    ],
  },
  {
    title: "أدعية السعي",
    items: [
      { title: "عند الصعود على الصفا والمروة", arabic: "﴿ إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ ﴾ أبدأ بما بدأ الله به.", source: "رواه مسلم" },
      { title: "على الصفا والمروة", arabic: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير، لا إله إلا الله وحده، أنجز وعده، ونصر عبده، وهزم الأحزاب وحده.", source: "رواه مسلم" },
    ],
  },
  {
    title: "دعاء يوم عرفة",
    items: [
      { title: "خير الدعاء", arabic: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير.", source: "خير الدعاء دعاء يوم عرفة — الترمذي" },
      { title: "دعاء جامع", arabic: "اللهم لك الحمد كالذي نقول، وخيراً مما نقول، اللهم لك صلاتي ونسكي ومحياي ومماتي، وإليك مآبي، ولك ربّ تراثي.", source: "أثر" },
    ],
  },
  {
    title: "أذكار عامة للحاج",
    items: [
      { title: "دخول المسجد", arabic: "اللهم افتح لي أبواب رحمتك.", source: "رواه مسلم" },
      { title: "رؤية الكعبة", arabic: "اللهم زد هذا البيت تشريفاً وتعظيماً وتكريماً ومهابة، وزد من شرّفه وكرّمه ممن حجّه أو اعتمره تشريفاً وتكريماً وتعظيماً وبرّاً.", source: "أثر" },
      { title: "عند شرب ماء زمزم", arabic: "اللهم إني أسألك علماً نافعاً، ورزقاً واسعاً، وشفاءً من كل داء.", source: "أثر عن ابن عباس" },
    ],
  },
];

function DuasPage() {
  return (
    <div>
      <PageHeader
        eyebrow="الأدعية والأذكار"
        title="أدعية مأثورة للحج والعمرة"
        description="مجموعة منتقاة من الأدعية والأذكار الثابتة عن النبي ﷺ لكل موقف من مواقف الرحلة."
      />
      <div className="mx-auto max-w-5xl px-4 py-12 space-y-14">
        {groups.map((g) => (
          <section key={g.title}>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">{g.title}</h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {g.items.map((d) => (
                <DuaCard key={d.title} title={d.title} arabic={d.arabic} source={d.source} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
