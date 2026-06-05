import { BRAND_NAME, SITE_URL, BRAND_TAGLINE } from "./config";

export type SeoMeta = {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
};

/**
 * Builds consistent per-page SEO fields (title, description, canonical, OG image)
 * — all URLs derive from SITE_URL so a domain change is a one-line edit in config.
 * Consumed by src/layouts/Layout.astro to render the <head>.
 */
export function buildMeta({
  title,
  description,
  path = "/",
  ogImage = "/og/og-default.svg",
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): SeoMeta {
  const canonical = new URL(path, SITE_URL).toString();
  const fullTitle =
    path === "/" ? `${BRAND_NAME} — ${BRAND_TAGLINE}` : `${title} | ${BRAND_NAME}`;

  return {
    title: fullTitle,
    description,
    canonical,
    ogImage: new URL(ogImage, SITE_URL).toString(),
  };
}
