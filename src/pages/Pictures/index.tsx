import { ImageWithText } from '@/components/ImageWithText';
import { PictureCard } from '@/pages/Pictures/PictureCard';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectCurrentUser } from '@/store/authentication/selectors';
import { getPictures } from '@/store/pictures/asyncThunks';
import { selectPictures } from '@/store/pictures/selectors';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Pictures = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const pictures = useAppSelector(selectPictures);
  const currentUser = useAppSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(getPictures());
  }, []);

  return (
    <div className="m-auto flex max-w-screen-lg flex-col gap-16 ">
      <ImageWithText
        src="images/completed.jpg"
        title="Catalog"
        text={
          <>
            Here you will find a catalog of several crosswords with different levels of difficulty, both for beginners
            and advanced ones. <br /> <br /> If you're just getting started with nonograms, or if you're stuck with one
            of our puzzles, check out section 'How to Solve'
          </>
        }
        buttonText="How to solve"
        onButtonClick={() => navigate('/how-to-solve')}
      />

      <div className="grid grid-cols-2 gap-10 pb-20">
        {pictures?.map(picture => (
          <PictureCard picture={picture} key={picture.id} />
        ))}
        {currentUser ? (
          <div className="flex min-h-[160px] flex-col items-center justify-between rounded border-2 border-cyan-700 p-5 shadow-xl">
            <p className="mb-2 text-center text-xl font-medium text-cyan-700">Add your own crossword!</p>
            <Link
              className="px-4 py-1.5 text-base font-medium uppercase text-cyan-700 hover:text-cyan-600"
              to="/create-crossword"
            >
              Add
            </Link>
          </div>
        ) : (
          <div className="flex min-h-[160px] flex-col items-center justify-between rounded border-2 border-gray-400 p-5 shadow-xl">
            <p className="m-auto text-center text-xl font-medium text-gray-400">Login to add your own crossword</p>
          </div>
        )}
      </div>
    </div>
  );
};
