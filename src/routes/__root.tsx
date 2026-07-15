import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Ticker } from "@/components/Ticker";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">٤٠٤</h1>
        <h2 className="mt-4 text-xl font-semibold">الصفحة غير موجودة</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">حدث خطأ</h1>
        <p className="mt-2 text-sm text-muted-foreground">تعذّر تحميل الصفحة، يرجى المحاولة مجدداً.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            حاول مرة أخرى
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">
            الرئيسية
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const navLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/umrah", label: "رحلة العمرة" },
  { to: "/arkaan", label: "الأركان" },
  { to: "/wajibaat", label: "الواجبات والسنن" },
  { to: "/prohibitions", label: "المحظورات" },
  { to: "/fidya", label: "الفدية" },
  { to: "/mistakes", label: "الأخطاء الشائعة" },
  { to: "/duas", label: "الأدعية" },
  { to: "/tips", label: "حقيبة المعتمر" },
  { to: "/attractions", label: "المزارات" },
  { to: "/hotels", label: "الفنادق والمرشدين" },
  { to: "/fazah", label: "فزعة" },
] as const;

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#oklch(0.72_0.14_85)]/15 bg-[#1B4332]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 shadow-soft transition-all duration-300 group-hover:scale-105 border border-white/10 p-1">
            <img src="/images/brand/logo-emblem.png" alt="مرشد" className="h-full w-full object-contain" />
          </div>
          <div className="leading-tight">
            <div className="text-xl font-bold text-white font-display tracking-wide group-hover:text-gold transition-colors">مرشد</div>
            <div className="text-[10px] text-white/50">دليل المعتمر الشامل</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1.5 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link-hover rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white"
              activeProps={{ className: "active text-white bg-white/10 shadow-inner" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-2.5">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all border border-transparent hover:border-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all md:hidden border border-transparent hover:border-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu (Slide-in) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" onClick={() => setMobileOpen(false)} />
          
          {/* Content drawer */}
          <nav className="relative z-10 flex h-full w-72 flex-col bg-[#14342A] p-6 shadow-2xl border-l border-white/10 animate-fade-in-up" dir="rtl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 border border-white/10 p-1">
                  <img src="/images/brand/logo-emblem.png" alt="مرشد" className="h-full w-full object-contain" />
                </div>
                <div className="leading-tight">
                  <span className="text-lg font-bold text-white font-display">مرشد</span>
                  <span className="block text-[9px] text-[#C5A85C]">دليل المعتمر</span>
                </div>
              </div>
              <button 
                onClick={() => setMobileOpen(false)} 
                className="rounded-lg p-2 text-white/60 hover:bg-white/10 hover:text-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col gap-1.5 overflow-y-auto pr-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white hover:translate-x-[-4px] transition-all duration-300"
                  activeProps={{ className: "bg-white/10 text-white font-semibold border-r-4 border-[#C5A85C]" }}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-base">
                    {l.to === "/" ? "🏠" : 
                     l.to === "/umrah" ? "🕋" : 
                     l.to === "/arkaan" ? "🏛️" : 
                     l.to === "/wajibaat" ? "📋" : 
                     l.to === "/prohibitions" ? "🚫" : 
                     l.to === "/fidya" ? "⚖️" : 
                     l.to === "/mistakes" ? "⚠️" : 
                     l.to === "/duas" ? "🤲" : 
                     l.to === "/tips" ? "🧳" : 
                     l.to === "/attractions" ? "🕌" :
                     l.to === "/hotels" ? "🏨" : "🆘"}
                  </span>
                  <span>{l.label}</span>
                </Link>
              ))}
            </div>
            
            <div className="mt-auto pt-6 border-t border-white/5 text-center">
              <p className="text-xs text-white/30 font-display">تقبل الله طاعتكم وصالح أعمالكم</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-[oklch(0.72_0.14_85)]/20 bg-[#14342A] relative overflow-hidden bg-islamic-pattern py-12">
      {/* Top glowing gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.14_85)]/45 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Column 1: Info */}
          <div className="md:col-span-5 flex flex-col gap-4 text-right">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 border border-white/10 p-1">
                <img src="/images/brand/logo-emblem.png" alt="مرشد" className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-display">مرشد</span>
                <span className="block text-[10px] text-white/40">دليل المعتمر الشامل</span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              منصة إرشادية تفاعلية تهدف إلى تسهيل مناسك العمرة والزيارة خطوة بخطوة، مع تبيان الأركان والواجبات والمحظورات بناءً على الكتاب والسنة المطهرة وبأسلوب مبسط وممتع بصرياً.
            </p>
            <div className="mt-2 flex gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer text-sm">🕋</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer text-sm">🤲</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer text-sm">🕌</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white/95 uppercase tracking-wider border-r-2 border-[oklch(0.72_0.14_85)] pr-2.5">
              أقسام الدليل
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-xs text-white/60 hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[10px] text-gold/40">✦</span>
                  <span>{l.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Verse / Quote Card */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white/95 uppercase tracking-wider border-r-2 border-[oklch(0.72_0.14_85)] pr-2.5">
              دعاء وتضرع
            </h4>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 text-3xl opacity-5 select-none font-display">🕌</div>
              <p className="font-display text-sm leading-relaxed text-white/90 text-center">
                "اللَّهُمَّ اجْعَلْهَا عُمْرَةً مَقْبُولَةً، وَذَنْباً مَغْفُوراً، وَسَعْياً مَشْكُوراً."
              </p>
              <div className="mt-2.5 text-[10px] text-center text-[#C5A85C]">— تقبل الله طاعتكم</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} مرشد — جميع الحقوق محفوظة</p>
          <p className="text-xs text-[#C5A85C]/50 flex items-center gap-1">
            <span>صُنع لخدمة ضيوف الرحمن</span>
            <span>🕋</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background font-sans">
        <Header />
        <Ticker />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
