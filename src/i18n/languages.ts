// ===================================================
// languages.ts — تعريف اللغات المدعومة وخصائصها
// ===================================================

export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  dir: "rtl" | "ltr";
  flag: string;
  fontDisplay: string;
  fontSans: string;
  fontSerif: string;
}

export const languages: readonly LanguageInfo[] = [
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    dir: "rtl",
    flag: "🇸🇦",
    fontDisplay: "Reem Kufi",
    fontSans: "Tajawal",
    fontSerif: "Amiri",
  },
  {
    code: "en",
    name: "English",
    nativeName: "English",
    dir: "ltr",
    flag: "🇬🇧",
    fontDisplay: "Inter",
    fontSans: "Inter",
    fontSerif: "Lora",
  },
  {
    code: "id",
    name: "Indonesian",
    nativeName: "Bahasa Indonesia",
    dir: "ltr",
    flag: "🇮🇩",
    fontDisplay: "Plus Jakarta Sans",
    fontSans: "Plus Jakarta Sans",
    fontSerif: "Lora",
  },
  {
    code: "tr",
    name: "Turkish",
    nativeName: "Türkçe",
    dir: "ltr",
    flag: "🇹🇷",
    fontDisplay: "Inter",
    fontSans: "Inter",
    fontSerif: "Lora",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    dir: "ltr",
    flag: "🇫🇷",
    fontDisplay: "Playfair Display",
    fontSans: "Source Sans 3",
    fontSerif: "Lora",
  },
  {
    code: "ur",
    name: "Urdu",
    nativeName: "اردو",
    dir: "rtl",
    flag: "🇵🇰",
    fontDisplay: "Noto Nastaliq Urdu",
    fontSans: "Noto Sans Arabic",
    fontSerif: "Amiri",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    dir: "ltr",
    flag: "🇩🇪",
    fontDisplay: "Playfair Display",
    fontSans: "Inter",
    fontSerif: "Lora",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    dir: "ltr",
    flag: "🇪🇸",
    fontDisplay: "Playfair Display",
    fontSans: "Inter",
    fontSerif: "Lora",
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    dir: "ltr",
    flag: "🇮🇹",
    fontDisplay: "Playfair Display",
    fontSans: "Inter",
    fontSerif: "Lora",
  },
  {
    code: "uz",
    name: "Uzbek",
    nativeName: "O'zbekcha",
    dir: "ltr",
    flag: "🇺🇿",
    fontDisplay: "Plus Jakarta Sans",
    fontSans: "Plus Jakarta Sans",
    fontSerif: "Lora",
  },
  {
    code: "bn",
    name: "Bengali",
    nativeName: "বাংলা",
    dir: "ltr",
    flag: "🇧🇩",
    fontDisplay: "Hind Siliguri",
    fontSans: "Noto Sans Bengali",
    fontSerif: "Inter",
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    dir: "ltr",
    flag: "🇮🇳",
    fontDisplay: "Rajdhani",
    fontSans: "Noto Sans Devanagari",
    fontSerif: "Inter",
  },
] as const;

export type SupportedLanguage = (typeof languages)[number]["code"];
