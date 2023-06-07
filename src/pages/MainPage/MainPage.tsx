import { FC, useState } from 'react';

import { Profile } from '../../components/profile/profile';
import { TitleBar } from '../../components/title-bar';
import { Filter } from '../../components/filters/filter';
import { RequestMapIcon } from '../../ui/icons/request-map-icon';

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
      <Profile type="signUp" />
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
