import React, { useEffect, useState } from 'react';
import { TUser } from '../../types';
import api from '../../api';
import { VolunteerCard } from '../volunteer-card/Volunteer-Card';

export const Page = () => {
  const [usersState, setUsersState] = useState<TUser[]>();

  useEffect(() => {
    async function fetchData() {
      const users = await api.getAllUsers();
      setUsersState(users);
      console.log(users);
    }

    fetchData();
  }, []);

  return (
    <div className="page">
      {usersState && usersState[0] && (
        <VolunteerCard propsForCard={usersState[7]} />
      )}
    </div>
  );
};
