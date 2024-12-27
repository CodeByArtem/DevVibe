'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { faq } from '@/hooks/faqTelegramBot/useFaq';

const ChatWidget: React.FC = () => {
  const t = useTranslations();
  const [message, setMessage] = useState<string>(''); // Начинаем с пустого сообщения
  const [isSending, setIsSending] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false); // Состояние для видимости формы

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormVisible(true); // Показываем форму через 10 секунд
    }, 10000); // 10 секунд

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async () => {
    if (!message.trim()) {
      console.log('Message is empty. Not sending.');
      return;
    }

    console.log('Sending message:', message);
    setIsSending(true);
    setResponseMessage('');

    const lowerCaseMessage = message.toLowerCase();

    // Ищем ключевые слова в сообщении, чтобы найти ответ из FAQ
    const foundAnswer = findAnswerByKey(lowerCaseMessage);

    if (foundAnswer) {
      // Если foundAnswer - массив строк, объединяем его в одну строку
      setResponseMessage(Array.isArray(foundAnswer) ? foundAnswer.join(' ') : foundAnswer);
      setMessage('');
      setIsSending(false);
      return;
    }
    // Если не нашли в FAQ, отправляем запрос на сервер
    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      console.log('Response from server:', data);

      if (data.success) {
        setResponseMessage(t('form.messageSent')); // Используем перевод
        setMessage(''); // Очистить поле ввода после отправки
      } else {
        setResponseMessage(t('form.sendingError')); // Используем перевод
      }
    } catch (error) {
      console.error('Error during message sending:', error);
      setResponseMessage(t('form.sendingError')); // Используем перевод
    } finally {
      setIsSending(false);
    }
  };

  // Функция для поиска ответа по ключевому слову
  const findAnswerByKey = (message: string) => {
    // Проходим по ключам в FAQ
    for (const key in faq) {
      if (message.includes(key.toLowerCase())) {
        return faq[key]; // Возвращаем найденный ответ
      }
    }
    return null; // Если нет совпадений, возвращаем null
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage(); // Убедитесь, что промис обрабатывается
    }
  };

  const handleClose = () => {
    setIsFormVisible(false); // Скрыть форму чата
  };

  return (
    <div
      className={`fixed bottom-40 right-4 p-4 bg-white bg-opacity-50 shadow-lg rounded-lg border border-gray-200 w-full max-w-xs z-[999] ${!isFormVisible ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000 ease-in-out`}
    >
      <div className="flex flex-col space-y-2">
        <button
          onClick={handleClose}
          className="absolute top-[-1px] right-[-1px] p-0 bg-gray-200 rounded-full text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyPress}
          placeholder={message.trim() === '' ? t('form.placeholder') : ''} // Показывается только когда поле пустое
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-opacity-50 text-sm md:text-base"
        />

        <button
          onClick={handleSendMessage}
          disabled={isSending || !message.trim()}
          className={`p-2 text-white rounded-lg ${isSending ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} focus:outline-none text-sm md:text-base`}
        >
          {isSending ? t('form.sending') : t('form.send')}
        </button>

        {responseMessage && (
          <p
            className={`text-sm ${responseMessage.includes('ошибка') ? 'text-red-500' : 'text-black'} bg-white`}
          >
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatWidget;
