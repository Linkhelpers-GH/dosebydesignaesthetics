# Dose by Design — Phase 1 Audit & Implementation Plan

**Status:** Rebuild in progress (Phase 2) — NAP resolved; unverified promos/services omitted  
**Date:** 2026-07-20  
**Sources audited:** Live Wix site, Google Business Profile (public), Peel Simply Skin partner page, `BUSINESS_TRANSCRIPT.md`, `WEBSITE_REBUILD_INSTRUCTIONS.md`

---

## 1. Executive summary

The current site is a thin Wix Studio site with strong provider bios and a few treatment blurbs, but weak information architecture, incomplete Local SEO, and several gaps vs. the discovery transcript. GBP has strong review signals (5.0 / 15) but incomplete public NAP (phone appears missing). Rebuild should live in this folder as a modern mobile-first site (recommended: React + Vite, matching sibling rebuilds), reusing authentic Wix media and Aesthetic Record + Cherry integrations.

**Do not invent missing facts.** Conflicts and verification items are listed in §5 and must be resolved before publishing sensitive claims (hours, deposit, rewards, some services).

---

## 2. Current website audit

### 2.1 Platform & tech

| Item | Finding |
|------|---------|
| Platform | Wix (Studio / Thunderbolt), generator `Wix.com Website Builder` |
| Domain | `https://www.dosebydesignaesthetics.info/` |
| Homepage HTML size | ~6.7 MB raw (heavy) |
| OnPage score (DataForSEO) | ~90.85 with critical SEO gaps |
| Schema | Only basic `WebSite` — no LocalBusiness / Physician / FAQ |
| Sitemap | Wix index; `sitemap.xml` intermittently errors; pages sitemap is thin |

### 2.2 Current sitemap (indexed / declared)

**Core pages**
- `/` — Home
- `/book-online` — Booking collection
- `/portfolio` — Labeled “About Us” but essentially empty / broken content
- `/service-page/dermal-fillers`
- `/service-page/wrinkle-relaxer`
- `/service-page/microneedling`

**Portfolio collection URLs** (Wix portfolio templates; thin/stock-feeling titles)
- `/portfolio-collections/portfolio`
- `.../about-dose-by-design-philosophy`
- `.../modern-luxury-uiux-design` ← **non-medical leftover naming**
- `.../customized-treatment-planning`
- `.../signature-injectable-treatments`
- `.../client-success-stories`
- `.../personalized-wellness-consultations`

### 2.3 Navigation & IA

- Extremely shallow: logo, book, home anchors
- No dedicated About, Services hub, Contact, FAQ, Financing, Before & After, or provider detail routes in the pages sitemap
- Internal links on homepage: ~3 (poor crawl depth)
- Primary CTAs: Book (Aesthetic Record), In-person / Virtual consult CTAs

### 2.4 Homepage content structure (as rendered)

1. Hero: “Dosed for Balance. Designed for You.” + short intro (neurotoxins, dermal filler, skin rejuvenation)
2. Medical Director bio — **Dr. Abiade Short, MD** (full bio on page)
3. Injector bio — **Cathy Tang, PA** (partial vs transcript)
4. CTAs: About Cathy / About Abiade (likely anchors or lightboxes; no strong dedicated pages)
5. Treatment cards: Dissolve HA Filler, Dermal Fillers, Neurotoxins, Consultations
6. Banking Membership ($100/mo treatment credit + member pricing; Patient Portal)
7. Footer NAP: “Located inside Peel Simply Skin”, address, phone, email

**Missing vs rebuild brief:** trust strip, problems we help, patient journey, before/after, testimonials, FAQ, financing narrative section, founder “why Dose by Design exists” story, location/map block with Suite/arrival instructions.

### 2.5 Services on the live site (confirmed)

| Service | Where confirmed | Listed price (book-online) |
|---------|-----------------|----------------------------|
| Neurotoxins / Wrinkle Relaxer | Home + `/service-page/wrinkle-relaxer` + book-online | $300 |
| Dermal Fillers | Home + service page + book-online | $400 |
| Microneedling | Book-online + service page | $400 |
| Dissolve Hyaluronic Acid Filler | Homepage card | Not separately priced on book-online |
| Consultations (in-person + virtual) | Homepage | Not separately priced on book-online listing |

**Service page quality issues**
- Typo: “neurotoxinx=s”
- Generic / salesy copy (“Elevate…”, “Experience the art of Botox…”) — conflicts with transcript tone
- Duration shown as 1 hour on service pages (aligns with transcript “~1 hour appointments”)

### 2.6 Integrations (preserve)

