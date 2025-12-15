import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

export default function TermsPage() {
  const { dict } = useLanguage();

  const getObligationItems = () => {
    const items = dict.terms.obligations.items;
    return Array.isArray(items) ? items : [];
  };

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
            {dict.terms.title} <span className="text-primary">{dict.terms.title_span}</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            {dict.terms.effective_date}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert max-w-none space-y-12"
        >
          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">{dict.terms.agreement.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {dict.terms.agreement.text}
            </p>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">{dict.terms.services.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {dict.terms.services.text1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {dict.terms.services.text2}
            </p>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">{dict.terms.obligations.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {dict.terms.obligations.text}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              {getObligationItems().map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">{dict.terms.liability.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{dict.terms.liability.standard_title}</strong> {dict.terms.liability.standard_text}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>{dict.terms.liability.premium_title}</strong> {dict.terms.liability.premium_text}
            </p>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">{dict.terms.cancellation.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {dict.terms.cancellation.text}
            </p>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">{dict.terms.law.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {dict.terms.law.text}
            </p>
          </section>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}
