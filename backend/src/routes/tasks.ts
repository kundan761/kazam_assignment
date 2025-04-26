import express from 'express';
import { getAllTasks } from '../controllers/taskController';

const router = express.Router();

router.get('/', getAllTasks);

export default router;
