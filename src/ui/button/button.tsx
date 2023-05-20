import React from 'react';
import './button.scss';

interface ButtonProps {
  buttonClass?: 'icon' | 'search' | 'block' | 'apply' | 'card';
  backgroundColor?: string;
  label?: string;
  onClick?: () => void;
}

export const Button = ({
  backgroundColor,
  label,
  buttonClass,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['btn', `btn--${buttonClass}`].join(' ')}
      style={{
        backgroundColor: backgroundColor,
      }}
      {...props}
    >
      {label}
    </button>
  );
};
