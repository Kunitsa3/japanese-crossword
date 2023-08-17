import * as userService from '../services/user';

export const createUser = (userDetails: userService.UserDetails) => {
  return userService.createUser(userDetails);
};

export const signInUser = (userDetails: userService.UserDetails) => {
  return userService.signInUser(userDetails);
};
