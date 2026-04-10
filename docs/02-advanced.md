# ⚡ Step 2 — Advanced Functionality

> **Prerequisites:** Step 1 complete. Tailwind configured. Project structure created.
> **Context7:** Use Context7 MCP server to fetch latest i18next docs before implementing.

---

## 2.1 — i18n Setup (i18next)

### Prompt for Codex:

```
Use the Context7 MCP server to fetch the latest i18next documentation,
including i18next-http-backend and i18next-browser-languagedetector.
Then implement i18n for this project following the instructions below.
```

### Install

```bash
npm install i18next i18next-http-backend i18next-browser-languagedetector
```

### Configure `src/utils/i18n.js`

| Setting | Value |
|---|---|
| **Supported languages** | ['sl', 'lang2'] |
| **Fallback language** | sl |
| **Detection order** | `navigator` → `cookie` → `querystring` → `htmlTag` |
| **Cache method** | Cookie (`i18next` cookie name) |
| **Cookie duration** | 30 days (43200 minutes) |
| **Query param** | `?lang=xx` |
| **Backend load path** | `/locales/{{lng}}/{{ns}}.json` |
| **Default namespace** | `translation` |
| **Debug** | `true` in dev (`import.meta.env.DEV`), `false` in production |

### Create Translation Files

For each language, create `public/locales/{code}/translation.json`:

- `public/locales/sl/translation.json`
- `public/locales/lang2/translation.json`

**Base translation key structure:**

```json
{
  "site": {
    "title": "",
    "tagline": ""
  },
  "nav": {
    "hero": "",
    "zakaj-to-obstaja": "",
    "prva-generacija": "",
    "izberi-svojo-pot": "",
    "kaj-pridobi": "",
    "koga-ho-emo": "",
    "prijava": "",
  },
  "cookie": {
    "message": "",
    "accept": "",
    "decline": "",
    "settings": "",
    "necessary": "",
    "analytics": "",
    "marketing": "",
    "save_preferences": ""
  },
  "footer": {
    "copyright": "© {{year}} GenYXZ.",
    "privacy": "",
    "terms": ""
  },
  "404": {
    "title": "",
    "message": "",
    "back_home": ""
  }
}
```

Leave values empty — real content is added in Step 3.

### Translation Rendering

Implement a function that updates all DOM elements with `data-i18n` attributes:

- `data-i18n="key"` → sets `textContent`
- `data-i18n-placeholder="key"` → sets `placeholder`
- `data-i18n-aria-label="key"` → sets `aria-label`
- `data-i18n-html="key"` → sets `innerHTML` (use sparingly)
- Dynamic values: `i18n.t('key', { variable: value })`

Update `document.documentElement.lang` on every language change.
- Save detected/chosen language in cookie for return visits.

---

## 2.2 — Language Switcher Component

Build `src/components/language-switcher.js`:

- { code: 'sl', label: 'SL', flag: '🇸🇮' }
- { code: 'lang2', label: 'LANG2', flag: 'N/A' }

- Renders a button for each language
- Shows flag + code
- Highlights currently active language
- On click: `i18n.changeLanguage(code)`
- Accessible: `aria-label` on each button

---



---



---

## 2.5 — 404 Not Found Page

Build a 404 page that:

- Uses the same layout (header, footer) as the rest of the site
- Displays translated text: `i18n.t('404.title')` and `i18n.t('404.message')`
- Has a link back to homepage: `i18n.t('404.back_home')`
- Respects current language

- Styled consistently with the site design

---

## 2.6 — Wire Everything in `main.js`

Update `src/main.js` to:

1. Import global styles
2. Import and await i18n initialization
3. Import and initialize: header, footer, cookie banner
4. Set up language change listener (re-render on language switch)
5. Set `document.documentElement.lang` to current language


---

## Verification

```bash
netlify dev
```

**Checkpoint — all must pass:**
- [ ] Language switcher changes all text on the page
- [ ] Browser language is auto-detected on first visit
- [ ] Language preference persists after refresh (cookie)


- [ ] 404 page displays for unknown routes
- [ ] 404 is translated and respects theme
- [ ] No hardcoded strings — all text from translation files
- [ ] `<html lang="">` updates on language change

```bash
git add -A && git commit -m "Step 2: Advanced — i18n, language slugs, dark mode, 404"
```

## Company Context

### What The Company Does
GenYXZ je skupnost ambasadorjev, ki povezuje mlade z znanjem o sodobnih pristopih k zdravju. Projekt deluje v okolju preventive, sodobne medicine in dolgoročne zaščite, povezan z blagovno znamko Dr Best / Trilogija zaščite. Cilj je rekrutirati prvo generacijo GenYXZ ambasadorjev — študente Gen Z, ki želijo več kot samo študentsko delo.

### Important Company Information
Not provided
