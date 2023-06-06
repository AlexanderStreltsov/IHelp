import { FC, useEffect, useState } from 'react';

import { Profile } from '../../components/profile/profile';

import { getUser } from '../../api';
import { TitleBar } from '../../components/title-bar';
import { ActiveRequestVersion1Icon } from '../../ui/icons/active-request-big-version-1-icon';

const VolunteerPage: FC = () => {
  const [state, setState] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const volunteer = await getUser(7);
      setState(volunteer);
    };

    getData();
  }, []);

  return (
    <div className="page-container">
      <Profile type="volunteer" {...state} />
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
