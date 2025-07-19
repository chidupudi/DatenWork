import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoSrc from '../../assets/image.png';
import { useTheme } from '../../contexts/ThemeContext';

// Updated brand colors with dark header theme
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
  // Updated header colors for dark theme
  headerBg: '#1f2937', // Using the hero title color as background
  headerText: '#ffffff', // White text for contrast
  headerTextSecondary: '#d1d5db', // Light gray for secondary text
  headerBorder: '#374151', // Darker border
  headerHover: '#374151', // Hover state
  activeBackground: '#3b82f6', // Blue for active state
  activeBorder: '#3b82f6',
  shadow: 'rgba(0, 0, 0, 0.3)'
};

// TopBar Component (keeping it light as contrast)
const TopBar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const navigate = useNavigate();

  // Responsive hook
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    color: '#000000', // Black font color
    textDecoration: 'none',
    padding: '4px 8px',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    background: isHovered ? brandColors.white : 'transparent',
    border: `1px solid ${isHovered ? brandColors.border : 'transparent'}`,
    boxShadow: isHovered ? `0 2px 4px ${brandColors.shadow}` : 'none',
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
    color: '#000000', // Black font color
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
    navigate('/courses');
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
          <div style={contactInfoStyles}>
            <div
              style={contactItemStyles(hoveredItem === 'mobile')}
              onClick={() => handleContactClick('phone', '+91-96522-47047')}
              onMouseEnter={() => setHoveredItem('mobile')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span>📱</span>
              <span>+91 9652247047</span>
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
              onClick={() => navigate('/courses')}
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
        <div style={contactInfoStyles}>
          <div
            style={contactItemStyles(hoveredItem === 'mobile')}
            onClick={() => handleContactClick('phone', '+91-9652247047')}
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

// Main Header Component with Dark Theme
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const theme = useTheme();

  // Responsive hook
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      const tablet = window.innerWidth <= 1024;
      
      setIsMobile(mobile);
      setIsTablet(tablet);
      
      // Close mobile menu when resizing to desktop
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => currentPath === path;

  // Updated header styles for dark theme
  const headerStyles = {
    position: 'sticky',
    top: 0,
    background: brandColors.headerBg, // Dark background
    borderBottom: `1px solid ${brandColors.headerBorder}`,
    zIndex: 1000,
    transition: 'all 0.3s ease',
    boxShadow: `0 2px 8px ${brandColors.shadow}`,
    position: 'relative',
    overflow: 'visible'
  };

  const headerOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(30, 64, 175, 0.05) 0%, transparent 50%)
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
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))' // Darker shadow for dark background
  };

  // Updated mobile navigation styles for dark theme
  const getNavStyles = () => {
    if (!isMobile) {
      return {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 3
      };
    }
    
    return {
      position: 'fixed',
      top: '70px',
      left: 0,
      right: 0,
      bottom: 0,
      background: brandColors.headerBg, // Dark background for mobile menu
      flexDirection: 'column',
      borderTop: `1px solid ${brandColors.headerBorder}`,
      boxShadow: `0 4px 6px -1px ${brandColors.shadow}`,
      transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
      opacity: isMenuOpen ? 1 : 0,
      visibility: isMenuOpen ? 'visible' : 'hidden',
      padding: '20px 16px',
      overflowY: 'auto',
      backdropFilter: 'blur(20px)',
      zIndex: 999,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  const navListStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: isMobile ? '0' : isTablet ? '16px' : '24px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    position: 'relative',
    zIndex: 3,
    flexDirection: isMobile ? 'column' : 'row',
    width: isMobile ? '100%' : 'auto'
  };

  // Updated nav link styles for dark theme
  const navLinkStyles = (path) => ({
    fontWeight: isActive(path) ? '600' : '500',
    fontSize: isMobile ? '18px' : '15px',
    color: isActive(path) ? brandColors.white : brandColors.headerText, // White text
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    padding: isMobile ? '16px 24px' : '12px 16px',
    borderRadius: '8px',
    background: isActive(path) ? brandColors.activeBackground : 'transparent',
    border: `1px solid ${isActive(path) ? brandColors.activeBorder : 'transparent'}`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: isMobile ? '100%' : 'auto',
    justifyContent: isMobile ? 'center' : 'flex-start',
    cursor: 'pointer',
    boxShadow: isActive(path) ? `0 2px 4px ${brandColors.shadow}` : 'none',
    marginBottom: isMobile ? '8px' : '0'
  });

  const ctaButtonStyles = {
    background: brandColors.gradient,
    color: brandColors.white,
    padding: isMobile ? '16px 32px' : '14px 28px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: isMobile ? '16px' : '15px',
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
    zIndex: 3,
    width: isMobile ? '100%' : 'auto',
    marginTop: isMobile ? '20px' : '0'
  };

  // Updated hamburger styles for dark theme
  const hamburgerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    background: 'none',
    border: 'none',
    padding: '12px',
    cursor: 'pointer',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    position: 'relative',
    zIndex: 1001,
    width: '44px',
    height: '44px',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const hamburgerSpanStyles = (index) => {
    let transform = 'none';
    
    if (isMenuOpen) {
      if (index === 0) transform = 'rotate(45deg) translate(5px, 5px)';
      if (index === 1) transform = 'translateX(20px)';
      if (index === 2) transform = 'rotate(-45deg) translate(7px, -6px)';
    }

    return {
      width: '22px',
      height: '2px',
      background: brandColors.headerText, // White hamburger lines
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      borderRadius: '1px',
      boxShadow: `0 1px 2px ${brandColors.shadow}`,
      transform,
      opacity: isMenuOpen && index === 1 ? 0 : 1
    };
  };

  const handleNavClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    // { path: '/placement-program', label: 'Placement Program' },
    { path: '/programs', label: 'Programs' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  // Updated overlay styles
  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 998,
    opacity: isMenuOpen ? 1 : 0,
    visibility: isMenuOpen ? 'visible' : 'hidden',
    transition: 'all 0.3s ease'
  };

  // Theme toggle button styles
  const themeToggleStyles = {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: 'none',
    background: brandColors.headerHover,
    color: brandColors.headerText,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    transition: 'all 0.3s ease',
    marginRight: isMobile ? '0' : '12px'
  };

  return (
    <>
      <TopBar />
      
      <header style={headerStyles}>
        <div style={headerOverlayStyles} />
        
        <div style={headerContainerStyles}>
          {/* Logo */}
          <div
            style={logoLinkStyles}
            onClick={() => handleNavClick('/')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img 
              src={logoSrc} 
              alt="Datenwork Logo" 
              style={logoImageStyles} 
            />
          </div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav style={getNavStyles()}>
              <ul style={navListStyles}>
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <div
                      style={navLinkStyles(item.path)}
                      onClick={() => handleNavClick(item.path)}
                      onMouseEnter={(e) => {
                        if (!isActive(item.path)) {
                          e.target.style.background = brandColors.headerHover;
                          e.target.style.color = brandColors.primary;
                          e.target.style.borderColor = brandColors.headerBorder;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(item.path)) {
                          e.target.style.background = 'transparent';
                          e.target.style.color = brandColors.headerText;
                          e.target.style.borderColor = 'transparent';
                        }
                      }}
                    >
                      {item.label}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Desktop Theme Toggle and CTA Button */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button
                style={themeToggleStyles}
                onClick={theme.toggleTheme}
                onMouseEnter={(e) => {
                  e.target.style.background = brandColors.primary;
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = brandColors.headerHover;
                  e.target.style.transform = 'scale(1)';
                }}
                title={theme.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme.isDarkMode ? '☀️' : '🌙'}
              </button>
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
              <span style={hamburgerSpanStyles(0)}></span>
              <span style={hamburgerSpanStyles(1)}></span>
              <span style={hamburgerSpanStyles(2)}></span>
            </button>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {isMobile && (
          <div 
            style={overlayStyles}
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <nav style={getNavStyles()}>
            <ul style={navListStyles}>
              {navigationItems.map((item) => (
                <li key={item.path} style={{ width: '100%' }}>
                  <div
                    style={navLinkStyles(item.path)}
                    onClick={() => handleNavClick(item.path)}
                  >
                    {item.label}
                  </div>
                </li>
              ))}
              
              {/* Mobile Theme Toggle */}
              <li style={{ width: '100%', marginBottom: '16px' }}>
                <button
                  style={{
                    ...themeToggleStyles,
                    width: '100%',
                    borderRadius: '8px',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '16px',
                    padding: '12px'
                  }}
                  onClick={theme.toggleTheme}
                >
                  {theme.isDarkMode ? '☀️' : '🌙'}
                  <span>{theme.isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </li>

              {/* Mobile CTA Button */}
              <li style={{ width: '100%' }}>
                <div
                  style={ctaButtonStyles}
                  onClick={() => handleNavClick('/contact')}
                >
                  Get Started
                </div>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;