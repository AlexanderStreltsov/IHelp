import React, { useState } from 'react';
import styles from './input.module.scss';

interface Props {
  /**
   * Input value
   */
  initialValue: string;
  /**
   * Error message
   */
  errorMessage?: string;
  /**
   * Change handler
   */
  onChange: (value: string) => void;
}

/**
 * Input field for name
 */
export const InputPhoneNumber: React.FC<Props> = ({
  initialValue,
  errorMessage,
  onChange,
}: Props) => {
  const [value, setValue] = useState(initialValue);

  const inputId = `input-name-${Math.random()}`;
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    onChange(e.currentTarget.value);
  };

  return (
    <div className={styles.formPhoneNumber}>
      <label className={styles.labelPhoneNumber} htmlFor={inputId}>
        Телефон
      </label>
      <input
        className={`${styles.inputPhoneNumber} ${
          errorMessage ? styles.wrongInput : styles.correctInput
        }`}
        id={inputId}
        type="tel"
        placeholder="+7 (000) 000 00 00"
        value={value}
        onChange={onInputChange}
      ></input>
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};
