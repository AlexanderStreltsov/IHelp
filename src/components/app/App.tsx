import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AdminCard } from './../admin-card/Admin-card';
import './App.scss';

const App = () => (
  /* basename need to work deploy into gh pages */
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<AdminCard />} />
    </Routes>
  </Router>
);

export default App;
