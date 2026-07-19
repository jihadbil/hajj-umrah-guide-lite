// ===================================================
// fazah.ts — بيانات ونماذج خدمة "فزعة" لشبكة الإغاثة اللامركزية للمعتمرين
// ===================================================

export interface FazahCard {
  name: string;
  hotel: string;
  groupLeaderName: string;
  groupLeaderPhone: string;
  roomNumber: string;
  bloodType: string;
  healthNote: string;
  language: string;
  cardId: string;
}

export interface FazahStep {
  n: number;
  title: string;
  description: string;
  icon: string;
}

export interface FazahBenefit {
  title: string;
  description: string;
  icon: string;
}

export const getSampleFazahCard = (t: (key: string, options?: any) => any): FazahCard => {
  return {
    name: t("sampleCard.name"),
    hotel: t("sampleCard.hotel"),
    groupLeaderName: t("sampleCard.groupLeaderName"),
    groupLeaderPhone: t("sampleCard.groupLeaderPhone"),
    roomNumber: t("sampleCard.roomNumber"),
    bloodType: t("sampleCard.bloodType"),
    healthNote: t("sampleCard.healthNote"),
    language: t("sampleCard.language"),
    cardId: "FZ-2026-08231",
  };
};

export const getFazahSteps = (t: (key: string, options?: any) => any): FazahStep[] => {
  return [
    {
      n: 1,
      title: t("steps.s1.title"),
      description: t("steps.s1.desc"),
      icon: "🪪",
    },
    {
      n: 2,
      title: t("steps.s2.title"),
      description: t("steps.s2.desc"),
      icon: "📷",
    },
    {
      n: 3,
      title: t("steps.s3.title"),
      description: t("steps.s3.desc"),
      icon: "🚨",
    },
  ];
};

export const getFazahBenefits = (t: (key: string, options?: any) => any): FazahBenefit[] => {
  return [
    {
      title: t("benefits.b1.title"),
      description: t("benefits.b1.desc"),
      icon: "🔌",
    },
    {
      title: t("benefits.b2.title"),
      description: t("benefits.b2.desc"),
      icon: "🕸️",
    },
    {
      title: t("benefits.b3.title"),
      description: t("benefits.b3.desc"),
      icon: "🩺",
    },
    {
      title: t("benefits.b4.title"),
      description: t("benefits.b4.desc"),
      icon: "🤝",
    },
  ];
};
