import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingBar from './LoadingBar';

const RouteWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [previousLocation, setPreviousLocation] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Check if location actually changed (not just a re-render)
    if (previousLocation && previousLocation.pathname !== location.pathname) {
      setIsLoading(true);
    }
    setPreviousLocation(location);
  }, [location, previousLocation]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingBar isLoading={isLoading} onComplete={handleLoadingComplete} />
      {children}
    </>
  );
};

export default RouteWrapper;