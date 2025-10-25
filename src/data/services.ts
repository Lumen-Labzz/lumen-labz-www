import type { Service } from "@/types";
import {
  Palette,
  Code,
  Megaphone,
  PenTool,
  ShoppingBag,
  LineChart,
} from "lucide-react";

export const services: Service[] = [
  {
    id: crypto.randomUUID(),
    title: "Brand Identity Design",
    description:
      "Crafting cohesive and memorable brand identities that help businesses stand out with purpose and personality.",
    icon: Palette,
    features: [
      "Logo & visual system design",
      "Color & typography guidelines",
      "Brand assets and templates",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Web Design",
    description:
      "Designing responsive, user-centered websites that communicate your brand message beautifully across all devices.",
    icon: PenTool,
    features: [
      "Modern UI/UX design",
      "Wireframing & prototyping",
      "Responsive layout systems",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Web Development",
    description:
      "Building high-performance, scalable websites powered by modern frameworks and best development practices.",
    icon: Code,
    features: [
      "React + Vite stack",
      "Fast, SEO-optimized builds",
      "Modular and reusable components",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "E-Commerce Solutions",
    description:
      "Creating seamless online shopping experiences that convert visitors into loyal customers.",
    icon: ShoppingBag,
    features: [
      "Shop setup & integrations",
      "Payment gateway support",
      "Custom product templates",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Digital Marketing",
    description:
      "Helping your brand grow through targeted online marketing strategies and content creation that drives results.",
    icon: Megaphone,
    features: [
      "Social media campaigns",
      "SEO & paid advertising",
      "Content and brand storytelling",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Analytics & Growth Strategy",
    description:
      "Turning data into actionable insights to optimize performance and guide your brand’s digital growth.",
    icon: LineChart,
    features: [
      "User behavior tracking",
      "Performance dashboards",
      "Conversion optimization",
    ],
  },
];
