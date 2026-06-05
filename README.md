# Flink — Marketing Website

Conversion-focused marketing site for **Flink**, an on-demand household-cleaning
startup launching in **Hyderabad**. Flink dispatches its own trained,
background-verified cleaning professionals to a customer's door in ~10 minutes,
booked via mobile app.

This site **explains the service, builds trust, wins local SEO, and drives app
downloads + locality lead capture**. It does **not** handle bookings, payments,
or worker management — those live in the apps/admin dashboard (out of scope).

Built with **Astro + TypeScript + Tailwind CSS**, static (SSG) and tuned to ship
**almost no JavaScript** (~4 KB total across the whole site) for the fastest
possible load.

> **Why Astro?** This is a content/marketing site, so the pages are static HTML.
> Astro ships **zero JS by default** and only sends tiny vanilla-JS "islands" for
> the few interactive bits (mobile menu, counters, testimonial carousel, lead
> form). The FAQ accordion uses native `<details>` — no JS at all. Net result:
> ~4 KB of JS versus ~100 KB for an equivalent React/Next.js build.

---

## ⚠️ Read before launch — naming & domain risk

1. **"Flink" is already taken.** It belongs to a large European quick-commerce
   company (which also markets "10-minute" delivery — directly adjacent
   positioning) **and** to the Apache Flink software project. This is a real
   trademark + app-store discoverability risk.
2. **`flink.com` is very likely already owned** (the European Flink uses
   `goflink.com`). Confirm availability/cost before committing.

The whole site is wired through two constants so a rebrand or domain change
(e.g. `getflink.com`, `tryflink.com`, `flink.in`) is a **one-line edit** — see
[`src/lib/config.ts`](src/lib/config.ts):

```ts
export const BRAND_NAME = "Flink";
export const SITE_URL = "https://www.flink.com";
```

> Note: Astro needs the site URL at config-load time too, so it's also set once
> in [`astro.config.mjs`](astro.config.mjs) (`SITE_URL`). Keep the two in sync.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
```

Other scripts:

```bash
npm run build      # static build to ./dist
npm run preview    # serve the built ./dist locally
npm run check      # astro check (type + template diagnostics)
```

Requires Node 18.17+ (Node 20 recommended).

---

## Environment variables

Copy [`.env.example`](.env.example) to `.env`. **All are optional in v1** — there
are sensible fallbacks so the site runs with zero config. Astro exposes
`PUBLIC_`-prefixed vars to client code.

| Variable | Purpose | Fallback |
| --- | --- | --- |
| `PUBLIC_LEAD_ENDPOINT` | URL the lead form POSTs to (JSON) | No-op stub: logs to console + simulates success |
| `PUBLIC_PLAY_URL` | Google Play app link | `#` placeholder |
| `PUBLIC_APPSTORE_URL` | Apple App Store app link | `#` placeholder |

---

## Project structure

```
astro.config.mjs          Astro config (site URL, Tailwind + sitemap integrations)
src/
  pages/                   File-based routes (each = one URL)
    index.astro            Homepage (assembles all sections)
    [service]/[city].astro Programmatic SEO template (e.g. /bathroom-cleaning/hyderabad)
    legal/                 Privacy, Terms, Refund stub pages
    404.astro
  layouts/
    Layout.astro           <head> (SEO/OG), header, footer, global reveal script
  components/
    layout/                Header (vanilla-JS island), Footer
    sections/              One file per homepage section
    ui/                    Design-system primitives (Button, Card, Section, Pill,
                           Counter, StoreBadge, StarRating, Reveal, …)
    Icon.astro             Renders the self-contained SVG icon set
    Logo, LeadForm, PhoneMockup, JsonLd, LegalPage
  data/                    Typed content — edit these, the UI re-renders
    services.ts, localities.ts, faqs.ts, testimonials.ts, site.ts
  lib/
    config.ts              BRAND_NAME, SITE_URL, store URLs, company, socials
    seo.ts                 buildMeta() — per-page title/OG/Twitter/canonical
    jsonld.ts              LocalBusiness / FAQPage / Service structured data
    icons.ts               Icon path data + IconName type
    cn.ts, text.ts
  styles/global.css        Tailwind entry + base styles + reveal animation
public/
  favicon.svg, robots.txt, og/og-default.svg
```

### How interactivity stays light

| Feature | Implementation | JS cost |
| --- | --- | --- |
| FAQ accordion | Native `<details>`/`<summary>` + CSS | **0** |
| Scroll reveal | One global `IntersectionObserver` | tiny |
| Stats counters | One vanilla island (`Counter.astro`) | tiny |
| Testimonials carousel | One vanilla island | tiny |
| Header menu/dropdowns | CSS `group-hover` + small toggle script | tiny |
| Lead form | One vanilla island (`fetch`) | tiny |

---

## How to edit common things

### Brand name / domain
[`src/lib/config.ts`](src/lib/config.ts) → `BRAND_NAME`, `SITE_URL` (and mirror
`SITE_URL` in [`astro.config.mjs`](astro.config.mjs)). Everything — wordmark,
metadata, canonical, sitemap, OG/Twitter URLs, JSON-LD — derives from these.

