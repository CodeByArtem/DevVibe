import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const Logo: React.FC = () => {
  const phrases = [
    'Прекрасная разработка для вас!',
    'Технологии для будущего!',
    'Инновации в каждую деталь!',
    'Преобразуем ваши идеи в реальность!',
    'Создаём проекты с душой!',
    'Ваш успех начинается с нас!',
    'Делаем мир удобнее с каждым шагом!',
  ];

  // Массив с цветами для каждой фразы
  const colors = [
    'from-pink-500 via-red-500 to-yellow-500',
    'from-blue-500 via-indigo-500 to-purple-500',
    'from-green-500 via-teal-500 to-blue-500',
    'from-yellow-500 via-orange-500 to-red-500',
    'from-cyan-500 via-emerald-500 to-green-500',
    'from-pink-600 via-purple-700 to-indigo-800',
    'from-teal-400 via-blue-400 to-purple-500',
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Меняем фразы каждые 8 секунд
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 8000); // Каждые 8 секунд меняем фразу

    return () => clearInterval(intervalId); // Очищаем интервал, когда компонент размонтируется
  }, [phrases.length]); // Пустой массив зависимостей

  const textToType = phrases[currentPhraseIndex];
  const gradientColor = colors[currentPhraseIndex]; // Получаем цвет для текущей фразы

  return (
    <div
      className="group flex items-center space-x-2 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      suppressHydrationWarning // Добавлено suppressHydrationWarning
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

      <span
        className={`text-2xl font-bold tracking-wide bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent transition-transform duration-[2000ms] ease-in-out group-hover:translate-x-[525px]`}
      >
        Full-Stack Legend
      </span>

      {/* Эффект печатания с использованием typewriter-effect */}
      <div
        className={`absolute left-7 text-lg bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent whitespace-nowrap transform transition-all duration-500 ease-in-out`}
      >
        {isHovered && (
          <Typewriter
            key={currentPhraseIndex} // Используем key для перерисовки компонента
            onInit={(typewriter) => {
              typewriter
                .typeString(textToType)
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            options={{
              delay: 75, // скорость печатания
              cursor: '|', // курсор
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Logo;
