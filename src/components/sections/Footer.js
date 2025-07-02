import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Datenwork</h3>
            <p className="footer-description">
              Empowering careers through technology education and strategic placements.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com/company/datenwork" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">💼</a>
              <a href="https://twitter.com/datenwork" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🐦</a>
              <a href="https://github.com/datenwork" aria-label="GitHub" target="_blank" rel="noopener noreferrer">⚡</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/courses">Training Programs</Link></li>
              <li><Link to="/contact">Job Placement</Link></li>
              <li><Link to="/contact">IT Consultancy</Link></li>
              <li><Link to="/courses">Online Courses</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">Blog</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest courses and opportunities</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Datenwork. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;