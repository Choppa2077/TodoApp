'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import TaskCard from './TaskCard';
import { ITask } from '@/app/types/task';
import { useEffect, useState } from 'react';
import { useTaskStore } from '@/app/store/taskStore';

// interface ITasksListProps {
//     tasks: ITask[];
//     setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
// }

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const filter = useTaskStore((state) => state.filters);
  const setTasks = useTaskStore((state) => state.setTasks);

  useEffect(() => {
    setTasks([
      {
        userId: 1,
        id: 1,
        title: 'Похавать',
        description: 'Description 1',
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: 'Сходить в зал',
        description: 'Description 3',
        completed: false,
      },
    ]);
  }, [setTasks]);

  const onToggle = (id: number) => {
    const updatedTasks = tasks
      .map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      )
      .sort((a, b) => Number(a.completed) - Number(b.completed));

    setTasks(updatedTasks);
  };

  const onDelete = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <Card
      className="w-[550px] rounded-2xl border-none"
      style={{ backgroundColor: 'rgb(22, 22, 22)' }}
    >
      <CardHeader>
        <CardTitle className="text-white">Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            userId={task.userId}
            title={task.title}
            id={task.id}
            completed={task.completed}
            onToggle={onToggle}
            onDelete={onDelete}
            description={task.description}
          />
        ))}
      </CardContent>
      
    </Card>
  );
};

export default TaskList;
