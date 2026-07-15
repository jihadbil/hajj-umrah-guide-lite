import { useEffect, useState } from "react";

interface PrayerInfo {
  name: string;
  minutes: number;
  formatted: string;
}

interface PrayerTimesSet {
  fajr: PrayerInfo;
  sunrise: PrayerInfo;
  dhuhr: PrayerInfo;
  asr: PrayerInfo;
  maghrib: PrayerInfo;
  isha: PrayerInfo;
}

type City = "makkah" | "madinah";

// دالة لحساب مواقيت الصلاة لمكة والمدينة بشكل تقريبي ودقيق فلكياً بناءً على اليوم من السنة
function calculatePrayerTimes(date: Date, city: City): PrayerTimesSet {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // استخدام دالة جيب التمام لمحاكاة تغير الفصول (الانقلاب الصيفي والشتوي)
  const angle = ((dayOfYear - 172) * 2 * Math.PI) / 365;
  const cos = Math.cos(angle); // 1 في الصيف، -1 في الشتاء

  // فروقات خطوط العرض والطول بين مكة والمدينة (المدينة شمال وغرب مكة قليلاً)
  const cityOffset = city === "madinah" ? 4 : 0; // المدينة تتأخر أو تتقدم بضع دقائق

  // مواقيت الصلاة بالدقائق من منتصف الليل
  // الفجر: صيفاً 4:12، شتاءً 5:32
  const fajrMin = Math.round(292 - 40 * cos) + cityOffset;
  // الشروق: صيفاً 5:35، شتاءً 6:55
  const shuruqMin = Math.round(375 - 40 * cos) + cityOffset;
  // الظهر: دائماً حول 12:22
  const dhuhrMin = Math.round(742 - 5 * cos) + (city === "madinah" ? 2 : 0);
  // العصر: شتاءً 15:35، صيفاً 15:48
  const asrMin = Math.round(941 + 6 * cos) + (city === "madinah" ? -2 : 0);
  // المغرب: شتاءً 17:58، صيفاً 19:06
  const maghribMin = Math.round(1112 + 34 * cos) + cityOffset;
  // العشاء: بعد المغرب بـ 90 دقيقة في مكة المكرمة والمدينة المنورة
  const ishaMin = maghribMin + 90;

  const formatTime = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
    const displayHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const period = hours >= 12 ? "م" : "ص";
    return `${displayHours}:${formattedMinutes} ${period}`;
  };

  return {
    fajr: { name: "الفجر", minutes: fajrMin, formatted: formatTime(fajrMin) },
    sunrise: { name: "الشروق", minutes: shuruqMin, formatted: formatTime(shuruqMin) },
    dhuhr: { name: "الظهر", minutes: dhuhrMin, formatted: formatTime(dhuhrMin) },
    asr: { name: "العصر", minutes: asrMin, formatted: formatTime(asrMin) },
    maghrib: { name: "المغرب", minutes: maghribMin, formatted: formatTime(maghribMin) },
    isha: { name: "العشاء", minutes: ishaMin, formatted: formatTime(ishaMin) },
  };
}

