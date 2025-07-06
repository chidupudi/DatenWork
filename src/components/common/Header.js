import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import your logo file from its location
import logoSrc from '../../assets/logo.png';

// Professional 2-color theme for training & placements company
const brandColors = {
  primary: '#fff', // Professional blue (matching logo)
  primaryDark: '#413C58', // Darker blue for depth
  white: '#413C58',
  whiteTransparent: '#413C58'
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  // PROFESSIONAL 2-COLOR THEME STYLES
  const headerStyles = {
    position: 'sticky',
    top: 0,
    background: brandColors.primary,
    borderBottom: `3px solid ${brandColors.primaryDark}`,
    zIndex: 100,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(37, 99, 235, 0.15)'
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
    gap: '16px',
    transition: 'transform 0.2s ease'
  };

  const logoImageStyles = {
    height: '50px',
    width: 'auto',
    filter: 'brightness(1.1)',
    transition: 'transform 0.2s ease'
  };

  const titleTextStyles = {
    fontSize: '32px',
    fontWeight: '700',
    color: brandColors.white,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.8px',
    transition: 'opacity 0.2s ease'
  };

  const navListStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: '32px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  };

  const navLinkStyles = (path) => ({
    fontWeight: '600',
    fontSize: '16px',
    color: isActive(path) ? brandColors.primary : brandColors.white,
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    background: isActive(path) ? brandColors.white : 'transparent',
    border: `2px solid ${isActive(path) ? brandColors.white : 'transparent'}`
  });

  const ctaButtonStyles = {
    background: brandColors.white,
    color: brandColors.primary,
    padding: '12px 28px',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    border: `2px solid ${brandColors.white}`,
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

  const hamburgerSpanStyles = {
    width: '24px',
    height: '3px',
    background: brandColors.white,
    transition: 'all 0.2s ease',
    borderRadius: '1px'
  };

  const getNavStyles = () => {
    const baseStyles = {
        transition: 'all 0.3s ease-in-out',
    };

    if (window.innerWidth > 768) {
        return {
            ...baseStyles,
            display: 'flex',
            alignItems: 'center'
        };
    }
    
    return {
        ...baseStyles,
        position: 'absolute',
        top: '80px',
        left: 0,
        right: 0,
        background: brandColors.primary,
        flexDirection: 'column',
        borderTop: `3px solid ${brandColors.primaryDark}`,
        boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)',
        transform: isMenuOpen ? 'translateY(0)' : 'translateY(-120%)',
        opacity: isMenuOpen ? 1 : 0,
        visibility: isMenuOpen ? 'visible' : 'hidden',
        padding: '24px'
    };
  };

  return (
    <header style={headerStyles}>
      <div style={headerContainerStyles}>
        {/* Logo and Title */}
        <Link 
          to="/" 
          style={logoLinkStyles}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.querySelector('.title-text').style.opacity = '0.9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.querySelector('.title-text').style.opacity = '1';
          }}
        >
          <img 
            src={logoSrc} 
            alt="Datenwork Logo" 
            style={logoImageStyles} 
          />
          <span 
            className="title-text"
            style={titleTextStyles}
          >
            Datenwork
          </span>
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
                   if (!isActive('/')) {
                     e.target.style.background = brandColors.whiteTransparent;
                     e.target.style.color = brandColors.primary;
                   }
                 }}
                 onMouseLeave={(e) => {
                   if (!isActive('/')) {
                     e.target.style.background = 'transparent';
                     e.target.style.color = brandColors.white;
                   }
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
                   if (!isActive('/courses')) {
                     e.target.style.background = brandColors.whiteTransparent;
                     e.target.style.color = brandColors.primary;
                   }
                 }}
                 onMouseLeave={(e) => {
                   if (!isActive('/courses')) {
                     e.target.style.background = 'transparent';
                     e.target.style.color = brandColors.white;
                   }
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
                   if (!isActive('/services')) {
                     e.target.style.background = brandColors.whiteTransparent;
                     e.target.style.color = brandColors.primary;
                   }
                 }}
                 onMouseLeave={(e) => {
                   if (!isActive('/services')) {
                     e.target.style.background = 'transparent';
                     e.target.style.color = brandColors.white;
                   }
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
                   if (!isActive('/about')) {
                     e.target.style.background = brandColors.whiteTransparent;
                     e.target.style.color = brandColors.primary;
                   }
                 }}
                 onMouseLeave={(e) => {
                   if (!isActive('/about')) {
                     e.target.style.background = 'transparent';
                     e.target.style.color = brandColors.white;
                   }
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
                   if (!isActive('/contact')) {
                     e.target.style.background = brandColors.whiteTransparent;
                     e.target.style.color = brandColors.primary;
                   }
                 }}
                 onMouseLeave={(e) => {
                   if (!isActive('/contact')) {
                     e.target.style.background = 'transparent';
                     e.target.style.color = brandColors.white;
                   }
                 }}
               >
                Contact
               </Link>
             </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div style={{ display: window.innerWidth <= 768 ? 'none' : 'block' }}>
          <Link 
            to="/contact" 
            style={ctaButtonStyles}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.background = brandColors.whiteTransparent;
              e.target.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.background = brandColors.white;
              e.target.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.2)';
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button 
          style={{...hamburgerStyles, display: window.innerWidth <= 768 ? 'flex' : 'none'}}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span style={{...hamburgerSpanStyles, transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'}}></span>
          <span style={{...hamburgerSpanStyles, opacity: isMenuOpen ? 0 : 1}}></span>
          <span style={{...hamburgerSpanStyles, transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'}}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;