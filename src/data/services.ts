/**
 * Services — the confirmed basic household-cleaning offerings (§1).
 * Add a new service by appending an entry; the grid, service pages, sitemap,
 * and header dropdown all render from this array automatically.
 *
 * NOTE: pricing fields use placeholders ([₹XX/hr], [₹XX/task]) until the client
 * supplies final numbers (§2).
 */
export type Service = {
  slug: string;
  name: string;
  /** One-line summary for cards + meta descriptions. */
  tagline: string;
  /** Longer paragraph for the service page hero. */
  description: string;
  /** Lucide-style key consumed by components/Icon.tsx (fallback when no image). */
  icon: string;
  /**
   * Optional 3D illustration / photo for the service (Pronto-style tiles).
   * Path under /public, e.g. "/services/bathroom-cleaning.webp".
   * If unset, the colored line icon is shown instead.
   * TODO: add original 3D illustrations (see /public/services/README.txt).
   */
  image?: string;
  /** Roughly how long a typical visit runs — used on service pages. */
  typicalDuration: string;
  pricePerHour: string; // TODO: replace placeholder
  pricePerTask: string; // TODO: replace placeholder
  /** What a visit covers. */
  includes: string[];
  /** Out of scope for this service (sets expectations honestly). */
  excludes: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "bathroom-cleaning",
    name: "Bathroom Cleaning",
    tagline: "Sparkling, sanitised bathrooms — scrubbed top to bottom.",
    description:
      "A thorough bathroom clean that tackles tiles, fittings, mirrors, and floors. Our trained professional descales, scrubs, and sanitises so the room feels genuinely fresh — not just wiped over.",
    icon: "shower",
    image: "/services/bathroom-cleaning.jpg",
    typicalDuration: "30–60 min",
    pricePerHour: "[₹XX/hr]",
    pricePerTask: "[₹XX/task]",
    includes: [
      "Toilet, sink and tap descaling & sanitising",
      "Tile and wall scrubbing",
      "Mirror and glass polishing",
      "Floor washing and drying",
    ],
    excludes: [
      "Grout re-sealing or re-grouting",
      "Plumbing repairs",
      "Mould remediation (structural)",
    ],
  },
  {
    slug: "bedroom-cleaning",
    name: "Bedroom Cleaning",
    tagline: "A calm, dust-free room to come home to.",
    description:
      "Dusting, surface cleaning, and floor care for a restful bedroom. We work around your furniture, reach the spots that get missed, and leave the room tidy and allergen-light.",
    icon: "bed",
    image: "/services/bedroom-cleaning.jpg",
    typicalDuration: "20–45 min",
    pricePerHour: "[₹XX/hr]",
    pricePerTask: "[₹XX/task]",
    includes: [
      "Dusting of surfaces, sills and fittings",
      "Cobweb removal",
      "Floor sweeping and mopping",
      "Tidying and bed-making (on request)",
    ],
    excludes: [
      "Laundry and ironing",
      "Wardrobe organising (deep declutter)",
      "Wall washing",
    ],
  },
  {
    slug: "kitchen-cleaning",
    name: "Kitchen Cleaning",
    tagline: "Grease-free counters, hob, and sink — done right.",
    description:
      "A practical kitchen clean focused on the surfaces you use every day. We degrease the hob and counters, clean the sink, and wipe exterior cabinet faces so cooking starts on a clean slate.",
    icon: "chef",
    image: "/services/kitchen-cleaning.jpg",
    typicalDuration: "30–60 min",
    pricePerHour: "[₹XX/hr]",
    pricePerTask: "[₹XX/task]",
    includes: [
      "Countertop and backsplash degreasing",
      "Hob / stovetop cleaning",
      "Sink scrubbing and sanitising",
      "Exterior cabinet and appliance wipe-down",
    ],
    excludes: [
      "Interior oven / chimney deep-clean",
      "Inside-cabinet decluttering",
      "Refrigerator defrosting",
    ],
  },
  {
    slug: "utensil-cleaning",
    name: "Utensil / Dishwashing",
    tagline: "Pots, pans, and plates washed and stacked.",
    description:
      "Hand-washing of your dishes, cookware, and utensils, then dried and stacked neatly. Ideal after a big cook-up or for a daily helping hand.",
    icon: "utensils",
    image: "/services/utensil-cleaning.jpg",
    typicalDuration: "15–30 min",
    pricePerHour: "[₹XX/hr]",
    pricePerTask: "[₹XX/task]",
    includes: [
      "Washing of dishes, glasses and cutlery",
      "Cookware and utensil cleaning",
      "Drying and stacking",
      "Sink rinse-down",
    ],
    excludes: [
      "Dishwasher loading/repair",
      "Polishing silver/brass",
      "Cabinet reorganisation",
    ],
  },
  {
    slug: "sweeping-mopping",
    name: "Sweeping & Mopping",
    tagline: "Floors swept and mopped to a clean shine.",
    description:
      "Classic dry-sweep followed by a wet mop across your hard floors. Quick to book, great as a daily or alternate-day refresh for the whole home.",
    icon: "broom",
    image: "/services/sweeping-mopping.jpg",
    typicalDuration: "20–40 min",
    pricePerHour: "[₹XX/hr]",
    pricePerTask: "[₹XX/task]",
    includes: [
      "Dry sweeping of all hard floors",
      "Wet mopping with floor cleaner",
      "Corner and skirting attention",
      "Quick tidy of loose clutter",
    ],
    excludes: [
      "Floor polishing / waxing",
      "Carpet cleaning",
      "Stain scrubbing (set-in marks)",
    ],
  },
  {
    slug: "whole-home-cleaning",
    name: "Whole-Home Cleaning",
    tagline: "Every room cleaned in a single visit.",
    description:
      "Our most complete option — bedrooms, bathrooms, kitchen, and common areas all cleaned in one visit by a trained professional. The easiest way to reset your entire home.",
    icon: "home",
    image: "/services/whole-home-cleaning.jpg",
    typicalDuration: "1.5–3 hrs",
    pricePerHour: "[₹XX/hr]",
    pricePerTask: "[₹XX/task]",
    includes: [
      "All bedrooms dusted and floors cleaned",
      "Bathrooms scrubbed and sanitised",
      "Kitchen surfaces degreased",
      "Sweeping and mopping throughout",
    ],
    excludes: [
      "Deep / move-out cleaning add-ons",
      "Exterior windows and balconies (on request)",
      "Pest control",
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
