import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteWrapper from './components/common/RouteWrapper';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Programs from './pages/Programs';
import Courses1 from './pages/Courses';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/Terms'; 
import './styles/global.css';
import PrivacyPolicy from './pages/PrivacyPolicy';

import Courses from './pages/Programs';

function App() {
  return (
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
          </Routes>
        </RouteWrapper>
      </div>
    </Router>
  );
}

export default App;