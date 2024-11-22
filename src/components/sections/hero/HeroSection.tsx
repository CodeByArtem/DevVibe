'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCss3Alt, FaGit, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const HeroSection: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleMouseEnter = (icon: string) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const icons = [
    { icon: FaReact, color: 'text-blue-500', ring: 'ring-blue-500', name: 'react' },
    { icon: FaHtml5, color: 'text-orange-500', ring: 'ring-orange-500', name: 'html' },
    { icon: FaCss3Alt, color: 'text-blue-600', ring: 'ring-blue-600', name: 'css' },
    { icon: FaNodeJs, color: 'text-green-500', ring: 'ring-green-500', name: 'node' },
    { icon: FaJsSquare, color: 'text-yellow-500', ring: 'ring-yellow-500', name: 'js' },
    { icon: FaGit, color: 'text-black', ring: 'ring-black', name: 'git' },
  ];

  return (
    <section
      className="text-white flex flex-col md:flex-row items-center justify-center px-6 pb-10 relative"
      style={{
        backgroundImage: 'url(/images/matrix.webp)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>

      <div className="w-64 h-64 md:w-96 md:h-[28rem] mb-10 md:mb-0 flex-shrink-0 flex justify-center">
        <Image
          className="rounded-xl object-contain object-center shadow-lg shadow-green-500/50 glow-effect"
          src="/images/hotoroom.png"
          alt="Артем за компьютером"
          width={564}
          height={1280}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
      </div>

      {/* Контент */}
      <div
        className="flex-1 max-w-xl text-center md:text-left md:pl-10 flex flex-col justify-center sm:mt-8 mx-auto md:mx-0"> {/* mx-auto на мобильных, md:mx-0 на больших экранах */}

        {/* Печатающий заголовок */}
        <h1
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-white sm:mb-[30px] h-[80px]"
          style={{
            textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 20px #00FF00',
          }}>
          <Typewriter
            options={{
              strings: ['Привет, я Артем, Full-Stack Разработчик'],
              loop: false,
              autoStart: true,
              deleteSpeed: Infinity,
              delay: 75,
              cursor: '',
            }}
          />
        </h1>

        {/* Описание */}
        <div className="text-lg md:text-xl mb-8">
          Создаю современные веб-приложения с чистым кодом и адаптивным дизайном.
        </div>

        {/* Иконки */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
          {icons.map(({ icon: Icon, color, ring, name }) => (
            <li
              key={name}
              className={`p-4 rounded-full bg-white shadow-lg transform transition-transform duration-300 hover:scale-110 ${hoveredIcon === name ? `ring-4 ${ring}` : ''}`}
              onMouseEnter={() => handleMouseEnter(name)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon className={`text-5xl ${color} md:text-6xl sm:text-4xl`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
