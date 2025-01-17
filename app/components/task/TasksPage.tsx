'use client';

import TaskList from './TaskList';
import TaskView from './TaskView';
import { useState, useEffect } from 'react';

const TasksPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`w-full ${isMobile ? '' : 'flex'} gap-4`}>
      <div className="w-full md:w-1/2 p-4">
        <TaskList />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <TaskView />
      </div>
    </div>
  );
};

export default TasksPage;
