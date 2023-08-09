import { cn } from '@/lib/utils';
import { FieldValue } from '@/store/pictures';
import { FC } from 'react';

interface FieldCellProps {
  cellIndex: number;
  hoverColumnIndex: number | null;
  setHoverColumnIndex: (index: number | null) => void;
  cell: FieldValue;
  onCellClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const FieldCell: FC<FieldCellProps> = ({
  cellIndex,
  cell,
  onCellClick,
  hoverColumnIndex,
  setHoverColumnIndex,
}) => {
  return (
    <div
      className={cn(
        'flex h-4 w-4 cursor-pointer select-none items-center justify-center border border-slate-300',
        '[&:nth-child(5n)]:border-r-2 [&:nth-child(5n)]:border-r-slate-600',
        cellIndex === hoverColumnIndex && 'bg-gray-300',
        cell === 1 && 'bg-gray-600'
      )}
      onClick={onCellClick}
      onMouseEnter={() => setHoverColumnIndex(cellIndex)}
      onMouseLeave={() => setHoverColumnIndex(null)}
    >
      {cell === 'X' ? cell : ''}
    </div>
  );
};
