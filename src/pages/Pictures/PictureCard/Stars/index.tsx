import { FC } from 'react';

interface StarsProps {
  numberOfFilledStars: string;
}

const stars = new Array(5).fill(0);

export const Stars: FC<StarsProps> = ({ numberOfFilledStars }) => {
  return (
    <div className="flex gap-1">
      {stars.map((_, i) => {
        return (
          <img
            key={i}
            src={i + 1 > +numberOfFilledStars ? 'images/emtyStar.svg' : 'images/star.svg'}
            alt="empty star"
          />
        );
      })}
    </div>
  );
};
