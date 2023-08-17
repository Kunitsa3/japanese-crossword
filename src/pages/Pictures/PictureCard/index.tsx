import { FC } from 'react';
import { Button } from '../../../components/common/Button';
import { Stars } from './Stars';
import { useNavigate } from 'react-router-dom';
import { Picture } from '@/store/pictures';

interface PictureCardProps {
  picture: Picture;
}

export const PictureCard: FC<PictureCardProps> = ({ picture }) => {
  const navigate = useNavigate();

  return (
    <div className="flex min-w-[calc((100%-80px)/3)] flex-col rounded border-2 border-cyan-700 p-5 shadow-xl">
      <p className="mb-2 text-xl font-medium text-cyan-700">
        Size: {picture.width}x{picture.height}
      </p>
      <div className="flex gap-2 text-base">
        Difficulty: <Stars numberOfFilledStars={picture.difficulty} />
      </div>
      <Button variant="secondary" className="mt-5" onClick={() => navigate(`/crossword/${picture.id}`)}>
        Start
      </Button>
    </div>
  );
};
