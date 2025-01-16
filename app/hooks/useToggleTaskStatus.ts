import { useTaskStore } from '@/app/store/taskStore';

export const useToggleTaskStatus = () => {
  const setTasks = useTaskStore((state) => state.setTasks);
  const tasks = useTaskStore((state) => state.tasks);

  const toggleTaskStatus = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return toggleTaskStatus;
};
