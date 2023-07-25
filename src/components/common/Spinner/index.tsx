import { cn } from '@/lib/utils';
import { FC } from 'react';

interface SpinnerProps {
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className }) => (
  <div className="flex h-full items-center justify-center">
    <div
      className={cn('h-10 w-10 animate-spin rounded-full border-4 border-dashed border-cyan-700 text-base', className)}
    />
  </div>
);

export default Spinner;
