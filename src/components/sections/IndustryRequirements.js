import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../common/Card';

const IndustryRequirements = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const requirements = [
    {
      id: 1,
      industry: 'FinTech',
      title: 'Senior Full Stack Developer',
      company: 'Leading Financial Services',
      location: 'Bangalore, Hyderabad',
      experience: '3-5 years',
      package: '₹12-18 LPA',
      skills: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript'],
      urgency: 'Immediate',
      openings: 5
    },
    {
      id: 2,
      industry: 'Healthcare',
      title: 'Data Scientist',
      company: 'Healthcare Technology',
      location: 'Pune, Mumbai',
      experience: '2-4 years',
      package: '₹10-15 LPA',
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'R'],
      urgency: 'This Week',
      openings: 3
    },
    {
      id: 3,
      industry: 'E-commerce',
      title: 'DevOps Engineer',
      company: 'Major E-commerce Platform',
      location: 'Gurgaon, Bangalore',
      experience: '2-6 years',
      package: '₹15-25 LPA',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform'],
      urgency: 'Next Week',
      openings: 8
    },
    {
      id: 4,
      industry: 'EdTech',
      title: 'Frontend Developer',
      company: 'Education Technology',
      location: 'Remote/Bangalore',
      experience: '1-3 years',
      package: '₹8-12 LPA',
      skills: ['React', 'Vue.js', 'JavaScript', 'CSS3', 'HTML5'],
      urgency: 'This Month',
      openings: 4
    },
    {
      id: 5,
      industry: 'Cybersecurity',
      title: 'Security Analyst',
      company: 'Cybersecurity Firm',
      location: 'Chennai, Hyderabad',
      experience: '2-5 years',
      package: '₹12-20 LPA',
      skills: ['Ethical Hacking', 'CISSP', 'Network Security', 'Penetration Testing'],
      urgency: 'Immediate',
      openings: 6
    },
    {
      id: 6,
      industry: 'AI/ML',
      title: 'ML Engineer',
      company: 'AI Research Company',
      location: 'Bangalore, Delhi',
      experience: '3-7 years',
      package: '₹18-30 LPA',
      skills: ['PyTorch', 'TensorFlow', 'Python', 'MLOps', 'Computer Vision'],
      urgency: 'This Week',
      openings: 2
    }
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Immediate':
        return { bg: '#fee2e2', color: '#dc2626' };
      case 'This Week':
        return { bg: '#fef3c7', color: '#d97706' };
      case 'Next Week':
        return { bg: '#dbeafe', color: '#2563eb' };
      default:
        return { bg: '#d1fae5', color: '#059669' };
    }
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Animation keyframes for pulse effect
  const pulseKeyframes = `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
  `;

  // Main section styles
  const requirementsSectionStyles = {
    background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)',
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
      radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="diamond" width="20" height="20" patternUnits="userSpaceOnUse"><polygon points="10,2 18,10 10,18 2,10" fill="none" stroke="rgba(245,158,11,0.04)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23diamond)"/></svg>')
    `,
    zIndex: 0
  };

  const decorativeCircleStyles = {
    position: 'absolute',
    top: '15%',
    right: '10%',
    width: '250px',
    height: '250px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(50px)',
    zIndex: 0
  };

  const requirementsContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 16px' : '0 24px',
    position: 'relative',
    zIndex: 1
  };

  const requirementsHeaderStyles = {
    textAlign: 'center',
    marginBottom: '64px'
  };

  const requirementsTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
    marginBottom: '16px',
    color: '#1f2937',
    background: 'linear-gradient(135deg, #f59e0b 0%, #4f46e5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const requirementsSubtitleStyles = {
    fontSize: '1.25rem',
    color: '#6b7280',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const requirementsGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : 'repeat(auto-fit, minmax(380px, 1fr))',
    gap: window.innerWidth <= 768 ? '16px' : '24px',
    marginBottom: '64px'
  };

  const requirementCardStyles = (isHovered) => ({
    position: 'relative',
    overflow: 'hidden',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    border: isHovered ? '1px solid #4f46e5' : '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: isHovered 
      ? '0 8px 12px rgba(0, 0, 0, 0.1), 0 20px 25px rgba(0, 0, 0, 0.08)'
      : '0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 25px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
    borderRadius: '16px'
  });

  const requirementHeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: window.innerWidth <= 768 ? 'flex-start' : 'center',
    padding: '16px 24px',
    background: '#f9fafb',
    borderBottom: '1px solid #e5e7eb',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    gap: window.innerWidth <= 768 ? '8px' : '12px'
  };

  const requirementMetaStyles = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const industryTagStyles = {
    background: '#ede9fe',
    color: '#6366f1',
    padding: '4px 12px',
    borderRadius: '8px',
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const urgencyBadgeStyles = (urgency) => {
    const colors = getUrgencyColor(urgency);
    return {
      padding: '4px 12px',
      borderRadius: '8px',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      background: colors.bg,
      color: colors.color,
      animation: urgency === 'Immediate' ? 'pulse 2s infinite' : 'none'
    };
  };

  const openingsCountStyles = {
    fontSize: '0.875rem',
    color: '#6b7280',
    fontWeight: '500'
  };

  const requirementContentStyles = {
    padding: window.innerWidth <= 768 ? '16px' : '24px'
  };

  const jobTitleStyles = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '8px'
  };

  const companyNameStyles = {
    fontSize: '1rem',
    color: '#6b7280',
    marginBottom: '16px',
    fontWeight: '500'
  };

  const jobDetailsStyles = {
    marginBottom: '24px'
  };

  const detailItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    padding: '8px 0',
    borderBottom: '1px solid #f3f4f6'
  };

  const detailLabelStyles = {
    fontSize: '0.875rem',
    color: '#6b7280',
    fontWeight: '500'
  };

  const detailValueStyles = {
    fontSize: '0.875rem',
    color: '#1f2937',
    fontWeight: '600'
  };

  const skillsSectionStyles = {
    marginBottom: '24px'
  };

  const skillsTitleStyles = {
    fontSize: '0.875rem',
    color: '#1f2937',
    fontWeight: '600',
    marginBottom: '12px'
  };

  const skillsTagsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  };

  const skillTagStyles = (isHovered) => ({
    background: '#e0f2fe',
    color: '#0891b2',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '0.75rem',
    fontWeight: '500',
    border: '1px solid #7dd3fc',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.1s ease',
    cursor: 'pointer'
  });

  const requirementActionsStyles = {
    display: 'flex',
    gap: '12px',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row'
  };

  const actionButtonStyles = (variant = 'primary') => {
    const isPrimary = variant === 'primary';
    return {
      flex: 1,
      background: isPrimary 
        ? 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)' 
        : '#ffffff',
      color: isPrimary ? '#ffffff' : '#4f46e5',
      border: isPrimary ? 'none' : '2px solid #4f46e5',
      padding: '12px 16px',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: isPrimary ? '0 4px 6px rgba(79, 70, 229, 0.25)' : 'none',
      fontSize: '0.875rem'
    };
  };

  const ctaSectionStyles = {
    textAlign: 'center',
    padding: window.innerWidth <= 768 ? '32px' : '48px',
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 25px 50px rgba(245, 158, 11, 0.25)'
  };

  const ctaTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '3rem',
    fontWeight: '700',
    marginBottom: '16px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  };

  const ctaTextStyles = {
    fontSize: window.innerWidth <= 768 ? '1rem' : '1.125rem',
    marginBottom: '32px',
    opacity: 0.9,
    lineHeight: '1.6'
  };

  const ctaButtonStyles = {
    background: '#ffffff',
    color: '#f59e0b',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '12px',
    fontSize: window.innerWidth <= 768 ? '1rem' : '1.125rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
  };

  return (
    <>
      {/* Inject keyframes */}
      <style>{pulseKeyframes}</style>
      
      <section style={requirementsSectionStyles} id="requirements">
        <div style={backgroundOverlayStyles} />
        <div style={decorativeCircleStyles} />
        
        <div style={requirementsContainerStyles}>
          <motion.div 
            ref={ref}
            style={requirementsHeaderStyles}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 style={requirementsTitleStyles}>Current Industry Requirements</h2>
            <p style={requirementsSubtitleStyles}>
              Live job opportunities from our partner companies across various industries
            </p>
          </motion.div>

          <motion.div 
            style={requirementsGridStyles}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {requirements.map((req, index) => (
              <motion.div
                key={req.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredCard(req.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card 
                  style={requirementCardStyles(hoveredCard === req.id)}
                  hover={false}
                >
                  <div style={requirementHeaderStyles}>
                    <div style={requirementMetaStyles}>
                      <span style={industryTagStyles}>{req.industry}</span>
                      <span style={urgencyBadgeStyles(req.urgency)}>
                        {req.urgency}
                      </span>
                    </div>
                    <div style={openingsCountStyles}>
                      {req.openings} openings
                    </div>
                  </div>

                  <div style={requirementContentStyles}>
                    <h3 style={jobTitleStyles}>{req.title}</h3>
                    <p style={companyNameStyles}>{req.company}</p>
                    
                    <div style={jobDetailsStyles}>
                      <div style={detailItemStyles}>
                        <span style={detailLabelStyles}>📍 Location:</span>
                        <span style={detailValueStyles}>{req.location}</span>
                      </div>
                      <div style={detailItemStyles}>
                        <span style={detailLabelStyles}>💼 Experience:</span>
                        <span style={detailValueStyles}>{req.experience}</span>
                      </div>
                      <div style={{...detailItemStyles, borderBottom: 'none'}}>
                        <span style={detailLabelStyles}>💰 Package:</span>
                        <span style={detailValueStyles}>{req.package}</span>
                      </div>
                    </div>

                    <div style={skillsSectionStyles}>
                      <h4 style={skillsTitleStyles}>Required Skills:</h4>
                      <div style={skillsTagsStyles}>
                        {req.skills.map((skill, i) => (
                          <motion.span 
                            key={i} 
                            style={skillTagStyles(hoveredSkill === `${req.id}-${i}`)}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.1 }}
                            onMouseEnter={() => setHoveredSkill(`${req.id}-${i}`)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div style={requirementActionsStyles}>
                      <motion.button 
                        style={actionButtonStyles('primary')}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 6px 12px rgba(79, 70, 229, 0.4)'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply Now
                      </motion.button>
                      <motion.button 
                        style={actionButtonStyles('secondary')}
                        whileHover={{ 
                          scale: 1.05,
                          background: '#4f46e5',
                          color: '#ffffff'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            style={ctaSectionStyles}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div>
              <h3 style={ctaTitleStyles}>Ready to Apply?</h3>
              <p style={ctaTextStyles}>
                Join our training program and get direct access to these opportunities
              </p>
              <motion.button 
                style={ctaButtonStyles}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IndustryRequirements;