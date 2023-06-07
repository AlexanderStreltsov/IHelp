import styles from './userInfo.module.scss';

interface Props {
  /**
   * Avatar
   */
  userAvatar: string;
  /**
   * Name
   */
  userName: string;
  /**
   * Phonenumber
   */
  userPhonenumber: string;
}

export const UserInfo: React.FC<Props> = ({
  userAvatar,
  userName,
  userPhonenumber,
}: Props) => {
  return (
    <div className={styles.conteiner}>
      <img className={styles.avatar} src={userAvatar} alt={userName} />
      <div className={styles.name}>{userName}</div>
      <div className={styles.phonenumber}>{userPhonenumber}</div>
    </div>
  );
};
