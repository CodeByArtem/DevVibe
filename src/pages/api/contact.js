import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';

// Ваш обработчик API
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Валидация данных
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Все поля должны быть заполнены' });
    }

    try {
      // Сохраняем данные в Firestore
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date()
      });

      // Если нужно, используем docRef для дальнейших операций
      console.log('Документ добавлен с ID: ', docRef.id);

      return res.status(200).json({ message: 'Сообщение отправлено успешно' });
    } catch (error) {
      console.error('Ошибка при сохранении данных:', error);
      return res.status(500).json({ error: 'Ошибка сервера' });
    }
  } else {
    return res.status(405).json({ error: 'Метод не поддерживается' });
  }
}
