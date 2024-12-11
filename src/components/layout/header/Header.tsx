"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Logo from './Logo'; // Импорт вашего компонента Logo
import MobileMenu from './MobileMenu';
import LocaleSwitcher from '@/components/ui/button/LocaleSwitcher'; // Импорт компонента для мобильного меню
 // Импорт компонента для переключателя языков

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastInteractionTime, setLastInteractionTime] = useState<number>(Date.now());
  const [isAtTop, setIsAtTop] = useState(true); // Для отслеживания нахождения на верхней части страницы
  const [isMobile, setIsMobile] = useState(false); // Для отслеживания устройства

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleUserActivity = useCallback(() => {
    setLastInteractionTime(Date.now());
    if (!isHeaderVisible) setIsHeaderVisible(true);
  }, [isHeaderVisible]);

  const handleScroll = useCallback(() => {
    setIsAtTop(window.scrollY === 0);
  }, []);

  const handleTouchStart = useCallback(() => {
    setLastInteractionTime(Date.now());
    if (!isHeaderVisible) setIsHeaderVisible(true);
  }, [isHeaderVisible]);

  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Если ширина экрана меньше или равна 768px, то это мобильное устройство
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keydown', handleUserActivity);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);

    window.addEventListener('resize', checkIfMobile);
    checkIfMobile(); // Инициализация при монтировании

    const interval = setInterval(() => {
      if (isMobile && Date.now() - lastInteractionTime > 5000 && !isAtTop && !isMenuOpen) {
        setIsHeaderVisible(false); // Скрываем хедер только на мобильных устройствах
      } else {
        setIsHeaderVisible(true); // Показываем хедер при активности
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [handleUserActivity, handleScroll, handleTouchStart, lastInteractionTime, isAtTop, isMenuOpen, isMobile]);

  return (
    <header
      className={`sticky top-0 z-50 bg-gray-800 bg-opacity-75 text-white p-4 shadow-md backdrop-blur-sm transition-all duration-300 ${
        isHeaderVisible || isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
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

        <ul className="hidden md:flex space-x-8 text-lg font-medium ml-auto mr-4">
          <li>
            <Link href="#header" className="hover:text-green-400 transition duration-300" onClick={(e) => handleAnchorClick(e, 'header')}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-green-400 transition duration-300" onClick={(e) => handleAnchorClick(e, 'about')}>
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-green-400 transition duration-300" onClick={(e) => handleAnchorClick(e, 'projects')}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-green-400 transition duration-300" onClick={(e) => handleAnchorClick(e, 'contact')}>
              Contact
            </Link>
          </li>
        </ul>
        <LocaleSwitcher />
        <div className="md:hidden">
          <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
