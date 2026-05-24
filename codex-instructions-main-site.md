# Codex Instructions — GenYXZ Main Website Full Implementation
## Based on: UX/UI in vsebinski brief (final client document)

---

## HOW TO USE THESE INSTRUCTIONS
Work through this document **phase by phase**. Do not jump ahead.  
At the start of each phase, read the existing code first — do not assume structure.  
All copy is in **Slovenian** — use it **verbatim**, character for character.  
Never translate, rephrase, or "improve" Slovenian strings.

---

## PHASE 0 — DESIGN SYSTEM (DO THIS FIRST, BEFORE TOUCHING ANY PAGE)

Before any visual changes, establish or update the global design system. All subsequent phases depend on this being correct.

### 0.1 Color tokens
Find the existing CSS variables file (likely `index.css`, `globals.css`, or a `tokens.css`). Update or add:

```css
--color-bg-primary: #FFFFFF;
--color-bg-secondary: #F7F9FA;
--color-accent-teal: #2BAEBA;
--color-accent-purple: #7E2392;
--color-text-primary: #111111;
--color-text-secondary: #5F6368;
```

**Gradients:** Use ONLY on CTA buttons and subtle divider lines. No neon/glow effects anywhere.

### 0.2 Typography
Install or confirm one of these fonts is loaded (in order of preference): **Satoshi**, **General Sans**, **Inter**.  
Do NOT use: Arial, Roboto, system-ui as the display font.

Rules:
- Headings: large, confident, tight letter-spacing
- Body paragraphs: short, large line-height (`1.7–1.8`)
- Editorial spacing between sections (`padding: 100px 0` or more on desktop)

### 0.3 DNA Helix Visual Motif
The main visual symbol is a **DNA helix** — not a turtle, not abstract blobs.  
Usage rules (strictly follow these):
- Used as: background line, animated scroll detail, section divider, or subtle texture
- Must feel: premium, futuristic, clean — NOT medical, NOT clinical
- Must NOT be: oversized, dominant, or the main focus of any section
- Implementation: SVG, CSS animation, or a lightweight canvas element
- Create a reusable `<DNAHelix />` component (or equivalent) that accepts props for size, opacity, and color so it can be placed consistently across pages

### 0.4 Global Animation Rules
- Smooth `fade-in` on page load for hero elements (staggered, not all at once)
- Subtle `reveal on scroll` for section content (use IntersectionObserver or existing scroll library)
- Minimal parallax on the DNA motif only
- Hover states on cards: subtle lift (`translateY(-4px)`) + shadow increase
- NO flashy neon effects, NO gaming aesthetics, NO heavy particle systems

### 0.5 Navigation (Global — applies to all pages)
Update the navbar component:

**Desktop layout:**
| Left | Center | Right |
|---|---|---|
| `O nas` / `Kaj delamo` | **GENYXZ LOGO** (clickable → Home) | `Ambasadorji` / `Kontakt` |

**Behavior:**
- Sticky (fixed to top on scroll)
- Starts: transparent or near-white (`rgba(255,255,255,0.0)`)
- On scroll: white background + blur (`backdrop-filter: blur(12px)`)
- Hover: subtle opacity change or thin underline — nothing heavy
- Mobile: logo left or center, hamburger menu right

---

## PHASE 1 — HOME PAGE

The home page is a **brand experience**, not a conversion page. Goal: user understands what GenYXZ is, feels the credibility, and is gently guided. No aggressive recruitment. No sign-up form.

### 1.1 Hero Section
**Background:** white or off-white, large empty space, DNA helix as subtle background element, no heavy gradients.

**H1 (very large, two lines):**
```
Nova generacija,
ki razume prihodnost zdravja.
```

**Subtitle:**
```
Povezujemo znanje, ljudi in sodobne rešitve, ki spreminjajo način, kako razumemo zdravje.
```

**CTA buttons (soft, not aggressive — two options side by side):**
- Primary: `Preberi več`
- Secondary (ghost/outline style): `Kaj delamo`

Both link to their respective pages/sections, not to the ambassador sign-up.

---

