import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import Card from '../components/common/Card';

const Courses = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  const categories = [
    { id: 'all', name: 'All Courses', count: 12 },
    { id: 'frontend', name: 'Frontend', count: 4 },
    { id: 'backend', name: 'Backend', count: 3 },
    { id: 'fullstack', name: 'Full Stack', count: 2 },
    { id: 'data', name: 'Data Science', count: 2 },
    { id: 'mobile', name: 'Mobile', count: 1 }
  ];

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development Bootcamp',
      category: 'fullstack',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      price: '₹2,49,000',
      originalPrice: '₹4,15,000',
      rating: 4.9,
      students: 1250,
      description: 'Master modern web development with React, Node.js, and MongoDB. Build real-world projects and get job-ready.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML/CSS'],
      features: ['1-on-1 Mentorship', 'Job Placement', 'Personal Mentor', 'Lifetime Access'],
      instructor: 'Sarah Johnson',
      nextStart: 'March 15, 2024',
      emoji: '🚀'
    },
    {
      id: 2,
      title: 'React.js Mastery Course',
      category: 'frontend',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '₹2,49,000',
      originalPrice: '₹2,71,000',
      rating: 4.8,
      students: 890,
      description: 'Deep dive into React.js ecosystem including hooks, context, Redux, and testing. Build production-ready applications.',
      technologies: ['React', 'Redux', 'TypeScript', 'Jest', 'React Router', 'Styled Components'],
      features: ['1-on-1 Sessions', 'Personal Mentor', 'Performance', 'Live Projects'],
      instructor: 'Michael Chen',
      nextStart: 'March 22, 2024',
      emoji: '⚛️'
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      category: 'backend',
      duration: '12 weeks',
      level: 'Intermediate',
      price: '₹2,49,000',
      originalPrice: '₹2,66,000',
      rating: 4.7,
      students: 654,
      description: 'Build scalable backend applications with Node.js, Express, and databases. Learn API development and deployment.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
      features: ['API Design', 'Database Design', 'Security', 'Deployment'],
      instructor: 'David Park',
      nextStart: 'March 29, 2024',
      emoji: '⚙️'
    },
    {
      id: 4,
      title: 'Data Science with Python',
      category: 'data',
      duration: '14 weeks',
      level: 'Beginner to Advanced',
      price: '₹2,49,000',
      originalPrice: '₹3,24,000',
      rating: 4.9,
      students: 543,
      description: 'Master data science fundamentals, machine learning, and data visualization with Python and popular libraries.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Matplotlib'],
      features: ['Real Datasets', 'ML Projects', 'Data Visualization', 'Career Support'],
      instructor: 'Dr. Emily Rodriguez',
      nextStart: 'April 5, 2024',
      emoji: '📊'
    },
    {
      id: 5,
      title: 'Modern JavaScript Fundamentals',
      category: 'frontend',
      duration: '8 weeks',
      level: 'Beginner',
      price: '₹2,49,000',
      originalPrice: '₹2,68,000',
      rating: 4.6,
      students: 1120,
      description: 'Learn JavaScript from basics to advanced concepts including ES6+, async programming, and DOM manipulation.',
      technologies: ['JavaScript', 'ES6+', 'DOM', 'Fetch API', 'Async/Await', 'Modules'],
      features: ['Interactive Coding', 'Projects', 'Code Review', 'Community'],
      instructor: 'Alex Thompson',
      nextStart: 'March 18, 2024',
      emoji: '💻'
    },
    {
      id: 6,
      title: 'React Native Mobile Development',
      category: 'mobile',
      duration: '12 weeks',
      level: 'Intermediate',
      price: '₹2,49,000',
      originalPrice: '₹2,83,000',
      rating: 4.8,
      students: 432,
      description: 'Build cross-platform mobile apps with React Native. Learn navigation, state management, and app deployment.',
      technologies: ['React Native', 'Expo', 'Redux', 'Navigation', 'Firebase', 'App Store'],
      features: ['Cross Platform', 'Native Features', 'App Store Deploy', 'Portfolio Apps'],
      instructor: 'Lisa Wang',
      nextStart: 'April 12, 2024',
      emoji: '📱'
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

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(course => course.category === activeCategory);

  // Animation keyframes for pulse effect
  const pulseKeyframes = `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
  `;

  // Main section styles (from IndustryRequirements)
  const keyColor = '#413C58';
  const coursesSectionStyles = {
    background: `linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)`,
    padding: '80px 0',
    position: 'relative',
    overflow: 'hidden'
  };

  // Background patterns (from IndustryRequirements)
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

  const coursesContainerStyles = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 16px' : '0 24px',
    position: 'relative',
    zIndex: 1
  };

  const coursesHeaderStyles = {
    textAlign: 'center',
    marginBottom: '50px'
  };

  const coursesTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
    marginBottom: '16px',
    color: keyColor,
    fontWeight: '700',
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: '1px',
    textShadow: '0 2px 8px rgba(65,60,88,0.08)'
  };

  const coursesSubtitleStyles = {
    fontSize: '1.25rem',
    color: '#6b7280',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontWeight: '500',
    letterSpacing: '0.5px'
  };

  // Grid styles - EXACTLY 3 columns
  const coursesGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024
      ? 'repeat(2, 1fr)'
      : 'repeat(3, 1fr)', // Exactly 3 columns
    gap: window.innerWidth <= 768 ? '16px' : '24px',
    marginBottom: '50px',
    maxWidth: '1300px',
    margin: '0 auto 50px auto'
  };

  // Card styles (from IndustryRequirements)
  const courseCardStyles = (isHovered) => ({
    position: 'relative',
    overflow: 'hidden',
    background: 'rgba(255, 255, 255, 0.97)',
    backdropFilter: 'blur(10px)',
    border: isHovered ? `2px solid ${keyColor}` : '1px solid rgba(65,60,88,0.08)',
    boxShadow: isHovered 
      ? '0 8px 24px rgba(65,60,88,0.13)' 
      : '0 2px 8px rgba(65,60,88,0.07)',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    transform: isHovered ? 'translateY(-6px) scale(1.015)' : 'translateY(0) scale(1)',
    borderRadius: '16px',
    height: 'auto',
    maxHeight: '700px',
    display: 'flex',
    flexDirection: 'column'
  });

  // Header styles (from IndustryRequirements)
  const courseHeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: window.innerWidth <= 768 ? 'flex-start' : 'center',
    padding: '12px 16px',
    background: '#f3f0fa',
    borderBottom: `1.5px solid ${keyColor}22`,
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    gap: window.innerWidth <= 768 ? '6px' : '8px',
    minHeight: '50px'
  };

  const courseMetaStyles = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const levelTagStyles = {
    background: `${keyColor}11`,
    color: keyColor,
    padding: '3px 8px',
    borderRadius: '6px',
    fontSize: '0.7rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    border: `1px solid ${keyColor}33`
  };

  const studentsCountStyles = {
    fontSize: '0.8rem',
    color: '#6b7280',
    fontWeight: '500'
  };

  // Content styles (from IndustryRequirements)
  const courseContentStyles = {
    padding: window.innerWidth <= 768 ? '12px 16px' : '16px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const courseTitleStyles = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '6px',
    lineHeight: '1.3',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const instructorStyles = {
    fontSize: '0.9rem',
    color: '#6b7280',
    marginBottom: '12px',
    fontWeight: '500'
  };

  const descriptionStyles = {
    fontSize: '0.85rem',
    color: '#4b5563',
    lineHeight: '1.4',
    marginBottom: '16px'
  };

  // Course details section
  const courseDetailsStyles = {
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

  const priceContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const priceStyles = {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: keyColor
  };

  const originalPriceStyles = {
    fontSize: '0.75rem',
    color: '#9ca3af',
    textDecoration: 'line-through'
  };

  // Technologies section
  const technologiesStyles = {
    marginBottom: '16px'
  };

  const techTitleStyles = {
    fontSize: '0.8rem',
    color: '#1f2937',
    fontWeight: '600',
    marginBottom: '8px'
  };

  const techTagsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    minHeight: '50px',
    alignItems: 'flex-start'
  };

  const techTagStyles = (isHovered) => ({
    background: isHovered 
      ? `linear-gradient(135deg, ${keyColor} 0%, #6c648b 100%)`
      : 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
    color: isHovered ? '#fff' : keyColor,
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '0.7rem',
    fontWeight: '600',
    border: isHovered ? `1.5px solid ${keyColor}` : `1px solid #cbd5e1`,
    transform: isHovered ? 'scale(1.07) translateY(-1px)' : 'scale(1)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    boxShadow: isHovered 
      ? `0 4px 12px ${keyColor}44` 
      : '0 1px 3px rgba(0, 0, 0, 0.1)',
    whiteSpace: 'nowrap'
  });

  // Features section
  const featuresStyles = {
    marginBottom: '16px'
  };

  const featureTagsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px'
  };

  const featureTagStyles = {
    background: `${keyColor}0a`,
    color: keyColor,
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '0.7rem',
    fontWeight: '500',
    border: `1px solid ${keyColor}22`
  };

  // Actions section
  const courseActionsStyles = {
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
        ? `linear-gradient(135deg, ${keyColor} 0%, #6c648b 100%)` 
        : '#ffffff',
      color: isPrimary ? '#fff' : keyColor,
      border: isPrimary ? 'none' : `2px solid ${keyColor}`,
      padding: '8px 12px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: isPrimary ? `0 3px 5px ${keyColor}44` : 'none',
      fontSize: '0.8rem',
      letterSpacing: '0.5px'
    };
  };

  const nextStartStyles = {
    background: `${keyColor}0a`,
    color: keyColor,
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '0.8rem',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: '12px',
    border: `1px solid ${keyColor}22`
  };

  // Responsive styles
  const responsiveStyles = `
    @media (max-width: 1200px) {
      .courses-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 18px !important;
      }
    }
    
    @media (max-width: 768px) {
      .courses-grid {
        grid-template-columns: 1fr !important;
        gap: 16px !important;
      }
      
      .course-card {
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
      
      <div className="courses-page">
        <Header />
        
        {/* Hero Section */}
        <section className="courses-hero" style={{ 
          padding: '120px 0 80px', 
          background: '#413C58', 
          color: 'white' 
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', color: 'white' }}>
                Professional Training Courses
              </h1>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}>
                Master in-demand skills with our comprehensive, industry-aligned courses designed by experts. 
                Get hands-on experience and guaranteed job placement support.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section style={coursesSectionStyles} id="courses">
          <div style={backgroundOverlayStyles} />
          <div style={decorativeCircleStyles} />
          
          <div style={coursesContainerStyles}>
            

            {/* Category Filter */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: '15px', 
              marginBottom: '40px' 
            }}>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  style={{
                    padding: '12px 24px',
                    border: activeCategory === category.id ? '2px solid #4facfe' : '2px solid #e2e8f0',
                    borderRadius: '25px',
                    background: activeCategory === category.id ? '#4facfe' : 'white',
                    color: activeCategory === category.id ? 'white' : '#4a5568',
                    cursor: 'pointer',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Courses Grid */}
            <motion.div 
              style={coursesGridStyles}
              className="courses-grid"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setHoveredCard(course.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card 
                    style={courseCardStyles(hoveredCard === course.id)}
                    className="course-card"
                    hover={false}
                  >
                    {/* Course Header */}
                    <div style={courseHeaderStyles}>
                      <div style={courseMetaStyles}>
                        <span style={levelTagStyles}>{course.level}</span>
                      </div>
                      <div style={studentsCountStyles}>
                        {course.students} students
                      </div>
                    </div>

                    {/* Course Content */}
                    <div style={courseContentStyles}>
                      <div>
                        <h3 style={courseTitleStyles}>
                          <span style={{ fontSize: '1.2rem' }}>{course.emoji}</span>
                          {course.title}
                        </h3>
                       <div style={technologiesStyles}>
                       
                          <div style={techTagsStyles}>
                            {course.technologies.map((tech, i) => (
                              <motion.span 
                                key={i} 
                                style={techTagStyles(hoveredTech === `${course.id}-${i}`)}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.1 }}
                                onMouseEnter={() => setHoveredTech(`${course.id}-${i}`)}
                                onMouseLeave={() => setHoveredTech(null)}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Course Details */}
                        <div style={courseDetailsStyles}>
                          <div style={detailItemStyles}>
                            <span style={detailLabelStyles}>💰 Price:</span>
                            <div style={priceContainerStyles}>
                              <span style={priceStyles}>{course.price}</span>
                              <span style={originalPriceStyles}>{course.originalPrice}</span>
                            </div>
                          </div>
                          <div style={detailItemStyles}>
                            <span style={detailLabelStyles}>⏱️ Duration:</span>
                            <span style={detailValueStyles}>{course.duration}</span>
                          </div>
                          <div style={{...detailItemStyles, borderBottom: 'none'}}>
                            <span style={detailLabelStyles}>⭐ Rating:</span>
                            <span style={detailValueStyles}>{course.rating}/5.0</span>
                          </div>
                        </div>

                        {/* Technologies */}
                        

                        {/* Features */}
                        <div style={featuresStyles}>
                          <h4 style={techTitleStyles}>Course Features:</h4>
                          <div style={featureTagsStyles}>
                            {course.features.map((feature, i) => (
                              <span key={i} style={featureTagStyles}>
                                ✓ {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Next Start & Actions */}
                      <div>
                        <div style={nextStartStyles}>
                          <strong>Next Batch Starts:</strong> {course.nextStart}
                        </div>
                        
                        <div style={courseActionsStyles}>
                          <motion.button 
                            style={actionButtonStyles('primary')}
                            whileHover={{ 
                              scale: 1.02,
                              boxShadow: '0 5px 10px rgba(79, 70, 229, 0.4)'
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Enroll Now
                          </motion.button>
                          <motion.button 
                            style={actionButtonStyles('secondary')}
                            whileHover={{ 
                              scale: 1.02,
                              background: '#4f46e5',
                              color: '#ffffff'
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            View Details
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section style={{ padding: '80px 0', background: '#f7fafc' }}>
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: keyColor, fontWeight: 700, letterSpacing: '1px' }}>
                Why Choose Our Courses?
              </h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '40px', 
                marginTop: '50px' 
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px', color: keyColor }}>🎯</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: keyColor, fontWeight: 600 }}>Industry-Relevant</h3>
                  <p style={{ color: '#4a5568' }}>Curriculum designed with input from top tech companies and industry experts</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px', color: keyColor }}>👥</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: keyColor, fontWeight: 600 }}>Expert Mentorship</h3>
                  <p style={{ color: '#4a5568' }}>Learn from experienced professionals currently working in leading tech companies</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px', color: keyColor }}>💼</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: keyColor, fontWeight: 600 }}>Job Guarantee</h3>
                  <p style={{ color: '#4a5568' }}>Get placed in top companies with our 100% job placement guarantee</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px', color: keyColor }}>🚀</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: keyColor, fontWeight: 600 }}>Real Projects</h3>
                  <p style={{ color: '#4a5568' }}>Build portfolio-worthy projects that showcase your skills to employers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Courses;