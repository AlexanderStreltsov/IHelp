import React, { useEffect, useState } from 'react';
import styles from './profile.module.scss';
import { ProfileInformation } from './profileInformation/profileInformation';
import { ProfileFone } from '../../ui/icons/profile-fone';
import { Button } from '../../ui/button/button';
import { BallsIcon } from '../../ui/icons/balls-icon';
import { KeyIcon } from '../../ui/icons/key-icon';
import { FinishedApplicationIcon } from '../../ui/icons/finished-application-icon';
import { PersonIcon } from '../../ui/icons/person-icon';
import { ProgressIcon } from '../../ui/icons/progress-icon';
import { ProfileFoneMobile } from '../../ui/icons/profile-fone-mobile';
import { getAllUsers } from '../../api';
import { TUser } from '../../types';

export interface IProfileProps {
  id?: number;
  type?: 'volunteer' | 'recipient' | 'admin' | 'chief' | 'signUp' | 'noName';
  className?: string;
}

export const Profile: ({
  id,
  type,
  className,
  ...props
}: IProfileProps) => any = ({
  id,
  type,
  className = '',
  ...props
}: IProfileProps) => {
  const extClassName = className || '';
  const [width, setWidth] = useState(window.innerWidth);
  const [one, setData] = useState<TUser[]>();

  useEffect(() => {
    const getData = async () => {
      const allArray = await getAllUsers();
      setData(allArray);
    };
    getData();
    window.onresize = () => {
      setWidth(window.innerWidth);
    };
  }, [width]);

  const data = one?.find((el) => el.id === id);
  //если ID нету, перебрасываем на страницу регистрации
  if (!data) return;
  const user: TUser = data;
  const { photo } = user;
  console.log(user);
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
        {data.role === 'volunteer' && (
          <div className={styles.infoBlock}>
            <ProfileInformation key={id} {...user} />
            <BallsIcon className={styles.ballsIcon} color={'dark-blue'} />
            <span className={`${styles.ballsSum} text-small`}>
              {data.scores}
            </span>
            <KeyIcon className={styles.keyIcon} color={'dark-blue'} />
            <span className={`${styles.keySum} text-small`}>{0}</span>
            <FinishedApplicationIcon
              className={styles.finishIcon}
              color={'dark-blue'}
            />
            <span className={`${styles.finishSum} text-small`}>
              {data.completed}
            </span>
          </div>
        )}
        {data.role === 'recipient' && (
          <div className={styles.infoBlock}>
            <ProfileInformation key={id} {...user} />
            <ProgressIcon
              className={styles.recipientIcon}
              color={'dark-blue'}
            />
            <span className={`${styles.sumText} text-small`}>
              {1} из {5}
            </span>
          </div>
        )}
        {data.role === ('admin' || 'chief') && (
          <div className={styles.infoBlock}>
            <ProfileInformation key={id} {...user} />
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
            <ProfileInformation />
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
