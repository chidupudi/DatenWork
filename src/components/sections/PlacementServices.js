import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../common/Card';

const PlacementServices = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // State for animated counters
  const [counters, setCounters] = useState({
    students: 0,
    companies: 0,
    successRate: 0,
    avgPackage: 0
  });

  // Refs to track animation state
  const animationStartTime = useRef(null);
  const animationFrame = useRef(null);
  const hasStartedAnimation = useRef(false);

  // Target values
  const targets = {
    students: 5000,
    companies: 250,
    successRate: 95,
    avgPackage: 8.5
  };

  // Sophisticated easing function for progressive loading
  const calculateProgress = (elapsedTime) => {
    const totalDuration = 120000; // 2 minutes in milliseconds
    
    // Define progress milestones
    if (elapsedTime <= 2000) {
      // First 2 seconds: load 50%
      return (elapsedTime / 2000) * 0.5;
    } else if (elapsedTime <= 8000) {
      // Next 6 seconds: load additional 20% (50% to 70%)
      return 0.5 + ((elapsedTime - 2000) / 6000) * 0.2;
    } else if (elapsedTime <= 23000) {
      // Next 15 seconds: load additional 15% (70% to 85%)
      return 0.7 + ((elapsedTime - 8000) / 15000) * 0.15;
    } else if (elapsedTime <= totalDuration) {
      // Remaining time: load final 15% (85% to 100%)
      const remainingProgress = (elapsedTime - 23000) / (totalDuration - 23000);
      return 0.85 + remainingProgress * 0.15;
    }
    return 1; // 100% complete
  };

  // Animation logic
  useEffect(() => {
    if (inView && !hasStartedAnimation.current) {
      hasStartedAnimation.current = true;
      animationStartTime.current = Date.now();

      const animate = () => {
        const now = Date.now();
        const elapsed = now - animationStartTime.current;
        const progress = calculateProgress(elapsed);

        setCounters({
          students: Math.floor(targets.students * progress),
          companies: Math.floor(targets.companies * progress),
          successRate: Math.floor(targets.successRate * progress),
          avgPackage: parseFloat((targets.avgPackage * progress).toFixed(1))
        });

        if (progress < 1) {
          animationFrame.current = requestAnimationFrame(animate);
        }
      };

      animationFrame.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [inView]);

  const stats = [
    {
      id: 1,
      icon: '👥',
      value: counters.students.toLocaleString(),
      suffix: '+',
      label: 'Students Placed',
      color: '#4f46e5',
      bgGradient: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)'
    },
    {
      id: 2,
      icon: '🏢',
      value: counters.companies.toLocaleString(),
      suffix: '+',
      label: 'Partner Companies',
      color: '#14b8a6',
      bgGradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)'
    },
    {
      id: 3,
      icon: '📈',
      value: counters.successRate.toLocaleString(),
      suffix: '%',
      label: 'Success Rate',
      color: '#f59e0b',
      bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      id: 4,
      icon: '💰',
      value: counters.avgPackage.toLocaleString(),
      suffix: ' LPA',
      label: 'Average Package',
      color: '#ec4899',
      bgGradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)'
    }
  ];

  // Container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Styles
  const sectionStyles = {
    background: 'transparent',
    padding: '80px 0',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '64px'
  };

  const titleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
    marginBottom: '16px',
    color: '#1f2937',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif",
    position: 'relative',
    display: 'inline-block'
  };

  const titleUnderlineStyles = {
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #4f46e5, #14b8a6)',
    borderRadius: '2px'
  };

  const subtitleStyles = {
    fontSize: '1.25rem',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const statsGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024 
      ? 'repeat(2, 1fr)' 
      : 'repeat(4, 1fr)',
    gap: '24px',
    marginBottom: '80px'
  };

  const statCardStyles = {
    background: 'white',
    borderRadius: '16px',
    padding: '24px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    height: '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease'
  };

  const statCardHoverStyles = {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
  };

  const statIconContainerStyles = (bgGradient) => ({
    width: '48px',
    height: '48px',
    background: bgGradient,
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 12px',
    fontSize: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  });

  const statValueStyles = (color) => ({
    fontSize: '2rem',
    fontWeight: '700',
    color: color,
    marginBottom: '4px',
    lineHeight: '1.2',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    gap: '2px'
  });

  const statSuffixStyles = {
    fontSize: '1.5rem',
    fontWeight: '600',
    opacity: 0.9
  };

  const statLabelStyles = {
    fontSize: '0.875rem',
    color: '#6b7280',
    fontWeight: '500',
    letterSpacing: '0.025em'
  };

  const backgroundPatternStyles = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100px',
    height: '100px',
    opacity: 0.05,
    background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" stroke-width="1"/></pattern><rect width="100" height="100" fill="url(%23grid)"/></svg>')`
  };

  const progressBarStyles = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '3px',
    background: 'currentColor',
    opacity: 0.2,
    transition: 'width 0.3s ease'
  };

  const ctaSectionStyles = {
    textAlign: 'center',
    background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
    borderRadius: '24px',
    padding: '48px',
    position: 'relative',
    overflow: 'hidden'
  };

  const ctaTitleStyles = {
    fontSize: '2rem',
    marginBottom: '16px',
    color: '#1f2937',
    fontWeight: '600'
  };

  const ctaDescriptionStyles = {
    fontSize: '1.125rem',
    color: '#6b7280',
    marginBottom: '32px',
    maxWidth: '600px',
    margin: '0 auto 32px'
  };

  const ctaButtonStyles = {
    background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
    color: 'white',
    padding: '14px 32px',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  };

  const ctaButtonHoverStyles = {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(79, 70, 229, 0.4)'
  };

  return (
    <section style={sectionStyles} id="placement-services">
      <div style={containerStyles}>
        <motion.div 
          ref={ref}
          style={headerStyles}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 style={titleStyles}>
            Guaranteed Placement Services
            <span style={titleUnderlineStyles}></span>
          </h2>
          <p style={subtitleStyles}>
            Your success is our commitment. Join thousands of placed students.
          </p>
        </motion.div>

        <motion.div 
          style={statsGridStyles}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={statCardHoverStyles}
            >
              <Card style={statCardStyles} hover={false}>
                <div style={backgroundPatternStyles} />
                <div style={statIconContainerStyles(stat.bgGradient)}>
                  {stat.icon}
                </div>
                <div style={statValueStyles(stat.color)}>
                  {stat.value}
                  <span style={statSuffixStyles}>{stat.suffix}</span>
                </div>
                <p style={statLabelStyles}>{stat.label}</p>
                <div 
                  style={{
                    ...progressBarStyles,
                    width: `${(counters[Object.keys(counters)[stat.id - 1]] / targets[Object.keys(targets)[stat.id - 1]]) * 100}%`,
                    background: stat.color
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div style={ctaSectionStyles}>
            <h3 style={ctaTitleStyles}>Ready to Start Your Journey?</h3>
            <p style={ctaDescriptionStyles}>
              Join our placement program and secure your dream job in tech
            </p>
            <motion.button
              style={ctaButtonStyles}
              whileHover={ctaButtonHoverStyles}
              whileTap={{ scale: 0.98 }}
            >
              Get Placed Now
              <span>→</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementServices;