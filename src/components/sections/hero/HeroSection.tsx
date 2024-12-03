'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaCss3Alt, FaGit, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'; // Добавим FaReact
import { SiNextdotjs } from 'react-icons/si'; // Иконка Next.js

import Typewriter from 'typewriter-effect';

const CHARACTERS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/~`';


const HeroSection: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleMouseEnter = (icon: string) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const icons = [
    { icon: FaHtml5, color: 'text-orange-500', name: 'html', label: 'HTML' },
    { icon: FaCss3Alt, color: 'text-blue-600', name: 'css', label: 'CSS' },
    { icon: FaNodeJs, color: 'text-green-500', name: 'node', label: 'Node.js' },
    { icon: FaJsSquare, color: 'text-yellow-500', name: 'js', label: 'JavaScript' },
    { icon: FaGit, color: 'text-red-600', name: 'git', label: 'Git' },
    { icon: SiNextdotjs, color: 'text-blue-100', name: 'next', label: 'Next.js' },
    { icon: FaReact, color: 'text-blue-500', name: 'react', label: 'React' }, // Добавим React
  ];

  useEffect(() => {
    // Инициализируем матричную анимацию при монтировании компонента
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const FONT_SIZE = 16;
    let columns: Column[] = []; // Типизация массива columns
    let columnsCount = 0;

    const initCanvasSize = () => {
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;
    };

    const initColumns = () => {
      columnsCount = canvas.width / FONT_SIZE;
      columns = [];
      for (let i = 0; i < columnsCount; i++) {
        columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context!));
      }
    };

    class Column {
      x: number;
      y: number;
      fontSize: number;
      canvasHeight: number;
      context: CanvasRenderingContext2D;

      constructor(x: number, fontSize: number, canvasHeight: number, context: CanvasRenderingContext2D) {
        this.x = x;
        this.y = 0;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
        this.context = context;
      }

      drawSymbol() {
        if (this.y === 0 && Math.random() < 0.98) {
          return;
        }

        const characterIndex = Math.floor(Math.random() * CHARACTERS.length);
        const symbol = CHARACTERS[characterIndex];

        this.context.fillText(symbol, this.x, this.y);

        if (this.y > this.canvasHeight) {
          this.y = 0;
        } else {
          this.y += this.fontSize;
        }
      }
    }

    const animate = () => {
      context!.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context!.fillRect(0, 0, canvas.width, canvas.height);

      context!.fillStyle = 'green';
      context!.font = `bold ${FONT_SIZE}px monospace`;
      columns.forEach((column) => column.drawSymbol());

      setTimeout(() => requestAnimationFrame(animate), 50);
    };

    initCanvasSize();
    initColumns();
    animate();

    window.addEventListener('resize', () => {
      initCanvasSize();
      initColumns();
      context!.clearRect(0, 0, canvas.width, canvas.height);
    });

    return () => {
      // Очистим canvas, когда компонент будет размонтирован
      context!.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <section
      className="text-white flex flex-col md:flex-row items-center justify-center px-6 pb-10 relative"
      style={{
        backgroundImage: 'url(/images/aboutmatrix.webp)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh', // Секция занимает весь экран
      }}
    >
      {/* Canvas для матричной анимации */}
      <canvas id="matrix-canvas" className="absolute top-0 left-0 w-full h-full z-10" />

      <div className="w-64 h-64 md:w-96 md:h-[28rem] mb-10 md:mb-0 flex-shrink-0 flex justify-center z-20 mt-5 md:mt-0">
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
        className="flex-1 max-w-xl text-center md:text-left md:pl-10 flex flex-col justify-center sm:mt-8 mx-auto md:mx-0 z-20"
      >
        {/* Печатающий заголовок */}
        <h1
          className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-white  h-[80px] flex items-center justify-center"
          style={{
            textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 20px #00FF00',
            height: '80px', // фиксируем высоту для предотвращения прыжков
            overflow: 'hidden', // скрываем лишнее
          }}

        >
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
        <p
          className="text-lg md:text-xl mb-4  text-black font-bold"
          style={{
            textShadow:
              '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
          }}
        >
          Веб-разработка с акцентом на качество, производительность и удобство для клиента.
        </p>

        {/* Иконки с подписями */}
        <ul className="flex justify-center gap-8 md:gap-10 flex-wrap mt-2 md:mt-4">
          {icons.map(({ icon: Icon, color, name, label }) => (
            <li
              key={name}
              className="flex flex-col items-center p-4"
              onMouseEnter={() => handleMouseEnter(name)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Иконка с анимацией */}
              <div
                className={`relative flex justify-center items-center transition-all duration-500 transform ${
                  hoveredIcon === name ? 'scale-110 rotate-[360deg]' : 'scale-90'
                }`}
                style={{ marginTop: '-10px' }}
              >
                <Icon
                  className={`text-3xl ${color} sm:text-2xl md:text-5xl lg:text-5xl`} // уменьшаем размер на мобильных
                />
              </div>

              {/* Подпись с эффектом свечения */}
              <span
                className={`mt-2 text-lg text-black font-semibold transition-all duration-500 ${
                  hoveredIcon === name ? 'text-xl text-neon-green' : 'text-white'
                }`}
                style={{ textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00' }}
              >
        {label}
      </span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default HeroSection;
