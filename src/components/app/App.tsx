import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Page } from '../page/Page';

const App = () => {
  return (
    /* basename need to work deploy into gh pages */
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<h1>IHelp</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
