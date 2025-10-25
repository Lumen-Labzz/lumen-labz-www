import type { Member } from "@/types";
import Member_1PNG from "/members/member-1.png";
import Member_2PNG from "/members/member-2.png";
import Member_3PNG from "/members/member-3.png";
import Member_4PNG from "/members/member-4.png";
import { Instagram, Linkedin, Globe, Github } from "lucide-react";

export const members: Member[] = [
  {
    id: crypto.randomUUID(),
    imageUrl: Member_1PNG,
    name: "Emma Lawson",
    role: "Founder & CEO",
    description:
      "Founder of WWW-Template and passionate advocate for accessible, beautiful design that empowers creators worldwide.",
    socials: [
      {
        Icon: Instagram,
        href: "https://instagram.com/emmalawson",
      },
      {
        Icon: Linkedin,
        href: "https://linkedin.com/in/emmalawson",
      },
      {
        Icon: Globe,
        href: "https://emmalawson.com",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: Member_2PNG,
    name: "Sofia Ramirez",
    role: "Creative Director",
    description:
      "Leads the creative vision of the brand, blending aesthetics and function to craft templates that truly stand out.",
    socials: [
      {
        Icon: Instagram,
        href: "https://instagram.com/sofiaramirez",
      },
      {
        Icon: Linkedin,
        href: "https://linkedin.com/in/sofiaramirez",
      },
      {
        Icon: Globe,
        href: "https://sofiaramirezdesign.com",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: Member_3PNG,
    name: "Hannah Kim",
    role: "Lead Developer",
    description:
      "Combines design systems and code to deliver seamless user experiences and pixel-perfect product templates.",
    socials: [
      {
        Icon: Github,
        href: "https://github.com/hannahkim",
      },
      {
        Icon: Linkedin,
        href: "https://linkedin.com/in/hannahkim",
      },
      {
        Icon: Globe,
        href: "https://hannahkim.dev",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: Member_4PNG,
    name: "Olivia Bennett",
    role: "Marketing Strategist",
    description:
      "Shapes WWW-Template's story, connecting creative tools with the entrepreneurs and brands that need them most.",
    socials: [
      {
        Icon: Instagram,
        href: "https://instagram.com/oliviabennett",
      },
      {
        Icon: Linkedin,
        href: "https://linkedin.com/in/oliviabennett",
      },
      {
        Icon: Globe,
        href: "https://oliviabennettmarketing.com",
      },
    ],
  },
];
