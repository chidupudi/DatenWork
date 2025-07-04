import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  const headerStyles = {
    position: 'sticky',
    top: 0,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(243, 244, 246, 0.8)',
    zIndex: 100,
    transition: 'all 0.2s ease'
  };

  const headerContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '80px'
  };

  const logoStyles = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1.5rem',
    fontWeight: '800',
    color: '#4f46e5',
    margin: 0,
    textDecoration: 'none'
  };

  const navStyles = {
    position: isMenuOpen ? 'absolute' : 'static',
    top: isMenuOpen ? '100%' : 'auto',
    left: isMenuOpen ? 0 : 'auto',
    right: isMenuOpen ? 0 : 'auto',
    background: isMenuOpen ? 'white' : 'transparent',
    borderTop: isMenuOpen ? '1px solid #f3f4f6' : 'none',
    boxShadow: isMenuOpen ? '0 4px 6px rgba(0, 0, 0, 0.05)' : 'none',
    transform: isMenuOpen ? 'translateY(0)' : window.innerWidth <= 768 ? 'translateY(-100%)' : 'none',
    opacity: isMenuOpen ? 1 : window.innerWidth <= 768 ? 0 : 1,
    visibility: isMenuOpen ? 'visible' : window.innerWidth <= 768 ? 'hidden' : 'visible',
    transition: 'all 0.2s ease',
    '@media (max-width: 768px)': {
      position: 'absolute',
      background: 'white',
      borderTop: '1px solid #f3f4f6',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
    }
  };

  const navListStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: '32px',
    margin: 0,
    padding: window.innerWidth <= 768 ? '24px' : 0,
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row'
  };

  const navLinkStyles = (path) => ({
    fontWeight: '500',
    color: isActive(path) ? '#4f46e5' : '#4b5563',
    transition: 'color 0.15s ease',
    position: 'relative',
    textDecoration: 'none',
    padding: '4px 0',
    borderBottom: isActive(path) ? '2px solid #4f46e5' : '2px solid transparent'
  });

  const ctaButtonStyles = {
    background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '12px',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(79, 70, 229, 0.25)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer'
  };

  const hamburgerStyles = {
    display: window.innerWidth <= 768 ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '4px',
    background: 'none',
    border: 'none',
    padding: '8px',
    cursor: 'pointer'
  };

  const hamburgerSpanStyles = {
    width: '24px',
    height: '2px',
    background: '#4b5563',
    transition: 'all 0.2s ease',
    borderRadius: '1px'
  };

  return (
    <header style={headerStyles}>
      <div style={headerContainerStyles}>
        <div>
          <Link to="/" style={logoStyles}>
            Datenwork
          </Link>
        </div>
        
        <nav style={navStyles}>
          <ul style={navListStyles}>
            <li>
              <Link 
                to="/" 
                style={navLinkStyles('/')}
                onMouseEnter={(e) => e.target.style.color = '#4f46e5'}
                onMouseLeave={(e) => e.target.style.color = isActive('/') ? '#4f46e5' : '#4b5563'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                style={navLinkStyles('/services')}
                onMouseEnter={(e) => e.target.style.color = '#4f46e5'}
                onMouseLeave={(e) => e.target.style.color = isActive('/services') ? '#4f46e5' : '#4b5563'}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                style={navLinkStyles('/about')}
                onMouseEnter={(e) => e.target.style.color = '#4f46e5'}
                onMouseLeave={(e) => e.target.style.color = isActive('/about') ? '#4f46e5' : '#4b5563'}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/courses" 
                style={navLinkStyles('/courses')}
                onMouseEnter={(e) => e.target.style.color = '#4f46e5'}
                onMouseLeave={(e) => e.target.style.color = isActive('/courses') ? '#4f46e5' : '#4b5563'}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                style={navLinkStyles('/contact')}
                onMouseEnter={(e) => e.target.style.color = '#4f46e5'}
                onMouseLeave={(e) => e.target.style.color = isActive('/contact') ? '#4f46e5' : '#4b5563'}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div style={{ display: window.innerWidth <= 768 ? 'none' : 'block' }}>
          <Link 
            to="/courses" 
            style={ctaButtonStyles}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(79, 70, 229, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(79, 70, 229, 0.25)';
            }}
          >
            Get Started
          </Link>
        </div>

        <button 
          style={hamburgerStyles}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span style={hamburgerSpanStyles}></span>
          <span style={hamburgerSpanStyles}></span>
          <span style={hamburgerSpanStyles}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;