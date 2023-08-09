import { z } from 'zod';
import { signUpUser } from '@/store/authentication/asyncThunks';
import { AuthForm } from '../AuthForm';
import { FC } from 'react';
import { HelperText } from '../HelperText';
import { useAppDispatch } from '@/store';

const validationSchema = z
  .object({
    email: z.string().min(1, { message: 'Email is required' }).email({
      message: 'Must be a valid email',
    }),
    username: z.string().min(5, { message: 'Username must be at least 5 characters' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z.string().min(1, { message: 'Confirm Password is required' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  });

interface SignUpProps {
  setSignInModalOpened: () => void;
}

export const SignUp: FC<SignUpProps> = ({ setSignInModalOpened }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <AuthForm
        inputs={[
          {
            label: 'Email',
            name: 'email',
            placeholder: 'name@flowbite.com',
          },
          {
            label: 'Username',
            name: 'username',
            placeholder: 'Elon Musk',
          },
          {
            label: 'Password',
            name: 'password',
            placeholder: '***********',
          },
          {
            label: 'Confirm Password',
            name: 'confirmPassword',
            placeholder: '***********',
          },
        ]}
        validationSchema={validationSchema}
        onSubmit={data => dispatch(signUpUser(data))}
        title="Sign Up"
      />
      <HelperText text="Already signed up?" linkText="Go to login" onClick={setSignInModalOpened} />
    </>
  );
};
