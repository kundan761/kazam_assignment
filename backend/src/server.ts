import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import app from './app';
import { setupSocket } from './sockets';
import './config/mongo';
import './config/redis';
import dotenv from 'dotenv';
dotenv.config();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: '*',
  },
});

// Setup WebSocket
setupSocket(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
