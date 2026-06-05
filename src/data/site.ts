/**
 * Miscellaneous site content data: nav, stats, app features, trust pillars,
 * how-it-works steps, and the home "included / not included" comparison.
 * Kept data-driven so copy edits don't require touching component markup.
 */

import { SERVICES } from "./services";
import { LIVE_LOCALITIES } from "./localities";

/* ---------- Navigation ---------- */
// Anchors are root-relative (/#...) so the header works from every page
// (service pages, legal pages) — it navigates home, then scrolls.
export const NAV_LINKS = [
  { label: "Services", href: "/#services", dropdown: "services" as const },
  { label: "Areas", href: "/#areas", dropdown: "areas" as const },
  { label: "Why Flink", href: "/#why-flink" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export const SERVICE_NAV = SERVICES.map((s) => ({
  label: s.name,
  href: `/${s.slug}/hyderabad`,
}));

export const AREA_NAV = LIVE_LOCALITIES.map((l) => ({
  label: `${l.name}, ${l.city}`,
  href: "/#areas",
}));

/* ---------- Stats band (placeholder numbers — §2) ---------- */
export type Stat = {
  /** Numeric target for the animated counter (0 = non-numeric, show `display`). */
  value: number;
  /** Text shown if value is non-numeric or as suffix formatting. */
  display: string;
  label: string;
  suffix?: string;
  /** Icon key from components/Icon.astro. */
  icon: string;
};

export const STATS: Stat[] = [
  { value: 0, display: "[N]+", label: "Homes served", icon: "home" }, // TODO
  { value: 10, display: "~10", label: "Avg. arrival (min)", suffix: " min", icon: "bolt" },
  { value: 0, display: "[N]+", label: "Trained professionals", icon: "users" }, // TODO
  { value: 0, display: "[N]+", label: "Cleaning jobs done", icon: "sparkles" }, // TODO
];

/* ---------- How it works ---------- */
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Choose a service",
    body: "Pick from bathroom, kitchen, whole-home and more — right in the Flink app.",
    icon: "list",
  },
  {
    step: 2,
    title: "Instant or scheduled",
    body: "Need help now or later? Book instantly or pick a time that works for you.",
    icon: "clock",
  },
  {
    step: 3,
    title: "A trained pro arrives",
    body: "A background-verified Flink professional reaches your door in about 10 minutes.",
    icon: "sparkles",
  },
];

/* ---------- Why Flink — trust pillars ---------- */
export const TRUST_PILLARS = [
  {
    title: "Our own trained team",
    body: "Not a marketplace. Every professional is trained and contracted by Flink, so quality is on us.",
    icon: "users",
  },
  {
    title: "5-day trained & verified",
    body: "Each pro completes a 5-day programme and background check before their first job.",
    icon: "shield",
  },
  {
    title: "Transparent pricing",
    body: "Clear hourly and per-task rates shown up front. No surprises at the door.",
    icon: "tag",
  },
  {
    title: "No contracts",
    body: "Book when you need to. No subscriptions, no lock-in, no cancellation traps.",
    icon: "unlock",
  },
  {
    title: "~10-minute arrival",
    body: "In our live areas, help is usually minutes away — not hours.",
    icon: "bolt",
  },
  {
    title: "Aggregate-rated quality",
    body: "We track service ratings openly and act on feedback to keep standards high.",
    icon: "star",
  },
];

/* ---------- In the app — feature showcase ---------- */
export const APP_FEATURES = [
  {
    title: "Phone-OTP login",
    body: "No passwords. Sign in with your number and a one-time code.",
    icon: "phone",
  },
  {
    title: "Live worker tracking",
    body: "Watch your professional approach in real time, with a live ETA.",
    icon: "map-pin",
  },
  {
    title: "In-app chat & call",
    body: "Message or call your pro directly — share gate codes or directions.",
    icon: "message",
  },
  {
    title: "Saved addresses",
    body: "Home, parents', office — save them once and book in two taps.",
    icon: "bookmark",
  },
  {
    title: "One-tap re-book",
    body: "Loved a clean? Repeat the exact same booking instantly.",
    icon: "repeat",
  },
  {
    title: "Wallet & referrals",
    body: "Top up your wallet, share referral credit, and redeem coupons. Loyalty points coming soon.",
    icon: "wallet",
  },
];

/* ---------- What's included / not included (home visit) ---------- */
export const INCLUDED = [
  "Trained, background-verified professional",
  "Standard cleaning supplies & equipment",
  "Transparent hourly or per-task pricing",
  "Live tracking and in-app support",
  "Instant or scheduled booking",
  "One-tap re-book of past visits",
];

export const NOT_INCLUDED = [
  "Deep / move-out cleaning (coming later)",
  "Pest control or fumigation",
  "Plumbing, electrical or repair work",
  "Exterior façade or high-rise window cleaning",
  "Laundry, ironing or cooking",
  "Hazardous waste removal",
];

/* ---------- Trust strip "as featured in" (placeholder) ---------- */
export const PRESS_LOGOS = [
  "Press logo", // TODO: replace greyed placeholders with real coverage when available
  "Press logo",
  "Press logo",
  "Press logo",
  "Press logo",
];
