/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable no-throw-literal */
import { config } from '../utils/constants';
import type {
  TUser,
  TCreateUserRequest,
  TUpdateUserRequest,
  TTask,
  TCreateTaskRequest,
  TUpdateTaskRequest,
  TCategory,
} from '../types';

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : Promise.reject(res);

const createUser = async (data: TCreateUserRequest): Promise<TUser> => {
  try {
    const res = await fetch(`${config.API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });

    return await checkResponse(res);
  } catch (err) {
    //TODO Exception handling
    throw 'API exception';
  }
};

const updateUser = async (
  id: number,
  data: TUpdateUserRequest,
): Promise<TUser> => {
  try {
    const res = await fetch(`${config.API_URL}/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });

    return await checkResponse(res);
  } catch (err) {
    //TODO Exception handling
    throw 'API exception';
  }
};

export const getUser = async (id: number): Promise<TUser> => {
  try {
    const res = await fetch(`${config.API_URL}/users/${id}`);

    return await checkResponse(res);
  } catch (err) {
    //TODO Exception handling
    throw 'API exception';
  }
};

export const getAllUsers = async (): Promise<TUser[]> => {
  try {
    const res = await fetch(`${config.API_URL}/users`);
    return await checkResponse(res);
  } catch (err) {
    //TODO Exception handling
    throw 'API exception';
  }
};

const createTask = async (data: TCreateTaskRequest): Promise<TTask> => {
  try {
    const res = await fetch(`${config.API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });

    return await checkResponse(res);
  } catch (err) {
    //TODO Exception handling
    throw 'API exception';
  }
};

const updateTask = async (
  id: number,
  data: TUpdateTaskRequest,
): Promise<TTask> => {
  try {
    const res = await fetch(`${config.API_URL}/task/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });

    return await checkResponse(res);
  } catch (err) {
    //TODO Exception handling
    throw 'API exception';
  }
};

const getTask = async (id: number): Promise<TTask> => {
  try {
    const res = await fetch(`${config.API_URL}/tasks/${id}`);

    return await checkResponse(res);
  } catch (err) {
    //TODO Exception handling
    throw 'API exception';
  }
};

const getAllTasks = async (): Promise<TTask[]> => {
  try {
    const res = await fetch(`${config.API_URL}/tasks`);

    return await checkResponse(res);
  } catch (err) {
    //TODO Exception handling
    throw 'API exception';
  }
};

const deleteTask = async (id: number): Promise<unknown> => {
  try {
    const res = await fetch(`${config.API_URL}/task/${id}`, {
      method: 'DELETE',
    });

    return await checkResponse(res);
  } catch (err) {
    //TODO Exception handling
    throw 'API exception';
  }
};

const getAllCategories = async (): Promise<TCategory[]> => {
  try {
    const res = await fetch(`${config.API_URL}/category`);

    return await checkResponse(res);
  } catch (err) {
    //TODO Exception handling
    throw 'API exception';
  }
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
  getAllCategories,
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
