import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Request } from '../request/Request';

import './App.scss';

const App = () => (
  /* basename need to work deploy into gh pages */
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Request />}></Route>
    </Routes>
  </Router>
);

export default App;
