import React, { useState } from 'react';
import styles from './selectSchool.module.scss';

interface Props {
  /**
   * Id of the selected school
   */
  initialSchoolId?: string;
  /**
   * List of schools to select from
   */
  schools: SchoolOption[];
  /**
   * Error message
   */
  errorMessage?: string;
  /**
   * Callback, when school is selected
   */
  onChange: (schoolId: string) => void;
}

interface SchoolOption {
  schoolId: string;
  schoolName: string;
}

/**
 * Input field for name
 */
export const SelectSchool: React.FC<Props> = ({
  initialSchoolId,
  schools,
  errorMessage,
  onChange,
}: Props) => {
  const [selectedSchoolId, setSelectedSchoolId] = useState(initialSchoolId);

  const inputId = `input-name-${Math.random()}`;
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSchoolId(e.currentTarget.value);
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
      <select
        className={`${styles.select} ${
          selectedSchoolId ? styles.optionEnabled : styles.optionDisabled
        } ${errorMessage ? styles.wrongInput : styles.correctInput}`}
        id={inputId}
        onChange={onSelect}
      >
        <option className={styles.option} disabled selected={!selectedSchoolId}>
          Выберите школу
        </option>
        {items}
      </select>
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};