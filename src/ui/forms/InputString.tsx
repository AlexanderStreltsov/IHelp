import React, { useState } from 'react';
import styles from './inputString.module.scss';

interface Props {
  label: string;
  placeholder: string;
  initialValue: string;
  id?: string;
  name: string;
  onChange?: (value: string) => void;
}

/**
 * Input field for name
 */
export const InputString: React.FC<Props> = ({
  label,
  placeholder,
  initialValue,
  id,
  name,
  onChange,
}: Props) => {
  const [value, setValue] = useState(initialValue);

  const inputId = id ? id : `input-name-${Math.random()}`;
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);

    if (onChange) {
      onChange(e.currentTarget.value);
    }
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
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      ></input>
    </div>
  );
};
