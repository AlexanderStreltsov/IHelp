import { Checkmark } from '../icons/checkmark';
import styles from './checkbox.module.scss';

interface ICheckbox {
  type?: 'checkbox' | 'radio';
  name: string;
  value: string;
  check?: boolean;
  form?: 'checkbox' | 'button';
  label: string | null;
}

export const Checkbox = ({
  type = 'checkbox',
  name,
  value,
  check = false,
  form = 'checkbox',
  label = null,
}: ICheckbox) => {
  const input = (
    <input
      type={type}
      name={name}
      value={value}
      defaultChecked={check}
      className={styles.input}
    />
  );
  const checkbox = (
    <label className={`${styles.label} text-small`}>
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
  const button = (
    <label className={styles.label}>
      {input}
      <span className={`${styles.fakeButton}  text-small`}>{label}</span>
    </label>
  );
  return form === 'checkbox' ? checkbox : button;
};
