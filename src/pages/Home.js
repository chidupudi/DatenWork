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
    position: 'relative',
    background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)'
  };

  // Global background overlay for entire page
  const globalBackgroundOverlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.06) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.06) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.04) 0%, transparent 60%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="home-pattern" width="30" height="26" patternUnits="userSpaceOnUse"><polygon points="15,2 28,24 2,24" fill="none" stroke="rgba(99,102,241,0.03)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23home-pattern)"/></svg>')
    `
  };

  // Floating orbs for visual interest
  const floatingOrb1Styles = {
    position: 'fixed',
    top: '10%',
    right: '15%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    animation: 'floatOrb1 20s ease-in-out infinite',
    pointerEvents: 'none',
    zIndex: 0
  };

  const floatingOrb2Styles = {
    position: 'fixed',
    bottom: '20%',
    left: '10%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'floatOrb2 25s ease-in-out infinite',
    pointerEvents: 'none',
    zIndex: 0
  };

  const floatingOrb3Styles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '250px',
    height: '250px',
    background: 'radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(70px)',
    animation: 'floatOrb3 30s ease-in-out infinite',
    pointerEvents: 'none',
    zIndex: 0
  };

  // Geometric shapes overlay
  const geometricOverlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 0,
    background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:rgba(99,102,241,0.02);stop-opacity:1" /><stop offset="100%" style="stop-color:rgba(20,184,166,0.02);stop-opacity:1" /></linearGradient></defs><rect x="100" y="100" width="200" height="200" fill="none" stroke="url(%23grad1)" stroke-width="1" opacity="0.3" transform="rotate(45 200 200)"/><rect x="800" y="400" width="150" height="150" fill="none" stroke="url(%23grad1)" stroke-width="1" opacity="0.3" transform="rotate(30 875 475)"/><circle cx="500" cy="600" r="100" fill="none" stroke="url(%23grad1)" stroke-width="1" opacity="0.3"/></svg>')`,
    backgroundSize: '1200px 800px',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat'
  };

  // Animation keyframes
  const animationStyles = `
    @keyframes floatOrb1 {
      0%, 100% { 
        transform: translate(0, 0) scale(1);
        opacity: 0.8;
      }
      25% { 
        transform: translate(-50px, 30px) scale(1.1);
        opacity: 0.6;
      }
      50% { 
        transform: translate(30px, -20px) scale(0.9);
        opacity: 0.8;
      }
      75% { 
        transform: translate(-20px, -40px) scale(1.05);
        opacity: 0.7;
      }
    }

    @keyframes floatOrb2 {
      0%, 100% { 
        transform: translate(0, 0) scale(1);
        opacity: 0.7;
      }
      33% { 
        transform: translate(40px, -30px) scale(1.15);
        opacity: 0.5;
      }
      66% { 
        transform: translate(-30px, 40px) scale(0.95);
        opacity: 0.7;
      }
    }

    @keyframes floatOrb3 {
      0%, 100% { 
        transform: translate(0, 0) scale(1);
        opacity: 0.6;
      }
      50% { 
        transform: translate(-40px, 40px) scale(1.2);
        opacity: 0.4;
      }
    }
  `;

  // Main content wrapper styles
  const mainContentStyles = {
    flex: 1,
    width: '100%',
    position: 'relative',
    zIndex: 1
  };

  // Section wrapper styles - no gaps, seamless flow
  const sectionWrapperStyles = {
    width: '100%',
    position: 'relative',
    zIndex: 1,
    background: 'transparent'
  };

  // Hero section specific wrapper
  const heroWrapperStyles = {
    ...sectionWrapperStyles,
    background: 'transparent',
    position: 'relative',
    overflow: 'hidden'
  };

  // Standard section wrapper - no padding between sections
  const standardSectionWrapper = {
    ...sectionWrapperStyles,
    margin: 0,
    padding: 0
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
    marginTop: 0
  };

  return (
    <>
      {/* Inject animation keyframes */}
      <style>{animationStyles}</style>
      
      <div style={homeStyles}>
        {/* Global background elements */}
        <div style={globalBackgroundOverlay} />
        <div style={floatingOrb1Styles} />
        <div style={floatingOrb2Styles} />
        <div style={floatingOrb3Styles} />
        <div style={geometricOverlayStyles} />
        
        {/* Header */}
        <div style={headerWrapperStyles}>
          <Header />
        </div>
        
        {/* Main content wrapper */}
        <main style={mainContentStyles}>
          {/* Hero Section */}
          <div style={heroWrapperStyles}>
            <Hero />
          </div>
          
          {/* Services Section */}
          {/* <div style={standardSectionWrapper}>
            <Services />
          </div> */}
          
          {/* Training Courses Section */}
          <div style={standardSectionWrapper}>
            <TrainingCourses />
          </div>
          
          {/* Placement Services Section */}
          <div style={standardSectionWrapper}>
            <PlacementServices />
          </div>
          
          {/* Industry Requirements Section */}
          <div style={standardSectionWrapper}>
            <IndustryRequirements />
          </div>
          
          {/* IT Consultancy Section */}
          <div style={standardSectionWrapper}>
            <ITConsultancy />
          </div>
          
          {/* Testimonials Section */}
          {/* <div style={standardSectionWrapper}>
            <Testimonials />
          </div> */}
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