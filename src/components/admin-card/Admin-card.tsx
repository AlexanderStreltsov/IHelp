import React, { useState, useEffect } from 'react';
import styles from './admin-card.module.scss';

import { PersonIcon } from './../../ui/icons/person-icon';
import { UpperTriangleIcon } from './../../ui/icons/upper-triangle-icon';
import { DownTriangleIcon } from './../../ui/icons/down-triangle-icon';

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
  const upperTriangleVisibility = isInfoOpen ? 'visible' : 'hidden';
  const downTriangleVisibility = isInfoOpen ? 'hidden' : 'visible';

  function toggleRightsArea() {
    setInfoOpen(!isInfoOpen);
  }
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
        <div className={`${styles.commonInfoAdminStyle}`}>
          <div
            className={`${styles.nameFieldStyle}`}
          >{`${props.surname} ${props.name} ${props.patronymic}`}</div>
          <div
            className={`${styles.idFieldStyle}`}
          >{`ID ${props.personalID}`}</div>
          <div className={`${styles.phoneFieldStyle}`}>
            <div className={`${styles.leftPhoneFieldStyle}`}>{`Тел.:`}</div>
            <div
              className={`${styles.rightPhoneFieldStyle}`}
            >{`${props.tel}`}</div>
          </div>
        </div>

        <div className={`${styles.optionalSelectorStyle}`}>
          <div
            style={{ visibility: upperTriangleVisibility }}
            className={`${styles.upperTriangleBox}`}
          >
            <UpperTriangleIcon
              className={`${styles.upperTriangle}`}
              color="dark-blue"
              onClick={() => toggleRightsArea()}
            />
          </div>
          <hr className={`${styles.divider}`} />
          <div
            style={{ visibility: downTriangleVisibility }}
            className={`${styles.downTriangleBox}`}
          >
            <DownTriangleIcon
              className={`${styles.downTriangle}`}
              color="dark-blue"
              onClick={() => toggleRightsArea()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
