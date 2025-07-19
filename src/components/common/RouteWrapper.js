import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingBar from './LoadingBar';

const RouteWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [previousLocation, setPreviousLocation] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    
    // Check if location actually changed (not just a re-render)
    if (previousLocation && previousLocation.pathname !== location.pathname) {
      setIsLoading(true);
      // Optimized loading time for better UX
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
    setPreviousLocation(location);
  }, [location, previousLocation]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Main wrapper styles
  const wrapperStyles = {
    opacity: isLoading ? 0.3 : 1,
    transition: 'opacity 0.3s ease',
    minHeight: '100vh',
    width: '100%',
    position: 'relative'
  };

  return (
    <>
      {isLoading && (
        <LoadingBar isLoading={isLoading} onComplete={handleLoadingComplete} />
      )}
      <div style={wrapperStyles}>
        {children}
      </div>
    </>
  );
};

export default RouteWrapper;
