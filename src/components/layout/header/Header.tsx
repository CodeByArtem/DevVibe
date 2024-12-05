'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastInteractionTime, setLastInteractionTime] = useState<number>(Date.now());
  const [isAtTop, setIsAtTop] = useState(true); // Для отслеживания нахождения на верхней части страницы

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault();
    window.location.reload(); // Обновляем страницу
  };

  const handleUserActivity = () => {
    setLastInteractionTime(Date.now()); // Обновляем время последней активности
    if (!isHeaderVisible) {
      setIsHeaderVisible(true); // Показываем хедер, если была активность
    }
  };

  // Отслеживаем прокрутку страницы
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true); // Находимся в верхней части страницы
    } else {
      setIsAtTop(false); // Страница прокручена вниз
    }
  };

  // Отслеживаем касания на мобильных устройствах
  const handleTouchStart = () => {
    setLastInteractionTime(Date.now()); // Обновляем время последней активности
    if (!isHeaderVisible) {
      setIsHeaderVisible(true); // Показываем хедер при касании экрана
    }
  };

  useEffect(() => {
    // Добавляем обработчики событий для активности пользователя
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keydown', handleUserActivity);
    window.addEventListener('scroll', handleScroll); // Отслеживаем прокрутку
    window.addEventListener('touchstart', handleTouchStart); // Отслеживаем касания для мобильных устройств

    const interval = setInterval(() => {
      // Если прошло больше 3 секунд без активности на мобильных устройствах (меньше времени)
      if (Date.now() - lastInteractionTime > 3000 && !isAtTop) {
        setIsHeaderVisible(false); // Скрываем хедер
      }
    }, 1000);

    return () => {
      clearInterval(interval); // Очистка интервала при размонтировании компонента
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('scroll', handleScroll); // Убираем обработчик прокрутки
      window.removeEventListener('touchstart', handleTouchStart); // Убираем обработчик касаний
    };
  }, [lastInteractionTime, isAtTop]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-gray-800 bg-opacity-75 text-white p-4 shadow-md backdrop-blur-sm transition-all duration-300 ${
        isHeaderVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Логотип */}
        <a
          href="/"
          aria-label="Home"
          className="block md:pointer-events-auto pointer-events-none"
          onClick={handleLogoClick}
        >
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
        </a>

        {/* Навигация для больших экранов */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link href="#home" className="hover:text-green-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-green-400 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-green-400 transition duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-green-400 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Бургер-меню для мобильных устройств */}
        <div className="md:hidden">
          <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
