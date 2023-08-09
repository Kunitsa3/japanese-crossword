import { useNavigate } from 'react-router-dom';
import { ImageWithText } from '@/components/ImageWithText';
import { Button } from '@/components/common/Button';

export const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="m-auto flex max-w-screen-lg items-center gap-12  py-4">
        <div className="flex w-3/5 flex-col gap-4">
          <h1 className="text-7xl font-semibold text-cyan-700">Puzzle Japanese Crossword</h1>
          <button
            className="b mt-4 w-1/4 rounded border border-cyan-700 px-4 py-1.5 text-base font-medium uppercase text-cyan-700 hover:text-cyan-600"
            onClick={() => navigate('/crosswords')}
          >
            Get started
          </button>
        </div>
        <img src="images/thinking.jpg" className="w-2/5 " />
      </div>
      <div className="m-auto flex max-w-screen-lg flex-col items-center gap-10 py-4">
        <h2 className="text-3xl font-bold text-cyan-700">Why Choose Challenger? </h2>
        <div className="grid grid-cols-3 items-start gap-10">
          <div className="flex flex-col gap-5 rounded-xl bg-[#fafafa] p-5">
            <img src="images/idea.png" className="m-auto h-16 w-16" />
            <h3 className="text-center text-2xl font-bold text-cyan-700">Brain-Boosting Challenges</h3>
            <p className="text-lg">
              Sharpen your logical thinking and enhance your problem-solving skills with our diverse range of Japanese
              crosswords.
            </p>
          </div>
          <div className="flex flex-col gap-5 rounded-xl bg-[#fafafa] p-5">
            <img src="images/paint.png" className="m-auto h-16 w-16" />
            <h3 className="text-center text-2xl font-bold text-cyan-700">Create Your Own Art</h3>
            <p className="text-lg">
              With every square you fill, a hidden picture will slowly emerge, rewarding you with a sense of
              accomplishment and artistic joy.
            </p>
          </div>
          <div className="flex flex-col gap-5 rounded-xl bg-[#fafafa] p-5">
            <img src="images/avatar.png" className="m-auto h-16 w-16" />
            <h3 className="text-center text-2xl font-bold text-cyan-700">Engaging Experience</h3>
            <p className="text-lg">
              Our user-friendly interface will make you feel right at home, whether you're a seasoned picross enthusiast
              or a curious beginner..
            </p>
          </div>
        </div>
      </div>
      <ImageWithText
        src="images/question.jpg"
        title="Unveil the Mysteries of Japan, One Square at a Time!"
        text={
          <>
            Dive into the captivating world of Japanese crosswords, known as "Nonograms" or "Picross," where logic and
            artistry intertwine to create mesmerizing pixelated masterpieces. <br /> <br /> Challenger is your online
            haven for all things picross-related, offering an expansive collection of puzzles that will challenge your
            mind and awaken your creativity.
          </>
        }
      />
      <ImageWithText
        src="images/tetris.jpg"
        title="Start Your Picross Journey Today! "
        imageRight
        text={
          <>
            Embark on an adventure of logical deduction and artistic revelation with EnigmaticNihongo. Indulge in the
            allure of Japanese crosswords and let your inner puzzle-solver shine. Whether you have a few minutes to
            spare or are seeking a captivating challenge, our puzzles are tailor-made for enthusiasts of all levels.
          </>
        }
      />
      <div className="m-auto my-12 flex max-w-screen-lg items-center rounded-2xl bg-[#fafafa] px-14 py-6">
        <p className="text-4xl font-semibold text-cyan-700">
          Join Challenger now and elevate your puzzling prowess to new heights!
        </p>
        <Button className="mt-10 px-28" onClick={() => navigate('/crosswords')}>
          Start
        </Button>
      </div>
    </>
  );
};
