import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase italic mb-8">
            The <span className="text-primary">Process</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Precision engineering applied to moving. We've broken down relocation into a science.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-white/20 to-primary/0 md:-translate-x-1/2" />
          
          <div className="space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"
                }`}
              >
                {/* Content */}
                <div className="md:w-1/2 md:px-12">
                  <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">{item.phase}</span>
                  <h3 className="text-3xl font-display font-bold uppercase italic mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>

                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_15px_hsl(355,100%,55%)] transform translate-y-2 -translate-x-[7px] md:translate-x-[-50%]" />
                
                {/* Empty side for layout balance */}
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
