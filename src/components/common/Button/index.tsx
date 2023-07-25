import { cn } from '@/lib/utils';
import { FC } from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({ children, className, variant = 'primary', ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'px-4 py-1.5 text-base font-medium uppercase text-cyan-700 hover:text-cyan-600',
        className,
        variant === 'primary' && 'rounded border border-cyan-700'
      )}
    >
      {children}
    </button>
  );
};
