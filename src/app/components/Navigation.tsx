'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="https://han-fysio-learningpage.vercel.app/" className="text-[#e6007e] font-bold text-xl">
                R2P
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  pathname === '/'
                    ? 'text-[#e6007e] border-b-2 border-[#e6007e]'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {t('home')}
              </Link>
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  pathname.startsWith('/topics')
                    ? 'text-[#e6007e] border-b-2 border-[#e6007e]'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Onderwerpen
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {(['NL', 'EN', 'DE'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  language === lang
                    ? 'bg-[#e6007e] text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 