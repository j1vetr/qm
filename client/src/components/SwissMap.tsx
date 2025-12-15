import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

// More accurate relative coordinates for Swiss cities
const cities = [
  { name: "Zürich", x: 65, y: 30, label: "Main Hub" },
  { name: "Geneva", x: 15, y: 75, label: "Western Hub" },
  { name: "Bern", x: 40, y: 50, label: "Capital" },
  { name: "Basel", x: 45, y: 15, label: "North Gate" },
  { name: "Lugano", x: 75, y: 85, label: "South Conn." },
  { name: "St. Gallen", x: 85, y: 25, label: "East Wing" },
  { name: "Lucerne", x: 55, y: 45, label: "Central" },
  { name: "Lausanne", x: 25, y: 65, label: "Vaud" },
  { name: "Chur", x: 85, y: 55, label: "Grisons" },
  { name: "Sion", x: 40, y: 80, label: "Valais" }
];

export default function SwissMap() {
  const { dict } = useLanguage();

  // Define specific connections to create a logical network flow
  const connections = [
    [0, 3], // Zurich - Basel
    [0, 2], // Zurich - Bern
    [0, 5], // Zurich - St Gallen
    [0, 6], // Zurich - Lucerne
    [0, 8], // Zurich - Chur
    [2, 1], // Bern - Geneva
    [2, 3], // Bern - Basel
    [2, 7], // Bern - Lausanne
    [1, 7], // Geneva - Lausanne
    [1, 9], // Geneva - Sion
    [9, 4], // Sion - Lugano (simulated route)
    [6, 4], // Lucerne - Lugano
    [8, 4], // Chur - Lugano
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-4">{dict.home.map_subtitle}</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase italic mb-6 text-white">
                {dict.home.map_title.split(' ').slice(0, 2).join(' ')} <br />
                <span className="text-primary">{dict.home.map_title.split(' ').slice(2).join(' ')}</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-white/70">
                {dict.home.map_desc}
              </p>
              
              <div className="space-y-4">
                  <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
                    <p className="text-white/40 italic">{dict.home.hover_city}</p>
                  </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-2/3 w-full h-[650px] md:h-auto md:aspect-[4/3] relative -mx-6 md:mx-0 scale-110 md:scale-100 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            {/* Stylized Switzerland Map SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Detailed Swiss Border Shape - Static Path */}
              <path
                d="M 15 75 L 20 65 L 18 55 L 25 50 L 30 45 L 35 35 L 45 15 L 55 12 L 65 15 L 75 15 L 85 20 L 92 30 L 95 50 L 90 60 L 85 65 L 75 75 L 75 85 L 65 88 L 50 85 L 40 80 L 30 75 L 20 80 L 15 75 Z"
                fill="rgba(255,255,255,0.05)"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-white/30"
              />

              {/* Canton Divider Lines (Artistic Interpretation) - Static */}
              <g
                 stroke="currentColor"
                 strokeWidth="0.1"
                 className="text-white/20"
              >
                  {/* Western Split */}
                  <path d="M 30 45 L 30 75" /> 
                  {/* Central Split */}
                  <path d="M 30 60 L 60 60" />
                  {/* Eastern Split */}
                  <path d="M 60 40 L 60 70" />
                  {/* Northern Arc */}
                  <path d="M 40 30 Q 55 40 70 30" fill="none" />
                  {/* Southern Arc */}
                  <path d="M 40 70 Q 55 60 70 70" fill="none" />
              </g>
              
              {/* Connections with Flowing Dash Animation */}
              {connections.map(([startIdx, endIdx], i) => {
                 const start = cities[startIdx];
                 const end = cities[endIdx];
                 
                 return (
                   <g key={`conn-${i}`}>
                     {/* Static Background Line */}
                     <line
                        x1={start.x}
                        y1={start.y}
                        x2={end.x}
                        y2={end.y}
                        stroke="currentColor"
                        strokeWidth="0.1"
                        className="text-white/10"
                     />
                     
                     {/* Animated Flowing Line */}
                     <motion.line
                        x1={start.x}
                        y1={start.y}
                        x2={end.x}
                        y2={end.y}
                        stroke="hsl(215 100% 50%)"
                        strokeWidth="0.15"
                        strokeDasharray="1 1"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -20 }}
                        transition={{ duration: 2 + (i % 3), repeat: Infinity, ease: "linear" }}
                        className="opacity-60"
                     />
                   </g>
                 )
              })}

              {/* Cities */}
              {cities.map((city, index) => (
                <g
                  key={city.name}
                  className="group"
                >
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="1"
                    className="fill-background stroke-primary stroke-[0.3]"
                  />
                  {/* Pulse Effect */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="3"
                    className="fill-primary/10 animate-pulse"
                  />
                  
                  {/* Permanent Label */}
                  <text
                    x={city.x} 
                    y={city.y - 3} 
                    fontSize="2.5"
                    fontWeight="bold"
                    fill="white"
                    textAnchor="middle"
                    className="font-display uppercase tracking-wider opacity-100 drop-shadow-md"
                  >
                    {city.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
