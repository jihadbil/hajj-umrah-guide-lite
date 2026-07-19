// ===================================================
// umrahJourney.ts — بيانات رحلة العمرة خطوة بخطوة
// ===================================================

// ---- أنواع البيانات (Interfaces) ----

// دعاء أو ذكر مستحب — يحتوي على عنوان ونص عربي ومصدر ومترجم
export interface Dua {
  title: string;
  arabic: string;
  transliteration?: string;
  translation?: string; // ترجمة المعنى
  source?: string;
}

// زوج خطأ وصواب — يُسخدم في قسم الأخطاء الشائعة
export interface MistakeItem {
  wrong: string; // الخطأ الشائع
  right: string; // الصواب الشرعي
}

// خطوة كاملة في رحلة العمرة
export interface JourneyStep {
  id: number; // رقم الخطوة
  title: string; // عنوان الخطوة
  subtitle: string; // وصف مختصر
  icon: string; // أيقونة إيموجي
  intro: string; // مقدمة تعريفية بالخطوة
  sections: {
    // أقسام الشرح التفصيلي
    heading: string;
    body: string;
    list?: string[];
  }[];
  recommended: string[]; // المستحبات في هذه الخطوة
  disliked: string[]; // المكروهات في هذه الخطوة
  mistakeItems: MistakeItem[]; // الأخطاء الشائعة مع الصواب
  duas: Dua[]; // الأدعية والأذكار المستحبة
  note?: string; // تنبيه مهم اختياري
  nextStep?: string; // اسم الخطوة التالية
}

// ---- استرجاع الخطوات المترجمة ديناميكياً ----
export const getUmrahSteps = (t: (key: string, options?: any) => any): JourneyStep[] => {
  const stepsKeys = ["step1", "step2", "step3", "step4", "step5", "step6", "step7", "step8"] as const;
  const icons = ["🧴", "🕋", "🤲", "🕌", "🌀", "🙏", "🏃", "✂️"];

  return stepsKeys.map((key, idx) => {
    const sKey = `steps.${key}`;

    // جلب أقسام الشرح
    const sectionsRaw = t(`${sKey}.sections`, { returnObjects: true }) as any[];
    const sections = Array.isArray(sectionsRaw)
      ? sectionsRaw.map((sec) => ({
          heading: sec.heading || "",
          body: sec.body || "",
          list: Array.isArray(sec.list) ? sec.list : undefined,
        }))
      : [];

    // جلب الأخطاء الشائعة
    const mistakesRaw = t(`${sKey}.mistakeItems`, { returnObjects: true, defaultValue: [] }) as any[];
    const mistakeItems = Array.isArray(mistakesRaw)
      ? mistakesRaw.map((mis) => ({
          wrong: mis.wrong || "",
          right: mis.right || "",
        }))
      : [];

    // جلب الأدعية والأذكار
    const duasRaw = t(`${sKey}.duas`, { returnObjects: true, defaultValue: [] }) as any[];
    const duas = Array.isArray(duasRaw)
      ? duasRaw.map((dua) => ({
          title: dua.title || "",
          arabic: dua.arabic || "",
          transliteration: dua.transliteration || undefined,
          translation: dua.translation || undefined,
          source: dua.source || undefined,
        }))
      : [];

    return {
      id: idx + 1,
      title: t(`${sKey}.title`),
      subtitle: t(`${sKey}.subtitle`),
      icon: icons[idx],
      intro: t(`${sKey}.intro`),
      sections,
      recommended: t(`${sKey}.recommended`, { returnObjects: true, defaultValue: [] }) as string[],
      disliked: t(`${sKey}.disliked`, { returnObjects: true, defaultValue: [] }) as string[],
      mistakeItems,
      duas,
      note: t(`${sKey}.note`, { defaultValue: "" }) || undefined,
      nextStep: idx < stepsKeys.length - 1 ? t(`steps.step${idx + 2}.title`) : undefined,
    };
  });
};
