import React from 'react';
import { FaInstagram, FaTiktok, FaLinkedin, FaTelegram } from 'react-icons/fa';

const ContactSections: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Фоновое изображение */}
      <div
        style={{
          backgroundImage: 'url(\'/images/matrixconact.webp\')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
        }}
        className="absolute inset-0"
      ></div>

      {/* Контент */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-12"
           style={{
             textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 20px #00FF00',
           }}>
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-3xl font-extrabold mb-8 text-white drop-shadow-md">Свяжитесь со мной</h2>
          <p className="text-lg md:text-xl mb-4 text-black font-bold"
             style={{
               textShadow:
                 '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
             }}>Я всегда готов помочь</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0">
          {/* Список ссылок */}
          <div className="text-center md:text-left md:w-1/3 space-y-4 mb-8 md:mb-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-black text-xl hover:text-[#E4405F] hover:text-shadow-md text-shadow"
            >
              <FaInstagram className="text-2xl" />
              <span>Instagram</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-black text-xl hover:text-[#F4F4F4] hover:text-shadow-md text-shadow"
            >
              <FaTiktok className="text-2xl" />
              <span>TikTok</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-black text-xl hover:text-[#0A66C2] hover:text-shadow-md text-shadow"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-black text-xl hover:text-[#0088cc] hover:text-shadow-md text-shadow"
            >
              <FaTelegram className="text-2xl" />
              <span>Telegram</span>
            </a>
          </div>

          {/* Форма */}
          <form className="space-y-4 md:w-1/3">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full px-4 py-2 bg-black bg-opacity-70 text-white rounded-md border border-green-500 focus:outline-none focus:ring focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Ваш email"
              className="w-full px-4 py-2 bg-black bg-opacity-70 text-white rounded-md border border-green-500 focus:outline-none focus:ring focus:ring-green-500"
            />
            <textarea
              placeholder="Ваше сообщение"
              className="w-full px-4 py-2 bg-black bg-opacity-70 text-white rounded-md border border-green-500 focus:outline-none focus:ring focus:ring-green-500 h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-black font-bold rounded-md hover:bg-green-600 transition"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>

      {/* Полупрозрачный фон */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>
    </section>
  );
};

export default ContactSections;
