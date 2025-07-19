import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteWrapper from './components/common/RouteWrapper';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Programs from './pages/Programs';
import Courses1 from './pages/Courses';
import Contact from './pages/Contact';
import PlacementProgram from './pages/PlacementProgram';
import TermsAndConditions from './pages/Terms'; 
import PrivacyPolicy from './pages/PrivacyPolicy';
import AdminLogin from './components/admin/AdminLogin';
import AdminSetup from './components/admin/AdminSetup';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Dashboard from './pages/admin/Dashboard';
import HeroManagement from './pages/admin/HeroManagement';
import FormResponses from './pages/admin/FormResponses';
import CourseManagement from './pages/admin/CourseManagement';
import ProgramManagement from './pages/admin/ProgramManagement';
import AnalyticsManagement from './pages/admin/AnalyticsManagement';
import CompanyManagement from './pages/admin/CompanyManagement';
import JobsManagement from './pages/admin/JobsManagement';
import PlacementManagement from './pages/admin/PlacementManagement';
import './styles/global.css';
import './utils/runMigration';


function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
      <Router>
        <div className="App">
          <RouteWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/programs" element={< Programs  />} />
              <Route path="/courses" element={< Courses1  />} />
              <Route path="/placement-program" element={<PlacementProgram />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<TermsAndConditions />} /> 
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/admin/setup" element={<AdminSetup />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/admin/responses" element={<ProtectedRoute><FormResponses /></ProtectedRoute>} />
              <Route path="/admin/hero" element={<ProtectedRoute><HeroManagement /></ProtectedRoute>} />
              <Route path="/admin/courses" element={<ProtectedRoute><CourseManagement /></ProtectedRoute>} />
              <Route path="/admin/programs" element={<ProtectedRoute><ProgramManagement /></ProtectedRoute>} />
              <Route path="/admin/analytics" element={<ProtectedRoute><AnalyticsManagement /></ProtectedRoute>} />
              <Route path="/admin/settings" element={<ProtectedRoute><CompanyManagement /></ProtectedRoute>} />
              <Route path="/admin/jobs" element={<ProtectedRoute><JobsManagement /></ProtectedRoute>} />
              <Route path="/admin/placement" element={<ProtectedRoute><PlacementManagement /></ProtectedRoute>} />
            </Routes>
          </RouteWrapper>
        </div>
      </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;