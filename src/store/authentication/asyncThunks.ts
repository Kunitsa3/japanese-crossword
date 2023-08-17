import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userController from '../../server/controllers/user';
import { UserDetails } from '../../server/services/user';

export const signInUser = createAsyncThunk('/signInUser', async (userDetails: UserDetails) => {
  return await userController.signInUser(userDetails);
});

export const signUpUser = createAsyncThunk('/signUpUser', async (userDetails: UserDetails) => {
  return await userController.createUser(userDetails);
});
