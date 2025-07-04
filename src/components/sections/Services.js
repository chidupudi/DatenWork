import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../common/Card';
import Button from '../common/Button';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [hoveredService, setHoveredService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      id: 1,
      title: 'Training Programs',
      description: 'Comprehensive courses in cutting-edge technologies with hands-on projects and industry mentorship.',
      icon: '🎓',
      buttonText: 'Learn More',
      color: 'blue',
      highlights: ['100+ Courses', '24/7 Support', 'Industry Certified']
    },
    {
      id: 2,
      title: 'Placement Services',
      description: 'Guaranteed job placements with top tech companies through our extensive partner network.',
      icon: '💼',
      buttonText: 'Find Jobs',
      color: 'teal',
      highlights: ['95% Success Rate', 'Top Companies', 'Career Support']
    },
    {
      id: 3,
      title: 'IT Consultancy',
      description: 'Strategic technology consulting to help businesses scale and optimize their digital infrastructure.',
      icon: '🚀',
      buttonText: 'Partner With Us',
      color: 'orange',
      highlights: ['Expert Team', 'Custom Solutions', 'ROI Focused']
    }
  ];

  // Main section styles - transparent background to show unified home background
  const servicesStyles = {
    background: 'transparent',
    padding: '80px 0',
    position: 'relative',
    zIndex: 1,
    opacity: 1,
    visibility: 'visible'
  };

  const servicesContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1
  };

  const servicesHeaderStyles = {
    textAlign: 'center',
    marginBottom: '64px'
  };

  const servicesTitleStyles = {
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

  const servicesSubtitleStyles = {
    fontSize: '1.25rem',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const servicesGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: window.innerWidth <= 768 ? '24px' : '32px'
  };

  const serviceCardStyles = (service, isHovered) => ({
    textAlign: 'center',
    padding: '0',
    position: 'relative',
    overflow: 'hidden',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    boxShadow: isHovered 
      ? '0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(79, 70, 229, 0.1)'
      : '0 10px 25px rgba(0, 0, 0, 0.08)',
    border: isHovered ? '1px solid rgba(79, 70, 229, 0.2)' : '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)'
  });

  const cardHeaderStyles = (color) => {
    const colorMap = {
      blue: 'linear-gradient(135deg, #4f46e5, #6366f1)',
      teal: 'linear-gradient(135deg, #14b8a6, #0d9488)',
      orange: 'linear-gradient(135deg, #f59e0b, #d97706)'
    };
    
    return {
      background: colorMap[color] || colorMap.blue,
      padding: '32px 32px 24px',
      position: 'relative',
      overflow: 'hidden'
    };
  };

  const cardPatternStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.2)"/><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.2)"/><circle cx="18" cy="18" r="1" fill="rgba(255,255,255,0.2)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots-pattern)"/></svg>')`,
    opacity: 0.4
  };

  const serviceIconStyles = (isHovered) => ({
    fontSize: '3.5rem',
    marginBottom: '16px',
    display: 'block',
    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
    transform: isHovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)',
    transition: 'all 0.3s ease'
  });

  const serviceTitleStyles = {
    fontSize: '1.5rem',
    marginBottom: '8px',
    color: 'white',
    fontWeight: '700',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  };

  const highlightsContainerStyles = {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '16px'
  };

  const highlightBadgeStyles = {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '600'
  };

  const cardBodyStyles = {
    padding: '24px 32px 32px',
    background: 'white'
  };

  const serviceDescriptionStyles = {
    marginBottom: '24px',
    lineHeight: '1.6',
    color: '#6b7280',
    fontSize: '0.95rem'
  };

  const buttonWrapperStyles = {
    position: 'relative',
    display: 'inline-block'
  };

  const pulseRingStyles = (isHovered) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    borderRadius: '12px',
    border: '2px solid #4f46e5',
    opacity: isHovered ? 0.3 : 0,
    animation: isHovered ? 'pulse 2s infinite' : 'none',
    pointerEvents: 'none'
  });

  const pulseKeyframes = `
    @keyframes pulse {
      0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.3;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 0;
      }
      100% {
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 0;
      }
    }
  `;

  return (
    <>
      <style>{pulseKeyframes}</style>
      <section style={servicesStyles} id="services">
        <div style={servicesContainerStyles}>
          <motion.div 
            ref={ref}
            style={servicesHeaderStyles}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 style={servicesTitleStyles}>
              Our Services
              <span style={titleUnderlineStyles}></span>
            </h2>
            <p style={servicesSubtitleStyles}>
              Comprehensive solutions for your tech career and business needs
            </p>
          </motion.div>
          
          <motion.div 
            style={servicesGridStyles}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {services.map(service => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <Card 
                  style={serviceCardStyles(service, hoveredService === service.id)}
                  hover={false}
                >
                  <div style={cardHeaderStyles(service.color)}>
                    <div style={cardPatternStyles} />
                    <motion.div 
                      style={serviceIconStyles(hoveredService === service.id)}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 style={serviceTitleStyles}>{service.title}</h3>
                    
                    <div style={highlightsContainerStyles}>
                      {service.highlights.map((highlight, index) => (
                        <span key={index} style={highlightBadgeStyles}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div style={cardBodyStyles}>
                    <p style={serviceDescriptionStyles}>{service.description}</p>
                    
                    <div style={buttonWrapperStyles}>
                      <span style={pulseRingStyles(hoveredService === service.id)} />
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline">
                          {service.buttonText}
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;