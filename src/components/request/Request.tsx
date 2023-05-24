/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react';
import './request.scss';

export const Request: FC = () => {
  return (
    <>
      <div className="request">
        <div className="buttons">
          <img className="icon" />
          <img className="icon" />
          <img className="icon" />
        </div>
        <div className="volunteer">
          <img className="avatar" />
          <p className="text">Петров Петр Петрович</p>
          <p className="teltext">+7(000) 000-00-00</p>
          <div className="icons">
            <img className="callicon" />
            <img className="callicon" />
          </div>
        </div>
        <div className="content">
          <h1 className="contentheader">Заголовок</h1>
          <p className="text"></p>
          <img className="requesticon"></img>
        </div>
        <div className="category">
          <img className="categorylogo" src="../../images/logoo.svg"></img>
          <div className="date">
            <img className="dateicon" src="../../images/calendar.svg" />
            <p className="datetext">24.10.2022</p>
          </div>
          <div className="time">
            <img className="timeicon" src="../../images/clock.svg" />
            <p className="timetext">16:00</p>
          </div>
          <div className="address">
            <img className="addressicon" src="../../images/location.svg" />
            <p className="addresstext">ул. Потолочного д. 9</p>
          </div>
        </div>
      </div>
    </>
  );
};
