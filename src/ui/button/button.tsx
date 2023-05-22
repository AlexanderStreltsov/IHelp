import React, { ComponentType, HTMLAttributes, useState } from 'react';
import styles from './button.module.scss';
import { ArrowIcon } from '../icons/arrow-icon';
import { PhoneIcon } from '../icons/phone-icon';
import { MessageIcon } from '../icons/message-icon';
import { LocationIcon } from '../icons/location-icon';
import { CloseIcon } from '../icons/close-icon';
import { EditIcon } from '../icons/edit-icon';
import { ConfirmIcon } from '../icons/confirm-icon';
import { SettingsIcon } from '../icons/settings-icon';
import { ExcelIcon } from '../icons/excel-icon';
import { DownloadIcon } from '../icons/download-icon';
import { RequestMapIcon } from '../icons/request-map-icon';

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
    | 'quadrilateralSetting'
    | 'quadrilateralExcel'
    | 'bigCard';
  children: string;
  disabled: boolean;
  // icon: 'map' | 'card' | 'some';
  onClick: (() => void) | ((e: React.SyntheticEvent) => void);
  onMouseEnter: (() => void) | ((e: React.MouseEvent) => void);
  noMouseLeave: (() => void) | ((e: React.MouseEvent) => void);
}

export const Button = ({
  type = 'block',
  disabled = false,
  children,
  onMouseEnter,
  onMouseLeave,
  ...props
}: IButtonProps) => {
  // Cостояние для для цвета icon settinds при hover
  const [stateHover, setStateHover] = useState<boolean>(false);
  //Состояние для изменения c icon excel на download при hover
  const [stateHoverExcel, setStateHoverExcel] = useState<boolean>(false);

  const mouseOn = (actions: string) => {
    switch (actions) {
      case 'setting':
        return setStateHover(true);
      case 'excel':
        return setStateHoverExcel(true);
      default:
        break;
    }
  };
  const mouseOf = (actions: string) => {
    switch (actions) {
      case 'setting':
        return setStateHover(false);
      case 'excel':
        return setStateHoverExcel(false);
      default:
        break;
    }
  };

  const Rectangle = () => {
    return (
      <div className={styles.over}>
        <div className={styles.rectangle}> </div>
        <ArrowIcon color={'white'} className={styles.svg} />
        <p className={styles.text}>{children}</p>
      </div>
    );
  };

  const BigCard = () => {
    return (
      <>
        <RequestMapIcon color={'white'} className={styles.svg} />
        <p className={styles.text}>{children}</p>
      </>
    );
  };

  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      disabled={disabled}
      {...props}
    >
      {type === 'search' && <Rectangle />}
      {type === 'bigCard' && <BigCard />}
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
        <div
          className={styles.quadrilateral}
          onMouseEnter={() => mouseOn('setting')}
          onMouseLeave={() => mouseOf('setting')}
        >
          <SettingsIcon
            color={stateHover ? 'dark-blue' : 'white'}
            className={styles.image}
          />
        </div>
      )}
      {type === 'quadrilateralExcel' && (
        <div
          className={styles.quadrilateral}
          onMouseEnter={() => mouseOn('excel')}
          onMouseLeave={() => mouseOf('excel')}
        >
          {!stateHoverExcel ? (
            <ExcelIcon color={'white'} className={styles.image} />
          ) : (
            <DownloadIcon color={'white'} className={styles.image} />
          )}
        </div>
      )}
      {type === 'block' && <p className={styles.text}>{children}</p>}
      {type === 'apply' && <p className={styles.text}>{children}</p>}
    </button>
  );
};
