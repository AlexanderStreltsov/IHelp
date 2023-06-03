import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../api';
import { TUser } from '../../types';
import { ProfileElement } from './profileElement/profileElement';

export interface IProfileProps {
  id?: number | undefined;
  type?: 'volunteer' | 'recipient' | 'admin' | 'chief' | 'signUp' | 'noName';
  className?: string;
}

export const Profile = ({
  id,
  type,
  className = '',
  ...props
}: IProfileProps) => {
  const extClassName = className || '';
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [one, setData] = useState<TUser[]>();

  useEffect(() => {
    const getData = async () => {
      const allArray = await getAllUsers();
      setData(allArray);
    };
    getData();
  }, []);

  const data = one?.find((el) => el.id === id);
  //если ID нету, перебрасываем на страницу регистрации
  if (!data && type === 'noName') return <ProfileElement type={'noName'} />;
  if (!data) return <ProfileElement type={'signUp'} />;
  const user: TUser = data;
  return <ProfileElement {...user} />;
};
