import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Profile } from '../../components/profile/profile';
import { Sidebar } from '../../components/sidebar';
import { TitleBar } from '../../components/title-bar';
import { Filter } from '../../components/filters/filter';

import { Button } from '../../ui/button/button';
import { ActiveRequestVersion1Icon } from '../../ui/icons/active-request-big-version-1-icon';

import { getAllUsers } from '../../api';

import type { TUser } from '../../types';

import styles from './VolunteerPage.module.scss';

const VolunteerPage: FC = () => {
  const [profile, setProfile] = useState<TUser>();
  const [filter, setFilter] = useState({});
  const [isShowFilter, setIsShowFilter] = useState(false);

  const { pathname } = useLocation();

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
      <div>
        <Profile type="volunteer" {...profile} />
        <Sidebar>
          <Button
            icon="map"
            onClick={() => {}}
            type="bigCard"
            active={pathname === '/volunteer/map'}
          >
            Карта заявок
          </Button>
          <Button
            icon="active"
            onClick={() => {}}
            type="bigCard"
            active={pathname === '/volunteer'}
          >
            Активные заявки
          </Button>
          <Button icon="completed" onClick={() => {}} type="bigCard">
            Завершенные заявки
          </Button>
        </Sidebar>
      </div>
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
          moduleOutStyles={styles.filter}
        />
      )}
    </div>
  );
};

export default VolunteerPage;
