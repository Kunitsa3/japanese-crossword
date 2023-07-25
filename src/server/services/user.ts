export interface UserDetails {
  email?: string;
  username: string;
  password: string;
  confirmPassword?: string;
}

export const getUsers = (): UserDetails[] => {
  const localStorageUsers = localStorage.getItem('users');

  if (localStorageUsers) {
    return JSON.parse(localStorageUsers);
  } else {
    return [];
  }
};

export const createUser = (userDetails: UserDetails) =>
  new Promise<UserDetails>((resolve, reject) => {
    const currentUsers = getUsers();
    const user = currentUsers.find(el => el.email === userDetails.email);

    if (user) {
      setTimeout(() => reject(new Error(`An account for email address already exists`)), 1000);
      return;
    }
    currentUsers.push(userDetails);
    localStorage.setItem('users', JSON.stringify(currentUsers));

    setTimeout(() => resolve(userDetails), 1000);
  });

export const signInUser = (userDetails: UserDetails) =>
  new Promise<UserDetails>((resolve, reject) => {
    const currentUsers = getUsers();
    const user = currentUsers.find(el => el.username === userDetails.username);

    if (user?.password === userDetails.password) {
      setTimeout(() => resolve(userDetails), 1000);
      return;
    }

    setTimeout(() => reject(new Error('Incorrect username or password!')), 1000);
  });
