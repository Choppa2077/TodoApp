'use client';

import { Button } from '@/components/ui/button';
import TaskList from './components/task/TaskList';
import TaskView from './components/task/TaskView';
import TaskFilters from './components/task/TaskFilters';
import { useState } from 'react';
import { ITask } from './types/task';

export default function Home() {
 
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" w-3/4 h-screen py-10">
        <TaskFilters />
        <div className="flex justify-between mt-5">
          <TaskList />
          <TaskView />
        </div>
      </div>
    </div>
  );
}
