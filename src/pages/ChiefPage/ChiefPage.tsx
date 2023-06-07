import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Profile } from '../../components/profile/profile';
import { TitleBar } from '../../components/title-bar';
import { Sidebar } from '../../components/sidebar';

import { ConfirmIcon } from '../../ui/icons/confirm-icon';
import { Button } from '../../ui/button/button';

import { getAllUsers } from '../../api';

import type { TUser } from '../../types';

const ChiefPage: FC = () => {
  const [profile, setProfile] = useState<TUser>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [adminsList, setAdminsList] = useState<TUser[]>();

  const { pathname } = useLocation();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllUsers();

      const chiefData = data.filter((user) => user.id === 1)[0];
      const adminsData = data.filter((user) => user.role === 'admin');

      setProfile(chiefData);
      setAdminsList(adminsData);
    };

    getData();
  }, []);

  return (
    <div className="page-container">
      <div>
        <Profile type="chief" {...profile} />
        <Sidebar>
          <Button
            icon="confirm"
            onClick={() => {}}
            type="bigCard"
            active={pathname === '/chief'}
          >
            Подтверждение / Блокировка
          </Button>
          <Button
            icon="statistics"
            onClick={() => {}}
            type="bigCard"
            active={pathname === '/chief/stat'}
          >
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

export default ChiefPage;
