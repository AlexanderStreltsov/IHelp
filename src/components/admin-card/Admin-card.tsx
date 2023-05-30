import React, { useState, useEffect } from 'react';
import styles from './admin-card.module.scss';

type TAdminCardProps = {
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
  const [isInfoOpen, setInfoOpen] = useState(false);
  return (
    <div className={`${styles.adminCard}`}>
      adminCard
      <div className={`${styles.adminPhoto} `}>adminPhoto</div>
      <div className={`${styles.adminInfo}`}>adminInfo</div>
    </div>
  );
};
