import { FieldValue } from '@/store/pictures';
import { FC, Dispatch, useState } from 'react';
import { FieldCell } from './FieldCell';

export type SetField = Dispatch<FieldValue[][]>;

interface FieldProps {
  fieldValues: FieldValue[][];
  setField: SetField;
  isCreatingMode?: boolean;
}

type LastColoredCell = { rowIndex: number; columnIndex: number; value: FieldValue };

const FIELD_STATE_MAPPER = {
  0: 1,
  1: 'X',
  X: 0,
} as const;

const CREATION_FIELD_STATE_MAPPER = {
  0: 1,
  1: 0,
  X: 0,
} as const;

export const Field: FC<FieldProps> = ({ fieldValues, setField, isCreatingMode }) => {
  const [hoverColumnIndex, setHoverColumnIndex] = useState<number | null>(null);
  const [lastColoredCell, setLastColoredCell] = useState<LastColoredCell>({
    rowIndex: 0,
    columnIndex: 0,
    value: 1,
  });

  const onCellClick = (
    clickedCellRowIndex: number,
    clickedCellColumnIndex: number,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const oldCellValue = fieldValues[clickedCellRowIndex][clickedCellColumnIndex];
    const newCellValue = (isCreatingMode ? CREATION_FIELD_STATE_MAPPER : FIELD_STATE_MAPPER)[oldCellValue];
    const firstCellInRange = e.shiftKey
      ? lastColoredCell
      : {
          rowIndex: clickedCellRowIndex,
          columnIndex: clickedCellColumnIndex,
          value: newCellValue,
        };

    setField(
      fieldValues.map((row, currentCellRowIndex) => {
        if (
          currentCellRowIndex >= Math.min(firstCellInRange.rowIndex, clickedCellRowIndex) &&
          currentCellRowIndex <= Math.max(firstCellInRange.rowIndex, clickedCellRowIndex)
        ) {
          const firstItemToRemove = Math.min(firstCellInRange.columnIndex, clickedCellColumnIndex);
          const numberOfItemsToRemove = Math.abs(firstCellInRange.columnIndex - clickedCellColumnIndex) + 1;
          const itemsToFill = new Array(numberOfItemsToRemove).fill(firstCellInRange.value);

          const newRow = [...row];

          newRow.splice(firstItemToRemove, numberOfItemsToRemove, ...itemsToFill);

          return newRow;
        }

        return row;
      })
    );

    setLastColoredCell({
      rowIndex: clickedCellRowIndex,
      columnIndex: clickedCellColumnIndex,
      value: firstCellInRange.value,
    });
  };

  return (
    <div className="flex flex-col items-center border-l-2 border-t-2 border-l-slate-600 border-t-slate-600">
      {fieldValues.map((row, rowIndex) => (
        <div
          className="flex bg-gray-100 hover:bg-gray-300 [&:nth-child(5n)]:border-b-2 [&:nth-child(5n)]:border-b-slate-600"
          key={rowIndex}
        >
          {row.map((cell, cellIndex) => (
            <FieldCell
              cell={cell}
              cellIndex={cellIndex}
              hoverColumnIndex={hoverColumnIndex}
              setHoverColumnIndex={setHoverColumnIndex}
              onCellClick={e => onCellClick(rowIndex, cellIndex, e)}
              key={cellIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
