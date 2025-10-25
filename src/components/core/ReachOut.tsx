import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, MousePointer2 } from "lucide-react";

const ecommerceTags = [
  { label: "E-Commerce", x: "15%", y: "15%" },
  { label: "Product Design", x: "50%", y: "45%" },
  { label: "Shopify", x: "60%", y: "20%" },
  { label: "Checkout UX", x: "55%", y: "75%" },
  { label: "Store Analytics", x: "20%", y: "30%" },
  { label: "Payment Systems", x: "25%", y: "60%" },
];

const ReachOut = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ecommerceTags.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-b from-gray-50 to-white px-4 sm:px-8 lg:px-20 py-16 sm:py-20 shadow-inner border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="relative w-full lg:w-1/2 h-[280px] sm:h-[380px] md:h-[440px] flex items-center justify-center overflow-visible pointer-events-none">
        <div className="relative w-[90%] h-[90%]">
          {ecommerceTags.map((tag, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: tag.x,
                top: tag.y,
                transform: "translate(-50%, -50%)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white/80 border border-gray-200 rounded-full backdrop-blur-md shadow-sm whitespace-nowrap">
                {tag.label}
              </div>
            </motion.div>
          ))}

          <motion.div
            className="absolute z-10 text-primary"
            animate={{
              left: ecommerceTags[activeIndex].x,
              top: ecommerceTags[activeIndex].y,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            style={{
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            <MousePointer2 className="size-4 sm:size-5 fill-primary text-primary" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-xl w-full text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          I'm ready to help build your next ecommerce success
        </h2>
        <p className="text-gray-500 mb-8 text-sm sm:text-base">
          Let's create an experience your customers will love.
        </p>

        <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:lumenlabzz@gmail.com" aria-label="Email me">
              <Mail className="size-8" />
            </a>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <a
              href="https://wa.me/0704150182"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="size-8 text-green-500" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReachOut;
