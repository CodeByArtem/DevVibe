'use client';
import React, { useState, useEffect, useCallback } from 'react';

import Logo from './Logo';
import MobileMenu from './MobileMenu';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LocaleSwitcher from '@/components/ui/button/LocaleSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastInteractionTime, setLastInteractionTime] = useState<number>(Date.now());
  const [isAtTop, setIsAtTop] = useState(true); // Для отслеживания нахождения на верхней части страницы
  const t = useTranslations('Header');
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault();
    // Сохраняем поведение перехода по ссылке, но без перезагрузки страницы
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  };
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Плавная прокрутка
        block: 'start', // Прокрутка к началу элемента
      });
    }
  };
  // Обновляем время последней активности и показываем хедер, если была активность
  const handleUserActivity = useCallback(() => {
    setLastInteractionTime(Date.now());
    if (!isHeaderVisible) setIsHeaderVisible(true);
  }, [isHeaderVisible]);

  // Отслеживаем прокрутку страницы
  const handleScroll = useCallback(() => {
    setIsAtTop(window.scrollY === 0); // Находимся ли в верхней части страницы
  }, []);

  // Отслеживаем касания на мобильных устройствах
  const handleTouchStart = useCallback(() => {
    setLastInteractionTime(Date.now());
    if (!isHeaderVisible) setIsHeaderVisible(true); // Показываем хедер при касании экрана
  }, [isHeaderVisible]);

  useEffect(() => {
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keydown', handleUserActivity);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);

    const interval = setInterval(() => {
      // Если прошло больше 5 секунд без активности на мобильных устройствах
      if (Date.now() - lastInteractionTime > 5000 && !isAtTop && !isMenuOpen) {
        setIsHeaderVisible(false); // Скрываем хедер
      }
    }, 1000);

    return () => {
      clearInterval(interval); // Очистка интервала при размонтировании компонента
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleUserActivity, handleScroll, handleTouchStart, lastInteractionTime, isAtTop, isMenuOpen]);

  return (
    <header
      className={`sticky  top-0 z-50 bg-gray-800 bg-opacity-75 text-white p-4 shadow-md backdrop-blur-sm transition-all duration-300 ${isHeaderVisible || isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center ">
        <Link
          href="/"
          aria-label="Home"
          className="block md:pointer-events-auto pointer-events-none"
          onClick={handleLogoClick}
        >
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
        </Link>

        {/* Навигация для больших экранов */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium ml-auto mr-4 ">
          <li>
            <Link href="#header" className="hover:text-green-400 transition duration-300"
                  onClick={(e) => handleAnchorClick(e, 'header')}>
              {t('home')}
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-green-400 transition duration-300"
                  onClick={(e) => handleAnchorClick(e, 'about')}>
              {t('about')}
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-green-400 transition duration-300"
                  onClick={(e) => handleAnchorClick(e, 'projects')}>
              {t('projects')}
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-green-400 transition duration-300"
                  onClick={(e) => handleAnchorClick(e, 'contact')}>
              {t('contact')}
            </Link>
          </li>
        </ul>
        <LocaleSwitcher />
        {/* Бургер-меню для мобильных устройств */}
        <div className="md:hidden">
          <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