### 1.2 Section: "Zakaj GenYXZ obstaja"
Three blocks layout (cards, columns, or icon + text rows — match existing design language).

**Section heading:**
```
Živimo v času, ko se zdravje spreminja hitreje kot naše navade.
```

**Block 1:**
```
Tehnologija in znanost napredujeta hitreje kot kadarkoli.
```

**Block 2:**
```
Rešitve za boljše zdravje že obstajajo, a jih večina ljudi še ne pozna ali ne razume.
```

**Block 3:**
```
GenYXZ povezuje znanje, ljudi in prakso na način, ki je razumljiv vsakomur.
```

---

### 1.3 Section: "Kaj je GenYXZ"
**Layout:** split — text left, DNA visual or lifestyle photo right (use existing image from `public/locales/sl/images` if available).

**Body text:**
```
GenYXZ je skupnost ljudi, ki razumejo, da prihodnost zdravja ne temelji samo na zdravljenju bolezni, ampak na razumevanju telesa, preventive in pravih odločitev ob pravem času.
```

```
Naš cilj je preprost: povezati ljudi z znanjem in rešitvami, ki že obstajajo - a jih večina še ne pozna.
```

---

### 1.4 Section: "Kaj delamo"
**Heading:**
```
Znanje približamo ljudem.
```

**Four cards (icon + text):**
- `Širimo znanje o sodobnih pristopih k zdravju.`
- `Organiziramo pogovore, predstavitve in manjše dogodke.`
- `Povezujemo ljudi z relevantnimi informacijami.`
- `Gradimo skupnosti v lokalnem okolju.`

**Closing line (below cards, emphasized/italic or slightly larger):**
```
Ne gre za klasično promocijo. Gre za razumevanje in prenos znanja.
```

---

### 1.5 Section: "Kako izgleda v praksi"
This section makes the concept concrete. Use a list or scenario-style layout (numbered steps, timeline, or icon rows).

**Items:**
- `Ambasador organizira manjši dogodek ali predstavitev.`
- `Vodi pogovor z ljudmi, ki jih tematika zanima.`
- `Povezuje posameznike z relevantnimi informacijami.`
- `Gradi svojo mrežo kontaktov.`
- `Znanje vedno povezuje s prakso.`

---

### 1.6 Section: "Ambasadorji"
This is the FIRST and ONLY place on the main page where a strong CTA appears.

**Heading:**
```
Ambasadorji so ljudje, ki želijo razumeti več.
```

**Body text:**
```
Naši ambasadorji so študenti, mladi profesionalci, posamezniki in družine z ambicijo. To so ljudje, ki radi delajo z ljudmi, želijo aktivno vplivati na okolje in vidijo zdravje kot področje prihodnosti.
```

**CTA button (strong, accent color — this is the main conversion point):**
```
Postani ambasador
```
→ This button links to the **separate ambassador landing page** (the recruitment page). It does NOT open a form on this page.

---

### 1.7 Final Section (emotional close)
**Body text (large, centered, generous spacing):**
```
GenYXZ ni samo projekt.
Je platforma za ljudi, ki želijo razumeti prihodnost zdravja in jo približati drugim.
```

**Two soft CTA buttons:**
- `O nas`
- `Kaj delamo`

Both link to their respective pages. No sign-up CTA here.

---

### 1.8 REMOVE from Home Page
Find and remove (or move to the landing page) any of the following:
- "Prva generacija" as a main section
- Aggressive recruitment hooks
- Sign-up / application form
- More than 1 CTA pointing to ambassador sign-up
- Long explanation of the application process
- Ambassador video (if present, move to landing page)

---

## PHASE 2 — "O NAS" PAGE

### 2.1 Hero
**H1:**
```
Ne gradimo samo strani. Gradimo razumevanje prihodnosti zdravja.
```

**Subtitle:**
```
GenYXZ povezuje znanje, ljudi in sodobne rešitve, ki lahko spremenijo način, kako skrbimo za svoje zdravje.
```

