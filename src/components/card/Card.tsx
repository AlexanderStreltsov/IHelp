import React, { useState, useEffect, SyntheticEvent, FC } from 'react';
import styles from './card.module.scss';
import { BallsIcon } from '../../ui/icons/balls-icon';
import { Button } from '../../ui/button/button';
import { TUser } from '../../types';
import figuregreen from '../../images/figuregreen.svg';
import figuregrey from '../../images/figuregrey.svg';
import figureorange from '../../images/figureorange.svg';
import { KeyIcon } from '../../ui/icons/key-icon';
import { FinishedApplicationIcon } from '../../ui/icons/finished-application-icon';

const onButtonClick = (event: SyntheticEvent) => {
  console.log('hello');
};

export const VolunteerCard: FC<TUser> = (props) => {
  const [volunteerState, setVolunteerState] = useState('');
  useEffect(() => {
    props.checked === true && props.approved === true
      ? setVolunteerState('approved')
      : props.approved === true && props.checked === false
      ? setVolunteerState('checked')
      : setVolunteerState('notapproved');
  }, [props.approved, props.checked]);

  const isVolunteer = props.role === 'volunteer';

  return (
    <div className={styles.cardcontainer}>
      <div className={styles.card}>
        <div className={styles.cardcontent}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${props.photo})` }}
          ></div>
          <div
            className={styles.avatarunderlay}
            style={{
              backgroundImage:
                isVolunteer && volunteerState === 'approved'
                  ? `url(${figuregreen})`
                  : isVolunteer && volunteerState === 'checked'
                  ? `url(${figuregrey})`
                  : isVolunteer && volunteerState === 'notapproved'
                  ? `url(${figureorange})`
                  : `url(${''})`,
            }}
          ></div>
          <p className={styles.name}>{props.fullname}</p>
          <p className={`${styles.id} text-small`}>ID {props.id}</p>
          <div className={styles.phone}>
            <p className={`${styles.phonetext} text-small-bold`}> Тел.:</p>
            <p className={`${styles.phonenumber} text-small`}>{props.phone}</p>
          </div>
          <div
            className={`
            ${styles.underlay} 
            ${
              isVolunteer && volunteerState === 'approved'
                ? styles.backgreen
                : isVolunteer && volunteerState === 'checked'
                ? styles.backgrey
                : isVolunteer && volunteerState === 'notapproved'
                ? styles.backorange
                : ''
            }`}
          >
            <div className={styles.underlayitems}>
              <div className={styles.underlayitem}>
                <BallsIcon color="dark-blue" />
                <p className={`${styles.underlaynumber} text-small`}>
                  {props.scores}
                </p>
              </div>
              <div className={styles.underlayitem}>
                <KeyIcon color="dark-blue" />
                <p className={`${styles.underlaynumber} text-small`}>
                  {props.keys ? 1 : 0}
                </p>
              </div>
              <div className={styles.underlayitem}>
                <FinishedApplicationIcon color="dark-blue" />
                <p className={`${styles.underlaynumber} text-small`}>
                  {props.completed ? props.completed : 0}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              className={styles.confirm}
              type="apply"
              children={'Подтвердить'}
              disabled={volunteerState === 'approved'}
              onClick={onButtonClick}
            />
            <Button
              className={styles.block}
              type="block"
              children={'Заблокировать'}
              disabled={false}
              onClick={onButtonClick}
            />
            <Button
              type="block"
              className={styles.givekeys}
              children={'Дать ключи'}
              disabled={volunteerState === 'approved'}
              onClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
