"use client";

import React from 'react';
import { useTranslation } from '@/app/context/TranslationContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        onClick={() => handleLanguageChange('en')}
        aria-pressed={language === 'en'}
      >
        English
      </Button>
      <Button
        variant={language === 'bn' ? 'default' : 'outline'}
        onClick={() => handleLanguageChange('bn')}
        aria-pressed={language === 'bn'}
      >
        বাংলা
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