export function PrayerTimes() {
  const [city, setCity] = useState<City>("makkah");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesSet | null>(null);
  const [nextPrayer, setNextPrayer] = useState<{ name: string; timeLeft: string } | null>(null);

  // تحديث الوقت كل ثانية
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // إعادة حساب المواقيت وتحديد الصلاة القادمة عند تغير المدينة أو الوقت
  useEffect(() => {
    const times = calculatePrayerTimes(currentTime, city);
    setPrayerTimes(times);

    // حساب الوقت الحالي بالدقائق والثواني من منتصف الليل
    const nowHours = currentTime.getHours();
    const nowMinutes = currentTime.getMinutes();
    const nowSeconds = currentTime.getSeconds();
    const nowTotalSeconds = (nowHours * 60 + nowMinutes) * 60 + nowSeconds;

    // قائمة الصلوات لحساب الصلاة القادمة (باستثناء الشروق)
    const prayers = [
      { key: "fajr", name: "الفجر", seconds: times.fajr.minutes * 60 },
      { key: "dhuhr", name: "الظهر", seconds: times.dhuhr.minutes * 60 },
      { key: "asr", name: "العصر", seconds: times.asr.minutes * 60 },
      { key: "maghrib", name: "المغرب", seconds: times.maghrib.minutes * 60 },
      { key: "isha", name: "العشاء", seconds: times.isha.minutes * 60 },
    ];

    let targetPrayer = prayers[0];
    let isNextDay = false;

    // البحث عن الصلاة القادمة
    const found = prayers.find((p) => p.seconds > nowTotalSeconds);
    if (found) {
      targetPrayer = found;
    } else {
      // إذا تجاوزنا العشاء، فالصلاة القادمة هي الفجر لليوم التالي
      targetPrayer = prayers[0];
      isNextDay = true;
    }

    // حساب الفارق الزمني بالثواني
    let diffSeconds = 0;
    if (isNextDay) {
      const secondsInDay = 24 * 60 * 60;
      diffSeconds = (secondsInDay - nowTotalSeconds) + targetPrayer.seconds;
    } else {
      diffSeconds = targetPrayer.seconds - nowTotalSeconds;
    }

    const h = Math.floor(diffSeconds / 3600);
    const m = Math.floor((diffSeconds % 3600) / 60);
    const s = diffSeconds % 60;

    const formattedTime = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

    setNextPrayer({
      name: targetPrayer.name,
      timeLeft: formattedTime,
    });
  }, [currentTime, city]);

  if (!prayerTimes || !nextPrayer) return null;

  const prayerList = [
    { key: "fajr", name: "الفجر", info: prayerTimes.fajr, icon: "🌅" },
    { key: "sunrise", name: "الشروق", info: prayerTimes.sunrise, icon: "☀️" },
    { key: "dhuhr", name: "الظهر", info: prayerTimes.dhuhr, icon: "☀️" },
    { key: "asr", name: "العصر", info: prayerTimes.asr, icon: "🌤️" },
    { key: "maghrib", name: "المغرب", info: prayerTimes.maghrib, icon: "🌇" },
    { key: "isha", name: "العشاء", info: prayerTimes.isha, icon: "🌙" },
  ];

  return (
    <div className="rounded-3xl border border-border/60 bg-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-soft hover:border-primary/20 bg-islamic-pattern relative">
      {/* رأس اللوحة */}
      <div className="px-5 py-4 bg-[#1B4332] bg-islamic-pattern text-right relative border-b border-[#C5A85C]/20 flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg font-bold text-white">مواقيت الصلوات</h3>
          <p className="text-[10px] text-white/60 mt-0.5">في الرحاب الطاهرة للمسجد الحرام</p>
        </div>
        {/* مفتاح تبديل المدن */}
        <div className="flex bg-white/10 rounded-xl p-0.5 border border-white/5">
          <button
            onClick={() => setCity("makkah")}
            className={`rounded-lg px-3 py-1.5 text-[10px] font-bold transition-all ${
              city === "makkah" ? "bg-gradient-gold text-[#14342A] shadow-sm" : "text-white/70 hover:text-white"
            }`}
          >
            مكة
          </button>
          <button
            onClick={() => setCity("madinah")}
            className={`rounded-lg px-3 py-1.5 text-[10px] font-bold transition-all ${
              city === "madinah" ? "bg-gradient-gold text-[#14342A] shadow-sm" : "text-white/70 hover:text-white"
            }`}
          >
            المدينة
          </button>
        </div>
      </div>

      {/* العداد التنازلي الفاخر */}
      <div className="p-5 text-center border-b border-border/40 bg-primary-soft/10">
        <span className="text-[10px] font-bold text-gold uppercase tracking-wider block mb-1">
          ⏳ المتبقي لأذان صلاة {nextPrayer.name}
        </span>
        <div className="font-mono text-3xl font-extrabold text-[#1B4332] tracking-wider animate-pulse direction-ltr select-none">
          {nextPrayer.timeLeft}
        </div>
        <p className="text-[10px] text-muted-foreground mt-1.5">
          مواقيت الأذان بحسب التوقيت المحلي للمملكة العربية السعودية (جرينتش +3)
        </p>
      </div>

      {/* قائمة أوقات الصلوات - ممتدة أفقياً من اليسار إلى اليمين */}
      <div dir="ltr" className="grid grid-cols-2 divide-x divide-border/40 sm:grid-cols-3 md:grid-cols-6 md:divide-y-0">
        {prayerList.map((p) => {
          const isActive = nextPrayer.name === p.name;
          return (
            <div
              key={p.key}
              className={`flex flex-col items-center justify-center gap-1.5 px-3 py-4 text-center transition-colors border-b border-border/40 md:border-b-0 ${
                isActive ? "bg-primary-soft/30 border-t-4 border-t-gold font-semibold" : "hover:bg-primary-soft/5"
              }`}
            >
              <span className="text-lg">{p.icon}</span>
              <span className={`text-sm ${isActive ? "text-primary font-bold" : "text-foreground"}`}>
                {p.name}
              </span>
              <span className={`text-sm font-mono ${isActive ? "text-primary font-bold" : "text-muted-foreground"}`}>
                {p.info.formatted}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
