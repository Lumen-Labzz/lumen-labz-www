import type { NavLink } from "@/types";
import {
  Briefcase,
  CircleHelp,
  MessageSquare,
  Package,
  UsersRound,
} from "lucide-react";

export const navLinks: NavLink[] = [
  {
    href: "team",
    label: "Team",
    Icon: UsersRound,
  },
  {
    href: "services",
    label: "Services",
    Icon: Briefcase,
  },
  {
    href: "packages",
    label: "Packages",
    Icon: Package,
  },
  {
    href: "testimonials",
    label: "Testimonials",
    Icon: MessageSquare,
  },
  {
    href: "faqs",
    label: "FAQs",
    Icon: CircleHelp,
  },
];
