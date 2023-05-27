import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Page } from '../page/Page';

import './App.scss';

const App = () => (
  /* basename need to work deploy into gh pages */
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Page />}></Route>
    </Routes>
  </Router>
);

export default App;
