import { FC } from 'react';

interface TableProps {
  tableValues: number[][];
}

export const Table: FC<TableProps> = ({ tableValues }) => {
  return (
    <div className="flex flex-col items-center ">
      {tableValues.map((row, index) => (
        <div className="flex [&:nth-child(5n)]:border-b-2 [&:nth-child(5n)]:border-b-slate-600" key={index}>
          {row.map((cell, i) => (
            <div
              key={i}
              className="items-c flex h-4 w-4 justify-center border border-slate-400 bg-slate-200 text-xs [&:nth-child(5n)]:border-r-2 [&:nth-child(5n)]:border-r-slate-600"
            >
              {cell === 0 ? '' : cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
