import { useTaskStore } from '@/app/store/taskStore';

export const useDeleteTask = () => {
  const setTasks = useTaskStore((state) => state.setTasks);
  const tasks = useTaskStore((state) => state.tasks);

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks); 
  };

  return deleteTask;
};
