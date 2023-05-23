import React from 'react';
import styles from './input.module.scss';

interface Props {
  /**
   * Input value
   */
  value: string;
  /**
   * Change handler
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
