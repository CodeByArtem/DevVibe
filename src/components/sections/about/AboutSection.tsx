'use client';
import React, { useState } from 'react';
import { FaLaptopCode, FaCode, FaCogs, FaUsers } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const points = [
    {
      title: 'Простота и удобство',
      description: 'Разрабатываю интерфейсы, которые интуитивно понятны и адаптивны.',
      icon: <FaLaptopCode className="text-purple-700 text-5xl mb-3 drop-shadow-lg" />,
      backText: 'Простота и UX — ключ к успеху.',
      backgroundColor: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      textColor: 'text-white',
      headerColor: 'text-yellow-500',
      descriptionColor: 'text-yellow-400',
    },
    {
      title: 'Чистый код',
      description: 'Всегда стремлюсь писать легко читаемый и поддерживаемый код.',
      icon: <FaCode className="text-blue-500 text-5xl mb-3 drop-shadow-lg" />,
      backText: 'Чистый код облегчает поддержку.',
      backgroundColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      textColor: 'text-white',
      headerColor: 'text-red-500',
      descriptionColor: 'text-blue-900',
    },
    {
      title: 'Обучаемость',
      description: 'Изучаю новые технологии, чтобы оставаться на передовой.',
      icon: <FaCogs className="text-green-500 text-5xl mb-3 drop-shadow-lg" />,
      backText: 'React, TypeScript и многое другое.',
      backgroundColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      textColor: 'text-white',
      headerColor: 'text-green-500',
      descriptionColor: 'text-black',
    },
    {
      title: 'Командная работа',
      description: 'Ценю обмен опытом и знаю, как работать с другими разработчиками.',
      icon: <FaUsers className="text-yellow-500 text-5xl mb-3 drop-shadow-lg" />,
      backText: 'Сотрудничество создает шедевры.',
      backgroundColor: 'bg-gradient-to-r from-green-500 to-teal-500',
      textColor: 'text-white',
      headerColor: 'text-blue-500',
      descriptionColor: 'text-red-900',
    },
  ];

  return (
    <section
      id="about"
      className="py-10 px-4 text-white relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: 'url(/images/matrix.webp)',  // Фоновое изображение
        backgroundSize: 'cover', // Изображение будет покрывать всю секцию
        backgroundPosition: 'top center', // Картинка будет зафиксирована сверху и по центру по горизонтали
        backgroundAttachment: 'fixed', // Картинка будет фиксирована, не будет скроллиться
      }}
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2
          className="text-4xl md:text-3xl font-extrabold mb-8 text-white drop-shadow-md mt-10"
          style={{
            textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 20px #00FF00',
          }}
        >
          Обо мне
        </h2>
        <p
          className="text-xl md:text-lg mb-10 font-bold text-black"
          style={{
            textShadow:
              '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
          }}
        >
          Я создаю современные веб-приложения с адаптивным дизайном и фокусом на чистый, поддерживаемый код. Мои
          технологии
          включают HTML, CSS, JavaScript, React, Node.js и другие. Моя цель — помочь клиентам достичь их целей с помощью
          эффективных и качественных решений.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((point, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className="relative w-full h-48 sm:h-64 lg:h-80 cursor-pointer transform transition-all duration-300"
            >
              <div
                className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-in-out ${
                  activeCard === index ? 'rotate-y-180' : ''
                }`}
              >
                <div
                  className={`absolute w-full h-full rounded-lg shadow-lg flex flex-col items-center justify-center backface-hidden p-4 ${point.backgroundColor}`}
                >
                  {point.icon}
                  <h3 className={`text-lg font-semibold ${point.headerColor} mb-2`}>
                    {point.title}
                  </h3>
                  <p className={`${point.descriptionColor}`}>{point.description}</p>
                </div>
                <div
                  className="absolute w-full h-full bg-purple-700 text-white rounded-lg shadow-lg flex flex-col items-center justify-center transform rotate-y-180 backface-hidden p-4"
                >
                  <p className="text-sm">{point.backText}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
