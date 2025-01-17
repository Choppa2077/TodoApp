'use client';
import { HydrationBoundary, DehydratedState, QueryClientProvider } from '@tanstack/react-query';

import TaskFilters from './TaskFilters';
import AddTaskForm from './AddTaskForm';
import TasksPage from './TasksPage';
import getQueryClient from '@/app/utils/getQueryClient';

export default function TaskWrapper({ dehydratedState }: { dehydratedState: DehydratedState }) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <div className="flex flex-col items-center justify-center">
          <div className="w-3/4 h-screen py-10">
            <header className="flex justify-between items-center w-1/6">
              <TaskFilters />
              <AddTaskForm />
            </header>
            <main className="flex justify-between mt-5">
              <TasksPage />
            </main>
          </div>
        </div>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
