import React, { useState } from 'react';
import styles from './inputString.module.scss';

interface Props {
  /**
   * Label
   */
  label: string;
  /**
   * Placeholder
   */
  placeholder: string;
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
  label,
  placeholder,
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
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        id={inputId}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      ></input>
    </div>
  );
};
