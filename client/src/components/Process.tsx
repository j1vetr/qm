import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We assess your needs via video call or in-person visit."
  },
  {
    num: "02",
    title: "Planning",
    desc: "A custom logistics plan is created for your specific move."
  },
  {
    num: "03",
    title: "Execution",
    desc: "Our elite team handles packing, transport, and setup."
  },
  {
    num: "04",
    title: "Settling In",
    desc: "Unpacking services ensuring your new home is ready."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-card relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-4">How It Works</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase italic">
            Seamless <span className="text-primary">Workflow</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="mb-8 relative flex justify-center md:block">
                  <div className="w-16 h-16 bg-background border border-white/20 rounded-full flex items-center justify-center relative z-10 group-hover:border-primary group-hover:shadow-[0_0_30px_-5px_hsl(355,100%,55%)] transition-all duration-500">
                    <span className="text-xl font-bold font-display">{step.num}</span>
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold font-display uppercase mb-3 text-white group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
