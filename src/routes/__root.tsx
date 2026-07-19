import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { useEffect, useState, Suspense } from "react";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Ticker } from "@/components/Ticker";
import { LucideIcon } from "@/lib/icons";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { languages } from "@/i18n/languages";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">{t("errors.404")}</h1>
        <h2 className="mt-4 text-xl font-semibold">{t("errors.pageNotFound")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("errors.pageNotFoundDesc")}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("errors.backHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useTranslation();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">{t("errors.errorOccurred")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("errors.errorLoadFailed")}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            {t("errors.tryAgain")}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            {t("errors.home")}
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
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/umrah", key: "umrah" },
  { to: "/arkaan", key: "arkaan" },
  { to: "/wajibaat", key: "wajibaat" },
  { to: "/prohibitions", key: "prohibitions" },
  { to: "/fidya", key: "fidya" },
  { to: "/mistakes", key: "mistakes" },
  { to: "/duas", key: "duas" },
  { to: "/tips", key: "tips" },
  { to: "/attractions", key: "attractions" },
  { to: "/hotels", key: "hotels" },
  { to: "/fazah", key: "fazah" },
  { to: "/contact", key: "contact" },
] as const;

const subLinks = [
  { to: "/arkaan", key: "arkaan" },
  { to: "/wajibaat", key: "wajibaat" },
  { to: "/prohibitions", key: "prohibitions" },
  { to: "/fidya", key: "fidya" },
  { to: "/mistakes", key: "mistakes" },
  { to: "/duas", key: "duas" },
  { to: "/tips", key: "tips" },
  { to: "/attractions", key: "attractions" },
  { to: "/hotels", key: "hotels" },
  { to: "/fazah", key: "fazah" },
] as const;

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSectionsOpen, setMobileSectionsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const isDarkTheme =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkTheme);
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-[#1B4332]/92 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-0.5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF6F0] shadow-soft transition-all duration-300 group-hover:scale-105 group-hover:shadow-gold/20 border border-gold/30 p-1.5">
            <img
              src="/images/brand/logo-emblem.png?v=3"
              alt={t("brand.name")}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-[15deg]"
            />
          </div>
          <div className="leading-tight">
            <div className="text-xl font-bold text-white font-display tracking-wide group-hover:text-gold transition-colors">
              {t("brand.name")}
            </div>
            <div className="text-[10px] text-white/50">{t("brand.subtitle")}</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1.5 md:flex">
          <Link
            to="/"
            className="nav-link-hover rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            activeProps={{ className: "active text-white bg-white/10 shadow-inner" }}
            activeOptions={{ exact: true }}
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/about"
            className="nav-link-hover rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            activeProps={{ className: "active text-white bg-white/10 shadow-inner" }}
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/umrah"
            className="nav-link-hover rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            activeProps={{ className: "active text-white bg-white/10 shadow-inner" }}
          >
            {t("nav.umrah")}
          </Link>
          <div className="relative group">
            <button className="nav-link-hover flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
              <span>{t("nav.sections")}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:rotate-180 text-white/60 group-hover:text-white"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute right-1/2 translate-x-1/2 top-full z-50 mt-1 w-60 origin-top rounded-2xl border border-gold/15 bg-[#1B4332]/98 backdrop-blur-md p-2 shadow-2xl opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-200 ease-out">
              <div className="flex flex-col gap-0.5 max-h-[400px] overflow-y-auto pr-1">
                {subLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="flex items-center gap-2.5 rounded-xl px-3.5 py-2 text-right text-xs font-semibold text-white/85 transition-all duration-200 hover:bg-white/10 hover:text-white hover:translate-x-[-2px]"
                    activeProps={{
                      className: "bg-white/15 text-white border-r-2 border-gold font-bold",
                    }}
                  >
                    <span className="text-gold text-[10px]">✦</span>
                    <span>{t(`nav.${l.key}`)}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className="nav-link-hover rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            activeProps={{ className: "active text-white bg-white/10 shadow-inner" }}
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all border border-transparent hover:border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={isDark ? t("theme.light") : t("theme.dark")}
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all md:hidden border border-transparent hover:border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="القائمة الرئيسية"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" onClick={() => setMobileOpen(false)} />
          <nav className="relative z-10 flex h-full w-72 flex-col bg-[#14342A] p-6 shadow-2xl border-l border-white/10 animate-fade-in-up" dir={i18n.dir()}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF6F0] border border-gold/30 p-1">
                  <img src="/images/brand/logo-emblem.png?v=3" alt={t("brand.name")} className="h-full w-full object-contain" />
                </div>
                <div className="leading-tight">
                  <span className="text-lg font-bold text-white font-display">{t("brand.name")}</span>
                  <span className="block text-[9px] text-[#C5A85C]">{t("brand.subtitle")}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={toggleTheme}
                  className="rounded-lg p-2 text-white/60 hover:bg-white/10 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label={isDark ? t("theme.light") : t("theme.dark")}
                >
                  {isDark ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  )}
                </button>
                <button onClick={() => setMobileOpen(false)} className="rounded-lg p-2 text-white/60 hover:bg-white/10 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold" aria-label="إغلاق القائمة">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 overflow-y-auto pr-1">
              <Link to="/" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold" activeProps={{ className: "bg-white/10 text-white font-semibold border-r-4 border-[#C5A85C]" }} activeOptions={{ exact: true }} onClick={() => setMobileOpen(false)}>
                <LucideIcon name="🏠" size={16} className="opacity-90" />
                <span>{t("nav.home")}</span>
              </Link>
              <Link to="/about" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold" activeProps={{ className: "bg-white/10 text-white font-semibold border-r-4 border-[#C5A85C]" }} onClick={() => setMobileOpen(false)}>
                <LucideIcon name="info" size={16} className="opacity-90" />
                <span>{t("nav.about")}</span>
              </Link>
              <Link to="/umrah" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold" activeProps={{ className: "bg-white/10 text-white font-semibold border-r-4 border-[#C5A85C]" }} onClick={() => setMobileOpen(false)}>
                <LucideIcon name="🕋" size={16} className="opacity-90" />
                <span>{t("nav.umrah")}</span>
              </Link>
              <div className="flex flex-col">
                <button onClick={() => setMobileSectionsOpen(!mobileSectionsOpen)} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition-all duration-300 focus-visible:outline-none">
                  <div className="flex items-center gap-3">
                    <LucideIcon name="clipboard" size={16} className="opacity-90" />
                    <span>{t("nav.sections")}</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 text-white/60 ${mobileSectionsOpen ? "rotate-180" : ""}`}>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {mobileSectionsOpen && (
                  <div className="mt-1.5 flex flex-col gap-1 pr-6 border-r border-white/10 mr-4">
                    {subLinks.map((l) => (
                      <Link key={l.to} to={l.to} className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs text-white/70 hover:bg-white/5 hover:text-white transition-all" activeProps={{ className: "text-[#C5A85C] font-semibold" }} onClick={() => setMobileOpen(false)}>
                        <LucideIcon name={l.key === "arkaan" ? "🏛️" : l.key === "wajibaat" ? "📋" : l.key === "prohibitions" ? "🚫" : l.key === "fidya" ? "⚖️" : l.key === "mistakes" ? "⚠️" : l.key === "duas" ? "🤲" : l.key === "tips" ? "🧳" : l.key === "attractions" ? "🕌" : l.key === "hotels" ? "🏨" : "🆘"} size={12} className="opacity-75" />
                        <span>{t(`nav.${l.key}`)}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/contact" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold" activeProps={{ className: "bg-white/10 text-white font-semibold border-r-4 border-[#C5A85C]" }} onClick={() => setMobileOpen(false)}>
                <LucideIcon name="contact" size={16} className="opacity-90" />
                <span>{t("nav.contact")}</span>
              </Link>
            </div>
            <div className="mt-auto pt-6 border-t border-white/5 text-center">
              <p className="text-xs text-white/30 font-display">{t("footer.duaAccept")}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mt-20 border-t border-[oklch(0.72_0.14_85)]/20 bg-[#14342A] relative overflow-hidden bg-islamic-pattern py-12">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.14_85)]/45 to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 flex flex-col gap-4 text-right">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF6F0] border border-gold/30 p-1.5 shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-gold/20 hover:border-gold group">
                <img src="/images/brand/logo-emblem.png?v=3" alt={t("brand.name")} className="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-[15deg]" />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-display">{t("brand.name")}</span>
                <span className="block text-[10px] text-white/40">{t("brand.subtitle")}</span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">{t("footer.description")}</p>
            <div className="mt-2 flex gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer text-sm"><LucideIcon name="🕋" size={16} /></span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer text-sm"><LucideIcon name="🤲" size={16} /></span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer text-sm"><LucideIcon name="🕌" size={16} /></span>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white/95 uppercase tracking-wider border-r-2 border-[oklch(0.72_0.14_85)] pr-2.5">{t("footer.sectionsTitle")}</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} className="text-xs text-white/60 hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-[10px] text-gold/40">✦</span>
                  <span>{t(`nav.${l.key}`)}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white/95 uppercase tracking-wider border-r-2 border-[oklch(0.72_0.14_85)] pr-2.5">{t("footer.duaTitle")}</h4>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 relative overflow-hidden">
              <LucideIcon name="🕌" size={32} className="absolute top-2 left-2 opacity-5 select-none text-white pointer-events-none" />
              <p className="font-serif text-sm leading-relaxed text-white/90 text-center">{t("footer.duaText")}</p>
              <div className="mt-2.5 text-[10px] text-center text-[#C5A85C]">{t("footer.duaAccept")}</div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} {t("brand.name")} — {t("footer.rights")}</p>
          <p className="text-xs text-[#C5A85C]/50 flex items-center gap-1">
            <span>صُنع لخدمة ضيوف الرحمن</span>
            <LucideIcon name="🕋" size={12} className="inline ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language || "ar";
    const langInfo = languages.find((l) => l.code === currentLang) || languages[0];
    document.documentElement.dir = langInfo.dir;
    document.documentElement.lang = langInfo.code;
  }, [i18n.language]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background font-sans">
        <Header />
        <Ticker />
        <main className="flex-1">
          <Suspense
            fallback={
              <div className="flex min-h-[50vh] items-center justify-center">
                <svg className="animate-spin h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
