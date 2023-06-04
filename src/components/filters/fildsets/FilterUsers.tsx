import styles from '../filter.module.scss';
import { Checkbox } from '../../../ui/checkbox/checkbox';

export const FilterUsers = () => (
  <fieldset className={`${styles.fieldset} ${styles.fildsetUsers}`}>
    <legend className={`${styles.legend} text-small-bold`}>Категория</legend>
    <Checkbox
      type="radio"
      name="role"
      value="all"
      check={true}
      form="checkbox"
      label="Все"
      moduleOutStyles={styles.checkboxUsers}
    />
    <Checkbox
      type="radio"
      name="role"
      value="volunteer"
      form="checkbox"
      label="Волонтеры"
      moduleOutStyles={styles.checkboxUsers}
    />
    <Checkbox
      type="radio"
      name="role"
      value="recipient"
      form="checkbox"
      label="Реципиенты"
      moduleOutStyles={styles.checkboxUsers}
    />
    <Checkbox
      type="radio"
      name="role"
      value="unprocessed"
      form="checkbox"
      label="Не обработанные"
      moduleOutStyles={styles.checkboxUsers}
    />
  </fieldset>
);
