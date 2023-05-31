/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './request.css';
import { BallsIcon } from '../../ui/icons/balls-icon';
import { CalendarIcon } from '../../ui/icons/calendar-icon';
import { LocationIcon } from '../../ui/icons/location-icon';
import { ClockIcon } from '../../ui/icons/clock-icon';
import { Button } from '../../ui/button/button';
import { TTask } from '../../types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FinishedApplicationIcon } from '../../ui/icons/finished-application-icon';
import { getIsRequestImmediate, getIsRequestFinished } from '../../utils/utils';

const onButtonClick = (event: any) => {
  if (event.target.innerHTML === 'Читать') {
    console.log(event.target.parentElement);
    event.target.innerHTML = 'Свернуть';
    event.target.className = 'contenthide fulltext';
    event.target.parentElement.className = 'contenttextshow';
    event.target.closest('#request').style.height = 'fit-content';
    console.log(event.target.parentElement.parentElement.parentElement);
    document.getElementById('requestcount')!.style.marginTop = '-25px';
    document.getElementById('header')!.style.overflowX = 'visible';
  } else {
    event.target.innerHTML = 'Читать';
    event.target.className = 'contenthide';
    document.getElementById('requestcount')!.style.marginTop = '0px';
    event.target.parentElement.className = 'box text-medium';
  }
};

export const Request = (props: { propsForRequest: TTask; owner: string }) => {
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

  // eslint-disable-next-line @typescript-eslint/no-shadow, @typescript-eslint/no-use-before-define
  const IsRequestImmediate = getIsRequestImmediate(props.propsForRequest.date);
  const IsRequestFinished = getIsRequestFinished(props.propsForRequest.date);
  console.log(IsRequestImmediate);

  let data;

  data =
    props.owner === 'recipient'
      ? props.propsForRequest.volunteer
      : props.propsForRequest.recipient;

  console.log(data);

  const isVolunteerNull =
    props.owner === 'recipient' && props.propsForRequest.volunteer === null;

  return (
    <>
      {props && (
        <div className="request" id="request">
          <div className="categorylogo">
            <p className="logotext">категория</p>
          </div>
          <div
            className="buttons"
            style={{
              flexDirection: isVolunteerNull ? 'column' : 'row-reverse',
              alignItems: isVolunteerNull ? 'flex-end' : 'flex-start',
              height: isVolunteerNull ? '83px' : '90px',
            }}
          >
            {props.propsForRequest.completed === false && (
              <>
                <Button
                  type="quadrilateralExit"
                  disabled={IsRequestImmediate}
                  children=""
                  onClick={() => {
                    console.log('hello');
                  }}
                />
                {IsRequestFinished && (
                  <Button
                    type="quadrilateralApprove"
                    disabled={false}
                    children=""
                    onClick={() => {
                      console.log('hello');
                    }}
                  />
                )}
                {props.owner === 'recipient' &&
                  props.propsForRequest.volunteer === null && (
                    <Button
                      type="quadrilateralEdit"
                      disabled={false}
                      children=""
                      onClick={() => {
                        console.log('hello');
                      }}
                    />
                  )}
              </>
            )}
          </div>
          {data && (
            <div className="volunteer">
              <div className="volunteerinfo">
                <div
                  className="avatar"
                  style={{
                    backgroundImage: `url(${data!.photo})`,
                  }}
                />
                <div className="infotext">
                  <p className="text text-medium">{data!.fullname}</p>
                  <p className="teltext text-medium">{data!.phone}</p>
                </div>
              </div>
              <div className="icons">
                <Button
                  type="circleSmallPhone"
                  disabled={props.propsForRequest.completed}
                  children=""
                  onClick={() => {
                    console.log('hello');
                  }}
                />
                <Button
                  type="circleSmallEmail"
                  disabled={props.propsForRequest.completed}
                  children=""
                  onClick={() => {
                    console.log('hello');
                  }}
                />
              </div>
            </div>
          )}
          <div className="content">
            <div
              className="contentheader text-big"
              id="header"
              style={{ marginTop: isVolunteerNull ? '160px' : '10px' }}
            >
              {props.propsForRequest.title}
            </div>
            <div className="box text-medium" id="conttext">
              <input type="checkbox" id="expanded" />
              <p>
                {props.propsForRequest.description}
                <label
                  htmlFor="expanded"
                  className="contenthide text-medium"
                  id="contenthide"
                  onClick={onButtonClick}
                  role="button"
                >
                  Читать
                </label>
              </p>
            </div>
            <div className="requestcount text-small" id="requestcount">
              {props.propsForRequest.completed ? (
                <BallsIcon color="dark-blue" />
              ) : (
                <FinishedApplicationIcon color="dark-blue" />
              )}
              <div className="scores">
                {props.propsForRequest.recipient.scores}
              </div>
            </div>
          </div>
          <div className="category">
            <div className="date">
              <CalendarIcon className="dateicon" color="dark-blue" />
              <p className="datetext">
                {props.propsForRequest.date
                  .toString()
                  .slice(0, 10)
                  .replace(/-/g, '.')}
              </p>
            </div>
            <div className="time">
              <ClockIcon className="timeicon" color="dark-blue" />
              <p className="timetext">
                {props.propsForRequest.date.toString().slice(11, 16)}
              </p>
            </div>
            <div className="address">
              <div>
                <LocationIcon className="addressicon" color="dark-blue" />
              </div>
              {props.owner === 'volunteer' && data ? (
                <p className="addresstext">{data!.address}</p>
              ) : (
                <p className="addresstext">
                  {props.propsForRequest!.recipient.address}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
