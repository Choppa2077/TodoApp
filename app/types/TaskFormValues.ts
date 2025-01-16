import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(3, 'Минимум 3 символа').max(50, 'Максимум 50 символов'),
  description: z.string().max(200, 'Максимум 200 символов').optional(),
});

export type TaskFormValues = z.infer<typeof taskSchema>;