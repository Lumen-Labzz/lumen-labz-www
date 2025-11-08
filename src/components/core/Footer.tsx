"use client";

import { useState } from "react";
import SiteLogo from "@/components/core/SiteLogo";
import { navLinks, socialLinks } from "@/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Subscribed successfully! 🎉");
    setEmail("");
  };

  return (
    <footer className="border-t px-6 border-border py-10 bg-primary text-primary-foreground">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <section>
          <div className="flex items-center gap-2 mb-3">
            <SiteLogo />
            <h2 className="text-xl font-bold">Lumen Labzz</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Lumen Labzz builds powerful digital products — from websites and
            mobile apps to hosting, branding, and deployment. We turn ideas into
            high-performance software that scales with your business.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2">
            {navLinks.map((navLink) => (
              <li key={navLink.href}>
                <a
                  href={`#${navLink.href}`}
                  className="flex items-center gap-2 text-sm hover:underline hover:text-foreground transition-colors"
                >
                  <navLink.Icon className="h-4 w-4" />
                  {navLink.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Socials</h2>
          <div className="flex gap-4">
            {socialLinks.map((socialLink) => (
              <a
                key={socialLink.href}
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <socialLink.Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Subscribe</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Get product updates, tech insights, and exclusive offers — straight
            to your inbox.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-2"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-900 placeholder:text-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white"
            >
              Subscribe
            </Button>
          </form>
        </section>
      </div>

      <div className="mt-10 border-t border-border pt-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Lumen Labzz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
