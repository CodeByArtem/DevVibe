export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    const chatId = message.chat.id;  // Получаем chat_id из сообщения
    const userMessage = message.text; // Текст сообщения от пользователя

    // Логируем сообщение
    console.log(`Received message from ${chatId}: ${userMessage}`);

    // Ответ на сообщение пользователя
    try {
      await sendMessageToUser(chatId, 'Ваше сообщение получено!');
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// Функция для отправки сообщения пользователю
async function sendMessageToUser(chatId, message) {
  const response = await fetch(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message to the user');
  }

  return response.json();
}

