import { FC } from 'react';

interface HelperTextProps {
  text: string;
  linkText: string;
  onClick: () => void;
}

export const HelperText: FC<HelperTextProps> = ({ text, linkText, onClick }) => (
  <p className="primary-text mt-6">
    {text}
    <span className="ml-1 cursor-pointer font-semibold text-cyan-700 hover:text-cyan-600" onClick={onClick}>
      {linkText}
    </span>
  </p>
);
