// ===================================================
// config.ts — إعداد وتهيئة مكتبة i18next
// ===================================================

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

i18n
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      // تحميل ملفات الترجمة بشكل ديناميكي (Lazy Loading) من مجلد locales
      return import(`./locales/${language}/${namespace}.json`);
    })
  )
  .use(initReactI18next)
  .init({
    fallbackLng: "ar",
    supportedLngs: ["ar", "en", "id", "tr", "fr", "ur"],
    defaultNS: "common",
    ns: ["common"], // سيتم تحميل الـ namespaces الأخرى تلقائياً عند طلبها في المكونات
    debug: false,
    interpolation: {
      escapeValue: false, // React يقوم بالحماية من XSS تلقائياً
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: true, // تفعيل Suspense للانتظار حتى انتهاء تحميل ملفات الترجمة
    },
  });

export default i18n;
