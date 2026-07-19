// ===================================================
// GallerySlideshow.tsx — معرض صور بشكل سلايدر تفاعلي
// ===================================================

import { useState } from "react";

export function GallerySlideshow({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  const goTo = (idx: number) => {
    const next = (idx + images.length) % images.length;
    setActive(next);
  };

  return (
    <div className="mb-10">
      {/* الصورة الرئيسية */}
      <div className="relative aspect-video overflow-hidden rounded-3xl border border-border/60 shadow-card bg-muted">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${idx + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              idx === active ? "opacity-100" : "opacity-0"
            }`}
            loading={idx === 0 ? "eager" : "lazy"}
          />
        ))}

        {/* أزرار التنقل */}
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="الصورة السابقة"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[#1B4332] shadow-md hover:bg-white transition-colors"
        >
          ›
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="الصورة التالية"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[#1B4332] shadow-md hover:bg-white transition-colors"
        >
          ‹
        </button>

        {/* عداد الصور */}
        <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
          {active + 1} / {images.length}
        </span>
      </div>

      {/* الصور المصغّرة */}
      <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
        {images.map((src, idx) => (
          <button
            key={src}
            type="button"
            onClick={() => goTo(idx)}
            className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
              idx === active
                ? "border-gold shadow-soft"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={src}
              alt={`${alt} مصغرة ${idx + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
