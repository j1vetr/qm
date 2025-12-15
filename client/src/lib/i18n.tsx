import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations, Language } from './translations';

type Translations = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
  dict: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to get language from localStorage, default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('language');
      return (saved === 'en' || saved === 'de' || saved === 'fr') ? saved : 'en';
    } catch (e) {
      return 'en';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (e) {
      console.warn("Failed to save language preference");
    }
  };

  const dict = translations[language];

  // Helper function to get nested properties by string path (e.g. "home.title")
  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = dict;
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation missing for key: ${path} in language: ${language}`);
        return path;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
