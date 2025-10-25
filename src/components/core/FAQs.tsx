import { faqs } from "@/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

const FAQs = () => {
  return (
    <section id="faqs" className="py-16">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <ScrollArea className="max-h-72 overflow-auto px-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </div>
    </section>
  );
};

export default FAQs;
