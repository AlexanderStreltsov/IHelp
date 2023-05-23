import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Popup } from '../../ui/popup/popup';
import styles from './app.module.scss';

import './App.scss';

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>IHelp</h1>
            <Popup
              arrow="right"
              width="middle"
              shadow={true}
              moduleOutStyles={`${styles.height} text-big`}
              outStyles={{ paddingRight: '60px' }}
            >
              <p>jvbdsjkbvj</p>
              <p>jvbdsjkbvj</p>
            </Popup>
          </>
        }
      />
    </Routes>
  </Router>
);

export default App;
