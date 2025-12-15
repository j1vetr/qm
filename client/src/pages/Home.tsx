import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SwissMap from "@/components/SwissMap";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Intro Section - Redesigned as Bento Grid Manifesto */}
      <section className="py-32 bg-background container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <div className="max-w-2xl">
             <span className="text-primary font-bold tracking-[0.2em] uppercase block mb-6">The QuickMove Standard</span>
             <h2 className="text-5xl md:text-7xl font-display font-bold uppercase italic mb-8 leading-[0.9]">
               Relocation <br/>
               <span className="text-primary">Reimagined</span>
             </h2>
             <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
               We've stripped away the inefficiencies of traditional moving. No hidden fees, no vague timelines, no stress. Just pure, Swiss-engineered logistics delivered with white-glove precision.
             </p>
             <Link href="/services">
               <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold uppercase tracking-widest px-8 rounded-none">
                 Discover Our Method
               </Button>
             </Link>
          </div>

          {/* Bento Grid Features */}
          <div className="grid grid-cols-2 gap-4">
             {/* Card 1: Speed */}
             <div className="bg-card border border-white/10 p-8 col-span-2 md:col-span-1 hover:border-primary/50 transition-colors group">
                <div className="mb-6 p-4 bg-primary/10 w-fit rounded group-hover:bg-primary group-hover:text-white transition-colors">
                  <Clock className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold uppercase italic mb-2">Precision Timing</h3>
                <p className="text-muted-foreground text-sm">GPS-tracked fleet ensures we arrive exactly when we say we will.</p>
             </div>

             {/* Card 2: Security */}
             <div className="bg-card border border-white/10 p-8 col-span-2 md:col-span-1 hover:border-primary/50 transition-colors group">
                <div className="mb-6 p-4 bg-primary/10 w-fit rounded group-hover:bg-primary group-hover:text-white transition-colors">
                   <ShieldCheck className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold uppercase italic mb-2">Total Security</h3>
                <p className="text-muted-foreground text-sm">Full value insurance coverage and vetted personnel for peace of mind.</p>
             </div>

             {/* Card 3: Quality (Full Width) */}
             <div className="bg-card border border-white/10 p-8 col-span-2 hover:border-primary/50 transition-colors group relative overflow-hidden">
                <div className="relative z-10 flex items-center justify-between">
                   <div>
                      <div className="mb-6 p-4 bg-primary/10 w-fit rounded group-hover:bg-primary group-hover:text-white transition-colors">
                         <Award className="w-8 h-8 text-primary group-hover:text-white" />
                      </div>
                      <h3 className="text-2xl font-bold uppercase italic mb-2">Swiss Excellence</h3>
                      <p className="text-muted-foreground text-sm max-w-md">Our white-glove service isn't an upgrade—it's our standard. We handle your belongings with the care of a curator.</p>
                   </div>
                   <div className="text-9xl font-display font-black text-white/5 absolute right-0 bottom-0 pointer-events-none select-none">
                      CH
                   </div>
                </div>
             </div>
          </div>

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
