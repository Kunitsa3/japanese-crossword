import { createSlice } from '@reduxjs/toolkit';
import { addPicture, getPicture, getPictures } from './asyncThunks';

export type FieldValue = 'X' | 1 | 0;

export interface Picture {
  id: string;
  difficulty: string;
  width: number;
  height: number;
  topTable: number[][];
  leftTable: number[][];
  result: FieldValue[][];
}

export type Pictures = Picture[];

interface InitialState {
  pictures: Pictures | null;
  currentPicture: Picture | null;
  loading: boolean;
  errorMessage: string;
}

const initialState: InitialState = {
  pictures: null,
  currentPicture: null,
  loading: false,
  errorMessage: '',
};

const pictureSlice = createSlice({
  name: 'picture',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addPicture.pending, state => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(addPicture.fulfilled, (state, action) => {
        state.loading = false;
        state.pictures = action.payload;
        state.errorMessage = '';
      })
      .addCase(addPicture.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message || '';
      })
      .addCase(getPicture.pending, state => {
        state.loading = true;
        state.errorMessage = '';
        state.currentPicture = null;
      })
      .addCase(getPicture.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPicture = action.payload;
        state.errorMessage = '';
      })
      .addCase(getPicture.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message || '';
      })
      .addCase(getPictures.pending, state => {
        state.loading = true;
      })
      .addCase(getPictures.fulfilled, (state, action) => {
        state.loading = false;
        state.pictures = action.payload;
        state.errorMessage = '';
      });
  },
});

export default pictureSlice.reducer;
