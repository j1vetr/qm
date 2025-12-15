import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@assets/qm_logo_1765811309290.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location !== "/" ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="relative z-50 group">
            {/* Logo Container with Flowing Border Animation */}
            <div className="relative p-3 rounded-xl overflow-hidden">
               {/* Background for contrast */}
               <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />
               
               {/* Animated Road Lane Border */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  <motion.rect
                    x="2" y="2" 
                    width="calc(100% - 4px)" 
                    height="calc(100% - 4px)" 
                    rx="10" 
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="12 8"
                    strokeOpacity="0.3"
                  />
                  <motion.rect
                    x="2" y="2" 
                    width="calc(100% - 4px)" 
                    height="calc(100% - 4px)" 
                    rx="10" 
                    fill="none"
                    stroke="hsl(355 100% 55%)"
                    strokeWidth="2"
                    strokeDasharray="12 8"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -40 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
               </svg>

               {/* Logo Image */}
               <img 
                 src={logo} 
                 alt="QuickMove Logo" 
                 className="h-12 w-auto relative z-20 block" 
               />
            </div>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link key={item.name} href={item.href}>
              <a className={`text-sm font-medium transition-colors uppercase tracking-widest ${location === item.href ? "text-primary" : "text-foreground hover:text-primary"}`}>
                {item.name}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-none skew-x-[-10deg]">
              <span className="skew-x-[10deg] flex items-center gap-2">
                GET QUOTE <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-background z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a 
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-display font-bold uppercase italic hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                 <a onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold uppercase italic text-primary">
                    Get Quote
                 </a>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
