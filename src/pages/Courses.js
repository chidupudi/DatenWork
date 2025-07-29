import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import Card from '../components/common/Card';
import { coursesService } from '../services/firebaseData';

const Courses = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses from Firebase
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const coursesData = await coursesService.getAll();
        setCourses(coursesData.filter(course => course.isActive !== false));
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to load courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Calculate categories dynamically based on courses
  const categories = React.useMemo(() => {
    if (!courses.length) {
      return [{ id: 'all', name: 'All Courses', count: 0 }];
    }

    const categoryCount = courses.reduce((acc, course) => {
      acc[course.category] = (acc[course.category] || 0) + 1;
      return acc;
    }, {});

    const categoryList = [
      { id: 'all', name: 'All Courses', count: courses.length },
      { id: 'frontend', name: 'Frontend', count: categoryCount.frontend || 0 },
      { id: 'backend', name: 'Backend', count: categoryCount.backend || 0 },
      { id: 'fullstack', name: 'Full Stack', count: categoryCount.fullstack || 0 },
      { id: 'data', name: 'Data Science', count: categoryCount.data || 0 },
      { id: 'mobile', name: 'Mobile', count: categoryCount.mobile || 0 }
    ];

    return categoryList.filter(cat => cat.id === 'all' || cat.count > 0);
  }, [courses]);

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
    padding: '70px 0 40px', // Reduced bottom padding from 80px to 40px
    background: '#ffffff',
    color: '#1f2937',
    position: 'relative',
    overflow: 'hidden'
  };

  const sectionStyles = {
    background: 'transparent',
    padding: '40px 0', // Reduced from 80px to 40px
    position: 'relative'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: window.innerWidth <= 480 ? '0 16px' : window.innerWidth <= 768 ? '0 20px' : '0 24px'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '40px' // Reduced from 64px to 40px
  };

  const titleStyles = {
    fontSize: window.innerWidth <= 480 ? '1.5rem' : window.innerWidth <= 768 ? '1.8rem' : '2.2rem',
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
    fontSize: window.innerWidth <= 480 ? '0.95rem' : '1.1rem',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
    padding: window.innerWidth <= 480 ? '0 16px' : '0'
  };

  const coursesGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 480
      ? '1fr'
      : window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024 
      ? 'repeat(2, 1fr)' 
      : 'repeat(3, 1fr)',
    gap: window.innerWidth <= 480 ? '16px' : '20px',
    padding: window.innerWidth <= 480 ? '0 8px' : '0'
  };

  const courseCardStyles = (isHovered) => ({
    background: 'white',
    borderRadius: '16px', // Reduced from 20px
    overflow: 'hidden',
    boxShadow: isHovered 
      ? '0 15px 30px rgba(0, 0, 0, 0.12)' // Reduced shadow
      : '0 8px 20px rgba(0, 0, 0, 0.06)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)', // Reduced hover transform
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  });

  const courseHeaderStyles = (gradient) => ({
    background: gradient,
    padding: '18px', // Reduced from 24px
    position: 'relative',
    overflow: 'hidden'
  });

  const courseIconStyles = {
    fontSize: '2rem', // Reduced from 2.5rem
    marginBottom: '8px', // Reduced from 12px
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
  };

  const courseTitleStyles = {
    fontSize: '1.3rem', // Reduced from 1.5rem
    fontWeight: '700',
    color: 'white',
    marginBottom: '6px', // Reduced from 8px
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  };

  const courseDurationStyles = {
    fontSize: '0.8rem', // Reduced from 0.875rem
    color: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px' // Reduced from 8px
  };

  const discountBadgeStyles = {
    position: 'absolute',
    top: '12px', // Reduced from 16px
    right: '12px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: 'white',
    padding: '3px 10px', // Reduced padding
    borderRadius: '16px', // Reduced from 20px
    fontSize: '0.7rem', // Reduced from 0.75rem
    fontWeight: '700'
  };

  const courseBodyStyles = {
    padding: '18px', // Reduced from 24px
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  };

  const courseLevelStyles = {
    fontSize: '0.8rem', // Reduced from 0.875rem
    color: '#6b7280',
    marginBottom: '12px', // Reduced from 16px
    display: 'flex',
    alignItems: 'center',
    gap: '6px' // Reduced from 8px
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
      width: '6px', // Reduced from 8px
      height: '6px',
      borderRadius: '50%',
      background: colors[level] || '#6b7280'
    };
  };

  const instructorStyles = {
    fontSize: '0.8rem', // Reduced from 0.875rem
    color: '#6b7280',
    marginBottom: '12px', // Reduced from 16px
    display: 'flex',
    alignItems: 'center',
    gap: '6px' // Reduced from 8px
  };

  const technologiesStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px', // Reduced from 8px
    marginBottom: '16px', // Reduced from 20px
    flex: 1
  };

  const techBadgeStyles = {
    background: '#f3f4f6',
    color: '#4b5563',
    padding: '3px 8px', // Reduced padding
    borderRadius: '10px', // Reduced from 12px
    fontSize: '0.7rem', // Reduced from 0.75rem
    fontWeight: '500',
    border: '1px solid #e5e7eb'
  };

  const featuresStyles = {
    marginBottom: '12px' // Reduced from 16px
  };

  const featureListStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px' // Reduced from 6px
  };

  const featureTagStyles = {
    background: '#f0fdf4',
    color: '#166534',
    padding: '3px 6px', // Reduced padding
    borderRadius: '6px', // Reduced from 8px
    fontSize: '0.65rem', // Reduced from 0.7rem
    fontWeight: '500',
    border: '1px solid #bbf7d0'
  };

  const priceContainerStyles = {
    marginBottom: '12px' // Reduced from 16px
  };

  const coursePriceStyles = {
    fontSize: '1.3rem', // Reduced from 1.5rem
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '4px'
  };

  const originalPriceStyles = {
    fontSize: '0.9rem', // Reduced from 1rem
    color: '#9ca3af',
    textDecoration: 'line-through'
  };

  const courseStatsStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px', // Reduced from 16px
    fontSize: '0.8rem', // Reduced from 0.875rem
    color: '#6b7280'
  };

  const nextStartStyles = {
    background: '#f0f9ff',
    color: '#0369a1',
    padding: '6px 10px', // Reduced padding
    borderRadius: '6px', // Reduced from 8px
    fontSize: '0.75rem', // Reduced from 0.8rem
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: '12px', // Reduced from 16px
    border: '1px solid #bae6fd'
  };

  const courseButtonStyles = {
    width: '100%',
    padding: '10px 20px', // Reduced padding
    background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px', // Reduced from 12px
    fontSize: '0.9rem', // Reduced from 0.95rem
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 3px 10px rgba(79, 70, 229, 0.3)' // Reduced shadow
  };

  const courseButtonHoverStyles = {
    transform: 'translateY(-1px)', // Reduced from -2px
    boxShadow: '0 5px 15px rgba(79, 70, 229, 0.4)' // Reduced shadow
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
                fontSize: window.innerWidth <= 480 ? '2rem' : window.innerWidth <= 768 ? '2.5rem' : 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: '700',
                lineHeight: '1.1',
                marginBottom: '10px',
                position: 'relative',
                padding: window.innerWidth <= 480 ? '0 16px' : '0'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Professional Training Courses
            </motion.h1>
            <motion.p 
              style={{ 
                fontSize: window.innerWidth <= 480 ? '1rem' : window.innerWidth <= 768 ? '1.125rem' : '1.3rem',
                marginBottom: '10px',
                lineHeight: '1.6',
                fontWeight: '400',
                opacity: '0.95',
                padding: window.innerWidth <= 480 ? '0 16px' : '0'
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
              gap: '12px', // Reduced from 15px
              marginBottom: '12px' // Reduced from 15px
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
                  padding: window.innerWidth <= 480 ? '8px 16px' : '10px 20px',
                  border: activeCategory === category.id ? '2px solid #4f46e5' : '2px solid #e2e8f0',
                  borderRadius: '20px',
                  background: activeCategory === category.id ? '#4f46e5' : 'white',
                  color: activeCategory === category.id ? 'white' : '#4a5568',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: window.innerWidth <= 480 ? '0.8rem' : '0.9rem',
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
           
           
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}> {/* Reduced padding */}
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>⏳</div>
              <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>Loading courses...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}> {/* Reduced padding */}
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>❌</div>
              <p style={{ fontSize: '1.2rem', color: '#ef4444', marginBottom: '16px' }}>{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                style={{
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Try Again
              </button>
            </div>
          )}

          {/* Courses Grid */}
          {!loading && !error && (
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
                  <div style={courseHeaderStyles(course.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)')}>
                    <div style={discountBadgeStyles}>{course.discount || 'SPECIAL'}</div>
                    <div style={courseIconStyles}>{course.icon || '📚'}</div>
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
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe2mqWXkm0W43PxgYna5nFPwCOMshtsYhc9NPEBQCocdTiCEQ/viewform?usp=header', '_blank')}
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            ))}
            
            {/* No courses found state */}
            {filteredCourses.length === 0 && (
              <div style={{ 
                gridColumn: '1 / -1',
                textAlign: 'center', 
                padding: '40px 0', // Reduced padding
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📚</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#1f2937' }}>
                  No courses found
                </h3>
                <p style={{ color: '#6b7280' }}>
                  {activeCategory === 'all' 
                    ? 'No courses available at the moment.' 
                    : `No courses available in the ${categories.find(c => c.id === activeCategory)?.name} category.`
                  }
                </p>
              </div>
            )}
          </motion.div>
          )}
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{ padding: '60px 0', background: '#f7fafc' }}> {/* Reduced padding */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <motion.h2 
              style={{ 
                fontSize: '2.2rem', // Reduced from 2.5rem
                marginBottom: '20px', // Reduced from 24px
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', // Reduced min width
                gap: '30px', // Reduced from 40px
                marginTop: '40px' // Reduced from 50px
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
                  <div style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#4f46e5' }}>{item.icon}</div> {/* Reduced icon size and margin */}
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#1f2937', fontWeight: 600 }}>{item.title}</h3> {/* Reduced font size and margin */}
                  <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.description}</p> {/* Added smaller font size */}
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