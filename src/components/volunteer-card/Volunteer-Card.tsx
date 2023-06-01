/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import './volunteer-card.css';
import { BallsIcon } from '../../ui/icons/balls-icon';
import { Button } from '../../ui/button/button';
import { TUser } from '../../types';
import avatar from '../../images/avatar.svg';
import figuregreen from '../../images/figuregreen.svg';
import figuregrey from '../../images/figuregrey.svg';
import figureorange from '../../images/figureorange.svg';
import backgreen from '../../images/backgreen.svg';
import backorange from '../../images/backorange.svg';
import backgrey from '../../images/backgrey.svg';
import textlabel from '../../images/texthalf.svg';
import { KeyIcon } from '../../ui/icons/key-icon';
import { FinishedApplicationIcon } from '../../ui/icons/finished-application-icon';

const onButtonClick = (event: any) => {
  console.log('hello');
};

export const VolunteerCard = (props: { propsForCard: TUser }) => {
  const [volunteerState, setVolunteerState] = useState('');
  useEffect(() => {
    props.propsForCard.checked === true && props.propsForCard.approved === true
      ? setVolunteerState('approved')
      : props.propsForCard.approved === true &&
        props.propsForCard.checked === false
      ? setVolunteerState('checked')
      : setVolunteerState('notapproved');
  }, [props.propsForCard.approved, props.propsForCard.checked]);

  const greenBackground = backgreen;
  const greyBackground = backgrey;
  const orangeBackground = backorange;
  const tlabel = textlabel;
  const isVolunteer = props.propsForCard.role === 'volunteer';

  console.log(volunteerState);
  console.log(props);

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
            style={{
              backgroundImage:
                isVolunteer && volunteerState === 'approved'
                  ? `url(${figuregreen})`
                  : isVolunteer && volunteerState === 'checked'
                  ? `url(${figuregrey})`
                  : isVolunteer && volunteerState === 'notapproved'
                  ? `url(${figureorange})`
                  : `url(${''})`,
            }}
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
                isVolunteer && volunteerState === 'approved'
                  ? `url(${greenBackground})`
                  : isVolunteer && volunteerState === 'checked'
                  ? `url(${greyBackground})`
                  : isVolunteer && volunteerState === 'notapproved'
                  ? `url(${orangeBackground})`
                  : `url(${''})`,
            }}
          >
            <div className="underlayitems">
              <div className="underlayitem">
                <BallsIcon color="dark-blue" />
                <p className="underlaynumber">{props.propsForCard.scores}</p>
              </div>
              <div className="underlayitem">
                <KeyIcon color="dark-blue" />
                <p className="underlaynumber">
                  {props.propsForCard.keys ? props.propsForCard.keys : 0}
                </p>
              </div>
              <div className="underlayitem">
                <FinishedApplicationIcon color="dark-blue" />
                <p className="underlaynumber">
                  {props.propsForCard.completed
                    ? props.propsForCard.completed
                    : 0}
                </p>
              </div>
            </div>
          </div>
          <div className="buttons">
            <Button
              className={
                volunteerState === 'checked' ? 'halfconfirm' : 'confirm'
              }
              type="block"
              children={volunteerState === 'checked' ? '' : 'Подтвердить'}
              disabled={volunteerState === 'approved'}
              onClick={onButtonClick}
            />
            {volunteerState === 'checked' && (
              <img src={textlabel} className="label" onClick={onButtonClick} />
            )}
            <Button
              className="block"
              type="block"
              children={'Заблокировать'}
              disabled={false}
              onClick={onButtonClick}
            />
            <Button
              className="givekeys"
              type="block"
              children={'Дать ключи'}
              disabled={volunteerState === 'approved'}
              onClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
