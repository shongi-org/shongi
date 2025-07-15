'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { TranslationKey, NestedTranslations, getNestedTranslation } from '@/types/translation-keys';

interface Translations {
  [key: string]: string | NestedTranslations;
}

interface TranslationContextType {
  language: string;
  translations: Translations;
  changeLanguage: (lang: string) => void;
  t: (key: TranslationKey) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Cache for loaded translations to avoid repeated fetching
const loadedLanguages: { [lang: string]: Translations } = {};

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>('en'); // Default language
  const [translations, setTranslations] = useState<Translations>({});

  const fetchTranslations = useCallback(async (lang: string): Promise<Translations> => {
    if (loadedLanguages[lang]) return loadedLanguages[lang];
    try {
      const response = await fetch(`/locales/${lang}.json`);
      const data = await response.json();
      loadedLanguages[lang] = data;
      return data;
    } catch (error) {
      console.error(`Error loading translations for ${lang}:`, error);
      return {};
    }
  }, []);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const data = await fetchTranslations(language);
        setTranslations(data);
      } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback to English in case of any error
        if (language !== 'en') {
          try {
            const fallbackData = await fetchTranslations('en');
            setTranslations(fallbackData);
          } catch (e) {
            console.error('Error loading fallback translations for en:', e);
            setTranslations({});
          }
        } else {
          setTranslations({});
        }
      }
    };

    loadTranslations();
  }, [language, fetchTranslations]);

  const changeLanguage = (lang: string) => {
    if (lang !== language) {
      setLanguage(lang);
    }
  };

  const t = (key: TranslationKey): string => {
    // Try current language
    const result = getNestedTranslation(translations, key);
    if (result) return result;

    // Fallback to English if not already in English
    if (language !== 'en' && loadedLanguages['en']) {
      const fallback = getNestedTranslation(loadedLanguages['en'], key);
      if (fallback) return fallback;
    }

    // Final fallback: return the key itself
    return key;
  };

  return (
    <TranslationContext.Provider value={{ language, translations, changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
