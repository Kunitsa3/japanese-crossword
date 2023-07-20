import { FC } from 'react';

interface ActionButtonsProps {
  buttonsDetails: { label: string; onClick: () => void }[];
}

export const ActionButtons: FC<ActionButtonsProps> = ({ buttonsDetails }) => (
  <>
    {buttonsDetails.map((button, index) => (
      <button key={index} onClick={button.onClick}>
        {button.label}
      </button>
    ))}
  </>
);
