import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteWrapper from './components/common/RouteWrapper';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Programs from './pages/Programs';
import Courses1 from './pages/Courses';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/Terms'; 
import PrivacyPolicy from './pages/PrivacyPolicy';
import AdminLogin from './components/admin/AdminLogin';
import AdminSetup from './components/admin/AdminSetup';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Dashboard from './pages/admin/Dashboard';
import HeroManagement from './pages/admin/HeroManagement';
import FormResponses from './pages/admin/FormResponses';
import CourseManagement from './pages/admin/CourseManagement';
import JobsManagement from './pages/admin/JobsManagement';
import './styles/global.css';


function App() {
  return (
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<TermsAndConditions />} /> 
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/admin/setup" element={<AdminSetup />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/admin/responses" element={<ProtectedRoute><FormResponses /></ProtectedRoute>} />
              <Route path="/admin/hero" element={<ProtectedRoute><HeroManagement /></ProtectedRoute>} />
              <Route path="/admin/courses" element={<ProtectedRoute><CourseManagement /></ProtectedRoute>} />
              <Route path="/admin/jobs" element={<ProtectedRoute><JobsManagement /></ProtectedRoute>} />
            </Routes>
          </RouteWrapper>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;