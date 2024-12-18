// /pages/api/send-message.js

export default async function handler(req, res) {
  // Логирование начала обработки запроса
  console.log('Received request:', req.method, req.body);

  // Устанавливаем CORS заголовки
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Обработка POST-запроса
  if (req.method === 'POST') {
    const { message } = req.body;

    // Проверка наличия сообщения
    if (!message) {
      console.log('No message provided');
      return res.status(400).json({ error: 'Message is required' });
    }

    const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    // Проверка токена и chat_id
    if (!BOT_TOKEN || !CHAT_ID) {
      console.log('Telegram Bot Token or Chat ID is missing');
      return res.status(500).json({ error: 'Telegram bot configuration is missing' });
    }

    const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      console.log('Sending message to Telegram...');

      // Отправка основного сообщения
      const response = await sendMessageToTelegram(TELEGRAM_URL, CHAT_ID, `Новое сообщение: ${message}`);

      // Проверка на успешность отправки
      if (!response.ok) {
        throw new Error(`Telegram API error: ${response.statusText}`);
      }

      console.log('Message sent to Telegram successfully');

      // Отправка автоответа
      const autoResponse = await sendMessageToTelegram(TELEGRAM_URL, CHAT_ID, 'Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');

      // Проверка автоответа
      if (!autoResponse.ok) {
        throw new Error(`Telegram API auto-response error: ${autoResponse.statusText}`);
      }

      console.log('Auto response sent successfully');

      // Отправляем успешный ответ клиенту
      return res.status(200).json({ success: true });

    } catch (error) {
      console.error('Error sending message:', error);
      return res.status(500).json({ error: 'Failed to send message to Telegram' });
    }

  } else {
    // Метод не поддерживается
    console.log(`Method ${req.method} Not Allowed`);
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// Функция для отправки сообщений в Telegram
async function sendMessageToTelegram(url, chatId, message) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message }),
  });

  return response;
}