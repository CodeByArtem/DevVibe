"use client";
import React, { useState } from 'react';
import { FaInstagram, FaTiktok, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';  // Импортируем ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Подключаем стили для тостов

const ContactSections: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const formErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name) {
      formErrors.name = 'Пожалуйста, введите ваше имя';
      isValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Пожалуйста, введите корректный email';
      isValid = false;
    }

    if (!formData.message) {
      formErrors.message = 'Пожалуйста, введите сообщение';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Проверка формы перед отправкой
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    console.log('Отправка данных формы началась:', formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Ответ сервера:', response);

      const data = await response.json();

      console.log('Ответ от сервера (JSON):', data);

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        toast.success('Сообщение отправлено успешно!');  // Тост об успешной отправке
      } else {
        toast.error(data.error || 'Произошла ошибка при отправке');  // Тост об ошибке
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      toast.error('Ошибка сервера');  // Тост ошибки сервера
    } finally {
      setIsSubmitting(false);
      console.log('Отправка завершена');
    }
  };

  return (
    <>
      <section id="contact" className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
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

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-12" style={{ textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 20px #00FF00' }}>
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-3xl font-extrabold mb-8 text-white drop-shadow-md">Свяжитесь со мной</h2>
            <p className="text-lg md:text-xl mb-4 text-black font-bold" style={{ textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00' }}>
              Я всегда готов помочь
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0">
            <ul className="text-center md:text-left md:w-1/3 space-y-4 mb-8 md:mb-0">
              <li>
                <a href="https://www.instagram.com/angelic._.heart" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-start space-x-2 text-[#E4405F] text-xl hover:text-[#F4F4F4] hover:text-shadow-md text-shadow font-bold">
                  <FaInstagram className="text-2xl" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@angelic_heart?_t=8rwOvjqoDJQ&_r=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-start space-x-2 text-[#010101] text-xl hover:text-[#F4F4F4] hover:text-shadow-md text-shadow font-bold">
                  <FaTiktok className="text-2xl" />
                  <span>TikTok</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/artem-zhuravlov-713547259/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-start space-x-2 text-[#0A66C2] text-xl hover:text-[#F4F4F4] hover:text-shadow-md text-shadow font-bold">
                  <FaLinkedin className="text-2xl" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://t.me/Artem_Smailik" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-start space-x-2 text-[#0088cc] text-xl hover:text-[#F4F4F4] hover:text-shadow-md text-shadow font-bold">
                  <FaTelegram className="text-2xl" />
                  <span>Telegram</span>
                </a>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="space-y-4 md:w-1/3">
              <div className="space-y-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  className="w-full px-4 py-2 bg-black bg-opacity-70 text-white rounded-md border border-green-500 focus:outline-none focus:ring focus:ring-green-500"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ваш email"
                  className="w-full px-4 py-2 bg-black bg-opacity-70 text-white rounded-md border border-green-500 focus:outline-none focus:ring focus:ring-green-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ваше сообщение"
                  className="w-full px-4 py-2 bg-black bg-opacity-70 text-white rounded-md border border-green-500 focus:outline-none focus:ring focus:ring-green-500 h-32"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-green-500 text-black font-bold rounded-md hover:bg-green-600 transition"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить'}
              </button>
            </form>
          </div>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>
      </section>

      {/* Добавляем ToastContainer в компонент */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          zIndex: 9999, // Убедитесь, что тосты всегда находятся поверх других элементов
          padding: '10px', // Даем отступы, чтобы не перекрывались с краями экрана
          top: '20px', // Установите верхний отступ для тостов
          left: '50%', // Центрируем тосты по горизонтали
          transform: 'translateX(-50%)', // Центрирование
        }}
      />

    </>
  );
};

export default ContactSections;
