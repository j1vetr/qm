import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@assets/Design_1765834372701.png";
import { useLanguage } from "@/lib/i18n";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { dict, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: dict.nav.home, href: "/" },
    { name: dict.nav.services, href: "/services" },
    { name: dict.nav.process, href: "/process" },
    { name: dict.nav.about, href: "/about" },
  ];

  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'fr', label: 'FR' }
  ];

  const getFlag = (lang: string) => {
    switch(lang) {
      case 'en': 
        return (
          <svg viewBox="0 0 60 30" className="w-6 h-auto rounded-sm">
            <clipPath id="s">
              <path d="M0,0 v30 h60 v-30 z"/>
            </clipPath>
            <clipPath id="t">
              <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
            </clipPath>
            <g clipPath="url(#s)">
              <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
              <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
            </g>
          </svg>
        );
      case 'de':
        return (
          <svg viewBox="0 0 5 3" className="w-6 h-auto rounded-sm border border-white/10">
            <rect width="5" height="3" y="0" x="0" fill="#000"/>
            <rect width="5" height="2" y="1" x="0" fill="#D00"/>
            <rect width="5" height="1" y="2" x="0" fill="#FFCE00"/>
          </svg>
        );
      case 'fr':
        return (
          <svg viewBox="0 0 3 2" className="w-6 h-auto rounded-sm border border-white/10">
            <rect width="1" height="2" x="0" fill="#0055A4"/>
            <rect width="1" height="2" x="1" fill="#FFF"/>
            <rect width="1" height="2" x="2" fill="#EF4135"/>
          </svg>
        );
      default: return null;
    }
  };

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
                    stroke="hsl(215 100% 50%)"
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
                 className="h-20 w-auto relative z-20 block" 
               />
            </div>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={`text-sm font-medium transition-colors uppercase tracking-widest ${location === item.href ? "text-primary" : "text-foreground hover:text-primary"}`}>
                {item.name}
              </a>
            </Link>
          ))}
          
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button variant="ghost" className="text-white hover:text-primary font-bold flex items-center gap-3 px-3">
                 <div className="scale-125 flex items-center">
                    {getFlag(language)}
                 </div>
                 <span className="opacity-50 font-light">|</span>
                 {language.toUpperCase()}
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black/90 backdrop-blur-xl border-white/10 min-w-[140px] flex flex-col items-center p-2">
              {langs.map((l) => (
                <DropdownMenuItem 
                  key={l.code} 
                  onClick={() => setLanguage(l.code as any)}
                  className={`cursor-pointer w-full justify-center flex items-center gap-3 py-2 text-base ${language === l.code ? "text-primary font-bold bg-white/5" : "text-white hover:bg-white/10"}`}
                >
                  <div className="scale-125 flex items-center">
                     {getFlag(l.code)}
                  </div>
                  {l.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/contact">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-none skew-x-[-10deg]">
              <span className="skew-x-[10deg] flex items-center gap-2">
                {dict.nav.quote} <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           {/* Mobile Lang Switcher */}
           <DropdownMenu>
             <DropdownMenuTrigger asChild>
               <Button variant="ghost" className="text-white font-bold flex items-center gap-3 px-3 h-12 text-lg">
                 <div className="scale-150 flex items-center">
                    {getFlag(language)}
                 </div>
                 <span className="opacity-50 font-light">|</span>
                 {language.toUpperCase()}
               </Button>
             </DropdownMenuTrigger>
             <DropdownMenuContent align="center" className="bg-black/90 backdrop-blur-xl border-white/10 min-w-[150px]">
               {langs.map((l) => (
                 <DropdownMenuItem 
                   key={l.code} 
                   onClick={() => setLanguage(l.code as any)}
                   className={`cursor-pointer text-lg py-3 flex items-center gap-3 ${language === l.code ? "text-primary font-bold" : "text-white"}`}
                 >
                   <div className="scale-125 flex items-center">
                      {getFlag(l.code)}
                   </div>
                   {l.label}
                 </DropdownMenuItem>
               ))}
             </DropdownMenuContent>
           </DropdownMenu>

           <button
             className="text-white z-50 relative"
             onClick={() => setIsOpen(!isOpen)}
           >
             {isOpen ? <X /> : <Menu />}
           </button>
        </div>
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
                <Link key={item.href} href={item.href}>
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
                    {dict.nav.quote}
                 </a>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
