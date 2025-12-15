import { useEffect } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "@/lib/i18n";

export function useDocumentTitle() {
  const [location] = useLocation();
  const { dict, language } = useLanguage();

  useEffect(() => {
    const baseTitle = "QuickMove.ch";
    let pageTitle = "";

    // Map routes to titles based on language
    if (location === "/") {
      pageTitle = language === 'de' ? "Premium Umzugsservice" : 
                  language === 'fr' ? "Service de Déménagement Premium" : 
                  "Premium Relocation Services";
    } else if (location === "/services") {
      pageTitle = dict.nav.services;
    } else if (location === "/process") {
      pageTitle = dict.nav.process;
    } else if (location === "/about") {
      pageTitle = dict.nav.about;
    } else if (location === "/contact") {
      pageTitle = dict.nav.quote;
    } else if (location === "/privacy") {
      pageTitle = dict.footer.privacy;
    } else if (location === "/terms") {
      pageTitle = dict.footer.terms;
    }

    document.title = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
  }, [location, dict, language]);
}
