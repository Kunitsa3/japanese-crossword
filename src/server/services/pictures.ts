import { pictures } from '@/lib/mock';
import { Picture, Pictures } from '@/store/pictures';
import { getFromStorage, setToStorage } from './storage';

const PICTURES_STORAGE_KEY = 'pictures';

setToStorage(PICTURES_STORAGE_KEY, pictures);

export const getPictures = () => getFromStorage<Pictures>(PICTURES_STORAGE_KEY) || [];

export const addPicture = (picture: Picture) =>
  new Promise<Pictures>(resolve => {
    const pictures = getPictures();
    pictures.push(picture);

    setToStorage(PICTURES_STORAGE_KEY, pictures);

    setTimeout(() => resolve(pictures), 1000);
  });

export const getCurrentPicture = (id: string) => {
  return new Promise<Picture>((resolve, reject) => {
    const pictures = getPictures();
    const currentPicture = pictures.find(el => el.id === id);

    if (currentPicture) {
      setTimeout(() => resolve(currentPicture), 1000);
      return;
    }

    setTimeout(() => reject(new Error('Incorrect picture id')), 1000);
  });
};
