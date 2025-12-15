import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

export default function AboutPage() {
  const { dict } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-48 pb-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 max-w-4xl"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-4">{dict.about.subtitle}</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase italic mb-8">
            {dict.about.title_line1} <br /> 
            <span className="text-primary">{dict.about.title_line2}</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{dict.about.p1}</p>
            <p>{dict.about.p2}</p>
            <p>{dict.about.p3}</p>
          </div>
          <div className="relative h-[400px] bg-card border border-white/10 p-8 flex items-center justify-center">
             <div className="text-center">
                <div className="text-8xl font-display font-bold text-white mb-2">100%</div>
                <div className="text-primary uppercase tracking-widest font-bold">{dict.about.stat_satisfaction}</div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-primary/50" />
             <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-primary/50" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            dict.about.mission,
            dict.about.vision,
            dict.about.values
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
