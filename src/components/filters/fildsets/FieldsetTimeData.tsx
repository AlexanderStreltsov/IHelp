import styles from '../filter.module.scss';

export const FieldsetTimeData = () => (
  <fieldset className={`${styles.fieldset} ${styles.fieldsetTideData} `}>
    <legend className={`${styles.legend} text-small-bold`}>Дата и время</legend>
  </fieldset>
);
