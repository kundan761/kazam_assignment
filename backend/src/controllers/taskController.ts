import { Request, Response } from 'express';
import redis from '../config/redis';
import { Task } from '../types/task';
import { fetchAllFromMongo } from '../services/mongoService';

const REDIS_KEY = process.env.REDIS_KEY || 'FULLSTACK_TASK_KUNDAN';

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const redisData = await redis.get(REDIS_KEY);
    let tasks: Task[] = [];

    if (redisData) {
      tasks = JSON.parse(redisData);
    } else {
      tasks = await fetchAllFromMongo();
    }

    res.status(200).json({ tasks });
  } catch (err) {
    console.error('Failed to fetch tasks:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
