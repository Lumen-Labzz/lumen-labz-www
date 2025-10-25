import type { Package } from "@/types";

export const packages: Package[] = [
  {
    id: crypto.randomUUID(),
    name: "Starter",
    price: 9,
    billingCycle: "monthly",
    description: "Perfect for new sellers launching their first online store.",
    features: [
      "1 storefront",
      "Basic analytics",
      "Standard checkout",
      "Email support",
    ],
    isPopular: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Pro",
    price: 29,
    billingCycle: "monthly",
    description:
      "Ideal for growing brands that need more features and flexibility.",
    features: [
      "Up to 5 storefronts",
      "Discount & coupon tools",
      "Abandoned cart recovery",
      "Priority support",
    ],
    isPopular: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Business",
    price: 59,
    billingCycle: "monthly",
    description:
      "Built for small businesses scaling their product catalog and traffic.",
    features: [
      "Unlimited products",
      "Team management",
      "Sales & traffic insights",
      "Premium integrations",
    ],
    isPopular: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Enterprise",
    price: 99,
    billingCycle: "monthly",
    description: "Advanced tools for large teams managing high-volume sales.",
    features: [
      "Custom integrations",
      "API access",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    isPopular: false,
  },
];
