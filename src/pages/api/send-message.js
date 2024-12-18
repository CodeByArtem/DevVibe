// /pages/api/send-message.js

export default async function handler(req, res) {
  console.log('Received request:', req.method, req.body);

  // Устанавливаем CORS заголовки
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'POST') {
    const { message } = req.body;
    if (!message || message.trim() === '') {
      console.log('No message provided or message is empty');
      return res.status(400).json({ error: 'Message is required' });
    }

    const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.log('Telegram Bot Token or Chat ID is missing');
      return res.status(500).json({ error: 'Telegram bot configuration is missing' });
    }

    const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      const response = await sendMessageToTelegram(TELEGRAM_URL, CHAT_ID, `Новое сообщение: ${message}`);
      const responseData = await response.json();
      if (!response.ok || !responseData.ok) {
        throw new Error(`Telegram API error: ${responseData.description || response.statusText}`);
      }

      const autoResponse = await sendMessageToTelegram(TELEGRAM_URL, CHAT_ID, 'Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
      const autoResponseData = await autoResponse.json();
      if (!autoResponse.ok || !autoResponseData.ok) {
        throw new Error(`Telegram API auto-response error: ${autoResponseData.description || autoResponse.statusText}`);
      }

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending message:', error);
      return res.status(500).json({ error: 'Failed to send message to Telegram' });
    }
  } else {
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