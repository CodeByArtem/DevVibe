'use client';
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Логотип */}
        <Link href="/" aria-label="Home">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
        </Link>

        {/* Навигация */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <Link href="/" className="hover:text-green-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-400 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-green-400 transition duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-400 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
