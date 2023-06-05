import { FC } from 'react';

import { FilterIcon } from '../../ui/icons/filter-big-icon';

import styles from './TitleBar.module.scss';

type TTitleBarProps = {
  title: string;
  icon: JSX.Element;
  filterHandler?: () => void;
};

const TitleBar: FC<TTitleBarProps> = ({ title, icon, filterHandler }) => {
  return (
    <section className={styles.container}>
      <span className={styles.icon}>{icon}</span>
      <h1 className={`${styles.headline}`}>{title}</h1>

      {filterHandler && (
        <button className={styles.button} onClick={filterHandler}>
          <span className={styles.name}>Фильтр</span>
          <span className={styles.icon}>
            <FilterIcon color="dark-blue" />
          </span>
        </button>
      )}
    </section>
  );
};

export default TitleBar;
