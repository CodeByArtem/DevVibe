import { Server } from 'socket.io';

export default function handler(req, res) {
  if (!res.socket.server.io) {
    console.log('Инициализация Socket.io');

    const io = new Server(res.socket.server, {
      path: '/api/socket',
      cors: {
        origin: 'https://portfolio-amber-six-98.vercel.app', // Ваш домен
        methods: ['GET', 'POST'],
      },
    });

    io.on('connection', (socket) => {
      console.log('Новое подключение', socket.id);
      socket.on('message', (msg) => {
        console.log('Получено сообщение:', msg);
      });
    });

    res.socket.server.io = io;
  }
  res.end();
}
