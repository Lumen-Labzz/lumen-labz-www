const Bio = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-20 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          About WWW-Template
        </h2>

        <div className="space-y-4">
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            WWW-Template is a modern marketplace built with passion for quality
            and simplicity. We provide beautifully crafted, ready-to-use
            products that help individuals and businesses save time and stand
            out with style.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Whether you're launching your first project or refining your brand,
            our collection of templates and resources is designed to help you
            create, grow, and succeed — without the hassle.
          </p>
          <p className="font-medium text-primary text-base sm:text-lg">
            Empowering creators. Simplifying design. That's WWW-Template.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
