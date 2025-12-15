import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

export default function PrivacyPage() {
  const { dict } = useLanguage();

  // Helper to ensure dictionary values are treated as arrays of objects when needed
  const getDataItems = () => {
    const items = dict.privacy.data.items;
    return Array.isArray(items) ? items : [];
  };

  const getUsageItems = () => {
    const items = dict.privacy.usage.items;
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
            {dict.privacy.title} <span className="text-primary">{dict.privacy.title_span}</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            {dict.privacy.last_updated}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert max-w-none space-y-12"
        >
          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">{dict.privacy.intro.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {dict.privacy.intro.text}
            </p>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">{dict.privacy.data.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {dict.privacy.data.text}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {getDataItems().map((item: any, index: number) => (
                <li key={index}>
                  <strong className="text-white">{item.title}</strong> {item.text}
                </li>
              ))}
            </ul>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">{dict.privacy.usage.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {dict.privacy.usage.text}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              {getUsageItems().map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">{dict.privacy.security.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {dict.privacy.security.text}
            </p>
          </section>

          <section className="p-8 border border-white/10 bg-card rounded-xl">
            <h2 className="text-2xl font-bold font-display uppercase italic mb-4 text-white">{dict.privacy.contact.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {dict.privacy.contact.text}
              <br /><br />
              <strong>{dict.privacy.contact.address.split(',')[0]}</strong><br />
              {dict.privacy.contact.address.split(',').slice(1).join(',')}<br />
              {dict.privacy.contact.email}
            </p>
          </section>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}
