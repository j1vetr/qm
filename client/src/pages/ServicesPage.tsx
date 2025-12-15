import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Box, Shield, Clock, Truck, UserCheck, Package } from "lucide-react";

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
      
      <div className="pt-32 pb-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase italic mb-8">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We offer a comprehensive suite of relocation services designed for the modern individual who refuses to compromise on quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card border border-white/5 p-8 hover:border-primary/50 transition-all duration-300 hover:bg-white/5"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-8 h-8" />
                </div>
                <span className="font-display font-bold text-white/10 text-4xl group-hover:text-white/20">0{index + 1}</span>
              </div>
              
              <h3 className="text-3xl font-display font-bold uppercase mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/80">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
