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

  // GOOGLE FORM URL - centralized
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe2mqWXkm0W43PxgYna5nFPwCOMshtsYhc9NPEBQCocdTiCEQ/viewform?usp=header";
  
  // Function to handle Contact Us button clicks
  const handleContactClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

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
        staggerChildren: 0.1,
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
        duration: 0.4,
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
    maxWidth: '1400px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 16px' : '0 24px',
    position: 'relative',
    zIndex: 1
  };

  const requirementsHeaderStyles = {
    textAlign: 'center',
    marginBottom: '50px'
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
      : window.innerWidth <= 1024
      ? 'repeat(2, 1fr)'
      : 'repeat(3, 1fr)',
    gap: window.innerWidth <= 768 ? '16px' : '20px',
    marginBottom: '50px',
    maxWidth: '1300px',
    margin: '0 auto 50px auto'
  };

  const requirementCardStyles = (isHovered) => ({
    position: 'relative',
    overflow: 'hidden',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    border: isHovered ? '1px solid #4f46e5' : '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: isHovered 
      ? '0 6px 10px rgba(0, 0, 0, 0.1), 0 15px 20px rgba(0, 0, 0, 0.08)'
      : '0 3px 5px rgba(0, 0, 0, 0.05), 0 8px 20px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    transform: isHovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
    borderRadius: '12px',
    height: 'auto',
    maxHeight: '440px',
    display: 'flex',
    flexDirection: 'column'
  });

  const requirementHeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: window.innerWidth <= 768 ? 'flex-start' : 'center',
    padding: '12px 16px',
    background: '#f9fafb',
    borderBottom: '1px solid #e5e7eb',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    gap: window.innerWidth <= 768 ? '6px' : '8px',
    minHeight: '50px'
  };

  const requirementMetaStyles = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const industryTagStyles = {
    background: '#ede9fe',
    color: '#6366f1',
    padding: '3px 8px',
    borderRadius: '6px',
    fontSize: '0.7rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const urgencyBadgeStyles = (urgency) => {
    const colors = getUrgencyColor(urgency);
    return {
      padding: '3px 8px',
      borderRadius: '6px',
      fontSize: '0.7rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      background: colors.bg,
      color: colors.color,
      animation: urgency === 'Immediate' ? 'pulse 2s infinite' : 'none'
    };
  };

  const openingsCountStyles = {
    fontSize: '0.8rem',
    color: '#6b7280',
    fontWeight: '500'
  };

  const requirementContentStyles = {
    padding: window.innerWidth <= 768 ? '12px 16px' : '16px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const jobTitleStyles = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '6px',
    lineHeight: '1.3'
  };

  const companyNameStyles = {
    fontSize: '0.9rem',
    color: '#6b7280',
    marginBottom: '12px',
    fontWeight: '500'
  };

  const jobDetailsStyles = {
    marginBottom: '16px'
  };

  const detailItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
    padding: '4px 0',
    borderBottom: '1px solid #f3f4f6'
  };

  const detailLabelStyles = {
    fontSize: '0.8rem',
    color: '#6b7280',
    fontWeight: '500'
  };

  const detailValueStyles = {
    fontSize: '0.8rem',
    color: '#1f2937',
    fontWeight: '600'
  };

  const skillsSectionStyles = {
    marginBottom: '16px'
  };

  const skillsTitleStyles = {
    fontSize: '0.8rem',
    color: '#1f2937',
    fontWeight: '600',
    marginBottom: '8px'
  };

  const skillsTagsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    minHeight: '60px',
    alignItems: 'flex-start'
  };

  const skillTagStyles = (isHovered) => ({
    background: isHovered 
      ? 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)'
      : 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
    color: isHovered ? '#ffffff' : '#475569',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '0.75rem',
    fontWeight: '600',
    border: isHovered ? 'none' : '1px solid #cbd5e1',
    transform: isHovered ? 'scale(1.05) translateY(-1px)' : 'scale(1)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    boxShadow: isHovered 
      ? '0 4px 12px rgba(79, 70, 229, 0.4)' 
      : '0 1px 3px rgba(0, 0, 0, 0.1)',
    whiteSpace: 'nowrap'
  });

  const requirementActionsStyles = {
    display: 'flex',
    gap: '8px',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    marginTop: 'auto'
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
      padding: '8px 12px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: isPrimary ? '0 3px 5px rgba(79, 70, 229, 0.25)' : 'none',
      fontSize: '0.8rem'
    };
  };

  const responsiveStyles = `
    @media (max-width: 1200px) {
      .requirements-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 18px !important;
      }
    }
    
    @media (max-width: 768px) {
      .requirements-grid {
        grid-template-columns: 1fr !important;
        gap: 16px !important;
      }
      
      .requirement-card {
        max-height: none !important;
        height: auto !important;
      }
    }
  `;

  return (
    <>
      <style>
        {pulseKeyframes}
        {responsiveStyles}
      </style>
      
      <section style={requirementsSectionStyles} id="requirements">
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
              Live job opportunities from our partner companies across various industries. Get job-ready through our individual, batch, and corporate training programs
            </p>
          </motion.div>

          <motion.div 
            style={requirementsGridStyles}
            className="requirements-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {requirements.map((req, index) => (
              <motion.div
                key={req.id}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredCard(req.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card 
                  style={requirementCardStyles(hoveredCard === req.id)}
                  className="requirement-card"
                  hover={false}
                >
                  <div style={requirementHeaderStyles}>
                    <div style={requirementMetaStyles}>
                      <span style={urgencyBadgeStyles(req.urgency)}>
                        {req.urgency}
                      </span>
                    </div>
                    <div style={openingsCountStyles}>
                      {req.openings} openings
                    </div>
                  </div>

                  <div style={requirementContentStyles}>
                    <div>
                      <h3 style={jobTitleStyles}>{req.title}</h3>
                      <p style={companyNameStyles}>{req.company}</p>
                      
                      <div style={jobDetailsStyles}>
                        <div style={detailItemStyles}>
                          <span style={detailLabelStyles}>💰 Package:</span>
                          <span style={detailValueStyles}>{req.package}</span>
                        </div>
                        <div style={detailItemStyles}>
                          <span style={detailLabelStyles}>💼 Experience:</span>
                          <span style={detailValueStyles}>{req.experience}</span>
                        </div>
                        <div style={{...detailItemStyles, borderBottom: 'none'}}>
                           <span style={detailLabelStyles}>📍 Location:</span>
                          <span style={detailValueStyles}>{req.location}</span>
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
                    </div>

                    <div style={requirementActionsStyles}>
                      <motion.button 
                        style={actionButtonStyles('primary')}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: '0 5px 10px rgba(79, 70, 229, 0.4)'
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleContactClick}
                      >
                        Contact Us
                      </motion.button>
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

export default IndustryRequirements;