import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signUpUser } from './asyncThunks';
import { UserDetails } from '../../server/services/user';

interface InitialState {
  currentUser: UserDetails | null;
  loading: boolean;
  errorMessage: string;
}

const initialState: InitialState = {
  currentUser: null,
  loading: false,
  errorMessage: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signInUser.pending, state => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message || '';
      })
      .addCase(signUpUser.pending, state => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message || '';
      });
  },
});

export default userSlice.reducer;
