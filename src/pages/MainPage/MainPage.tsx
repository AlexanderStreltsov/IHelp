import { FC } from 'react';

import { Profile } from '../../components/profile/profile';
import { TitleBar } from '../../components/title-bar';
import { RequestMapIcon } from '../../ui/icons/request-map-icon';

const MainPage: FC = () => {
  return (
    <div className="page-container">
      <Profile type="signUp" />
      <div className="page-content">
        <TitleBar
          title="Карта заявок"
          icon={<RequestMapIcon color="dark-blue" />}
        />
      </div>
    </div>
  );
};

export default MainPage;
