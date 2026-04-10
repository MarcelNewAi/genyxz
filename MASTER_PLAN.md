# Ä‘ĹşÂ§Â­ MASTER PLAN

> This is the single source of truth for this project build. Every step, every tool, every decision is documented here. Feed this to your coding model phase by phase.

---

## Ä‘Ĺşâ€ťâ€™ Important Info Ă˘â‚¬â€ť Read First

### Hosting & Infrastructure

| What | Where |
|---|---|
| **Code Repository** | GitHub Ă˘â‚¬â€ť `https://github.com/genyxz/genyxz` |
| **Frontend Hosting** | Netlify Ă˘â‚¬â€ť connected via Netlify CLI |
| **Backend** | Netlify Functions (serverless) Ă˘â‚¬â€ť no separate backend server |
| **Domain** | `genyxz.si` Ă˘â‚¬â€ť managed via Netlify DNS / external registrar |

### Coding & AI Tools

| Tool | Purpose |
|---|---|
| **Coding Model** | Codex CLI (chatgpt.com coding model) Ă˘â‚¬â€ť primary build tool |
| **MCP Servers** | Context7 Ă˘â‚¬â€ť for up-to-date library documentation |
| **Editor** | VS Code Ă˘â‚¬â€ť connected to Codex |
| **CLI Tools** | Netlify CLI (installed globally) Ă˘â‚¬â€ť local dev, deploy, functions |

### Build Stack

| Layer | Technology |
|---|---|
| **Build Tool** | Vite (latest) |
| **Styling** | Tailwind CSS (latest) Ă˘â‚¬â€ť configured via Context7 docs |
| **i18n** | i18next + browser language detection |
| **Cookies** | Custom implementation Ă˘â‚¬â€ť GDPR compliant |
| **Analytics** | Google Analytics 4 Ă˘â‚¬â€ť loaded only after cookie consent |

### Images Ă˘â‚¬â€ť Google Cloud Storage

All images are hosted on Google Cloud Storage. Use the URLs listed in [`docs/INFO.md`](./docs/INFO.md) directly. **Never generate, find, or substitute image URLs** Ă˘â‚¬â€ť they are always provided by the project owner.

### Key Rules for Codex

1. **Always use Context7 MCP server** before writing config or implementation for any library. Docs change between versions Ă˘â‚¬â€ť never assume.
2. **Read the referenced `.md` file** for each step before executing.
3. **Follow the file structure** defined in Step 1 exactly.
4. **Verify after every step** Ă˘â‚¬â€ť each step has a checkpoint at the bottom.
5. **Use `netlify dev`** for local development once `netlify.toml` is configured (not `npm run dev`).
6. **Never hardcode text** Ă˘â‚¬â€ť all visible strings go through i18n translation keys.
7. **All images come from Google Cloud Storage** Ă˘â‚¬â€ť use URLs from INFO.md, never generate your own.
8. **Commit after each step:**
   ```bash
   git add -A && git commit -m "Step X: [description]"
   ```

---

## Ä‘Ĺşâ€śâ€ą Build Steps

### Step 0 Ă˘â‚¬â€ť Project Identity & Planning
Ä‘Ĺşâ€śâ€ž **Reference:** [`docs/INFO.md`](./docs/INFO.md)

Define everything about what we're building before writing any code.

- [x] Website type defined (single page / multi page)
- [x] Project name, logo, favicon, apple-touch-icon, android icon, OG image defined (GCS URLs)
- [x] PWA decision made (yes/no)
- [x] Color theme defined (primary, secondary, accent, neutrals)
- [x] Dark mode colors defined (if dark mode enabled)
- [x] Website style defined (modern, minimal, etc.)
- [x] Navigation structure defined (submenus yes/no, dropdown style)
- [x] Pages listed (if multi-page) with slugs per language
- [x] Sections listed (if single-page) with order
- [x] Languages listed with codes and flags
- [x] Domain confirmed
- [x] All SEO values defined (meta titles, descriptions, keywords, OG data per page)
- [x] External services confirmed (GA, Maps, Calendar, Email provider)

---

### Step 1 Ă˘â‚¬â€ť Foundation
Ä‘Ĺşâ€śâ€ž **Reference:** [`docs/01-foundation.md`](./docs/01-foundation.md)

Scaffold the project, configure all tooling, build the HTML structure.

