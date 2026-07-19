// ===================================================
// Ticker.tsx — شريط متحرك (نيوز فيد) للأدعية والآيات
// ===================================================

import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";

export function Ticker() {
  const { t, i18n } = useTranslation("common");
  const currentLang = i18n.language;

  // جلب العناصر المترجمة للغة الحالية
  const items = (t("ticker.items", { returnObjects: true, defaultValue: [] }) as Array<{
    text: string;
    source: string;
  }>) || [];

  // جلب النصوص العربية الأصلية في حال كانت اللغة الحالية غير العربية لعرض المعنى مع اللفظ
  const arItems =
    currentLang !== "ar"
      ? i18n.getResourceBundle("ar", "common")?.ticker?.items || []
      : [];

  const processedItems = items.map((item, idx) => {
    const arText = arItems[idx]?.text;
    if (arText && arText !== item.text) {
      return {
        text: `${arText} ✦ ${item.text}`,
        source: item.source,
      };
    }
    return item;
  });

  // نكرر العناصر مرتين لضمان تمرير سلس بلا فجوة عند انتهاء الدورة
  const loopItems = [...processedItems, ...processedItems];

  return (
    <div
      className="relative overflow-hidden border-b border-white/10 bg-[#14342A] dark:bg-[#0d221b] transition-colors duration-300"
      dir={currentLang === "ur" || currentLang === "ar" ? "rtl" : "ltr"}
      aria-label="شريط الأدعية والآيات"
    >
      <div className="flex items-stretch">
        {/* شارة ثابتة */}
        <div className="z-10 flex shrink-0 items-center gap-2 px-3 text-xs font-bold text-white md:px-4 md:text-sm bg-[#1B4332] dark:bg-[#112a1f] transition-colors duration-300">
          <LucideIcon name="🤲" size={14} className="text-white" />
          <span className="hidden sm:inline">{t("ticker.title", { defaultValue: "من الأدعية والآيات" })}</span>
        </div>

        {/* المسار المتحرك */}
        <div className="ticker-track flex flex-1 items-center gap-10 whitespace-nowrap py-2">
          {loopItems.map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-xs text-white/85 md:text-sm">
              <span className="font-serif text-sm md:text-base">{item.text}</span>
              <span className="text-white/45">— {item.source}</span>
              <span className="mx-2 text-gold">❋</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
