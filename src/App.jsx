import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Ensure this is correctly imported
import PrivateRoute from './components/PrivateRoute'; // Ensure this is correctly imported
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage'; // Assuming this is a public page
import JobsHomePage from './pages/JobsHomePage';
import RecruiterHomePage from './pages/RecruiterHomePage';
import InternshipsPage from './pages/InternshipsPage';
import ServicesPage from './pages/ServicesPage';
import StudentProfilePage from './pages/StudentProfilePage';
import VolunteerPage from './pages/VolunteerPage';
import LandingPageUniEdge from './pages/LandingPageUniEdge';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LandingPageMentoring from './pages/LandingPageMentoring';
import MentorRegisterPage from './pages/MentorRegister';

import Poster from './pages/Poster';
import Services from './components/services/Services';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Mentorship from './components/Mentorship/Mentorship';
import MentorHomePage from './pages/MentorHomePage';
import ThemeProvider from './components/styles/ThemeProvider';
import MentorProfilePage from './pages/MentorProfilePage';
import HumeEmbedPage from './pages/HumeEmbedPage';
import FreeInterviewPage from './pages/FreeInterviewPage';
import TSkillsPage from './pages/TSkillsPage';
import PathwayCounselingPage from './pages/PathwayCounselingPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router basename={process.env.PUBLIC_URL}>
          <AuthProvider>
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/' element={<LandingPage />} />

              <Route path='/uniedge' element={<LandingPageUniEdge />} />
              <Route
                path='/mentoringlanding'
                element={<LandingPageMentoring />}
              />
              <Route path='/:service/poster' element={<Poster />} />
              {/* Protected Routes */}
              <Route element={<PrivateRoute />}>
                <Route path='/home' element={<Services />} />
                <Route path='/jobs' element={<JobsHomePage />} />
                <Route path='/mentorship' element={<MentorHomePage />} />
                <Route path='/recruiter' element={<RecruiterHomePage />} />
                <Route path='/internships' element={<InternshipsPage />} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/pathwaycounseling' element={<PathwayCounselingPage />} />
                <Route
                  path='/mentorship/mentor/profile'
                  element={<MentorProfilePage />}
                />
                <Route
                  path='/:service/:role/profile'
                  element={<StudentProfilePage />}
                />

                <Route path='/volunteer' element={<VolunteerPage />} />
                <Route
                  path='/forgotpassword'
                  element={<ForgotPasswordPage />}
                />
                <Route
                  path='/mentorregister'
                  element={<MentorRegisterPage />}
                />
                <Route
                  path='/mockinterview'
                  element={<HumeEmbedPage />}
                />    
                <Route
                  path='/freeinterview'
                  element={<FreeInterviewPage />}
                /> 
                <Route
                  path='/TSkills'
                  element={<TSkillsPage />}
                />                                
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
