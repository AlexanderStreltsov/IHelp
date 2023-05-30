import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AdminCard } from '../admin-card/Admin-Card';
import './App.scss';

const stab = {
  name: 'Иван',
  surname: 'Иван',
  patronymic: 'Иван',
  personalID: 111111111,
  tel: 'Иван',
  rights: {
    verify_accounts: true,
    create_request: true,
    allot_key: false,
    settle_dispute: false,
  },
};

const App = () => (
  /* basename need to work deploy into gh pages */
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<AdminCard {...stab} />} />
    </Routes>
  </Router>
);

export default App;
