import { FC } from 'react';

import styles from './Sidebar.module.scss';
import { PrivacyBigIcon } from '../../ui/icons/privacy-big-icon';

type TSidebarProps = {
  isBlocked?: boolean;
  children: JSX.Element[];
};

const Sidebar: FC<TSidebarProps> = ({ isBlocked = false, children }) => {
  return (
    <aside className={styles.aside}>
      {children}
      {isBlocked && (
        <div className={styles.blocked}>
          <div className={styles.blockedIcon}>
            <PrivacyBigIcon color="white" />
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
