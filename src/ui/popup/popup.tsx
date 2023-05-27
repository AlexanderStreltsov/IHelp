import styles from './popup.module.scss';
import React, {
  CSSProperties,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

interface IPopup {
  arrow?: 'right' | 'center' | 'none';
  widthPopup?: 'small' | 'middle' | 'big';
  shadow?: boolean;
  moduleOutStyles?: string;
  outStyles?: CSSProperties;
  children: ReactNode;
  cornerRadius?: boolean;
  position?: 'center' | { coordinateX: number; coordinateY: number };
  setIsShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Данный компонент является внешней оболочкой попапов. Его отрисовка должна определяться
 * родительким компонетом. Родительский компонент должен имеет переменную состояния, например,
 * showPopup типа boolean. Если значение этой переменной false, то попап не показывается. Если ее
 * значение true, то попап показывается. При этом в пропс попапа "setIsShowPopup" должен быть
 * передан метод изменения значения переменной showPopup. Благодаря этому его можно закрыть
 * щелчком по пространству за пределами попапа или клавишей esc.
 */

export const Popup = ({
  arrow = 'right',
  widthPopup = 'middle',
  shadow = true,
  outStyles,
  moduleOutStyles,
  children,
  cornerRadius = false,
  position = 'center',
  setIsShowPopup,
}: IPopup) => {
  let popupRoot: HTMLElement = document.createElement('div');
  const element = document.getElementById('popup-root');
  if (element instanceof HTMLElement) {
    popupRoot = element;
  }
  // данные о размере попапа
  const [dataPopup, setDataPopup] = useState({
    widthReal: 0,
    heightReal: 0,
  });
  const refPopup = useRef<HTMLDivElement>(null);
  // закрытие попапа
  const closePortal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const eventTarget = event.target as HTMLElement;
    if (eventTarget.classList.contains(styles.portal)) {
      setIsShowPopup(false);
    }
  };
  const closePopupWithEsc = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      setIsShowPopup(false);
    }
  };
  // вычисление реальных размеров попапа
  useLayoutEffect(() => {
    document.addEventListener('keydown', closePopupWithEsc);
    if (refPopup && refPopup.current) {
      const { width, height } = refPopup.current.getBoundingClientRect();
      setDataPopup({
        widthReal: width,
        heightReal: height,
      });
    }
    return () => {
      document.removeEventListener('keydown', closePopupWithEsc);
    };
  }, []);
  // позиционирование попапа с учетом его формы и размеров, чтобы он не выходил за границы экрана
  let left = 0;
  let top = 0;
  const windowInnerWidth = window.innerWidth;
  const windowInnerHeight = window.innerHeight;
  if (position !== 'center') {
    // позиционирование при стрелке в центре или без нее по горизонтали
    if (arrow === 'center' || arrow === 'none') {
      // проверка справа
      if (
        position.coordinateX + dataPopup.widthReal / 2 >
        windowInnerWidth - 10
      ) {
        left = windowInnerWidth - 10 - dataPopup.widthReal;
      } else {
        left = position.coordinateX - dataPopup.widthReal / 2;
      }
      // проверка слева
      if (position.coordinateX - dataPopup.widthReal / 2 < 10) {
        left = 10;
      }
    }
    // позиционирование при стрелке справа по горизонтали
    if (arrow === 'right') {
      // проверка справа
      if (position.coordinateX + 24 > windowInnerWidth - 10) {
        left = windowInnerWidth - 10 - dataPopup.widthReal;
      } else {
        left = position.coordinateX - dataPopup.widthReal + 24;
      }
      // проверка слева
      if (position.coordinateX - dataPopup.widthReal + 14 < 10) {
        left = 10;
      }
    }
    // позиционирование по вертикали
    if (position.coordinateY + dataPopup.heightReal > windowInnerHeight) {
      top = windowInnerHeight - 10 - dataPopup.heightReal;
    } else if (position.coordinateY < 20) {
      top = 20;
    } else {
      top = position.coordinateY + 10;
    }
  }

  return (
    <>
      {createPortal(
        <div
          className={`${styles.portal} ${
            position === 'center' && styles.portal_position_center
          }`}
          onClick={(e) => closePortal(e)}
        >
          <div
            ref={refPopup}
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
            style={
              position === 'center'
                ? outStyles
                : {
                    ...outStyles,
                    position: 'absolute',
                    left: left + 'px',
                    top: top + 'px',
                  }
            }
          >
            {children}
          </div>
        </div>,
        popupRoot,
      )}
    </>
  );
};
