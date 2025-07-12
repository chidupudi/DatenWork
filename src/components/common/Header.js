/*
🎨 DATENWORK THEME IMPLEMENTATION - UPDATED WITH HERO GRADIENT:
- Light TopBar: Contact info and courses with light background
- Hero-Matching Header: Same gradient as Hero section for seamless integration
- White Text: Excellent contrast on gradient background
- Professional Contrast: Perfect readability and brand consistency
- Interactive Navigation: Enhanced click feedback and proper routing structure
*/

import React, { useState } from 'react';
// ✅ UNCOMMENTED - For real implementation with React Router
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logoSrc from '../../assets/image.png';

// Updated brand colors with Hero gradient
const brandColors = {
  primary: '#3b82f6',
  primaryDark: '#1e40af',
  gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
  white: '#ffffff',
  background: '#ffffff',
  text: '#1e293b',
  textLight: '#64748b',
  border: '#e2e8f0',
  hover: '#f8fafc',
  topBarBg: '#f8fafc',
  success: '#10b981',
  // HERO-MATCHING GRADIENT HEADER THEME
  heroGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)', // Exact same as Hero
  headerText: '#ffffff',
  headerTextSecondary: '#e2e8f0', 
  headerBorder: 'rgba(255, 255, 255, 0.1)', // Subtle border on gradient
  headerHover: 'rgba(255, 255, 255, 0.1)' // Light overlay for hover on gradient
};

