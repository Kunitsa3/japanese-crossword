import clsx from 'clsx';
import { FC, useState } from 'react';
import { twMerge } from 'tw-merge';

interface TableCellProps {
  cell: number;
}

export const TableCell: FC<TableCellProps> = ({ cell }) => {
  const [isCellCrossed, setCellCrossed] = useState(false);

  const onCellClick = (cell: number) => {
    if (cell) {
      setCellCrossed(!isCellCrossed);
    }
  };
  return (
    <div
      className={twMerge(
        clsx(
          'items-c  relative flex h-4 w-4 cursor-pointer justify-center border border-slate-400 bg-slate-200 text-xs',
          '[&:nth-child(5n)]:border-r-2 [&:nth-child(5n)]:border-r-slate-600',
          'before:t before:absolute before:-left-[9px] before:top-[4px] before:h-5 before:w-5 before:rotate-45 before:border-t  before:border-t-slate-500 before:content-[""]',
          !isCellCrossed && 'before:hidden'
        )
      )}
      onClick={() => onCellClick(cell)}
    >
      {cell === 0 ? '' : cell}
    </div>
  );
};
