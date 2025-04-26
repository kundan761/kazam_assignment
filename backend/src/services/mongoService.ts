import mongoose from 'mongoose';
import { Task } from '../types/task';

const collectionName = process.env.MONGO_COLLECTION || 'assignment_kundan';

const taskSchema = new mongoose.Schema<Task>({
  content: { type: String, required: true },
  timestamp: { type: String, required: true },
});

const TaskModel = mongoose.model<Task>('Task', taskSchema, collectionName);

export const insertManyToMongo = async (tasks: Task[]) => {
  try {
    await TaskModel.insertMany(tasks);
  } catch (err) {
    console.error('Failed to insert tasks to MongoDB:', err);
  }
};

export const fetchAllFromMongo = async (): Promise<Task[]> => {
  return TaskModel.find().sort({ timestamp: -1 }).lean();
};
