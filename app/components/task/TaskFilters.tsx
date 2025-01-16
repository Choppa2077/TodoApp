import { useTaskStore } from '@/app/store/taskStore';
import { ITask } from '@/app/types/task';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

// interface ITaskFilterProps {
//   tasks: ITask[];
//   setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
// }

const TaskFilters = () => {
  const setFilter = useTaskStore((state) => state.setFilter);

  const handleFilterChange = (filter: 'all' | 'completed' | 'incomplete') => {
    setFilter(filter);
  };
 
  return (
    <div>
      <Select defaultValue="all"  onValueChange={(value) => handleFilterChange(value as 'all' | 'completed' | 'incomplete')}>
        <SelectTrigger
          className="w-[180px]  text-white border-none"
          style={{ backgroundColor: 'rgb(22, 22, 22)' }}
        >
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent className="border-none">
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="incomplete">Uncompleted</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TaskFilters;
