import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

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
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "دليل الحاج والمعتمر — مناسك، أدعية وأذكار" },
      { name: "description", content: "دليل شامل للحجاج والمعتمرين: خطوات الحج والعمرة، الأدعية، الأذكار، ونصائح الرحلة المباركة." },
      { property: "og:title", content: "دليل الحاج والمعتمر" },
      { property: "og:description", content: "خطوات المناسك، الأدعية والأذكار، ونصائح للحجاج والمعتمرين." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Tajawal:wght@300;400;500;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const navLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/hajj", label: "مناسك الحج" },
  { to: "/umrah", label: "مناسك العمرة" },
  { to: "/duas", label: "الأدعية والأذكار" },
  { to: "/tips", label: "نصائح الرحلة" },
] as const;

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-soft">
            <span className="text-lg">ﷲ</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-primary">دليل الحاج والمعتمر</div>
            <div className="text-xs text-muted-foreground">مناسك • أدعية • أذكار</div>
          </div>
        </Link>
        <nav className="hidden gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-primary-soft hover:text-primary"
              activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-border/50 px-4 py-2 md:hidden">
        {navLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-foreground/70 hover:bg-primary-soft"
            activeProps={{ className: "bg-primary text-primary-foreground" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary-soft/40">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        <div className="font-display text-lg font-bold text-primary">دليل الحاج والمعتمر</div>
        <p className="mt-2 text-sm text-muted-foreground">تقبّل الله منّا ومنكم صالح الأعمال</p>
        <p className="mt-4 text-xs text-muted-foreground">© {new Date().getFullYear()} — جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
