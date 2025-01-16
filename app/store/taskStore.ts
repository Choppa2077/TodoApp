import { create } from 'zustand';
import { ITask } from '../types/task';
interface TaskState {
  tasks: ITask[];
  filters: 'all' | 'completed' | 'incomplete';
  setTasks: (tasks: ITask[]) => void;
  setFilter: (filter: 'all' | 'completed' | 'incomplete') => void;
  addTask: (task: ITask) => void;
  selectedTask: ITask | null;
  setSelectedTask: (task: ITask) => void;
  updateTask: (updatedTask: ITask) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  filters: 'all',
  setTasks: (tasks) => set({ tasks }),
  setFilter: (filter) => set({ filters: filter }),
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  selectedTask: null,
  setSelectedTask: (task) => set({ selectedTask: task }),
  updateTask: (updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
    })),
}));
