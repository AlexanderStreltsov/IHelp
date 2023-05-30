import {
  Map,
  SearchControl,
  ZoomControl,
  RulerControl,
  Placemark,
  YMaps,
  withYMaps,
} from '@pbe/react-yandex-maps';
import styles from './applicationMap.module.scss';
import { LocationIcon } from '../../ui/icons/location-icon';
import location from './location.svg';
import locationQuickly from './locationQuickly.svg';
import balls from './balls.svg';
import { getIsRequestImmediate } from '../../utils/utils';

// импортировать тип заявки, который есть в моковом api
interface IApplicationMap {
  coordinatesCenter: number[];
  radius?: number;
  recipientsRequest: {
    id: number;
    title: string;
    category: {
      id: number;
      name: string;
    };
    date: string;
    description: string;
    completed: boolean;
    recipient: {
      id: number;
      fullname: string;
      role: string;
      vk: string;
      photo: string;
      phone: string;
      address: string;
      coordinates: number[];
      approved: boolean;
    };
    volunteer: null;
    address: string;
    coordinates: number[];
    chatId: null;
    uuid: string;
  }[];
}

export const ApplicationMap = ({
  coordinatesCenter,
  radius = 5,
  recipientsRequest,
}: IApplicationMap) => {
  const getZoom = (mapRadius: number) => {
    switch (mapRadius) {
      case 5:
        return 13;
      case 3:
        return 14;
      case 1:
        return 16;
      default:
        return 13;
    }
  };
  const ggg = (
    <div className={styles.hint}>
      <span className={`${styles.hintSpan} text-big`}>10</span>
      <img src={balls} alt="иконка баллов" />
    </div>
  );
  const hintOfImmediateRequest = `<div class=${styles.hint}>
    <span class=${styles.hintSpan}>10</span>
    <img src=${balls} alt="иконка балло" />
  </div>`;
  const requestsList = recipientsRequest.map((item) => {
    const { coordinates, uuid, date } = item;
    const isQuickly = getIsRequestImmediate(date);
    return (
      <Placemark
        geometry={coordinates}
        key={uuid}
        options={{
          iconLayout: 'default#image',
          iconImageHref: isQuickly ? locationQuickly : location,
          iconImageSize: [53, 53],
          iconImageOffset: [-27, -52],
          hasHint: true,
          openHintOnHover: true,
        }}
        properties={{
          hintContent: isQuickly && hintOfImmediateRequest,
        }}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
      />
    );
  });
  return (
    <>
      <div className={styles.hint}>
        <span className={`${styles.hintSpan} text-big`}>10</span>
        <img src={balls} alt="иконка балло" />
      </div>
      <Map
        defaultState={{
          center: coordinatesCenter,
          zoom: getZoom(radius),
          controls: [],
        }}
        width={940}
        height={748}
      >
        {/*<SearchControl options={{ float: 'right' }} />
      <RulerControl />*/}
        <ZoomControl />
        {requestsList}
      </Map>
    </>
  );
};
