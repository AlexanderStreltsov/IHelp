import React, { HTMLAttributes } from 'react';
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
import { ApproveIcon } from '../icons/approve-icon';
import { VkIcon } from '../icons/vk-icon';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?:
    | 'block'
    | 'apply'
    | 'applyVK'
    | 'search'
    | 'circleSmallPhone'
    | 'circleSmallEmail'
    | 'circleLocation'
    | 'circleBigCross'
    | 'quadrilateralExit'
    | 'quadrilateralEdit'
    | 'quadrilateralApprove'
    | 'quadrilateralSetting'
    | 'quadrilateralExcel'
    | 'bigCard';
  icon?:
    | 'map'
    | 'active'
    | 'completed'
    | 'statistics'
    | 'application'
    | 'confirm';
  children?: string;
  disabled?: boolean;
  onClick: (() => void) | ((e: React.SyntheticEvent) => void);
  active?: true | false | null;
}

export const Button = ({
  type = 'block',
  disabled = false,
  children,
  icon,
  className = '',
  active,
  ...props
}: IButtonProps) => {
  const extClassName = className || '';
  const activeClass = active ? styles.active : '';
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
        {icon === 'confirm' && (
          <ConfirmIcon color={'white'} className={styles.svg} />
        )}
        <span className={`${styles.text} text-medium`}>{children}</span>
      </>
    );
  };

  return (
    <button
      className={`${styles.button} ${styles[type]} ${extClassName} ${activeClass} text-small`}
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
      {type === 'quadrilateralApprove' && (
        <div className={styles.quadrilateral}>
          <ApproveIcon color={'white'} className={styles.image} />
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
      {type === 'applyVK' && (
        <>
          <VkIcon color={'white'} className={styles.imageVK} />
          <span className={`${styles.text} text-medium`}>{children}</span>
        </>
      )}
    </button>
  );
};
