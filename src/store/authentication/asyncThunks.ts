import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, signInUser } from '../../server/controllers/user';
import { UserDetails } from '../../server/services/user';

export const fetchSignInUser = createAsyncThunk('/signInUser', async (userDetails: UserDetails) => {
  return await signInUser(userDetails);
});

export const fetchSignUpUser = createAsyncThunk('/signUpUser', async (userDetails: UserDetails) => {
  return await createUser(userDetails);
});
