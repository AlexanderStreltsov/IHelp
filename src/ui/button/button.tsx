import React, { ComponentType, HTMLAttributes } from 'react';
import styles from './button.module.scss';
import { ArrowIcon } from '../icons/arrow-icon';
import { PhoneIcon } from '../icons/phone-icon';
import { MessageIcon } from '../icons/message-icon';
import { LocationIcon } from '../icons/location-icon';
import { CloseIcon } from '../icons/close-icon';
import { EditIcon } from '../icons/edit-icon';
import { ConfirmIcon } from '../icons/confirm-icon';
import { SettingsIcon } from '../icons/settings-icon';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?:
    | 'block'
    | 'apply'
    | 'search'
    | 'circleSmallPhone'
    | 'circleSmallEmail'
    | 'circleLocation'
    | 'circleBigCross'
    | 'quadrilateralExit'
    | 'quadrilateralEdit'
    | 'quadrilateralConfirm'
    | 'quadrilateralSetting';
  // className?: string;
  children: string;
  disabled: boolean;
  hover?: boolean;
  onClick: (() => void) | ((e: React.SyntheticEvent) => void);
}

export const Button = ({
  type = 'block',
  disabled = false,
  children,
  hover = false,
  ...props
}: IButtonProps) => {
  const Rectangle = () => {
    return (
      <div className={styles.over}>
        <div className={styles.rectangle}> </div>
        <ArrowIcon color={'white'} className={styles.svg} />
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
      {type === 'search' && <Rectangle />}
      {type === 'circleSmallPhone' && (
        <PhoneIcon color={'white'} className={styles.image} />
      )}
      {type === 'circleSmallEmail' && (
        <MessageIcon color={'white'} className={styles.image} />
      )}
      {type === 'circleLocation' && (
        <LocationIcon color={'white'} className={styles.image} />
      )}
      {type === 'circleBigCross' && (
        <>
          <div className={styles.crossFirst}></div>
          <div className={styles.crossSecond}></div>
        </>
      )}
      {type === 'quadrilateralExit' && (
        <div className={styles.quadrilateral}>
          <CloseIcon color={'white'} className={styles.image} />
        </div>
      )}
      {type === 'quadrilateralEdit' && (
        <div className={styles.quadrilateral}>
          <EditIcon color={'white'} className={styles.image} />
        </div>
      )}
      {type === 'quadrilateralConfirm' && (
        <div className={styles.quadrilateral}>
          <ConfirmIcon color={'white'} className={styles.image} />
        </div>
      )}
      {type === 'quadrilateralSetting' && (
        <div className={styles.quadrilateral}>
          <SettingsIcon
            color={styles.blue ? 'dark-blue' : 'white'}
            className={styles.image}
          />
        </div>
      )}
      <p className={styles.text}>{children}</p>
    </button>
  );
};
