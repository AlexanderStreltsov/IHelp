import { FC, useEffect, useState, useCallback } from 'react';

import { Button } from '../../ui/button/button';
import { Navigation } from '../navigation';

import { TriplexUnionIcon } from '../../ui/icons/triplex-union-icon';
import { MenuIcon } from '../../ui/icons/menu-icon';
import { ExitIcon } from '../../ui/icons/exit-icon';

import styles from './Dropdown.module.scss';

import { navigationItems } from '../../modules/header/Header';

const Dropdown: FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const adminButtonHandler = (e: React.SyntheticEvent<Element, Event>) => {
    e.stopPropagation();

    console.log('Написать администратору');
  };

  const dropdownHandler = (e: React.MouseEvent) => {
    e.stopPropagation();

    setMenuVisible((prev) => !prev);
  };

  const clickHandler = useCallback(
    (e: MouseEvent | React.MouseEvent<HTMLUListElement, MouseEvent>) => {
      e.stopPropagation();

      if (e.currentTarget === document && menuVisible) {
        setMenuVisible(false);
      }
    },
    [menuVisible, setMenuVisible],
  );

  useEffect(() => {
    document.addEventListener('click', clickHandler);

    return (): void => document.removeEventListener('click', clickHandler);
  }, [clickHandler]);

  return (
    <div className={styles.container}>
      <TriplexUnionIcon
        className={`${styles.button} ${styles.mobileHide}`}
        color="dark-blue"
        onClick={(e) => dropdownHandler(e)}
      />
      <MenuIcon
        className={`${styles.button} ${styles.mobileVisible}`}
        color="dark-blue"
        onClick={(e) => dropdownHandler(e)}
      />
      {menuVisible && (
        <ul className={styles.dropdown} onClick={clickHandler}>
          <li className={styles.item} onClick={adminButtonHandler}>
            <span className={`${styles.text} text-medium`}>
              Написать администратору
            </span>
            <Button onClick={adminButtonHandler} type="circleSmallEmail" />
          </li>
          <li className={`${styles.item} ${styles.mobileVisible}`}>
            <Navigation items={navigationItems} />
          </li>
          <li className={styles.item}>
            <button className={styles.exit} onClick={() => console.log('Exit')}>
              <span className={`${styles.text} text-medium`}>Выйти</span>
              <ExitIcon color="dark-blue" />
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
