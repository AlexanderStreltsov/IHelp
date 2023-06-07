/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect } from 'react';
import styles from './request.module.scss';
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
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const el = ref.current;

  // if (el !== null) {
  //   el.scrollHeight !== Math.max(el.offsetHeight, el.clientHeight)
  //     ? setIsOverflowing(true)
  //     : setIsOverflowing(false);
  //   el.style.overflow = isOverflowing ? 'hidden' : 'visible';
  // const hideButton = el.nextElementSibling;
  // if (hideButton !== null) {
  //   hideButton.className =
  //     !isClicked && isOverflowing
  //       ? `${styles.contenthide}`
  //       : isClicked && !isOverflowing
  //       ? `${styles.contenthide} ${styles.contenthideleft}`
  //       : !isClicked && !isOverflowing
  //       ? `${styles.contenthidehidden}`
  //       : `${styles.contenthide}`;
  // }
  //   }
  // }, [ref, isOverflowing, setIsOverflowing, isClicked]);

  const onButtonClick = () => {
    setisCollapsed(isCollapsed === true ? false : true);
    setIsOverflowing(isOverflowing === true ? false : true);
    setIsClicked(true);
  };
  /* <button
                className={`${styles.contenthide} text-medium`}
                id="contenthide"
                onClick={onButtonClick}
              >
                {isCollapsed ? 'Читать' : 'Свернуть'}
              </button> */

  const IsRequestImmediate = getIsRequestImmediate(props.propsForRequest.date);
  const IsRequestFinished = getIsRequestFinished(props.propsForRequest.date);

  let datta;

  datta =
    props.owner === 'recipient'
      ? props.propsForRequest.volunteer
      : props.propsForRequest.recipient;

  const isVolunteerNull =
    props.owner === 'recipient' && props.propsForRequest.volunteer === null;

  return (
    <>
      {props && (
        <>
          <div className={styles.request}>
            <div className={styles.logo}>
              <span className={styles.logotext}>категория</span>
            </div>
            <div className={styles.postinfo}>
              <div className={styles.date}>
                <CalendarIcon className={styles.dateicon} color="dark-blue" />
                <p className={`${styles.datetext} text-big`}>
                  {props.propsForRequest.date
                    .toString()
                    .slice(0, 10)
                    .replace(/-/g, '.')}
                </p>
              </div>
              <div className={styles.time}>
                <ClockIcon className={styles.timeicon} color="dark-blue" />
                <p className={`${styles.timetext} text-big`}>
                  {props.propsForRequest.date.toString().slice(11, 16)}
                </p>
              </div>
              <div className={styles.address}>
                <div>
                  <LocationIcon
                    className={styles.addressicon}
                    color="dark-blue"
                  />
                </div>
                {props.owner === 'volunteer' && datta ? (
                  <p className={`${styles.addresstext} text-medium`}>
                    {datta!.address}
                  </p>
                ) : (
                  <p className={styles.addresstext}>
                    {props.propsForRequest!.recipient.address}
                  </p>
                )}
              </div>
            </div>
            <div className={styles.description}>
              <div
                className={
                  !isVolunteerNull
                    ? `${styles.contentheader} text-big`
                    : `${styles.contentheader} text-big ${styles.contentheadernoinfo}`
                }
                id="header"
              >
                {props.propsForRequest.title}
              </div>
              <div
                ref={ref}
                className={`collapse-content ${
                  isCollapsed
                    ? `${styles.box} text-medium`
                    : `${styles.contenttextshow}`
                }`}
              >
                {props.propsForRequest.description}
              </div>
              <div
                className={
                  props.propsForRequest.completed
                    ? `${styles.requestcount} text-small`
                    : `${styles.requestcountapproved} text-small`
                }
                id="requestcount"
              >
                {props.propsForRequest.completed ? (
                  <BallsIcon color="dark-blue" />
                ) : (
                  <FinishedApplicationIcon color="dark-blue" />
                )}
                <div
                  className={
                    props.propsForRequest.completed
                      ? styles.scores
                      : styles.scoresapproved
                  }
                >
                  {props.propsForRequest.recipient.scores}
                </div>
              </div>
            </div>
            <div className={styles.user}>
              <div
                className={styles.avatar}
                style={{
                  backgroundImage: `url(${datta ? datta!.photo : ''})`,
                }}
              />
              <p className={`${styles.text} text-medium`}>
                {datta && datta!.fullname}
              </p>
              <p className={`${styles.teltext} text-medium`}>
                {datta && datta!.phone}
              </p>
              <div className={styles.icons}>
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
            <div className={styles.buttons}>
              {IsRequestFinished && !isVolunteerNull && (
                <div>
                  <Button
                    type="quadrilateralApprove"
                    disabled={false}
                    children=""
                    onClick={() => {
                      console.log('hello');
                    }}
                  />
                </div>
              )}
              {props.propsForRequest.completed === false && (
                <div>
                  <Button
                    type="quadrilateralExit"
                    disabled={IsRequestImmediate}
                    children=""
                    onClick={() => {
                      console.log('hello');
                    }}
                  />
                </div>
              )}
              {props.owner === 'recipient' &&
                props.propsForRequest.volunteer === null &&
                props.propsForRequest.completed === false && (
                  <div>
                    <Button
                      type="quadrilateralEdit"
                      disabled={false}
                      children=""
                      onClick={() => {
                        console.log('hello');
                      }}
                    />
                  </div>
                )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
