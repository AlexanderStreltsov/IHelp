/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useState, useEffect } from 'react';
import './request.css';
import { BallsIcon } from '../../ui/icons/balls-icon';
import { CalendarIcon } from '../../ui/icons/calendar-icon';
import { LocationIcon } from '../../ui/icons/location-icon';
import { ClockIcon } from '../../ui/icons/clock-icon';
import { Button } from '../../ui/button/button';
import { TTask } from '../../types';
import api from '../../api';
import { ActiveRequestVersion1Icon } from '../../ui/icons/active-request-big-version-1-icon';
import { ActiveRequestVersion2Icon } from '../../ui/icons/active-request-big-version-2-icon';
import { ApproveIcon } from '../../ui/icons/approve-icon';
import { ArrowIcon } from '../../ui/icons/arrow-icon';
import { AttachIcon } from '../../ui/icons/attach-icon';
import { BlogIcon } from '../../ui/icons/blog-icon';
import { ContactUsIcon } from '../../ui/icons/contact-us-icon';
import { ContactsIcon } from '../../ui/icons/contacts-icon';
import { ExecutedRequestIcon } from '../../ui/icons/executed-request-icon';
import { KeyIcon } from '../../ui/icons/key-icon';
import { MessageIcon } from '../../ui/icons/message-icon';
import { PersonIcon } from '../../ui/icons/person-icon';
import { PopularIcon } from '../../ui/icons/popular-icon';
import { PrivacyIcon } from '../../ui/icons/privacy-icon';
import { StatsIcon } from '../../ui/icons/stats-icon';
import { UnionIcon } from '../../ui/icons/union-icon';

const onButtonClick = (event: any) => {
  if (event.target.innerHTML === 'Читать') {
    event.target.innerHTML = 'Свернуть';
    document.getElementById('conttext')!.className = 'contenttextshow';
  } else {
    event.target.innerHTML = 'Читать';
    document.getElementById('conttext')!.className = 'box';
  }
};

export const Request: FC = () => {
  const [tasksState, setTasksState] = useState<TTask[]>();

  useEffect(() => {
    async function fetchData() {
      const tasks = await api.getAllTasks();
      setTasksState(tasks);
    }

    fetchData();
  }, []);

  const ps = document.querySelectorAll('p');
  const observer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      entry.target.classList[
        entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove'
      ]('truncated');
    }
  });

  ps.forEach((p) => {
    observer.observe(p);
  });

  return (
    <>
      {tasksState && tasksState[0] && (
        <div className="request">
          <div className="categorylogo">
            <p className="logotext">категория</p>
          </div>
          {tasksState[0].completed === false && (
            <div className="buttons">
              <Button
                type="quadrilateralExit"
                disabled={false}
                children=""
                onClick={() => {
                  console.log('hello');
                }}
              />
              <Button
                type="quadrilateralApprove"
                disabled={false}
                children=""
                onClick={() => {
                  console.log('hello');
                }}
              />
              {tasksState[0].volunteer && (
                <Button
                  type="quadrilateralEdit"
                  disabled={false}
                  children=""
                  onClick={() => {
                    console.log('hello');
                  }}
                />
              )}
            </div>
          )}
          <div className="volunteer">
            <div className="volunteerinfo">
              <div
                className="avatar"
                style={{
                  backgroundImage: `url(${tasksState![0].recipient.photo})`,
                }}
              />
              <div className="infotext">
                <p className="text text-medium">
                  {tasksState![0].recipient.fullname}
                </p>
                <p className="teltext text-medium">
                  {tasksState![0].recipient.phone}
                </p>
              </div>
            </div>
            <div className="icons">
              <Button
                type="circleSmallPhone"
                disabled={tasksState![0].completed}
                children=""
                onClick={() => {
                  console.log('hello');
                }}
              />
              <Button
                type="circleSmallEmail"
                disabled={tasksState![0].completed}
                children=""
                onClick={() => {
                  console.log('hello');
                }}
              />
            </div>
          </div>
          <div className="content">
            <h1 className="contentheader text-big">{tasksState![0].title}</h1>
            <div className="box text-medium" id="conttext">
              <input type="checkbox" id="expanded" />
              <p>
                Пожалуйста, погуляйте с моей собакой, я не смогу ее выгуливать с
                12.06 по 24.06 потому что уеду на обследование к врачу. Если
                есть желающие помочь в выгуле собаки, то звоните, 89041627779,
                Елена. Собаку зовут Айка, порода - немецкая овчарка, возраст -
                полтора года. Собака очень умная, послушная, добрая, спокойная.
                {/* {tasksState![0].description} */}
              </p>
              <label
                htmlFor="expanded"
                className="contenthide text-medium"
                id="contenthide"
                onClick={onButtonClick}
                role="button"
              >
                Читать
              </label>
            </div>

            <div className="requestcount text-small">
              {/* {tasksState![0].completed &&  */}
              <BallsIcon color="dark-blue" />
              <div>{tasksState![0].recipient.scores}</div>
            </div>
          </div>
          <div className="category">
            <div className="date">
              <CalendarIcon className="dateicon" color="dark-blue" />
              <p className="datetext">
                {tasksState![0].date.toString().slice(0, 10).replace(/-/g, '.')}
              </p>
            </div>
            <div className="time">
              <ClockIcon className="timeicon" color="dark-blue" />
              <p className="timetext">
                {tasksState![2].date.toString().slice(11, 16)}
              </p>
            </div>
            <div className="address">
              <div>
                <LocationIcon className="addressicon" color="dark-blue" />
              </div>
              <p className="addresstext">{tasksState![0].address}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
