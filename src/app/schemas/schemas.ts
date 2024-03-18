import { z } from 'zod';
export const FormSchema = z.object({
  name: z.string().min(1, 'name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(1, 'Password is required'),
  // .min(1, 'Password must have more than 8 characters'),
});
export const SignUpFormSchema = z
  .object({
    name: z.string().min(1, 'name is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z.string().min(1, 'Password is required'),
    // .min(1, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });
