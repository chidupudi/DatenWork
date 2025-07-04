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
      color: 'blue'
    },
    {
      id: 2,
      title: 'Placement Services',
      description: 'Guaranteed job placements with top tech companies through our extensive partner network.',
      icon: '💼',
      buttonText: 'Find Jobs',
      color: 'teal'
    },
    {
      id: 3,
      title: 'IT Consultancy',
      description: 'Strategic technology consulting to help businesses scale and optimize their digital infrastructure.',
      icon: '🚀',
      buttonText: 'Partner With Us',
      color: 'orange'
    }
  ];

  // Main section styles
  const servicesStyles = {
    background: '#f9fafb',
    padding: '80px 0',
    position: 'relative',
    zIndex: 1,
    opacity: 1,
    visibility: 'visible'
  };

  // Background overlay styles
  const backgroundOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.02) 0%, rgba(0, 181, 165, 0.02) 100%)',
    zIndex: 0
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
    fontFamily: "'Poppins', sans-serif"
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
    padding: '32px',
    position: 'relative',
    overflow: 'hidden',
    background: 'white',
    borderRadius: '16px',
    boxShadow: isHovered 
      ? '0 8px 12px rgba(0, 0, 0, 0.1), 0 20px 40px rgba(0, 0, 0, 0.12)'
      : '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e5e7eb',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
  });

  const topBorderStyles = (color, isHovered) => {
    const colorMap = {
      blue: '#4f46e5',
      teal: '#14b8a6',
      orange: '#f59e0b'
    };
    
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: isHovered ? '8px' : '4px',
      background: colorMap[color] || '#4f46e5',
      transition: 'height 0.2s ease'
    };
  };

  const serviceIconStyles = (isHovered) => ({
    fontSize: '3rem',
    marginBottom: '16px',
    display: 'block',
    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.2s ease'
  });

  const serviceTitleStyles = {
    fontSize: '1.5rem',
    marginBottom: '16px',
    color: '#1f2937',
    fontWeight: '600'
  };

  const serviceDescriptionStyles = {
    marginBottom: '24px',
    lineHeight: '1.6',
    color: '#6b7280'
  };

  return (
    <section style={servicesStyles} id="services">
      <div style={backgroundOverlayStyles} />
      
      <div style={servicesContainerStyles}>
        <motion.div 
          ref={ref}
          style={servicesHeaderStyles}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 style={servicesTitleStyles}>Our Services</h2>
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
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <Card 
                style={serviceCardStyles(service, hoveredService === service.id)}
                hover={false} // Disable Card's built-in hover since we're handling it manually
              >
                <div style={topBorderStyles(service.color, hoveredService === service.id)} />
                
                <motion.div 
                  style={serviceIconStyles(hoveredService === service.id)}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 style={serviceTitleStyles}>{service.title}</h3>
                <p style={serviceDescriptionStyles}>{service.description}</p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline">
                    {service.buttonText}
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;