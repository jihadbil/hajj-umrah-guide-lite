// ===================================================
// utils.ts — دوال مساعدة مشتركة في المشروع
// ===================================================

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// دالة لدمج أسماء CSS classes بشكل ذكي
// تقبل قيمًا متعددة وتعيد سلسلة واحدة نظيفة بدون تعارض
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
