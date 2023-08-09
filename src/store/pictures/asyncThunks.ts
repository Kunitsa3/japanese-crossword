import { createAsyncThunk } from '@reduxjs/toolkit';
import * as pictureController from '@/server/controllers/pictures';
import { Picture } from '.';

export const addPicture = createAsyncThunk('/addPicture', async (picture: Omit<Picture, 'id'>) => {
  return await pictureController.addPicture(picture);
});

export const getPicture = createAsyncThunk('/getPicture', (id: string) => {
  return pictureController.getCurrentPicture(id);
});

export const getPictures = createAsyncThunk('/getPictures', () => {
  return pictureController.getPictures();
});
