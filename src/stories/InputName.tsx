import React from 'react';
import './inputName.scss';

interface Props {
  /**
   * Input value
   */
  value: string;
  /**
   * Optional change handler
   */
  onChange?: () => void;
}

/**
 * Input field for name
 */
export const InputName: React.FC<Props> = ({ value, onChange }: Props) => {
  return <p>Имя: {value}</p>;
};
