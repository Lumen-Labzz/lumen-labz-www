import type { Member } from "@/types";
import { Github, Globe, Instagram, Linkedin } from "lucide-react";
import KarumePNG from "/members/karume.png";
import MartinPNG from "/members/martin.png";

export const members: Member[] = [
	{
		id: crypto.randomUUID(),
		imageUrl: MartinPNG,
		name: "Martin",
		role: "Founder & CEO",
		description:
			"Visionary leader driving the future of Lumen Labzz — focused on innovation, strategic growth, and delivering software solutions that redefine what's possible.",
		socials: [
			{
				Icon: Instagram,
				href: "https://instagram.com/emmalawson",
			},
			{
				Icon: Linkedin,
				href: "https://linkedin.com/in/emmalawson",
			},
		],
	},
	{
		id: crypto.randomUUID(),
		imageUrl: KarumePNG,
		name: "Daniel Karume",
		role: "Software Developer",
		description:
			"Innovates and engineers scalable digital solutions, transforming complex challenges into fast, reliable, and user-focused software experiences.",
		socials: [
			{
				Icon: Github,
				href: "https://github.com/Karume-lab/",
			},
			{
				Icon: Linkedin,
				href: "https://www.linkedin.com/in/daniel-karume/",
			},
			{
				Icon: Globe,
				href: "https://karume.vercel.app/",
			},
		],
	},
];
