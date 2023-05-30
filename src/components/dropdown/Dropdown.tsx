import { FC, useState } from 'react';

import { Button } from '../../ui/button/button';
import { Navigation } from '../navigation';

import { TriplexUnionIcon } from '../../ui/icons/triplex-union-icon';
import { MenuIcon } from '../../ui/icons/menu-icon';
import { ExitIcon } from '../../ui/icons/exit-icon';

import styles from './Dropdown.module.scss';

import { navigationItems } from '../../modules/header/Header';

const Dropdown: FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const dropdownHandler = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <TriplexUnionIcon
        className={`${styles.button} mobileHide`}
        color="dark-blue"
        onClick={dropdownHandler}
      />
      <MenuIcon
        className={`${styles.button} mobileVisible`}
        color="dark-blue"
        onClick={dropdownHandler}
      />
      {menuVisible && (
        <ul className={styles.dropdown}>
          <li className={styles.item}>
            <span className={`${styles.link} text-medium`}>
              Написать администратору
            </span>
            <Button onClick={() => {}} type="circleSmallEmail" />
          </li>
          <li className={`${styles.item} mobileVisible`}>
            <Navigation items={navigationItems} />
          </li>
          <li className={styles.item}>
            <span className={`${styles.link} text-medium`}>Выйти</span>
            <ExitIcon color="dark-blue" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
