# Vitberg Chełm

Marketing website for the local `Vitberg Chełm` poradnia, built as a mostly static Next.js App Router site. The project presents the Vitberg RS2 offer, explains therapy and treatment modules, and provides a contact/booking flow for free consultations.

## Overview

This repository contains a Polish-language promotional site with:

- a homepage composed from reusable section components,
- statically generated content pages such as `o-terapii`, `o-nas`, `program-*`, and `modul-*`,
- shared contact, navigation, and offer data stored in source files under `src/lib/`,
- static-export-friendly routing and image usage for deployment without a server runtime.

## Tech stack

- `Next.js 16` with App Router
- `React 19`
- `TypeScript`
- `Sass / SCSS`
- `Biome` for linting/formatting
- `@base-ui/react`, `lucide-react`, `class-variance-authority`, `tailwind-merge`

## Local development

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

From the current `package.json`, the dev server runs on:

- `http://localhost:3001`

Useful project commands:

```powershell
npm run lint
npm run format
npm run build
```

## Project structure

```text
src/
  app/
    page.tsx              # homepage
    [slug]/page.tsx       # statically generated subpages
    layout.tsx            # root metadata, fonts, global styles
  components/
    home/                 # homepage sections
    layout/               # header, footer, site wrapper
    pages/                # subpage template
    shared/               # reusable helpers and interactions
    ui/                   # reusable UI primitives
  lib/
    site-config.tsx       # homepage/layout content and metadata
    pages.ts              # subpage definitions and routing source of truth
```

Other notable directories:

- `public/images/` — static site imagery
- `scraped/` — source markdown collected from the Vitberg website for reference
- `scripts/` — one-off scraping utilities

## Content model

The site is intentionally data-driven in a few central places:

- Update `src/lib/site-config.tsx` for:
  - contact details,
  - main navigation,
  - homepage programs,
  - therapy modules,
  - benefit lists,
  - visit steps.
- Update `src/lib/pages.ts` for:
  - subpage slugs,
  - SEO titles and descriptions,
  - breadcrumb labels,
  - page sections,
  - CTA visibility.

This keeps page components simple and makes content edits predictable.

## Styling and component conventions

- Most components use a paired local stylesheet, e.g. `hero-section.tsx` + `hero-section.scss`.
- Shared theme tokens and global animation helpers live in `src/app/globals.css`.
- The codebase uses BEM-style class names such as `header__nav-link` and `programs-section__card`.
- App imports use the `@/*` path alias from `tsconfig.json`.

## Navigation and interaction notes

- Homepage anchor links such as `/#uslugi`, `/#dlaczego-warto`, and `/#kontakt` use `HashScrollLink` for smooth same-page navigation.
- Shared section headings use `SectionHeading`.
- Reveal-on-scroll animations are handled through `Reveal` and `RevealStagger`.

## Static export and deployment notes

`next.config.ts` is configured for static export:

- `output: 'export'`
- `images.unoptimized = true`
- `basePath` is applied only when `GITHUB_ACTIONS === 'true'`

Because of that, prefer changes that remain compatible with static hosting and avoid introducing server-only features unless the deployment model changes.

## Validation

There is currently no dedicated test script in `package.json`.

For meaningful validation after changes, use:

```powershell
npm run lint
npm run build
```

