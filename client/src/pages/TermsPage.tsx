import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

export default function TermsPage() {
  const { dict } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="pt-48 pb-24 container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase italic mb-6">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Effective Date: January 1, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert max-w-none space-y-12"
        >
          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and QuickMove AG ("we," "us" or "our"), concerning your access to and use of our relocation services.
            </p>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              QuickMove AG provides premium relocation, packing, transport, and storage services. The specific scope of services for your move will be detailed in your personalized Quote/Proposal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to refuse service if the conditions at the origin or destination are unsafe for our staff or if the inventory significantly differs from what was declared.
            </p>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">3. Customer Obligations</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li>Provide accurate information regarding the volume of goods and access conditions (elevator availability, parking distance, etc.).</li>
              <li>Secure necessary parking permits unless explicitly included in our service package.</li>
              <li>Ensure all personal valuables (jewelry, cash, important documents) are removed or secured prior to our arrival.</li>
              <li>Be present or have an authorized representative present during the loading and unloading process.</li>
            </ul>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">4. Insurance & Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Standard Liability:</strong> Our liability for loss or damage is limited by Swiss law and industry standards unless enhanced coverage is purchased.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Premium Coverage:</strong> We offer full-value protection plans. Claims for damage must be reported within 3 days of delivery. We are not liable for the contents of boxes packed by the owner (PBO) unless there is visible external damage to the box caused by our handling.
            </p>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">5. Cancellation Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cancellations made more than 14 days before the scheduled move date are fully refundable. Cancellations within 7-14 days are subject to a 50% fee. Cancellations within 7 days are non-refundable.
            </p>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">6. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and defined following the laws of Switzerland. QuickMove AG and yourself irrevocably consent that the courts of Zürich shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
          </section>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}