### App store links
[`src/lib/config.ts`](src/lib/config.ts) → `PLAY_URL`, `APPSTORE_URL` (or set the
env vars). The store **badge artwork** in
[`src/components/ui/StoreBadge.astro`](src/components/ui/StoreBadge.astro) is an
original placeholder — swap in Apple's/Google's **official** badge assets before
launch (their brand guidelines require the official art).

### Lead form endpoint
Set `PUBLIC_LEAD_ENDPOINT`. With no endpoint the form logs the payload and fakes
success — see [`src/components/LeadForm.astro`](src/components/LeadForm.astro).

### Pricing
Placeholders `[₹XX/hr]` / `[₹XX/task]` live in
[`src/data/services.ts`](src/data/services.ts) (per-service) and
[`src/components/sections/Pricing.astro`](src/components/sections/Pricing.astro).
Search the repo for `TODO` and `[₹XX` to find them all.

### Stats / social proof
[`src/data/site.ts`](src/data/site.ts) → `STATS` (placeholder `[N]+`). The counter
animates real numbers; non-numeric placeholders render as-is.

### Testimonials & ratings
[`src/data/testimonials.ts`](src/data/testimonials.ts). **All entries are
fabricated samples** — replace with real, consented, **service-level** reviews
(never individual-staff content) before launch.

### Images / illustrations
Service pages and mockups use abstract placeholders. Search for
`TODO: replace with real` (notably
[`src/components/PhoneMockup.astro`](src/components/PhoneMockup.astro),
[`src/components/sections/Hero.astro`](src/components/sections/Hero.astro), and the
service template).

### Legal copy
[`src/pages/legal/*`](src/pages/legal) are stubs with `TODO` bodies. Replace with
finalised, lawyer-reviewed text.

### Company name & address (footer + JSON-LD)
[`src/lib/config.ts`](src/lib/config.ts) → `COMPANY`.

---

## Adding a service

Append an entry to `SERVICES` in [`src/data/services.ts`](src/data/services.ts):

```ts
{
  slug: "fridge-cleaning",
  name: "Fridge Cleaning",
  tagline: "...",
  description: "...",
  icon: "droplet",          // a key from src/lib/icons.ts
  typicalDuration: "30 min",
  pricePerHour: "[₹XX/hr]",
  pricePerTask: "[₹XX/task]",
  includes: ["..."],
  excludes: ["..."],
}
```

It automatically appears in: the services grid, header/footer menus, the
`/<slug>/<city>` page (with SEO metadata + JSON-LD), and the sitemap. If you use
a new `icon` key, add its SVG path to [`src/lib/icons.ts`](src/lib/icons.ts).

## Adding a locality / city

Append to `LOCALITIES` in
[`src/data/localities.ts`](src/data/localities.ts):

```ts
{
  slug: "gachibowli",
  name: "Gachibowli",
  city: "Hyderabad",
  citySlug: "hyderabad",
  status: "live",          // "live" | "soon"
  prosCount: "[N]+ pros",
  avgArrival: "~10 min",
}
```

Live localities render in the "Areas we serve" grid, hero pills, footer, and the
lead-form dropdown. Introducing a **new `citySlug`** automatically generates a
`/<service>/<newcity>` page for every service (programmatic SEO) and adds it to
the sitemap.

---

## SEO

- Per-page title/description/canonical + OpenGraph + Twitter via `buildMeta()`
  in [`src/lib/seo.ts`](src/lib/seo.ts), rendered in
  [`src/layouts/Layout.astro`](src/layouts/Layout.astro). All URLs derive from
  `SITE_URL`.
- **JSON-LD**: `LocalBusiness` (Hyderabad) + `FAQPage` on the homepage;
  `Service` + `FAQPage` + `LocalBusiness` on service pages
  ([`src/lib/jsonld.ts`](src/lib/jsonld.ts)).
- `sitemap-index.xml` generated at build by `@astrojs/sitemap`;
  [`public/robots.txt`](public/robots.txt) points to it.
- Service pages title pattern: *"Bathroom Cleaning in Hyderabad | Book in ~10
  Min | Flink"*.

## Accessibility & performance

- Semantic HTML, skip-link, visible focus rings, native `<details>` FAQ,
  keyboard-operable menu/carousel, `aria-*` on interactive widgets, alt/aria
  labels on icons.
- WCAG AA-minded contrast using the cyan/ink token palette.
- `prefers-reduced-motion` honoured globally and in every JS island.
- Static HTML, self-hosted variable font (no layout shift), ~4 KB total JS.

## Originality

All copy, FAQs, icons, and the logo mark are original to Flink. Inspiration from
competitors was structural only — no competitor name, color, font, image, or
text is used. Testimonials and all stats are clearly-marked placeholders so
nothing false ships.

---

## Pre-launch checklist (the `TODO`s)

Search the repo for `TODO:` — key items:

- [ ] Confirm brand name + secure domain (see risk note above)
- [ ] Final pricing numbers (`[₹XX/hr]`, `[₹XX/task]`)
- [ ] Real stats (`[N]+`)
- [ ] Real, consented service-level testimonials
- [ ] Service photography / illustrations
- [ ] Official Apple/Google store badge assets + real store URLs
- [ ] Lead endpoint (`PUBLIC_LEAD_ENDPOINT`)
- [ ] Legal copy (Privacy, T&C, Refund) + registered company name & address
- [ ] Press logos (or remove the "As featured in" strip)
- [ ] Real OG image (`public/og/og-default.svg`)
- [ ] Social media handles
```
