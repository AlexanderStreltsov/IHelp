import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './App.scss';
import { Filter } from '../filters/filter';

const App = () => {
  const [filter, setFilter] = useState<{ [name: string]: string[] }>({});
  const [isShowFilter, setIsShowFilter] = useState(true);
  const getResult = (result: { [name: string]: string[] }) => {
    setFilter({ ...result });
    setIsShowFilter(false);
  };
  console.log(filter);
  return (
    /* basename need to work deploy into gh pages */
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <button onClick={() => setIsShowFilter(true)}>Drück mich</button>
              <h1>IHelp</h1>
              {isShowFilter && (
                <Filter
                  sendResult={getResult}
                  currentConditions={filter}
                  type="volunteerApplicationMap"
                />
              )}
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
