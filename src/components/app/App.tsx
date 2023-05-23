import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Checkbox } from '../../ui/checkbox/checkbox';

import './App.scss';

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>IHelp</h1>
            <Checkbox
              form="checkbox"
              label="Категория 1"
              name="category"
              type="checkbox"
              value="1"
            />
            <Checkbox
              form="checkbox"
              label="Категория 2"
              name="category"
              type="checkbox"
              value="2"
            />
            <Checkbox
              form="checkbox"
              label="Категория 3"
              name="category"
              type="checkbox"
              value="3"
            />
          </>
        }
      />
    </Routes>
  </Router>
);

export default App;
