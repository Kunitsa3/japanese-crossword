import { FC } from 'react';
import { TableCell } from './TableCell';
import { cn } from '@/lib/utils';

interface TableProps {
  tableValues: number[][];
  isLeftTable?: boolean;
}

export const Table: FC<TableProps> = ({ tableValues, isLeftTable }) => {
  return (
    <div className="flex flex-col items-center justify-end">
      {tableValues.map((row, index) => (
        <div
          key={index}
          className={cn(
            'flex select-none',
            isLeftTable && '[&:nth-child(5n)]:border-b-2 [&:nth-child(5n)]:border-b-slate-600'
          )}
        >
          {row.map((cell, i) => (
            <TableCell cell={cell} key={i} isLeftTable={isLeftTable} />
          ))}
        </div>
      ))}
    </div>
  );
};
