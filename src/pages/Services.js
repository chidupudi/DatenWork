import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
// Mock components since they're not available in this environment

const Card = ({ children, style, className, hover = true }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

const Button = ({ variant, size, children, ...props }) => {
  const baseStyles = {
    padding: size === 'large' ? '16px 32px' : '12px 24px',
    fontSize: size === 'large' ? '16px' : '14px',
    fontWeight: '600',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
      color: '#ffffff',
      boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)'
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(10px)'
    },
    outline: {
      background: 'transparent',
      color: '#4f46e5',
      border: '2px solid #4f46e5'
    }
  };

  return (
    <button 
      style={{...baseStyles, ...variantStyles[variant]}}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.4)';
        } else if (variant === 'outline') {
          e.target.style.background = '#4f46e5';
          e.target.style.color = '#ffffff';
        }
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        if (variant === 'primary') {
          e.target.style.boxShadow = '0 4px 15px rgba(30, 64, 175, 0.3)';
        } else if (variant === 'outline') {
          e.target.style.background = 'transparent';
          e.target.style.color = '#4f46e5';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredCert, setHoveredCert] = useState(null);

  // Hero section styles with grid background
  const heroSectionStyles = {
    padding: '10px 0 20px 10px',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '2vh', 
    height: '90vh',
    display: 'flex',
    alignItems: 'center'
  };

  // Grid pattern overlay (exact same as Hero component)
  const heroOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(30, 64, 175, 0.08) 0%, transparent 50%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>')
    `,
    zIndex: 0
  };

  // Dark overlay for text readability
  const heroDarkOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(15, 23, 42, 0.4)',
    zIndex: 0
  };

  const heroContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxHeight: '80vh',
  };

  const heroTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2.5rem' : 'clamp(2.5rem, 5vw, 3.8rem)',
    fontWeight: '700',
    lineHeight: '1.1',
    marginBottom: '24px',
    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
  };

  const heroSubtitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.125rem' : '1.3rem',
    marginBottom: '48px',
    color: '#e2e8f0',
    lineHeight: '1.6',
    fontWeight: '400',
    opacity: '0.95',
    maxWidth: '600px',
    margin: '0 auto 48px auto'
  };

  // Main services grid in hero
  const servicesGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
    gap: '32px',
    marginTop: '20px'
  };

  const serviceCardStyles = (isHovered) => ({
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(20px)',
    border: isHovered ? '2px solid rgba(59, 130, 246, 0.5)' : '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '20px',
    
    padding: '12px 24px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
    boxShadow: isHovered 
      ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
      : '0 10px 20px rgba(0, 0, 0, 0.2)'
  });

  const serviceIconStyles = {
    fontSize: '4rem',
    marginBottom: '24px',
    display: 'block'
  };

  const serviceTitleStyles = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#ffffff'
  };

  const serviceDescStyles = {
    color: '#cbd5e1',
    lineHeight: '1.6',
    fontSize: '0.95rem'
  };

  // Certifications section styles
  const certSectionStyles = {
    padding: window.innerWidth <= 768 ? '60px 0' : '80px 0',
    background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
    position: 'relative'
  };

  const certContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 20px' : '0 24px'
  };

  const certHeaderStyles = {
    textAlign: 'center',
    marginBottom: window.innerWidth <= 768 ? '48px' : '64px'
  };

  const certTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
    fontWeight: '700',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const certContentStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
    gap: window.innerWidth <= 768 ? '32px' : '48px',
    alignItems: 'center'
  };

  const certInfoStyles = {
    order: window.innerWidth <= 768 ? 2 : 1
  };

  const certLogosStyles = {
    order: window.innerWidth <= 768 ? 1 : 2,
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: window.innerWidth <= 768 ? '16px' : '24px'
  };

  const certLogoStyles = (isHovered) => ({
    background: '#ffffff',
    padding: window.innerWidth <= 768 ? '16px' : '24px',
    borderRadius: '16px',
    boxShadow: isHovered 
      ? '0 8px 16px rgba(0, 0, 0, 0.1)' 
      : '0 4px 8px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: window.innerWidth <= 768 ? '80px' : '100px',
    border: '1px solid #e5e7eb',
    cursor: 'pointer'
  });

  // IT Consulting section styles
  const consultingSectionStyles = {
    padding: window.innerWidth <= 768 ? '60px 0' : '80px 0',
    background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
    position: 'relative'
  };

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

  const itemVariants = {
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

  const mainServices = [
    {
      id: 1,
      icon: '🎓',
      title: 'Professional Training',
      description: 'Comprehensive programs to bridge the gap between academic knowledge and real-world skills.'
    },
    {
      id: 2,
      icon: '🚀',
      title: 'Elite Placement',
      description: 'Your gateway to top-tier tech companies with strategic career placement services.'
    },
    {
      id: 3,
      icon: '⚙️',
      title: 'Product Engineering',
      description: 'Bespoke services to build, launch, and scale your robust and beautiful digital products.'
    },
    {
      id: 4,
      icon: '💼',
      title: 'IT Consulting',
      description: 'End-to-end technology consulting to help enterprises modernize, scale, and stay competitive.'
    }
  ];

  const certifications = [
    { id: 1, name: 'AWS', logo: '☁️', desc: 'Amazon Web Services' },
    { id: 2, name: 'Salesforce', logo: '⚡', desc: 'CRM Platform' },
    { id: 3, name: 'Microsoft', logo: '🪟', desc: 'Azure & Office 365' },
    { id: 4, name: 'Google Cloud', logo: '🌤️', desc: 'GCP Certification' },
    { id: 5, name: 'Oracle', logo: '🔶', desc: 'Database & Cloud' },
    { id: 6, name: 'IBM', logo: '🔵', desc: 'Cloud & AI Services' }
  ];

  return (
    <div className="services-page">
      <Header />
      
      {/* Hero Section with Grid Pattern and Integrated Services */}
      <section style={heroSectionStyles}>
        <div style={heroOverlayStyles} />
        <div style={heroDarkOverlayStyles} />
        
        <motion.div 
          style={heroContainerStyles}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            style={heroTitleStyles}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Integrated Tech Solutions
          </motion.h1>
          
          <motion.p 
            style={heroSubtitleStyles}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Driving growth through expert training, strategic placements, and robust engineering
          </motion.p>

          <motion.div 
            style={servicesGridStyles}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {mainServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <Card style={serviceCardStyles(hoveredService === service.id)}>
                  <span style={serviceIconStyles}>{service.icon}</span>
                  <h3 style={serviceTitleStyles}>{service.title}</h3>
                  <p style={serviceDescStyles}>{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Certificate Assistance Section */}
      <section style={certSectionStyles} ref={ref}>
        <div style={certContainerStyles}>
          <motion.div 
            style={certHeaderStyles}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={certTitleStyles}>Certificate Assistance</h2>
            <p style={{ fontSize: window.innerWidth <= 768 ? '1rem' : '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Boost your career with industry-recognized certifications from leading technology companies
            </p>
          </motion.div>

          <motion.div 
            style={certContentStyles}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={certInfoStyles}>
              <h3 style={{ fontSize: window.innerWidth <= 768 ? '1.5rem' : '2rem', fontWeight: '600', marginBottom: '24px', color: '#1f2937' }}>
                Why Certifications Matter
              </h3>
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.25rem', fontWeight: '600', marginBottom: '12px', color: '#4f46e5' }}>
                  Career Advancement
                </h4>
                <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem' }}>
                  Industry certifications validate your skills and significantly increase your market value, 
                  leading to better job opportunities and higher salaries.
                </p>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.25rem', fontWeight: '600', marginBottom: '12px', color: '#4f46e5' }}>
                  Industry Recognition
                </h4>
                <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem' }}>
                  Certifications from AWS, Salesforce, Microsoft, and other leaders are globally recognized 
                  and preferred by employers worldwide.
                </p>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.25rem', fontWeight: '600', marginBottom: '12px', color: '#4f46e5' }}>
                  Skill Validation
                </h4>
                <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem' }}>
                  Prove your expertise with hands-on, practical certifications that demonstrate 
                  real-world problem-solving abilities.
                </p>
              </div>
              <Button variant="primary" size={window.innerWidth <= 768 ? "medium" : "large"}>
                Start Your Certification Journey
              </Button>
            </div>

            <div style={certLogosStyles}>
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  style={certLogoStyles(hoveredCert === cert.id)}
                  whileHover={{ y: -4, scale: 1.05 }}
                  onMouseEnter={() => setHoveredCert(cert.id)}
                  onMouseLeave={() => setHoveredCert(null)}
                >
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: window.innerWidth <= 768 ? '2rem' : '3rem', marginBottom: '8px' }}>{cert.logo}</div>
                    <div style={{ fontWeight: '600', color: '#1f2937', fontSize: window.innerWidth <= 768 ? '0.75rem' : '0.875rem' }}>{cert.name}</div>
                    <div style={{ color: '#6b7280', fontSize: window.innerWidth <= 768 ? '0.7rem' : '0.75rem' }}>{cert.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* IT Consulting & Workforce Solutions - Completely Redesigned */}
      <section style={consultingSectionStyles}>
        <div style={certContainerStyles}>
          <motion.div 
            style={certHeaderStyles}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={certTitleStyles}>IT Consulting & Workforce Solutions</h2>
            <p style={{ fontSize: window.innerWidth <= 768 ? '1rem' : '1.125rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto' }}>
              Strategic technology consulting and skilled workforce solutions to help enterprises scale, 
              modernize, and achieve their digital transformation goals through qualified IT professionals.
            </p>
          </motion.div>

          
          {/* Service Categories */}
          <motion.div 
            style={{ marginBottom: window.innerWidth <= 768 ? '48px' : '64px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{ 
              fontSize: window.innerWidth <= 768 ? '1.8rem' : '2.2rem', 
              fontWeight: '600', 
              textAlign: 'center', 
              marginBottom: window.innerWidth <= 768 ? '32px' : '48px',
              color: '#1f2937' 
            }}>
              Our Service Categories
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
              gap: window.innerWidth <= 768 ? '20px' : '24px'
            }}>
              {[
                {
                  icon: '👨‍💻',
                  title: 'Software Development',
                  description: 'Full-stack developers, mobile app developers, and specialized technology experts.',
                  skills: ['React/Angular/Vue', 'Node.js/Python/Java', 'Mobile Development', 'Cloud Architecture']
                },
                {
                  icon: '🔧',
                  title: 'Technical Operations',
                  description: 'DevOps engineers, system administrators, and infrastructure specialists.',
                  skills: ['DevOps/CI-CD', 'Cloud Infrastructure', 'Database Management', 'Security Implementation']
                },
                {
                  icon: '📊',
                  title: 'Data & Analytics',
                  description: 'Data scientists, analysts, and business intelligence professionals.',
                  skills: ['Data Science/ML', 'Business Intelligence', 'Data Engineering', 'Analytics Platforms']
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: '#ffffff',
                    border: '2px solid #e5e7eb',
                    borderRadius: '16px',
                    padding: window.innerWidth <= 768 ? '20px' : '24px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.02,
                    borderColor: '#4f46e5',
                    boxShadow: '0 8px 16px rgba(79, 70, 229, 0.15)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div style={{ 
                    fontSize: window.innerWidth <= 768 ? '2.5rem' : '3rem', 
                    textAlign: 'center', 
                    marginBottom: '16px' 
                  }}>
                    {category.icon}
                  </div>
                  <h4 style={{ 
                    fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.25rem', 
                    fontWeight: '600', 
                    marginBottom: '12px', 
                    color: '#1f2937',
                    textAlign: 'center'
                  }}>
                    {category.title}
                  </h4>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.6', 
                    marginBottom: '16px',
                    fontSize: window.innerWidth <= 768 ? '0.875rem' : '0.95rem',
                    textAlign: 'center'
                  }}>
                    {category.description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '8px', 
                    justifyContent: 'center' 
                  }}>
                    {category.skills.map((skill, i) => (
                      <span key={i} style={{
                        background: '#f0f9ff',
                        color: '#0369a1',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: window.innerWidth <= 768 ? '0.7rem' : '0.75rem',
                        fontWeight: '500',
                        border: '1px solid #bae6fd'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Flow */}
          <motion.div 
            style={{ marginBottom: window.innerWidth <= 768 ? '48px' : '64px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{ 
              fontSize: window.innerWidth <= 768 ? '1.8rem' : '2.2rem', 
              fontWeight: '600', 
              textAlign: 'center', 
              marginBottom: window.innerWidth <= 768 ? '32px' : '48px',
              color: '#1f2937' 
            }}>
              Our Engagement Process
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(4, 1fr)',
              gap: window.innerWidth <= 768 ? '20px' : '16px',
              position: 'relative'
            }}>
              {[
                { step: '01', title: 'Requirement Analysis', desc: 'Understanding your project needs and skill requirements' },
                { step: '02', title: 'Talent Matching', desc: 'Screening and selecting the best-fit professionals' },
                { step: '03', title: 'Quick Deployment', desc: 'Onboarding and integration ' },
                { step: '04', title: 'Ongoing Support', desc: 'Continuous monitoring and performance optimization' }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: '#ffffff',
                    border: '2px solid #f3f4f6',
                    borderRadius: '12px',
                    padding: window.innerWidth <= 768 ? '20px' : '20px 16px',
                    textAlign: 'center',
                    position: 'relative'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div style={{
                    width: window.innerWidth <= 768 ? '40px' : '48px',
                    height: window.innerWidth <= 768 ? '40px' : '48px',
                    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
                    margin: '0 auto 16px auto'
                  }}>
                    {process.step}
                  </div>
                  <h4 style={{ 
                    fontSize: window.innerWidth <= 768 ? '1rem' : '1.1rem', 
                    fontWeight: '600', 
                    marginBottom: '8px', 
                    color: '#1f2937' 
                  }}>
                    {process.title}
                  </h4>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.5',
                    fontSize: window.innerWidth <= 768 ? '0.8rem' : '0.875rem'
                  }}>
                    {process.desc}
                  </p>
                  {/* Connecting Arrow for Desktop */}
                  {index < 3 && window.innerWidth > 768 && (
                    <div style={{
                      position: 'absolute',
                      top: '24px',
                      right: '-24px',
                      fontSize: '1.5rem',
                      color: '#14b8a6',
                      zIndex: 1
                    }}>
                      →
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service Packages */}
          <motion.div 
            style={{ marginBottom: window.innerWidth <= 768 ? '48px' : '64px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{ 
              fontSize: window.innerWidth <= 768 ? '1.8rem' : '2.2rem', 
              fontWeight: '600', 
              textAlign: 'center', 
              marginBottom: window.innerWidth <= 768 ? '32px' : '48px',
              color: '#1f2937' 
            }}>
              Engagement Models
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
              gap: window.innerWidth <= 768 ? '20px' : '24px'
            }}>
              {[
                {
                  title: 'Project-Based',
                  duration: '3-12 months',
                  ideal: 'Specific deliverables',
                  features: ['Dedicated project team', 'Fixed timeline & scope', 'Result-oriented approach', 'Performance guarantees'],
                  popular: false
                },
                {
                  title: 'Staff Augmentation',
                  duration: '1-24 months',
                  ideal: 'Scaling existing teams',
                  features: ['Flexible team size', 'Quick ramp-up', 'Direct integration', 'Ongoing support'],
                  popular: true
                },
                {
                  title: 'Dedicated Teams',
                  duration: '6+ months',
                  ideal: 'Long-term partnerships',
                  features: ['Full-time commitment', 'Custom team structure', 'Continuous collaboration', 'Scalable solutions'],
                  popular: false
                }
              ].map((model, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: '#ffffff',
                    border: model.popular ? '3px solid #4f46e5' : '2px solid #e5e7eb',
                    borderRadius: '16px',
                    padding: window.innerWidth <= 768 ? '24px 20px' : '32px 24px',
                    position: 'relative',
                    boxShadow: model.popular ? '0 8px 16px rgba(79, 70, 229, 0.15)' : '0 4px 8px rgba(0, 0, 0, 0.05)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  {model.popular && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#4f46e5',
                      color: '#ffffff',
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      Most Popular
                    </div>
                  )}
                  
                  <h4 style={{ 
                    fontSize: window.innerWidth <= 768 ? '1.3rem' : '1.5rem', 
                    fontWeight: '600', 
                    marginBottom: '8px', 
                    color: '#1f2937',
                    textAlign: 'center'
                  }}>
                    {model.title}
                  </h4>
                  
                  <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <div style={{ color: '#4f46e5', fontWeight: '600', fontSize: '0.9rem' }}>
                      Duration: {model.duration}
                    </div>
                    <div style={{ color: '#6b7280', fontSize: '0.85rem' }}>
                      Ideal for: {model.ideal}
                    </div>
                  </div>
                  
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                    {model.features.map((feature, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '8px',
                        fontSize: window.innerWidth <= 768 ? '0.8rem' : '0.875rem',
                        color: '#6b7280'
                      }}>
                        <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={model.popular ? "primary" : "outline"} 
                    style={{ width: '100%' }}
                  >
                    Get Started
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;