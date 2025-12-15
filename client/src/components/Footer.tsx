export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold font-display tracking-tighter italic">
            QUICK<span className="text-primary">MOVE</span>.CH
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} QuickMove.ch. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