### 2.2 Section: "Naša vizija"
**Text:**
```
Gradimo skupnost, ki razume prihodnost zdravja, zna kompleksne stvari razložiti preprosto, povezuje ljudi, znanje in prakso ter aktivno vpliva na okolje, v katerem živi.
```

### 2.3 Section: "Zakaj to obstaja"
**Text:**
```
Živimo v času hitrega razvoja tehnologije, sprememb življenjskega sloga in naraščajočega stresa. Hkrati znanost napreduje hitreje kot kadarkoli prej.
```

```
Problem ni več, ali rešitve obstajajo. Problem je, da jih večina ljudi še ne pozna ali razume.
```

### 2.4 Section: DNA Simbolika
**Text (can be a pull quote or callout block):**
```
DNA vijačnica predstavlja znanje, prihodnost medicine, razvoj in povezavo med človekom, znanostjo in dolgoročnim zdravjem.
```

Place the `<DNAHelix />` component here as a visual accent alongside this text.

### 2.5 Section: Partnerji
**This is a small credibility block — NOT a full standalone page.**

**Heading:**
```
Sodelujemo z organizacijami, ki razvijajo prihodnost zdravja.
```

**Body:**
```
Delujemo v okolju, kjer se stikajo preventiva, sodobna medicina in dolgoročna zaščita. Naš namen je to znanje približati ljudem na razumljiv, dostopen in praktičen način.
```

**Logo grid design rules:**
- Small, premium logo grid
- Monochrome logos only (no colorful branding)
- Lots of whitespace between logos
- No heavy borders or backgrounds on the grid
- Use existing partner logos from `public/locales/sl/images` if available

---

## PHASE 3 — "KAJ DELAMO" PAGE

### 3.1 Hero
**H1:**
```
Sodobne rešitve približamo ljudem.
```

**Subtitle:**
```
GenYXZ pomaga povezati znanje, prakso in ljudi, da prihodnost zdravja postane razumljiva in dostopna.
```

### 3.2 Section: Ključne aktivnosti
Five items (icon list or cards):
- `Širimo znanje o sodobnih pristopih k zdravju.`
- `Organiziramo pogovore in dogodke.`
- `Povezujemo ljudi z relevantnimi informacijami.`
- `Gradimo lokalne skupnosti.`
- `Sodelujemo s strokovnjaki, trenerji in zdravstvenimi ponudniki.`

### 3.3 Section: Kako delujemo
**Text:**
```
Naše delo temelji na pogovoru, razumevanju in prenosu znanja.
```

```
Kompleksne teme prevedemo v jasne, uporabne in življenjske informacije.
```

---

## PHASE 4 — "AMBASADORJI" PAGE

This page introduces ambassadors and ends with a strong CTA to the separate landing page. No form here.

### 4.1 Hero
**H1:**
```
Ambasador je človek, ki zna idejo približati drugim.
```

**Subtitle:**
```
Ni pomembno, ali prihajaš iz sveta športa, študija, dela z ljudmi ali osebnega razvoja. Pomembno je, da te zanima prihodnost zdravja in da želiš znanje deliti naprej.
```

### 4.2 Section: Kdo so naši ambasadorji
List (with icons or bullet styling):
- `Študenti`
- `Mladi profesionalci`
- `Posamezniki z ambicijo`
- `Družine in ljudje, ki to razumejo kot poslanstvo`
- `Ljudje, ki želijo več kot samo opazovati`

### 4.3 Section: Dve smeri (Two paths)
Two cards or columns:

**Card 1 — Community Ambassador:**
```
Delo z ljudmi, pogovori, gradnja zaupanja in povezovanje lokalnega okolja.
```

**Card 2 — Lifestyle Ambassador:**
```
Šport, zdravje, aktivno okolje in povezovanje lifestyle pristopa s preventivo.
```

### 4.4 Section: Kaj pridobiš
List (checkmarks or numbered):
- `Komunikacijske veščine`
- `Samozavest v realnih situacijah`
- `Izkušnje z ljudmi in projekti`
- `Mentorsko podporo`
- `Mrežo ambicioznih posameznikov`
- `Dostop do znanja in trendov prihodnosti`

