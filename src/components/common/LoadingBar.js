import React, { useState, useEffect } from 'react';

const LoadingBar = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const duration = 1500; // 1.5 seconds - professional and quick
    const steps = 100;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2; // Faster increment

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete && onComplete();
          }, 200);
          return 100;
        }
        return newProgress;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  if (!isLoading) return null;

  // Animation keyframes for fadeIn
  const fadeInKeyframes = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  // Loading overlay styles
  const loadingOverlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    animation: 'fadeIn 0.3s ease-out'
  };

  const loadingContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem'
  };

  const loadingContentStyles = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem'
  };

  const loadingLogoStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const logoTextStyles = {
    fontSize: window.innerWidth <= 768 ? '1.75rem' : '2rem',
    fontWeight: '700',
    color: '#1a202c',
    margin: 0,
    letterSpacing: '-0.02em',
    fontFamily: "'Poppins', sans-serif"
  };

  const subtitleStyles = {
    color: '#6b7280',
    fontSize: window.innerWidth <= 768 ? '0.75rem' : '0.875rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  const loadingBarContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
  };

  const loadingSvgStyles = {
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
  };

  const progressRectStyles = {
    transition: 'width 0.1s ease-out'
  };

  const loadingPercentageStyles = {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#4b5563',
    minWidth: '40px'
  };

  return (
    <>
      {/* Inject keyframes */}
      <style>{fadeInKeyframes}</style>
      
      <div style={loadingOverlayStyles}>
        <div style={loadingContainerStyles}>
          <div style={loadingContentStyles}>
            <div style={loadingLogoStyles}>
              <h2 style={logoTextStyles}>Datenwork</h2>
              <span style={subtitleStyles}>Professional Training & Consulting</span>
            </div>
            
            <div style={loadingBarContainerStyles}>
              <svg
                width="200"
                height="4"
                viewBox="0 0 200 4"
                style={loadingSvgStyles}
              >
                {/* Background track */}
                <rect
                  x="0"
                  y="0"
                  width="200"
                  height="4"
                  rx="2"
                  fill="#E5E7EB"
                />
                {/* Progress fill */}
                <rect
                  x="0"
                  y="0"
                  width={`${(progress / 100) * 200}`}
                  height="4"
                  rx="2"
                  fill="url(#gradient)"
                  style={progressRectStyles}
                />
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div style={loadingPercentageStyles}>{Math.round(progress)}%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingBar;