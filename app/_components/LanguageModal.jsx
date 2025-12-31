'use client';

import Image from 'next/image';

const languages = [
  { 
    id: 'en', 
    name: 'English', 
    flag: '🇬🇧',
    flagEmoji: true
  },
  { 
    id: 'ar', 
    name: 'Arabic', 
    flag: '🇦🇪',
    flagEmoji: true
  },
];

export default function LanguageModal({ isOpen, onClose, selectedLanguage, onSelect }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50"
      onClick={onClose}
    >
      <div 
        className="absolute top-20 left-[50%] transform -translate-x-1/2 lg:left-auto lg:right-[280px] lg:translate-x-0 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden min-w-[200px]"
        onClick={(e) => e.stopPropagation()}
      >
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => {
              onSelect(lang.name);
              onClose();
            }}
            className={`
              w-full px-6 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors
              ${selectedLanguage === lang.name ? 'bg-blue-50' : ''}
            `}
          >
            <span className="text-2xl">{lang.flag}</span>
            <span className={`font-medium ${selectedLanguage === lang.name ? 'text-blue-600' : 'text-gray-700'}`}>
              {lang.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}