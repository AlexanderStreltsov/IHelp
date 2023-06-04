import styles from './popup.module.scss';
import { CSSProperties, ReactNode } from 'react';

interface IPopup {
  arrow?: 'right' | 'center' | 'none';
  widthPopup?: 'small' | 'middle' | 'big';
  shadow?: boolean;
  moduleOutStyles?: string;
  outStyles?: CSSProperties;
  children: ReactNode;
  cornerRadius?: boolean;
}

/**
 * Данный компонент является внешней оболочкой попапов и модальных окон.
 */

export const Popup = ({
  arrow = 'right',
  widthPopup = 'middle',
  shadow = true,
  outStyles,
  moduleOutStyles,
  children,
  cornerRadius = false,
}: IPopup) => {
  return (
    <div
      className={`${styles.popup} ${
        arrow === 'right'
          ? styles.arrow_type_right
          : arrow === 'center'
          ? styles.arrow_type_center
          : styles.arrow_type_none
      } ${
        widthPopup === 'small'
          ? styles.width_type_small
          : widthPopup === 'middle'
          ? styles.width_type_middle
          : styles.width_type_big
      } ${shadow && styles.shadow} ${
        cornerRadius && styles.corners_raduis
      } ${moduleOutStyles}`}
      style={outStyles}
    >
      {children}
    </div>
  );
};
