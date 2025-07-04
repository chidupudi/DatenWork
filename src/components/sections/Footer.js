import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Main footer styles
  const footerStyles = {
    background: '#374151',
    color: '#d1d5db',
    padding: '64px 0 32px'
  };

  const footerContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px'
  };

  const footerContentStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : '2fr 1fr 1fr 1.5fr',
    gap: window.innerWidth <= 768 ? '24px' : '32px',
    marginBottom: '48px'
  };

  const footerSectionStyles = {
    marginBottom: window.innerWidth <= 768 ? '24px' : '0'
  };

  const sectionHeadingStyles = {
    color: 'white',
    marginBottom: '16px',
    fontWeight: '600',
    fontSize: '1.125rem'
  };

  const footerLogoStyles = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1.5rem',
    color: '#4f46e5',
    marginBottom: '16px',
    fontWeight: '800'
  };

  const footerDescriptionStyles = {
    marginBottom: '24px',
    lineHeight: '1.6',
    color: '#d1d5db'
  };

  const socialLinksStyles = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-start'
  };

  const socialLinkStyles = (index) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    background: hoveredSocial === index 
      ? '#4f46e5' 
      : 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    fontSize: '1.125rem',
    textDecoration: 'none',
    transform: hoveredSocial === index ? 'translateY(-2px)' : 'translateY(0)'
  });

  const listStyles = {
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const listItemStyles = {
    marginBottom: '8px'
  };

  const linkStyles = (linkKey) => ({
    color: hoveredLink === linkKey ? '#4f46e5' : '#d1d5db',
    transition: 'color 0.15s ease',
    textDecoration: 'none'
  });

  const newsletterFormStyles = {
    display: 'flex',
    gap: window.innerWidth <= 768 ? '8px' : '8px',
    marginTop: '16px',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row'
  };

  const newsletterInputStyles = {
    flex: 1,
    padding: '12px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    fontSize: '0.875rem',
    outline: 'none'
  };

  const newsletterButtonStyles = {
    padding: '12px 16px',
    background: '#4f46e5',
    color: 'white',
    borderRadius: '8px',
    fontWeight: '600',
    transition: 'background 0.15s ease',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.875rem'
  };

  const footerBottomStyles = {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '24px',
    display: 'flex',
    justifyContent: window.innerWidth <= 768 ? 'center' : 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    textAlign: window.innerWidth <= 768 ? 'center' : 'left'
  };

  const footerLinksStyles = {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-start'
  };

  const footerLinkStyles = (linkKey) => ({
    color: hoveredLink === linkKey ? '#4f46e5' : '#d1d5db',
    fontSize: '0.875rem',
    transition: 'color 0.15s ease',
    textDecoration: 'none'
  });

  return (
    <footer style={footerStyles}>
      <div style={footerContainerStyles}>
        <div style={footerContentStyles}>
          <div style={footerSectionStyles}>
            <h3 style={footerLogoStyles}>Datenwork</h3>
            <p style={footerDescriptionStyles}>
              Empowering careers through technology education and strategic placements.
            </p>
            <div style={socialLinksStyles}>
              <a 
                href="https://linkedin.com/company/datenwork" 
                aria-label="LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer"
                style={socialLinkStyles(0)}
                onMouseEnter={() => setHoveredSocial(0)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                💼
              </a>
              <a 
                href="https://twitter.com/datenwork" 
                aria-label="Twitter" 
                target="_blank" 
                rel="noopener noreferrer"
                style={socialLinkStyles(1)}
                onMouseEnter={() => setHoveredSocial(1)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                🐦
              </a>
              <a 
                href="https://github.com/datenwork" 
                aria-label="GitHub" 
                target="_blank" 
                rel="noopener noreferrer"
                style={socialLinkStyles(2)}
                onMouseEnter={() => setHoveredSocial(2)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                ⚡
              </a>
            </div>
          </div>
          
          <div style={footerSectionStyles}>
            <h4 style={sectionHeadingStyles}>Services</h4>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <Link 
                  to="/courses"
                  style={linkStyles('training')}
                  onMouseEnter={() => setHoveredLink('training')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Training Programs
                </Link>
              </li>
              <li style={listItemStyles}>
                <Link 
                  to="/contact"
                  style={linkStyles('placement')}
                  onMouseEnter={() => setHoveredLink('placement')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Job Placement
                </Link>
              </li>
              <li style={listItemStyles}>
                <Link 
                  to="/contact"
                  style={linkStyles('consultancy')}
                  onMouseEnter={() => setHoveredLink('consultancy')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  IT Consultancy
                </Link>
              </li>
              <li style={listItemStyles}>
                <Link 
                  to="/courses"
                  style={linkStyles('online')}
                  onMouseEnter={() => setHoveredLink('online')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Online Courses
                </Link>
              </li>
            </ul>
          </div>
          
          <div style={footerSectionStyles}>
            <h4 style={sectionHeadingStyles}>Company</h4>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <Link 
                  to="/about"
                  style={linkStyles('about')}
                  onMouseEnter={() => setHoveredLink('about')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  About Us
                </Link>
              </li>
              <li style={listItemStyles}>
                <Link 
                  to="/contact"
                  style={linkStyles('careers')}
                  onMouseEnter={() => setHoveredLink('careers')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Careers
                </Link>
              </li>
              <li style={listItemStyles}>
                <Link 
                  to="/contact"
                  style={linkStyles('contact')}
                  onMouseEnter={() => setHoveredLink('contact')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Contact
                </Link>
              </li>
              <li style={listItemStyles}>
                <Link 
                  to="/about"
                  style={linkStyles('blog')}
                  onMouseEnter={() => setHoveredLink('blog')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div style={footerSectionStyles}>
            <h4 style={sectionHeadingStyles}>Newsletter</h4>
            <p style={{ marginBottom: '16px', fontSize: '0.875rem' }}>
              Stay updated with our latest courses and opportunities
            </p>
            <div style={newsletterFormStyles}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={newsletterInputStyles}
              />
              <button 
                type="submit" 
                style={newsletterButtonStyles}
                onMouseEnter={(e) => e.target.style.background = '#14b8a6'}
                onMouseLeave={(e) => e.target.style.background = '#4f46e5'}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div style={footerBottomStyles}>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>
            &copy; 2024 Datenwork. All rights reserved.
          </p>
          <div style={footerLinksStyles}>
            <a 
              href="#privacy"
              style={footerLinkStyles('privacy')}
              onMouseEnter={() => setHoveredLink('privacy')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Privacy Policy
            </a>
            <a 
              href="#terms"
              style={footerLinkStyles('terms')}
              onMouseEnter={() => setHoveredLink('terms')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;