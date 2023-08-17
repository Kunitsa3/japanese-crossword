import { zodResolver } from '@hookform/resolvers/zod';
import { Path, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/common/Button';
import store, { useAppSelector } from '@/store';
import { useToast } from '@/components/ui/use-toast';
import Spinner from '@/components/common/Spinner';
import { useEffect } from 'react';
import { selectUserError, selectUserLoading } from '@/store/authentication/selectors';
import { Input } from '@/components/common/Input';

interface Input<T> {
  label: string;
  name: T;
  placeholder?: string;
  type?: string;
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

  const authenticationLoadingStatus = useAppSelector(selectUserLoading);
  const errorMessage = useAppSelector(selectUserError);
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
      {inputs.map(({ label, name, placeholder, type }, id) => {
        return (
          <Input
            label={label}
            name={name}
            placeholder={placeholder}
            errors={errors}
            register={register}
            type={type}
            key={id}
          />
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
