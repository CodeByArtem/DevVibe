'use client';
import React, { useEffect, useState } from 'react';
import { FaLaptopCode, FaCode, FaCogs, FaUsers } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection: React.FC = () => {
  useEffect(() => {
    // Инициализируем AOS
    AOS.init({
      duration: 3000, // Время анимации
      once: true,     // Анимация срабатывает только один раз
    });
  }, []);

  const t = useTranslations('AboutSection');
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const points = [
    {
      title: t('im'),
      description: t('points.simplicity.description'),
      icon: <FaLaptopCode className="text-purple-700 text-5xl mb-3 drop-shadow-lg" />,
      backText: t('points.simplicity.backText'),
      backgroundColor: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      textColor: 'text-white',
      headerColor: 'text-yellow-500',
      descriptionColor: 'text-yellow-400',
    },
    {
      title: t('points.cleanCode.title'),
      description: t('points.cleanCode.description'),
      icon: <FaCode className="text-blue-500 text-5xl mb-3 drop-shadow-lg" />,
      backText: t('points.cleanCode.backText'),
      backgroundColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      textColor: 'text-white',
      headerColor: 'text-red-500',
      descriptionColor: 'text-blue-900',
    },
    {
      title: t('points.learnability.title'),
      description: t('points.learnability.description'),
      icon: <FaCogs className="text-green-500 text-5xl mb-3 drop-shadow-lg" />,
      backText: t('points.learnability.backText'),
      backgroundColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      textColor: 'text-white',
      headerColor: 'text-green-500',
      descriptionColor: 'text-black',
    },
    {
      title: t('points.teamwork.title'),
      description: t('points.teamwork.description'),
      icon: <FaUsers className="text-yellow-500 text-5xl mb-3 drop-shadow-lg" />,
      backText: t('points.teamwork.backText'),
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
        backgroundAttachment: 'fixed', // Картинка будет фиксирована, не будет скроллится
      }}
    >
      <div data-aos="fade-right" className="relative z-10 max-w-5xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-white drop-shadow-md mt-10"
          style={{
            textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 20px #00FF00',
          }}
        >
          {t('title')}
        </h2>
        <p
          className="text-xl md:text-2xl lg:text-3xl mb-10 font-bold text-black"
          style={{
            textShadow:
              '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
          }}
        >
          {t('description')}
        </p>
        <ul data-aos="fade-left"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
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
                  <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold ${point.headerColor} mb-2`}>
                    {point.title}
                  </h3>
                  <p className={`text-sm md:text-base lg:text-lg ${point.descriptionColor}`}>
                    {point.description}
                  </p>
                </div>
                <div
                  className="absolute w-full h-full bg-purple-700 text-white rounded-lg shadow-lg flex flex-col items-center justify-center transform rotate-y-180 backface-hidden p-4"
                >
                  <p className="text-sm md:text-base lg:text-lg">{point.backText}</p>
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
