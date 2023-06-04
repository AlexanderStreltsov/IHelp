import React, { useState, useEffect } from 'react';
import styles from './admin-card.module.scss';

import { PersonIcon } from './../../ui/icons/person-icon';

type TAdminCardProps = {
  photo?: string;
  name: string;
  surname: string;
  patronymic: string;
  personalID: number;
  tel: string;
  rights: {
    verify_accounts: boolean;
    create_request: boolean;
    allot_key: boolean;
    settle_dispute: boolean;
  };
};

export const AdminCard = (props: TAdminCardProps) => {
  const [isInfoOpen, setInfoOpen] = useState(true);
  const adminInfoBlockHeight = { height: `${isInfoOpen ? 267 : 128}px` };
  return (
    <div className={`${styles.adminCard}`}>
      <div className={`${styles.adminPhoto}`}>
        {props.photo ? (
          <img
            className={`${styles.imageStyle}`}
            src={props.photo}
            alt={`${props.surname} ${props.name} ${props.patronymic}`}
          ></img>
        ) : (
          <PersonIcon
            color="white"
            className={`${styles.imagePlaceholderStyle}`}
          />
        )}
      </div>
      <div style={adminInfoBlockHeight} className={`${styles.adminInfo}`}>
        adminInfo
      </div>
    </div>
  );
};
