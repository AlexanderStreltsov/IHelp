import React, { useEffect, useRef, useState } from 'react';
import styles from './inputPhoneNumber.module.scss';

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
  const [error, setError] = useState<string | undefined>();
  useEffect(() => {
    if (!error) {
      setError(errorMessage);
    }
  }, [error, errorMessage]);
  const inputRef = useRef<HTMLInputElement>(null);

  const isNumberValid = (phoneNumber: string) => {
    if (!phoneNumber.startsWith('8') && !phoneNumber.startsWith('+7')) {
      return false;
    }
    if (phoneNumber.replace(/\D/g, '').length !== 11) {
      return false;
    }
    return true;
  };

  const inputId = `input-name-${Math.random()}`;
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;
    setValue(currentValue);
    if (!isNumberValid(currentValue)) {
      setError('Указан некорректный номер');
      inputRef.current?.setCustomValidity('Указан некорректный номер');
    } else {
      setError(undefined);
      inputRef.current?.setCustomValidity('');
    }
    onChange(currentValue);
  };

  return (
    <div className={styles.formPhoneNumber}>
      <label className={styles.labelPhoneNumber} htmlFor={inputId}>
        Телефон
      </label>
      <input
        className={`${styles.input} ${styles.inputPhoneNumber} ${
          error ? styles.wrongInput : styles.correctInput
        }`}
        id={inputId}
        type="tel"
        placeholder="+7 (000) 000 00 00"
        value={value}
        onChange={onInputChange}
        ref={inputRef}
      ></input>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};
