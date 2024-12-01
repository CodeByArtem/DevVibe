
"use client"
import React from 'react';
import { useState, useEffect } from 'react';

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
        className="fixed bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-600"
      >
        Наверх
      </button>
    )
  );
};

export default ScrollToTopButton;
