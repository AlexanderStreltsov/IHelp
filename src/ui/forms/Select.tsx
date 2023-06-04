import React, { useState, HTMLAttributes, CSSProperties } from 'react';
import styles from './select.module.scss';
import { nanoid } from 'nanoid';

export interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
  name?: string;
  label?: string | undefined;
  width?: 'short' | 'long';
  labelOutStyles?: CSSProperties;
  selectOutStyles?: CSSProperties;
  elementOutStyles?: CSSProperties;
  initialOptionName: string;
  selectableValues: string[] | { id: number; name: string }[];
  sendValue?: (selected: string) => void | undefined;
}

/**
 * Это элемент выбора одного из значений
 */
export const Select: React.FC<ISelectProps> = ({
  name = 'select',
  label = undefined,
  initialOptionName,
  selectableValues,
  width = 'long',
  labelOutStyles,
  selectOutStyles,
  elementOutStyles,
  sendValue,
  ...props
}: ISelectProps) => {
  // сохранение выбранного значения
  const [selected, setSelected] = useState('');
  const inputId = `input-name-${Math.random()}`;
  // обработка события выбора значения из выпадающего списка
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    sendValue && sendValue(e.target.value);
  };
  // формирование списка значений для выбора
  const options = selectableValues.map((item) => {
    if (typeof item === 'string') {
      return (
        <option className={styles.option} value={item} key={nanoid()}>
          {item}
        </option>
      );
    } else {
      return (
        <option
          className={`${styles.option} text-small ${
            width === 'short' && 'text-medium'
          }`}
          value={item.id}
          key={nanoid()}
        >
          {item.name}
        </option>
      );
    }
  });

  return (
    <div className={styles.form} style={elementOutStyles}>
      {label && (
        <label
          className={`${styles.label} text-small ${
            width === 'short' && styles.labelShort
          }`}
          htmlFor={inputId}
          style={labelOutStyles}
        >
          {label}
        </label>
      )}
      <select
        name={name}
        className={`${
          width === 'short' && `${styles.selectShort} text-medium`
        } ${styles.select} ${selected && styles.selectWithValue}`}
        id={inputId}
        value={selected}
        onChange={onSelect}
        style={selectOutStyles}
        {...props}
      >
        <option value="" disabled>
          {initialOptionName}
        </option>
        {options}
      </select>
    </div>
  );
};
