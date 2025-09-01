import React, { useState } from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  style = {},
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Base card styles with butter smooth animations
  const baseStyles = {
    background: 'linear-gradient(145deg, #ffffff 0%, #f9fafb 100%)',
    borderRadius: '16px',
    boxShadow: isHovered && hover 
      ? '0 12px 20px rgba(0, 0, 0, 0.12), 0 25px 50px rgba(0, 0, 0, 0.15)' 
      : '0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 25px rgba(0, 0, 0, 0.08)',
    padding: '24px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: isHovered && hover 
      ? '1px solid rgba(79, 70, 229, 0.15)' 
      : '1px solid #e5e7eb',
    position: 'relative',
    overflow: 'hidden',
    transform: isHovered && hover ? 'translateY(-12px) translateZ(0) scale(1.02)' : 'translateY(0) translateZ(0)',
    willChange: 'transform, box-shadow',
    backfaceVisibility: 'hidden',
    perspective: '1000px',
    ...style
  };

  // Top border gradient effect with smooth transition
  const topBorderStyles = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 50%, #10b981 100%)',
    opacity: isHovered && hover ? 1 : 0,
    transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateZ(0)',
    willChange: 'opacity'
  };

  const handleMouseEnter = () => {
    if (hover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (hover) {
      setIsHovered(false);
    }
  };

  return (
    <div 
      style={baseStyles}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Top border gradient effect */}
      {hover && (
        <div style={topBorderStyles}></div>
      )}
      
      {/* Card content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default Card;