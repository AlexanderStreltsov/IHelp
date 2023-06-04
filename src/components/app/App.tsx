import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AdminCard } from '../admin-card/Admin-card';

import './App.scss';

const stab = {
  photo:
    'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg?size=626&ext=jpg&ga=GA1.1.109385392.1683700311',
  name: 'Иван',
  surname: 'Иван',
  patronymic: 'Иван',
  personalID: 111111111,
  tel: '+7(000) 000-00-04',
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
