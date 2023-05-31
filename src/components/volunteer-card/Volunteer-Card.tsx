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
import avatar from '../../images/avatar.svg';
import figuregreen from '../../images/figuregreen.svg';
import back from '../../images/back.svg';
import { KeyIcon } from '../../ui/icons/key-icon';
import { UnionIcon } from '../../ui/icons/union-icon';
import { FinishedApplicationIcon } from '../../ui/icons/finished-application-icon';

const onButtonClick = (event: any) => {
  console.log('hello');
};

export const VolunteerCard = (props: { propsForCard: TUser }) => {
  const [imgState, setImgState] = useState('');
  useEffect(() => {
    window.innerWidth > 414 ? setImgState('back') : setImgState('');
  }, []);
  return (
    <>
      <div className="card">
        <div className="cardcontent">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div
            className="avatarunderlay"
            style={{ backgroundImage: `url(${figuregreen})` }}
          ></div>
          <p className="name">Петров Петр Петрович</p>
          <p className="id">ID 111111114</p>
          <div className="phone">
            <p className="phonetext"> Тел.:</p>
            <p className="phonenumber">+7(000) 000-00-04</p>
          </div>
          <div
            className="underlay"
            style={{
              backgroundImage:
                imgState === 'back' ? `url(${back})` : `url(${null})`,
            }}
          >
            <div className="underlayitems">
              <div className="underlayitem">
                <BallsIcon color="dark-blue" />
                <p className="underlaynumber">2500</p>
              </div>
              <div className="underlayitem">
                <KeyIcon color="dark-blue" />
                <p className="underlaynumber">1</p>
              </div>
              <div className="underlayitem">
                <FinishedApplicationIcon color="dark-blue" />
                <p className="underlaynumber">150</p>
              </div>
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
