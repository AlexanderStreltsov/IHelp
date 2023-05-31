import React, { useEffect, useState } from 'react';
import styles from './profile.module.scss';
import { ProfileFone } from '../../ui/icons/profile-fone';
import { Button } from '../../ui/button/button';
import { BallsIcon } from '../../ui/icons/balls-icon';
import { KeyIcon } from '../../ui/icons/key-icon';
import { FinishedApplicationIcon } from '../../ui/icons/finished-application-icon';
import { PersonIcon } from '../../ui/icons/person-icon';
import { ProgressIcon } from '../../ui/icons/progress-icon';
import { ProfileFoneMobile } from '../../ui/icons/profile-fone-mobile';

export interface IProfileProps {
  type?: 'volunteer' | 'recipient' | 'administration' | 'signUp' | 'noName';
  className?: string;
}

export const Profile = ({
  type = 'volunteer',
  className = '',
  ...props
}: IProfileProps) => {
  const extClassName = className || '';
  const photo = '';
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.onresize = () => {
      setWidth(window.innerWidth);
    };
  }, [width]);
  const Information = () => {
    return (
      <>
        <span className={`${styles.info} ${styles.name} text-medium`}>
          {type === 'noName' ? 'ФИО' : 'Иванов Иван Иванович'}
        </span>
        <span
          className={`${styles.info} ${styles.infoId} ${styles.infoIdLabelPosition} text-small`}
        >
          ID
        </span>
        <span
          className={`${styles.info} ${styles.infoId} ${styles.infoIdLabelText} text-small`}
        >
          {112233}
        </span>
        <span
          className={`${styles.info} ${styles.boldLabelPhone} text-small-bold`}
        >
          Тел.:
        </span>
        <span className={`${styles.info} ${styles.textLabelPhone} text-small`}>
          {'+7(000)000-00-00'}
        </span>
        <span
          className={`${styles.info} ${styles.boldLabelAddress} text-small-bold`}
        >
          Адрес:
        </span>
        <span
          className={`${styles.info} ${styles.textLabelAddress} text-small`}
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
      <div className={`${styles.infoBox}`}>
        <div className={`${styles.backgroundInfoBox} `}>
          {width > 720 && <ProfileFone />}
          {width < 721 && <ProfileFoneMobile />}
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
            <span className={`${styles.sumText} text-small`}>
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
        {type === 'noName' && (
          <div className={styles.infoBlock}>
            <Information />
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
