import { useLanguage } from "@/lib/i18n";
import logo from "@assets/Design_1765834372701.png";
import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const { dict } = useLanguage();
  
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/">
              <a className="inline-block mb-8 group">
                <img 
                  src={logo} 
                  alt="QuickMove Logo" 
                  className="h-24 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </a>
            </Link>
            <h2 className="text-3xl font-display font-bold uppercase italic text-foreground mb-6 leading-tight">
              {dict.footer.tagline}
            </h2>
            <p className="text-muted-foreground max-w-sm text-lg leading-relaxed mb-8">
              {dict.footer.address}
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-8">Menu</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Process", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}>
                    <a className="text-muted-foreground hover:text-foreground transition-colors text-lg font-medium flex items-center group">
                      <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 h-[1px] bg-primary mr-0 group-hover:mr-2"></span>
                      {dict.nav[item.toLowerCase() === 'contact' ? 'quote' : item.toLowerCase() as keyof typeof dict.nav] || item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal / Extra Links */}
          <div className="md:col-span-3">
             <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-8">Legal</h4>
             <ul className="space-y-4">
                <li>
                  <Link href="/privacy">
                    <a className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {dict.footer.privacy}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms">
                    <a className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {dict.footer.terms}
                    </a>
                  </Link>
                </li>
             </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-muted-foreground font-light tracking-wide">
            {dict.footer.copyright}
          </p>
          
          <a 
            href="https://toov.com.tr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors bg-foreground/5 px-4 py-2 rounded-full hover:bg-foreground/10"
          >
            <span className="font-medium">Developer by TOOV</span>
            <Heart className="w-3 h-3 text-primary fill-primary animate-pulse" />
          </a>
        </div>
      </div>
    </footer>
  );
}
