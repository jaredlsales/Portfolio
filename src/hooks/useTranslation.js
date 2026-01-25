import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../locales/translations';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  return translations[language];
};
