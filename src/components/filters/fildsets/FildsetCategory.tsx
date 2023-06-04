import styles from '../filter.module.scss';
import { Checkbox } from '../../../ui/checkbox/checkbox';

interface IFildsetCategory {
  type: string;
}

export const FildsetCategory = ({ type }: IFildsetCategory) => (
  <fieldset
    className={`${styles.fieldset} ${styles.fildsetCategory} ${
      type === 'activeApplicationsVolunteer' &&
      styles.fieldsetActiveApplications
    }`}
  >
    <legend className={`${styles.legend} text-small-bold`}>Категория</legend>
    <Checkbox
      name="category"
      value="1"
      label="Категория 1"
      moduleOutStyles={styles.checkboxCategory}
    />
    <Checkbox
      name="category"
      value="4"
      label="Категория 4"
      moduleOutStyles={styles.checkboxCategory}
    />
    <Checkbox
      name="category"
      value="2"
      label="Категория 2"
      moduleOutStyles={styles.checkboxCategory}
    />
    <Checkbox
      name="category"
      value="5"
      label="Категория 5"
      moduleOutStyles={styles.checkboxCategory}
    />
    <Checkbox
      name="category"
      value="3"
      label="Категория 3"
      moduleOutStyles={styles.checkboxCategory}
    />
    <Checkbox
      name="category"
      value="6"
      label="Категория 6"
      moduleOutStyles={`${styles.checkboxCategory} ${
        type === 'recipient' && styles.checkboxCategoryRecipient
      }`}
    />
  </fieldset>
);
