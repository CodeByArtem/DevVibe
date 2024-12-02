'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Отключение прокрутки страницы, когда меню открыто
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Отключаем скролл
    } else {
      document.body.style.overflow = 'auto'; // Включаем скролл
    }

    return () => {
      document.body.style.overflow = 'auto'; // Восстанавливаем скролл при размонтировании
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Логотип */}
        <Link
          href="/"
          aria-label="Home"
          className="block md:pointer-events-auto pointer-events-none"
        >
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
        </Link>

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
