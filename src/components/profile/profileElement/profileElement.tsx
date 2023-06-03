import styles from '../profile.module.scss';
import { PersonIcon } from '../../../ui/icons/person-icon';
import { ProfileFone } from '../../../ui/icons/profile-fone';
import { ProfileFoneMobile } from '../../../ui/icons/profile-fone-mobile';
import { ProfileInformation } from '../profileInformation/profileInformation';
import { BallsIcon } from '../../../ui/icons/balls-icon';
import { KeyIcon } from '../../../ui/icons/key-icon';
import { FinishedApplicationIcon } from '../../../ui/icons/finished-application-icon';
import { ProgressIcon } from '../../../ui/icons/progress-icon';
import { Button } from '../../../ui/button/button';
import React, {
  HTMLAttributes,
  JSXElementConstructor,
  useEffect,
  useState,
} from 'react';
import { IProfileProps } from '../profile';
import { getAllUsers } from '../../../api';
import { TUser } from '../../../types';

export const ProfileElement: ({
  id,
  type,
  className,
  ...props
}: IProfileProps) => JSX.Element = ({
  id: number,
  type,
  className,
  ...props
}: IProfileProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  const extClassName = className || '';
  const { photo, id, role, scores, completed }: TUser = props;
  useEffect(() => {
    window.onresize = () => {
      setWidth(window.innerWidth);
    };
  }, [width]);
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
        {role === 'volunteer' && (
          <div className={styles.infoBlock}>
            <ProfileInformation key={id} {...props} />
            <BallsIcon className={styles.ballsIcon} color={'dark-blue'} />
            <span className={`${styles.ballsSum} text-small`}>{scores}</span>
            <KeyIcon className={styles.keyIcon} color={'dark-blue'} />
            <span className={`${styles.keySum} text-small`}>{0}</span>
            <FinishedApplicationIcon
              className={styles.finishIcon}
              color={'dark-blue'}
            />
            <span className={`${styles.finishSum} text-small`}>
              {completed}
            </span>
          </div>
        )}
        {role === 'recipient' && (
          <div className={styles.infoBlock}>
            <ProfileInformation key={id} {...props} />
            <ProgressIcon
              className={styles.recipientIcon}
              color={'dark-blue'}
            />
            <span className={`${styles.sumText} text-small`}>
              {1} из {5}
            </span>
          </div>
        )}
        {role === ('admin' || 'chief') && (
          <div className={styles.infoBlock}>
            <ProfileInformation key={id} {...props} />
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
