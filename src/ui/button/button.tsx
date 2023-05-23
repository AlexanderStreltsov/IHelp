import React, { ComponentType, HTMLAttributes, useState } from 'react';
import styles from './button.module.scss';
import { ArrowIcon } from '../icons/arrow-icon';
import { PhoneIcon } from '../icons/phone-icon';
import { MessageIcon } from '../icons/message-icon';
import { LocationIcon } from '../icons/location-icon';
import { CloseIcon } from '../icons/close-icon';
import { EditIcon } from '../icons/edit-icon';
import { ConfirmIcon } from '../icons/confirm-icon'; //галочка которая с крестиком
import { SettingsIcon } from '../icons/settings-icon';
import { ExcelIcon } from '../icons/excel-icon';
import { DownloadIcon } from '../icons/download-icon';
import { RequestMapIcon } from '../icons/request-map-icon';
import { ActiveRequestVersion1Icon } from '../icons/active-request-big-version-1-icon';
import { ExecutedRequestIcon } from '../icons/executed-request-icon';
import { StatsIcon } from '../icons/stats-icon';
import { CreateEditIcon } from '../icons/create-edit-icon';

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
  icon?: 'map' | 'active' | 'completed' | 'statistics' | 'application';
  children: string;
  disabled: boolean;
  onClick: (() => void) | ((e: React.SyntheticEvent) => void);
}

export const Button = ({
  type = 'block',
  disabled = false,
  children,
  icon,
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
        <span className={`${styles.text} text-medium`}>{children}</span>
      </div>
    );
  };

  const BigCard = () => {
    return (
      <>
        {icon === 'map' && (
          <RequestMapIcon color={'white'} className={styles.svg} />
        )}
        {icon === 'active' && (
          <ActiveRequestVersion1Icon color={'white'} className={styles.svg} />
        )}
        {icon === 'completed' && (
          <ExecutedRequestIcon color={'white'} className={styles.svg} />
        )}
        {icon === 'statistics' && (
          <StatsIcon color={'white'} className={styles.svg} />
        )}
        {icon === 'application' && (
          <CreateEditIcon color={'white'} className={styles.svg} />
        )}
        <span className={`${styles.text} text-medium`}>{children}</span>
      </>
    );
  };

  return (
    <button
      className={`${styles.button} ${styles[type]} text-small`}
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
        <div className={styles.quadrilateral}>
          <SettingsIcon color={'white'} className={styles.image} />
          <SettingsIcon color={'dark-blue'} className={styles.image_hover} />
        </div>
      )}
      {type === 'quadrilateralExcel' && (
        <div className={styles.quadrilateral}>
          <ExcelIcon color={'white'} className={styles.image} />
          <DownloadIcon color={'white'} className={styles.image_hover} />
        </div>
      )}
      {type === 'block' && (
        <span className={`${styles.text} text-medium`}>{children}</span>
      )}
      {type === 'apply' && (
        <span className={`${styles.text} text-medium`}>{children}</span>
      )}
    </button>
  );
};
