import { FC } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage: FC = () => {
  return (
    <div>
      <h1 className="text-big">ProfilePage template</h1>
      <ul>
        <li>
          <Link to="/volunteer" className="text-medium">
            Шаблон страницы волонтера
          </Link>
        </li>
        <li>
          <Link to="/recipient" className="text-medium">
            Шаблон страницы реципиента
          </Link>
        </li>
        <li>
          <Link to="/admin" className="text-medium">
            Шаблон страницы администратора
          </Link>
        </li>
        <li>
          <Link to="/chief" className="text-medium">
            Шаблон страницы главного администратора
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfilePage;
