import { FC, useEffect, useState } from 'react';

import { Profile } from '../../components/profile/profile';
import { TitleBar } from '../../components/title-bar';
import { Filter } from '../../components/filters/filter';
import { ExecutedRequestIcon } from '../../ui/icons/executed-request-icon';

import { getAllUsers } from '../../api';

import type { TUser } from '../../types';
import { Sidebar } from '../../components/sidebar';
import { Button } from '../../ui/button/button';

const RecipientPage: FC = () => {
  const [profile, setProfile] = useState<TUser>();
  const [filter, setFilter] = useState({});
  const [isShowFilter, setIsShowFilter] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = (await getAllUsers()).filter((user) => user.id === 4);

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
        <Profile type="recipient" {...profile} />
        <Sidebar>
          <Button icon="active" onClick={() => {}} type="bigCard">
            Активные заявки
          </Button>
          <Button icon="completed" onClick={() => {}} type="bigCard">
            Завершенные заявки
          </Button>
        </Sidebar>
      </div>
      <div className="page-content">
        <TitleBar
          title="Завершенные заявки"
          icon={<ExecutedRequestIcon color="dark-blue" />}
          filterHandler={filterToggle}
        />
      </div>
      {isShowFilter && (
        <Filter
          sendResult={getResult}
          currentConditions={filter}
          type="recipient"
        />
      )}
    </div>
  );
};

export default RecipientPage;
