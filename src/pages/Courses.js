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

  const keyColor = '#413C58';

  // Updated hero background with the new gradient
  const heroSectionStyles = {
    padding: '120px 0 80px',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden'
  };

  // Hero background effects with grid pattern (exact same as Hero component)
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

  // Subtle dark overlay (same as Hero component)
  const heroDarkOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(15, 23, 42, 0.4)',
    zIndex: 0
  };

  const coursesSectionStyles = {
    background: `linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)`,
    padding: '80px 0',
    position: 'relative',
    overflow: 'hidden'
  };

  const backgroundOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.06) 0%, transparent 50%)
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

  const coursesGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024
      ? 'repeat(2, 1fr)'
      : 'repeat(3, 1fr)',
    gap: window.innerWidth <= 768 ? '16px' : '24px',
    marginBottom: '50px',
    maxWidth: '1300px',
    margin: '0 auto 50px auto'
  };

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

  const technologiesStyles = {
    marginBottom: '16px'
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

  const featuresStyles = {
    marginBottom: '16px'
  };

  const techTitleStyles = {
    fontSize: '0.8rem',
    color: '#1f2937',
    fontWeight: '600',
    marginBottom: '8px'
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

  return (
    <div className="courses-page">
      <Header />
      
      {/* Hero Section with Grid Pattern (Exact Match with Hero Component) */}
      <section className="courses-hero" style={heroSectionStyles}>
        <div style={heroOverlayStyles} />
        <div style={heroDarkOverlayStyles} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <motion.h1 
              style={{ 
                fontSize: window.innerWidth <= 768 ? '2.5rem' : 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: '700',
                lineHeight: '1.1',
                marginBottom: '24px',
                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                position: 'relative'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Professional Training Courses
            </motion.h1>
            <motion.p 
              style={{ 
                fontSize: window.innerWidth <= 768 ? '1.125rem' : '1.3rem',
                marginBottom: '36px',
                color: '#e2e8f0',
                lineHeight: '1.6',
                fontWeight: '400',
                opacity: '0.95'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Master in-demand skills with our comprehensive, industry-aligned courses designed by experts. 
              Get hands-on experience and guaranteed job placement support.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section style={coursesSectionStyles} id="courses" ref={ref}>
        <div style={backgroundOverlayStyles} />
        <div style={decorativeCircleStyles} />
        
        <div style={coursesContainerStyles}>
          {/* Category Filter */}
          <motion.div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: '15px', 
              marginBottom: '40px' 
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map(category => (
              <motion.button
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
                  transition: 'all 0.3s ease',
                  boxShadow: activeCategory === category.id ? '0 4px 12px rgba(79, 172, 254, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>

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
                     
                      {/* Technologies */}
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
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <motion.h2 
              style={{ 
                fontSize: '2.5rem', 
                marginBottom: '24px', 
                color: keyColor, 
                fontWeight: 700, 
                letterSpacing: '1px' 
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose Our Courses?
            </motion.h2>
            <motion.div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '40px', 
                marginTop: '50px' 
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: '🎯',
                  title: 'Industry-Relevant',
                  description: 'Curriculum designed with input from top tech companies and industry experts'
                },
                {
                  icon: '👥',
                  title: 'Expert Mentorship',
                  description: 'Learn from experienced professionals currently working in leading tech companies'
                },
                {
                  icon: '💼',
                  title: 'Job Guarantee',
                  description: 'Get placed in top companies with our 100% job placement guarantee'
                },
                {
                  icon: '🚀',
                  title: 'Real Projects',
                  description: 'Build portfolio-worthy projects that showcase your skills to employers'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  style={{ textAlign: 'center' }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '20px', color: keyColor }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: keyColor, fontWeight: 600 }}>{item.title}</h3>
                  <p style={{ color: '#4a5568', lineHeight: '1.6' }}>{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;