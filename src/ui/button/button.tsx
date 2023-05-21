import React, { ComponentType, HTMLAttributes } from 'react';
import styles from './button.module.scss';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?:
    | 'block'
    | 'apply'
    | 'search'
    | 'circleSmall'
    | 'circleBig'
    | 'circleMiddle';
  // className?: string;
  children: string;
  disabled: boolean;
  onClick: (() => void) | ((e: React.SyntheticEvent) => void);
}

export const Button = ({
  type = 'block',
  disabled = false,
  children,
  ...props
}: IButtonProps) => {
  const Rectangle = () => {
    return (
      <div className={styles.over}>
        <div className={styles.rectangle}> </div>
        <p className={styles.text}>{children}</p>
      </div>
    );
  };

  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      disabled={disabled}
      {...props}
    >
      {type === 'search' ? (
        <Rectangle />
      ) : (
        <p className={styles.text}>{children}</p>
      )}
    </button>
  );
};
