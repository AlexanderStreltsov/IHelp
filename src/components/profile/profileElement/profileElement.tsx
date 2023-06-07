import React from 'react';
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
import { IProfileProps } from '../profile';
import { useNavigate } from 'react-router-dom';

export const ProfileElement = (props: IProfileProps) => {
  const { className, type, role }: IProfileProps = props;
  const extClassName = className || '';
  const navigate = useNavigate();
  const handelClickRegistration = () => {
    navigate('/registration');
  };
  return (
    <div className={`${styles.container} ${extClassName}`}>
      <div className={styles.photoBox}>
        {!!props.photo ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img alt="photo" src={props.photo} className={styles.photo} />
        ) : (
          <PersonIcon className={styles.defaultPhoto} color={'white'} />
        )}
      </div>
      <div className={`${styles.infoBox}`}>
        <div className={`${styles.backgroundInfoBox} `}>
          <ProfileFone className={styles.backgroundDesk} />
          <ProfileFoneMobile className={styles.backgroundMobile} />
        </div>
        {role === 'volunteer' && (
          <div className={styles.infoBlock}>
            <ProfileInformation {...props} />
            <BallsIcon className={styles.ballsIcon} color={'dark-blue'} />
            <span className={`${styles.ballsSum} text-small`}>
              {props.scores ? props.scores : 0}
            </span>
            <KeyIcon className={styles.keyIcon} color={'dark-blue'} />
            <span className={`${styles.keySum} text-small`}>{0}</span>
            <FinishedApplicationIcon
              className={styles.finishIcon}
              color={'dark-blue'}
            />
            <span className={`${styles.finishSum} text-small`}>
              {props.completed ? props.completed : 0}
            </span>
          </div>
        )}
        {role === 'recipient' && (
          <div className={styles.infoBlock}>
            <ProfileInformation {...props} />
            <ProgressIcon
              className={styles.recipientIcon}
              color={'dark-blue'}
            />
            <span className={`${styles.sumText} text-small`}>
              {1} из {5}
            </span>
          </div>
        )}
        {role === 'admin' && (
          <div className={styles.infoBlock}>
            <ProfileInformation {...props} />
          </div>
        )}
        {role === 'chief' && (
          <div className={styles.infoBlock}>
            <ProfileInformation {...props} />
          </div>
        )}
        {type === 'signUp' && (
          <div className={styles.infoBlock}>
            <Button
              className={`${styles.signUp}`}
              disabled={false}
              onClick={() => {
                handelClickRegistration();
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
          disabled={!props.id}
          onClick={() => {
            console.log('tt');
          }}
          type="quadrilateralSetting"
        />
      </div>
    </div>
  );
};
