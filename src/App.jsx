import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // Ensure this is correctly imported
import PrivateRoute from './components/PrivateRoute';  // Ensure this is correctly imported
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';  // Assuming this is a public page
import StudentHomePage from './pages/StudentHomePage';
import RecruiterHomePage from './pages/RecruiterHomePage';
import InternshipsPage from './pages/InternshipsPage';
import ServicesPage from './pages/ServicesPage';
import StudentProfilePage from './pages/StudentProfilePage';
import VolunteerPage from './pages/VolunteerPage';
import LandingPageUniEdge from "./pages/LandingPageUniEdge";
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LandingPageMentoring from './pages/LandingPageMentoring';
import MentorRegisterPage from './pages/MentorRegister';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/uniedge" element={<LandingPageUniEdge/>} />
          <Route path="/mentoringlanding" element={<LandingPageMentoring/>} />
          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/student" element={<StudentHomePage />} />
            <Route path="/recruiter" element={<RecruiterHomePage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/studentprofile" element={<StudentProfilePage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
            <Route path="/mentorregister" element={<MentorRegisterPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
