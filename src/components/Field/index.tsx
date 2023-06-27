import clsx from 'clsx';
import { FC, Dispatch, SetStateAction, useState } from 'react';
import { twMerge } from 'tw-merge';

export type FieldValue = 'X' | 1 | 0;

type SetField = Dispatch<SetStateAction<FieldValue[][]>>;

interface FieldProps {
  fieldValues: FieldValue[][];
  setField: SetField;
}

const FIELD_STATE_MAPPER = {
  0: 1,
  1: 'X',
  X: 0,
} as const;

export const Field: FC<FieldProps> = ({ fieldValues, setField }) => {
  const [hoverColumnIndex, setHoverColumnIndex] = useState<number | null>(null);

  const onCellClick = (rowIndex: number, cellIndex: number) => {
    const finalField = fieldValues.map((row, index) => {
      const finalRow = [...row];

      if (rowIndex === index) {
        finalRow[cellIndex] = FIELD_STATE_MAPPER[finalRow[cellIndex]];
      }

      return finalRow;
    });

    setField(finalField);
  };

  return (
    <div className="flex flex-col items-center ">
      {fieldValues.map((row, rowIndex) => (
        <div
          className="flex bg-gray-100 hover:bg-gray-300 [&:nth-child(5n)]:border-b-2 [&:nth-child(5n)]:border-b-slate-600"
          key={rowIndex}
        >
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={twMerge(
                clsx(
                  `flex h-4 w-4 cursor-pointer items-center justify-center border border-slate-300`,
                  '[&:nth-child(5n)]:border-r-2 [&:nth-child(5n)]:border-r-slate-600',
                  cellIndex === hoverColumnIndex && 'bg-gray-300',
                  cell === 1 && 'bg-gray-600'
                )
              )}
              onClick={() => onCellClick(rowIndex, cellIndex)}
              onMouseEnter={() => setHoverColumnIndex(cellIndex)}
              onMouseLeave={() => setHoverColumnIndex(null)}
            >
              {cell === 'X' ? cell : ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
