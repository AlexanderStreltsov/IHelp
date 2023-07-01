import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '../../modules/header';
import Footer from '../../ui/bot-bar/bot-bar';

import {
  AdminPage,
  BlogPage,
  ChiefPage,
  ContactsPage,
  MainPage,
  NotFoundPage,
  PrivacyPage,
  ProfilePage,
  RecipientPage,
  VolunteerPage,
  RegistrationPage,
} from '../../pages';

import styles from './app.module.scss';

const App = () => {
  return (
    /* basename need to work deploy into gh pages */
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles.app}>
        <Header />

        <main className={styles.content}>
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/recipient" element={<RecipientPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/chief" element={<ChiefPage />} />
            <Route path="/" element={<MainPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
