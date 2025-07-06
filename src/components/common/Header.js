import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import your logo file from its location
import logoSrc from '../../assets/logo.png';

// Logo colors for the dark professional theme
const logoColors = {
  teal: '#2d7a7a',
  tealLight: '#368686', 
  tealDark: '#1f5555',
  orange: '#d4935c',
  orangeLight: '#e6a972',
  orangeDark: '#b8804a'
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  // DARK PROFESSIONAL THEME STYLES
  const headerStyles = {
    position: 'sticky',
    top: 0,
    background: `linear-gradient(135deg, ${logoColors.tealDark} 0%, #1a1a1a 100%)`,
    borderBottom: `2px solid ${logoColors.orange}`,
    zIndex: 100,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
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

  const logoLinkStyles = {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.2s ease'
  };

  const logoImageStyles = {
    height: '70px',
    width: 'auto',
    filter: 'brightness(1.1)', // Slightly brighten logo for dark background
    transition: 'transform 0.2s ease'
  };

  const navListStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: '32px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  };

  // Updated for dark theme with orange active states
  const navLinkStyles = (path) => ({
    fontWeight: '600',
    color: isActive(path) ? logoColors.orange : '#ffffff',
    transition: 'all 0.15s ease',
    position: 'relative',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    background: isActive(path) ? `${logoColors.orange}20` : 'transparent',
    border: isActive(path) ? `2px solid ${logoColors.orange}` : '2px solid transparent'
  });

  // Dark professional CTA button
  const ctaButtonStyles = {
    background: `linear-gradient(135deg, ${logoColors.orange} 0%, ${logoColors.orangeLight} 100%)`,
    color: 'white',
    padding: '12px 24px',
    borderRadius: '12px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: `0 4px 15px ${logoColors.orange}40`,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer'
  };

  const hamburgerStyles = {
    display: 'none',
    flexDirection: 'column',
    gap: '4px',
    background: 'none',
    border: 'none',
    padding: '8px',
    cursor: 'pointer'
  };

  // White hamburger lines for dark background
  const hamburgerSpanStyles = {
    width: '24px',
    height: '2px',
    background: '#ffffff',
    transition: 'all 0.2s ease',
    borderRadius: '1px'
  };

  const getNavStyles = () => {
    const baseStyles = {
        transition: 'all 0.3s ease-in-out',
    };

    // Desktop styles
    if (window.innerWidth > 768) {
        return {
            ...baseStyles,
            display: 'flex',
            alignItems: 'center'
        };
    }
    
    // Mobile styles with dark theme
    return {
        ...baseStyles,
        position: 'absolute',
        top: '80px',
        left: 0,
        right: 0,
        background: `linear-gradient(135deg, ${logoColors.tealDark} 0%, #2a2a2a 100%)`,
        flexDirection: 'column',
        borderTop: `2px solid ${logoColors.orange}`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        transform: isMenuOpen ? 'translateY(0)' : 'translateY(-120%)',
        opacity: isMenuOpen ? 1 : 0,
        visibility: isMenuOpen ? 'visible' : 'hidden',
        padding: '24px'
    };
  };

  return (
    <header style={headerStyles}>
      <div style={headerContainerStyles}>
        {/* Logo with hover effect */}
        <Link 
          to="/" 
          style={logoLinkStyles}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img 
            src={logoSrc} 
            alt="Datenwork Logo" 
            style={logoImageStyles} 
          />
        </Link>
        
        <nav style={getNavStyles()}>
          <ul style={{
              ...navListStyles, 
              flexDirection: window.innerWidth <= 768 ? 'column' : 'row'
            }}>
             <li>
               <Link 
                 to="/" 
                 style={navLinkStyles('/')}
                 onClick={() => setIsMenuOpen(false)}
                 onMouseEnter={(e) => {
                   e.target.style.color = logoColors.orangeLight;
                   e.target.style.background = `${logoColors.orangeLight}15`;
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.color = isActive('/') ? logoColors.orange : '#ffffff';
                   e.target.style.background = isActive('/') ? `${logoColors.orange}20` : 'transparent';
                 }}
               >
                 Home
               </Link>
             </li>
             <li>
               <Link 
                 to="/courses" 
                 style={navLinkStyles('/courses')}
                 onClick={() => setIsMenuOpen(false)}
                 onMouseEnter={(e) => {
                   e.target.style.color = logoColors.orangeLight;
                   e.target.style.background = `${logoColors.orangeLight}15`;
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.color = isActive('/courses') ? logoColors.orange : '#ffffff';
                   e.target.style.background = isActive('/courses') ? `${logoColors.orange}20` : 'transparent';
                 }}
               >
                 Courses
               </Link>
             </li>
             <li>
               <Link 
                 to="/services" 
                 style={navLinkStyles('/services')}
                 onClick={() => setIsMenuOpen(false)}
                 onMouseEnter={(e) => {
                   e.target.style.color = logoColors.orangeLight;
                   e.target.style.background = `${logoColors.orangeLight}15`;
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.color = isActive('/services') ? logoColors.orange : '#ffffff';
                   e.target.style.background = isActive('/services') ? `${logoColors.orange}20` : 'transparent';
                 }}
               >
                 Services
               </Link>
             </li>
             <li>
               <Link 
                 to="/about" 
                 style={navLinkStyles('/about')}
                 onClick={() => setIsMenuOpen(false)}
                 onMouseEnter={(e) => {
                   e.target.style.color = logoColors.orangeLight;
                   e.target.style.background = `${logoColors.orangeLight}15`;
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.color = isActive('/about') ? logoColors.orange : '#ffffff';
                   e.target.style.background = isActive('/about') ? `${logoColors.orange}20` : 'transparent';
                 }}
               >
                 About Us
               </Link>
             </li>
             <li>
               <Link 
                 to="/contact" 
                 style={navLinkStyles('/contact')}
                 onClick={() => setIsMenuOpen(false)}
                 onMouseEnter={(e) => {
                   e.target.style.color = logoColors.orangeLight;
                   e.target.style.background = `${logoColors.orangeLight}15`;
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.color = isActive('/contact') ? logoColors.orange : '#ffffff';
                   e.target.style.background = isActive('/contact') ? `${logoColors.orange}20` : 'transparent';
                 }}
               >
                Contact
               </Link>
             </li>
          </ul>
        </nav>

        {/* CTA Button with enhanced hover effects */}
        <div style={{ display: window.innerWidth <= 768 ? 'none' : 'block' }}>
          <Link 
            to="/about" 
            style={ctaButtonStyles}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px) scale(1.05)';
              e.target.style.boxShadow = `0 8px 25px ${logoColors.orange}60`;
              e.target.style.background = `linear-gradient(135deg, ${logoColors.orangeLight} 0%, ${logoColors.orange} 100%)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = `0 4px 15px ${logoColors.orange}40`;
              e.target.style.background = `linear-gradient(135deg, ${logoColors.orange} 0%, ${logoColors.orangeLight} 100%)`;
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          style={{...hamburgerStyles, display: window.innerWidth <= 768 ? 'flex' : 'none'}}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span style={{...hamburgerSpanStyles, transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}}></span>
          <span style={{...hamburgerSpanStyles, opacity: isMenuOpen ? 0 : 1}}></span>
          <span style={{...hamburgerSpanStyles, transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'}}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;