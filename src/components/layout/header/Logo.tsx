import React, { useState, useEffect, useCallback } from 'react';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import { useTranslations } from 'next-intl';


const Logo: React.FC = () => {
  const t = useTranslations('Logo');


  const phrases = [
    t('phrase_1'),
    t('phrase_2'),
    t('phrase_3'),
    t('phrase_4'),
    t('phrase_5'),
    t('phrase_6'),
    t('phrase_7'),
  ];

  const colors = [
    'from-pink-500 via-red-500 to-yellow-500',
    'from-blue-500 via-indigo-500 to-purple-500',
    'from-green-500 via-teal-500 to-blue-500',
    'from-yellow-500 via-orange-500 to-red-500',
    'from-cyan-500 via-emerald-500 to-green-500',
    'from-pink-600 via-purple-700 to-indigo-800',
    'from-teal-400 via-blue-400 to-purple-500',
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 8000); // Меняем фразу каждые 8 секунд

    return () => clearInterval(intervalId);
  }, [phrases.length]);

  const textToType = phrases[currentPhraseIndex];
  const gradientColor = colors[currentPhraseIndex];

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Предотвращаем стандартное поведение
    event.stopPropagation(); // Останавливаем распространение события
    setIsClicked((prevState) => !prevState); // Переключаем состояние по клику
  };

  const TypewriterEffect = useCallback(() => {
    return (
      <Typewriter
        onInit={(typewriter: TypewriterClass) => {
          typewriter
            .typeString(textToType)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
        options={{
          delay: 75,
          cursor: '|',
        }}
      />
    );
  }, [textToType]);

  return (
    <div
      className="group flex items-center space-x-2 relative"
      suppressHydrationWarning
    >

      <svg
        className="w-8 h-8 text-gradient transition-all duration-300 transform hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="url(#gradient)"
        aria-label="Логотип компании"
        role="img"
        focusable="false"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7e5f" />
            <stop offset="100%" stopColor="#feb47b" />
          </linearGradient>
        </defs>
        <use href="/svg/symbol-defs.svg#icon-logo" />
      </svg>

      {windowWidth > 1200 && (
        <span
          className={`text-2xl font-bold tracking-wide bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`}
          style={{
            transform: isClicked ? 'translateX(400px)' : 'translateX(0)',
            transition: 'transform 0.5s ease-in-out',
          }}
          onClick={handleClick} // Обработчик клика
        >
          Full-Stack Legend
        </span>
      )}

      {windowWidth > 1200 && (
        <div
          className={`absolute left-7 text-lg bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent whitespace-nowrap`}
        >
          {isClicked && <TypewriterEffect />}
        </div>
      )}
    </div>
  );
};

export default Logo;
