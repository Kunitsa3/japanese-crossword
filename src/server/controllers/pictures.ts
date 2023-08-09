import { zip } from 'lodash';
import { v4 as uuid } from 'uuid';
import * as pictureService from '../services/pictures';
import { Picture } from '@/store/pictures';

const isTableWithoutEmptyRows = (table: number[][]) => {
  return table.reduce((result, row) => {
    if (row.filter(el => el !== 0).length === 0) {
      return false;
    }
    return result;
  }, true);
};

const validatePicture = (picture: Picture) => {
  const leftTable = picture.leftTable;
  const transposeTopTable = zip(...picture.topTable) as number[][];

  if (isTableWithoutEmptyRows(leftTable) && isTableWithoutEmptyRows(transposeTopTable)) {
    return true;
  }

  return false;
};

export const addPicture = async (picture: Omit<Picture, 'id'>) => {
  const id = uuid();

  const pictureToSave = { ...picture, id };

  if (!validatePicture(pictureToSave)) {
    throw new Error('Empty rows or columns are not allowed');
  }

  return pictureService.addPicture(pictureToSave);
};

export const getCurrentPicture = (id: string) => pictureService.getCurrentPicture(id);

export const getPictures = () => pictureService.getPictures();
