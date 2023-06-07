import { FC, useEffect, useState } from 'react';

import { Profile } from '../../components/profile/profile';
import { TitleBar } from '../../components/title-bar';
import { ActiveRequestVersion1Icon } from '../../ui/icons/active-request-big-version-1-icon';

import { getUser } from '../../api';

import type { TUser } from '../../types';

const VolunteerPage: FC = () => {
  const [profile, setProfile] = useState<TUser>();

  useEffect(() => {
    const getData = async () => {
      const user = await getUser(7);

      setProfile(user);
    };

    getData();
  }, []);

  return (
    <div className="page-container">
      <Profile type="volunteer" {...profile} />
      <div className="page-content">
        <TitleBar
          title="Активные заявки"
          icon={<ActiveRequestVersion1Icon color="dark-blue" />}
        />
      </div>
    </div>
  );
};

export default VolunteerPage;
