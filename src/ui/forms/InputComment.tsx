import React, { useState } from 'react';
import styles from './inputComment.module.scss';

interface Props {
  /**
   * Initial value
   */
  initialValue: string;
  /**
   * Change handler
   */
  onChange: (value: string) => void;
}

/**
 * Input field for Comment
 */
export const InputComment: React.FC<Props> = ({
  initialValue,
  onChange,
}: Props) => {
  const [value, setValue] = useState(initialValue);

  const inputId = `input-name-${Math.random()}`;
  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
    onChange(e.currentTarget.value);
  };

  return (
    <div className={styles.commentForm}>
      <label className={styles.commentLabel} htmlFor={inputId}>
        Комментарий
      </label>
      <textarea
        className={`${styles.input} ${styles.commentInput}`}
        id={inputId}
        rows={2}
        placeholder="Добавьте комментарий"
        value={value}
        onChange={onInputChange}
      ></textarea>
    </div>
  );
};
