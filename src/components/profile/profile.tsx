import { TUser } from '../../types';
import { ProfileElement } from './profileElement/profileElement';

export interface IProfileProps extends TUser {
  user?: TUser;
  type?: 'volunteer' | 'recipient' | 'admin' | 'chief' | 'signUp' | 'noName';
  className?: string;
}

export const Profile = (user: IProfileProps) => {
  const { type } = user;

  if (!user && type === 'noName') return <ProfileElement type={'noName'} />;
  if (!user) return <ProfileElement type={'signUp'} />;
  return <ProfileElement {...user} />;
};

// Для работы с профилем,
// нужно его экспортировать в
// таком виде: <Profile {...props} />
// сам обьект props должен
// содержать:

//   address="ул. Кораблестроителей, 19к1"
//   fullname="Петров Петр Петрович"
//   id={10}
//   phone="+7 (926) 123-45-67"
//   photo="http://webmg.ru/wp-content/uploads/2022/01/100-20220105_151754.jpg"
//   role="chief"
//   scores={5}
//
// если данных не приходят, то автомотически грузит
// профиль регистрации.
// тип профиля зависит от role 'volunteer' | 'recipient' | 'admin' | 'chief' ,
// данные role получаем через props с сервера.
//
// Профиль без имени экспартируем: <Profile type="noName" />
// Чтобы сделать этот профиль динамическим нужно добавить в него props,
// получится так: <Profile type="noName" {...props} />,
// теперь если данные есть, грузит нормальный профиль, если нет, то профиль без имени.
