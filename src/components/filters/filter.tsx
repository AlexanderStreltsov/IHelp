import { useRef, useEffect } from 'react';
import styles from './filter.module.scss';
import { Popup } from '../../ui/popup/popup';
import { Checkbox } from '../../ui/checkbox/checkbox';
import { Button } from '../../ui/button/button';

interface IFilter {
  sendResult: (result: { [name: string]: string[] }) => void;
  type?:
    | 'volunteerApplicationMap'
    | 'completedVolunteerApplications'
    | 'activeApplicationsVolunteer'
    | 'recipient'
    | 'admin';
  currentConditions: { [name: string]: string[] };
}
/**
 * Данный компонент представляет собой инструмент для фильтрации отображаемого
 * контента. После его применения он возвращает объект типа `{ [name: string]: string[] }`,
 * содержащий выбранные
 * параметры фильтрации.
 * Также компонент принимает данные о ранее сделанном выборе, чтобы при новой фильтрации
 * состояние фильтра соответствовало текущей выборке.
 * Для работы фильтра в параметр sendResult необходимо передать функцию,
 * которая будет получать результат выбора фильтров в качестве аргумента и закрывать фильтр,
 * а в параметр currentConditions передается объект, содержащий информацию о ранее
 * сделанном выборе.
 * Предполагается, что открытие и закрытие фильтра обеспечивается переменной состояния
 * родительского компонента, информация о ранее выбранных пунктах в фильтре также хранится в
 * переменной состояния родительского компонента.
 */
export const Filter = ({
  sendResult,
  type = 'volunteerApplicationMap',
  currentConditions,
}: IFilter) => {
  const refForm = useRef<HTMLFormElement>(null);
  // блок "категория"
  const fildsetCategory = (
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

  // блок "радиус"
  const fieldsetRadius = (
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

  // блок дата и время
  const fieldsetTideData = (
    <fieldset className={`${styles.fieldset} ${styles.fieldsetTideData} `}>
      <legend className={`${styles.legend} text-small-bold`}>
        Дата и время
      </legend>
    </fieldset>
  );

  // блок отобразить у волонтера
  const fildsetShow = (
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
  // блок отобразить пользователей
  const filterUsers = (
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // виды фильтров
  // фильтр карты заявок волонтёра
  const filterVolunteerApplicationCard = (
    <>
      {fildsetCategory} {fieldsetRadius} {fieldsetTideData}
    </>
  );
  // фильтр завершённых заявок волонтёра
  const filterCompletedApplicationsVolunteer = <> {fildsetShow} </>;
  //фильтр активных заявок волонтёра
  const filterActiveApplicationsVolunteer = (
    <>
      {fildsetShow} {fildsetCategory} {fieldsetRadius}
    </>
  );
  // фильтр реципиента
  const filterRecipient = (
    <>
      {fildsetShow} {fildsetCategory}
    </>
  );
  // фильтр администратора
  const filterAdmin = <>{filterUsers}</>;
  // выбор конкретного фильтра в зависимости от пропса type
  const content = (typeFilter: string) => {
    switch (typeFilter) {
      case 'volunteerApplicationMap':
        return filterVolunteerApplicationCard;
      case 'completedVolunteerApplications':
        return filterCompletedApplicationsVolunteer;
      case 'activeApplicationsVolunteer':
        return filterActiveApplicationsVolunteer;
      case 'recipient':
        return filterRecipient;
      case 'admin':
        return filterAdmin;
      default:
        return filterVolunteerApplicationCard;
    }
  };

  return (
    <Popup
      arrow="right"
      widthPopup="middle"
      shadow={true}
      moduleOutStyles={styles.popup}
    >
      <form name="filter" className={styles.form} ref={refForm}>
        {content(type)}
        <Button
          type="apply"
          disabled={false}
          onClick={collectSelection}
          className={styles.buttonAply}
        >
          Применить
        </Button>
      </form>
    </Popup>
  );
};

// Пример использования компонента в родительском компоненте

// import { useState } from 'react';
// import { Filter } from '../components/filter/filter';

// export const ParentComponent = () => {
//   const [filter, setFilter] = useState({});
//   const [isShowFilter, setIsShowFilter] = useState(true);
//   const getResult = (result: { [name: string]: string[] }) => {
//     setFilter({ ...result });
//     setIsShowFilter(false);
//   };
//   return (
//     <>
//       <button onClick={() => setIsShowFilter(true)}>Вызвать фильтр</button>
//       {isShowFilter && (
//         <Filter
//           sendResult={getResult}
//           currentConditions={filter}
//           type="volunteerApplicationMap"
//         />
//       )}
//     </>
//   );
// };
