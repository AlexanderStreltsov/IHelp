import { FC } from 'react';

import { Profile } from '../../components/profile/profile';
import { Sidebar } from '../../components/sidebar';
import { Button } from '../../ui/button/button';
import { TitleBar } from '../../components/title-bar';
import { RequestMapIcon } from '../../ui/icons/request-map-icon';
import { Registration } from '../../components/registration';

const RegistrationPage: FC = () => {
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
          title="Регистрация"
          icon={<RequestMapIcon color="dark-blue" />}
        />
        <Registration onButtonClick={() => {}} />
      </div>
    </div>
  );
};

export default RegistrationPage;
