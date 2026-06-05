/**
 * Areas served — data-driven so new localities/cities add easily (§1, §7).
 * Launch localities are Kismatpur and Kompally (live). Others can be added with
 * status "live" | "soon" and will render in the "Areas we serve" grid + sitemap.
 *
 * The /[service]/[city] route is keyed by city slug, so adding a city here that
 * matches a `citySlug` automatically extends programmatic SEO coverage.
 */
export type Locality = {
  slug: string;
  name: string;
  /** City this locality belongs to. */
  city: string;
  /** City slug used by the /[service]/[city] route. */
  citySlug: string;
  status: "live" | "soon";
  /** Placeholder operational chips — replace with real figures (§2). */
  prosCount: string; // e.g. "[N]+ pros"
  avgArrival: string; // e.g. "~10 min"
};

export const CITY = {
  name: "Hyderabad",
  slug: "hyderabad",
  state: "Telangana",
};

export const LOCALITIES: Locality[] = [
  {
    slug: "kismatpur",
    name: "Kismatpur",
    city: CITY.name,
    citySlug: CITY.slug,
    status: "live",
    prosCount: "[N]+ pros",
    avgArrival: "~10 min",
  },
  {
    slug: "kompally",
    name: "Kompally",
    city: CITY.name,
    citySlug: CITY.slug,
    status: "live",
    prosCount: "[N]+ pros",
    avgArrival: "~10 min",
  },
  // TODO: add more Hyderabad localities (and future cities) as coverage expands.
  // Example "coming soon" entries to populate the grid — replace/remove as needed.
  {
    slug: "gachibowli",
    name: "Gachibowli",
    city: CITY.name,
    citySlug: CITY.slug,
    status: "soon",
    prosCount: "Coming soon",
    avgArrival: "—",
  },
  {
    slug: "kondapur",
    name: "Kondapur",
    city: CITY.name,
    citySlug: CITY.slug,
    status: "soon",
    prosCount: "Coming soon",
    avgArrival: "—",
  },
];

export const LIVE_LOCALITIES = LOCALITIES.filter((l) => l.status === "live");

/** Unique cities for the /[service]/[city] generateStaticParams. */
export const CITY_SLUGS = Array.from(
  new Set(LOCALITIES.map((l) => l.citySlug)),
);
