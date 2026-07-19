// ===================================================
// hotelsGuides.ts — بيانات تجريبية للفنادق والمرشدين
// ===================================================

export interface Hotel {
  id: number;
  name: string;
  city: string; // مكة المكرمة | المدينة المنورة
  distance: string; // المسافة من الحرم
  rating: number; // من ٥
  reviews: number;
  price: string; // السعر التقديري لليلة
  amenities: string[];
  image: string; // مسار الصورة الرئيسية الحقيقية
  gallery: string[]; // مسارات صور حقيقية إضافية لمعرض الصور
  description: string; // وصف تفصيلي للفندق
  address: string; // العنوان التقريبي
  checkIn: string;
  checkOut: string;
  phone: string; // رقم تواصل تجريبي
}

export interface Guide {
  id: number;
  name: string;
  city: string; // مكة المكرمة | المدينة المنورة | مكة والمدينة
  languages: string[];
  experience: number; // سنوات الخبرة
  rating: number;
  reviews: number;
  specialty: string;
  licensed: boolean;
  avatar: string; // إيموجي بديل
}

const staticHotels = [
  {
    id: 1,
    key: "h1",
    rating: 4.7,
    reviews: 3210,
    phone: "٠١٢٥٧١١١١١",
    image: "/images/hotels/h1/h1-1.jpg",
    gallery: [
      "/images/hotels/h1/h1-1.jpg",
      "/images/hotels/h1/h1-2.jpg",
      "/images/hotels/h1/h1-3.jpg",
      "/images/hotels/h1/h1-4.jpg",
      "/images/hotels/h1/h1-5.jpg",
      "/images/hotels/h1/h1-6.jpg",
      "/images/hotels/h1/h1-7.jpg",
      "/images/hotels/h1/h1-8.jpg",
      "/images/hotels/h1/h1-9.jpg",
      "/images/hotels/h1/h1-10.jpg",
    ],
  },
  {
    id: 2,
    key: "h2",
    rating: 4.5,
    reviews: 2140,
    phone: "٠١٢٥٧٢٢٢٢٢",
    image: "/images/hotels/h2/h2-1.jpg",
    gallery: [
      "/images/hotels/h2/h2-1.jpg",
      "/images/hotels/h2/h2-2.webp",
      "/images/hotels/h2/h2-3.jpg",
      "/images/hotels/h2/h2-4.jpg",
      "/images/hotels/h2/h2-5.jpg",
      "/images/hotels/h2/h2-6.jpg",
      "/images/hotels/h2/h2-7.webp",
      "/images/hotels/h2/h2-8.webp",
      "/images/hotels/h2/h2-9.jpg",
      "/images/hotels/h2/h2-10.jpg",
    ],
  },
  {
    id: 3,
    key: "h3",
    rating: 4.3,
    reviews: 1580,
    phone: "٠١٢٥٧٣٣٣٣٣",
    image: "/images/hotels/h3/h3-1.webp",
    gallery: [
      "/images/hotels/h3/h3-1.webp",
      "/images/hotels/h3/h3-2.webp",
      "/images/hotels/h3/h3-3.jpg",
      "/images/hotels/h3/h3-4.webp",
      "/images/hotels/h3/h3-5.jpg",
      "/images/hotels/h3/h3-6.webp",
      "/images/hotels/h3/h3-7.webp",
      "/images/hotels/h3/h3-8.jpg",
      "/images/hotels/h3/h3-9.jpg",
      "/images/hotels/h3/h3-10.jpg",
    ],
  },
  {
    id: 4,
    key: "h4",
    rating: 4.6,
    reviews: 2765,
    phone: "٠١٢٥٧٤٤٤٤٤",
    image: "/images/hotels/h4/h4-1.webp",
    gallery: [
      "/images/hotels/h4/h4-1.webp",
      "/images/hotels/h4/h4-2.webp",
      "/images/hotels/h4-3.webp",
      "/images/hotels/h4-4.webp",
      "/images/hotels/h4-5.webp",
      "/images/hotels/h4-6.webp",
      "/images/hotels/h4-7.webp",
      "/images/hotels/h4-8.jpg",
      "/images/hotels/h4-9.jpg",
      "/images/hotels/h4-10.webp",
    ],
  },
  {
    id: 5,
    key: "h5",
    rating: 4.6,
    reviews: 2980,
    phone: "٠١٤٨٢١١١١١",
    image: "/images/hotels/h5/h5-1.jpg",
    gallery: [
      "/images/hotels/h5/h5-1.jpg",
      "/images/hotels/h5/h5-2.jpg",
      "/images/hotels/h5/h5-3.jpg",
      "/images/hotels/h5/h5-4.jpg",
      "/images/hotels/h5/h5-5.jpg",
      "/images/hotels/h5/h5-6.jpg",
      "/images/hotels/h5/h5-7.jpg",
      "/images/hotels/h5-8.jpg",
      "/images/hotels/h5-9.jpg",
      "/images/hotels/h5-10.jpg",
    ],
  },
  {
    id: 6,
    key: "h6",
    rating: 4.4,
    reviews: 1890,
    phone: "٠١٤٨٢٢٢٢٢٢",
    image: "/images/hotels/h6/h6-1.webp",
    gallery: [
      "/images/hotels/h6/h6-1.webp",
      "/images/hotels/h6/h6-2.webp",
      "/images/hotels/h6/h6-3.jpg",
      "/images/hotels/h6/h6-4.webp",
      "/images/hotels/h6/h6-5.webp",
      "/images/hotels/h6/h6-6.jpg",
      "/images/hotels/h6/h6-7.webp",
      "/images/hotels/h6/h6-8.webp",
      "/images/hotels/h6/h6-9.webp",
      "/images/hotels/h6-10.webp",
    ],
  },
  {
    id: 7,
    key: "h7",
    rating: 4.2,
    reviews: 1120,
    phone: "٠١٤٨٢٣٣٣٣٣",
    image: "/images/hotels/h7/h7-1.jpg",
    gallery: [
      "/images/hotels/h7/h7-1.jpg",
      "/images/hotels/h7/h7-2.jpg",
      "/images/hotels/h7-3.jpg",
      "/images/hotels/h7-4.jpg",
      "/images/hotels/h7-5.jpg",
      "/images/hotels/h7-6.jpg",
      "/images/hotels/h7-7.jpg",
      "/images/hotels/h7-8.jpg",
      "/images/hotels/h7-9.jpg",
      "/images/hotels/h7-10.jpg",
    ],
  },
];

