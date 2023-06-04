import { CSSProperties } from 'react';
import { Checkmark } from '../icons/checkmark';
import styles from './checkbox.module.scss';

interface ICheckbox {
  type?: 'checkbox' | 'radio';
  name: string;
  value: string;
  check?: boolean;
  form?: 'checkbox' | 'button';
  label: string | null;
  outStyles?: CSSProperties;
  moduleOutStyles?: string;
}

export const Checkbox = ({
  type = 'checkbox',
  name,
  value,
  check = false,
  form = 'checkbox',
  label = null,
  outStyles,
  moduleOutStyles,
}: ICheckbox) => {
  // верстка input
  const input = (
    <input
      type={type}
      name={name}
      value={value}
      defaultChecked={check}
      className={styles.input}
    />
  );

  // вёрстка внешнего оформления input в виде checkbox
  const checkbox = (
    <label
      className={`${styles.label} text-small ${moduleOutStyles}`}
      style={outStyles}
    >
      {input}
      <span
        className={`${styles.fakeChekbox} ${
          label && styles.fakeChekboxWithLabel
        }`}
      >
        {<Checkmark color="white" className={styles.checkmark} />}
      </span>
      {label}
    </label>
  );

  // вёрстка внешнего оформления input в виде кнопок
  const button = (
    <label className={`${styles.label} ${moduleOutStyles}`} style={outStyles}>
      {input}
      <span className={`${styles.fakeButton}  text-small`}>{label}</span>
    </label>
  );

  return form === 'checkbox' ? checkbox : button;
};
