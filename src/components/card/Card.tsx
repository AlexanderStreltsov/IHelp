/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import styles from './card.module.scss';
import { BallsIcon } from '../../ui/icons/balls-icon';
import { Button } from '../../ui/button/button';
import { TUser } from '../../types';
import figuregreen from '../../images/figuregreen.svg';
import figuregrey from '../../images/figuregrey.svg';
import figureorange from '../../images/figureorange.svg';
import textlabel from '../../images/texthalf.svg';
import { KeyIcon } from '../../ui/icons/key-icon';
import { FinishedApplicationIcon } from '../../ui/icons/finished-application-icon';

const onButtonClick = (event: any) => {
  console.log('hello');
};

export const VolunteerCard = (props: { propsForCard: TUser }) => {
  const [volunteerState, setVolunteerState] = useState('');
  useEffect(() => {
    props.propsForCard.checked === true && props.propsForCard.approved === true
      ? setVolunteerState('approved')
      : props.propsForCard.approved === true &&
        props.propsForCard.checked === false
      ? setVolunteerState('checked')
      : setVolunteerState('notapproved');
  }, [props.propsForCard.approved, props.propsForCard.checked]);

  const isVolunteer = props.propsForCard.role === 'volunteer';

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardcontent}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${props.propsForCard.photo})` }}
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
          <p className={styles.name}>{props.propsForCard.fullname}</p>
          <p className={`${styles.id} text-small`}>
            ID {props.propsForCard.id}
          </p>
          <div className={styles.phone}>
            <p className={`${styles.phonetext} text-small-bold`}> Тел.:</p>
            <p className={`${styles.phonenumber} text-small`}>
              {props.propsForCard.phone}
            </p>
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
                  {props.propsForCard.scores}
                </p>
              </div>
              <div className={styles.underlayitem}>
                <KeyIcon color="dark-blue" />
                <p className={`${styles.underlaynumber} text-small`}>
                  {props.propsForCard.keys ? 1 : 0}
                </p>
              </div>
              <div className={styles.underlayitem}>
                <FinishedApplicationIcon color="dark-blue" />
                <p className={`${styles.underlaynumber} text-small`}>
                  {props.propsForCard.completed
                    ? props.propsForCard.completed
                    : 0}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              className={
                volunteerState === 'checked'
                  ? styles.halfconfirm
                  : styles.confirm
              }
              type="block"
              children={volunteerState === 'checked' ? '' : 'Подтвердить'}
              disabled={volunteerState === 'approved'}
              onClick={onButtonClick}
            />
            {volunteerState === 'checked' && (
              <img
                src={textlabel}
                className={styles.label}
                onClick={onButtonClick}
              />
            )}
            <Button
              className={styles.block}
              type="block"
              children={'Заблокировать'}
              disabled={false}
              onClick={onButtonClick}
            />
            <Button
              className={styles.givekeys}
              type="block"
              children={'Дать ключи'}
              disabled={volunteerState === 'approved'}
              onClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
