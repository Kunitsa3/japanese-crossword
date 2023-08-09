import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';
import { Button } from '@/components/common/Button';

interface ImageWithTextProps {
  title: string;
  text: ReactNode;
  src: string;
  imageRight?: boolean;
  buttonText?: string;
}

export const ImageWithText: FC<ImageWithTextProps> = ({ title, text, src, imageRight, buttonText }) => {
  return (
    <div
      className={cn('m-auto flex max-w-screen-lg items-center gap-12 py-8 text-xl', imageRight && 'flex-row-reverse')}
    >
      <img src={src} className="w-1/2 " />
      <div className="flex w-1/2 flex-col gap-4">
        <h2 className="text-3xl font-bold text-cyan-700">{title}</h2>
        <div className="flex gap-4">{text}</div>
        {buttonText && <Button className="mt-5">{buttonText}</Button>}
      </div>
    </div>
  );
};
