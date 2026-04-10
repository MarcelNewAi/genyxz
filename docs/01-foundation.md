# 🏗️ Step 1 — Foundation

> **Prerequisites:** [`INFO.md`](./INFO.md) must be completely filled out.
> **Context7:** Use Context7 MCP server to fetch latest docs for Vite (React), Tailwind CSS, and Netlify before writing any configuration.

---

## 1.1 — Initialize the Project

### If using Vite (vanilla):

```bash
npm create vite@latest . -- --template vanilla
npm install
```

### If using Vite (React):

```bash
npm create vite@latest . -- --template react
npm install
```

### If using Next.js:

```bash
npx create-next-app@latest . --use-npm
```

Clean all default boilerplate — remove example components, demo CSS, placeholder text. Keep config files only.

---

## 1.2 — Create `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[dev]
  command = "npm run dev"
  port = 8888
  targetPort = 5173
  autoLaunch = false

# SPA fallback
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# API routes → serverless functions
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

# Force HTTPS
[[redirects]]
  from = "http://genyxz.si/*"
  to = "https://genyxz.si/:splat"
  status = 301
  force = true

# Security headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"

# Cache immutable assets (Vite hashed filenames)
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Cache static files
[[headers]]
  for = "/fonts/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.ico"
  [headers.values]
    Cache-Control = "public, max-age=86400"
```

### Link Netlify

```bash
netlify link
# OR create a new site:
netlify sites:create --name genyxz
```

---

## 1.3 — Install & Configure Tailwind CSS

> ⚠️ **CRITICAL:** Use Context7 MCP server to fetch the latest Tailwind CSS documentation BEFORE proceeding. Tailwind v4 has a completely different config system than v3. Do NOT assume — always check.

### Prompt for Codex:

```
Use the Context7 MCP server to fetch the latest Tailwind CSS documentation.
Based on the current version, install and configure Tailwind CSS for a Vite (React) project.
```

### Theme Configuration

After installation, configure the full design system using values from INFO.md:

**Color tokens:**
- Primary: #133156
- Secondary: #43D1AB
- Accent: #88EA4E
- Background: #FFFFFF
- Surface: [let ai choose]
- Text Primary: [let ai choose]
- Text Secondary: [let ai choose]
- Border: [let ai choose]
- Error: [let ai choose]
- Success: [let ai choose]

**Font stack:**
- Headings: Poppins
- Body: Inter

**Required global component styles in CSS:**

| Component | What to Style |
|---|---|
| **Scrollbar** | Custom scrollbar (webkit + firefox) matching the theme |
| **Buttons** | Primary, secondary, outline, ghost — with hover/focus/active states |
| **Links** | Default, hover, active states |
| **Headings** | h1-h6 size scale, weight, line-height |
| **Form inputs** | Text input, textarea, select — border, focus ring, error state |
| **Navigation** | Desktop nav, mobile hamburger, submenu dropdowns (if applicable) |
| **Modals** | Overlay, centered content, close button |

**Mobile optimization (< 768px):**
- All components touch-friendly (min 44px tap targets)
- Navigation collapses to hamburger
- Typography scales down
- No horizontal scrolling
- Adequate spacing for thumb zones



---

## 1.4 — Build `index.html`

> Follow this exact structure. Meta values are derived by Codex from project context (Project Name + Tagline).

```html
<!doctype html>
<html lang="sl" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <title>GenYXZ</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="application-name" content="GenYXZ" />
    <meta name="apple-mobile-web-app-title" content="GenYXZ" />
    <meta name="description" content="Nova generacija, ki razume prihodnost zdravja." />
    <meta name="keywords" content="GenYXZ" />
    <meta name="author" content="GenYXZ" />
    <meta name="color-scheme" content="dark light" />

    <!-- IMPORTANT: Set to noindex during development, switch to index,follow before launch (Step 9) -->
    <meta name="robots" content="noindex,follow" />

    <link rel="canonical" href="https://www.genyxz.si/" />

    <!-- Hreflang — one per language + x-default -->
    <link rel="alternate" hreflang="sl" href="https://www.genyxz.si/sl/" />
    <link rel="alternate" hreflang="lang2" href="https://www.genyxz.si/lang2/" />
    <link rel="alternate" hreflang="x-default" href="https://www.genyxz.si/sl/" />

    <!-- Favicon & Icons — all from Google Cloud Storage -->
    <link rel="icon" type="image/png" sizes="32x32" href="https://storage.googleapis.com/..." />
    <link rel="apple-touch-icon" sizes="180x180" href="https://storage.googleapis.com/..." />

    <!-- PWA Manifest (if enabled in INFO.md) -->
    

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="GenYXZ" />
    <meta property="og:title" content="GenYXZ - Nova generacija, ki razume prihodnost zdravja." />
    <meta property="og:description" content="Nova generacija, ki razume prihodnost zdravja." />
    <meta property="og:url" content="https://www.genyxz.si/" />
    <meta property="og:locale" content="sl_SI" />
    <meta property="og:locale:alternate" content="lang2_LANG2" />
    <meta property="og:image" content="https://storage.googleapis.com/..." />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="GenYXZ" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="GenYXZ - Nova generacija, ki razume prihodnost zdravja." />
    <meta name="twitter:description" content="Nova generacija, ki razume prihodnost zdravja." />
    <meta name="twitter:image" content="https://storage.googleapis.com/..." />
    <meta name="twitter:image:alt" content="GenYXZ" />

    <!-- Structured Data -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "GenYXZ",
        "url": "https://www.genyxz.si/",
        "logo": "https://storage.googleapis.com/..."
      }
    </script>

    <!-- Preconnect — speeds up first resource load from these origins -->
    <link rel="preconnect" href="https://storage.googleapis.com" />

    <!-- Fonts -->
    <!-- Self-hosted fonts only: no external Google Fonts CDN request. -->
    <!-- Download font files into src/assets/fonts and define @font-face with font-display: swap. -->
  </head>
  <body>
    <!-- Noscript fallback with language links -->
    <noscript>
      <p>GenYXZ works best with JavaScript enabled. Choose your language:</p>
      <p>
        <a href="/sl/">Slovenian</a> | <a href="/lang2/">Language 2</a>
      </p>
    </noscript>

    <!-- Language redirect — detects browser language and redirects to correct version -->
    <script>
      (function redirectByLanguage() {
        var language = (navigator.languages && navigator.languages[0]) || navigator.language || '';
        var normalized = (language || '').toLowerCase();
        var supported = ['sl', 'lang2'];
        var fallback = 'sl';
        var lang = (navigator.language || '').toLowerCase().slice(0, 2);
        var target = supported.includes(lang) ? lang : fallback;
        window.location.replace('/' + target + '/');
        window.location.replace(target);
      })();
    </script>
  </body>
