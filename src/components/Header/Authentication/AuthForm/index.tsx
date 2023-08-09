import { zodResolver } from '@hookform/resolvers/zod';
import { Path, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/common/Button';
import store, { useAppSelector } from '@/store';
import { useToast } from '@/components/ui/use-toast';
import Spinner from '@/components/common/Spinner';
import { useEffect } from 'react';

interface Input<T> {
  label: string;
  name: T;
  placeholder?: string;
}

interface AuthFormProps<T extends z.Schema<any, any>> {
  validationSchema: T;
  inputs: Input<Path<z.TypeOf<T>>>[];
  onSubmit: (data: z.TypeOf<T>) => void;
  title: string;
}

export type RootState = ReturnType<typeof store.getState>;

export const AuthForm = <T extends z.Schema<any, any>>({
  inputs,
  validationSchema,
  onSubmit,
  title,
}: AuthFormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<T>>({
    resolver: zodResolver(validationSchema),
  });

  const authenticationLoadingStatus = useAppSelector(state => state.user.loading);
  const errorMessage = useAppSelector(state => state.user.errorMessage);
  const { toast } = useToast();

  useEffect(() => {
    if (errorMessage) {
      toast({
        title: errorMessage,
        variant: 'destructive',
      });
    }
  }, [errorMessage]);

  return (
    <form
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <p className=" text-center text-lg font-semibold text-cyan-700">{title}</p>
      {inputs.map((input, id) => {
        return (
          <div key={id}>
            <label className="mb-2 mt-6 block text-sm font-medium text-cyan-700 dark:text-white">{input.label}</label>

            <input
              {...register(input.name)}
              placeholder={input.placeholder}
              className="focus:cyan-700 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-cyan-700"
            />
            {errors[input.name] && <p className="text-red-700">{errors[input.name]?.message?.toString()}</p>}
          </div>
        );
      })}
      <div className="mt-10">
        <Button type="submit" className="w-full">
          {authenticationLoadingStatus ? <Spinner className="h-6 w-6" /> : 'Submit'}
        </Button>
      </div>
    </form>
  );
};
