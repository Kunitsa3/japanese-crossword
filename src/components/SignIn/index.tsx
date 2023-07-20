import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const validationSchema = z
  .object({
    email: z.string().min(1, { message: 'Email is required' }).email({
      message: 'Must be a valid email',
    }),
    username: z.string().min(5, { message: 'Username is required' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z.string().min(1, { message: 'Confirm Password is required' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  });

type ValidationSchema = z.infer<typeof validationSchema>;

const inputs = [
  {
    label: 'Email',
    id: 'email',
    placeholder: 'name@flowbite.com',
  },
  {
    label: 'Username',
    id: 'username',
    placeholder: 'Elon Musk',
  },
  {
    label: 'Password',
    id: 'password',
    placeholder: '',
  },
  {
    label: 'Confirm Password',
    id: 'confirmPassword',
    placeholder: '',
  },
] as const;

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(data => {
        alert(JSON.stringify(data));
      })}
      className="m-auto max-w-lg"
    >
      {inputs.map(input => {
        return (
          <>
            <label className="mb-2 mt-6 block text-sm font-medium text-gray-900 dark:text-white">{input.label}</label>

            <input
              {...register(input.id)}
              placeholder={input.placeholder}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
            {errors.confirmPassword && <p className="text-red-700">{errors[input.id]?.message}</p>}
          </>
        );
      })}
      <input type="submit" />
    </form>
  );
};
