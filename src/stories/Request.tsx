/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react';
import './request.css';
import phone from '../../images/phone.svg';
import message from '../../images/message.svg';
import date from '../../images/calendar.svg';
import request from '../../images/balls.svg';
import clock from '../../images/clock.svg';
import location from '../../images/location.svg';
import check from '../../images/check.png';
import closeicon from '../../images/close.png';
import edit from '../../images/edit.png';

interface RequestProps {
  photo: string;
}

const onButtonClick = (event: any) => {
  if (event.target.innerHTML === 'Читать') {
    event.target.innerHTML = 'Свернуть';
    document.getElementById('conttext')!.className = 'contenttextshow';
  } else {
    event.target.innerHTML = 'Читать';
    document.getElementById('conttext')!.className = 'contenttext';
  }
};

export const Request: FC<RequestProps> = ({ photo }) => {
  return (
    <>
      <div className="request">
        <div className="buttons">
          <img className="iconclose" src={closeicon} />
          <img className="icon" src={check} />
          <img className="icon" src={edit} />
        </div>
        <div className="volunteer">
          <div className="volunteerinfo">
            <img className="avatar" src={photo} />
            <div className="infotext">
              <p className="text">Петров Петр Петрович</p>
              <p className="teltext">+7(000) 000-00-00</p>
            </div>
          </div>
          <div className="icons">
            <img className="callicon" src={phone} />
            <img className="messageicon" src={message} />
          </div>
        </div>
        <div className="content">
          <h1 className="contentheader">Заголовок</h1>
          <div className="contenttext" id="conttext">
            Пожалуйста, погуляйте с моей собакой, я не смогу ее выгуливать с
            12.06 по 24.06 потому что уеду на обследование к врачу. Если есть
            желающие помочь в выгуле собаки, то звоните, 89041627779, Елена.
            Собаку зовут Айка, порода - немецкая овчарка, возраст - полтора
            года. Собака очень умная, послушная, добрая, спокойная.
          </div>
          <button className="contenthide" onClick={onButtonClick}>
            Читать
          </button>
          <div className="requestcount">
            <img className="requesticon" src={request}></img>
            <div>3</div>
          </div>
        </div>
        <div className="category">
          <div className="categorylogo">
            <p className="logotext">Категория</p>
          </div>
          <div className="date">
            <img className="dateicon" src={date} />
            <p className="datetext">24.10.2022</p>
          </div>
          <div className="time">
            <img className="timeicon" src={clock} />
            <p className="timetext">16:00</p>
          </div>
          <div className="address">
            <img className="addressicon" src={location} />
            <p className="addresstext">ул. Потолочного д. 9</p>
          </div>
        </div>
      </div>
    </>
  );
};
