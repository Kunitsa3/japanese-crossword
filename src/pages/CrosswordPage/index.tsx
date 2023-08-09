import { Crossword } from '@/components/Crossword';
import Spinner from '@/components/common/Spinner';
import { useAppDispatch, useAppSelector } from '@/store';
import { getPicture } from '@/store/pictures/asyncThunks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const CrosswordPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getPicture(id));
    }
  }, [id]);

  const currentPicture = useAppSelector(state => state.picture.currentPicture);

  return currentPicture ? (
    <Crossword currentPicture={currentPicture} />
  ) : (
    <div className="flex h-screen items-center justify-center">
      <Spinner />
    </div>
  );
};
