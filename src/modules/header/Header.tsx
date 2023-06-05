import { FC } from 'react';

import { PersonPhoto } from '../../components/person-photo';
import { Navigation } from '../../components/navigation';
import { Dropdown } from '../../components/dropdown';

import { Logo } from '../../ui/logo';
import { PersonIcon } from '../../ui/icons/person-icon';
import { BlogIcon } from '../../ui/icons/blog-icon';
import { PrivacyIcon } from '../../ui/icons/privacy-icon';
import { ContactsLocationSmIcon } from '../../ui/icons/contacts-location-sm-icon';

import styles from './Header.module.scss';

export const navigationItems = [
  {
    title: 'Личный кабинет',
    url: '/my/',
    icon: <PersonIcon color="dark-blue" />,
    current: true,
  },
  {
    title: 'Блог',
    url: '/blog/',
    icon: <BlogIcon color="dark-blue" />,
  },
  {
    title: 'Политика конфиденциальности',
    url: '/privacy/',
    icon: <PrivacyIcon color="dark-blue" />,
  },
  {
    title: 'Контакты',
    url: '/contacts/',
    icon: <ContactsLocationSmIcon color="dark-blue" />,
  },
];

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <PersonPhoto
          pic="http://webmg.ru/wp-content/uploads/2022/01/100-20220105_151754.jpg"
          className={styles.avatar}
        />
        <div className={styles.logo}>
          <Logo />
        </div>
        <Navigation items={navigationItems} className={styles.mobileHide} />
        <Dropdown />
      </div>
    </header>
  );
};

export default Header;
