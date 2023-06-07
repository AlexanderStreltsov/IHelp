import { FC, useEffect, useState } from 'react';

import { Profile } from '../../components/profile/profile';
import { TitleBar } from '../../components/title-bar';
import { Filter } from '../../components/filters/filter';
import { ActiveRequestVersion1Icon } from '../../ui/icons/active-request-big-version-1-icon';

import { getAllUsers } from '../../api';

import type { TUser } from '../../types';

const VolunteerPage: FC = () => {
  const [profile, setProfile] = useState<TUser>();
  const [filter, setFilter] = useState({});
  const [isShowFilter, setIsShowFilter] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = (await getAllUsers()).filter((user) => user.id === 7);

      setProfile(data[0]);
    };

    getData();
  }, []);

  const filterToggle = () => {
    setIsShowFilter((prev) => !prev);
  };

  const getResult = (result: { [name: string]: string[] }) => {
    setFilter({ ...result });
    setIsShowFilter(false);
  };

  return (
    <div className="page-container">
      <Profile type="volunteer" {...profile} />
      <div className="page-content">
        <TitleBar
          title="Активные заявки"
          icon={<ActiveRequestVersion1Icon color="dark-blue" />}
          filterHandler={filterToggle}
        />
      </div>
      {isShowFilter && (
        <Filter
          sendResult={getResult}
          currentConditions={filter}
          type="activeApplicationsVolunteer"
        />
      )}
    </div>
  );
};

export default VolunteerPage;
