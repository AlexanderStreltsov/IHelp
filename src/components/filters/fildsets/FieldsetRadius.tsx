import styles from '../filter.module.scss';
import { Checkbox } from '../../../ui/checkbox/checkbox';

interface IFieldsetRadius {
  type: string;
}

export const FieldsetRadius = ({ type }: IFieldsetRadius) => (
  <fieldset className={`${styles.fieldset}`}>
    <legend className={`${styles.legend} text-small-bold`}>
      Радиус поиска
    </legend>
    <Checkbox
      type="radio"
      name="radius"
      value="1"
      form="button"
      label="1 км"
      moduleOutStyles={`${styles.checkboxRadius} ${
        type === 'activeApplicationsVolunteer' &&
        styles.checkboxRadiusActiveApplicationsVolunteer
      }`}
    />
    <Checkbox
      type="radio"
      name="radius"
      value="3"
      form="button"
      label="3 км"
      moduleOutStyles={styles.checkboxRadius}
    />
    <Checkbox
      type="radio"
      name="radius"
      value="5"
      form="button"
      label="5 км"
      check={true}
      moduleOutStyles={styles.checkboxRadius}
    />
  </fieldset>
);
