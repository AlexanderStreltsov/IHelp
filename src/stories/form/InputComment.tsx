import React from 'react';
import styles from './input.module.scss';

interface Props {
  /**
   * Input value
   */
  value: string;
  /**
   * Change handler
   */
  onChange: (value: string) => void;
}

/**
 * Input field for Comment
 */
export const InputComment: React.FC<Props> = ({ value, onChange }: Props) => {
  const inputId = `input-name-${Math.random()}`;
  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <div className={styles.commentForm}>
      <label className={styles.commentLabel} htmlFor={inputId}>
        Комментарий
      </label>
      <textarea
        className={styles.commentInput}
        id={inputId}
        rows={2}
        placeholder="Добавьте комментарий"
        value={value}
        onChange={onInputChange}
      ></textarea>
    </div>
  );
};
