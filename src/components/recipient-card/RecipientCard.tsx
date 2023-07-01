import React, { FC } from 'react';
import styles from './recipient-card.module.scss';
import { TUser } from '../../types';

export const RecipientCard: FC<TUser> = (props) => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.card}>
        <div className={styles.cardcontent}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${props.photo})` }}
          ></div>
          <p className={styles.name}>{props.fullname}</p>
          <p className={`${styles.id} text-small`}>ID {props.id}</p>
          <div className={styles.phone}>
            <p className={`${styles.phonetext} text-small-bold`}> Тел.:</p>
            <p className={`${styles.phonenumber} text-small`}>{props.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
