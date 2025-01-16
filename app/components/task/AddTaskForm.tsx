'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
import { useState } from 'react';
import { ITask } from '@/app/types/task';
import { TaskFormValues } from '@/app/types/TaskFormValues';
import { taskSchema } from '@/app/types/TaskFormValues';
import { useAddTask } from '@/app/hooks/useAddTask';

export default function AddTaskForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const addTask = useAddTask()
  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    mode: 'onChange', 
  });

  const onSubmit = (data: TaskFormValues) => {
    console.log('Добавленная задача:', data);
    const newTask: ITask = {
      id: Date.now(),
      userId: 1,
      title: data.title,
      description: data.description || '',
      completed: false,
    };
    addTask(newTask);
    form.reset();
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">+ Add Task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавить задачу</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Название задачи</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите название" {...field}  value={field.value || ''}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание задачи</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Введите описание" {...field} value={field.value || ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-3 mt-4">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Отмена
              </Button>
              <Button type="submit" disabled={!form.formState.isValid}>
                Добавить
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
