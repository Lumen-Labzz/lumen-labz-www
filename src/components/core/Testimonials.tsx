import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="basis-full sm:basis-1/2 lg:basis-1/3 flex"
              >
                <Card className="flex flex-col flex-1">
                  <CardContent className="flex flex-col flex-1 items-center text-center justify-between space-y-4 p-6">
                    <Quote className="size-8 text-primary opacity-50 mb-2" />

                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.fullName}
                      className="size-24 rounded-full object-cover object-top ring-4 ring-gray-100 shadow-sm"
                    />

                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        {testimonial.fullName}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>

                    <div className="space-y-2 flex-1 flex flex-col justify-center">
                      <h4 className="text-xl font-medium text-primary/70">
                        “{testimonial.testimony.title}”
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {testimonial.testimony.description}
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      {testimonial.testimony.date}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 sm:-left-6 top-1/2 -translate-y-1/2 sm:translate-y-0" />
          <CarouselNext className="right-2 sm:-right-6 top-1/2 -translate-y-1/2 sm:translate-y-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
