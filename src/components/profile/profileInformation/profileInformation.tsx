import React from 'react';
import { TUser } from '../../../types';
import styles from '../profile.module.scss';

export const ProfileInformation: React.FC<TUser> = ({
  fullname,
  id,
  phone,
  address,
}) => {
  return (
    <>
      <span className={`${styles.info} ${styles.name} text-medium`}>
        {!fullname ? 'ФИО' : fullname}
      </span>
      <span
        className={`${styles.info} ${styles.infoId} ${styles.infoIdLabelPosition} text-small`}
      >
        ID
      </span>
      <span
        className={`${styles.info} ${styles.infoId} ${styles.infoIdLabelText} text-small`}
      >
        {id}
      </span>
      <span
        className={`${styles.info} ${styles.boldLabelPhone} text-small-bold`}
      >
        Тел.:
      </span>
      <span className={`${styles.info} ${styles.textLabelPhone} text-small`}>
        {phone}
      </span>
      <span
        className={`${styles.info} ${styles.boldLabelAddress} text-small-bold`}
      >
        Адрес:
      </span>
      <span className={`${styles.info} ${styles.textLabelAddress} text-small`}>
        {address}
      </span>
    </>
  );
};
