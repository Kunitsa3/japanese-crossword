import { FC } from 'react';
import { Button } from '@/components/common/Button';

interface ActionButtonsProps {
  buttonsDetails: { label: string; onClick: () => void }[];
}

export const ActionButtons: FC<ActionButtonsProps> = ({ buttonsDetails }) => (
  <div className="mt-10 flex gap-5">
    {buttonsDetails.map(({ onClick, label }, index) => (
      <Button key={index} onClick={onClick}>
        {label}
      </Button>
    ))}
  </div>
);
