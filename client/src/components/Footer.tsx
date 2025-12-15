import { useLanguage } from "@/lib/i18n";
import logo from "@assets/qm_logo_1765811309290.png";

export default function Footer() {
  const { dict } = useLanguage();
  
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <img 
              src={logo} 
              alt="QuickMove Logo" 
              className="h-16 w-auto mb-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500" 
            />
            <p className="text-xl font-display font-bold uppercase italic text-white mb-6">
              {dict.footer.tagline}
            </p>
            <p className="text-muted-foreground max-w-sm">
              {dict.footer.address}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Process", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider">
                    {dict.nav[item.toLowerCase() === 'contact' ? 'quote' : item.toLowerCase() as keyof typeof dict.nav] || item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Connect</h4>
            <ul className="space-y-4">
              {["Instagram", "LinkedIn", "Twitter"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wider">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {dict.footer.copyright}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-white text-sm transition-colors">{dict.footer.privacy}</a>
            <a href="#" className="text-muted-foreground hover:text-white text-sm transition-colors">{dict.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
