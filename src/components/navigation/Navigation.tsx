import { FC } from 'react';

import styles from './Navigation.module.scss';

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
            <li
              className={`${styles.item} ${current ? styles.current : ''}`}
              key={index}
            >
              {icon}
              <span className={`${styles.link} text-medium`}>{title}</span>
            </li>
          );
        })}
    </ul>
  );
};

export default Navigation;
