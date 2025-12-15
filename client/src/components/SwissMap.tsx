import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const cities = [
  { name: "Zürich", x: 65, y: 30, label: "Main Hub" },
  { name: "Geneva", x: 15, y: 75, label: "Western Hub" },
  { name: "Bern", x: 45, y: 50, label: "Capital" },
  { name: "Basel", x: 55, y: 15, label: "North Gate" },
  { name: "Lugano", x: 75, y: 85, label: "South Conn." },
  { name: "St. Gallen", x: 85, y: 25, label: "East Wing" },
  { name: "Lucerne", x: 60, y: 55, label: "Central" },
];

export default function SwissMap() {
  const [activeCity, setActiveCity] = useState<number | null>(null);

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-4">Network Coverage</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase italic mb-6">
                We Cover <br />
                <span className="text-stroke text-transparent">Every Canton</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our logistics network spans the entire nation. From the busy streets of Zürich to the quiet valleys of Ticino, we are there.
              </p>
              
              <div className="space-y-4">
                {activeCity !== null ? (
                  <motion.div
                    key="city-detail"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 border border-primary/30 bg-primary/5 backdrop-blur-md rounded-lg"
                  >
                    <h3 className="text-2xl font-bold font-display text-white mb-2">{cities[activeCity].name}</h3>
                    <p className="text-primary text-sm uppercase tracking-wider mb-4">{cities[activeCity].label}</p>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Navigation className="w-4 h-4" />
                      <span>Daily routes available</span>
                    </div>
                  </motion.div>
                ) : (
                  <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
                    <p className="text-white/40 italic">Hover over a city on the map to view details.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          <div className="md:w-2/3 w-full aspect-[4/3] relative">
            {/* Stylized Switzerland Map SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]"
            >
              {/* Abstract Swiss Shape */}
              <motion.path
                d="M 15 75 L 25 65 L 20 55 L 30 45 L 40 40 L 55 15 L 75 15 L 85 25 L 90 40 L 95 50 L 85 65 L 75 85 L 55 85 L 40 75 L 30 80 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-white/20"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Grid Lines inside map for tech feel */}
              <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-white/10" />
              </pattern>
              <path
                d="M 15 75 L 25 65 L 20 55 L 30 45 L 40 40 L 55 15 L 75 15 L 85 25 L 90 40 L 95 50 L 85 65 L 75 85 L 55 85 L 40 75 L 30 80 Z"
                fill="url(#grid)"
                className="opacity-50"
              />

              {/* Connections */}
              {cities.map((city, i) => (
                 cities.map((target, j) => {
                   if (i >= j) return null; // Avoid duplicates
                   // Only draw some connections to avoid clutter
                   if (Math.random() > 0.7) return null;
                   
                   return (
                     <motion.line
                        key={`${i}-${j}`}
                        x1={city.x}
                        y1={city.y}
                        x2={target.x}
                        y2={target.y}
                        stroke="currentColor"
                        strokeWidth="0.2"
                        className="text-primary/20"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                     />
                   )
                 })
              ))}

              {/* Cities */}
              {cities.map((city, index) => (
                <motion.g
                  key={city.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + (index * 0.1) }}
                  onMouseEnter={() => setActiveCity(index)}
                  onMouseLeave={() => setActiveCity(null)}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="1.5"
                    className="fill-background stroke-primary stroke-[0.5] group-hover:fill-primary transition-colors duration-300"
                  />
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="4"
                    className="fill-primary/20 animate-pulse"
                  />
                  
                  {/* Label */}
                  <foreignObject x={city.x - 10} y={city.y - 8} width="20" height="6">
                     <div className="text-[3px] text-center font-bold text-white uppercase bg-black/50 backdrop-blur-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                       {city.name}
                     </div>
                  </foreignObject>
                </motion.g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
