import React, { useEffect, useState } from 'react';
import { TTask } from '../../types';
import api from '../../api';
import { Request } from '../request/Request';

export const Page = () => {
  const [tasksState, setTasksState] = useState<TTask[]>();

  useEffect(() => {
    async function fetchData() {
      const tasks = await api.getAllTasks();
      setTasksState(tasks);
    }

    fetchData();
  }, []);

  return (
    <div className="page">
      {tasksState && tasksState[0] && (
        <>
          <Request propsForRequest={tasksState[0]} owner="admin" />
          <Request propsForRequest={tasksState[3]} owner="admin" />
          <Request propsForRequest={tasksState[4]} owner="admin" />
          <Request propsForRequest={tasksState[15]} owner="admin" />
        </>
      )}
    </div>
  );
};
