import { services } from "@/data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 bg-background text-foreground">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-card text-card-foreground border border-border hover:bg-muted/10 transition-all duration-300"
            >
              <CardHeader className="flex flex-col items-center text-center space-y-3">
                <service.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-lg font-semibold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-wrap justify-center gap-2">
                {service.features.map((feature, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-xs px-2 py-1"
                  >
                    {feature}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
