# 🗺️ Step 7 — Sitemap

> **Prerequisites:** All pages built (Steps 1-6). All routes and languages finalized.
> **Context7:** Use Context7 MCP server to get the latest XML sitemap specification and best practices.
> **Reference:** Domain and page/slug list from [`INFO.md`](./INFO.md)

---

## 7.1 — Research with Context7

### Prompt for Codex:

```
Use the Context7 MCP server to fetch the latest XML sitemap specification
and best practices. Then generate a sitemap.xml for this project.
```

---

## 7.2 — Generate `sitemap.xml`

Create `public/sitemap.xml`.

**Domain:** `genyxz.si`
**Pages:** All pages from INFO.md
**Languages:** All languages from INFO.md

### Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <url>
    <loc>https://www.genyxz.si/sl/</loc>
    <xhtml:link rel="alternate" hreflang="sl" href="https://www.genyxz.si/sl/"/>
    <xhtml:link rel="alternate" hreflang="lang2" href="https://www.genyxz.si/lang2/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.genyxz.si/sl/"/>
    <lastmod>2026-04-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://www.genyxz.si/lang2/</loc>
    <xhtml:link rel="alternate" hreflang="sl" href="https://www.genyxz.si/sl/"/>
    <xhtml:link rel="alternate" hreflang="lang2" href="https://www.genyxz.si/lang2/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.genyxz.si/sl/"/>
    <lastmod>2026-04-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://www.genyxz.si/privacy</loc>
    <lastmod>2026-04-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>https://www.genyxz.si/terms</loc>
    <lastmod>2026-04-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

</urlset>
```

---

## 7.3 — Update `robots.txt`

Verify `public/robots.txt` includes:

```
Sitemap: https://www.genyxz.si/sitemap.xml
```

---

## 7.4 — Switch robots meta for production

In `index.html`, change:
```html
<meta name="robots" content="noindex,follow" />
```
to:
```html
<meta name="robots" content="index,follow" />
```

> This switch happens at launch (Step 9) but is documented here as a reminder.

---

## Verification

- [ ] `sitemap.xml` accessible at `localhost:8888/sitemap.xml`
- [ ] Valid XML (no syntax errors)
- [ ] All pages included with correct URLs
- [ ] All language variants with `hreflang` entries
- [ ] `x-default` points to default language
- [ ] Domain is production domain, not localhost
- [ ] `robots.txt` references sitemap
- [ ] Legal pages included, 404 page excluded

```bash
git add -A && git commit -m "Step 7: Sitemap — XML sitemap with hreflang for all languages"
```

## Company Context

### What The Company Does
GenYXZ je skupnost ambasadorjev, ki povezuje mlade z znanjem o sodobnih pristopih k zdravju. Projekt deluje v okolju preventive, sodobne medicine in dolgoročne zaščite, povezan z blagovno znamko Dr Best / Trilogija zaščite. Cilj je rekrutirati prvo generacijo GenYXZ ambasadorjev — študente Gen Z, ki želijo več kot samo študentsko delo.

### Important Company Information
Not provided
