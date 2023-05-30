import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { ApplicationMap } from '../../modules/applicationMap/applicationMap';
// eslint-disable-next-line @typescript-eslint/no-unused-vars, import/no-extraneous-dependencies
import { nanoid } from 'nanoid';

import './App.scss';

const App = () => {
  const arrayRecipientsRequest = [
    {
      id: 12,
      title: 'Выгулять собаку (новая задача)',
      category: {
        id: 2,
        name: 'Название категории 2',
      },
      date: '2023-05-31T17:30Z',
      description:
        'Заболел и совсем нет сил даже ходить по квартире. Почти неделю собаку выгуливали соседи, но в пятницу они не смогут. Помогите, пожалуйста!',
      completed: false,
      recipient: {
        id: 4,
        fullname: 'Иванов Иван Иванович',
        role: 'recipient',
        vk: 'https://vk.com/id123456789',
        photo:
          'http://webmg.ru/wp-content/uploads/2022/01/100-20220105_151754.jpg',
        phone: '+7 (916) 123-45-67',
        address: 'ул. Нахимова, д. 9',
        coordinates: [59.941871, 30.223494],
        approved: true,
      },
      volunteer: null,
      address: 'ул. Нахимова, д. 9',
      coordinates: [59.941871, 30.223494],
      chatId: null,
      uuid: nanoid(),
    },
    {
      id: 12,
      title: 'Выгулять собаку (новая задача)',
      category: {
        id: 2,
        name: 'Название категории 2',
      },
      date: '2023-06-02T17:30Z',
      description:
        'Заболел и совсем нет сил даже ходить по квартире. Почти неделю собаку выгуливали соседи, но в пятницу они не смогут. Помогите, пожалуйста!',
      completed: false,
      recipient: {
        id: 4,
        fullname: 'Иванов Иван Иванович',
        role: 'recipient',
        vk: 'https://vk.com/id123456789',
        photo:
          'http://webmg.ru/wp-content/uploads/2022/01/100-20220105_151754.jpg',
        phone: '+7 (916) 123-45-67',
        address: 'ул. Нахимова, д. 9',
        coordinates: [59.941871, 30.223494],
        approved: true,
      },
      volunteer: null,
      address: 'ул. Нахимова, д. 9',
      coordinates: [59.941871, 30.203494],
      chatId: null,
      uuid: nanoid(),
    },
    {
      id: 12,
      title: 'Выгулять собаку (новая задача)',
      category: {
        id: 2,
        name: 'Название категории 2',
      },
      date: '2023-06-03T17:30Z',
      description:
        'Заболел и совсем нет сил даже ходить по квартире. Почти неделю собаку выгуливали соседи, но в пятницу они не смогут. Помогите, пожалуйста!',
      completed: false,
      recipient: {
        id: 4,
        fullname: 'Иванов Иван Иванович',
        role: 'recipient',
        vk: 'https://vk.com/id123456789',
        photo:
          'http://webmg.ru/wp-content/uploads/2022/01/100-20220105_151754.jpg',
        phone: '+7 (916) 123-45-67',
        address: 'ул. Нахимова, д. 9',
        coordinates: [59.941871, 30.223494],
        approved: true,
      },
      volunteer: null,
      address: 'ул. Нахимова, д. 9',
      coordinates: [59.951871, 30.223494],
      chatId: null,
      uuid: nanoid(),
    },
  ];
  return (
    /* basename need to work deploy into gh pages */
    <YMaps
      query={{ apikey: '1b064d7a-193d-4c13-96fe-873708cc42e3', lang: 'ru_RU' }}
    >
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>IHelp</h1>
                <ApplicationMap
                  coordinatesCenter={[59.942575, 30.216757]}
                  radius={5}
                  recipientsRequest={arrayRecipientsRequest}
                />
              </>
            }
          />
        </Routes>
      </Router>
    </YMaps>
  );
};

export default App;
