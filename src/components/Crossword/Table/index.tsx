import { FC } from 'react';
import { TableCell } from './TableCell';

interface TableProps {
  tableValues: number[][];
}

export const Table: FC<TableProps> = ({ tableValues }) => {
  return (
    <div className="flex flex-col items-center ">
      {tableValues.map((row, index) => (
        <div className="flex [&:nth-child(5n)]:border-b-2 [&:nth-child(5n)]:border-b-slate-600" key={index}>
          {row.map((cell, i) => {
            return <TableCell cell={cell} key={i} />;
          })}
        </div>
      ))}
    </div>
  );
};
