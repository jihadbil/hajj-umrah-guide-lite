// ===================================================
// hotelsGuides.ts — بيانات تجريبية للفنادق والمرشدين
// ملاحظة: هذه بيانات تجريبية (Placeholder) إلى حين ربطها ببيانات حقيقية
// ===================================================

export interface Hotel {
  id: number;
  name: string;
  city: "مكة المكرمة" | "المدينة المنورة";
  distance: string;       // المسافة من الحرم
  rating: number;         // من ٥
  reviews: number;
  price: string;          // السعر التقديري لليلة
  amenities: string[];
  image: string;          // مسار الصورة الرئيسية الحقيقية
  gallery: string[];       // مسارات صور حقيقية إضافية لمعرض الصور
  description: string;     // وصف تفصيلي للفندق
  address: string;         // العنوان التقريبي
  checkIn: string;
  checkOut: string;
  phone: string;           // رقم تواصل تجريبي
}

export interface Guide {
  id: number;
  name: string;
  city: "مكة المكرمة" | "المدينة المنورة" | "مكة والمدينة";
  languages: string[];
  experience: number;      // سنوات الخبرة
  rating: number;
  reviews: number;
  specialty: string;
  licensed: boolean;
  avatar: string;          // إيموجي بديل
}

// ---- بيانات تجريبية للفنادق (Placeholder) ----
export const hotels: Hotel[] = [
  {
    id: 1,
    name: "فندق فيرمونت مكة كلوك تاور",
    city: "مكة المكرمة",
    distance: "على بعد خطوات من الحرم",
    rating: 4.7,
    reviews: 3210,
    price: "١٢٠٠ ر.س",
    amenities: ["إطلالة على الحرم", "مطاعم متعددة", "خدمة نقل"],
    image: "/images/hotels/h1-1.jpg",
    gallery: ["/images/hotels/h1-1.jpg", "/images/hotels/h1-2.jpg", "/images/hotels/h1-3.jpg"],
    description: "يتميز الفندق بموقعه الفريد أعلى برج الساعة مباشرة، ويوفر إطلالات بانورامية مباشرة على الحرم المكي والكعبة المشرفة من معظم غرفه وأجنحته، مع خدمة نقل مجانية للحرم.",
    address: "أبراج البيت، أجياد، مكة المكرمة",
    checkIn: "٤:٠٠ م",
    checkOut: "١٢:٠٠ ظهرًا",
    phone: "٠١٢٥٧١١١١١",
  },
  {
    id: 2,
    name: "سويس أوتيل المقام مكة",
    city: "مكة المكرمة",
    distance: "٢٠٠ متر من الحرم",
    rating: 4.5,
    reviews: 2140,
    price: "٩٥٠ ر.س",
    amenities: ["إفطار مجاني", "واي فاي مجاني", "مصلى خاص"],
    image: "/images/hotels/h2-1.jpg",
    gallery: ["/images/hotels/h2-1.jpg", "/images/hotels/h2-2.webp", "/images/hotels/h2-3.jpg"],
    description: "فندق فاخر يجمع بين الضيافة السويسرية والطابع المحلي، ويبعد خطوات معدودة عن ساحات الحرم عبر ممرات مغطاة مخصصة للنزلاء.",
    address: "منطقة أبراج البيت، مكة المكرمة",
    checkIn: "٣:٠٠ م",
    checkOut: "١٢:٠٠ ظهرًا",
    phone: "٠١٢٥٧٢٢٢٢٢",
  },
  {
    id: 3,
    name: "هيلتون سويتس مكة",
    city: "مكة المكرمة",
    distance: "٤٠٠ متر من الحرم",
    rating: 4.3,
    reviews: 1580,
    price: "٧٢٠ ر.س",
    amenities: ["غرف عائلية", "مطبخ صغير", "خدمة غسيل"],
    image: "/images/hotels/h3-1.webp",
    gallery: ["/images/hotels/h3-1.webp", "/images/hotels/h3-2.webp", "/images/hotels/h3-3.jpg"],
    description: "خيار مثالي للعائلات بأجنحته الواسعة ومطبخه الصغير في كل غرفة، مع خدمة تنقل منتظمة من وإلى الحرم على مدار اليوم.",
    address: "حي الشهداء، مكة المكرمة",
    checkIn: "٣:٠٠ م",
    checkOut: "١٢:٠٠ ظهرًا",
    phone: "٠١٢٥٧٣٣٣٣٣",
  },
  {
    id: 4,
    name: "دار التوحيد إنتركونتيننتال",
    city: "مكة المكرمة",
    distance: "ملاصق للحرم",
    rating: 4.6,
    reviews: 2765,
    price: "١١٠٠ ر.س",
    amenities: ["إطلالة على الكعبة", "خدمة كونسيرج", "مطاعم فاخرة"],
    image: "/images/hotels/h4-1.webp",
    gallery: ["/images/hotels/h4-1.webp", "/images/hotels/h4-2.webp", "/images/hotels/h4-3.webp"],
    description: "من أقدم وأرقى فنادق مكة المكرمة، يوفر إطلالات مباشرة على الكعبة المشرفة من مطاعمه وأجنحته الفاخرة، مع خدمة كونسيرج على مدار الساعة.",
    address: "أجياد، مكة المكرمة",
    checkIn: "٣:٠٠ م",
    checkOut: "١٢:٠٠ ظهرًا",
    phone: "٠١٢٥٧٤٤٤٤٤",
  },
  {
    id: 5,
    name: "موفنبيك أنوار المدينة",
    city: "المدينة المنورة",
    distance: "١٠٠ متر من المسجد النبوي",
    rating: 4.6,
    reviews: 2980,
    price: "٨٥٠ ر.س",
    amenities: ["إطلالة على المسجد النبوي", "إفطار شامل", "مواقف سيارات"],
    image: "/images/hotels/h5-1.jpg",
    gallery: ["/images/hotels/h5-1.jpg", "/images/hotels/h5-2.jpg", "/images/hotels/h5-3.jpg"],
    description: "يقع في قلب المنطقة المركزية بالمدينة المنورة، ويطل مباشرة على ساحات المسجد النبوي الشريف، مع إفطار شامل وخدمة نقل من وإلى المطار.",
    address: "المنطقة المركزية، المدينة المنورة",
    checkIn: "٣:٠٠ م",
    checkOut: "١٢:٠٠ ظهرًا",
    phone: "٠١٤٨٢١١١١١",
  },
  {
    id: 6,
    name: "دار الإيمان إنتركونتيننتال",
    city: "المدينة المنورة",
    distance: "٥٠ متر من الحرم النبوي",
    rating: 4.4,
    reviews: 1890,
    price: "٧٨٠ ر.س",
    amenities: ["ممر مغطى للحرم", "خدمة نقل مطار", "غرف عائلية"],
    image: "/images/hotels/h6-1.webp",
    gallery: ["/images/hotels/h6-1.webp", "/images/hotels/h6-2.webp", "/images/hotels/h6-3.jpg"],
    description: "يتصل الفندق بممر مغطى مباشر مع ساحات المسجد النبوي، مما يسهل الوصول للصلاة في أوقاتها دون التعرض لحر الشمس أو الزحام الخارجي.",
    address: "المنطقة المركزية، المدينة المنورة",
    checkIn: "٣:٠٠ م",
    checkOut: "١٢:٠٠ ظهرًا",
    phone: "٠١٤٨٢٢٢٢٢٢",
  },
  {
    id: 7,
    name: "بولمان زمزم المدينة",
    city: "المدينة المنورة",
    distance: "١٥٠ متر من المسجد النبوي",
    rating: 4.2,
    reviews: 1120,
    price: "٦٥٠ ر.س",
    amenities: ["مطعم عربي وعالمي", "واي فاي مجاني", "صالة رياضية"],
    image: "/images/hotels/h7-1.jpg",
    gallery: ["/images/hotels/h7-1.jpg", "/images/hotels/h7-2.jpg", "/images/hotels/h7-3.jpg"],
    description: "فندق عصري بأسعار معقولة نسبيًا يوفر إطلالات جزئية على الحرم النبوي، ويضم صالة رياضية ومطاعم متنوعة تناسب مختلف الأذواق.",
    address: "المنطقة المركزية، المدينة المنورة",
    checkIn: "٣:٠٠ م",
    checkOut: "١٢:٠٠ ظهرًا",
    phone: "٠١٤٨٢٣٣٣٣٣",
  },
];

