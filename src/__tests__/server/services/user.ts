import { localStorageMock } from '../../../mocks/localStorage';
import { createUser, getUsers, signInUser } from '@/server/services/user';

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const userToCreate = {
  password: 'password',
  username: 'username',
  confirmPassword: 'password',
  email: 'email',
};

const usersList = [userToCreate];

test('test creation of new user', async () => {
  await createUser(userToCreate);

  expect(getUsers()).toEqual(usersList);
});

test('test error throwing when creating user with same email', async () => {
  try {
    await createUser(userToCreate);
  } catch (e: unknown) {
    if (e instanceof Error) {
      expect(e.message).toEqual('An account for email address already exists');
    }
  }
});

test('test user sign in', async () => {
  const signedInUser = await signInUser({
    username: userToCreate.username,
    password: userToCreate.password,
  });

  expect(signedInUser.username).toEqual(userToCreate.username);
});

test('test user sign in with wrong password', async () => {
  try {
    await signInUser({
      username: userToCreate.username,
      password: 'wrongPassword',
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      expect(e.message).toEqual('Incorrect username or password!');
    }
  }
});
