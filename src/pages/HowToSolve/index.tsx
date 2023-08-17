export const HowToSolve = () => (
  <div className="m-auto flex max-w-screen-md flex-col gap-10 py-5">
    <img src="/images/think.jpg" className="m-auto w-1/2" />
    <h1 className="m-auto text-7xl font-semibold text-cyan-700">How to solve</h1>
    <p className="text-2xl font-medium text-slate-500">
      Solving Japanese crosswords, also known as Nonograms or Picross, involves using logic to reveal a hidden picture
      by filling in specific squares on a grid. Here's a step-by-step guide to help you solve these engaging puzzles:
    </p>
    <ol className="flex flex-col gap-5">
      <li className="text-base">
        <p className="mb-3 text-lg font-bold text-cyan-700">1. Understand the Basics:</p>
        <p>
          A Japanese crossword puzzle consists of a grid with numbers at the top and left sides. <br />
          The numbers indicate the lengths of consecutive filled squares in that row or column. For example, "3 1" means
          there's a sequence of three filled squares followed by at least one blank square, and then a single filled
          square.
        </p>
      </li>
      <li className="text-base">
        <p className="mb-3 font-medium">2. Analyze the Clues:</p>
        <p>
          Begin by studying the numbers provided for each row and column. Look for rows or columns with the largest
          numbers first, as they often provide more meaningful information. Focus on rows or columns with short
          sequences, as these can help you identify potential starting points.
        </p>
      </li>
      <li className="text-base">
        <p className="mb-3 font-medium">3. Mark the Spaces:</p>
        <p>
          Use a pencil or digital tool to mark empty squares with an "X" or a dot, indicating that they cannot be
          filled. Mark squares that are definitely filled according to the given clues.
        </p>
      </li>
      <li className="text-base">
        <p className="mb-3 font-medium">4. Apply Logic:</p>
        <p>
          Start by examining the intersections between rows and columns. Use the information from one direction to
          deduce information about the other direction. Look for situations where a square must be filled based on the
          clues from both the row and column.
        </p>
      </li>
      <li className="text-base">
        <p className="mb-3 font-medium">5. Process of Elimination:</p>
        <p>
          As you fill in more squares, you'll begin to see patterns and opportunities for deduction. Use process of
          elimination to identify where squares cannot be filled, based on the constraints of neighboring clues.
        </p>
      </li>
      <li className="text-base">
        <p className="mb-3 font-medium">6. Check for Errors:</p>
        <p>
          Periodically review your progress to ensure you haven't made any mistakes. If you find inconsistencies,
          correct them and adjust your markings accordingly.
        </p>
      </li>
      <li className="text-base">
        <p className="mb-3 font-medium">7. Continue Iterating:</p>
        <p>
          Keep iterating between rows and columns, using the information you've deduced to gradually fill in more
          squares. Pay attention to the patterns emerging in the puzzle, as they can help you make more informed
          decisions.
        </p>
      </li>
      <li className="text-base">
        <p className="mb-3 font-medium">8. Reassess and Refine:</p>
        <p>
          If you reach a point where you're unsure about the next move, take a step back and reevaluate the puzzle. Look
          for potential contradictions or errors.
        </p>
      </li>
      <li className="text-base">
        <p className="mb-3 font-medium">9. Fine-Tuning:</p>
        <p>
          As you approach the completion of the puzzle, you may have a few remaining uncertain squares. Use trial and
          error to test different possibilities while keeping the rules of the puzzle in mind.
        </p>
      </li>
      <li className="text-base">
        <p className="mb-3 font-medium">10. Celebrate Your Success:</p>
        <p>
          Once you've filled in all the correct squares, the hidden picture will be revealed. Take a moment to admire
          your completed masterpiece!
        </p>
      </li>
    </ol>
  </div>
);
