/** Turns a URL slug ("new-delhi") into a display label ("New Delhi"). */
export function capitalize(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
