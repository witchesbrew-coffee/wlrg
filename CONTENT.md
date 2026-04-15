# West Little Rock Glass — Content Inventory

> **Project status:** Rebuild in progress (BitBrd agency engagement)
> **Baseline captured:** 2026-04-14 from existing Wix site analytics
> **Client permission:** Written case-study clause pending signature

---

## Business Info (extracted from existing Wix site)

| Field | Value |
|---|---|
| **Legal name** | West Little Rock Glass |
| **Phone** | 501-223-3034 |
| **Email** | westlrglass@sbcglobal.net |
| **Address** | 1903 Hinson Loop Road, Little Rock, AR 72212-3903 |
| **Experience** | 20+ years |
| **Service area** | Little Rock, AR metro |
| **Existing domain** | westlittlerockglass.com (on Wix) |
| **Other phone numbers found in HTML** | 501-204-6684, 501-866-1751 (purpose TBD — possibly direct/mobile) |

## Baseline Analytics (April 14, 2026 — trailing 30 days)

### Traffic
- Sessions: **149** (▼3%)
- Unique visitors: **141** (▼3%)
- Sessions/day: ~5
- Google organic: **73** (49%)
- Direct: 55 (37%)
- DuckDuckGo: 6

### Engagement
- Pages/session: 1.8
- Avg session duration: 2m 19s
- Bounce rate: 55.0%

### Conversion
- Contact clicks: **10** (▲67%)

### Page distribution
- /homepage: 115 sessions (77%)
- /blank-1: 40 sessions (broken URL)
- /blank: 35 sessions (broken URL)

## Existing Wix Site — Critical Problems

1. **All 9 non-home URLs are `/blank-X-X-X-X`** — Wix-default placeholders, never renamed. Zero keyword value, unmemorable, likely causing crawl confusion.
2. **Title tag is brand-only**: `<title>West Little Rock Glass</title>` — no keywords.
3. **OG site name still says "My Site"** — Wix default never replaced. Every social share looks unprofessional.
4. **Duplicate meta description across all pages** — keyword-stuffed ("frameless / frame-less" twice).
5. **1MB+ HTML weight per page** — Wix bundle bloat. Poor mobile LCP.
6. **No LocalBusiness schema** — missing rich-results eligibility for a services business.
7. **No semantic H1/H2 headings** — Wix uses styled divs, not proper heading hierarchy.
8. **Sitemap last modified 2025-01-25** — 15 months stale.

## Decoded URL Map

| Wix URL | Real purpose |
|---|---|
| / | Home |
| /blank | About |
| /blank-1 | Contact |
| /blank-1-1 | Galleries |
| /blank-1-1-1 | Repair (24-Hour) |
| /blank-2 | Custom Glass |
| /blank-2-1 | Store Fronts |
| /blank-2-1-1 | Glass Antiquing |
| /blank-2-1-1-1 | Frameless (Showers) |
| /blank-2-1-1-1-1 | Custom Handrails |

## Services Offered (8 categories)

1. **Frameless Showers** — heavy-glass shower doors, walls, enclosures
2. **Custom Mirrors** — bathroom vanity, wardrobe, gym walls
3. **Glass Antiquing** — aged/patina mirror finishes (unique premium service)
4. **Handrails & Railings** — interior staircases, decks, lake-house lookouts
5. **Commercial Storefronts** — office fronts, retail windows, entry systems
6. **Tabletops** — dining, coffee, conference (up to 1" thick)
7. **Custom Glass** — one-off panels, shelves, backsplashes
8. **24-Hour Emergency Repair** — storefront, shower, door, window

## Real Customer Testimonial (on existing Wix site, verbatim)

> "A frameless glass shower door, master sink vanity mirror and a wardrobe mirror for us. I felt they were **quick, affordable** and **professional**. The guys came to install today, and they were polite informative and they made sure everything was clean before leaving. Gavin was quick and **decisive** when it came to asking what he suggested for style and details. I like that he had an input. You could tell he's had **several years' experience**. Overall we had a **great experience**, and I plan to use them for future jobs!"
>
> — **Jennifer Luttrell**

*Notes:*
- Mentions installer **Gavin** by name — use this on About page
- Names 3 specific installs: frameless shower door, vanity mirror, wardrobe mirror
- Social proof keywords: quick, affordable, professional, decisive, experienced

## Image Assets

All 84 original Wix CDN images downloaded to: `public/images/source/`

**9 priority images copied to `public/` with descriptive names:**

| File | Depicts | Best use |
|---|---|---|
| `hero-handrails.jpeg` | Lake-house multi-level glass railings | **Hero image** — premium install showcase |
| `service-frameless-showers.jpeg` | Frameless shower + soaker tub luxury bathroom | Frameless Showers service card |
| `service-antiquing.jpeg` | Antique mirror kitchen backsplash (finished) | Glass Antiquing service card |
| `service-antiquing-room.jpeg` | Elegant dining room w/ antique mirror walls | Antiquing showcase (second) |
| `service-storefronts.jpeg` | Commercial glass storefront (NLC building) | Storefronts service card |
| `service-commercial.jpeg` | Glass-fronted lodge/timber frame building | Commercial / large-scale |
| `service-install-crew.jpeg` | Staff on ladder installing storefront glass | Trust/craftsmanship |
| `service-mirror-install.jpeg` | Antique mirror kitchen installation in progress | Process/craftsmanship |
| `testimonial-luttrell.png` | Blue testimonial card with Jennifer Luttrell quote | Testimonial section |

## Rebuild Plan

### Stack (same as BitBrd)
- Astro 5.x + Netlify
- JSON-LD LocalBusiness schema
- Netlify Forms for quote requests
- Future: GA4, Google Search Console, Google Business Profile optimization
- Future: CallRail or similar for phone call tracking (critical for glass biz)

### 90-Day Case Study Targets

| Metric | Now | 90-day goal | Stretch |
|---|---|---|---|
| Sessions / 30d | 149 | 500 (3.3×) | 1,000 (6.7×) |
| Organic sessions | 73 | 300 (4×) | 600 (8×) |
| Contact clicks | 10 | 40 (4×) | 75 (7.5×) |
| Tracked phone calls | unknown | 30/mo | 60/mo |
| Quote form submissions | unknown | 15/mo | 30/mo |
| Top-10 ranking keywords | ? | 5+ | 10+ |

### Target Keywords (local + commercial intent)
- frameless shower little rock
- glass repair little rock
- custom mirrors little rock
- glass handrails little rock / arkansas
- 24 hour glass repair little rock
- commercial storefront glass arkansas
- glass antiquing little rock
- shower door installation little rock

## Pricing Approach for Agency (BitBrd internal)

- Build: **free** for WLRG (portfolio / case-study play)
- Case-study clause: required signed agreement before launch
- Published deliverable: 90-day before/after metrics on bitbrd.com case-studies page
- Future upsell: ongoing SEO + Google Business Profile management + call tracking ($500–1,000/mo if it works)
