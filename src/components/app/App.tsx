import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Filter } from '../filter/filter';

import './App.scss';

const App = () => {
  const [bbb, setBbb] = useState(true);
  return (
    /* basename need to work deploy into gh pages */
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>IHelp</h1>
              {bbb && <Filter closeFilter={setBbb} type="admin" />}
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
