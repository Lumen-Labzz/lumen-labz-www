import { packages } from "@/data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Packages = () => {
  return (
    <section
      id="packages"
      className="py-16 bg-muted px-6 text-muted-foreground dark:bg-background dark:text-foreground"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
          Subscription Packages
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={cn(
                "relative flex flex-col justify-between border border-border transition-all duration-300 hover:scale-105 bg-card text-card-foreground select-none",
                pkg.isPopular && "bg-primary text-primary-foreground shadow-lg"
              )}
            >
              {pkg.isPopular && (
                <Badge
                  className="absolute top-3 right-3 bg-secondary text-secondary-foreground"
                  variant="secondary"
                >
                  Recommended
                </Badge>
              )}

              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-xl font-semibold">
                  {pkg.name}
                </CardTitle>
                <CardDescription
                  className={cn(
                    "text-sm text-muted-foreground",
                    pkg.isPopular && "text-primary-foreground/90"
                  )}
                >
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center space-y-4">
                <div className="text-4xl font-bold">
                  ${pkg.price}
                  <span className="text-sm font-normal text-muted-foreground">
                    /{pkg.billingCycle}
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {pkg.features.map((feature, i) => (
                    <Badge
                      key={i}
                      variant={pkg.isPopular ? "secondary" : "outline"}
                      className={cn(
                        "text-xs px-2 py-1",
                        pkg.isPopular && "bg-background text-foreground"
                      )}
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-center">
                <Button
                  variant={pkg.isPopular ? "secondary" : "default"}
                  className="w-full"
                >
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