| Integration | Status |
|-------------|--------|
| Aesthetic Record booking | Active — `https://dosebydesign.myaestheticrecord.com/online-booking` (+ book-appointment path) |
| Cherry Financing widget | Present in page HTML (`files.withcherry.com/widgets/widget.js`) — keep embed |
| Patient Portal / membership | Referenced in membership copy — verify URL before linking |
| Email | `info@dosebydesignaesthetics.com` |

### 2.7 Brand, fonts, colors

**Intent (transcript):** lavender gradient, soft purple, white, beige, black — luxury medical aesthetics.

**Live Wix reality:** Mix of Bodoni Moda / Calistoga / Ogg / IBM Plex / Madefor + many Google fonts in Cherry embed; dominant system blues from Wix UI (`#116dff` etc.) in CSS — brand purple/lavender not consistently applied.

**Assets to reuse (download, optimize, WebP, descriptive ALT):**
- Logo: `89973f_89d1c2ef4ca74b688ab7886ddd610453~mv2.png` (+ favicon jpeg)
- Provider / clinic photos (homepage media IDs including `241454b4…`, `302bfbb2…`, `33f3facf…`, `48e4d771…`, `5b1e46c8…`, `ea6ab2b8…`, `f523fa63…`, plus portfolio collection images)
- Do **not** hotlink `static.wixstatic.com` in production

### 2.8 SEO findings

| Issue | Detail |
|-------|--------|
| No meta description | Confirmed |
| Title too short / weak | `Home \| Dose By Design` |
| No H1 | Only H2/H3 |
| Thin OG | Title/url/site_name only; Twitter card incomplete |
| Schema insufficient | WebSite only — need LocalBusiness + Organization + Physician/Person + Breadcrumb + FAQ |
| Low content rate / large page | Wix bloat |
| Render-blocking resources | Many stylesheets/scripts |
| NAP incomplete on site | Missing Suite 104A; no hours |
| No FAQ / reviews markup | Missed rich-result opportunity |
| Robots.txt | Present; points to sitemap |

### 2.9 UX / conversion / a11y / performance

- Mobile: Wix responsive, but conversion path is unclear (hero → book vs education story)
- No testimonials / Google review social proof on site despite 5.0 / 15 GBP reviews
- Portfolio “About Us” page empty — broken trust path
- Accessibility: needs audit post-rebuild (keyboard nav, focus, ALT, contrast on lavender system)
- Performance: replace Wix with static/Vite build; lazy-load images; optimize LCP hero

---

## 3. Google Business Profile audit

**Place ID:** `ChIJg6TG7tpV2YAR4jElw-XWcVE`  
**CID / feature:** `0x80d955daeec6a483:0x5171d6e5c32531e2`  
**Maps URL:** as provided in instructions

| Field | Public finding | Notes |
|-------|----------------|-------|
| Name | **Dose by Design** | Matches transcript; site title uses “Dose By Design” casing |
| Category | Medical spa | Align site copy/schema |
| Address | **4642 30th St Suite 104A, San Diego, CA 92116** | GBP is more complete than website |
| Phone | **Appears missing** on public Maps (“Add place’s phone number”) | Website + Peel partner page list `(209) 991-2227` |
| Website | dosebydesignaesthetics.info | Present in Knowledge Graph |
| Hours | Monday **Closed**; “Opens 9 AM Wed” observed | Full weekly schedule not fully captured in limited Maps view — **confirm with owner** |
| Reviews | **5.0 · 15 Google reviews** | Strong; unused on website |
| Attributes | LGBTQ+ friendly; women-owned; Asian-owned | Optional trust signals (only if owner wants) |
| Social | Instagram `@dosebydesign` in Knowledge Graph | Partner page also lists `@kittycatpa` + TikTok |
| Booking note | Owner update: “Booking Now Available Online!” | Align with Aesthetic Record |

**Partner confirmation (Peel Simply Skin `/injectables`):** Suite 104A, enter via Peel lobby, check in at front desk, escorted to Suite 104A; phone `(209) 991-2227`; email `info@dosebydesignaesthetics.com`; independent business disclaimer.

---

## 4. Transcript vs website vs GBP

### Aligned (safe to use)

- Brand name Dose by Design; Cathy Tang as PA injector; San Diego location inside Peel Simply Skin building
- Natural, personalized, collaborative tone direction
- Neurotoxins + dermal fillers as core offerings
- Filler dissolving described on website
- Medical director present on website as Dr. Abiade Short, MD (“Abhi” in transcript)
- ~1 hour appointment length (service pages)
- Cherry financing present on site
- MCPHS 2016 education; 8+ years aesthetics; Boston origin on site

### Missing on website (from transcript — candidates to add after verification)

