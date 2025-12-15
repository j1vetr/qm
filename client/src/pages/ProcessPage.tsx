import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";

const timeline = [
  {
    phase: "Phase 01",
    title: "Consultation & Assessment",
    desc: "We begin with a thorough digital or in-person survey of your home. Our experts analyze your inventory, identify special requirements, and discuss your timeline constraints."
  },
  {
    phase: "Phase 02",
    title: "Strategic Planning",
    desc: "A dedicated move coordinator creates your master plan. This includes route optimization, packing material calculation, and scheduling of specialist teams for items like pianos or art."
  },
  {
    phase: "Phase 03",
    title: "The Pack",
    desc: "Our team arrives with premium materials. We label, catalog, and pack every item with precision. Wardrobes are transferred to garment boxes; electronics are anti-static wrapped."
  },
  {
    phase: "Phase 04",
    title: "Transport",
    desc: "Your belongings are loaded into our air-ride suspension fleet. You receive a tracking link to monitor the journey in real-time as we move across the Swiss landscape."
  },
  {
    phase: "Phase 05",
    title: "Arrival & Setup",
    desc: "We don't just drop boxes. We reassemble furniture, place boxes in correct rooms, and can provide unpacking services to get your new home livable immediately."
  }
];

export default function ProcessPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-48 pb-24 container mx-auto px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32 text-center max-w-3xl mx-auto"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-6">The Methodology</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase italic mb-8 leading-[0.9]">
            The <span className="text-primary">Process</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Precision engineering applied to moving. We've broken down relocation into a science to ensure zero errors.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line Container */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2 overflow-hidden">
             {/* Animated Fill Line */}
             <motion.div 
               style={{ height: lineHeight }} 
               className="w-full bg-primary origin-top"
             />
          </div>
          
          <div className="space-y-32">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-24 ${
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"
                }`}
              >
                {/* Content */}
                <div className="pl-16 md:pl-0 md:w-1/2">
                  <motion.div 
                    whileHover={{ x: index % 2 === 0 ? -10 : 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">{item.phase}</span>
                    <h3 className="text-4xl font-display font-bold uppercase italic mb-6">{item.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="absolute left-[13px] md:left-1/2 top-0 md:-translate-x-1/2 z-10">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 1 }}
                    className="w-4 h-4 rounded-none bg-background border-2 border-primary rotate-45 shadow-[0_0_20px_hsl(355,100%,55%)]"
                  />
                  {/* Pulse Effect */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-primary/50 rotate-45"
                  />
                </div>
                
                {/* Empty side for layout balance */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
