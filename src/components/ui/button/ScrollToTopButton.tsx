"use client"
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Показ кнопки при прокрутке вниз
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 md:w-16 md:h-16 bg-transparent text-red-500 border-2 border-red-500 rounded-full shadow-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-green-500 hover:text-black z-50"
      >
        <span className="text-4xl font-bold">&#8593;</span> {/* Стрелка вверх */}
      </button>
    )
  );
};

export default ScrollToTopButton;
