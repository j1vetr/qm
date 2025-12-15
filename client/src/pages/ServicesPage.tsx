import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Box, Shield, Clock, Truck, UserCheck, Package, ArrowRight, CheckCircle2, Sparkles, Trash2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ServicesPage() {
  const { dict } = useLanguage();
  
  const allServices = [
    {
      icon: Box,
      title: dict.services.items.packing.title,
      desc: dict.services.items.packing.desc,
      features: dict.services.items.packing.features
    },
    {
      icon: Truck,
      title: dict.services.items.transport.title,
      desc: dict.services.items.transport.desc,
      features: dict.services.items.transport.features
    },
    {
      icon: Shield,
      title: dict.services.items.insurance.title,
      desc: dict.services.items.insurance.desc,
      features: dict.services.items.insurance.features
    },
    {
      icon: Clock,
      title: dict.services.items.express.title,
      desc: dict.services.items.express.desc,
      features: dict.services.items.express.features
    },
    {
      icon: UserCheck,
      title: dict.services.items.whiteglove.title,
      desc: dict.services.items.whiteglove.desc,
      features: dict.services.items.whiteglove.features
    },
    {
      icon: Package,
      title: dict.services.items.storage.title,
      desc: dict.services.items.storage.desc,
      features: dict.services.items.storage.features
    },
    {
      icon: Sparkles,
      title: dict.services.items.cleaning.title,
      desc: dict.services.items.cleaning.desc,
      features: dict.services.items.cleaning.features
    },
    {
      icon: Trash2,
      title: dict.services.items.disposal.title,
      desc: dict.services.items.disposal.desc,
      features: dict.services.items.disposal.features
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-48 pb-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center max-w-3xl mx-auto"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-6">{dict.services.subtitle}</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase italic mb-8 leading-[0.9]">
            {dict.services.title.split(' ')[0]} <span className="text-primary">{dict.services.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {dict.services.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card border border-white/5 p-8 hover:border-primary/50 transition-all duration-500 hover:bg-white/5 hover:-translate-y-2 flex flex-col"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-white/5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <service.icon className="w-8 h-8" />
                </div>
                <span className="font-display font-bold text-white/5 text-5xl group-hover:text-white/10 transition-colors">0{index + 1}</span>
              </div>
              
              <h3 className="text-2xl font-display font-bold uppercase mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                {service.desc}
              </p>
              
              <div className="border-t border-white/5 pt-6 mt-auto">
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary/10 border border-primary/20 p-12 md:p-24 relative overflow-hidden text-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(220,38,38,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine opacity-30" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase italic mb-8">
              {dict.services.cta_title}
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              {dict.services.cta_desc}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-8 rounded-none skew-x-[-10deg] font-bold shadow-[0_0_30px_-5px_hsl(355,100%,55%)] hover:shadow-[0_0_50px_-5px_hsl(355,100%,55%)] transition-all duration-300">
                <span className="skew-x-[10deg] flex items-center gap-3">
                  {dict.services.cta_button} <ArrowRight className="w-6 h-6" />
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}