- [x] **1.1** Vite (React) project initialized
- [x] **1.2** `netlify.toml` created (build command, publish dir, redirects, security headers, caching)
- [x] **1.3** Netlify CLI linked to site (`netlify link` or `netlify sites:create`)
- [x] **1.4** Tailwind CSS installed and configured using Context7 docs
  - [ ] Global CSS theme: colors, fonts, scrollbar, buttons, cards, calendar, modules
  - [ ] Mobile-first responsive breakpoints (< 768px optimization)
  - [ ] Custom component styles defined
  - [ ] Dark mode variants (if dark mode enabled in INFO.md)
- [x] **1.5** `index.html` built with full structure
  - [ ] All `<meta>` tags (charset, viewport, SEO, color-scheme)
  - [ ] Open Graph tags (og:type, og:site_name, og:title, og:description, og:url, og:locale, og:image)
  - [ ] Twitter Card tags
  - [ ] `hreflang` tags for all languages + x-default
  - [ ] Canonical URL
  - [ ] Favicon + apple-touch-icon (GCS URLs from INFO.md)
  - [ ] Web manifest link (if PWA)
  - [ ] JSON-LD structured data (Organization schema)
  - [ ] Preconnect hints (`storage.googleapis.com`, Google Fonts)
  - [ ] Font stylesheet
  - [ ] `<noscript>` fallback with language links
  - [ ] Language redirect script in `<body>`
  - [ ] `robots.txt` created (set to `noindex,follow` during development)
- [x] **1.6** Project folder structure created
- [x] **1.7** All page files/routes created (empty Ă˘â‚¬â€ť content comes in Step 3)
- [x] **1.8** `netlify dev` runs successfully

---

### Step 2 Ă˘â‚¬â€ť Advanced Functionality
Ä‘Ĺşâ€śâ€ž **Reference:** [`docs/02-advanced.md`](./docs/02-advanced.md)

Add i18n, routing, dark mode, and error handling.

- [x] **2.1** i18next installed and configured using Context7 docs
  - [ ] Translation JSON files created for all languages
  - [ ] Browser language detection enabled
  - [ ] Language preference saved in cookie
  - [ ] Language switcher component built
- [x] **2.2** Routing implemented (single-page smooth scroll anchors; URL slugs N/A)
  - [x] Format: `genyxz.si/{lang}/{page-name-in-that-language}` (N/A single-page)
  - [x] Browser language auto-detection (N/A single-language)
- [ ] Language selector in navigation bar (desktop + mobile)
- [ ] Language selector in footer
- [ ] Flag SVG icons used for each language
- [x] **2.3** Dark mode: N/A â€” light theme only

- [x] **2.4** 404 Not Found page built
  - [ ] Styled consistently with site design
  - [ ] Translated via i18n
  - [ ] Links back to homepage
- [ ] **2.5** All text on site uses i18n translation keys Ă˘â‚¬â€ť no hardcoded strings

---

### Step 3 Ă˘â‚¬â€ť Content Implementation
Ä‘Ĺşâ€śâ€ž **Reference:** [`docs/03-content.md`](./docs/03-content.md)

Fill all pages with actual content using the i18n system and respecting dark mode.

- [x] **3.1** All translation files populated with real content (single-language `sl` scope)
- [x] **3.2** Each page built out with sections and components
  - [x] All content rendered via i18n translation keys
  - [x] All components styled with Tailwind (light theme only)
  - [x] Responsive layout verified on mobile (< 768px)
- [x] **3.3** Images and assets added (placeholder visuals for now; GCS images deferred)
  - [x] Alt text set via i18n keys (to apply when images are integrated)
- [x] **3.4** Navigation fully functional
  - [x] All page links working
  - [x] Mobile menu working
  - [x] Language switcher in nav (N/A single-language site)

---

### Step 4 Ă˘â‚¬â€ť Netlify Functions
Ä‘Ĺşâ€śâ€ž **Reference:** [`docs/NETLIFY_FUNCTIONS.md`](./docs/NETLIFY_FUNCTIONS.md)

Build all serverless backend functionality.



- [ ] **4.3** All functions tested via `netlify dev`

---

### Step 4.1 Ă˘â‚¬â€ť Other Integrations
Ä‘Ĺşâ€śâ€ž **Reference:** [`docs/OTHER_FUNCTIONS.md`](./docs/OTHER_FUNCTIONS.md)


- [ ] Any other client-specific integrations
- [ ] All integrations tested via `netlify dev`

---

### Step 5 Ă˘â‚¬â€ť Cookies & Analytics
Ä‘Ĺşâ€śâ€ž **Reference:** [`docs/COOKIES.md`](./docs/COOKIES.md)

