import { FC, useEffect, useMemo, useState } from 'react';
import { YMaps, withYMaps } from '@pbe/react-yandex-maps';

import { InputString } from '../../ui/forms/InputString';
import { InputPhoneNumber } from '../../ui/forms/InputPhoneNumber';
import { Button } from '../../ui/button/button';

import styles from './Registration.module.scss';

type TRegistrationFormData = {
  fullName: string;
  phone: string;
  address: string;
};

export type TRegistrationProps = {
  className?: string;
  onButtonClick: (data: TRegistrationFormData) => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MapSuggestComponent(props: any) {
  const { ymaps } = props;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const suggestView = new ymaps.SuggestView('suggest');
  }, [ymaps.SuggestView]);

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

const Registration: FC<TRegistrationProps> = ({
  onButtonClick,
  className = '',
}) => {
  const [state, setState] = useState<TRegistrationFormData>({
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

  const handleButtonClick = (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();

    onButtonClick(state);
  };

  const SuggestComponent = useMemo(() => {
    return withYMaps(MapSuggestComponent, true, [
      'SuggestView',
      'geocode',
      'coordSystem.geo',
    ]);
  }, []);

  return (
    <>
      <h2 className={styles.header}>Зарегистрироваться</h2>
      <form
        onChange={(e) => handleFormChange(e)}
        className={`${styles.form} + className`}
      >
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
        <span className={styles.caption}>
          Укажите адрес и мы подберем ближайшее к вам задание
        </span>
        <Button
          onClick={(e) => handleButtonClick(e)}
          type="applyVK"
          className={styles.button}
        >
          Загегистрироваться через ВКонтакте
        </Button>
      </form>
    </>
  );
};

export default Registration;
