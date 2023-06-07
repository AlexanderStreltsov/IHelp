import React, { useState } from 'react';
import { UserInfo } from './UserInfo';
import styles from './applicationTooltip.module.scss';
import { TextWithMore } from './TextWithMore';
import { BallsIcon } from '../icons/balls-icon';
import { Button } from '../button/button';
import { ElementColors } from '../../common/variables';

export interface Applicant {
  name: string;
  phoneNumber: string;
  avatarUrl: string;
}

export interface Application {
  applicant: Applicant;
  request: string;
  counter: number;
  isUrgent: boolean;
}

interface Props {
  /**
   * Application
   */
  application: Application;
}

export const ApplicationTooltip: React.FC<Props> = ({ application }) => {
  const { name, phoneNumber, avatarUrl } = application.applicant;
  const ballsColor = application.isUrgent
    ? ElementColors.urgent
    : ElementColors.partsPrimary;
  const counterClass = application.isUrgent
    ? styles.counterUrgent
    : styles.counter;

  return (
    <div className={styles.conteiner}>
      <UserInfo
        userAvatar={avatarUrl}
        userName={name}
        userPhonenumber={phoneNumber}
      />
      <TextWithMore text={application.request} />
      <div className={styles.border}></div>
      <div className={styles.status}>
        <div className={counterClass}>{application.counter}</div>
        <BallsIcon color={ballsColor} />
      </div>
      <div className={styles.button}>
        <Button
          onClick={() => {}}
          type="apply"
          className={application.isUrgent ? styles.urgent : styles.urgentFalse}
        >
          Откликнуться
        </Button>
      </div>
    </div>
  );
};
