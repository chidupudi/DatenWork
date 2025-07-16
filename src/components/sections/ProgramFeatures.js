import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';

const FeaturedPrograms = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const navigate = useNavigate();
  const [hoveredProgram, setHoveredProgram] = useState(null);

  // Only keeping first 2 programs from the courses page
  const programs = [
    {
      id: 1,
      title: 'Full Stack Web Development Bootcamp',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML/CSS'],
      price: '₹2,49,000',
      originalPrice: '₹4,15,000',
      discount: '40% OFF',
      icon: '🚀',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      rating: 4.9,
      students: 1250,
      instructor: 'Sarah Johnson',
      nextStart: 'March 15, 2024',
      features: ['1-on-1 Mentorship', 'Job Placement', 'Personal Mentor', 'Lifetime Access']
    },
    {
      id: 2,
      title: 'React.js Mastery Course',
      duration: '10 weeks',
      level: 'Intermediate',
      technologies: ['React', 'Redux', 'TypeScript', 'Jest', 'React Router', 'Styled Components'],
      price: '₹2,49,000',
      originalPrice: '₹2,71,000',
      discount: '8% OFF',
      icon: '⚛️',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      rating: 4.8,
      students: 890,
      instructor: 'Michael Chen',
      nextStart: 'March 22, 2024',
      features: ['1-on-1 Sessions', 'Personal Mentor', 'Performance', 'Live Projects']
    }
  ];

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

  // Styles
  const sectionStyles = {
    background: 'transparent',
    padding: '80px 0',
    position: 'relative'
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

  const programsGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024 
      ? 'repeat(2, 1fr)' 
      : 'repeat(3, 1fr)',
    gap: '32px'
  };

  const programCardStyles = (isHovered) => ({
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: isHovered 
      ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
      : '0 10px 25px rgba(0, 0, 0, 0.08)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  });

  const programHeaderStyles = (gradient) => ({
    background: gradient,
    padding: '24px',
    position: 'relative',
    overflow: 'hidden'
  });

  const programIconStyles = {
    fontSize: '2.5rem',
    marginBottom: '12px',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
  };

  const programTitleStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '8px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  };

  const programDurationStyles = {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const discountBadgeStyles = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '700'
  };

  const programBodyStyles = {
    padding: '24px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  };

  const programLevelStyles = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const levelDotStyles = (level) => {
    const colors = {
      'Beginner to Advanced': '#10b981',
      'Intermediate': '#f59e0b',
      'Professional': '#3b82f6',
      'Advanced': '#ef4444'
    };
    
    return {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: colors[level] || '#6b7280'
    };
  };

  const technologiesStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px',
    flex: 1
  };

  const techBadgeStyles = {
    background: '#f3f4f6',
    color: '#4b5563',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500',
    border: '1px solid #e5e7eb'
  };

  const instructorStyles = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const featuresStyles = {
    marginBottom: '16px'
  };

  const featureListStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px'
  };

  const featureTagStyles = {
    background: '#f0fdf4',
    color: '#166534',
    padding: '4px 8px',
    borderRadius: '8px',
    fontSize: '0.7rem',
    fontWeight: '500',
    border: '1px solid #bbf7d0'
  };

  const priceContainerStyles = {
    marginBottom: '16px'
  };

  const programPriceStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '4px'
  };

  const originalPriceStyles = {
    fontSize: '1rem',
    color: '#9ca3af',
    textDecoration: 'line-through'
  };

  const programStatsStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    fontSize: '0.875rem',
    color: '#6b7280'
  };

  const nextStartStyles = {
    background: '#f0f9ff',
    color: '#0369a1',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '0.8rem',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: '16px',
    border: '1px solid #bae6fd'
  };

  const programButtonStyles = {
    width: '100%',
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
  };

  const programButtonHoverStyles = {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(79, 70, 229, 0.4)'
  };

  // View More Card Styles
  const viewMoreCardStyles = (isHovered) => ({
    background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: isHovered 
      ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
      : '0 10px 25px rgba(0, 0, 0, 0.08)',
    border: '2px dashed #6b7280',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '48px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
  });

  const viewMoreBackgroundPattern = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="2" fill="%234b5563"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>')`
  };

  const viewMoreIconContainerStyles = (isHovered) => ({
    width: '80px',
    height: '80px',
    background: isHovered 
      ? 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)'
      : 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)'
  });

  const viewMoreIconStyles = (isHovered) => ({
    fontSize: '2rem',
    color: isHovered ? 'white' : '#4f46e5',
    transition: 'all 0.3s ease'
  });

  const viewMoreTextStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '8px'
  };

  const viewMoreSubtextStyles = {
    fontSize: '1rem',
    color: '#6b7280',
    marginBottom: '24px'
  };

  const viewMoreButtonStyles = (isHovered) => ({
    padding: '12px 32px',
    background: isHovered 
      ? 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)'
      : 'white',
    color: isHovered ? 'white' : '#4f46e5',
    border: `2px solid ${isHovered ? 'transparent' : '#4f46e5'}`,
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: isHovered ? '0 6px 20px rgba(79, 70, 229, 0.4)' : 'none'
  });

  const arrowStyles = (isHovered) => ({
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
  });

  return (
    <section style={sectionStyles} id="featured-programs">
      <div style={containerStyles}>
        <motion.div 
          ref={ref}
          style={headerStyles}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 style={titleStyles}>
            Featured Programs
            <span style={titleUnderlineStyles}></span>
          </h2>
          <p style={subtitleStyles}>
            Comprehensive bootcamps and courses designed by industry experts for guaranteed success
          </p>
        </motion.div>

        <motion.div 
          style={programsGridStyles}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredProgram(program.id)}
              onMouseLeave={() => setHoveredProgram(null)}
            >
              <Card style={programCardStyles(hoveredProgram === program.id)} hover={false}>
                <div style={programHeaderStyles(program.gradient)}>
                  <div style={discountBadgeStyles}>{program.discount}</div>
                  <div style={programIconStyles}>{program.icon}</div>
                  <h3 style={programTitleStyles}>{program.title}</h3>
                  <div style={programDurationStyles}>
                    <span>⏱️</span>
                    <span>{program.duration}</span>
                  </div>
                </div>
                
                <div style={programBodyStyles}>
                  <div style={programLevelStyles}>
                    <span style={levelDotStyles(program.level)} />
                    <span>{program.level}</span>
                  </div>

                  <div style={instructorStyles}>
                    <span>👨‍🏫</span>
                    <span>Instructor: {program.instructor}</span>
                  </div>
                  
                  <div style={technologiesStyles}>
                    {program.technologies.map((tech, index) => (
                      <span key={index} style={techBadgeStyles}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={featuresStyles}>
                    <div style={featureListStyles}>
                      {program.features.map((feature, index) => (
                        <span key={index} style={featureTagStyles}>
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div style={priceContainerStyles}>
                    <div style={programPriceStyles}>{program.price}</div>
                    <div style={originalPriceStyles}>{program.originalPrice}</div>
                  </div>

                  <div style={programStatsStyles}>
                    <span>⭐ {program.rating}</span>
                    <span>👥 {program.students.toLocaleString()} students</span>
                  </div>

                  <div style={nextStartStyles}>
                    <strong>Next Batch:</strong> {program.nextStart}
                  </div>
                  
                  <motion.button
                    style={programButtonStyles}
                    whileHover={programButtonHoverStyles}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          ))}
          
          {/* View More Programs Card - 3rd Card */}
          <motion.div
            variants={cardVariants}
            onMouseEnter={() => setHoveredProgram('viewMore')}
            onMouseLeave={() => setHoveredProgram(null)}
            onClick={() => navigate('/courses')}
          >
            <div style={viewMoreCardStyles(hoveredProgram === 'viewMore')}>
              <div style={viewMoreBackgroundPattern} />
              
              <div style={viewMoreIconContainerStyles(hoveredProgram === 'viewMore')}>
                <span style={viewMoreIconStyles(hoveredProgram === 'viewMore')}>
                  {hoveredProgram === 'viewMore' ? '🎓' : '📚'}
                </span>
              </div>
              
              <h3 style={viewMoreTextStyles}>Explore All Programs</h3>
              <p style={viewMoreSubtextStyles}>12+ comprehensive courses available</p>
              
              <motion.button
                style={viewMoreButtonStyles(hoveredProgram === 'viewMore')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Programs
                <span style={arrowStyles(hoveredProgram === 'viewMore')}>→</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;