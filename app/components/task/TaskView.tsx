'use client';

import { useTaskStore } from '@/app/store/taskStore';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema } from '@/app/types/TaskFormValues';
import { TaskFormValues } from '@/app/types/TaskFormValues';
import { Edit2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const TaskView = () => {
  const selectedTask = useTaskStore((state) => state.selectedTask);
  const updateTask = useTaskStore((state) => state.updateTask);
  const setSelectedTask = useTaskStore((state) => state.setSelectedTask);
  const [isEdit, setIsEdit] = useState(false);

  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: selectedTask?.title || '',
      description: selectedTask?.description || '',
    },
    mode: 'onChange',
  });

  const selectedTaskSync = useTaskStore
    .getState()
    .tasks.find((task) => task.id === selectedTask?.id);
  console.log(selectedTaskSync?.completed);

  useEffect(() => {
    if (selectedTask) {
      form.reset({
        title: selectedTask.title,
        description: selectedTask.description,
      });
    }
  }, [selectedTask, form]);

  const onSubmit = (data: TaskFormValues) => {
    if (selectedTask) {
      const currentTaskState = useTaskStore
        .getState()
        .tasks.find((task) => task.id === selectedTask.id);

      if (!currentTaskState) return;

      const newTask = {
        ...currentTaskState,
        ...data,
      };

      updateTask(newTask);

      setSelectedTask(newTask);

      setIsEdit(false);
    }
  };

  const closeEditForm = () => {
    setIsEdit(false);
    form.reset({
      title: selectedTask?.title || '',
      description: selectedTask?.description || '',
    });
  };

  if (!selectedTask) {
    return (
      <Card
        className=" rounded-2xl border-none"
        style={{ backgroundColor: 'rgb(22, 22, 22)' }}
      >
        <CardHeader>
          <CardTitle className="text-white">No Task Selected</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card
      className=" rounded-2xl border-none"
      style={{ backgroundColor: 'rgb(22, 22, 22)' }}
    >
      <CardHeader>
        <CardTitle className="text-white">Task Details</CardTitle>
      </CardHeader>
      <CardContent>
        {isEdit ? (
          <form className="space-y-4">
            <div>
              <label className="text-white block mb-2">Task Title</label>
              <Input
                {...form.register('title')}
                placeholder="Enter task title"
              />
            </div>
            <div>
              <label className="text-white block mb-2 truncate w-full">Task Description</label>
              <Textarea
                {...form.register('description')}
                placeholder="Enter task description"
              />
            </div>
            <CardFooter className="flex justify-between mt-4">
              <Button variant="outline" type="button" onClick={closeEditForm}>
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={form.handleSubmit(onSubmit)}
                disabled={!form.formState.isValid}
              >
                Save Changes
              </Button>
            </CardFooter>
          </form>
        ) : (
          <div className="flex justify-between items-center">
            <div>
              <CardTitle
                className={`text-white ${
                  selectedTaskSync?.completed ? 'text-gray-500' : ''
                }`}
              >
                {selectedTask?.title}
              </CardTitle>
              <CardDescription
                className={`text-gray-400 ${
                  selectedTaskSync?.completed ? 'text-gray-500' : ''
                }`}
              >
                {selectedTaskSync?.description}
              </CardDescription>
            </div>
            {!selectedTaskSync?.completed && (
              <Edit2
                size={20}
                color="white"
                onClick={() => setIsEdit(true)}
                className="cursor-pointer"
              />
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskView;
