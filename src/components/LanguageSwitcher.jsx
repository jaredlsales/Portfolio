import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
    { code: 'it', label: 'Italiano' },
  ];

  return (
    <div className="relative group">
      <button className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2">
        <span>🌐</span>
        <span className="hidden sm:inline">{languages.find(l => l.code === language)?.label}</span>
        <span className="text-xs">▼</span>
      </button>

      <div className="absolute right-0 mt-2 w-40 rounded-lg bg-[#1a1a2e] border border-[#6366f1]/30 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
              language === lang.code
                ? 'bg-[#6366f1] text-white font-semibold'
                : 'text-gray-300 hover:bg-[#6366f1]/20'
            } ${lang.code === 'en' ? 'rounded-t-lg' : ''} ${lang.code === 'it' ? 'rounded-b-lg' : ''}`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
