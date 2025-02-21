import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const  t  = useTranslations("MobileMenu"); // Инициализация хука перевода
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Эффект для закрытия меню при клике вне области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        toggleMenu(); // Закрыть меню при клике вне области
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleMenu]);

  // Плавная прокрутка для якорных ссылок и закрытие меню
  const handleSmoothScroll = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
      event.preventDefault();
      const id = target.getAttribute('href')?.substring(1);
      const element = document.getElementById(id!);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        toggleMenu(); // Закрыть меню после перехода
      }
    }
  };

  return (
    <div className="relative">
      {/* Бургер-меню */}
      <button
        ref={buttonRef}
        onClick={toggleMenu} // Открытие/закрытие меню
        className="md:hidden flex flex-col items-center justify-center space-y-1 p-2 rounded-lg focus:outline-none"
        aria-label="Open menu"
      >
        <div
          className={`w-8 h-1 bg-white block transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <div
          className={`w-8 h-1 bg-white block transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        <div
          className={`w-8 h-1 bg-white block transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>

      {/* Меню */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-0 right-0 bg-gradient-to-b from-gray-800 to-black text-white p-4 transition-all duration-500 ease-out"
          style={{
            zIndex: 9999,
            width: '50vw',
            height: '100vh',
            position: 'fixed',
          }}
        >
          {/* Кнопка закрытия меню */}
          <button
            onClick={toggleMenu} // Закрытие меню при клике на крестик
            className="absolute top-4 right-4 p-2 rounded-lg text-white focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Список навигации */}
          <ul className="space-y-6 text-3xl font-medium text-center mt-40">
            <li>
              <Link
                href="#header"
                className="hover:text-green-400 focus:text-green-400 transition duration-300"
                onClick={handleSmoothScroll} // Плавная прокрутка и закрытие меню
              >
                {t('home')}
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-green-400 focus:text-green-400 transition duration-300"
                onClick={handleSmoothScroll} // Плавная прокрутка и закрытие меню
              >
                {t('about')}
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:text-green-400 focus:text-green-400 transition duration-300"
                onClick={handleSmoothScroll} // Плавная прокрутка и закрытие меню
              >
                {t('projects')}
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-green-400 focus:text-green-400 transition duration-300"
                onClick={handleSmoothScroll} // Плавная прокрутка и закрытие меню
              >
                {t('contact')}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