- Founder story (left prior clinic / values misalignment → Dose by Design)
- Urgent Care background; Reiki (comfort only, not a medical service); CA move 2018; ~10 years as PA
- Patient journey / education-first consultation narrative
- Explicit philosophy line about looking like yourself / refreshed & rested
- Target concerns list (fine lines, volume loss, laxity, asymmetry, tired look, preventative care)
- Lip Flip; Acne Cortisone Injection (Pimple Shot) — **not found on live site**
- Allē / Aspire / Evolus rewards — **not found**
- Refer-a-friend $50/$50 — **not found**
- HSA/FSA — **not clearly stated**
- Consultation $100 deposit applied to treatment — **not found** (site instead pushes $100/mo Banking Membership)

### Present on website but not in transcript “known services”

- **Microneedling** (bookable, $400) — include only if still offered; confirm with owner
- **Banking Membership** ($100/mo) — keep if still active
- **Virtual consultations** — keep if still active

---

## 5. Conflicts & verification checklist (resolve before publish)

### Resolved NAP (client decision 2026-07-20)

| Field | Canonical value for rebuild |
|-------|----------------------------|
| **Address** | `4642 30th St Suite 104A, San Diego, CA 92116` (GBP) |
| **Phone** | `(209) 991-2227` (website) |
| **Hours** | From GBP (client-confirmed 2026-07-20) — see table below |
| **Recommendation** | Add website phone to GBP so Maps matches the site |

#### Hours (GBP — confirmed)

| Day | Hours |
|-----|-------|
| Monday | Closed |
| Tuesday | Closed |
| Wednesday | 9 AM–6 PM |
| Thursday | Closed |
| Friday | 9 AM–6 PM |
| Saturday | 9 AM–5 PM |
| Sunday | Closed |

| # | Conflict / gap | Website | GBP / other | Transcript | Action needed |
|---|----------------|---------|-------------|------------|---------------|
| 1 | **Suite number** | `4642 30th Street` (no suite) | Suite **104A** | — | **Resolved:** use GBP address incl. Suite 104A |
| 2 | **Phone on GBP** | `(209) 991-2227` | Phone appears **missing** | — | **Resolved for site:** use website phone; still recommend adding to GBP |
| 3 | **Street abbreviation** | `30th Street` | `30th St` | — | **Resolved:** use GBP `30th St` |
| 4 | **Business name casing** | Dose By Design | Dose by Design | Dose by Design | Prefer **Dose by Design** |
| 5 | **Hours** | Not listed | Full week provided | — | **Resolved:** use GBP hours table above |
| 6 | **$100 consultation deposit** | Not found | — | Claimed; verify | Confirm still true before publishing |
| 7 | **Lip Flip / Cortisone** | Not found | — | Listed as known | Confirm active or omit |
| 8 | **Microneedling** | Active bookable | — | Not in known list | Confirm keep / remove |
| 9 | **Rewards programs** | Not found | — | Include if active | Confirm Allē / Aspire / Evolus |
| 10 | **Refer-a-friend** | Not found | — | Include if current | Confirm |
| 11 | **HSA/FSA** | Not clear | — | If still offered | Confirm |
| 12 | **Medical Director display name** | Dr. Abiade Short, MD | — | “Abhi” | Use full website name; nickname only if desired |
| 13 | **Service starting prices** | $300 / $400 | — | — | Confirm still accurate before displaying |

---

## 6. Missing / outdated content inventory

**Missing pages (recommended)**
- About / Meet Cathy (+ Medical Director)
- Services hub + individual service pages
- Contact / Location (arrival via Peel lobby)
- FAQ
- Financing (Cherry + policy copy)
- Before & After (only with real photos + disclaimer)
- Privacy / Terms (medical aesthetics baseline)

**Outdated / low-quality**
- Empty `/portfolio` “About Us”
- Portfolio titles like “modern-luxury-uiux-design”
- Service copy typos and generic beauty language
- Incomplete Cathy bio vs transcript
- No LocalBusiness schema / hours / suite

**Images**
- Reuse provider + clinic + logo assets from Wix
- Before/after: only if real patient photos exist in portfolio media — do not invent case studies

---

## 7. Proposed information architecture (rebuild)

```
/                         Homepage (conversion story)
/about                    Brand story + Cathy + Medical Director
/services                 Services hub
/services/neurotoxins
/services/dermal-fillers
/services/filler-dissolver
/services/microneedling     ← only if confirmed
/services/lip-flip          ← only if confirmed
/services/acne-cortisone    ← only if confirmed
/before-and-after           ← only if authentic assets exist
/financing                  Cherry embed + membership (if active)
/faq
/contact                    NAP, map, arrival instructions, CTAs
/book                       Deep-link or redirect to Aesthetic Record
/privacy
/terms
```

**Nav (mobile-first):** Services · About · Results · Financing · FAQ · Contact · Book  

