import { io } from 'socket.io-client';
import { api } from '../constants/api';

const socket = io(api); // Adjust the URL if deployed elsewhere

export const addTask = (taskContent: string) => {
  socket.emit('add', taskContent); // Emit task add event to backend
};

export const listenForTasks = (callback: (taskContent: string) => void) => {
  socket.on('add', callback); // Listen for new tasks from server
};
