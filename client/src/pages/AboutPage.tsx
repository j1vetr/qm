import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-48 pb-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 max-w-4xl"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-4">Who We Are</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase italic mb-8">
            Swiss <span className="text-stroke">Precision</span> <br /> 
            Global <span className="text-primary">Vision</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 2024, QuickMove was born from a frustration with the archaic moving industry. We saw a world where logistics were opaque, service was inconsistent, and technology was non-existent.
            </p>
            <p>
              We decided to change that. By combining Swiss efficiency with modern tracking technology and a white-glove service ethos, we created a moving experience that feels less like a chore and more like an upgrade.
            </p>
            <p>
              Today, we operate across all 26 cantons, serving clients who demand excellence, discretion, and speed.
            </p>
          </div>
          <div className="relative h-[400px] bg-card border border-white/10 p-8 flex items-center justify-center">
             <div className="text-center">
                <div className="text-8xl font-display font-bold text-white mb-2">100%</div>
                <div className="text-primary uppercase tracking-widest font-bold">Satisfaction Rate</div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-primary/50" />
             <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-primary/50" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Mission", text: "To redefine relocation through technology and service excellence." },
            { title: "Vision", text: "A world where moving is seamless, instant, and stress-free." },
            { title: "Values", text: "Precision, Discretion, Reliability, and Innovation." }
          ].map((item, i) => (
             <div key={i} className="bg-card border border-white/5 p-8 hover:border-primary/30 transition-colors">
               <h3 className="text-2xl font-display font-bold uppercase mb-4 text-white">{item.title}</h3>
               <p className="text-muted-foreground">{item.text}</p>
             </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
