import { FC, useEffect, useState } from 'react';

import { Profile } from '../../components/profile/profile';
import { TitleBar } from '../../components/title-bar';
import { ConfirmIcon } from '../../ui/icons/confirm-icon';

import { getAllUsers } from '../../api';

import type { TUser } from '../../types';
import { Sidebar } from '../../components/sidebar';
import { Button } from '../../ui/button/button';

const AdminPage: FC = () => {
  const [profile, setProfile] = useState<TUser>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [usersList, setUsersList] = useState<TUser[]>();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllUsers();

      const adminData = data.filter((user) => user.id === 2)[0];
      const usersData = data.filter((user) => user.role === 'volunteer');

      setProfile(adminData);
      setUsersList(usersData);
    };

    getData();
  }, []);

  return (
    <div className="page-container">
      <div>
        <Profile type="admin" {...profile} />
        <Sidebar>
          <Button icon="confirm" onClick={() => {}} type="bigCard">
            Подтверждение / Блокировка
          </Button>
          <Button icon="statistics" onClick={() => {}} type="bigCard">
            Статистика
          </Button>
          <Button icon="application" onClick={() => {}} type="bigCard">
            Создание / Редактирование заявки
          </Button>
        </Sidebar>
      </div>
      <div className="page-content">
        <TitleBar
          title="Подтверждение / Блокировка"
          icon={<ConfirmIcon color="dark-blue" />}
        />
      </div>
    </div>
  );
};

export default AdminPage;
