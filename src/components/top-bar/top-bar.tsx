import { FC } from 'react';

import styles from './top-bar.module.scss';

type TTopBarProps = {
  items: {
    title: string;
    url: string;
    icon: JSX.Element;
    current?: boolean;
  }[];
};

const TopBar: FC<TTopBarProps> = ({ items }) => {
  return (
    <ul className={styles.container}>
      {items.length > 0 &&
        items.map(({ title, icon, current }, index) => {
          return (
            <li className={styles.item} key={index}>
              {icon}
              <span
                className={`${styles.link} text-medium ${
                  current ? styles.underlined : ''
                }`}
              >
                {title}
              </span>
            </li>
          );
        })}
    </ul>
  );
};

export default TopBar;
