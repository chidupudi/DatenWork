import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import your logo file from its location
import logoSrc from '../../assets/logo.png'; // <-- 1. IMPORT YOUR LOGO

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  // --- STYLES (No changes here except for the logo style) ---

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

  // 2. UPDATED LOGO STYLES
  const logoLinkStyles = {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  };

  const logoImageStyles = {
    height: '60px', // Adjust the height of your logo as needed
    width: 'auto',   // Width will scale automatically
  };

  const navStyles = {
    display: 'flex',
    // The conditional logic for mobile menu needs to be inside the render return
    // or use a more advanced CSS-in-JS solution. For this example, we'll adjust in the return.
  };
  
  // This is a simplified version for clarity. The complex logic from your original code
  // is better handled with useEffect and window event listeners for resize.
  // We will apply styles directly in the JSX for responsiveness based on `isMenuOpen`.

  const navListStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: '32px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
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
    display: 'none', // Will be overridden by media query style block
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
  
  // Handling responsive styles inline can be tricky.
  // The logic `window.innerWidth <= 768` only runs once on component render.
  // A proper solution uses event listeners, but to keep it simple and fix your code:
  // We'll use a more direct approach for the mobile menu.
  
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
    
    // Mobile styles
    return {
        ...baseStyles,
        position: 'absolute',
        top: '80px', // Position below the header
        left: 0,
        right: 0,
        background: 'white',
        flexDirection: 'column',
        borderTop: '1px solid #f3f4f6',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        transform: isMenuOpen ? 'translateY(0)' : 'translateY(-120%)',
        opacity: isMenuOpen ? 1 : 0,
        visibility: isMenuOpen ? 'visible' : 'hidden',
        padding: '24px'
    };
  };

  return (
    <header style={headerStyles}>
      <div style={headerContainerStyles}>
        {/* 3. REPLACE TEXT WITH IMAGE TAG */}
        <Link to="/" style={logoLinkStyles}>
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
            {/* ... your nav links ... */}
             <li>
               <Link 
                 to="/" 
                 style={navLinkStyles('/')}
                 onClick={() => setIsMenuOpen(false)}
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
                 onClick={() => setIsMenuOpen(false)}
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
                 onClick={() => setIsMenuOpen(false)}
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
                 onClick={() => setIsMenuOpen(false)}
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
                 onClick={() => setIsMenuOpen(false)}
                 onMouseEnter={(e) => e.target.style.color = '#4f46e5'}
                 onMouseLeave={(e) => e.target.style.color = isActive('/contact') ? '#4f46e5' : '#4b5563'}
               >
                 Contact
               </Link>
             </li>
          </ul>
        </nav>

        {/* This logic also needs to be responsive */}
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