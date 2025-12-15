import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Relocated to Bern",
    text: "I was shocked by how smooth the process was. The team handled my art collection with extreme care. Absolutely professional.",
    initials: "SJ"
  },
  {
    name: "Marc Weber",
    role: "Relocated to Zürich",
    text: "QuickMove transformed a stressful day into a seamless experience. The dark mode branding isn't just for show, their service is truly elite.",
    initials: "MW"
  },
  {
    name: "Elena Rossi",
    role: "Relocated to Geneva",
    text: "Best moving company in Switzerland. Fast, efficient, and surprisingly high-tech. The tracking system was amazing.",
    initials: "ER"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-4">Testimonials</span>
            <h2 className="text-5xl font-display font-bold uppercase italic leading-tight mb-8">
              Trusted by <br/>
              <span className="text-primary">Switzerland</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Don't just take our word for it. Here is what our clients have to say about their relocation experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[100vw] overflow-hidden md:overflow-visible"
          >
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((t, i) => (
                  <CarouselItem key={i}>
                    <div className="bg-card border border-white/10 p-6 md:p-12 relative overflow-hidden group h-full">
                      <div className="absolute top-0 right-0 p-8 opacity-10 font-display font-black text-9xl leading-none select-none">
                        "
                      </div>
                      
                      <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      <p className="text-xl md:text-2xl font-light italic mb-8 relative z-10">
                        "{t.text}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-primary">
                          <AvatarFallback className="bg-muted text-white font-bold">{t.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-white uppercase tracking-wider">{t.name}</p>
                          <p className="text-sm text-primary">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0 bg-transparent border-white/20 hover:bg-primary hover:text-white" />
                <CarouselNext className="static translate-y-0 bg-transparent border-white/20 hover:bg-primary hover:text-white" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
