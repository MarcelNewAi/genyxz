# 📋 INFO.md — Project Identity & Planning

> **Purpose:** This file contains ALL decisions about the project before any code is written. Every other step references this file for values, names, colors, pages, and languages.

---

## Website Type

- **Type:** single-page
- **Framework:** Vite (React)

---

## Project Identity

| Property | Value |
|---|---|
| **Project Name** | GenYXZ |
| **Tagline** | Nova generacija, ki razume prihodnost zdravja. |
| **Domain** | genyxz.si |
| **Author / Company** | GenYXZ |

---

## Visual Assets — Google Cloud Storage

> All images are hosted on Google Cloud Storage. Use these URLs directly in code. Never generate, find, or substitute image URLs.

| Asset | GCS URL | Specs |
|---|---|---|
| **Logo (light bg)** | https://storage.googleapis.com/... | SVG preferred |
| **Logo (dark bg)** | https://storage.googleapis.com/... | For dark mode / dark sections |
| **Favicon** | https://storage.googleapis.com/... | 32×32 PNG |
| **Apple Touch Icon** | https://storage.googleapis.com/... | 180×180 PNG |
| **Android Icon (192)** | https://storage.googleapis.com/... | 192×192 PNG |
| **Android Icon (512)** | https://storage.googleapis.com/... | 512×512 PNG |
| **OG Image** | https://storage.googleapis.com/... | 1200×630 JPG/PNG |

### Additional Project Images

> List every image used on the site. Codex uses these URLs directly — no searching for images.

| Image | GCS URL | Used On | Purpose |
|---|---|---|---|
| Hero image | https://storage.googleapis.com/... | Homepage | Visual branding |

### PWA

- **Enable PWA:** no

If yes, a `site.webmanifest` will be generated using the icons above.

---

## Color Theme

| Role | Light Mode | Dark Mode |
|---|---|---|
| **Primary** | #133156 | Use Tailwind `dark:` variants in component classes |
| **Secondary** | #43D1AB | Use Tailwind `dark:` variants in component classes |
| **Accent** | #88EA4E | Use Tailwind `dark:` variants in component classes |
| **Background** | #FFFFFF | Use Tailwind `dark:` variants in component classes |
| **Surface** | [let ai choose] | Use Tailwind `dark:` variants in component classes |
| **Text Primary** | [let ai choose] | Use Tailwind `dark:` variants in component classes |
| **Text Secondary** | [let ai choose] | Use Tailwind `dark:` variants in component classes |
| **Border** | [let ai choose] | Use Tailwind `dark:` variants in component classes |
| **Error** | [let ai choose] | Use Tailwind `dark:` variants in component classes |
| **Success** | [let ai choose] | Use Tailwind `dark:` variants in component classes |

---

## Website Style

- **Overall Aesthetic:** Modern, minimal, clean
- **Navigation Type:** Fixed top navbar
- **Has Submenus:** no
- **Submenu Style:** none
- **Dark Mode:** no
- **Animations:** Subtle scroll reveals

### Font Stack

| Role | Font | Weight(s) | Source |
|---|---|---|---|
| **Headings** | Poppins | auto | Self-hosted local files |
| **Body** | Inter | auto | Self-hosted local files |


---

## Pages

### Single Page Website

> Use this section if type is `single-page`. List all sections in order.

| Section | Order | Description |
|---|---|---|
| Hero | 1 | [let ai choose] |
| Zakaj to obstaja | 2 | [let ai choose] |
| Prva generacija | 3 | [let ai choose] |
| Izberi svojo pot | 4 | [let ai choose] |
| Kaj pridobiš | 5 | [let ai choose] |
| Koga hočemo | 6 | [let ai choose] |
| Prijava | 7 | [let ai choose] |

### Multi-Page Website

> Use this section if type is `multi-page`. List all pages with slugs per language.

| Page | SL Slug | LANG2 Slug | Description |
|---|---|---|---|
| No pages configured | - | - |

---

## Languages

| Language | Code | Default? | Flag |
|---|---|---|---|
| Slovenian | sl | yes | 🇸🇮 |
| Language 2 | lang2 | no | N/A |

---

## SEO — Per Page Meta Values

### Global (Site-Wide)

| Property | Value |
|---|---|
| **Site Name** | GenYXZ |
| **Default OG Image** | https://storage.googleapis.com/... |
| **Twitter Handle** | @yourhandle |
| **Google Site Verification** | (Codex will configure if needed) |

### Per Page

| Codex will generate appropriate SEO meta titles, descriptions, and keywords for each page based on the page content and project identity. | - | - | - |

---

## External Services & Integrations

| Service | Enabled | Details |
|---|---|---|
| **Google Analytics 4** | no | Tracking ID: `G-XXXXXXXXXX` |
| **Google Maps** | no | API Key: set in Netlify env vars |
| **Google Calendar** | no | For booking system |
| **Contact Form** | no | Via Netlify Functions |
| **Email Service** | no | Provider: None |
| **Other** | none | none |

## Company Context

### What The Company Does
GenYXZ je skupnost ambasadorjev, ki povezuje mlade z znanjem o sodobnih pristopih k zdravju. Projekt deluje v okolju preventive, sodobne medicine in dolgoročne zaščite, povezan z blagovno znamko Dr Best / Trilogija zaščite. Cilj je rekrutirati prvo generacijo GenYXZ ambasadorjev — študente Gen Z, ki želijo več kot samo študentsko delo.

### Important Company Information
Not provided
