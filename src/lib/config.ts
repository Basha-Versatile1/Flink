/**
 * Single source of truth for brand + domain.
 *
 * ⚠️ NAMING / DOMAIN RISK (surface to client before launch):
 *  1. "Flink" is also a large European quick-commerce brand (markets "10-minute"
 *     delivery — adjacent positioning) AND the Apache Flink software project.
 *     Real trademark + app-store discoverability risk.
 *  2. flink.com is very likely already owned (the EU Flink uses goflink.com).
 *     Confirm availability/cost before committing.
 *
 * Everything brand/domain-related derives from the two constants below, so a
 * rebrand or domain swap (e.g. getflink.com / tryflink.com / flink.in) is a
 * one-line edit here.
 */
export const BRAND_NAME = "Flink";

// Canonical domain — drives canonical tags, sitemap, OG/Twitter URLs.
export const SITE_URL = "https://www.flink.com";

// Short tagline used in metadata + footer.
export const BRAND_TAGLINE = "A spotless home in ~10 minutes.";

// City the site currently serves (data-driven expansion lives in /data/localities.ts).
export const PRIMARY_CITY = "Hyderabad";

/**
 * App store URLs — TODO: replace placeholders when the apps are published.
 * Configurable via env so different environments (staging/prod) can point
 * at TestFlight / internal tracks without a code change.
 */
export const PLAY_URL =
  import.meta.env.PUBLIC_PLAY_URL || "#"; // TODO: [PLAY_URL]
export const APPSTORE_URL =
  import.meta.env.PUBLIC_APPSTORE_URL || "#"; // TODO: [APPSTORE_URL]

/**
 * Lead capture endpoint. No backend in v1 — the form posts here if set,
 * otherwise it falls back to a no-op success (see components/LeadForm.astro).
 */
export const LEAD_ENDPOINT = import.meta.env.PUBLIC_LEAD_ENDPOINT || "";

// Social links — TODO: replace with real handles.
export const SOCIAL = {
  instagram: "#",
  twitter: "#",
  facebook: "#",
  linkedin: "#",
};

// Registered company details — TODO: client to supply.
export const COMPANY = {
  legalName: "[Registered Company Name Pvt. Ltd.]", // TODO
  address: "[Registered office address, Hyderabad, Telangana, India]", // TODO
  supportEmail: "hello@flink.com", // TODO: confirm support inbox
};
