import { useState, useEffect } from 'react';
import az from './az.json';
import en from './en.json';

const useTranslation = () => {
  const [language, setLanguage] = useState(localStorage.getItem('preferredLang') || 'az');
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = () => {
      try {
        const data = language === 'az' ? az : en;
        setTranslations(data);
        localStorage.setItem('preferredLang', language);
        setLoading(false);
      } catch (error) {
        console.error('Error loading translations:', error);
        setLoading(false);
      }
    };

    setLoading(true);
    loadTranslations();
  }, [language]);

  const switchLanguage = () => {
    setLanguage(prev => prev === 'az' ? 'en' : 'az');
  };

  return {
    t: translations,
    switchLanguage,
    currentLanguage: language,
    loading
  };
};

export default useTranslation;