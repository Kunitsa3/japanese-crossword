import { ImageWithText } from '../../components/ImageWithText';

export const MainPage = () => {
  return (
    <>
      <div className="m-auto flex max-w-screen-lg items-center gap-12  py-4">
        <div className="flex w-3/5 flex-col gap-4">
          <h1 className="text-7xl font-semibold text-cyan-700">Puzzle Japanese Crossword</h1>
          <button className="b mt-4 w-1/4 rounded border border-cyan-700 px-4 py-1.5 text-base font-medium uppercase text-cyan-700 hover:text-cyan-600">
            Get started
          </button>
        </div>
        <img src="images/thinking.jpg" className="w-2/5 " />
      </div>
      <ImageWithText
        src="images/question.jpg"
        title=" Welcome to the website entirely dedicated to nonograms!"
        text={
          <>
            Here you will find a catalog of several crosswords with different levels of difficulty, both for beginners
            and advanced ones. We are especially proud of our small but challenging nonograms. <br /> <br /> If you're
            just getting started with nonograms, or if you're stuck with one of our puzzles, check out section 'How to
            Solve'
          </>
        }
      />
      <ImageWithText
        src="images/tetris.jpg"
        title=" Electronic puzzles"
        imageRight
        text={
          <>
            Paint by numbers puzzles were implemented by 1995 on hand held electronic toys such as Game Boy and on other
            plastic puzzle toys. Nintendo picked up on this puzzle fad and released two 'Picross' (picture crossword)
            titles for the Game Boy and nine for the Super Famicom in Japan. <br />
            <br /> Increased popularity in Japan launched new publishers and by now there were several monthly
            magazines, some of which contained up to 100 puzzles.
          </>
        }
      />
    </>
  );
};
