# مرشد — دليل المعتمر

A comprehensive Arabic-language Umrah guide app built with React, TanStack Start (SSR), Tailwind CSS v4, and shadcn/ui components.

## Stack

- **Framework**: TanStack Start (SSR) + TanStack Router (file-based routing)
- **UI**: React 19, Tailwind CSS v4, shadcn/ui (Radix UI primitives)
- **Build**: Vite 8
- **Package manager**: pnpm

## Running the app

```bash
bun run dev      # starts dev server on port 5000
bun run build    # production build
bun run preview  # preview production build
```

The workflow "Start application" runs `bun run dev` and serves on port 5000.

## Project structure

- `src/routes/` — file-based routes (index, umrah, duas, mistakes, prohibitions, tips)
- `src/lib/umrahJourney.ts` — all guide content (steps, duas, prohibitions, mistakes)
- `src/components/` — shared components (PageHeader, shadcn/ui)
- `src/styles.css` — global styles with Tailwind v4 theme tokens
- `public/` — static assets (images)

## Content

All guide content is in `src/lib/umrahJourney.ts`. The app is RTL (Arabic, `dir="rtl"`).

## User preferences

- Keep Arabic RTL layout and green Islamic color theme (#1B4332, #2D6A4F).
