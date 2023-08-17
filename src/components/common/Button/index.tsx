import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva('px-4 py-1.5 text-base font-medium uppercase text-cyan-700 hover:text-cyan-600', {
  variants: {
    variant: {
      primary: 'rounded border border-cyan-700',
      secondary: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const Button: FC<ButtonProps> = ({ children, className, variant = 'primary', ...props }) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)}>
      {children}
    </button>
  );
};
