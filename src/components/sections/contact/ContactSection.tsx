import React from 'react';

const ContactSections: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
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

      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 py-12">
        <h3 className="text-4xl font-bold mb-4 text-green-500 text-shadow">Свяжитесь со мной</h3>
        <p className="text-lg md:text-xl mb-5 text-green-500 text-shadow">Я всегда готов помочь</p>
        <div className="space-y-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-green-500 hover:text-gray-400 text-shadow"
          >
            Instagram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-green-500 hover:text-gray-400 text-shadow"
          >
            TikTok
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-green-500 hover:text-gray-400 text-shadow"
          >
            LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-green-500 hover:text-gray-400 text-shadow"
          >
            Telegram
          </a>
        </div>
        <form className="space-y-4 max-w-md mx-auto mt-6">
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

      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>
    </section>
  );
};

export default ContactSections;
