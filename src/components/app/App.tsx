import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>IHelp</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
