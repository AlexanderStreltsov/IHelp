import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Profile } from '../../components/profile/profile';
import { TitleBar } from '../../components/title-bar';
import { Filter } from '../../components/filters/filter';
import { Sidebar } from '../../components/sidebar';
import { AdminCard } from '../../components/admin-card/Admin-card';

import { ConfirmIcon } from '../../ui/icons/confirm-icon';
import { Button } from '../../ui/button/button';

import { getAllUsers } from '../../api';

import styles from './ChiefPage.module.scss';

import type { TUser } from '../../types';

const ChiefPage: FC = () => {
  const [profile, setProfile] = useState<TUser>();
  const [adminsList, setAdminsList] = useState<TUser[]>();

  const [filter, setFilter] = useState({});
  const [isShowFilter, setIsShowFilter] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const getData = async () => {
      let data = new Array<TUser>();

      try {
        data = await getAllUsers();
      } catch (err) {
        // TODO Exception handling
      }

      const chiefData = data.filter((user) => user.id === 1)[0];
      const adminsData = data.filter((user) => user.role === 'admin');

      setProfile(chiefData);
      setAdminsList(adminsData);
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
          filterHandler={filterToggle}
        />
        {isShowFilter && (
          <Filter
            sendResult={getResult}
            currentConditions={filter}
            type="admin"
            moduleOutStyles={styles.filter}
          />
        )}
        <div className="catalog catalog-column">
          {adminsList &&
            adminsList?.map((item, index) => {
              const rightConfig = {
                verify_accounts: !!(item.adminStatus && item.adminStatus > 0),
                create_request: !!(item.adminStatus && item.adminStatus > 1),
                allot_key: !!(item.adminStatus && item.adminStatus > 2),
                settle_dispute: !!(item.adminStatus && item.adminStatus > 3),
              };

              return (
                <AdminCard
                  photo={item.photo}
                  fullName={item.fullname || ''}
                  personalID={item.id || 0}
                  tel={item.phone || ''}
                  rights={rightConfig}
                  key={nanoid()}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ChiefPage;
