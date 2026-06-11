# AGENTS.md

## Project snapshot

- This is a **Next.js 16 App Router** marketing site for `Vitberg Chełm` using **React 19**, **TypeScript**, and **static export** (`next.config.ts` sets `output: 'export'`).
- Treat the app as a mostly static site: avoid introducing server-only features, API routes, or runtime assumptions that conflict with static export.
- User-facing copy is currently **Polish** across the site; keep new content consistent unless a file clearly establishes another language.

## Development workflow

- Use **npm** in this repo (`package-lock.json` is present).
- Main commands:
  - `npm run dev` — runs Next dev server on **port 3001**
  - `npm run lint` — runs **Biome lint** and `tsc --noEmit`
  - `npm run format` — runs **Biome check --write**
  - `npm run build` — creates the static export
- There is currently **no test script**. For meaningful validation after code changes, prefer `npm run lint` and `npm run build`.

## App structure and data flow

- `src/app/page.tsx` is the homepage. It composes section components from `src/components/home/*` inside `SiteLayout`.
- `src/app/[slug]/page.tsx` is the dynamic subpage route. It statically generates pages from `pageSlugs` in `src/lib/pages.ts`.
- `src/lib/site-config.tsx` is the main source for reusable site data used across the homepage and layout:
  - `siteConfig` for contact/address/social metadata
  - `mainNav` for header navigation
  - `programs`, `modules`, `whyBenefits`, `visitSteps` for homepage sections
- `src/lib/pages.ts` is the source of truth for subpage content (`slug`, SEO title/description, breadcrumb, sections, CTA flag).
- `src/components/layout/site-layout.tsx` wraps all pages with the shared `Header` and `Footer`.

## Component and styling conventions

- Keep components in their current feature folders:
  - homepage sections: `src/components/home/*`
  - layout: `src/components/layout/*`
  - shared helpers: `src/components/shared/*`
  - reusable UI primitives: `src/components/ui/*`
- Most components use a **paired local SCSS file** imported directly from the component, e.g. `programs-section.tsx` + `programs-section.scss`, `header.tsx` + `header.scss`.
- Follow the existing **BEM-style class naming** pattern such as `programs-section__card`, `header__nav-link`, `subpage-template__section-title`.
- Use the `@/*` path alias from `tsconfig.json` for app imports.
- Prefer the existing UI wrappers in `src/components/ui/*` instead of using raw primitives directly in feature components:
  - `Button` / `buttonVariants` from `src/components/ui/button.tsx`
  - `Card*` helpers from `src/components/ui/card.tsx`
  - `Input` and `Label` from `src/components/ui/input.tsx` and `label.tsx`
- `cn()` from `src/lib/utils.ts` is the standard helper for class composition.
- `src/app/globals.css` holds shared design tokens and global animation utilities; keep one-off section styling in the component-local `.scss` files instead of expanding globals unnecessarily.

## Existing interaction patterns to reuse

- Use `HashScrollLink` (`src/components/shared/hash-scroll-link.tsx`) for links to homepage anchors like `/#uslugi`, `/#dlaczego-warto`, and `/#kontakt`. It handles same-page smooth scrolling and history updates.
- Keep the hash/section IDs aligned with navigation config. Current examples:
  - `mainNav` item `/#uslugi` ↔ `ProgramsSection` section id `uslugi`
  - `mainNav` item `/#dlaczego-warto` ↔ `WhySection` section id `dlaczego-warto`
  - CTA links to `/#kontakt` ↔ `ContactSection` section id `kontakt`
- Reuse `SectionHeading` for section headers instead of ad hoc heading blocks.
- Reuse `Reveal` and `RevealStagger` from `src/components/shared/reveal.tsx` for entrance animations rather than creating one-off intersection observer logic.
- Only mark components with `'use client'` when they need browser APIs or hooks. Existing client-only examples include `booking-form.tsx`, `hash-scroll-link.tsx`, `reveal.tsx`, `contact-hash-cleanup.tsx`, and `header-booking-cta.tsx`.

## Content and routing changes

- When adding or editing a **subpage**, update `src/lib/pages.ts`. The route, static params, and metadata generation already read from that file.
- When changing homepage cards, steps, nav items, or contact metadata, update `src/lib/site-config.tsx` first and then adjust rendering components only if the data shape changes.
- `Footer` contains some direct page links (`/o-nas`, `/o-terapii`, `/kariera`) in addition to config-driven data. Update both the footer markup and `site-config.tsx` if navigation changes span both areas.
- `scraped/` contains source markdown gathered from the Vitberg website, but the live app currently renders structured content from `src/lib/site-config.tsx` and `src/lib/pages.ts`.

## Build and deployment details

- `next.config.ts` enables static export and sets `images.unoptimized = true`; keep `next/image` usage compatible with static output.
- `basePath` is set only when `GITHUB_ACTIONS === 'true'`. Prefer normal root-relative app links such as `/o-terapii` and `/#kontakt`; using `next/link` and `next/image` keeps base-path handling consistent.
- `allowedDevOrigins` includes `192.168.1.8`; avoid removing existing local-network development settings unless the task explicitly requires it.

## Validation checklist for agents

- After code changes, run `npm run lint` first.
- Run `npm run build` for changes that affect routing, metadata, static export behavior, or `next/image` usage.
- If you add a new anchor link or section, verify the target `id` and any matching `mainNav`/CTA hrefs together.