// ---- بيانات تجريبية للمرشدين المعتمدين (Placeholder) ----
export const guides: Guide[] = [
  {
    id: 1,
    name: "الشيخ عبد الله الحربي",
    city: "مكة والمدينة",
    languages: ["العربية", "الإنجليزية"],
    experience: 15,
    rating: 4.9,
    reviews: 430,
    specialty: "إرشاد فقهي شامل لمناسك العمرة",
    licensed: true,
    avatar: "🧕",
  },
  {
    id: 2,
    name: "الأستاذ محمد الزهراني",
    city: "مكة المكرمة",
    languages: ["العربية", "الإنجليزية", "الأوردية"],
    experience: 10,
    rating: 4.8,
    reviews: 312,
    specialty: "مرافقة أفواج العمرة والطواف",
    licensed: true,
    avatar: "🧔",
  },
  {
    id: 3,
    name: "الأستاذة أمل القحطاني",
    city: "مكة المكرمة",
    languages: ["العربية", "الإنجليزية"],
    experience: 7,
    rating: 4.7,
    reviews: 198,
    specialty: "إرشاد النساء والعائلات",
    licensed: true,
    avatar: "🧕",
  },
  {
    id: 4,
    name: "الشيخ خالد العتيبي",
    city: "المدينة المنورة",
    languages: ["العربية", "الفرنسية"],
    experience: 12,
    rating: 4.9,
    reviews: 265,
    specialty: "جولات تاريخية في المسجد النبوي ومعالمه",
    licensed: true,
    avatar: "🧔",
  },
  {
    id: 5,
    name: "الأستاذ يوسف المالكي",
    city: "مكة والمدينة",
    languages: ["العربية", "الإنجليزية", "الملايوية"],
    experience: 9,
    rating: 4.6,
    reviews: 154,
    specialty: "إرشاد الأفواج الآسيوية",
    licensed: true,
    avatar: "🧔",
  },
  {
    id: 6,
    name: "الأستاذة هند الدوسري",
    city: "المدينة المنورة",
    languages: ["العربية", "الإنجليزية"],
    experience: 6,
    rating: 4.5,
    reviews: 97,
    specialty: "مرافقة كبار السن وذوي الاحتياجات الخاصة",
    licensed: true,
    avatar: "🧕",
  },
];
