import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from '../utils/fetchTasks';

export const useFetchTasks = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });
};
