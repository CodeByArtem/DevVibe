import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale !== locale) {
      window.location.href = `/${newLocale}`;
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-center">
      {/* Кнопка переключателя */}
      <button
        className="flex items-center justify-between w-40 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-700 hover:bg-green-500 transition-all duration-200 cursor-pointer"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        {t('locale', { locale })}
        <span className="ml-2">⌄</span>
      </button>

      {/* Выпадающий список */}
      {isDropdownOpen && (
        <ul className="absolute left-0 w-full bg-gray-50 border border-gray-300 rounded-lg shadow-lg mt-2 z-10">
          {routing.locales.map((cur) => (
            <li
              key={cur}
              className={`px-4 py-2 text-left hover:bg-gray-200 transition-colors duration-200 cursor-pointer ${
                cur === locale ? 'text-blue-600 font-bold' : 'text-black'
              }`}
              onClick={() => handleLocaleChange(cur)}
            >
              {t('locale', { locale: cur })}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
