/**
 * Self-contained icon set (no external icon dependency) — keeps the bundle light
 * and the visuals original. Each value is the inner markup of a 24x24,
 * currentColor, stroke-based <svg>. Rendered by src/components/Icon.astro.
 * Add a new icon by adding a key here.
 */
export type IconName =
  | "droplet"
  | "shower"
  | "bed"
  | "chef"
  | "utensils"
  | "wind"
  | "broom"
  | "home"
  | "list"
  | "clock"
  | "sparkles"
  | "users"
  | "shield"
  | "tag"
  | "unlock"
  | "bolt"
  | "star"
  | "star-filled"
  | "phone"
  | "map-pin"
  | "message"
  | "bookmark"
  | "repeat"
  | "wallet"
  | "menu"
  | "x"
  | "chevron-down"
  | "check"
  | "arrow-right"
  | "plus"
  | "minus"
  | "instagram"
  | "twitter"
  | "facebook"
  | "linkedin";

export const ICON_PATHS: Record<IconName, string> = {
  droplet: `<path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z" />`,
  shower: `<path d="M12 3v3" /><path d="M6 8.5c0-1.4 2.7-2.5 6-2.5s6 1.1 6 2.5" /><path d="M5.5 8.5h13l-1.2 2.6H6.7L5.5 8.5Z" /><path d="M9 14.5l-1 3M12 14.5v3M15 14.5l1 3" />`,
  bed: `<path d="M3 17v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5" /><path d="M3 17h18M3 17v3M21 17v3M7 10V8a1 1 0 0 1 1-1h3v3" />`,
  chef: `<path d="M6 13a4 4 0 1 1 1-7.9 4 4 0 0 1 10 0A4 4 0 1 1 18 13" /><path d="M6 13h12v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5Z" />`,
  utensils: `<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10" /><path d="M17 3c-1.5 0-2.5 2-2.5 5S15 13 17 13s2.5-2 2.5-5S18.5 3 17 3Zm0 10v8" />`,
  wind: `<path d="M3 8h10a2.5 2.5 0 1 0-2.5-2.5" /><path d="M3 12h14a2.5 2.5 0 1 1-2.5 2.5" /><path d="M3 16h7a2 2 0 1 1-2 2" />`,
  broom: `<path d="M14 4 9.5 8.5M19 9l-7 7" /><path d="m8 16 4 4M4 20l4-4a3 3 0 0 1 4 0l1 1-4 4a3 3 0 0 1-4 0Z" />`,
  home: `<path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" /><path d="M10 20v-5h4v5" />`,
  list: `<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />`,
  clock: `<circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" />`,
  sparkles: `<path d="M12 4l1.7 4.3L18 10l-4.3 1.7L12 16l-1.7-4.3L6 10l4.3-1.7L12 4Z" /><path d="M18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" />`,
  users: `<circle cx="9" cy="8" r="3.5" /><path d="M3 20a6 6 0 0 1 12 0M16 5.5a3.5 3.5 0 0 1 0 6.8M17 14.5a6 6 0 0 1 4 5.5" />`,
  shield: `<path d="M12 3 5 6v6c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" /><path d="m9 12 2 2 4-4" />`,
  tag: `<path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9-9-9Z" /><circle cx="7.5" cy="7.5" r="1.3" />`,
  unlock: `<rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 7.5-2" />`,
  bolt: `<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />`,
  star: `<path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6L12 17l-5.4 2.6 1-6L3.3 9.4l6-.9L12 3Z" />`,
  "star-filled": `<path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6L12 17l-5.4 2.6 1-6L3.3 9.4l6-.9L12 3Z" fill="currentColor" stroke="none" />`,
  phone: `<path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />`,
  "map-pin": `<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" />`,
  message: `<path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-5 4v-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />`,
  bookmark: `<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z" />`,
  repeat: `<path d="M4 8h12a3 3 0 0 1 3 3M20 16H8a3 3 0 0 1-3-3" /><path d="m16 4 3 4-3 4M8 20l-3-4 3-4" />`,
  wallet: `<rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M16 13.5h.01" />`,
  menu: `<path d="M4 7h16M4 12h16M4 17h16" />`,
  x: `<path d="M6 6l12 12M18 6 6 18" />`,
  "chevron-down": `<path d="m6 9 6 6 6-6" />`,
  check: `<path d="m5 12 4 4L19 6" />`,
  "arrow-right": `<path d="M5 12h14M13 6l6 6-6 6" />`,
  plus: `<path d="M12 5v14M5 12h14" />`,
  minus: `<path d="M5 12h14" />`,
  instagram: `<rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17 7h.01" />`,
  twitter: `<path d="M4 4l7 9m9-9-7.5 9L4 20m4.5-7.5L20 4" />`,
  facebook: `<path d="M14 9V7a2 2 0 0 1 2-2h2V2h-3a4 4 0 0 0-4 4v3H8v3h3v9h3v-9h3l1-3h-4Z" />`,
  linkedin: `<rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7h.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7" />`,
};
