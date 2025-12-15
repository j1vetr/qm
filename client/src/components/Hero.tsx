import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/cinematic_swiss_moving_truck_at_twilight.png";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={heroBg} 
          alt="Swiss Moving Truck" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-primary font-bold tracking-[0.2em] uppercase">Switzerland's Premium Relocation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-black font-display leading-[0.9] italic mb-8"
          >
            MOVING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">FORWARD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 font-light"
          >
            Experience the next generation of logistics. From Zürich to Geneva, we move your world with Swiss precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-none skew-x-[-10deg]">
              <span className="skew-x-[10deg]">START MOVING</span>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white text-lg px-8 py-6 rounded-none skew-x-[-10deg]">
              <span className="skew-x-[10deg]">OUR SERVICES</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 md:right-20 z-20 hidden md:block"
      >
        <div className="bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-lg max-w-xs">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <MapPin className="text-primary w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Next Destination</p>
              <p className="text-xl font-bold font-display">Zürich, CH</p>
              <p className="text-sm text-white/60">Bahnhofstrasse 12</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </div>
  );
}
