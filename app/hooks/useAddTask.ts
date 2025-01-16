import { useTaskStore } from '@/app/store/taskStore';
import { ITask } from '../types/task';

export const useAddTask = () => {
  const setTasks = useTaskStore((state) => state.setTasks);
  const tasks = useTaskStore((state) => state.tasks);

  const addTask = (newTask: ITask) => {
    setTasks([newTask, ...tasks]); 
  };

  return addTask;
};
