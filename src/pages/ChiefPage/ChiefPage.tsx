import { FC, useEffect, useState } from 'react';

import { Profile } from '../../components/profile/profile';
import { TitleBar } from '../../components/title-bar';
import { Filter } from '../../components/filters/filter';
import { ConfirmIcon } from '../../ui/icons/confirm-icon';

import { getAllUsers } from '../../api';

import type { TUser } from '../../types';
import { AdminCard } from '../../components/admin-card/Admin-card';

const ChiefPage: FC = () => {
  const [profile, setProfile] = useState<TUser>();
  const [adminsList, setAdminsList] = useState<TUser[]>();

  const [filter, setFilter] = useState({});
  const [isShowFilter, setIsShowFilter] = useState(false);

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
          title="Подтверждение / Блокировка"
          icon={<ConfirmIcon color="dark-blue" />}
          filterHandler={filterToggle}
        />
        {isShowFilter && (
          <Filter
            sendResult={getResult}
            currentConditions={filter}
            type="admin"
          />
        )}
        <div className="catalog">
          {adminsList &&
            adminsList?.map((item) => {
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
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ChiefPage;
