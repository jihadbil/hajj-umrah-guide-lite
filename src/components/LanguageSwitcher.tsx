// ===================================================
// LanguageSwitcher.tsx — مكوّن تبديل لغة الموقع
// ===================================================

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export function LanguageSwitcher() {
  const { currentLanguage, languages, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // إغلاق القائمة المنسدلة عند الضغط خارج المكوّن
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return null; // اخفاء زر تغيير اللغة لبعض الوقت

  return (
    <div className="relative" ref={dropdownRef}>
      {/* زر التبديل الرئيسي */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-9 items-center gap-1.5 rounded-lg px-2.5 text-white/70 hover:bg-white/10 hover:text-white transition-all border border-transparent hover:border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
        aria-label="تبديل لغة الموقع"
      >
        <span className="text-base leading-none">{currentLanguage.flag}</span>
        <span className="text-xs font-bold uppercase tracking-wider">{currentLanguage.code}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 text-white/40 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* القائمة المنسدلة */}
      {isOpen && (
        <div 
          className="absolute left-0 mt-1.5 w-44 origin-top-left rounded-xl border border-gold/15 bg-[#1B4332]/98 backdrop-blur-md p-1.5 shadow-2xl z-50 animate-fade-in-up"
          dir="rtl"
        >
          <div className="flex flex-col gap-0.5">
            {languages.map((lang) => {
              const isActive = lang.code === currentLanguage.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-right text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white/15 text-white font-bold border-r-2 border-gold"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="text-base leading-none">{lang.flag}</span>
                  <div className="flex-1 text-right">
                    <span className="block">{lang.nativeName}</span>
                  </div>
                  {isActive && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
