import styles from '../filter.module.scss';
import { Checkbox } from '../../../ui/checkbox/checkbox';

interface IFildsetShow {
  type: string;
}

export const FildsetShow = ({ type }: IFildsetShow) => (
  <fieldset
    className={`${styles.fieldset} ${styles.fildsetShow} ${
      (type === 'activeApplicationsVolunteer' || type === 'recipient') &&
      styles.fieldsetActiveApplications
    }`}
  >
    <legend className={`${styles.legend} text-small-bold`}>Отображать</legend>
    <Checkbox
      type={type === 'recipient' ? 'checkbox' : 'radio'}
      name="sorting"
      value="date"
      form="checkbox"
      label="По дате"
      moduleOutStyles={styles.checkboxShow}
    />
    {type !== 'recipient' && (
      <>
        <Checkbox
          type="radio"
          name="sorting"
          value="priseDecreasing"
          form="checkbox"
          label="По убывающей цене"
          moduleOutStyles={styles.checkboxShow}
        />
        <Checkbox
          type="radio"
          name="sorting"
          value="priseIncreasing"
          form="checkbox"
          label="По возростающей цене"
          moduleOutStyles={styles.checkboxShow}
        />
      </>
    )}
  </fieldset>
);
