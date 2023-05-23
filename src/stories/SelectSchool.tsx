import React from 'react';
import styles from './input.module.scss';

interface Props {
  /**
   * Id of the selected school
   */
  selectedSchoolId?: string;
  /**
   * Callback, when school is selected
   */
  onChange: (schoolId: string) => void;
  /**
   * List of schools to select from
   */
  schools: SchoolOption[];
}

interface SchoolOption {
  schoolId: string;
  schoolName: string;
}

/**
 * Input field for name
 */
export const SelectSchool: React.FC<Props> = ({
  selectedSchoolId,
  onChange,
  schools,
}: Props) => {
  const inputId = `input-name-${Math.random()}`;
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.currentTarget.value);
  };
  const items = schools.map((school) => {
    return (
      <option
        value={school.schoolId}
        selected={selectedSchoolId === school.schoolId}
      >
        {school.schoolName}
      </option>
    );
  });

  return (
    <div className={styles.form}>
      <label className={styles.label} htmlFor={inputId}>
        Школа
      </label>
      <select className={styles.input} id={inputId} onChange={onSelect}>
        <option disabled selected={!selectedSchoolId}>
          Выберите школу
        </option>
        {items}
      </select>
    </div>
  );
};
