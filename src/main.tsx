import "#/global.css";

import {
  Bio,
  FAQs,
  Footer,
  HeroSection,
  Navbar,
  Packages,
  ReachOut,
  Services,
  Members,
  Testimonials,
  BackToTopButton,
} from "@/components";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-primary text-primary-foreground">
      <Navbar />
      <HeroSection />
    </div>
    <Bio />
    <Members />
    <Services />
    <Packages />
    <Testimonials />
    <FAQs />
    <ReachOut />
    <BackToTopButton />
    <Toaster richColors />
    <Footer />
  </StrictMode>
);
