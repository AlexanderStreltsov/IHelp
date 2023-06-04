import React from 'react';
import styles from '../profile.module.scss';
import { IProfileProps } from '../profile';

export const ProfileInformation: React.FC<IProfileProps> = ({
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
        {id ? id : '112233'}
      </span>
      <span
        className={`${styles.info} ${styles.boldLabelPhone} text-small-bold`}
      >
        Тел.:
      </span>
      <span className={`${styles.info} ${styles.textLabelPhone} text-small`}>
        {phone ? phone : '+7 (000) 000-00-00'}
      </span>
      <span
        className={`${styles.info} ${styles.boldLabelAddress} text-small-bold`}
      >
        Адрес:
      </span>
      <span className={`${styles.info} ${styles.textLabelAddress} text-small`}>
        {address ? address : 'Воронеж, улица Генерала Лизюкова, 4'}
      </span>
    </>
  );
};
