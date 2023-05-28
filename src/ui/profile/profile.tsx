import React from 'react';
import styles from './profile.module.scss';
import { ProfileFone } from '../icons/profile-fone';
import { Button } from '../button/button';
import { BallsIcon } from '../icons/balls-icon';
import { KeyIcon } from '../icons/key-icon';
import { FinishedApplicationIcon } from '../icons/finished-application-icon';
import { PersonIcon } from '../icons/person-icon';
import { ProgressIcon } from '../icons/progress-icon';

export interface IProfileProps {
  type?: 'volunteer' | 'recipient' | 'administration' | 'signUp';
  className?: string;
  // volunteer?: {
  //   id?: string;
  //   image?: string;
  //   name?: string;
  //   phone?: number;
  //   address?: string;
  //   like?: number;
  //   key?: number;
  //   heart?: number;
  // };
  // recipient?: {
  //   id?: string;
  //   image?: string;
  //   name?: string;
  //   phone?: number;
  //   address?: string;
  //   someQuest?: number;
  // };
  // administration?: {
  //   id?: string;
  //   image?: string;
  //   name?: string;
  //   phone?: number;
  //   address?: string;
  // };
}

export const Profile = ({ type = 'volunteer', className = '', ...props }) => {
  const extClassName = className || '';
  const photo = '';
  const Information = () => {
    return (
      <>
        <span className={`${styles.info} ${styles.name} text-medium`}>
          Иванов Иван Иванович
        </span>
        <span
          className={`${styles.info} ${styles.infoId} ${styles.infoIdLabelPosition} text-medium-line`}
        >
          ID
        </span>
        <span
          className={`${styles.info} ${styles.infoId} ${styles.infoIdLabelText} text-medium-line`}
        >
          {112233}
        </span>
        <span
          className={`${styles.info} ${styles.boldLabelPhone} text-small-bold`}
        >
          Тел.:
        </span>
        <span
          className={`${styles.info} ${styles.textLabelPhone} text-medium-line`}
        >
          {'+7(000)000-00-00'}
        </span>
        <span
          className={`${styles.info} ${styles.boldLabelAddress} text-small-bold`}
        >
          Адрес:
        </span>
        <span
          className={`${styles.info} ${styles.textLabelAddress} text-medium-line`}
        >
          {'Ул. Потолочного д. 3'}
        </span>
      </>
    );
  };
  return (
    <div className={`${styles.container} ${extClassName}`} {...props}>
      <div className={styles.photoBox}>
        {!!photo ? (
          <img alt="photo" src={photo} className={styles.photo} />
        ) : (
          <PersonIcon className={styles.defaultPhoto} color={'white'} />
        )}
      </div>
      <div className={styles.infoBox}>
        <div className={styles.backgroundInfoBox}>
          <ProfileFone />
        </div>
        {type === 'volunteer' && (
          <div className={styles.infoBlock}>
            <Information />
            <BallsIcon className={styles.ballsIcon} color={'dark-blue'} />
            <span className={`${styles.ballsSum} text-small`}>{2500}</span>
            <KeyIcon className={styles.keyIcon} color={'dark-blue'} />
            <span className={`${styles.keySum} text-small`}>{1}</span>
            <FinishedApplicationIcon
              className={styles.finishIcon}
              color={'dark-blue'}
            />
            <span className={`${styles.finishSum} text-small`}>{150}</span>
          </div>
        )}
        {type === 'recipient' && (
          <div className={styles.infoBlock}>
            <Information />
            <ProgressIcon
              className={styles.recipientIcon}
              color={'dark-blue'}
            />
            <span className={`${styles.sumText} text-medium-line`}>
              {1} из {5}
            </span>
          </div>
        )}
        {type === 'administration' && (
          <div className={styles.infoBlock}>
            <Information />
          </div>
        )}
        {type === 'signUp' && (
          <div className={styles.infoBlock}>
            <Button
              className={`${styles.signUp}`}
              disabled={false}
              onClick={() => {
                console.log('tt');
              }}
              type="apply"
            >
              Зарегистрироваться
            </Button>
            <Button
              className={styles.comeIn}
              onClick={() => {
                console.log('tt');
              }}
              type="block"
            >
              Войти
            </Button>
          </div>
        )}
        <Button
          onClick={() => {
            console.log('tt');
          }}
          type="quadrilateralSetting"
        />
      </div>
    </div>
  );
};
