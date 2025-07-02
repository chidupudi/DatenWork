import React, { useState, useEffect } from 'react';
import './LoadingBar.css';

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

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="loading-content">
          <div className="loading-logo">
            <h2>Datenwork</h2>
            <span className="loading-subtitle">Professional Training & Consulting</span>
          </div>
          
          <div className="loading-bar-container">
            <svg
              width="200"
              height="4"
              viewBox="0 0 200 4"
              className="loading-svg"
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
                className="progress-rect"
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
            
            <div className="loading-percentage">{Math.round(progress)}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingBar;