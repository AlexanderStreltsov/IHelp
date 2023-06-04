import { FC } from 'react';

import styles from './PersonPhoto.module.css';

type TPersonPhotoProps = {
  pic: string;
  name?: string;
  className?: string;
};

const PersonPhoto: FC<TPersonPhotoProps> = ({ pic, name = '', className }) => {
  return <img src={pic} alt={name} className={`${styles.pic} ${className}`} />;
};

export default PersonPhoto;
