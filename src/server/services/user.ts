import { getFromStorage, setToStorage } from './storage';

export interface UserDetails {
  email?: string;
  username: string;
  password: string;
  confirmPassword?: string;
}

const USERS_STORAGE_KEY = 'users';

export const getUsers = () => getFromStorage<UserDetails[]>(USERS_STORAGE_KEY) || [];

export const createUser = (userDetails: UserDetails) =>
  new Promise<UserDetails>((resolve, reject) => {
    const users = getUsers();
    const user = users.find(el => el.email === userDetails.email);

    if (user) {
      setTimeout(() => reject(new Error(`An account for email address already exists`)), 1000);
      return;
    }

    users.push(userDetails);
    setToStorage(USERS_STORAGE_KEY, users);

    setTimeout(() => resolve(userDetails), 1000);
  });

export const signInUser = (userDetails: UserDetails) =>
  new Promise<UserDetails>((resolve, reject) => {
    const users = getUsers();
    const user = users.find(el => el.username === userDetails.username);

    if (user?.password === userDetails.password) {
      setTimeout(() => resolve(userDetails), 1000);
      return;
    }

    setTimeout(() => reject(new Error('Incorrect username or password!')), 1000);
  });
