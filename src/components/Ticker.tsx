// ===================================================
// Ticker.tsx — شريط متحرك (نيوز فيد) للأدعية والآيات
// ===================================================

import { tickerItems } from "@/lib/tickerContent";

export function Ticker() {
  // نكرر العناصر مرتين لضمان تمرير سلس بلا فجوة عند انتهاء الدورة
  const loopItems = [...tickerItems, ...tickerItems];

  return (
    <div
      className="relative overflow-hidden border-b border-white/10"
      style={{ backgroundColor: "#14342A" }}
      dir="rtl"
      aria-label="شريط الأدعية والآيات"
    >
      <div className="flex items-stretch">
        {/* شارة ثابتة */}
        <div
          className="z-10 flex shrink-0 items-center gap-2 px-3 text-xs font-bold text-white md:px-4 md:text-sm"
          style={{ backgroundColor: "#1B4332" }}
        >
          <span className="text-base">🤲</span>
          <span className="hidden sm:inline">من الأدعية والآيات</span>
        </div>

        {/* المسار المتحرك */}
        <div className="ticker-track flex flex-1 items-center gap-10 whitespace-nowrap py-2">
          {loopItems.map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-xs text-white/85 md:text-sm">
              <span style={{ fontFamily: "Amiri, serif" }} className="text-sm md:text-base">
                {item.text}
              </span>
              <span className="text-white/45">— {item.source}</span>
              <span className="mx-2 text-gold">❋</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
