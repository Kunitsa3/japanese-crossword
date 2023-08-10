import { RootState } from '..';

export const selectPictures = (state: RootState) => state.picture.pictures;
export const selectPictureError = (state: RootState) => state.picture.errorMessage;
export const selectCurrentPicture = (state: RootState) => state.picture.currentPicture;
