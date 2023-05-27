/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useState, useEffect } from 'react';
import './volunteer-card.css';
import { BallsIcon } from '../../ui/icons/balls-icon';
import { CalendarIcon } from '../../ui/icons/calendar-icon';
import { LocationIcon } from '../../ui/icons/location-icon';
import { ClockIcon } from '../../ui/icons/clock-icon';
import { Button } from '../../ui/button/button';
import { TUser } from '../../types';
import api from '../../api';
import avatar from '../../../images/avatar.svg';
import back from '../../../images/back.svg';
import { KeyIcon } from '../../ui/icons/key-icon';
import { UnionIcon } from '../../ui/icons/union-icon';

const onButtonClick = (event: any) => {
  console.log('hello');
};

export const VolunteerCard: FC = (props) => {
  //  Для тестирования функциональности компонента можно раскомментировать код ниже и вместо props использовать объект(ы), приходящий(ие) от апи

  // const [usersState, setUsersState] = useState<TUser]>();

  // useEffect(() => {
  //   async function fetchData() {
  //     const users = await api.getAllUsers();
  //     setUsersState(users);
  //   }

  //   fetchData();
  // }, []);

  return (
    <>
      <div className="card">
        <div className="cardcontent">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <p className="name">Петров Петр Петрович</p>
          <p className="id">111111114</p>
          <div className="phone">
            <p className="phonetext"> Тел.:</p>
            <p className="phonenumber">+7(000) 000-00-04</p>
          </div>
          <div className="underlay" style={{ backgroundImage: `url(${back})` }}>
            <div className="underlayitem">
              <BallsIcon color="dark-blue" />
              <p className="underlaynumber">2500</p>
            </div>
            <div className="underlayitem">
              <KeyIcon color="dark-blue" />
              <p className="underlaynumber">1</p>
            </div>
            <div className="underlayitem">
              <UnionIcon color="dark-blue" />
              <p className="underlaynumber">150</p>
            </div>
          </div>
          <div className="buttons">
            <Button
              className="confirm"
              type="block"
              children={'Подтвердить'}
              disabled={true}
              onClick={onButtonClick}
            />
            <Button
              className="block"
              type="block"
              children={'Заблокировать'}
              disabled={true}
              onClick={onButtonClick}
            />
            <Button
              className="givekeys"
              type="block"
              children={'Дать ключи'}
              disabled={true}
              onClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
