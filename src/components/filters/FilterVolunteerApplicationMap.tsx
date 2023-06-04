import { useRef, useEffect } from 'react';
import styles from './filter.module.scss';
import { Popup } from '../../ui/popup/popup';
import { Button } from '../../ui/button/button';
import { FildsetCategory } from './fildsets/FildsetCategory';
import { FieldsetRadius } from './fildsets/FieldsetRadius';
import { FieldsetTimeData } from './fildsets/FieldsetTimeData';

interface IFilterVolunteerApplicationMap {
  sendResult: (result: { [name: string]: string[] }) => void;
  currentConditions: { [name: string]: string[] };
}

export const FilterVolunteerApplicationMap = ({
  sendResult,
  currentConditions,
}: IFilterVolunteerApplicationMap) => {
  const refForm = useRef<HTMLFormElement>(null);
  // определение выбранных полей и их значений, закрытие окна
  const collectSelection = (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    const result: { [name: string]: string[] } = {};
    const list =
      refForm.current && Array.prototype.slice.call(refForm.current.elements);
    list?.forEach((item) => {
      if (item instanceof HTMLInputElement && item.checked) {
        if (!result.hasOwnProperty(item.name)) {
          result[item.name] = [item.value];
        } else {
          result[item.name].push(item.value);
        }
      }
    });
    sendResult(result);
  };
  useEffect(() => {
    if (Object.keys(currentConditions).length !== 0) {
      const list =
        refForm.current && Array.prototype.slice.call(refForm.current.elements);
      list?.forEach((item) => {
        if (
          currentConditions.hasOwnProperty(item.name) &&
          currentConditions[item.name].includes(item.value)
        ) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    }
  }, []);
  return (
    <Popup
      arrow="right"
      widthPopup="middle"
      shadow={true}
      moduleOutStyles={styles.popup}
    >
      <form name="filter" className={styles.form} ref={refForm}>
        <FildsetCategory type="volunteerApplicationMap" />
        <FieldsetRadius type="volunteerApplicationMap" />
        <FieldsetTimeData />
        <Button type="apply" disabled={false} onClick={collectSelection}>
          Применить
        </Button>
      </form>
    </Popup>
  );
};
