import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Select } from '../../ui/forms/Select';

const App = () => (
  /* basename need to work deploy into gh pages */
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>IHelp</h1>
            <Select
              name="city"
              width="short"
              initialOptionName="Выберите город"
              selectableValues={['Камышин', 'Волгоград', 'Санкт-Петербург']}
            />
          </>
        }
      />
    </Routes>
  </Router>
);

export default App;
