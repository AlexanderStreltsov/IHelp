import { FC } from 'react';

import logo from '../../images/logo.png';

import styles from './Logo.module.scss';

const Logo: FC = () => {
  return <img className={styles.logo} src={logo} alt="ЯПомогаю" />;
};

export default Logo;
