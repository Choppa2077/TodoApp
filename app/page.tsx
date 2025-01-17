import { fetchTasks } from '@/app/utils/fetchTasks';
import TaskWrapper from './components/task/TaskWrapper';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export default async function Home() {
  console.log("Fetching tasks on the server...");
  const queryClient = new QueryClient();
  // Предзагрузка задач на сервере
  await queryClient.prefetchQuery({ queryKey: ['tasks'], queryFn: fetchTasks });
  const dehydratedState = dehydrate(queryClient);

  return <TaskWrapper dehydratedState={dehydratedState} />;
}
