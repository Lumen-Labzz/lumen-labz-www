const Bio = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-20 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          About Lumen Labzz
        </h2>

        <div className="space-y-4">
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Lumen Labzz is a software innovation studio dedicated to building
            technology that empowers businesses to move faster, think smarter,
            and scale with confidence. We craft powerful digital solutions
            designed for real-world impact.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            From startups launching their first product to enterprises
            optimizing complex systems — we partner to design, build, and
            elevate the tools that push ideas forward and unlock opportunities.
          </p>
          <p className="font-medium text-primary text-base sm:text-lg">
            Create. Elevate. Launch. That’s Lumen Labzz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
