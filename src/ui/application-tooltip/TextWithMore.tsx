import { useState } from 'react';
import styles from './textWithMore.module.scss';

interface Props {
  /**
   * Request
   */
  text: string;
}

export const TextWithMore: React.FC<Props> = ({ text }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const className = isCollapsed ? styles.textCollapsed : '';
  console.log('className:', className);

  return (
    <div className={className}>
      {text}
      {isCollapsed && (
        <button
          className={styles.readMore}
          onClick={() => setIsCollapsed(false)}
        >
          Читать
        </button>
      )}
    </div>
  );
};