**Primary CTA everywhere:** Book consultation (Aesthetic Record)  
**Secondary:** Call / Email / Instagram

---

## 8. Homepage section plan (post-approval)

1. Full-bleed hero — brand “Dose by Design”, one headline, one support line, Book CTA, authentic imagery  
2. Trust — 5.0 Google rating, board-certified PA, San Diego / University Heights, Medical Director oversight  
3. Problems we help — transcript concern list  
4. Featured services — only confirmed services  
5. Meet Cathy — story + credentials (verified)  
6. Patient journey — consultation → plan → treatment → follow-up  
7. Before & after — if assets exist  
8. Testimonials — paraphrase/link to Google reviews carefully (prefer embedding or quoting with permission)  
9. Financing — Cherry + membership if active  
10. FAQ — schema-ready  
11. Location — Suite 104A + Peel lobby arrival  
12. Footer — NAP consistent with GBP  

Tone: professional, warm, educational; no “unlock your beauty” clichés.

---

## 9. Technical implementation plan

### Stack (recommended)

- **React + Vite + React Router** (same pattern as `shoppeelsimplyskin`)
- Semantic HTML, CSS variables for brand tokens (lavender / soft purple / white / beige / black)
- Expressive fonts (preserve Bodoni/Ogg-class display + refined sans — not Inter/Roboto)
- Host: Vercel (or client preference)
- Domain cutover: keep `dosebydesignaesthetics.info` → point to new host when ready

### Local SEO build

- NAP identical sitewide (GBP-authoritative after phone/hours confirmed)
- JSON-LD: `MedicalBusiness`/`LocalBusiness`, `Organization`, `Person` (Cathy + Medical Director), `BreadcrumbList`, `FAQPage`
- Unique title/description per page; OG + Twitter; canonicals; `sitemap.xml`; `robots.txt`
- Internal links: services ↔ about ↔ contact ↔ book
- Geo phrases natural: San Diego, University Heights / North Park corridor, Suite 104A

### Performance & a11y

- Download & optimize images → WebP; lazy-load below fold; fixed dimensions for CLS
- Minimal JS; measure LCP/INP/CLS
- Skip link, keyboard focus, contrast, ALT text, form labels if any

### Integrations to port

1. Aesthetic Record booking URLs  
2. Cherry widget embed (exact existing init)  
3. Membership / Patient Portal link (verify)  
4. Optional: Instagram profile links once confirmed  

### Asset workflow

1. Download all authentic media from Wix into `public/images/`  
2. Rename descriptively; generate WebP  
3. Write ALT from actual subject (Cathy, clinic, treatment context)  
4. Never use AI stock as primary photography  

---

## 10. Phased delivery

### Phase 1 (this document) — Audit + plan ✅

### Phase 2 — Build (after your approval + answers to §5)

1. Scaffold Vite app in `dosebydesignaesthetics/`
2. Global layout (nav/footer), design tokens, typography
3. Homepage
4. About, Services (+ confirmed detail pages), Contact, FAQ, Financing
5. Provider content from transcript + verified site bios
6. Schema, meta, sitemap, robots
7. Port Cherry + booking

### Phase 3 — QA

- Responsive (mobile-first), SEO, a11y, performance, broken links, console errors
- NAP cross-check vs GBP
- Final conflict gate: no unverified deposit/rewards/extra services published

---

## 11. Decisions needed from you before coding

**Resolved**
- Address → GBP: `4642 30th St Suite 104A, San Diego, CA 92116`
- Phone → Website: `(209) 991-2227`
- Hours → GBP:
  - Mon Closed · Tue Closed · Wed 9 AM–6 PM · Thu Closed · Fri 9 AM–6 PM · Sat 9 AM–5 PM · Sun Closed

**Still need**

1. **Add phone to GBP?** (recommended so Maps matches site)  
2. **Suite 104A + Peel lobby arrival** copy — approve for Contact/Home  
3. **Still offer:** Microneedling? Lip Flip? Cortisone/Pimple Shot? Virtual consults? Banking Membership?  
4. **Consultation deposit $100** — still accurate?  
5. **Rewards:** Allē / Aspire / Evolus — which are active?  
6. **Refer-a-friend $50/$50** — still active?  
7. **HSA/FSA** — still accepted?  
8. **Starting prices** $300 neurotoxin / $400 filler / $400 microneedling — display or “from / book for pricing”?  
9. **Tech preference:** React + Vite OK (as Peel shop rebuild)?  
10. **Before/after photos** — which Wix images are approved patient results?  

---

## 12. Approval gate

No major structural rebuild will start until you approve this plan and answer the verification items above (or explicitly authorize building with placeholders for unresolved items marked “TBD — do not invent”).
`}
