import TaskList from './components/task/TaskList';
import TaskView from './components/task/TaskView';
import TaskFilters from './components/task/TaskFilters';
import AddTaskForm from './components/task/AddTaskForm';

export default function Home() {
 
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" w-3/4 h-screen py-10">
        <header className='flex justify-between items-center w-1/4'>
          <TaskFilters />
          <AddTaskForm />
        </header>
        <main className="flex justify-between mt-5">
          <TaskList />
          <TaskView />
        </main>
      </div>
    </div>
  );
}
