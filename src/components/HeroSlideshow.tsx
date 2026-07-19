// ===================================================
// HeroSlideshow.tsx — شرائح متبدلة تلقائيًا لخلفية الواجهة الرئيسية
// ===================================================

import { useEffect, useState } from "react";

const slides = [
  { src: "/kaaba.png", alt: "الكعبة المشرفة" },
  { src: "/images/attractions/a6/a6-1.jpg", alt: "المسجد النبوي الشريف" },
  { src: "/images/attractions/a1/a1-1.jpg", alt: "جبل النور وغار حراء" },
  { src: "/images/attractions/a8/a8-1.jpg", alt: "مسجد قباء" },
  { src: "/images/attractions/a4/a4-1.jpg", alt: "مسجد التنعيم" },
];

const INTERVAL_MS = 5000;

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {slides.map((slide, idx) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            idx === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Light overlay — keeps text legible without washing the photos in green */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#0F2A1C]/55 via-transparent to-transparent" />

      {/* Indicator dots */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, idx) => (
          <button
            key={slide.src}
            aria-label={`الشريحة ${idx + 1}`}
            onClick={() => setActive(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === active ? "w-6 bg-gold" : "w-1.5 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
