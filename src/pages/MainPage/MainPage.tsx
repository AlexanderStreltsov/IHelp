import { FC, useState } from 'react';

import { Profile } from '../../components/profile/profile';
import { TitleBar } from '../../components/title-bar';
import { Filter } from '../../components/filters/filter';
import { RequestMapIcon } from '../../ui/icons/request-map-icon';
import { Sidebar } from '../../components/sidebar';
import { Button } from '../../ui/button/button';

const MainPage: FC = () => {
  const [filter, setFilter] = useState({});
  const [isShowFilter, setIsShowFilter] = useState(false);

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
        <Profile type="signUp" />
        <Sidebar isBlocked>
          <Button icon="map" onClick={() => {}} type="bigCard">
            Карта заявок
          </Button>
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
          title="Карта заявок"
          icon={<RequestMapIcon color="dark-blue" />}
          filterHandler={filterToggle}
        />
      </div>
      {isShowFilter && (
        <Filter
          sendResult={getResult}
          currentConditions={filter}
          type="volunteerApplicationMap"
        />
      )}
    </div>
  );
};

export default MainPage;
