/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect } from 'react';
import './request.css';
import { BallsIcon } from '../../ui/icons/balls-icon';
import { CalendarIcon } from '../../ui/icons/calendar-icon';
import { LocationIcon } from '../../ui/icons/location-icon';
import { ClockIcon } from '../../ui/icons/clock-icon';
import { Button } from '../../ui/button/button';
import { TTask } from '../../types';
import { FinishedApplicationIcon } from '../../ui/icons/finished-application-icon';
import { getIsRequestImmediate, getIsRequestFinished } from '../../utils/utils';

export const Request = (props: { propsForRequest: TTask; owner: string }) => {
  const [isCollapsed, setisCollapsed] = useState(true);
  const [isOverflowing, setIsOverflowing] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const el = ref.current;

  useEffect(() => {
    if (el !== null) {
      el.clientHeight < el.scrollHeight
        ? setIsOverflowing(true)
        : setIsOverflowing(false);
      el.style.overflow = isOverflowing ? 'hidden' : 'visible';
    }
  }, [el, isOverflowing]);
  const IsRequestImmediate = getIsRequestImmediate(props.propsForRequest.date);
  const IsRequestFinished = getIsRequestFinished(props.propsForRequest.date);

  let data;

  data =
    props.owner === 'recipient'
      ? props.propsForRequest.volunteer
      : props.propsForRequest.recipient;

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
            <div className="contentheader text-big" id="header">
              {props.propsForRequest.title}
            </div>
            <div
              ref={ref}
              className={`collapse-content ${
                isCollapsed ? 'box text-medium' : 'conttextshow'
              }`}
            >
              {/* {props.propsForRequest.description} */}
              Заболел и совсем нет сил даже ходить по квартире. Почти неделю
              собаку выгуливали соседи, но в пятницу они не смогут. Помогите,
              пожалуйста! Заболел и совсем нет сил даже ходить по квартире.
              Почти неделю собаку выгуливали соседи, но в пятницу они не смогут.
              Помогите, пожалуйста!
            </div>
            {isOverflowing && (
              <button
                className="contenthide text-medium"
                id="contenthide"
                onClick={() => setisCollapsed(!isCollapsed)}
              >
                {isCollapsed ? 'Читать' : 'Свернуть'}
              </button>
            )}
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
              <p className="datetext text-big">
                {props.propsForRequest.date
                  .toString()
                  .slice(0, 10)
                  .replace(/-/g, '.')}
              </p>
            </div>
            <div className="time">
              <ClockIcon className="timeicon" color="dark-blue" />
              <p className="timetext text-big">
                {props.propsForRequest.date.toString().slice(11, 16)}
              </p>
            </div>
            <div className="address">
              <div>
                <LocationIcon className="addressicon" color="dark-blue" />
              </div>
              {props.owner === 'volunteer' && data ? (
                <p className="addresstext text-medium">{data!.address}</p>
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
