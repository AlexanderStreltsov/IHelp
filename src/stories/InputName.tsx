import React from 'react';
import './inputName.scss';

interface Props {
  /**
   * Input value
   */
  value: string;
  /**
   * Optional change handler
   */
  onChange: (value: string) => void;
}

/**
 * Input field for name
 */
export const InputName: React.FC<Props> = ({ value, onChange }: Props) => {
  const inputId = `input-name-${Math.random()}`;
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <div>
      <label htmlFor={inputId}>Имя</label>
      <input
        id={inputId}
        type="text"
        placeholder="Введите имя"
        value={value}
        onChange={onInputChange}
      ></input>
    </div>
  );
};
