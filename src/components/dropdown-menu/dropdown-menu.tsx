import { FC, useState } from 'react';

import { Button } from '../../ui/button/button';

import { MessageIcon } from '../../ui/icons/message-icon';
import { ExitIcon } from '../../ui/icons/exit-icon';
import { UnionIcon } from '../../ui/icons/union-icon';

import styles from './dropdown-menu.module.scss';

const DropdownMenu: FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const dropdownHandler = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={dropdownHandler}>
        <MessageIcon color="dark-blue" />
        <ExitIcon color="dark-blue" />
        <UnionIcon color="dark-blue" />
      </button>
      {menuVisible && (
        <ul className={styles.dropdown}>
          <li className={styles.item}>
            <span className={`${styles.link} text-medium`}>
              Написать администратору
            </span>
            <Button onClick={() => {}} type="circleSmallEmail" disabled={false}>
              Написать администратору
            </Button>
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
