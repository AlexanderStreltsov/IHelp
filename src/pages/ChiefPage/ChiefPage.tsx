import { FC, useEffect, useState } from 'react';

import { Profile } from '../../components/profile/profile';
import { TitleBar } from '../../components/title-bar';
import { ConfirmIcon } from '../../ui/icons/confirm-icon';

import { getAllUsers } from '../../api';

import type { TUser } from '../../types';

const ChiefPage: FC = () => {
  const [profile, setProfile] = useState<TUser>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [adminsList, setAdminsList] = useState<TUser[]>();

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
      <Profile type="volunteer" {...profile} />
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
