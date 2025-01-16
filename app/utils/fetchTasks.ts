import { ITask } from '../types/task';
import apiClient from './apiClient';

export const fetchTasks = async (): Promise<ITask[]> => {
  const response = await apiClient.get('/todos');
  return response.data;
};
