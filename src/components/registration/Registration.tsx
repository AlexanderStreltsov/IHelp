import { FC, useEffect, useMemo, useState } from 'react';
import { YMaps, withYMaps } from '@pbe/react-yandex-maps';

import { InputString } from '../../ui/forms/InputString';
import { InputPhoneNumber } from '../../ui/forms/InputPhoneNumber';
import { Button } from '../../ui/button/button';
import { VkIcon } from '../../ui/icons/vk-icon';

function MapSuggestComponent(props: any) {
  const { ymaps } = props;

  useEffect(() => {
    const suggestView = new ymaps.SuggestView('suggest');
  }, [ymaps.SuggestView]);

  // return <input type="text" id="suggest" />;
  return (
    <InputString
      id="suggest"
      name="address"
      label="Адрес"
      placeholder="Адрес"
      initialValue=""
    />
  );
}

const Registration: FC = () => {
  const [state, setState] = useState({
    fullName: '',
    phone: '',
    address: '',
  });

  const handleFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const SuggestComponent = useMemo(() => {
    return withYMaps(MapSuggestComponent, true, [
      'SuggestView',
      'geocode',
      'coordSystem.geo',
    ]);
  }, []);

  return (
    <form onChange={(e) => handleFormChange(e)}>
      <InputString
        label="ФИО"
        placeholder="ФИО"
        initialValue=""
        name="fullName"
      />
      <InputPhoneNumber name="phone" />
      <YMaps enterprise query={{ apikey: 'api-key' }}>
        <SuggestComponent />
      </YMaps>
      <span>Укажите адрес и мы подберем ближайшее к вам задание</span>
      <VkIcon color="dark-blue" />
      <Button onClick={() => {}} type="apply">
        Загегистрироваться через ВКонтакте
      </Button>
    </form>
  );
};

export default Registration;
