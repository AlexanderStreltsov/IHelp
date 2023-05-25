import { config } from '../utils/constants';

import type {
  TUser,
  TCreateUserRequest,
  TUpdateUserRequest,
  TTask,
  TCreateTaskRequest,
  TUpdateTaskRequest,
} from '../types';

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : Promise.reject(res);

const createUser = async (data: TCreateUserRequest): Promise<TUser> => {
  const res = await fetch(`${config.API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });

  return checkResponse(res);
};

const updateUser = async (
  id: number,
  data: TUpdateUserRequest,
): Promise<TUser> => {
  const res = await fetch(`${config.API_URL}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });

  return checkResponse(res);
};

const getUser = async (id: number): Promise<TUser> => {
  const res = await fetch(`${config.API_URL}/users/${id}`);

  return checkResponse(res);
};

const getAllUsers = async (): Promise<TUser[]> => {
  const res = await fetch(`${config.API_URL}/users`);

  return checkResponse(res);
};

const createTask = async (data: TCreateTaskRequest): Promise<TTask> => {
  const res = await fetch(`${config.API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });

  return checkResponse(res);
};

const updateTask = async (
  id: number,
  data: TUpdateTaskRequest,
): Promise<TTask> => {
  const res = await fetch(`${config.API_URL}/task/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });

  return checkResponse(res);
};

const getTask = async (id: number): Promise<TTask> => {
  const res = await fetch(`${config.API_URL}/tasks/${id}`);

  return checkResponse(res);
};

const getAllTasks = async (): Promise<TTask[]> => {
  const res = await fetch(`${config.API_URL}/tasks`);

  return checkResponse(res);
};

const deleteTask = async (id: number): Promise<unknown> => {
  const res = await fetch(`${config.API_URL}/task/${id}`, {
    method: 'DELETE',
  });

  return checkResponse(res);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createUser,
  updateUser,
  getUser,
  getAllUsers,
  createTask,
  updateTask,
  getTask,
  getAllTasks,
  deleteTask,
};

//
// Пример использования метода в компоненте
//
// Например, нам нужно получить список всех волонтеров:
//
// import api from '../../api';
// import { UserRole } from '../../types/entities';
// import type { TUser } from '../../types';
// ...
//
// const [state, setState] = useState<TUser[]>();
// useEffect(() => {
//   async function fetchData() {
//     const response = await api.getAllUsers();
//     const volunteers = response.filter(
//       (item) => item.role === UserRole.Volunteer,
//     );

//     setState(volunteers);
//   }
//
//   fetchData();
// }, []);
//
