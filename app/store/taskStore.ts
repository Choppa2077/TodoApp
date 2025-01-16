import { create } from 'zustand';
import { ITask } from '../types/task';



interface TaskState {
  tasks: ITask[];
  filters: 'all' | 'completed' | 'incomplete';
  setTasks: (tasks: ITask[]) => void;
  setFilter: (filter: 'all' | 'completed' | 'incomplete') => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  filters: 'all',
  setTasks: (tasks) => set({ tasks }),
  setFilter: (filter) => set({ filters: filter }),
}));
