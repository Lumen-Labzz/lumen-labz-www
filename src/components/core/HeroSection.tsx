import { ChevronDown } from "lucide-react";
import WomanPNG from "/woman.png";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-[90vh] bg-cover bg-top"
      style={{
        backgroundImage: `url(${WomanPNG})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-primary-foreground px-6">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Buy our shit!
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          You know you want to.
        </p>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <ChevronDown className="size-16 md:size-20 lg:size-24 animate-bounce text-primary-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
