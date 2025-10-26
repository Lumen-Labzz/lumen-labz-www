import type { Service } from "@/types";
import {
  Code,
  Smartphone,
  Monitor,
  Globe,
  Server,
  Palette,
} from "lucide-react";

export const services: Service[] = [
  {
    id: crypto.randomUUID(),
    title: "Logo & Brand Identity",
    description:
      "Designing bold, memorable identities that give your product a strong and professional presence in the market.",
    icon: Palette,
    features: [
      "Custom logo creation",
      "Brand guidelines development",
      "Iconography & digital assets",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Web Development",
    description:
      "Building fast, secure, and scalable websites using modern technologies tailored to your business goals.",
    icon: Code,
    features: [
      "Full-stack web applications",
      "SEO-friendly infrastructure",
      "CMS and dashboard integration",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Mobile App Development",
    description:
      "Creating intuitive mobile apps that deliver seamless experiences on iOS and Android platforms.",
    icon: Smartphone,
    features: [
      "Cross-platform development",
      "Performance optimization",
      "UI/UX for mobile devices",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Desktop Application Development",
    description:
      "Developing powerful desktop software solutions built for productivity, stability, and user-friendly workflows.",
    icon: Monitor,
    features: [
      "Windows, macOS & Linux support",
      "High-performance architecture",
      "Custom tooling & automation apps",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Domain & Hosting Services",
    description:
      "Everything you need to launch — domain management, website hosting, and cloud scaling handled for you.",
    icon: Globe,
    features: [
      "Domain registration & DNS setup",
      "High-availability hosting",
      "SSL security & uptime monitoring",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Deployment & DevOps",
    description:
      "Ensuring your product is always online — secure deployments, version control, automation, and monitoring.",
    icon: Server,
    features: [
      "CI/CD pipelines",
      "Cloud infrastructure setup",
      "Scalability & performance tuning",
    ],
  },
];
