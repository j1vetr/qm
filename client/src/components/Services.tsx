import { motion } from "framer-motion";
import { Box, Truck, Warehouse, ArrowUpRight } from "lucide-react";
import packingImg from "@assets/generated_images/professional_packing_service_dark_cinematic.png";
import transportImg from "@assets/generated_images/abstract_logistics_map_of_switzerland.png";
import storageImg from "@assets/generated_images/high-tech_secure_storage_facility.png";

const services = [
  {
    id: "01",
    title: "Premium Packing",
    desc: "White-glove packing service for your most valuable possessions.",
    icon: Box,
    image: packingImg,
  },
  {
    id: "02",
    title: "Secure Transport",
    desc: "GPS-tracked fleet ensuring your items arrive safely and on time.",
    icon: Truck,
    image: transportImg,
  },
  {
    id: "03",
    title: "Smart Storage",
    desc: "Climate-controlled, high-security storage facilities across Switzerland.",
    icon: Warehouse,
    image: storageImg,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-4">What We Do</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase italic">
            Beyond <span className="text-stroke">Transport</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[500px] w-full overflow-hidden border border-white/10 hover:border-primary/50 transition-colors duration-500"
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-4xl font-display font-bold text-white/40 group-hover:text-primary transition-colors">
                    {service.id}
                  </span>
                  <div className="p-3 bg-white/5 backdrop-blur-md rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-display font-bold mb-4 uppercase italic group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 group-hover:text-white transition-colors duration-300">
                    {service.desc}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider group-hover:text-white transition-colors">
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
