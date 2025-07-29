import React, { useEffect, useState, useMemo } from 'react';
import Header from '../components/common/Header';
import Hero from '../components/sections/Hero';
import TrainingCourses from '../components/sections/TrainingCourses';
import FeaturedPrograms from '../components/sections/ProgramFeatures';
import PlacementServices from '../components/sections/PlacementServices';
import TransformationStories from '../components/sections/TransformationStories';
import IndustryRequirements from '../components/sections/IndustryRequirements';
import ITConsultancy from '../components/sections/ITConsultancy';
import Footer from '../components/sections/Footer';

// Circuit Board Background Component with Optimized Animation
const CircuitBoardBackground = React.memo(() => {
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Generate optimized particles - reduced for better performance
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      path: Math.floor(Math.random() * 6),
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 2
    }));
    setParticles(newParticles);

    // Performance optimization: hide background when scrolled
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight;
      setIsVisible(!scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #f0f4f8 0%, #e6f2ff 50%, #f0f4f8 100%)',
    overflow: 'hidden',
    zIndex: -1,
    opacity: isVisible ? 0.3 : 0,
    transition: 'opacity 0.3s ease',
    willChange: 'opacity'
  };

  const svgStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.8
  };

  const circuitPaths = [
    "M100,200 L300,200 L300,100 L500,100 L500,300 L700,300",
    "M150,400 L350,400 L350,500 L550,500 L550,350 L750,350",
    "M200,150 L200,350 L400,350 L400,450 L600,450",
    "M50,300 L250,300 L250,200 L450,200 L450,400 L650,400",
    "M300,50 L300,250 L500,250 L500,150 L700,150",
    "M100,500 L300,500 L300,400 L500,400 L500,550 L700,550"
  ];

  const nodePositions = [
    { x: 100, y: 200 }, { x: 300, y: 200 }, { x: 300, y: 100 },
    { x: 500, y: 100 }, { x: 500, y: 300 }, { x: 700, y: 300 },
    { x: 150, y: 400 }, { x: 350, y: 400 }, { x: 350, y: 500 },
    { x: 550, y: 500 }, { x: 550, y: 350 }, { x: 750, y: 350 },
    { x: 200, y: 150 }, { x: 200, y: 350 }, { x: 400, y: 350 },
    { x: 400, y: 450 }, { x: 600, y: 450 }, { x: 50, y: 300 },
    { x: 250, y: 300 }, { x: 250, y: 200 }, { x: 450, y: 200 },
    { x: 450, y: 400 }, { x: 650, y: 400 }
  ];

  const lineStyle = {
    stroke: '#4a90e2',
    strokeWidth: '2',
    fill: 'none',
    opacity: 0.5,
    filter: 'url(#glow)'
  };

  const gridPatternStyle = {
    stroke: '#dbeafe',
    strokeWidth: '0.5',
    opacity: 0.4
  };

  const styleTag = `
    @keyframes pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.8; }
    }
    
    @keyframes nodePulse {
      0%, 100% { 
        opacity: 0.6;
      }
      50% { 
        opacity: 1;
      }
    }
  `;

  if (!isVisible) {
    return null;
  }

  return (
    <div style={containerStyle}>
      <style>{styleTag}</style>
      
      <svg style={svgStyle} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {circuitPaths.map((path, i) => (
            <path key={`path-def-${i}`} id={`circuit-path-${i}`} d={path} />
          ))}
        </defs>
        
        <g opacity="0.3">
          {Array.from({ length: 20 }, (_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 30}
              x2="800"
              y2={i * 30}
              style={gridPatternStyle}
            />
          ))}
          {Array.from({ length: 27 }, (_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 30}
              y1="0"
              x2={i * 30}
              y2="600"
              style={gridPatternStyle}
            />
          ))}
        </g>
        
        {circuitPaths.map((path, i) => (
          <path
            key={`circuit-line-${i}`}
            d={path}
            style={{ 
              ...lineStyle, 
              animation: `pulse 2s ease-in-out infinite ${i * 0.3}s` 
            }}
          />
        ))}
        
        {nodePositions.map((pos, i) => (
          <circle
            key={`node-${i}`}
            cx={pos.x}
            cy={pos.y}
            r="4"
            fill="#60a5fa"
            filter="url(#glow)"
            style={{ 
              animation: `nodePulse 3s ease-in-out infinite ${i * 0.1}s` 
            }}
          />
        ))}
        
        {particles.map(particle => (
          <circle
            key={`moving-particle-${particle.id}`}
            r="3"
            fill="#3b82f6"
            filter="url(#glow)"
            opacity="0"
          >
            <animateMotion
              dur={`${particle.duration}s`}
              repeatCount="indefinite"
              begin={`${particle.delay}s`}
            >
              <mpath href={`#circuit-path-${particle.path}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur={`${particle.duration}s`}
              repeatCount="indefinite"
              begin={`${particle.delay}s`}
            />
          </circle>
        ))}
        
        <g opacity="0.4">
          <rect x="100" y="50" width="60" height="40" rx="5" 
                fill="none" stroke="#60a5fa" strokeWidth="1" />
          <rect x="640" y="480" width="60" height="40" rx="5" 
                fill="none" stroke="#60a5fa" strokeWidth="1" />
          <rect x="350" y="250" width="80" height="50" rx="5" 
                fill="none" stroke="#60a5fa" strokeWidth="1" />
          
          <circle cx="120" cy="120" r="8" fill="none" stroke="#60a5fa" strokeWidth="1" />
          <circle cx="680" cy="520" r="6" fill="none" stroke="#60a5fa" strokeWidth="1" />
          <rect x="45" y="95" width="15" height="15" fill="none" stroke="#60a5fa" strokeWidth="1" />
        </g>
        
        <g>
          {[
            {x: 300, y: 200}, {x: 500, y: 100}, {x: 350, y: 400}, 
            {x: 550, y: 500}, {x: 200, y: 350}, {x: 450, y: 200}
          ].map((point, i) => (
            <circle
              key={`glow-point-${i}`}
              cx={point.x}
              cy={point.y}
              r="6"
              fill="#3b82f6"
              opacity="0.6"
              filter="url(#glow)"
            >
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur="2s"
                repeatCount="indefinite"
                begin={`${i * 0.4}s`}
              />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
});

const Home = React.memo(() => {
  // Performance-optimized main page wrapper styles
  const homeStyles = useMemo(() => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
    willChange: 'transform'
  }), []);

  // Memoized styles for better performance
  const mainContentStyles = useMemo(() => ({
    flex: 1,
    width: '100%',
    position: 'relative',
    zIndex: 1
  }), []);

  // UPDATED: Much more aggressive gap reduction
  const sectionWrapperStyles = useMemo(() => ({
    width: '100%',
    position: 'relative',
    zIndex: 1,
    background: 'transparent',
    marginBottom: '-40px' // INCREASED negative margin
  }), []);

  const heroWrapperStyles = useMemo(() => ({
    ...sectionWrapperStyles,
    background: 'transparent',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '-50px' // INCREASED negative gap after hero
  }), [sectionWrapperStyles]);

  // UPDATED: More aggressive spacing reduction
  const standardSectionWrapper = useMemo(() => ({
    ...sectionWrapperStyles,
    margin: 0,
    padding: 0,
    marginBottom: '-40px' // INCREASED negative spacing
  }), [sectionWrapperStyles]);

  const headerWrapperStyles = useMemo(() => ({
    position: 'relative',
    zIndex: 100
  }), []);

  const footerWrapperStyles = useMemo(() => ({
    position: 'relative',
    zIndex: 1,
    marginTop: '-40px' // INCREASED gap reduction before footer
  }), []);

  return (
    <>
      <div style={homeStyles}>
        {/* Circuit Board Background with Moving Particles */}
        <CircuitBoardBackground />
        
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
          
          {/* Training Courses Section - REDUCED GAP */}
          <div style={standardSectionWrapper}>
            <TrainingCourses />
          </div>
          
          {/* Featured Programs Section - REDUCED GAP */}
          <div style={standardSectionWrapper}>
            <FeaturedPrograms />
          </div>
          
          {/* Placement Services Section - REDUCED GAP */}
          <div style={standardSectionWrapper}>
            <PlacementServices />
          </div>

          {/* Transformation Stories Section - REDUCED GAP */}
          <div style={standardSectionWrapper}>
            <TransformationStories />
          </div>
          
          {/* Industry Requirements Section - REDUCED GAP */}
          <div style={standardSectionWrapper}>
            <IndustryRequirements />
          </div>
          
          {/* IT Consultancy Section - REDUCED GAP */}
          <div style={standardSectionWrapper}>
            <ITConsultancy />
          </div>
        </main>
        
        {/* Footer */}
        <div style={footerWrapperStyles}>
          <Footer />
        </div>
      </div>
    </>
  );
});

export default Home;