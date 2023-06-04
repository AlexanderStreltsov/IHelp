import { FC } from 'react';

import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

type TNavigationProps = {
  items: {
    title: string;
    url: string;
    icon: JSX.Element;
    current?: boolean;
  }[];
  className?: string;
};

const Navigation: FC<TNavigationProps> = ({ items, className }) => {
  return (
    <ul className={`${styles.container} ${className}`}>
      {items.length > 0 &&
        items.map(({ title, icon, current }, index) => {
          return (
            <li className={`${styles.item}`} key={index}>
              <NavLink
                to={'#'}
                className={`${styles.link} ${
                  current ? styles.current : undefined
                }`}
              >
                {icon}
                <span className={`${styles.text}`}>{title}</span>
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};

export default Navigation;
