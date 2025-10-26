import type { Package } from "@/types";

export const packages: Package[] = [
  {
    id: crypto.randomUUID(),
    name: "Starter",
    price: 2000,
    billingCycle: "monthly",
    description:
      "Perfect if you just need to exist online — simple, smooth, and secure.",
    features: [
      "Free website (up to 3 pages)",
      "Hosting + domain included",
      "Monthly content updates",
      "Security & backups",
      "WhatsApp support",
    ],
    isPopular: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Business",
    price: 3500,
    billingCycle: "monthly",
    description:
      "Your online shopfront — managed and updated while you focus on sales.",
    features: [
      "Everything in Starter",
      "Up to 6 pages",
      "1 custom email (info@yourbiz.co.ke)",
      "SEO optimization",
      "2 content updates / month",
      "Priority support",
    ],
    isPopular: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Pro",
    price: 6000,
    billingCycle: "monthly",
    description:
      "The all-in-one digital partner — we keep your website fresh, fast, and earning.",
    features: [
      "Everything in Business",
      "Up to 10 pages or full eCommerce",
      "Weekly updates (offers, products, etc.)",
      "SEO + Google optimization",
      "Monthly analytics report",
      "24/7 priority support",
    ],
    isPopular: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Enterprise",
    price: 10000,
    billingCycle: "monthly",
    description: "Your digital team in one plan — no stress, just results.",
    features: [
      "Everything in Pro",
      "Full content & blog management",
      "Social media posting (2/week)",
      "Custom automations / booking systems",
      "Monthly growth strategy call",
    ],
    isPopular: false,
  },
];
