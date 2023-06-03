import { FC, useEffect, useState, useId, useCallback } from 'react';

import { Button } from '../../ui/button/button';
import { Navigation } from '../navigation';

import { TriplexUnionIcon } from '../../ui/icons/triplex-union-icon';
import { MenuIcon } from '../../ui/icons/menu-icon';
import { ExitIcon } from '../../ui/icons/exit-icon';

import styles from './Dropdown.module.scss';

import { navigationItems } from '../../modules/header/Header';

const Dropdown: FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const dropdownId = useId();

  const adminButtonHandler = (e: React.SyntheticEvent<Element, Event>) => {
    e.stopPropagation();

    console.log('Написать администратору');
  };

  const dropdownHandler = (e: React.MouseEvent) => {
    e.stopPropagation();

    setMenuVisible((prev) => !prev);
  };

  const clickHandler = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      e.stopPropagation();

      if (e.currentTarget?.id !== dropdownId && menuVisible) {
        setMenuVisible(false);
      }
    },
    [dropdownId, menuVisible, setMenuVisible],
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
        <ul
          className={styles.dropdown}
          id={dropdownId}
          onClick={(e) => clickHandler(e)}
        >
          <li className={styles.item} onClick={(e) => adminButtonHandler(e)}>
            <span className={`${styles.text} text-medium`}>
              Написать администратору
            </span>
            <Button
              onClick={(e) => adminButtonHandler(e)}
              type="circleSmallEmail"
            />
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
