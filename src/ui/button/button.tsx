import React from 'react';
import './button.scss';
import callicon from '../../images/call.svg';
import messageicon from '../../images/message.svg';
import locateicon from '../../images/call.svg';
import closeicon from '../../images/message.svg';
import editicon from '../../images/call.svg';
import checkicon from '../../images/message.svg';
import searchicon from '../../images/call.svg';
import addicon from '../../images/add.svg';

interface ButtonProps {
  buttonClass:
    | 'call'
    | 'message'
    | 'locate'
    | 'close'
    | 'edit'
    | 'check'
    | 'search'
    | 'apply'
    | 'block'
    | 'add'
    | 'card';
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
  const img =
    buttonClass === 'call'
      ? callicon
      : buttonClass === 'message'
      ? messageicon
      : buttonClass === 'locate'
      ? locateicon
      : buttonClass === 'close'
      ? closeicon
      : buttonClass === 'edit'
      ? editicon
      : buttonClass === 'check'
      ? checkicon
      : buttonClass === 'search'
      ? searchicon
      : buttonClass === 'add'
      ? addicon
      : '';
  return (
    <button
      type="button"
      className={['btn', `btn--${buttonClass}`].join(' ')}
      style={{
        backgroundColor: backgroundColor,
      }}
      {...props}
    >
      <div className={`btn--image`} style={{ backgroundImage: img }}></div>
      {label}
    </button>
  );
};
