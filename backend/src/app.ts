import express from 'express';
import taskRoutes from './routes/tasks';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.use('/fetchAllTasks', taskRoutes);
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Kazam Assignment API' );
});

export default app;
