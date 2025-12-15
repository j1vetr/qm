import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

export default function PrivacyPage() {
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
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: January 1, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert max-w-none space-y-12"
        >
          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At QuickMove AG ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our relocation services and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">2. Data We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-white">Identity Data:</strong> includes first name, last name, username or similar identifier, title.</li>
              <li><strong className="text-white">Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong className="text-white">Relocation Data:</strong> includes inventory lists, floor plans, photos of items to be moved, and specific access details for properties.</li>
              <li><strong className="text-white">Financial Data:</strong> includes bank account and payment card details.</li>
            </ul>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">3. How We Use Your Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li>To perform the contract we are about to enter into or have entered into with you (providing moving services).</li>
              <li>To manage our relationship with you which will include notifying you about changes to our terms or privacy policy.</li>
              <li>To coordinate with third-party partners (e.g., external lift operators, customs agents) necessary for your move.</li>
            </ul>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">5. Contact Details</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br /><br />
              <strong>QuickMove AG</strong><br />
              Bahnhofstrasse 1<br />
              8001 Zürich<br />
              Switzerland<br />
              Email: privacy@quickmove.ch
            </p>
          </section>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}
