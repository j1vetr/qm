import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Box, Shield, Clock, Truck, UserCheck, Package, ArrowRight, CheckCircle2 } from "lucide-react";

const allServices = [
  {
    icon: Box,
    title: "Premium Packing",
    desc: "We don't just throw things in boxes. We architect the safety of your items using premium materials and specialized techniques for fragile items, art, and electronics.",
    features: ["Custom crating for art", "Anti-static electronic wrapping", "Wardrobe boxes provided"]
  },
  {
    icon: Truck,
    title: "Secure Transport",
    desc: "Our fleet represents the pinnacle of logistics technology. Air-ride suspension, GPS tracking, and climate control ensure your belongings travel in first-class comfort.",
    features: ["Real-time GPS Tracking", "Air-ride suspension trucks", "Climate controlled cargo"]
  },
  {
    icon: Shield,
    title: "Insurance & Safety",
    desc: "Peace of mind is part of the package. We offer comprehensive insurance coverage for every step of the journey, backed by Swiss reliability.",
    features: ["Full value protection", "Zero-deductible options", "Certified handling staff"]
  },
  {
    icon: Clock,
    title: "Express Relocation",
    desc: "For those who value time above all else. Our express service guarantees 24-hour relocation within Switzerland for eligible moves.",
    features: ["Priority scheduling", "Dedicated express team", "Overnight transport options"]
  },
  {
    icon: UserCheck,
    title: "White Glove Service",
    desc: "Sit back and relax. Our white-glove service includes full unpacking, furniture assembly, and even home organization so you walk into a ready home.",
    features: ["Furniture assembly/disassembly", "Home organization", "Debris removal"]
  },
  {
    icon: Package,
    title: "Storage Solutions",
    desc: "Need time between homes? Our high-security storage facilities offer a temporary sanctuary for your possessions with 24/7 surveillance.",
    features: ["Climate-controlled units", "24/7 Video surveillance", "Digital inventory management"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-48 pb-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center max-w-3xl mx-auto"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-6">World Class Standards</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase italic mb-8 leading-[0.9]">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We offer a comprehensive suite of relocation services designed for the modern individual who refuses to compromise on quality.
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
              Ready for a <span className="text-primary">Seamless Move?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Stop stressing about logistics. Let us handle the heavy lifting while you focus on your new beginning.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-8 rounded-none skew-x-[-10deg] font-bold shadow-[0_0_30px_-5px_hsl(355,100%,55%)] hover:shadow-[0_0_50px_-5px_hsl(355,100%,55%)] transition-all duration-300">
                <span className="skew-x-[10deg] flex items-center gap-3">
                  GET YOUR FREE QUOTE <ArrowRight className="w-6 h-6" />
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
