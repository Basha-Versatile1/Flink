/**
 * Testimonials — SAMPLE / PLACEHOLDER content only.
 *
 * ⚠️ These are fabricated samples written in Flink's voice to demonstrate the UI.
 *    They are NOT real reviews. Replace with genuine, consented customer reviews
 *    before launch. Per the brief, the site shows SERVICE-LEVEL feedback only —
 *    never content about an individual staff member.
 */
export type Testimonial = {
  /** First name + initial only (privacy-friendly). All names below are invented. */
  name: string;
  locality: string;
  rating: number; // 1–5
  quote: string;
};

// TODO: replace every entry below with real, consented reviews.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ananya R.",
    locality: "Kismatpur",
    rating: 5,
    quote:
      "Booked a kitchen clean on a busy morning and someone was at my door almost immediately. The counters and hob looked brand new. So easy.",
  },
  {
    name: "Vikram S.",
    locality: "Kompally",
    rating: 5,
    quote:
      "What sold me is that they're Flink's own trained team, not random freelancers. Felt safe, professional, and the price was exactly what the app quoted.",
  },
  {
    name: "Meera T.",
    locality: "Kismatpur",
    rating: 4,
    quote:
      "Used the whole-home clean before guests arrived. Every room got attention and I could track the pro on the way. Will book again.",
  },
  {
    name: "Rahul N.",
    locality: "Kompally",
    rating: 5,
    quote:
      "No subscription, no haggling — I just picked sweeping & mopping and paid per task. The transparency is refreshing.",
  },
  {
    name: "Priya K.",
    locality: "Kismatpur",
    rating: 5,
    quote:
      "The one-tap re-book is my favourite. Same clean, every week, without thinking about it. The app makes it effortless.",
  },
];

/** Aggregate rating summary for the testimonials header + JSON-LD. Placeholder figures. */
export const RATING_SUMMARY = {
  average: 4.8, // TODO: replace with real aggregate
  count: "[N]+", // TODO: real review count
};
