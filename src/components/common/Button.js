import React, { useState } from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  className = '',
  style = {},
  disabled = false,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Base button styles
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    borderRadius: '12px',
    transition: 'all 0.2s ease',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'inherit',
    whiteSpace: 'nowrap',
    opacity: disabled ? 0.6 : 1,
    transform: disabled ? 'none' : isPressed ? 'scale(0.98)' : isHovered ? 'translateY(-2px)' : 'none',
    ...style
  };

  // Variant styles
  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
      color: 'white',
      boxShadow: isHovered && !disabled 
        ? '0 6px 20px rgba(79, 70, 229, 0.4)' 
        : '0 4px 6px rgba(79, 70, 229, 0.25)'
    },
    secondary: {
      background: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
      color: 'white',
      border: 'none',
      boxShadow: isHovered && !disabled 
        ? '0 6px 20px rgba(20, 184, 166, 0.4)' 
        : '0 4px 6px rgba(20, 184, 166, 0.25)'
    },
    outline: {
      background: isHovered && !disabled ? '#4f46e5' : 'transparent',
      color: isHovered && !disabled ? 'white' : '#4f46e5',
      border: '2px solid #4f46e5',
      boxShadow: isHovered && !disabled 
        ? '0 4px 6px rgba(79, 70, 229, 0.25)' 
        : 'none'
    }
  };

  // Size styles
  const sizeStyles = {
    small: {
      padding: '8px 16px',
      fontSize: '0.875rem'
    },
    medium: {
      padding: '12px 24px',
      fontSize: '1rem'
    },
    large: {
      padding: '16px 32px',
      fontSize: '1.125rem',
      fontWeight: '700'
    }
  };

  // Shimmer effect styles
  const shimmerStyles = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: isHovered && !disabled ? '100%' : '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transition: 'left 0.5s ease',
    pointerEvents: 'none'
  };

  // Combine all styles
  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size]
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setIsHovered(false);
      setIsPressed(false);
    }
  };

  const handleMouseDown = () => {
    if (!disabled) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    if (!disabled) {
      setIsPressed(false);
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <button 
      style={combinedStyles}
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      disabled={disabled}
      {...props}
    >
      {/* Shimmer effect */}
      <span style={shimmerStyles}></span>
      
      {/* Button content */}
      <span style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </span>
    </button>
  );
};

export default Button;