// TopBar Component (unchanged for contrast)
const TopBar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  const topBarStyles = {
    background: brandColors.topBarBg,
    borderBottom: `1px solid ${brandColors.border}`,
    position: 'relative',
    overflow: 'hidden'
  };

  const topBarContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '8px 16px' : '12px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    gap: isMobile ? '8px' : '16px'
  };

  const contactInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '12px' : '24px',
    flexWrap: 'wrap'
  };

  const contactItemStyles = (isHovered) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: isMobile ? '12px' : '13px',
    color: brandColors.text,
    textDecoration: 'none',
    padding: '4px 8px',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    background: isHovered ? brandColors.white : 'transparent',
    border: `1px solid ${isHovered ? brandColors.border : 'transparent'}`,
    boxShadow: isHovered ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
    cursor: 'pointer'
  });

  const coursesContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '8px' : '12px',
    flexWrap: 'wrap'
  };

  const coursesLabelStyles = {
    fontSize: isMobile ? '12px' : '13px',
    fontWeight: '500',
    color: brandColors.textLight,
    whiteSpace: 'nowrap'
  };

  const courseTagStyles = (isHovered) => ({
    fontSize: isMobile ? '11px' : '12px',
    fontWeight: '500',
    color: isHovered ? brandColors.white : brandColors.primary,
    background: isHovered ? brandColors.primary : `${brandColors.primary}10`,
    padding: '4px 8px',
    borderRadius: '12px',
    border: `1px solid ${brandColors.primary}20`,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
    boxShadow: isHovered ? '0 2px 4px rgba(59, 130, 246, 0.3)' : 'none'
  });

  const handleCourseClick = (course) => {
    console.log(`Navigate to ${course} course page`);
    alert(`🚀 Redirecting to ${course} course page!`);
  };

  const handleContactClick = (type, value) => {
    if (type === 'phone') {
      window.open(`tel:${value}`, '_self');
    } else if (type === 'email') {
      window.open(`mailto:${value}`, '_self');
    }
  };

  const courses = ['Mainframe', 'SAP', 'Data Science', 'React.js', 'Node.js'];

  if (isMobile) {
    return (
      <div style={topBarStyles}>
        <div style={{
          ...topBarContainerStyles,
          flexDirection: 'column',
          gap: '8px'
        }}>
          {/* Contact Info Row */}
          <div style={contactInfoStyles}>
            <div
              style={contactItemStyles(hoveredItem === 'mobile')}
              onClick={() => handleContactClick('phone', '+91-96522-47047')}
              onMouseEnter={() => setHoveredItem('mobile')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span>📱</span>
              <span>+91 9652247047 || 80080 85560</span>
            </div>
            <div
              style={contactItemStyles(hoveredItem === 'email')}
              onClick={() => handleContactClick('email', 'info@datenwork.in')}
              onMouseEnter={() => setHoveredItem('email')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span>✉️</span>
              <span>hr@datenwork.com</span>
            </div>
          </div>
          
          {/* Courses Row */}
          <div style={coursesContainerStyles}>
            <span style={coursesLabelStyles}>Courses:</span>
            {courses.slice(0, 3).map((course, index) => (
              <div
                key={course}
                style={courseTagStyles(hoveredItem === `course-${index}`)}
                onClick={() => handleCourseClick(course)}
                onMouseEnter={() => setHoveredItem(`course-${index}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {course}
              </div>
            ))}
            <div
              style={{
                ...courseTagStyles(hoveredItem === 'more-courses'),
                background: hoveredItem === 'more-courses' ? brandColors.success : `${brandColors.success}10`,
                color: hoveredItem === 'more-courses' ? brandColors.white : brandColors.success,
                borderColor: `${brandColors.success}20`
              }}
              onClick={() => console.log('Navigate to all courses')}
              onMouseEnter={() => setHoveredItem('more-courses')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              +2 More
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={topBarStyles}>
      <div style={topBarContainerStyles}>
        {/* Contact Information */}
        <div style={contactInfoStyles}>
          <div
            style={contactItemStyles(hoveredItem === 'mobile')}
            onClick={() => handleContactClick('phone', '+91-9876543210')}
            onMouseEnter={() => setHoveredItem('mobile')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span>📱</span>
            <span>+91 9652247047 || 80080 85560</span>
          </div>
          <div
            style={contactItemStyles(hoveredItem === 'email')}
            onClick={() => handleContactClick('email', 'hr@datenwork.in')}
            onMouseEnter={() => setHoveredItem('email')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span>✉️</span>
            <span>hr@datenwork.in</span>
          </div>
        </div>

        {/* Courses Offered */}
        <div style={coursesContainerStyles}>
          <span style={coursesLabelStyles}>Popular Courses:</span>
          {courses.map((course, index) => (
            <div
              key={course}
              style={courseTagStyles(hoveredItem === `course-${index}`)}
              onClick={() => handleCourseClick(course)}
              onMouseEnter={() => setHoveredItem(`course-${index}`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {course}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ✅ UPDATED Main Header Component with Working React Router Navigation
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // ✅ USING REAL REACT ROUTER HOOKS
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // Get navigate function
  const currentPath = location.pathname; // Get current path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => currentPath === path;

  // Responsive helper
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  // UPDATED: Hero-matching gradient header styles
  const headerStyles = {
    position: 'sticky',
    top: 0,
    background: brandColors.heroGradient, // ✨ EXACT SAME GRADIENT AS HERO
    borderBottom: `1px solid ${brandColors.headerBorder}`,
    zIndex: 100,
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    // Additional overlay for depth (like in Hero)
    position: 'relative',
    overflow: 'hidden'
  };

  // Add subtle overlay like Hero section
  const headerOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(30, 64, 175, 0.04) 0%, transparent 50%)
    `,
    zIndex: 0,
    pointerEvents: 'none'
  };

  const headerContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 16px' : isTablet ? '0 24px' : '0 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: isMobile ? '70px' : '80px',
    position: 'relative',
    zIndex: 2
  };

  const logoLinkStyles = {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '12px' : '16px',
    transition: 'transform 0.2s ease',
    padding: '8px 0',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 3
  };

  const logoImageStyles = {
    height: isMobile ? '45px' : '80px',
    width: 'auto',
    transition: 'transform 0.2s ease',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' // Subtle shadow for contrast
  };

  const titleTextStyles = {
    fontSize: isMobile ? '24px' : isTablet ? '28px' : '32px',
    fontWeight: '700',
    color: brandColors.headerText, // White text for gradient header
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.5px',
    transition: 'color 0.2s ease',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' // Subtle shadow for readability
  };

  const navListStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: isMobile ? '0' : isTablet ? '16px' : '24px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    position: 'relative',
    zIndex: 3
  };

  const navLinkStyles = (path) => ({
    fontWeight: isActive(path) ? '600' : '500',
    fontSize: isMobile ? '16px' : '15px',
    color: isActive(path) ? brandColors.primary : brandColors.headerText, // White text for gradient header
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    padding: isMobile ? '16px 0' : '12px 16px',
    borderRadius: '8px',
    background: isActive(path) ? 'rgba(255, 255, 255, 0.15)' : 'transparent', // Light overlay for active state
    border: `1px solid ${isActive(path) ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: isMobile ? '100%' : 'auto',
    justifyContent: isMobile ? 'center' : 'flex-start',
    cursor: 'pointer',
    boxShadow: isActive(path) ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    backdropFilter: isActive(path) ? 'blur(10px)' : 'none',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' // Text shadow for readability
  });

  const ctaButtonStyles = {
    background: brandColors.gradient,
    color: brandColors.white,
    padding: isMobile ? '12px 24px' : '14px 28px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: isMobile ? '14px' : '15px',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(30, 64, 175, 0.2)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    position: 'relative',
    zIndex: 3
  };

  const hamburgerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    background: 'none',
    border: 'none',
    padding: '12px',
    cursor: 'pointer',
    borderRadius: '6px',
    transition: 'background-color 0.2s ease',
    position: 'relative',
    zIndex: 3
  };

  const hamburgerSpanStyles = {
    width: '22px',
    height: '2px',
    background: brandColors.headerText, // White lines for gradient header
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: '1px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' // Subtle shadow for visibility
  };

  const getNavStyles = () => {
    const baseStyles = {
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      zIndex: 3
    };

    if (!isMobile) {
      return {
        ...baseStyles,
        display: 'flex',
        alignItems: 'center'
      };
    }
    
    return {
      ...baseStyles,
      position: 'absolute',
      top: '70px',
      left: 0,
      right: 0,
      background: brandColors.heroGradient, // Same gradient for mobile menu
      flexDirection: 'column',
      borderTop: `1px solid ${brandColors.headerBorder}`,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
      transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
      opacity: isMenuOpen ? 1 : 0,
      visibility: isMenuOpen ? 'visible' : 'hidden',
      padding: '20px 16px',
      maxHeight: isMenuOpen ? '400px' : '0',
      overflow: 'hidden',
      backdropFilter: 'blur(20px)' // Additional blur for mobile menu
    };
  };

  const mobileCtaStyles = {
    ...ctaButtonStyles,
    width: '100%',
    marginTop: '20px',
    padding: '16px 24px',
    fontSize: '16px',
    fontWeight: '600',
    background: brandColors.gradient
  };

  // ✅ UPDATED: Handle navigation with proper React Router navigation
  const handleNavClick = (path) => {
    console.log(`Navigating to: ${path}`);
    setIsMenuOpen(false); // Close mobile menu
    navigate(path); // ✅ Actually navigate using React Router
  };

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* TopBar Component */}
      <TopBar />
      
      {/* UPDATED Main Header with Hero Gradient */}
      <header style={headerStyles}>
        {/* Subtle overlay like Hero section */}
        <div style={headerOverlayStyles} />
        
        <div style={headerContainerStyles}>
          {/* Logo and Title - ✅ Now uses navigate for home link */}
          <div
            style={logoLinkStyles}
            onClick={() => handleNavClick('/')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              const titleElement = e.currentTarget.querySelector('.title-text');
              if (titleElement) titleElement.style.color = brandColors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              const titleElement = e.currentTarget.querySelector('.title-text');
              if (titleElement) titleElement.style.color = brandColors.headerText;
            }}
          >
            <img 
              src={logoSrc} 
              alt="Datenwork Logo" 
              style={logoImageStyles} 
            />
          </div>
          
          {/* Navigation */}
          <nav style={getNavStyles()}>
            <ul style={{
              ...navListStyles, 
              flexDirection: isMobile ? 'column' : 'row',
              width: isMobile ? '100%' : 'auto'
            }}>
              {navigationItems.map((item) => (
                <li key={item.path} style={{ width: isMobile ? '100%' : 'auto' }}>
                  {/* ✅ OPTION 1: Using onClick with navigate */}
                  <div
                    style={navLinkStyles(item.path)}
                    onClick={() => handleNavClick(item.path)}
                    onMouseEnter={(e) => {
                      if (!isActive(item.path)) {
                        e.target.style.background = brandColors.headerHover; // Light overlay for hover
                        e.target.style.color = brandColors.primary;
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.target.style.backdropFilter = 'blur(10px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(item.path)) {
                        e.target.style.background = 'transparent';
                        e.target.style.color = brandColors.headerText;
                        e.target.style.borderColor = 'transparent';
                        e.target.style.backdropFilter = 'none';
                      }
                    }}
                  >
                    {item.label}
                  </div>
                  
                  {/* ✅ OPTION 2: Alternatively, you can replace the div above with Link component:
                  <Link
                    to={item.path}
                    style={navLinkStyles(item.path)}
                    onClick={() => setIsMenuOpen(false)}
                    onMouseEnter={(e) => {
                      if (!isActive(item.path)) {
                        e.target.style.background = brandColors.headerHover;
                        e.target.style.color = brandColors.primary;
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.target.style.backdropFilter = 'blur(10px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(item.path)) {
                        e.target.style.background = 'transparent';
                        e.target.style.color = brandColors.headerText;
                        e.target.style.borderColor = 'transparent';
                        e.target.style.backdropFilter = 'none';
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                  */}
                </li>
              ))}
              
              {/* Mobile CTA Button */}
              {isMobile && (
                <li style={{ width: '100%' }}>
                  <div
                    style={mobileCtaStyles}
                    onClick={() => handleNavClick('/contact')}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)';
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 4px 8px rgba(30, 64, 175, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = brandColors.gradient;
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 2px 4px rgba(30, 64, 175, 0.2)';
                    }}
                  >
                    Get Started
                  </div>
                </li>
              )}
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={ctaButtonStyles}
                onClick={() => handleNavClick('/contact')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)';
                  e.target.style.boxShadow = '0 4px 8px rgba(30, 64, 175, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.background = brandColors.gradient;
                  e.target.style.boxShadow = '0 2px 4px rgba(30, 64, 175, 0.2)';
                }}
              >
                Get Started
              </div>
            </div>
          )}

          {/* Mobile Hamburger Menu */}
          {isMobile && (
            <button 
              style={hamburgerStyles}
              onClick={toggleMenu}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = brandColors.headerHover;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
              aria-label="Toggle menu"
            >
              <span style={{
                ...hamburgerSpanStyles, 
                transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }}></span>
              <span style={{
                ...hamburgerSpanStyles, 
                opacity: isMenuOpen ? 0 : 1,
                transform: isMenuOpen ? 'translateX(20px)' : 'none'
              }}></span>
              <span style={{
                ...hamburgerSpanStyles, 
                transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
              }}></span>
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;