const staticGuides = [
  {
    id: 1,
    key: "g1",
    experience: 15,
    rating: 4.9,
    reviews: 430,
    licensed: true,
    avatar: "🧔",
  },
  {
    id: 2,
    key: "g2",
    experience: 10,
    rating: 4.8,
    reviews: 312,
    licensed: true,
    avatar: "🧔",
  },
  {
    id: 3,
    key: "g3",
    experience: 7,
    rating: 4.7,
    reviews: 198,
    licensed: true,
    avatar: "🧕",
  },
  {
    id: 4,
    key: "g4",
    experience: 12,
    rating: 4.9,
    reviews: 265,
    licensed: true,
    avatar: "🧔",
  },
  {
    id: 5,
    key: "g5",
    experience: 9,
    rating: 4.6,
    reviews: 154,
    licensed: true,
    avatar: "🧔",
  },
  {
    id: 6,
    key: "g6",
    experience: 6,
    rating: 4.5,
    reviews: 97,
    licensed: true,
    avatar: "🧕",
  },
];

export const getHotels = (t: (key: string, options?: any) => any): Hotel[] => {
  return staticHotels.map((h) => {
    const hKey = `hotelsItems.${h.key}`;
    return {
      id: h.id,
      name: t(`${hKey}.name`),
      city: t(`${hKey}.city`),
      distance: t(`${hKey}.distance`),
      rating: h.rating,
      reviews: h.reviews,
      price: t(`${hKey}.price`),
      amenities: t(`${hKey}.amenities`, { returnObjects: true, defaultValue: [] }) as string[],
      image: h.image,
      gallery: h.gallery,
      description: t(`${hKey}.description`),
      address: t(`${hKey}.address`),
      checkIn: t(`${hKey}.checkIn`),
      checkOut: t(`${hKey}.checkOut`),
      phone: h.phone,
    };
  });
};

export const getGuides = (t: (key: string, options?: any) => any): Guide[] => {
  return staticGuides.map((g) => {
    const gKey = `guidesItems.${g.key}`;
    return {
      id: g.id,
      name: t(`${gKey}.name`),
      city: t(`${gKey}.city`),
      languages: t(`${gKey}.languages`, { returnObjects: true, defaultValue: [] }) as string[],
      experience: g.experience,
      rating: g.rating,
      reviews: g.reviews,
      specialty: t(`${gKey}.specialty`),
      licensed: g.licensed,
      avatar: g.avatar,
    };
  });
};
