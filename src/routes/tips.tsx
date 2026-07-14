// ===================================================
// tips.tsx — صفحة نصائح وإرشادات المعتمر مع حقيبة المعتمر التفاعلية
// ===================================================

import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";

// تعريف مسار الصفحة وبيانات SEO
export const Route = createFileRoute("/tips")({
  component: TipsPage,
  head: () => ({
    meta: [
      { title: "نصائح الرحلة — إرشادات للمعتمر" },
      { name: "description", content: "حقيبة المعتمر التفاعلية لتجهيز لوازم السفر، بالإضافة لنصائح صحية وتنظيمية وروحانية لرحلة ميسّرة ومباركة." },
    ],
  }),
});

// ---- تصنيفات حقيبة المعتمر التفاعلية ----
interface ChecklistItem {
  id: string;
  text: string;
}

interface ChecklistCategory {
  title: string;
  icon: string;
  items: ChecklistItem[];
}

const packingCategories: ChecklistCategory[] = [
  {
    title: "المستندات والأوراق الهامة",
    icon: "📄",
    items: [
      { id: "doc-passport", text: "جواز السفر وتأشيرة العمرة (نسخة مطبوعة ورقمية)" },
      { id: "doc-id", text: "الهوية الوطنية أو الإقامة الشخصية" },
      { id: "doc-flights", text: "تذاكر الطيران وتأكيدات الفنادق والمواصلات" },
      { id: "doc-cash", text: "مبالغ نقدية يسيرة وبطاقة مدى/فيزا المصرفية" },
      { id: "doc-medical", text: "الأدوية الهامة مع التقارير الطبية الخاصة بك" },
    ]
  },
  {
    title: "الإحرام ومستلزمات العبادة",
    icon: "🕋",
    items: [
      { id: "worship-ihram", text: "ثوب الإحرام للرجال (إزار ورداء أبيضين) / لباس ساتر مريح للمرأة" },
      { id: "worship-belt", text: "حزام الإحرام للرجل (مع جيوب لحفظ الهوية والمال)" },
      { id: "worship-shoes", text: "حذاء مريح للطواف والسعي (ويفضل دون خياطة للرجال)" },
      { id: "worship-duas", text: "كتيب صغير للأذكار والأدعية أو تطبيق الجوال" },
      { id: "worship-clipper", text: "مقص صغير أو ماكينة حلاقة لاستخدامها عند التحلل" },
    ]
  },
  {
    title: "العناية الشخصية والنظافة (دون عطر)",
    icon: "🧼",
    items: [
      { id: "care-soap", text: "شامبو وصابون غير معطرين (لأيام الإحرام)" },
      { id: "care-teeth", text: "فرشاة ومعجون أسنان ومسواك" },
      { id: "care-vaseline", text: "فازلين أو مرطب لحماية الفخذين والجلد من التسلخات" },
      { id: "care-umbrella", text: "مظلة شمسية خفيفة لحمايتك من شمس مكة الحارة" },
      { id: "care-clipper", text: "قراضة أظافر صغيرة لتجهيز السنن قبل الإحرام" },
    ]
  },
  {
    title: "المستلزمات التقنية والعامة",
    icon: "🔌",
    items: [
      { id: "tech-phone", text: "الهاتف المحمول مع شواحنه المناسبة" },
      { id: "tech-powerbank", text: "شاحن متنقل (Powerbank) لشحن الجوال بالحرم" },
      { id: "tech-plug", text: "مقبس كهربائي ثلاثي مناسب للمملكة" },
      { id: "tech-bag", text: "حقيبة ظهر خفيفة أو حقيبة خصر لحفظ الأحذية والمقتنيات" },
    ]
  }
];

// ---- مجموعات النصائح العامة (غير الحقيبة) ----
const tipsGroups = [
  {
    title: "نصائح صحية وتنظيمية",
    icon: "🩺",
    items: [
      "الإكثار من شرب ماء زمزم البارد والدافئ لتجنّب الجفاف والإرهاق.",
      "لبس أحذية مريحة أثناء السفر وأخذ قسط من الراحة بين المناسك.",
      "حمل كمامة عند الازدحام الشديد في صحن الطواف أو المسعى لتفادي العدوى.",
      "حفظ بطاقة تعريفية أو سوار به بيانات الحملة ورقم الهاتف لتجنب الضياع.",
      "تحديد نقطة تجمّع واضحة (مثل بوابة معينة) مع أفراد عائلتك في حال التفرق.",
    ],
  },
  {
    title: "توجيهات روحانية وسلوكية",
    icon: "🌿",
    items: [
      "استحضار النيّة الخالصة لله والابتعاد عن الرياء والتصوير المفرط في المناسك.",
      "التخلّق بحسن الخلق والصبر والرفق بكبار السن والضعفاء أثناء الزحام.",
      "الابتعاد التام عن الرفث والفسوق والجدال والمشاحنات التي تفسد الأجر.",
      "اغتنام الأوقات الشريفة كالثلث الأخير من الليل والجلوس بالمسجد الحرام.",
      "تخصيص وقت محدد للدعاء لجميع الأهل والأقارب وعموم المسلمين.",
    ],
  },
];

function TipsPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // تحميل البيانات المخزنة عند تحميل الصفحة أول مرة
  useEffect(() => {
    const saved = localStorage.getItem("umrah_packing_checklist");
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading checklist from localStorage", e);
      }
    }
  }, []);

  // دالة لتعديل حالة عنصر وحفظها
  const toggleItem = (id: string) => {
    const updated = {
      ...checkedItems,
      [id]: !checkedItems[id],
    };
    setCheckedItems(updated);
    localStorage.setItem("umrah_packing_checklist", JSON.stringify(updated));
  };

  // دالة لإعادة تهيئة الحقيبة وتصفيرها
  const resetChecklist = () => {
    if (confirm("هل أنت متأكد من رغبتك في إعادة تعيين القائمة وتصفيرها؟")) {
      setCheckedItems({});
      localStorage.removeItem("umrah_packing_checklist");
    }
  };

  // حساب إحصائيات الحقيبة
  const totalItems = packingCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / totalItems) * 100) || 0;

  return (
    <div className="pb-16">
      {/* رأس الصفحة */}
      <PageHeader
        eyebrow="نصائح وتوجيهات"
        title="إرشادات وحقيبة المعتمر"
        description="نصائح عملية وتوجيهات شرعية، بالإضافة إلى حقيبة تفاعلية لتجهيز كافة لوازم الرحلة بكل طمأنينة."
      />

      <div className="mx-auto max-w-5xl px-4 py-10 space-y-12">
        
        {/* ================= قسم حقيبة المعتمر التفاعلية ================= */}
        <section className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 shadow-soft relative overflow-hidden bg-islamic-pattern">
          {/* Mosque background decor */}
          <div className="absolute -top-12 -left-12 text-9xl opacity-5 select-none font-display text-gold pointer-events-none">🧳</div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/40 pb-6 mb-6">
            <div className="text-right">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-bold text-gold">
                🎒 أداة تفاعلية
              </span>
              <h2 className="font-display text-2xl font-bold text-foreground mt-2 md:text-3xl">حقيبة المعتمر الإلكترونية</h2>
              <p className="text-sm text-muted-foreground mt-1">جهّز لوازم السفر خطوة بخطوة، ونحن سنحفظ تقدمك تلقائياً.</p>
            </div>
            
            <button
              onClick={resetChecklist}
              className="self-start sm:self-center rounded-xl border border-red-200 bg-red-50/50 hover:bg-red-50 hover:text-red-700 px-4 py-2.5 text-xs font-bold text-red-600 transition-colors"
            >
              🔄 إعادة ضبط القائمة
            </button>
          </div>

          {/* شريط التقدم الفاخر */}
          <div className="bg-primary-soft/30 rounded-2xl p-4.5 mb-8 border border-primary/10">
            <div className="flex justify-between items-center mb-2.5">
              <span className="text-xs font-bold text-foreground">شريط جاهزية الحقيبة</span>
              <span className="text-xs font-bold text-primary">{progressPercent}% ({checkedCount} من {totalItems} عناصر جاهزة)</span>
            </div>
            <div className="h-3.5 rounded-full bg-border overflow-hidden p-[1.5px] shadow-inner">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-primary transition-all duration-500 shadow-[0_0_6px_rgba(45,106,79,0.5)]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {progressPercent === 100 && (
              <div className="mt-3 text-center text-xs font-bold text-emerald-700 animate-bounce">
                🎉 هنيئاً لك! حقيبتك جاهزة تماماً لرحلة العمرة المباركة. نسأل الله لكم التيسير والقبول.
              </div>
            )}
          </div>

          {/* شبكة التصنيفات */}
          <div className="grid gap-6 md:grid-cols-2">
            {packingCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm hover:shadow-soft transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center gap-3 border-b border-border/30 pb-3.5 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-gold-green text-white text-base shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-primary">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.items.map((item) => {
                    const isChecked = !!checkedItems[item.id];
                    return (
                      <label
                        key={item.id}
                        className={`flex items-start gap-3 rounded-xl p-3 border transition-all duration-300 cursor-pointer ${
                          isChecked
                            ? "bg-primary-soft/20 border-primary/20 text-muted-foreground"
                            : "bg-white border-border/60 text-foreground hover:border-primary/20 hover:bg-primary-soft/5"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleItem(item.id)}
                          className="mt-1 h-4.5 w-4.5 rounded border-border text-primary focus:ring-primary/30 cursor-pointer"
                        />
                        <span className={`text-xs leading-relaxed transition-all select-none ${isChecked ? "line-through opacity-75 font-medium" : "font-semibold"}`}>
                          {item.text}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= قسم النصائح والإرشادات العامة ================= */}
        <section className="grid gap-6 md:grid-cols-2">
          {tipsGroups.map((group) => (
            <article
              key={group.title}
              className="group rounded-3xl border border-border/60 bg-card p-6 md:p-8 shadow-soft hover:shadow-md hover:border-primary/20 transition-all duration-300 relative overflow-hidden bg-islamic-pattern text-right"
            >
              {/* Floating decor */}
              <div className="absolute -top-6 -left-6 text-7xl opacity-5 select-none font-display text-gold pointer-events-none group-hover:scale-110 transition-transform duration-500">
                {group.icon}
              </div>

              <div className="mb-6 flex items-center gap-3 relative z-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold-green text-white text-xl shadow-soft border border-white/5 group-hover:scale-105 transition-transform duration-300">
                  {group.icon}
                </div>
                <h2 className="font-display text-2xl font-bold text-[#1B4332]">{group.title}</h2>
              </div>

              <ul className="space-y-4 pr-1 relative z-10">
                {group.items.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-foreground/80 leading-relaxed text-sm">
                    {/* Bullet point */}
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 shadow-sm" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
