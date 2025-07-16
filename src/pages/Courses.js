import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import Card from '../components/common/Card';

const Courses = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Updated categories with accurate counts
  const categories = [
    { id: 'all', name: 'All Courses', count: 9 },
    { id: 'frontend', name: 'Frontend', count: 2 },
    { id: 'backend', name: 'Backend', count: 2 },
    { id: 'fullstack', name: 'Full Stack', count: 1 },
    { id: 'data', name: 'Data Science', count: 3 },
    { id: 'mobile', name: 'Mobile', count: 1 }
  ];

  // All courses with consistent pricing similar to first 2 courses from TrainingCourses
  const courses = [
    {
      id: 1,
      title: 'Mainframe Training & Placement Program',
      category: 'backend',
      duration: '40 hours',
      level: 'Beginner to Job-Ready',
      technologies: ['COBOL', 'JCL', 'DB2', 'CICS', 'IBM z/OS', 'VSAM'],
      price: '₹30,000',
      originalPrice: '₹60,000',
      discount: '50% OFF',
      icon: '🖥️',
      gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      rating: 4.8,
      students: 187,
      instructor: 'Robert Kumar',
      nextStart: 'March 25, 2024',
      features: ['Job Guarantee', 'Industry Mentors', 'Real Projects', 'Certification']
    },
    {
      id: 2,
      title: 'Data Science with Python',
      category: 'data',
      duration: '60 hours',
      level: 'Beginner to Advanced',
      technologies: ['Python', 'Pandas', 'TensorFlow', 'Scikit-learn', 'SQL'],
      price: '₹50,000',
      originalPrice: '₹60,000',
      discount: '17% OFF',
      icon: '🤖',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      rating: 4.9,
      students: 88,
      instructor: 'Dr. Emily Rodriguez',
      nextStart: 'April 5, 2024',
      features: ['Real Datasets', 'ML Projects', 'Data Visualization', 'Career Support']
    },
    {
      id: 3,
      title: 'Full Stack Web Development Bootcamp',
      category: 'fullstack',
      duration: '80 hours',
      level: 'Beginner to Advanced',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML/CSS'],
      price: '₹75,000',
      originalPrice: '₹1,00,000',
      discount: '25% OFF',
      icon: '🚀',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      rating: 4.9,
      students: 1250,
      instructor: 'Sarah Johnson',
      nextStart: 'March 15, 2024',
      features: ['1-on-1 Mentorship', 'Job Placement', 'Personal Mentor', 'Lifetime Access']
    },
    {
      id: 4,
      title: 'React.js Mastery Course',
      category: 'frontend',
      duration: '45 hours',
      level: 'Intermediate',
      technologies: ['React', 'Redux', 'TypeScript', 'Jest', 'React Router', 'Styled Components'],
      price: '₹40,000',
      originalPrice: '₹55,000',
      discount: '27% OFF',
      icon: '⚛️',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      rating: 4.8,
      students: 890,
      instructor: 'Michael Chen',
      nextStart: 'March 22, 2024',
      features: ['1-on-1 Sessions', 'Personal Mentor', 'Performance', 'Live Projects']
    },
    {
      id: 5,
      title: 'Node.js Backend Development',
      category: 'backend',
      duration: '50 hours',
      level: 'Intermediate',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
      price: '₹45,000',
      originalPrice: '₹65,000',
      discount: '31% OFF',
      icon: '⚙️',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      rating: 4.7,
      students: 654,
      instructor: 'David Park',
      nextStart: 'March 29, 2024',
      features: ['API Design', 'Database Design', 'Security', 'Deployment']
    },
    {
      id: 6,
      title: 'Modern JavaScript Fundamentals',
      category: 'frontend',
      duration: '35 hours',
      level: 'Beginner',
      technologies: ['JavaScript', 'ES6+', 'DOM', 'Fetch API', 'Async/Await', 'Modules'],
      price: '₹25,000',
      originalPrice: '₹40,000',
      discount: '38% OFF',
      icon: '💻',
      gradient: 'linear-gradient(135deg, #a8eaaa 0%, #867165 90%)',
      rating: 4.6,
      students: 1120,
      instructor: 'Alex Thompson',
      nextStart: 'March 18, 2024',
      features: ['Interactive Coding', 'Projects', 'Code Review', 'Community']
    },
    {
      id: 7,
      title: 'React Native Mobile Development',
      category: 'mobile',
      duration: '55 hours',
      level: 'Intermediate',
      technologies: ['React Native', 'Expo', 'Redux', 'Navigation', 'Firebase', 'App Store'],
      price: '₹50,000',
      originalPrice: '₹70,000',
      discount: '29% OFF',
      icon: '📱',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      rating: 4.8,
      students: 432,
      instructor: 'Lisa Wang',
      nextStart: 'April 12, 2024',
      features: ['Cross Platform', 'Native Features', 'App Store Deploy', 'Portfolio Apps']
    },
    {
      id: 8,
      title: 'Advanced Python Programming',
      category: 'data',
      duration: '65 hours',
      level: 'Advanced',
      technologies: ['Python', 'Django', 'Flask', 'REST APIs', 'PostgreSQL', 'Machine Learning'],
      price: '₹55,000',
      originalPrice: '₹75,000',
      discount: '27% OFF',
      icon: '🐍',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      rating: 4.7,
      students: 298,
      instructor: 'Priya Sharma',
      nextStart: 'April 8, 2024',
      features: ['Advanced Concepts', 'Web Frameworks', 'API Development', 'Deployment']
    },
    {
      id: 9,
      title: 'Machine Learning Specialization',
      category: 'data',
      duration: '90 hours',
      level: 'Advanced',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Deep Learning'],
      price: '₹65,000',
      originalPrice: '₹90,000',
      discount: '28% OFF',
      icon: '🧠',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      rating: 4.9,
      students: 156,
      instructor: 'Dr. Raj Patel',
      nextStart: 'April 15, 2024',
      features: ['Advanced ML', 'Deep Learning', 'Neural Networks', 'Industry Projects']
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

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(course => course.category === activeCategory);

  // Styles
  const heroSectionStyles = {
    padding: '70px 0 80px',
    background: '#ffffff',
    color: '#1f2937',
    position: 'relative',
    overflow: 'hidden'
  };

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

  const coursesGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024 
      ? 'repeat(2, 1fr)' 
      : 'repeat(3, 1fr)',
    gap: '32px'
  };

  const courseCardStyles = (isHovered) => ({
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

  const courseHeaderStyles = (gradient) => ({
    background: gradient,
    padding: '24px',
    position: 'relative',
    overflow: 'hidden'
  });

  const courseIconStyles = {
    fontSize: '2.5rem',
    marginBottom: '12px',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
  };

  const courseTitleStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '8px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  };

  const courseDurationStyles = {
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

  const courseBodyStyles = {
    padding: '24px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  };

  const courseLevelStyles = {
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
      'Beginner to Job-Ready': '#10b981',
      'Intermediate': '#f59e0b',
      'Professional': '#3b82f6',
      'Advanced': '#ef4444',
      'Beginner': '#22c55e'
    };
    
    return {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: colors[level] || '#6b7280'
    };
  };

  const instructorStyles = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
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

  const coursePriceStyles = {
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

  const courseStatsStyles = {
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

  const courseButtonStyles = {
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

  const courseButtonHoverStyles = {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(79, 70, 229, 0.4)'
  };

  return (
    <div className="courses-page">
      <Header />
      
      {/* Hero Section */}
      <section style={heroSectionStyles}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
            <motion.h1 
              style={{ 
                fontSize: window.innerWidth <= 768 ? '2.5rem' : 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: '700',
                lineHeight: '1.1',
                marginBottom: '24px',
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
      <section style={sectionStyles} id="courses" ref={ref}>
        <div style={containerStyles}>
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
                  border: activeCategory === category.id ? '2px solid #4f46e5' : '2px solid #e2e8f0',
                  borderRadius: '25px',
                  background: activeCategory === category.id ? '#4f46e5' : 'white',
                  color: activeCategory === category.id ? 'white' : '#4a5568',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  boxShadow: activeCategory === category.id ? '0 4px 12px rgba(79, 70, 229, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>

          {/* Section Header */}
          <motion.div 
            style={headerStyles}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 style={titleStyles}>
              {activeCategory === 'all' ? 'All Training Courses' : 
               categories.find(cat => cat.id === activeCategory)?.name + ' Courses'}
              <span style={titleUnderlineStyles}></span>
            </h2>
            <p style={subtitleStyles}>
              Industry-relevant courses designed to make you Job-Ready
            </p>
          </motion.div>

          {/* Courses Grid */}
          <motion.div 
            style={coursesGridStyles}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card style={courseCardStyles(hoveredCard === course.id)} hover={false}>
                  <div style={courseHeaderStyles(course.gradient)}>
                    <div style={discountBadgeStyles}>{course.discount}</div>
                    <div style={courseIconStyles}>{course.icon}</div>
                    <h3 style={courseTitleStyles}>{course.title}</h3>
                    <div style={courseDurationStyles}>
                      <span>⏱️</span>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
                  <div style={courseBodyStyles}>
                    <div style={courseLevelStyles}>
                      <span style={levelDotStyles(course.level)} />
                      <span>{course.level}</span>
                    </div>

                    <div style={instructorStyles}>
                      <span>👨‍🏫</span>
                      <span>Instructor: {course.instructor}</span>
                    </div>
                    
                    <div style={technologiesStyles}>
                      {course.technologies.map((tech, index) => (
                        <span key={index} style={techBadgeStyles}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div style={featuresStyles}>
                      <div style={featureListStyles}>
                        {course.features.map((feature, index) => (
                          <span key={index} style={featureTagStyles}>
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div style={priceContainerStyles}>
                      <div style={coursePriceStyles}>{course.price}</div>
                      <div style={originalPriceStyles}>{course.originalPrice}</div>
                    </div>

                    <div style={courseStatsStyles}>
                      <span>⭐ {course.rating}</span>
                      <span>👥 {course.students.toLocaleString()} students</span>
                    </div>

                    <div style={nextStartStyles}>
                      <strong>Next Batch:</strong> {course.nextStart}
                    </div>
                    
                    <motion.button
                      style={courseButtonStyles}
                      whileHover={courseButtonHoverStyles}
                      whileTap={{ scale: 0.98 }}
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{ padding: '80px 0', background: '#f7fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <motion.h2 
              style={{ 
                fontSize: '2.5rem', 
                marginBottom: '24px', 
                color: '#1f2937', 
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
                  <div style={{ fontSize: '3rem', marginBottom: '20px', color: '#4f46e5' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1f2937', fontWeight: 600 }}>{item.title}</h3>
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