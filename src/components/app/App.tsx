import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';
import { ActiveRequestVersion1Icon } from '../../ui/icons/active-request-big-version-1-icon';
import { TitleBar } from '../title-bar';

const App = () => (
  /* basename need to work deploy into gh pages */
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route
        path="/"
        element={
          <TitleBar
            icon={<ActiveRequestVersion1Icon color="dark-blue" />}
            title="Активные заявки"
            filterHandler={() => console.log('click')}
          />
        }
      />
    </Routes>
  </Router>
);

export default App;
