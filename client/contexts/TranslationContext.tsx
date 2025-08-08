import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ru' | 'et';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

interface TranslationProviderProps {
  children: React.ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const module = await import(`../translations/${language}.ts`);
        setTranslations(module.default);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to English
        if (language !== 'en') {
          const fallback = await import('../translations/en.ts');
          setTranslations(fallback.default);
        }
      }
    };

    loadTranslations();
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
