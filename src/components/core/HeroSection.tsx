import { ChevronDown } from "lucide-react";
import HeroBGPNG from "/hero-bg.png";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-[90vh] bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${HeroBGPNG})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Empower Your Business with Innovative Software
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-primary-foreground/90 mt-4">
          Scalable technology solutions that drive growth and efficiency.
        </p>

        <p className="mt-6 text-2xl md:text-3xl font-semibold tracking-wider text-primary-foreground/80">
          Create. Elevate. Launch.
        </p>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <ChevronDown className="size-16 md:size-20 lg:size-24 animate-bounce text-primary-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
