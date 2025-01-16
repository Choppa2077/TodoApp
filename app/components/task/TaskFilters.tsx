'use client';

import { useTaskStore } from '@/app/store/taskStore';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const TaskFilters = () => {
  const setFilter = useTaskStore((state) => state.setFilter);

  const handleFilterChange = (filter: 'all' | 'completed' | 'incomplete') => {
    setFilter(filter);
  };
 
  return (
    <div className='p-4'>
      <Select defaultValue="all"  onValueChange={(value) => handleFilterChange(value as 'all' | 'completed' | 'incomplete')}>
        <SelectTrigger
          className=" text-white border-none"
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