### 4.5 Final CTA Block
**Lead-in text (centered, emotionally warm):**
```
Če čutiš, da je to zate, naredi prvi korak.
```

**CTA button (large, prominent, accent color):**
```
Postani ambasador
```
→ Links to the **separate ambassador landing page** (the recruitment/sign-up page).  
Do NOT embed a form here.

---

## PHASE 5 — KONTAKT PAGE / SECTION

Keep this minimal. No long forms.

**Heading:**
```
Stopi v stik
```

**Elements to include:**
1. Email address (display as a link)
2. Social media links (icons only — Instagram, LinkedIn, or whatever is currently in the project)
3. Short contact form with exactly three fields:
   - Name (`Ime`)
   - Email (`Email`)
   - Message (`Sporočilo`)
4. Submit button: `Pošlji`

No other fields. Remove anything beyond these three if a longer form exists.

---

## PHASE 6 — MOBILE UX PASS

After all pages are done, do a mobile-specific review pass. Checklist:

- [ ] Mobile-first: base styles are mobile, desktop uses `min-width` media queries
- [ ] All headings are large and readable on small screens (min `2rem` for H1)
- [ ] Paragraphs are short — no walls of text
- [ ] All CTA buttons are thumb-friendly (min height `48px`, full-width or near-full-width on mobile)
- [ ] Generous whitespace between sections on mobile
- [ ] Sections have clear visual separation (padding, background color change, or divider)
- [ ] Navigation hamburger menu works correctly and closes after a link is tapped
- [ ] DNA helix motif scales down gracefully or hides on very small screens if it causes overflow
- [ ] Partner logo grid reflows to 2 columns or single column on mobile
- [ ] Split layouts (text + image) stack vertically on mobile

---

## PHASE 7 — ANIMATION PASS

After layout and content are correct, add animations. Do not add animations before content is finalized.

**Implement:**
- Hero elements: staggered `fade-in` on load (title first, subtitle 150ms later, CTA 300ms later)
- Section content: `fade-in + translateY(20px → 0)` reveal on scroll (IntersectionObserver)
- DNA helix: minimal parallax scroll effect (moves at 0.3x scroll speed)
- Cards: hover state — `translateY(-4px)` + slight box-shadow increase (`transition: 200ms ease`)
- Navigation: background transition on scroll (`transition: background 300ms ease`)

**Do NOT add:**
- Neon glow effects
- Heavy particle systems
- Gaming-style animations
- Auto-playing video backgrounds
- Flashy entrance animations that delay content visibility

---

## PHASE 8 — FINAL CLEANUP CHECKLIST

Run through this before closing:

- [ ] All Slovenian copy matches this document verbatim
- [ ] Home page has NO application form and maximum ONE CTA pointing to sign-up
- [ ] "Postani ambasador" CTA on both Home and Ambasadorji pages links to the correct landing page URL
- [ ] Partners section exists on "O nas" page — NOT as a standalone page
- [ ] DNA helix is used subtly — it should not dominate any section
- [ ] No neon/glow gradients anywhere except CTA buttons
- [ ] Navigation is sticky, starts transparent, turns white+blur on scroll
- [ ] Logo in navbar center, links correctly to Home
- [ ] Contact form has exactly 3 fields (name, email, message)
- [ ] All pages pass basic mobile responsiveness check
- [ ] No console errors
- [ ] Existing functionality (routing, form submission, analytics) is intact

---

## IMPORTANT NOTES FOR CODEX

1. **Read each page's existing component before editing** — do not rewrite from scratch unless the structure is fundamentally incompatible.
2. **Reuse existing components** where possible (buttons, cards, section wrappers).
3. **The ambassador landing page is a separate file/route** — do not confuse it with the main site pages in this brief. The landing page was covered in a previous brief (`codex-instructions-landing-page.md`).
4. **Flag rather than invent** — if a partner logo, image, or asset is referenced but not found in `public/locales/sl/images`, flag it in a comment (`// TODO: missing asset`) rather than using a placeholder that might ship to production.
5. **Propose before implementing** — read this full brief, identify which files need changes, list them, then implement phase by phase.
