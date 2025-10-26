import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { members } from "@/data";

const Members = () => {
  return (
    <section id="members" className="py-16 px-6 lg:px-24 bg-muted/30">
      <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {members.map((member) => (
          <Card key={member.id} className="text-center p-0 overflow-hidden">
            <div className="relative h-96 overflow-hidden">
              <div className="absolute top-3 left-3 flex flex-col gap-y-2 z-10">
                {member.socials.map((social) => (
                  <Button key={social.href} asChild size="icon">
                    <a href={social.href} target="_blank" rel="noreferrer">
                      <social.Icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>

              <img
                src={member.imageUrl}
                alt={member.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <CardHeader className="pt-4">
              <CardTitle className="text-lg font-semibold">
                {member.name}
              </CardTitle>
              <Badge
                variant="secondary"
                className="text-xs font-medium mx-auto"
              >
                {member.role}
              </Badge>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Members;
