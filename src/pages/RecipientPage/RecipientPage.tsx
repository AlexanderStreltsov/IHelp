import { FC, useEffect, useState } from 'react';

import { Profile } from '../../components/profile/profile';
import { TitleBar } from '../../components/title-bar';
import { ExecutedRequestIcon } from '../../ui/icons/executed-request-icon';

import { getAllUsers } from '../../api';

import type { TUser } from '../../types';

const RecipientPage: FC = () => {
  const [profile, setProfile] = useState<TUser>();

  useEffect(() => {
    const getData = async () => {
      const data = (await getAllUsers()).filter((user) => user.id === 4);

      setProfile(data[0]);
    };

    getData();
  }, []);

  return (
    <div className="page-container">
      <Profile type="volunteer" {...profile} />
      <div className="page-content">
        <TitleBar
          title="Завершенные заявки"
          icon={<ExecutedRequestIcon color="dark-blue" />}
        />
      </div>
    </div>
  );
};

export default RecipientPage;
