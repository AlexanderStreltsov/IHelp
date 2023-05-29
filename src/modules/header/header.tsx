import { FC } from 'react';

import { Logo } from '../../ui/logo';
import { TopBar } from '../../components/top-bar';
import { DropdownMenu } from '../../components/dropdown-menu';

import { PersonIcon } from '../../ui/icons/person-icon';
import { BlogIcon } from '../../ui/icons/blog-icon';
import { PrivacyIcon } from '../../ui/icons/privacy-icon';
import { ContactsLocationSmIcon } from '../../ui/icons/contacts-location-sm-icon';

import styles from './header.module.scss';

const topbarItems = [
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
        <Logo />
        <TopBar items={topbarItems} />
        <DropdownMenu />
      </div>
    </header>
  );
};

export default Header;
