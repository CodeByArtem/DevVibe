import React from 'react';

import Link from 'next/link';


const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          My Portfolio
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-green-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-green-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-500">
Contact
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  );
};


export default Header;