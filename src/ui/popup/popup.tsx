import styles from './popup.module.scss';
import React, { CSSProperties, ReactNode } from 'react';

interface IPopup {
  arrow?: 'right' | 'center' | 'none';
  width?: 'small' | 'middle' | 'big';
  shadow?: boolean;
  moduleOutStyles?: string;
  outStyles?: CSSProperties;
  children: ReactNode;
}

export const Popup = ({
  arrow = 'right',
  width = 'middle',
  shadow = true,
  outStyles,
  moduleOutStyles,
  children,
}: IPopup) => (
  <div
    className={`${styles.popup} ${
      arrow === 'right'
        ? styles.arrow_type_right
        : arrow === 'center'
        ? styles.arrow_type_center
        : styles.arrow_type_none
    } ${
      width === 'small'
        ? styles.width_type_small
        : width === 'middle'
        ? styles.width_type_middle
        : styles.width_type_big
    } ${shadow && styles.shadow} ${moduleOutStyles}`}
    style={outStyles}
  >
    {children}
  </div>
);
