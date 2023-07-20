import clsx from 'clsx';
import { FC, Dispatch, SetStateAction, useState } from 'react';
import { twMerge } from 'tw-merge';

export type FieldValue = 'X' | 1 | 0;

export type SetField = Dispatch<SetStateAction<FieldValue[][]>>;

interface FieldProps {
  fieldValues: FieldValue[][];
  setField: SetField;
}

const FIELD_STATE_MAPPER = {
  0: 1,
  1: 'X',
  X: 0,
} as const;

const isCellInRange = (
  { clickedCellRowIndex, clickedCellColumnIndex }: { clickedCellRowIndex: number; clickedCellColumnIndex: number },
  { currentCellRowIndex, currentCellColumnIndex }: { currentCellRowIndex: number; currentCellColumnIndex: number },
  { rowIndex: lastColoredRowIndex, columnIndex: lastColoredColumnIndex }: { rowIndex: number; columnIndex: number }
) => {
  return (
    currentCellRowIndex >= Math.min(lastColoredRowIndex, clickedCellRowIndex) &&
    currentCellRowIndex <= Math.max(lastColoredRowIndex, clickedCellRowIndex) &&
    currentCellColumnIndex >= Math.min(lastColoredColumnIndex, clickedCellColumnIndex) &&
    currentCellColumnIndex <= Math.max(lastColoredColumnIndex, clickedCellColumnIndex)
  );
};

export const Field: FC<FieldProps> = ({ fieldValues, setField }) => {
  const [hoverColumnIndex, setHoverColumnIndex] = useState<number | null>(null);
  const [lastColoredCell, setLastColoredCell] = useState<{ rowIndex: number; columnIndex: number; value: FieldValue }>({
    rowIndex: 0,
    columnIndex: 0,
    value: 1,
  });

  const onCellClick = (
    clickedCellRowIndex: number,
    clickedCellColumnIndex: number,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!e.shiftKey) {
      setField(
        fieldValues.map((row, currentCellRowIndex) =>
          row.map((cellValue, oldColumnIndex) => {
            if (clickedCellColumnIndex === oldColumnIndex && clickedCellRowIndex === currentCellRowIndex) {
              const value = FIELD_STATE_MAPPER[cellValue];

              setLastColoredCell({ rowIndex: clickedCellRowIndex, columnIndex: clickedCellColumnIndex, value });
              return value;
            }

            return cellValue;
          })
        )
      );

      return;
    }

    setField(
      fieldValues.map((row, currentCellRowIndex) =>
        row.map((cellValue, currentCellColumnIndex) => {
          if (
            isCellInRange(
              { clickedCellRowIndex, clickedCellColumnIndex },
              { currentCellRowIndex, currentCellColumnIndex },
              lastColoredCell
            )
          ) {
            return lastColoredCell.value;
          }
          return cellValue;
        })
      )
    );

    setLastColoredCell({
      rowIndex: clickedCellRowIndex,
      columnIndex: clickedCellColumnIndex,
      value: lastColoredCell.value,
    });
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
              onClick={e => onCellClick(rowIndex, cellIndex, e)}
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
