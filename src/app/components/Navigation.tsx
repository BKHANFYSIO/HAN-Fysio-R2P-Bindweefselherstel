'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';
import { useState, useEffect, useRef } from 'react';

type Topic = {
  title: string;
  description: string;
  icon: string;
} & (
  | { comingSoon: true }
  | { comingSoon?: false; path: string }
);

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [showTopics, setShowTopics] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowTopics(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const topics: Topic[] = [
    {
      title: "Bindweefselherstel",
      path: "/topics/bindweefselherstel",
      description: "Leer over het herstelproces van bindweefsel en de factoren die hierbij een rol spelen.",
      icon: "🔬",
      comingSoon: false
    },
    {
      title: "Trainingsleer Principes",
      description: "Ontdek de fundamentele principes van effectieve training en periodisering.",
      icon: "💪",
      comingSoon: true
    },
    {
      title: "Anatomie & Fysiologie",
      description: "Verdiep je in de structuur en werking van het menselijk lichaam.",
      icon: "🫀",
      comingSoon: true
    },
    {
      title: "Biomechanica",
      description: "Begrijp de mechanische principes van menselijke beweging.",
      icon: "⚡",
      comingSoon: true
    }
  ];

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
              <a
                href="https://han-fysio-learningpage.vercel.app/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                {t('backToLearningPlatform')}
              </a>
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
              <div className="relative flex items-center">
                <button
                  ref={buttonRef}
                  onClick={() => setShowTopics(!showTopics)}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    pathname.startsWith('/topics')
                      ? 'text-[#e6007e] border-b-2 border-[#e6007e]'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {t('topicsNav')}
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform ${showTopics ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showTopics && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 top-full mt-1 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                  >
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('availableTopics')}</h3>
                      <div className="space-y-2">
                        {topics.map((topic, index) => (
                          topic.comingSoon ? (
                            <div key={index} className="p-3 bg-gray-50 rounded-lg opacity-50">
                              <div className="flex items-center">
                                <span className="text-2xl mr-3">{topic.icon}</span>
                                <div>
                                  <h4 className="font-medium text-gray-400">{t(`topics.${topic.title}`)}</h4>
                                  <p className="text-sm text-gray-400">{t(`topics.${topic.title}Description`)}</p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={index}
                              href={topic.path}
                              className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={() => setShowTopics(false)}
                            >
                              <div className="flex items-center">
                                <span className="text-2xl mr-3">{topic.icon}</span>
                                <div>
                                  <h4 className="font-medium text-gray-900">{t(`topics.${topic.title}`)}</h4>
                                  <p className="text-sm text-gray-600">{t(`topics.${topic.title}Description`)}</p>
                                </div>
                              </div>
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
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