'use client';
import React, { useState } from 'react';
import { FaLaptopCode, FaCode, FaCogs, FaUsers } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const points = [
    {
      title: 'Простота и удобство',
      description: 'Разрабатываю интерфейсы, которые интуитивно понятны и адаптивны.',
      icon: <FaLaptopCode className="text-purple-700 text-6xl mb-4 drop-shadow-lg" />,
      backText: 'Простота и UX — ключ к успеху.',
      backgroundColor: 'bg-gradient-to-r from-blue-500 to-indigo-600', // Синий фон
      textColor: 'text-white', // Цвет текста
      headerColor: 'text-yellow-500', // Цвет заголовка
      descriptionColor: 'text-yellow-400', // Цвет описания (Желтый)
    },
    {
      title: 'Чистый код',
      description: 'Всегда стремлюсь писать легко читаемый и поддерживаемый код.',
      icon: <FaCode className="text-blue-500 text-6xl mb-4 drop-shadow-lg" />,
      backText: 'Чистый код облегчает поддержку.',
      backgroundColor: 'bg-gradient-to-r from-yellow-500 to-orange-500', // Желтый фон
      textColor: 'text-white', // Цвет текста
      headerColor: 'text-red-500', // Цвет заголовка
      descriptionColor: 'text-blue-900', // Цвет описания (Синий)
    },
    {
      title: 'Обучаемость',
      description: 'Изучаю новые технологии, чтобы оставаться на передовой.',
      icon: <FaCogs className="text-green-500 text-6xl mb-4 drop-shadow-lg" />,
      backText: 'React, TypeScript и многое другое.',
      backgroundColor: 'bg-gradient-to-r from-purple-500 to-pink-500', // Фиолетовый фон
      textColor: 'text-white', // Цвет текста
      headerColor: 'text-green-500', // Цвет заголовка
      descriptionColor: 'text-black', // Цвет описания
    },
    {
      title: 'Командная работа',
      description: 'Ценю обмен опытом и знаю, как работать с другими разработчиками.',
      icon: <FaUsers className="text-yellow-500 text-6xl mb-4 drop-shadow-lg" />,
      backText: 'Сотрудничество создает шедевры.',
      backgroundColor: 'bg-gradient-to-r from-green-500 to-teal-500', // Зеленый фон
      textColor: 'text-white', // Цвет текста
      headerColor: 'text-blue-500', // Цвет заголовка
      descriptionColor: 'text-red-900', // Цвет описания (Красный)
    },
  ];

  return (
    <section   id="about" className="py-20 px-6 text-white relative overflow-hidden bg-cover bg-center"
             style={{ backgroundImage: 'url(/images/background-pattern.webp)' }}>
     ть <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Заголовок */}
        <h2 className="text-5xl md:text-4xl font-extrabold mb-12 text-white drop-shadow-md">
          Обо мне
        </h2>

        {/* Основной текст с насыщенным красным цветом и выделением */}
        <p
          className="text-2xl md:text-2xl mb-12 font-bold text-green-100"
          style={{
            textShadow: '0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(128, 0, 255, 1), 0 0 40px rgba(128, 0, 255, 0.8), 0 0 50px rgba(128, 0, 255, 0.6)'
          }}
        >
          Меня зовут Артем, и я верю, что хороший код — это основа успешного веб-приложения.
          Я уделяю внимание каждой детали: от структуры кода до удобства интерфейса для пользователей.
        </p>

        {/* Список карточек */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className="relative w-full h-64 cursor-pointer"
            >
              {/* Контейнер для переворота */}
              <div
                className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-in-out ${
                  activeCard === index ? 'rotate-y-180' : ''
                }`}
              >
                {/* Фронтальная сторона */}
                <div
                  className={`absolute w-full h-full rounded-lg shadow-lg flex flex-col items-center justify-center backface-hidden p-6 ${point.backgroundColor}`}
                >
                  {point.icon}
                  <h3 className={`text-xl font-semibold ${point.headerColor} mb-3`}>{point.title}</h3>
                  <p className={`${point.descriptionColor}`}>{point.description}</p>
                </div>

                {/* Задняя сторона */}
                <div
                  className="absolute w-full h-full bg-purple-700 text-white rounded-lg shadow-lg flex flex-col items-center justify-center transform rotate-y-180 backface-hidden p-6">
                  <p className="text-lg">{point.backText}</p>
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
