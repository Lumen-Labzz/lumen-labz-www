import type { Faq } from "@/types";

export const faqs: Faq[] = [
  {
    id: crypto.randomUUID(),
    question: "What is Lumen Labzz?",
    answer:
      "Lumen Labzz is a software development company that builds modern digital solutions — from websites and mobile apps to branding, hosting, and deployment. We help businesses grow through technology.",
  },
  {
    id: crypto.randomUUID(),
    question: "Do I need technical experience to work with you?",
    answer:
      "No! We handle everything for you — design, development, hosting, updates, and maintenance. You focus on your business while we manage your digital operations.",
  },
  {
    id: crypto.randomUUID(),
    question: "What kind of digital products do you build?",
    answer:
      "We specialize in web applications, mobile apps, desktop software, eCommerce platforms, custom APIs, and brand identity systems — tailored to each client’s goals.",
  },
  {
    id: crypto.randomUUID(),
    question: "Can you manage my domain and hosting?",
    answer:
      "Yes, we provide full setup and management including domain registration, secure hosting, SSL certificates, backups, and monitoring — so your business stays online 24/7.",
  },
  {
    id: crypto.randomUUID(),
    question: "Do you offer ongoing support and updates?",
    answer:
      "Absolutely. Our subscription plans include continuous updates, security monitoring, content changes, and technical support to keep your platform fresh and secure.",
  },
];
