import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteWrapper from './components/common/RouteWrapper';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/Terms'; // Add this import
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <RouteWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsAndConditions />} /> {/* Add this route */}
          </Routes>
        </RouteWrapper>
      </div>
    </Router>
  );
}

export default App;