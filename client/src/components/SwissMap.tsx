import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Package, Clock, Shield, MapPin, Users, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const cities = [
  { name: "Zürich", x: 65, y: 30, isHub: true, activeJobs: 8 },
  { name: "Geneva", x: 15, y: 75, isHub: true, activeJobs: 5 },
  { name: "Bern", x: 40, y: 50, isHub: true, activeJobs: 4 },
  { name: "Basel", x: 45, y: 15, isHub: false, activeJobs: 3 },
  { name: "Lugano", x: 75, y: 85, isHub: false, activeJobs: 2 },
  { name: "St. Gallen", x: 85, y: 25, isHub: false, activeJobs: 2 },
  { name: "Lucerne", x: 55, y: 45, isHub: false, activeJobs: 3 },
  { name: "Lausanne", x: 25, y: 65, isHub: false, activeJobs: 2 },
  { name: "Chur", x: 85, y: 55, isHub: false, activeJobs: 1 },
  { name: "Sion", x: 40, y: 80, isHub: false, activeJobs: 1 }
];

const connections = [
  [0, 3], [0, 2], [0, 5], [0, 6], [0, 8],
  [2, 1], [2, 3], [2, 7], [1, 7], [1, 9],
  [9, 4], [6, 4], [8, 4],
];

export default function SwissMap() {
  const { dict } = useLanguage();
  const [activeTrucks, setActiveTrucks] = useState<number[]>([0, 3, 7]);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const stats = [
    { icon: Truck, value: "2,847", label: dict.home.map_stats.moves, color: "from-blue-500 to-cyan-500" },
    { icon: MapPin, value: "26", label: dict.home.map_stats.cantons, color: "from-green-500 to-emerald-500" },
    { icon: Users, value: "98%", label: dict.home.map_stats.satisfaction, color: "from-purple-500 to-pink-500" },
    { icon: Clock, value: "24h", label: dict.home.map_stats.quote_time, color: "from-orange-500 to-amber-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTrucks(prev => {
        const newTrucks = [...prev];
        const randomIndex = Math.floor(Math.random() * newTrucks.length);
        newTrucks[randomIndex] = Math.floor(Math.random() * connections.length);
        return newTrucks;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-card relative overflow-hidden dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-4">{dict.home.map_subtitle}</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase italic mb-4 text-white">
            {dict.home.map_title.split(' ').slice(0, 2).join(' ')} <span className="text-primary">{dict.home.map_title.split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {dict.home.map_desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10" 
                   style={{ background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }} />
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute -top-4 left-4 md:left-8 z-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-500/20 border border-green-500/50 rounded-lg px-4 py-2 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">31 {dict.home.map_labels.active_moves}</span>
            </motion.div>
          </div>

          <div className="absolute -top-4 right-4 md:right-8 z-20">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/20 border border-primary/50 rounded-lg px-4 py-2 flex items-center gap-2"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">{dict.home.map_labels.fully_insured}</span>
            </motion.div>
          </div>

          <div className="bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 p-6 md:p-12">
            <div className="relative aspect-[4/3] md:aspect-[16/9] min-h-[400px] md:min-h-[600px]">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(215 100% 50%)" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="hsl(215 100% 60%)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(215 100% 50%)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                <path
                  d="M 15 75 L 20 65 L 18 55 L 25 50 L 30 45 L 35 35 L 45 15 L 55 12 L 65 15 L 75 15 L 85 20 L 92 30 L 95 50 L 90 60 L 85 65 L 75 75 L 75 85 L 65 88 L 50 85 L 40 80 L 30 75 L 20 80 L 15 75 Z"
                  fill="rgba(59, 130, 246, 0.05)"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="0.3"
                />

                <g stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.08">
                  <path d="M 30 45 L 30 75" />
                  <path d="M 30 60 L 60 60" />
                  <path d="M 60 40 L 60 70" />
                  <path d="M 40 30 Q 55 40 70 30" fill="none" />
                  <path d="M 40 70 Q 55 60 70 70" fill="none" />
                </g>
                
                {connections.map(([startIdx, endIdx], i) => {
                  const start = cities[startIdx];
                  const end = cities[endIdx];
                  const isActive = activeTrucks.includes(i);
                  
                  return (
                    <g key={`conn-${i}`}>
                      <line
                        x1={start.x}
                        y1={start.y}
                        x2={end.x}
                        y2={end.y}
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="0.15"
                      />
                      
                      {isActive && (
                        <>
                          <motion.line
                            x1={start.x}
                            y1={start.y}
                            x2={end.x}
                            y2={end.y}
                            stroke="url(#routeGradient)"
                            strokeWidth="0.4"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                          
                          <motion.g
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: "100%" }}
                            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                          >
                            <motion.circle
                              r="1.2"
                              fill="hsl(215 100% 50%)"
                              filter="url(#glow)"
                              initial={{ cx: start.x, cy: start.y }}
                              animate={{ cx: end.x, cy: end.y }}
                              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                            />
                          </motion.g>
                        </>
                      )}
                    </g>
                  );
                })}

                {cities.map((city, index) => (
                  <g
                    key={city.name}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredCity(city.name)}
                    onMouseLeave={() => setHoveredCity(null)}
                  >
                    {city.isHub && (
                      <motion.circle
                        cx={city.x}
                        cy={city.y}
                        r="4"
                        fill="none"
                        stroke="hsl(215 100% 50%)"
                        strokeWidth="0.1"
                        initial={{ scale: 1, opacity: 0.3 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}

                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={city.isHub ? "2" : "1.2"}
                      fill={city.isHub ? "hsl(215 100% 50%)" : "white"}
                      className="drop-shadow-lg"
                      filter="url(#glow)"
                    />

                    {city.isHub && (
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r="0.8"
                        fill="white"
                      />
                    )}

                    <text
                      x={city.x}
                      y={city.y - (city.isHub ? 4 : 3)}
                      fontSize={city.isHub ? "2.8" : "2.2"}
                      fontWeight="bold"
                      fill="white"
                      textAnchor="middle"
                      className="font-display uppercase tracking-wider"
                      style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
                    >
                      {city.name}
                    </text>

                    {city.activeJobs > 0 && (
                      <g>
                        <circle
                          cx={city.x + 3}
                          cy={city.y - 2}
                          r="1.5"
                          fill="hsl(142 76% 36%)"
                          className="animate-pulse"
                        />
                        <text
                          x={city.x + 3}
                          y={city.y - 1.5}
                          fontSize="1.5"
                          fontWeight="bold"
                          fill="white"
                          textAnchor="middle"
                        >
                          {city.activeJobs}
                        </text>
                      </g>
                    )}

                    <AnimatePresence>
                      {hoveredCity === city.name && (
                        <motion.g
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                        >
                          <rect
                            x={city.x - 12}
                            y={city.y + 4}
                            width="24"
                            height="8"
                            rx="1"
                            fill="rgba(0,0,0,0.8)"
                            stroke="hsl(215 100% 50%)"
                            strokeWidth="0.2"
                          />
                          <text
                            x={city.x}
                            y={city.y + 8.5}
                            fontSize="1.8"
                            fill="white"
                            textAnchor="middle"
                          >
                            {city.activeJobs} {dict.home.map_labels.active_jobs}
                          </text>
                        </motion.g>
                      )}
                    </AnimatePresence>
                  </g>
                ))}
              </svg>

              <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 flex items-center gap-4 text-xs text-white/50">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  <span>{dict.home.map_labels.main_hub}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span>{dict.home.map_labels.service_point}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>{dict.home.map_labels.active}</span>
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-white font-bold">{dict.home.map_labels.express_delivery}</div>
                <div className="text-white/50 text-sm">{dict.home.map_labels.same_day}</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Package className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <div className="text-white font-bold">{dict.home.map_labels.pro_packing}</div>
                <div className="text-white/50 text-sm">{dict.home.map_labels.special_care}</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <div className="text-white font-bold">{dict.home.map_labels.premium_service}</div>
                <div className="text-white/50 text-sm">{dict.home.map_labels.vip_moving}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