</html>
```

---

## 1.5 — Create `robots.txt`

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://www.genyxz.si/sitemap.xml
```

---

## 1.6 — Create the Folder Structure

```
project-root/
├── public/
│   ├── robots.txt
│   ├── site.webmanifest          (if PWA enabled)
│   └── locales/
|       |-- sl/
|       |   \-- translation.json
|       |-- lang2/
|       |   \-- translation.json
├── src/
│   ├── main.js                   App entry point
│   ├── style.css                 Global styles + Tailwind
│   ├── components/
│   │   ├── header.js
│   │   ├── footer.js
│   │   ├── cookie-banner.js
│   │   ├── language-switcher.js

│   ├── utils/
│   │   ├── cookies.js
│   │   ├── i18n.js
│   │   └── analytics.js

│   └── assets/
│       ├── images/
│       └── fonts/
├── netlify/
│   └── functions/
├── docs/
├── index.html
├── vite.config.js
├── netlify.toml
├── package.json
├── MASTER_PLAN.md
└── README.md
```

Create all directories:

```bash
mkdir -p public/locales/{sl,lang2}
mkdir -p src/components src/utils src/pages src/assets/images src/assets/fonts
mkdir -p netlify/functions
```

---

## 1.7 — Create Empty Page Files

For each page listed in INFO.md, create a placeholder file in `src/pages/`:

- `src/pages/home.js` -> Home page

Each file should export a render function and have a comment stating which page it is. Content is added in Step 3.

---

## Verification

```bash
netlify dev
```

**Checkpoint — all must pass:**
- [ ] Dev server starts on `localhost:8888`
- [ ] `index.html` loads with all meta tags visible in page source
- [ ] Tailwind utility classes render correctly
- [ ] Custom theme colors/fonts apply
- [ ] Scrollbar is custom styled
- [ ] Page is responsive at 768px and below
- [ ] Language redirect fires correctly
- [ ] No console errors
- [ ] `robots.txt` accessible at `localhost:8888/robots.txt`

```bash
git add -A && git commit -m "Step 1: Foundation — Vite (React), Tailwind, netlify.toml, index.html, project structure"
```

## Company Context

### What The Company Does
GenYXZ je skupnost ambasadorjev, ki povezuje mlade z znanjem o sodobnih pristopih k zdravju. Projekt deluje v okolju preventive, sodobne medicine in dolgoročne zaščite, povezan z blagovno znamko Dr Best / Trilogija zaščite. Cilj je rekrutirati prvo generacijo GenYXZ ambasadorjev — študente Gen Z, ki želijo več kot samo študentsko delo.

### Important Company Information
Not provided
