import { FC, useState } from 'react';

import { Button } from '../../ui/button/button';
import { TriplexUnionIcon } from '../../ui/icons/triplex-union-icon';
import { ExitIcon } from '../../ui/icons/exit-icon';

import styles from './dropdown-menu.module.scss';

const DropdownMenu: FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const dropdownHandler = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <TriplexUnionIcon
        className={styles.button}
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
          <li className={styles.item}>
            <span className={`${styles.link} text-medium`}>Выйти</span>
            <ExitIcon color="dark-blue" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
