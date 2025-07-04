import React from 'react';
import Header from '../components/common/Header';
import Hero from '../components/sections/Hero';
import TrainingCourses from '../components/sections/TrainingCourses';
import PlacementServices from '../components/sections/PlacementServices';
import IndustryRequirements from '../components/sections/IndustryRequirements';
import ITConsultancy from '../components/sections/ITConsultancy';
import Testimonials from '../components/sections/Testimonials';
import Services from '../components/sections/Services';
import Footer from '../components/sections/Footer';

const Home = () => {
  // Main page wrapper styles
  const homeStyles = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    overflow: 'hidden',
    position: 'relative'
  };

  // Main content wrapper styles
  const mainContentStyles = {
    flex: 1,
    width: '100%',
    position: 'relative',
    zIndex: 1
  };

  // Global section styles for consistency
  const sectionStyles = {
    width: '100%',
    position: 'relative',
    zIndex: 1,
    opacity: 1,
    visibility: 'visible',
    minHeight: 'auto'
  };

  // Hero specific styles
  const heroSectionStyles = {
    ...sectionStyles,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // Standard section styles
  const standardSectionStyles = {
    ...sectionStyles,
    padding: '80px 0'
  };

  // Mobile responsive section styles
  const mobileSectionStyles = window.innerWidth <= 768 ? {
    ...standardSectionStyles,
    padding: '64px 0'
  } : standardSectionStyles;

  // Container styles for sections
  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 16px' : '0 24px',
    width: '100%',
    position: 'relative',
    zIndex: 1,
    boxSizing: 'border-box'
  };

  // Header wrapper with proper z-index
  const headerWrapperStyles = {
    position: 'relative',
    zIndex: 100
  };

  // Footer wrapper styles
  const footerWrapperStyles = {
    position: 'relative',
    zIndex: 1,
    marginTop: 'auto'
  };

  // Ensure smooth scrolling and proper layout
  const globalStyles = `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    html {
      scroll-behavior: smooth;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      line-height: 1.6;
      color: #1f2937;
      background-color: #ffffff;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      line-height: 1.25;
      letter-spacing: -0.02em;
      color: #1f2937;
      margin: 0;
    }
    
    p {
      margin-bottom: 16px;
      color: #6b7280;
      line-height: 1.6;
      margin: 0 0 16px 0;
    }
    
    a {
      text-decoration: none;
      color: #4f46e5;
      transition: color 0.15s ease;
    }
    
    a:hover {
      color: #14b8a6;
    }
    
    button {
      cursor: pointer;
      border: none;
      outline: none;
      font-family: inherit;
    }
    
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    
    section {
      position: relative;
      overflow: hidden;
    }
    
    /* Responsive typography */
    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }
      
      h2 {
        font-size: 2rem;
      }
      
      h3 {
        font-size: 1.5rem;
      }
    }
    
    /* Smooth transitions */
    @media (prefers-reduced-motion: no-preference) {
      * {
        scroll-behavior: smooth;
      }
    }
  `;

  return (
    <>
      {/* Inject global styles */}
      <style>{globalStyles}</style>
      
      <div style={homeStyles}>
        {/* Header with proper z-index */}
        <div style={headerWrapperStyles}>
          <Header />
        </div>
        
        {/* Main content wrapper */}
        <main style={mainContentStyles}>
          {/* Hero Section - Full height */}
          <div style={heroSectionStyles}>
            <Hero />
          </div>
          
          {/* Services Section */}
          <div style={mobileSectionStyles}>
            <Services />
          </div>
          
          {/* Training Courses Section */}
          <div style={mobileSectionStyles}>
            <TrainingCourses />
          </div>
          
          {/* Placement Services Section */}
          <div style={mobileSectionStyles}>
            <PlacementServices />
          </div>
          
          {/* Industry Requirements Section */}
          <div style={mobileSectionStyles}>
            <IndustryRequirements />
          </div>
          
          {/* IT Consultancy Section */}
          <div style={mobileSectionStyles}>
            <ITConsultancy />
          </div>
          
          {/* Testimonials Section */}
          <div style={mobileSectionStyles}>
            <Testimonials />
          </div>
        </main>
        
        {/* Footer */}
        <div style={footerWrapperStyles}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;