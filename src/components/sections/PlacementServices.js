import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
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
      description: 'Professional resume creation that highlights your skills and gets you noticed by top recruiters.',
      icon: '📄',
      features: ['ATS-optimized format', 'Industry-specific templates', 'Personal review session'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Interview Preparation',
      description: 'Comprehensive interview coaching with mock sessions and personalized feedback.',
      icon: '🎤',
      features: ['Technical interview prep', 'HR round coaching', 'Mock interview sessions'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Job Matching',
      description: 'AI-powered job matching based on your skills and career preferences.',
      icon: '🎯',
      features: ['Smart job recommendations', 'Salary negotiation support', 'Career path guidance'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Industry Connections',
      description: 'Direct connections with hiring managers and industry professionals.',
      icon: '🤝',
      features: ['Partner company network', 'Industry meetups', 'Mentorship programs'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      title: 'Skill Assessment',
      description: 'Comprehensive skill evaluation to identify strengths and improvement areas.',
      icon: '📊',
      features: ['Technical skill tests', 'Soft skills evaluation', 'Personalized learning path'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 6,
      title: 'Career Guidance',
      description: 'Expert career counseling to help you make informed decisions about your future.',
      icon: '🚀',
      features: ['One-on-one counseling', 'Industry insights', 'Growth strategy planning'],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const styles = {
    placementSection: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh'
    },
    
    backgroundOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
      `,
      zIndex: 0
    },

    decorativeElements: {
      position: 'absolute',
      top: '10%',
      right: '10%',
      width: '200px',
      height: '200px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      filter: 'blur(40px)',
      animation: 'float 6s ease-in-out infinite',
      zIndex: 0
    },

    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 20px',
      position: 'relative',
      zIndex: 1
    },

    header: {
      textAlign: 'center',
      marginBottom: '80px'
    },

    title: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#ffffff',
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      fontFamily: "'Inter', sans-serif"
    },

    subtitle: {
      fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
      color: 'rgba(255, 255, 255, 0.9)',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontWeight: '300'
    },

    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      marginBottom: '80px'
    },

    statItem: (isHovered) => ({
      textAlign: 'center',
      padding: '40px 20px',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      boxShadow: isHovered 
        ? '0 20px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.3)' 
        : '0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isHovered ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }),

    statNumber: {
      fontSize: 'clamp(3rem, 6vw, 4rem)',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'block',
      marginBottom: '10px',
      lineHeight: '1'
    },

    statLabel: {
      fontSize: '0.9rem',
      color: '#6b7280',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },

    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '30px',
      marginBottom: '80px',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '20px'
      }
    },

    serviceCard: (isHovered, gradient) => ({
      position: 'relative',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: isHovered 
        ? '0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.3)'
        : '0 15px 35px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isHovered ? 'translateY(-15px) scale(1.02)' : 'translateY(0) scale(1)',
      minHeight: '460px',
      display: 'flex',
      flexDirection: 'column'
    }),

    cardHeader: {
      padding: '30px 30px 20px',
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },

    cardIcon: (isHovered) => ({
      fontSize: '3rem',
      marginBottom: '15px',
      display: 'block',
      transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
      transition: 'transform 0.3s ease',
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
    }),

    cardTitle: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '10px',
      lineHeight: '1.3'
    },

    cardDescription: {
      color: '#6b7280',
      lineHeight: '1.6',
      fontSize: '0.95rem'
    },

    cardBody: {
      padding: '0 30px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },

    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0',
      flex: 1
    },

    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '12px',
      fontSize: '0.9rem',
      color: '#6b7280',
      padding: '8px 0'
    },

    featureCheck: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      flexShrink: 0
    },

    cardFooter: {
      padding: '20px 30px 30px'
    },

    cardButton: {
      width: '100%',
      padding: '12px 24px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '0.95rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
    },

    guaranteeSection: {
      background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
      borderRadius: '24px',
      padding: '60px 40px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },

    guaranteePattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>')`,
      opacity: 0.3
    },

    guaranteeContent: {
      position: 'relative',
      zIndex: 1
    },

    guaranteeTitle: {
      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '20px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
    },

    guaranteeText: {
      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '40px',
      lineHeight: '1.6',
      maxWidth: '600px',
      margin: '0 auto 40px'
    },

    guaranteeActions: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },

    '@keyframes float': {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-20px)' }
    }
  };

  // Add the animation to the page
  const animationStyle = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
  `;

  return (
    <>
      <style>{animationStyle}</style>
      <section style={styles.placementSection} id="placements">
        <div style={styles.backgroundOverlay} />
        <div style={styles.decorativeElements} />
        
        <div style={styles.container}>
          <motion.div 
            ref={ref}
            style={styles.header}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 style={styles.title}>Guaranteed Placement Services</h2>
            <p style={styles.subtitle}>
              From comprehensive training to guaranteed placement, we ensure your career success with our proven methodology
            </p>
          </motion.div>

          <motion.div 
            style={styles.statsGrid}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {[
              { count: placementCount, label: 'Successful Placements', suffix: '+' },
              { count: companiesCount, label: 'Partner Companies', suffix: '+' },
              { count: salaryCount, label: 'Highest Package', suffix: 'L+' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                style={styles.statItem(hoveredStat === index)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div style={styles.statNumber}>{stat.count}{stat.suffix}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            style={styles.servicesGrid}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div style={styles.serviceCard(hoveredService === service.id, service.gradient)}>
                  <div style={styles.cardHeader}>
                    <motion.div 
                      style={styles.cardIcon(hoveredService === service.id)}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 style={styles.cardTitle}>{service.title}</h3>
                    <p style={styles.cardDescription}>{service.description}</p>
                  </div>
                  
                  <div style={styles.cardBody}>
                    <ul style={styles.featuresList}>
                      {service.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          style={styles.featureItem}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                          <span style={styles.featureCheck}>✓</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div style={styles.cardFooter}>
                    <motion.button
                      style={styles.cardButton}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.6)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            style={styles.guaranteeSection}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div style={styles.guaranteePattern} />
            <div style={styles.guaranteeContent}>
              <h3 style={styles.guaranteeTitle}>100% Job Guarantee</h3>
              <p style={styles.guaranteeText}>
                We're so confident in our training methodology that we offer a complete money-back guarantee 
                if you don't secure a job within 6 months of course completion.
              </p>
              <div style={styles.guaranteeActions}>
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
    </>
  );
};

export default PlacementServices;