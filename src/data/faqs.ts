/**
 * FAQs — 100% original copy in Flink's voice (§3). Wired to the accordion UI
 * and to FAQPage JSON-LD. Add/edit entries here and both update.
 */
export type Faq = {
  question: string;
  answer: string;
};

export const FAQS: Faq[] = [
  {
    question: "How quickly will a Flink professional reach me?",
    answer:
      "In our live areas, a trained Flink professional typically arrives at your door in about 10 minutes of an instant booking. Exact timing depends on demand and how close you are to an available pro — the app shows you a live ETA before you confirm.",
  },
  {
    question: "Are Flink professionals employed by Flink or are they freelancers?",
    answer:
      "They're our own people. Flink is a full-stack service, not a marketplace — every professional is trained and contracted by us, so we're accountable for the quality of every visit.",
  },
  {
    question: "What training and verification do professionals go through?",
    answer:
      "Before their first job, every professional completes a 5-day training programme covering cleaning standards, safety, and conduct, and passes a background verification. You're letting a prepared, vetted professional into your home.",
  },
  {
    question: "How does pricing work — is there a subscription?",
    answer:
      "No subscriptions and no lock-in. You pay transparently, either by the hour or per task, and you see the rate before you book. A loyalty programme is on the way, but you'll never need a plan to get a great clean.",
  },
  {
    question: "Which areas in Hyderabad do you currently cover?",
    answer:
      "We're live in Kismatpur and Kompally to start, and expanding across Hyderabad. If we're not in your locality yet, request Flink in your area and we'll prioritise neighbourhoods with the most demand.",
  },
  {
    question: "Can I schedule a clean for later instead of right now?",
    answer:
      "Yes. Choose an instant booking for help in about 10 minutes, or schedule a visit for a time that suits you. Both are booked the same way in the app.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "You can manage bookings in the app. Cancellation and refund terms are set out on our Refund & Cancellation page — we keep the rules clear and fair. (Final policy details are being finalised ahead of launch.)",
  },
  {
    question: "How do I pay, and is it secure?",
    answer:
      "Payments are handled in the Flink app, where you can also use your wallet, coupons, and referral credit. Everything stays within the app — the website is just here to help you get started.",
  },
];
