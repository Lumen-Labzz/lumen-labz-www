import type { LucideIcon } from "lucide-react";

export interface Testimonial {
  id: string;
  fullName: string;
  role: string;
  imageUrl: string;
  testimony: {
    title: string;
    description: string;
    date: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  category: string;
  inStock: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  Icon: LucideIcon;
}

export interface SocialLink {
  Icon: LucideIcon;
  href: string;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  billingCycle: "monthly" | "yearly";
  description: string;
  features: string[];
  isPopular: boolean;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  socials: SocialLink[];
}
