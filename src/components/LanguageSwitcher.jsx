import React, { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const LanguageSwitcher = ({ isMobile = false }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ];

  const currentLanguage = languages.find(l => l.code === language);

  if (isMobile) {
    return (
      <div className="w-full">
        <div className="text-xs font-medium text-gray-400 mb-2 px-4">Language / Idioma</div>
        <div className="space-y-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                language === lang.code
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white'
                  : 'text-[#e2d3fd] hover:bg-white/5'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span>{lang.label}</span>
              {language === lang.code && <span className="ml-auto">✓</span>}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2">
        <span>🌐</span>
        <span className="hidden sm:inline">{currentLanguage?.label}</span>
        <span className="text-xs">▼</span>
      </button>

      <div className="absolute right-0 mt-2 w-40 rounded-lg bg-[#1a1a2e] border border-[#6366f1]/30 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-2 ${
              language === lang.code
                ? 'bg-[#6366f1] text-white font-semibold'
                : 'text-gray-300 hover:bg-[#6366f1]/20'
            } ${lang.code === 'en' ? 'rounded-t-lg' : ''} ${lang.code === 'it' ? 'rounded-b-lg' : ''}`}
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
