import { z } from 'zod';
import { signInUser } from '@/store/authentication/asyncThunks';
import { AuthForm } from '../AuthForm';
import { FC } from 'react';
import { HelperText } from '../HelperText';
import { useAppDispatch } from '@/store';

const validationSchema = z.object({
  username: z.string(),
  password: z.string(),
});

interface SignInProps {
  setSignUpModalOpened: () => void;
}

export const SignIn: FC<SignInProps> = ({ setSignUpModalOpened }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <AuthForm
        inputs={[
          {
            label: 'Username',
            name: 'username',
            placeholder: 'Elon Musk',
          },
          {
            label: 'Password',
            name: 'password',
            placeholder: '**********',
          },
        ]}
        validationSchema={validationSchema}
        onSubmit={data => dispatch(signInUser(data))}
        title="Sign In"
      />
      <HelperText text="Don't have an account?" linkText="Sign up" onClick={setSignUpModalOpened} />
    </>
  );
};
