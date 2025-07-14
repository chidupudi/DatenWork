import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Main footer styles with grid background
  const footerStyles = {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)',
    color: '#ffffff',
    padding: '64px 0 32px',
    position: 'relative',
    overflow: 'hidden'
  };

  // Grid pattern overlay (same as other pages)
  const footerOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(30, 64, 175, 0.08) 0%, transparent 50%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>')
    `,
    zIndex: 0
  };

  // Dark overlay for better text readability
  const footerDarkOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(15, 23, 42, 0.4)',
    zIndex: 0
  };

  const footerContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 20px' : '0 24px',
    position: 'relative',
    zIndex: 2
  };

  const footerContentStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : '2fr 1fr 1fr 1fr',
    gap: window.innerWidth <= 768 ? '32px' : '40px',
    marginBottom: '48px'
  };

  const footerSectionStyles = {
    marginBottom: window.innerWidth <= 768 ? '24px' : '0'
  };

  const sectionHeadingStyles = {
    color: '#ffffff',
    marginBottom: '20px',
    fontWeight: '700',
    fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.25rem',
    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const footerLogoStyles = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: window.innerWidth <= 768 ? '1.8rem' : '2rem',
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '20px',
    fontWeight: '800'
  };

  const footerDescriptionStyles = {
    marginBottom: '32px',
    lineHeight: '1.7',
    color: '#e2e8f0',
    fontSize: window.innerWidth <= 768 ? '0.95rem' : '1rem',
    opacity: '0.9'
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
    width: '44px',
    height: '44px',
    background: hoveredSocial === index 
      ? 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)' 
      : 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    fontSize: '1.25rem',
    textDecoration: 'none',
    color: '#ffffff',
    transform: hoveredSocial === index ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
    boxShadow: hoveredSocial === index ? '0 8px 20px rgba(79, 70, 229, 0.3)' : 'none',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  });

  const listStyles = {
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const listItemStyles = {
    marginBottom: '12px'
  };

  const linkStyles = (linkKey) => ({
    color: hoveredLink === linkKey ? '#4f46e5' : '#e2e8f0',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
    display: 'inline-block',
    transform: hoveredLink === linkKey ? 'translateX(4px)' : 'translateX(0)',
    fontWeight: '500'
  });

  const getStartedButtonStyles = {
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
    color: '#ffffff',
    border: 'none',
    padding: window.innerWidth <= 768 ? '14px 24px' : '16px 32px',
    borderRadius: '12px',
    fontSize: window.innerWidth <= 768 ? '1rem' : '1.1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 20px rgba(79, 70, 229, 0.3)',
    width: window.innerWidth <= 768 ? '100%' : 'auto',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const footerBottomStyles = {
    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
    paddingTop: '32px',
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
    color: hoveredLink === linkKey ? '#4f46e5' : '#e2e8f0',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    fontWeight: '500',
    transform: hoveredLink === linkKey ? 'translateY(-1px)' : 'translateY(0)'
  });

  const copyrightStyles = {
    margin: 0,
    fontSize: '0.9rem',
    color: '#cbd5e1',
    fontWeight: '500'
  };

  const socialIcons = [
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '💼', label: 'LinkedIn', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' },
    { icon: '📺', label: 'YouTube', href: '#' }
  ];

  return (
    <footer style={footerStyles}>
      <div style={footerOverlayStyles} />
      <div style={footerDarkOverlayStyles} />
      
      <div style={footerContainerStyles}>
        <div style={footerContentStyles}>
          {/* Company Info Section */}
          <div style={footerSectionStyles}>
            <h3 style={footerLogoStyles}>Datenwork</h3>
            <p style={footerDescriptionStyles}>
              Empowering careers through technology education and strategic placements. 
              Join thousands of successful professionals who transformed their careers with us.
            </p>
            
            
          </div>
          
          {/* Services Section */}
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
                  to="/services"
                  style={linkStyles('placement')}
                  onMouseEnter={() => setHoveredLink('placement')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Job Placement
                </Link>
              </li>
              <li style={listItemStyles}>
                <Link 
                  to="/services"
                  style={linkStyles('consultancy')}
                  onMouseEnter={() => setHoveredLink('consultancy')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  IT Consultancy
                </Link>
              </li>
              <li style={listItemStyles}>
                <Link 
                  to="/services"
                  style={linkStyles('certification')}
                  onMouseEnter={() => setHoveredLink('certification')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Certifications
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Section */}
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
                 Success Stories
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Get Started Section */}
          <div style={footerSectionStyles}>
            <h4 style={sectionHeadingStyles}>Ready to Start?</h4>
            <p style={{
              marginBottom: '24px',
              fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
              color: '#cbd5e1',
              lineHeight: '1.6',
              opacity: '0.9'
            }}>
              Transform your career with our comprehensive training programs and guaranteed job placement.
            </p>
            <button 
              style={getStartedButtonStyles}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.02)';
                e.target.style.boxShadow = '0 12px 30px rgba(79, 70, 229, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 8px 20px rgba(79, 70, 229, 0.3)';
              }}
            >
              Get Started Today
            </button>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div style={footerBottomStyles}>
          <p style={copyrightStyles}>
            &copy; 2025 Datenwork. All rights reserved.
          </p>
          <div style={footerLinksStyles}>
            <Link 
               to="/privacy"  // Changed from "/terms"
              style={footerLinkStyles('privacy')}
              onMouseEnter={() => setHoveredLink('privacy')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms"
              style={footerLinkStyles('terms')}
              onMouseEnter={() => setHoveredLink('terms')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Terms & Conditions
            </Link>
            <Link 
              to="/contact"
              style={footerLinkStyles('support')}
              onMouseEnter={() => setHoveredLink('support')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;