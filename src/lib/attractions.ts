// ===================================================
// attractions.ts — بيانات المزارات والمعالم في مكة والمدينة
// ===================================================

export interface Attraction {
  id: number;
  name: string;
  city: string; // مكة المكرمة | المدينة المنورة
  cityKey: "makkah" | "madinah";
  icon: string;
  description: string;
  tip: string; // نصيحة أو حكم شرعي متعلق بالزيارة
  distance: string; // المسافة التقريبية من الحرم
  history: string; // نبذة تاريخية موسّعة عن المعلم
  howToVisit: string; // كيفية الوصول وآداب الزيارة
  bestTime: string; // أفضل وقت للزيارة
  image: string; // مسار الصورة الرئيسية الحقيقية
  gallery: string[]; // مسارات صور حقيقية إضافية لمعرض الصور
}

const staticAttractionData = [
  {
    id: 1,
    key: "a1",
    cityKey: "makkah" as const,
    icon: "⛰️",
    image: "/images/attractions/a1/a1-1.jpg",
    gallery: [
      "/images/attractions/a1/a1-1.jpg",
      "/images/attractions/a1/a1-2.jpg",
      "/images/attractions/a1/a1-3.jpg",
      "/images/attractions/a1/a1-4.jpg",
      "/images/attractions/a1/a1-5.jpg",
      "/images/attractions/a1/a1-6.jpg",
      "/images/attractions/a1/a1-7.jpg",
      "/images/attractions/a1/a1-8.jpg",
      "/images/attractions/a1/a1-9.jpg",
      "/images/attractions/a1/a1-10.jpg",
    ],
  },
  {
    id: 2,
    key: "a2",
    cityKey: "makkah" as const,
    icon: "🕳️",
    image: "/images/attractions/a2/a2-1.jpg",
    gallery: [
      "/images/attractions/a2/a2-1.jpg",
      "/images/attractions/a2/a2-2.webp",
      "/images/attractions/a2/a2-3.jpg",
      "/images/attractions/a2/a2-4.jpg",
      "/images/attractions/a2/a2-5.jpg",
      "/images/attractions/a2/a2-6.jpg",
      "/images/attractions/a2/a2-7.jpg",
      "/images/attractions/a2/a2-8.jpg",
      "/images/attractions/a2/a2-9.jpg",
      "/images/attractions/a2/a2-10.webp",
    ],
  },
  {
    id: 3,
    key: "a3",
    cityKey: "makkah" as const,
    icon: "🕌",
    image: "/images/attractions/a3/a3-1.jpg",
    gallery: [
      "/images/attractions/a3/a3-1.jpg",
      "/images/attractions/a3/a3-2.webp",
      "/images/attractions/a3/a3-3.jpg",
      "/images/attractions/a3/a3-4.jpg",
      "/images/attractions/a3/a3-5.webp",
      "/images/attractions/a3/a3-6.jpg",
      "/images/attractions/a3/a3-7.webp",
      "/images/attractions/a3/a3-8.jpg",
      "/images/attractions/a3/a3-9.jpg",
      "/images/attractions/a3/a3-10.jpg",
    ],
  },
  {
    id: 4,
    key: "a4",
    cityKey: "makkah" as const,
    icon: "🕌",
    image: "/images/attractions/a4/a4-1.jpg",
    gallery: [
      "/images/attractions/a4/a4-1.jpg",
      "/images/attractions/a4/a4-2.jpg",
      "/images/attractions/a4/a4-3.jpg",
      "/images/attractions/a4/a4-4.jpg",
      "/images/attractions/a4/a4-5.jpg",
      "/images/attractions/a4/a4-6.jpg",
      "/images/attractions/a4/a4-7.jpg",
      "/images/attractions/a4/a4-8.jpg",
      "/images/attractions/a4/a4-9.webp",
      "/images/attractions/a4/a4-10.jpg",
    ],
  },
  {
    id: 5,
    key: "a5",
    cityKey: "makkah" as const,
    icon: "🏛️",
    image: "/images/attractions/a5/a5-1.jpg",
    gallery: [
      "/images/attractions/a5/a5-1.jpg",
      "/images/attractions/a5/a5-2.jpg",
      "/images/attractions/a5/a5-3.jpg",
      "/images/attractions/a5/a5-4.jpg",
      "/images/attractions/a5/a5-5.jpg",
      "/images/attractions/a5/a5-6.jpg",
      "/images/attractions/a5/a5-7.jpg",
      "/images/attractions/a5/a5-8.jpg",
      "/images/attractions/a5/a5-9.jpg",
      "/images/attractions/a5/a5-10.jpg",
    ],
  },
  {
    id: 6,
    key: "a6",
    cityKey: "madinah" as const,
    icon: "🕌",
    image: "/images/attractions/a6/a6-1.jpg",
    gallery: [
      "/images/attractions/a6/a6-1.jpg",
      "/images/attractions/a6/a6-2.jpg",
      "/images/attractions/a6/a6-3.jpg",
      "/images/attractions/a6/a6-4.jpg",
      "/images/attractions/a6/a6-5.jpg",
      "/images/attractions/a6/a6-6.jpg",
      "/images/attractions/a6/a6-7.jpg",
      "/images/attractions/a6/a6-8.jpg",
      "/images/attractions/a6/a6-9.jpg",
      "/images/attractions/a6/a6-10.jpg",
    ],
  },
  {
    id: 7,
    key: "a7",
    cityKey: "madinah" as const,
    icon: "🕌",
    image: "/images/attractions/a7/a7-1.jpg",
    gallery: [
      "/images/attractions/a7/a7-1.jpg",
      "/images/attractions/a7/a7-2.jpg",
      "/images/attractions/a7/a7-3.jpg",
      "/images/attractions/a7/a7-4.jpg",
      "/images/attractions/a7/a7-5.webp",
      "/images/attractions/a7/a7-6.jpg",
      "/images/attractions/a7/a7-7.jpg",
      "/images/attractions/a7/a7-8.jpg",
      "/images/attractions/a7/a7-9.jpg",
      "/images/attractions/a7/a7-10.jpg",
    ],
  },
  {
    id: 8,
    key: "a8",
    cityKey: "madinah" as const,
    icon: "🕌",
    image: "/images/attractions/a8/a8-1.jpg",
    gallery: [
      "/images/attractions/a8/a8-1.jpg",
      "/images/attractions/a8/a8-2.jpg",
      "/images/attractions/a8/a8-3.jpg",
      "/images/attractions/a8/a8-4.png",
      "/images/attractions/a8/a8-5.jpg",
      "/images/attractions/a8/a8-6.jpg",
      "/images/attractions/a8/a8-7.jpg",
      "/images/attractions/a8/a8-8.jpg",
      "/images/attractions/a8/a8-9.jpg",
      "/images/attractions/a8/a8-10.jpg",
    ],
  },
  {
    id: 9,
    key: "a9",
    cityKey: "madinah" as const,
    icon: "⛰️",
    image: "/images/attractions/a9/a9-1.jpg",
    gallery: [
      "/images/attractions/a9/a9-1.jpg",
      "/images/attractions/a9/a9-2.jpg",
      "/images/attractions/a9/a9-3.jpg",
      "/images/attractions/a9/a9-4.jpg",
      "/images/attractions/a9/a9-5.jpg",
      "/images/attractions/a9/a9-6.jpg",
      "/images/attractions/a9/a9-7.jpg",
      "/images/attractions/a9/a9-8.jpg",
      "/images/attractions/a9/a9-9.jpg",
      "/images/attractions/a9/a9-10.jpg",
    ],
  },
  {
    id: 10,
    key: "a10",
    cityKey: "madinah" as const,
    icon: "🌿",
    image: "/images/attractions/a10/a10-1.jpg",
    gallery: [
      "/images/attractions/a10/a10-1.jpg",
      "/images/attractions/a10/a10-2.jpg",
      "/images/attractions/a10/a10-3.jpg",
      "/images/attractions/a10/a10-4.jpg",
      "/images/attractions/a10/a10-5.jpg",
      "/images/attractions/a10/a10-6.jpg",
      "/images/attractions/a10/a10-7.jpg",
      "/images/attractions/a10/a10-8.jpg",
      "/images/attractions/a10/a10-9.jpg",
      "/images/attractions/a10/a10-10.jpg",
    ],
  },
];

export const getAttractions = (t: (key: string, options?: any) => any): Attraction[] => {
  return staticAttractionData.map((item) => {
    const itemKey = `items.${item.key}`;
    return {
      id: item.id,
      name: t(`${itemKey}.name`),
      city: t(`${itemKey}.city`),
      cityKey: item.cityKey,
      icon: item.icon,
      description: t(`${itemKey}.description`),
      tip: t(`${itemKey}.tip`),
      distance: t(`${itemKey}.distance`),
      history: t(`${itemKey}.history`),
      howToVisit: t(`${itemKey}.howToVisit`),
      bestTime: t(`${itemKey}.bestTime`),
      image: item.image,
      gallery: item.gallery,
    };
  });
};
