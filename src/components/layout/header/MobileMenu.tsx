import React, { useEffect, useRef } from 'react';

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const menuRef = useRef<HTMLDivElement>(null);  // Ссылка на меню
  const buttonRef = useRef<HTMLButtonElement>(null); // Ссылка на кнопку бургер-меню

  // Обработчик клика вне меню (только для закрытия)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Если меню открыто и клик был за пределами меню и кнопки бургер-меню
      if (
        isMenuOpen &&
        menuRef.current && !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        toggleMenu(); // Закрыть меню
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, toggleMenu]);

  return (
    <div className="relative">
      {/* Бургер-меню */}
      <button
        ref={buttonRef}  // Указываем ссылку на кнопку
        onClick={toggleMenu}
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
      <div
        ref={menuRef}  // Указываем ссылку на меню
        className={`absolute top-0 right-0 bg-gradient-to-b from-gray-800 to-black text-white p-4 transition-all duration-500 ease-out 
          ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        style={{
          zIndex: 9999,
          width: '50vw',  // Установите ширину меню на 50% от ширины экрана
          height: '100vh', // Установлена высота на весь экран
          position: 'fixed', // Меню фиксируется
        }}
      >
        {/* Кнопка закрытия меню в правом верхнем углу */}
        <button
          onClick={toggleMenu}
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
            <a
              href="#home"
              className="hover:text-green-400 focus:text-green-400 transition duration-300"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-green-400 focus:text-green-400 transition duration-300"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-green-400 focus:text-green-400 transition duration-300"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-green-400 focus:text-green-400 transition duration-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
