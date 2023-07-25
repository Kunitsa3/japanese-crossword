import { createSlice } from '@reduxjs/toolkit';
import { fetchSignInUser, fetchSignUpUser } from './asyncThunks';
import { UserDetails } from '../../server/services/user';

interface InitialState {
  currentUser: null | UserDetails;
  loading: boolean;
  errorMessage: string;
}

const initialState: InitialState = {
  currentUser: null,
  loading: false,
  errorMessage: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSignInUser.pending, state => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(fetchSignInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchSignInUser.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message || '';
      })
      .addCase(fetchSignUpUser.pending, state => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(fetchSignUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchSignUpUser.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message || '';
      });
  },
});

export default usersSlice.reducer;
