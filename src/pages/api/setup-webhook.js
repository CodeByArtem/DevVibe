
async function handler(req, res) {
  const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const WEBHOOK_URL = `https://portfolio-amber-six-98.vercel.app/api/webhook`;  // Убедитесь, что URL корректный

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: WEBHOOK_URL }),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error setting up webhook:', error);
    res.status(500).json({ error: 'Failed to set up webhook' });
  }
}

export default handler;  // Один экспорт в конце
