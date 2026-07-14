// ===================================================
// fazah.ts — بيانات ونماذج خدمة "فزعة" لشبكة الإغاثة اللامركزية للمعتمرين
// ملاحظة: بيانات تجريبية (Placeholder) لأغراض العرض والتوضيح فقط
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

// بطاقة نموذجية لمعتمر لغرض العرض التوضيحي فقط
export const sampleFazahCard: FazahCard = {
  name: "عبد الرحمن سعيد المطيري",
  hotel: "فندق سويس أوتيل المقام مكة",
  groupLeaderName: "الشيخ عبد الله الحربي",
  groupLeaderPhone: "٠٥٥ ٤٤٤ ٢٢١١",
  roomNumber: "غرفة ٧١٤",
  bloodType: "O+",
  healthNote: "مريض ضغط، يحمل دواءً في حقيبته",
  language: "العربية",
  cardId: "FZ-2026-08231",
};

export interface FazahStep {
  n: number;
  title: string;
  description: string;
  icon: string;
}

export const fazahSteps: FazahStep[] = [
  {
    n: 1,
    title: "بطاقة فزعة شخصية",
    description:
      "يحصل كل معتمر على بطاقة أو سوار يحمل رمز استجابة سريعة (QR) مطبوعًا، دون الحاجة لهاتف أو إنترنت من جهته. تحتوي البطاقة على اسمه واسم فندقه ورقم غرفته وهاتف مسؤول مجموعته وفصيلة دمه وملاحظاته الصحية.",
    icon: "🪪",
  },
  {
    n: 2,
    title: "المسح من أي مرشد أو موظف استقبال",
    description:
      "عند الحاجة، يقوم أقرب مرشد معتمد أو موظف استقبال فندق مسجّل في الشبكة بمسح رمز البطاقة عبر كاميرا هاتفه، فتظهر له بيانات المعتمر فورًا دون الحاجة لتطبيق خاص.",
    icon: "📷",
  },
  {
    n: 3,
    title: "تنبيه فوري وسلسلة إغاثة",
    description:
      "بمجرد المسح، تُرسل الشبكة تنبيهًا تلقائيًا إلى مسؤول المجموعة وجهة الاتصال في حالات الطوارئ، مع مشاركة الموقع الحالي للمعتمر وإخطار استقبال الفندق، لتبدأ سلسلة المساعدة دون تأخير.",
    icon: "🚨",
  },
];

export interface FazahBenefit {
  title: string;
  description: string;
  icon: string;
}

export const fazahBenefits: FazahBenefit[] = [
  {
    title: "لا حاجة لهاتف أو إنترنت",
    description: "تعمل البطاقة بدون أي جهاز من طرف المعتمر؛ يكفي حملها كبطاقة أو سوار.",
    icon: "🔌",
  },
  {
    title: "شبكة موزعة من المتطوعين",
    description: "أي مرشد أو موظف استقبال مسجّل في الشبكة يمكنه المساعدة أينما وُجد المعتمر.",
    icon: "🕸️",
  },
  {
    title: "معلومات صحية حساسة وقت الحاجة",
    description: "فصيلة الدم والملاحظات الصحية تصل لمن يقدّم المساعدة الأولى في ثوانٍ معدودة.",
    icon: "🩺",
  },
  {
    title: "مناسبة لكبار السن وذوي الاحتياجات الخاصة",
    description: "حل بسيط لا يتطلب معرفة تقنية، ويصلح لكل الأعمار والحالات.",
    icon: "🤝",
  },
];
