// ===================================================
// useLanguage.ts — هوك مخصص للتحكم بلغة الموقع الحالية
// ===================================================

import { useTranslation } from "react-i18next";
import { languages, type LanguageInfo } from "@/i18n/languages";

export function useLanguage() {
  const { i18n } = useTranslation();

  const currentLanguageCode = i18n.language || "ar";
  
  // الحصول على معلومات اللغة الحالية، أو افتراض العربية كحالة احتياطية
  const currentLanguage =
    languages.find((l) => l.code === currentLanguageCode) || languages[0];

  const changeLanguage = async (code: string) => {
    const langInfo = languages.find((l) => l.code === code);
    if (!langInfo) return;

    // تغيير لغة i18next
    await i18n.changeLanguage(code);

    // تحديث خصائص html الأساسية
    document.documentElement.dir = langInfo.dir;
    document.documentElement.lang = langInfo.code;
  };

  return {
    currentLanguage,
    languages,
    changeLanguage,
  };
}
