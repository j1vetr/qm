import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SwissMap from "@/components/SwissMap";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Intro Section */}
      <section className="py-24 bg-background container mx-auto px-6">
        <div className="max-w-4xl">
           <h2 className="text-4xl md:text-6xl font-display font-bold uppercase italic mb-8 leading-tight">
             Relocation <br/>
             <span className="text-stroke text-transparent">Reimagined</span>
           </h2>
           <p className="text-xl text-muted-foreground mb-8">
             We are not just a moving company. We are your logistical partners. 
             Combining Swiss precision with modern technology, we deliver an unmatchable relocation experience.
           </p>
           <Link href="/services">
             <Button variant="link" className="text-primary text-lg p-0 h-auto font-bold uppercase tracking-widest hover:text-white hover:no-underline group">
               Explore Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
             </Button>
           </Link>
        </div>
      </section>

      <SwissMap />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-32 bg-primary text-white text-center">
         <div className="container mx-auto px-6">
           <h2 className="text-5xl md:text-8xl font-display font-black uppercase italic mb-8">
             Ready to Move?
           </h2>
           <Link href="/contact">
             <Button size="lg" className="bg-white text-primary hover:bg-black hover:text-white text-xl px-12 py-8 rounded-none skew-x-[-10deg] font-bold transition-all">
                <span className="skew-x-[10deg]">GET YOUR QUOTE</span>
             </Button>
           </Link>
         </div>
      </section>

      <Footer />
    </div>
  );
}
