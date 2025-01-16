'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TaskCard from './TaskCard';
import { useEffect } from 'react';
import { useTaskStore } from '@/app/store/taskStore';
import { useFetchTasks } from '@/app/hooks/useFetchTasks';
import { useToggleTaskStatus } from '@/app/hooks/useToggleTaskStatus';
import { useDeleteTask } from '@/app/hooks/useDeleteTask';
import { Skeleton } from '@/components/ui/skeleton';

const TaskList = () => {
  const filter = useTaskStore((state) => state.filters);
  const setTasks = useTaskStore((state) => state.setTasks);
  const tasks = useTaskStore((state) => state.tasks);
  const { data: fetchedTasks, isLoading } = useFetchTasks();
  const toggleTaskStatus = useToggleTaskStatus();
  const deleteTask = useDeleteTask();

  useEffect(() => {
    if (fetchedTasks) {
      setTasks(fetchedTasks);
    }
  }, [fetchedTasks, setTasks]);

  const filteredTasks = tasks?.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  if (isLoading) {
    return (
      <Skeleton
        className="rounded-2xl w-full h-full"
        style={{ backgroundColor: 'rgb(22, 22, 22)' }}
      />
    );
  }

  return (
    <Card
      className=" rounded-2xl border-none"
      style={{ backgroundColor: 'rgb(22, 22, 22)' }}
    >
      <CardHeader>
        <CardTitle className="text-white">Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        {filteredTasks?.map((task) => (
          <TaskCard
            key={task.id}
            userId={task.userId}
            title={task.title}
            id={task.id}
            completed={task.completed}
            onToggle={() => toggleTaskStatus(task.id)}
            onDelete={() => deleteTask(task.id)}
            description={task.description}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default TaskList;
