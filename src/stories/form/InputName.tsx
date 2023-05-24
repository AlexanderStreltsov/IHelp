import React, { useState } from 'react';
import styles from './input.module.scss';

interface Props {
  /**
   * Input value
   */
  initialValue: string;
  /**
   * Change handler
   */
  onChange: (value: string) => void;
}

/**
 * Input field for name
 */
export const InputName: React.FC<Props> = ({
  initialValue,
  onChange,
}: Props) => {
  const [value, setValue] = useState(initialValue);

  const inputId = `input-name-${Math.random()}`;
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    onChange(e.currentTarget.value);
  };

  return (
    <div className={styles.form}>
      <label className={styles.label} htmlFor={inputId}>
        Имя
      </label>
      <input
        className={styles.input}
        id={inputId}
        type="text"
        placeholder="Введите имя"
        value={value}
        onChange={onInputChange}
      ></input>
    </div>
  );
};
