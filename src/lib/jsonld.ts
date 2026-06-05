import { BRAND_NAME, SITE_URL, PRIMARY_CITY, COMPANY } from "./config";
import { FAQS } from "@/data/faqs";
import { LIVE_LOCALITIES, CITY } from "@/data/localities";
import { RATING_SUMMARY } from "@/data/testimonials";

/** Build functions for JSON-LD structured data (LocalBusiness, FAQPage, Service). */

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BRAND_NAME,
    description: `On-demand household cleaning in ${PRIMARY_CITY}. Trained, background-verified professionals at your door in about 10 minutes.`,
    url: SITE_URL,
    image: `${SITE_URL}/og/og-default.svg`,
    areaServed: LIVE_LOCALITIES.map((l) => ({
      "@type": "Place",
      name: `${l.name}, ${l.city}`,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY.name,
      addressRegion: CITY.state,
      addressCountry: "IN",
      // TODO: client to supply registered street address + postal code.
      streetAddress: COMPANY.address,
    },
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING_SUMMARY.average,
      // TODO: replace with real review count (placeholder defaults to 1).
      reviewCount: 1,
      bestRating: 5,
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceJsonLd({
  serviceName,
  description,
  cityName,
  path,
}: {
  serviceName: string;
  description: string;
  cityName: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${cityName}`,
    serviceType: serviceName,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: BRAND_NAME,
      "@id": `${SITE_URL}/#business`,
    },
    areaServed: { "@type": "City", name: cityName },
    url: new URL(path, SITE_URL).toString(),
  };
}
