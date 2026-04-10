# 📝 Step 3 — Content Implementation

> **Prerequisites:** Steps 1-2 complete. i18n working. All pages created as empty shells.
> **Reference:** Page list, sections, and descriptions from [`INFO.md`](./INFO.md)
> **Images:** All image URLs from the INFO.md Google Cloud Storage table. Use them directly — never substitute.

---

## 3.1 — Populate Translation Files

For every language in INFO.md, fill the translation JSON files with real content.

1. Start with the **default language** — write all content first
2. Translate to each additional language
3. Every visible string must be a translation key — **no hardcoded text**

### Content Keys Per Page

"pages": {
  "hero": { "title": "", "subtitle": "", "cta": "" },
  "zakaj-to-obstaja": { "title": "", "subtitle": "", "cta": "" },
  "prva-generacija": { "title": "", "subtitle": "", "cta": "" },
  "izberi-svojo-pot": { "title": "", "subtitle": "", "cta": "" },
  "kaj-pridobi": { "title": "", "subtitle": "", "cta": "" },
  "koga-ho-emo": { "title": "", "subtitle": "", "cta": "" },
  "prijava": { "title": "", "subtitle": "", "cta": "" }
}

### Rules

- Use `{{variable}}` for dynamic values (year, company name)
- Image `alt` text must be translated: `data-i18n="pages.home.hero_image_alt"`
- Keep HTML out of translation strings when possible

---

## 3.2 — Build Page Content

For each page, build the HTML structure and components.

### Single Page
- [ ] Hero section implemented
- [ ] Zakaj to obstaja section implemented
- [ ] Prva generacija section implemented
- [ ] Izberi svojo pot section implemented
- [ ] Kaj pridobiš section implemented
- [ ] Koga hočemo section implemented
- [ ] Prijava section implemented

### Per Page Requirements

- [ ] All text rendered via i18n translation keys
- [ ] All Tailwind classes include `dark:` variants (if dark mode enabled)
- [ ] Responsive layout verified at 320px, 768px, 1280px
- [ ] Interactive elements have hover/focus/active states
- [ ] Semantic HTML used

---

## 3.3 — Images & Assets

All images come from Google Cloud Storage URLs listed in INFO.md.

| Image | GCS URL | Used On | Implementation |
|---|---|---|---|
| Hero image | https://storage.googleapis.com/... | Homepage | Visual branding |

### Image Requirements

- All images must have `alt` text set via i18n keys
- Set explicit `width` and `height` attributes
- Below-fold images: `loading="lazy"`
- Above-fold images (hero, logo): no lazy loading

---

## 3.4 — Navigation

- [ ] All page links working

- [ ] Active page/section visually indicated
- [ ] Submenus/dropdowns working (if applicable from INFO.md)
- [ ] Mobile menu: hamburger toggle, close on link click, close on outside click
- [ ] Language switcher in nav (desktop and mobile)


---

## Verification

**Checkpoint — all must pass:**
- [ ] Every page has real content (no placeholder text)
- [ ] All content switches when language is changed

- [ ] All pages responsive at 320px, 768px, 1280px
- [ ] All images display with correct alt text
- [ ] Navigation works across all pages
- [ ] No broken images

```bash
git add -A && git commit -m "Step 3: Content — all pages populated with real content"
```
