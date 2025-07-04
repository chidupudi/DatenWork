import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../common/Card';
import Button from '../common/Button';
import { useCountAnimation } from '../../hooks/useCountAnimation';

const PlacementServices = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [placementCount, startPlacementCount] = useCountAnimation(850, 2000);
  const [companiesCount, startCompaniesCount] = useCountAnimation(120, 2000);
  const [salaryCount, startSalaryCount] = useCountAnimation(45, 2000);

  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  React.useEffect(() => {
    if (inView) {
      startPlacementCount();
      startCompaniesCount();
      startSalaryCount();
    }
  }, [inView, startPlacementCount, startCompaniesCount, startSalaryCount]);

  const services = [
    {
      id: 1,
      title: 'Resume Building',
      description: 'Professional resume creation that highlights your skills and gets you noticed.',
      icon: '📄',
      features: ['ATS-optimized format', 'Industry-specific templates', 'Personal review session']
    },
    {
      id: 2,
      title: 'Interview Preparation',
      description: 'Comprehensive interview coaching with mock sessions and feedback.',
      icon: '🎤',
      features: ['Technical interview prep', 'HR round coaching', 'Mock interview sessions']
    },
    {
      id: 3,
      title: 'Job Matching',
      description: 'AI-powered job matching based on your skills and career preferences.',
      icon: '🎯',
      features: ['Smart job recommendations', 'Salary negotiation support', 'Career path guidance']
    },
    {
      id: 4,
      title: 'Industry Connections',
      description: 'Direct connections with hiring managers and industry professionals.',
      icon: '🤝',
      features: ['Partner company network', 'Industry meetups', 'Mentorship programs']
    }
  ];

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Main section styles
  const placementSectionStyles = {
    background: 'linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%)',
    padding: '80px 0',
    position: 'relative',
    overflow: 'hidden'
  };

  // Background patterns
  const backgroundOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 30% 80%, rgba(20, 184, 166, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="placement-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(20,184,166,0.04)" stroke-width="0.5"/><circle cx="10" cy="10" r="2" fill="rgba(99,102,241,0.02)"/></pattern></defs><rect width="100" height="100" fill="url(%23placement-grid)"/></svg>')
    `,
    zIndex: 0
  };

  const decorativeCircleStyles = {
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    width: '300px',
    height: '300px',
    background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    zIndex: 0
  };

  const placementContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1
  };

  const placementHeaderStyles = {
    textAlign: 'center',
    marginBottom: '64px'
  };

  const placementTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
    marginBottom: '16px',
    color: '#1f2937',
    background: 'linear-gradient(135deg, #14b8a6 0%, #4f46e5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const placementSubtitleStyles = {
    fontSize: '1.25rem',
    color: '#6b7280',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const placementStatsStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: window.innerWidth <= 768 ? '16px' : '32px',
    marginBottom: '64px'
  };

  const statItemStyles = (isHovered) => ({
    textAlign: 'center',
    padding: '24px',
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: isHovered 
      ? '0 8px 12px rgba(0, 0, 0, 0.1)' 
      : '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e5e7eb',
    transition: 'all 0.2s ease',
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
  });

  const statNumberStyles = {
    fontSize: window.innerWidth <= 768 ? '2.5rem' : '3rem',
    fontWeight: '800',
    color: '#14b8a6',
    display: 'block',
    marginBottom: '8px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const statLabelStyles = {
    fontSize: '0.875rem',
    color: '#6b7280',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const servicesGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: window.innerWidth <= 768 ? '16px' : '24px',
    marginBottom: '64px'
  };

  const serviceCardStyles = (isHovered) => ({
    position: 'relative',
    overflow: 'hidden',
    border: 'none',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: isHovered 
      ? '0 12px 24px rgba(0, 0, 0, 0.12), 0 25px 50px rgba(0, 0, 0, 0.15)'
      : '0 8px 16px rgba(0, 0, 0, 0.06), 0 20px 40px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    minHeight: '420px',
    display: 'flex',
    flexDirection: 'column',
    transform: isHovered ? 'translateY(-10px) scale(1.03)' : 'translateY(0) scale(1)',
    borderRadius: '16px'
  });

  const topBorderStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(135deg, #14b8a6 0%, #4f46e5 100%)'
  };

  const serviceHeaderStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '16px',
    padding: '24px',
    paddingBottom: '12px'
  };

  const serviceIconStyles = (isHovered) => ({
    fontSize: '2.5rem',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
    flexShrink: 0,
    transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
    transition: 'transform 0.2s ease'
  });

  const serviceTitleStyles = {
    fontSize: '1.125rem',
    color: '#1f2937',
    fontWeight: '600',
    margin: 0,
    lineHeight: '1.3',
    wordWrap: 'break-word',
    hyphens: 'auto'
  };

  const serviceDescriptionStyles = {
    marginBottom: '24px',
    color: '#6b7280',
    lineHeight: '1.6',
    padding: '0 24px',
    flex: 1
  };

  const serviceFeaturesStyles = {
    listStyle: 'none',
    marginBottom: '24px',
    padding: '0 24px',
    margin: '0 24px 24px'
  };

  const serviceFeatureStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
    fontSize: '0.875rem',
    color: '#6b7280'
  };

  const featureCheckStyles = {
    color: '#14b8a6',
    fontWeight: 'bold',
    fontSize: '1rem'
  };

  const serviceCtaStyles = {
    width: 'calc(100% - 48px)',
    margin: 'auto 24px 24px 24px'
  };

  const guaranteeSectionStyles = {
    background: 'linear-gradient(135deg, #14b8a6 0%, #4f46e5 100%)',
    color: '#ffffff',
    borderRadius: '16px',
    padding: '48px',
    textAlign: 'center',
    boxShadow: '0 25px 50px rgba(20, 184, 166, 0.25)',
    position: 'relative',
    overflow: 'hidden'
  };

  const guaranteePatternStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>')`,
    opacity: 0.3
  };

  const guaranteeContentStyles = {
    position: 'relative',
    zIndex: 1
  };

  const guaranteeTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '3rem',
    fontWeight: '700',
    marginBottom: '16px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  };

  const guaranteeTextStyles = {
    fontSize: window.innerWidth <= 768 ? '1rem' : '1.125rem',
    marginBottom: '32px',
    opacity: 0.9,
    lineHeight: '1.6',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const guaranteeActionsStyles = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    alignItems: window.innerWidth <= 768 ? 'center' : 'flex-start'
  };

  return (
    <section style={placementSectionStyles} id="placements">
      <div style={backgroundOverlayStyles} />
      <div style={decorativeCircleStyles} />
      
      <div style={placementContainerStyles}>
        <motion.div 
          ref={ref}
          style={placementHeaderStyles}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 style={placementTitleStyles}>Guaranteed Placement Services</h2>
          <p style={placementSubtitleStyles}>
            From training to placement, we ensure your success with 100% job guarantee
          </p>
        </motion.div>

        <motion.div 
          style={placementStatsStyles}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {[
            { count: placementCount, label: 'Successful Placements', suffix: '+' },
            { count: companiesCount, label: 'Partner Companies', suffix: '+' },
            { count: salaryCount, label: 'Highest Package', suffix: 'L+' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              style={statItemStyles(hoveredStat === index)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div style={statNumberStyles}>{stat.count}{stat.suffix}</div>
              <div style={statLabelStyles}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          style={servicesGridStyles}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <Card 
                style={serviceCardStyles(hoveredService === service.id)}
                hover={false}
              >
                <div style={topBorderStyles} />
                
                <div style={serviceHeaderStyles}>
                  <motion.div 
                    style={serviceIconStyles(hoveredService === service.id)}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 style={serviceTitleStyles}>{service.title}</h3>
                </div>
                
                <p style={serviceDescriptionStyles}>{service.description}</p>
                
                <ul style={serviceFeaturesStyles}>
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      style={serviceFeatureStyles}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <span style={featureCheckStyles}>✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={serviceCtaStyles}
                >
                  <Button variant="outline" style={{ width: '100%' }}>
                    Learn More
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          style={guaranteeSectionStyles}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <div style={guaranteePatternStyles} />
          <div style={guaranteeContentStyles}>
            <h3 style={guaranteeTitleStyles}>100% Job Guarantee</h3>
            <p style={guaranteeTextStyles}>
              We're so confident in our training that we offer a money-back guarantee 
              if you don't get placed within 6 months of course completion.
            </p>
            <div style={guaranteeActionsStyles}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" size="large">
                  Get Started Today
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="secondary" size="large">
                  View Success Stories
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementServices;