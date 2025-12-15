import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroVideo from "@assets/generated_videos/cinematic_swiss_moving_truck_driving_in_alps.mp4";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { dict } = useLanguage();

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video 
          src={heroVideo} 
          autoPlay 
          muted 
          loop 
          playsInline
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
            <span className="text-primary font-bold tracking-[0.2em] uppercase">{dict.hero.subtitle}</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black font-display leading-[0.9] italic mb-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {dict.hero.title_moving}
            </motion.div> 
            <motion.span 
              className="inline-block pr-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.5
                  }
                }
              }}
            >
              {Array.from(dict.hero.title_forward as string).map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 font-light"
          >
            {dict.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-none skew-x-[-10deg]">
                <span className="skew-x-[10deg]">{dict.hero.start_moving}</span>
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white text-lg px-8 py-6 rounded-none skew-x-[-10deg]">
                <span className="skew-x-[10deg]">{dict.hero.our_services}</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

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
