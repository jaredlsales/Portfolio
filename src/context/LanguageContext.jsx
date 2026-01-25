import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Try to get saved language from localStorage
    const saved = localStorage.getItem('portfolio-language');
    if (saved) return saved;
    
    // Try to detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'pt', 'it'].includes(browserLang)) {
      return browserLang;
    }
    
    return 'en'; // default to English
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('portfolio-language', language);
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