- [ ] **5.1** Cookie consent data structure (version, categories, timestamp)
- [ ] **5.2** Cookie utility functions (set, get, delete, consent, reset)
- [ ] **5.3** Cookie banner (position: Bottom Left)
  - [ ] Desktop layout
  - [ ] Mobile layout
  - [ ] All text translated
- [ ] **5.4** Cookie settings modal
  - [ ] Desktop modal + mobile full-screen
  - [ ] Category accordions with cookie tables
  - [ ] Essential locked ON
  - [ ] Custom cookies in Essential table (if any)
- [ ] **5.5** Conditional script loading (zero scripts before consent)
- [ ] **5.6** Google Analytics 4 (if enabled, tracking ID: G-XXXXXXXXXX)
- [ ] **5.7** Consent reset/withdrawal (footer + dual-domain deletion)
- [ ] **5.8** Cookie policy page (translated, linked from banner + footer)
- [ ] **5.9** All cookie UI translated via i18n
- [ ] **5.10** Persistent cookie settings access (footer + cookie policy + privacy page)
- [ ] **5.11** Client-side storage documented (localStorage/sessionStorage)
- [ ] **5.12** Third-party resources (Self-hosted fonts)
- [ ] **5.13** Maintenance notes

---

### Step 6 Ă˘â‚¬â€ť Legal Pages
Ä‘Ĺşâ€śâ€ž **Reference:** [`docs/LEGAL.md`](./docs/LEGAL.md)

- [ ] **6.1** Privacy Policy page
  - [ ] Content covers: data collection, cookies, analytics, third-party services, user rights
  - [ ] Translated via i18n for all languages
  - [ ] Accessible from footer
- [ ] **6.2** Terms of Service page
  - [ ] Translated via i18n for all languages
  - [ ] Accessible from footer

---

### Step 7 Ă˘â‚¬â€ť Sitemap
Ä‘Ĺşâ€śâ€ž **Reference:** [`docs/07-sitemap.md`](./docs/07-sitemap.md)

- [ ] **7.1** Use Context7 MCP server to get up-to-date sitemap spec
- [ ] **7.2** `sitemap.xml` generated with all pages and language variants
- [ ] **7.3** `robots.txt` updated with sitemap URL
- [ ] **7.4** Switch `robots` meta from `noindex,follow` to `index,follow` for production

---

### Step 8 Ă˘â‚¬â€ť Performance & Accessibility
Ä‘Ĺşâ€śâ€ž **Reference:** [`docs/A11Y_PERFORMANCE.md`](./docs/A11Y_PERFORMANCE.md)

- [ ] **8.1** Image optimization (WebP/AVIF, lazy loading, explicit dimensions)
- [ ] **8.2** Performance (fonts, critical CSS, code splitting, caching)
- [ ] **8.3** Accessibility (skip-link, keyboard nav, ARIA, contrast, focus states)
- [ ] **8.4** Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

### Step 9 Ă˘â‚¬â€ť Launch
Ä‘Ĺşâ€śâ€ž **Reference:** [`docs/LAUNCH_CHECKLIST.md`](./docs/LAUNCH_CHECKLIST.md)

- [ ] **9.1** Lighthouse audit: all scores 90+
- [ ] **9.2** Cross-browser + mobile tested
- [ ] **9.3** All env vars set in Netlify dashboard
- [ ] **9.4** Domain DNS configured, SSL confirmed
- [ ] **9.5** `netlify deploy --prod`
- [ ] **9.6** Sitemap submitted to Google Search Console
- [ ] **9.7** OG tags validated (Facebook Debugger, Twitter Card Validator)

---

> Ă˘Ĺ›â€¦ **When all checkboxes above are checked, the project is complete and live.**

## Company Context

### What The Company Does
GenYXZ je skupnost ambasadorjev, ki povezuje mlade z znanjem o sodobnih pristopih k zdravju. Projekt deluje v okolju preventive, sodobne medicine in dolgoroĂ„Ĺ¤ne zaÄąË‡Ă„Ĺ¤ite, povezan z blagovno znamko Dr Best / Trilogija zaÄąË‡Ă„Ĺ¤ite. Cilj je rekrutirati prvo generacijo GenYXZ ambasadorjev Ă˘â‚¬â€ť ÄąË‡tudente Gen Z, ki ÄąÄľelijo veĂ„Ĺ¤ kot samo ÄąË‡tudentsko delo.

### Important Company Information
Not provided





