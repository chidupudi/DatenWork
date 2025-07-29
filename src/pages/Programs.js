import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import { programsService } from '../services/firebaseData';




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
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch programs from Firebase
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const programsData = await programsService.getAll();
        setPrograms(programsData.filter(program => program.isActive !== false));
      } catch (err) {
        console.error('Error fetching programs:', err);
        setError('Failed to load programs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  // Calculate categories dynamically based on programs
  const categories = React.useMemo(() => {
    if (!programs.length) {
      return [{ id: 'all', name: 'All Programs', count: 0 }];
    }

    const categoryCount = programs.reduce((acc, program) => {
      const category = program.category || 'other';
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    const categoryList = [
      { id: 'all', name: 'All Programs', count: programs.length },
      { id: 'frontend', name: 'Frontend', count: categoryCount.frontend || 0 },
      { id: 'backend', name: 'Backend', count: categoryCount.backend || 0 },
      { id: 'fullstack', name: 'Full Stack', count: categoryCount.fullstack || 0 },
      { id: 'data', name: 'Data Science', count: categoryCount.data || 0 },
      { id: 'mobile', name: 'Mobile', count: categoryCount.mobile || 0 },
      { id: 'devops', name: 'DevOps', count: categoryCount.devops || 0 },
      { id: 'other', name: 'Other', count: categoryCount.other || 0 }
    ];

    return categoryList.filter(cat => cat.id === 'all' || cat.count > 0);
  }, [programs]);

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

  const filteredPrograms = activeCategory === 'all'
    ? programs
    : programs.filter(program => (program.category || 'other') === activeCategory);

  const keyColor = '#413C58';

 // Updated hero background with plain white
const heroSectionStyles = {
  padding: '70px 0 80px',
  background: '#ffffff',
  color: '#1f2937',
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
    padding: window.innerWidth <= 480 ? '0 12px' : window.innerWidth <= 768 ? '0 16px' : '0 24px',
    position: 'relative',
    zIndex: 1
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
    gap: window.innerWidth <= 480 ? '12px' : window.innerWidth <= 768 ? '16px' : '24px',
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
    padding: window.innerWidth <= 480 ? '10px 12px' : '12px 16px',
    background: '#f3f0fa',
    borderBottom: `1.5px solid ${keyColor}22`,
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    gap: window.innerWidth <= 768 ? '6px' : '8px',
    minHeight: window.innerWidth <= 480 ? '45px' : '50px'
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
    padding: window.innerWidth <= 480 ? '10px 12px' : window.innerWidth <= 768 ? '12px 16px' : '16px',
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
    gap: window.innerWidth <= 480 ? '6px' : '8px',
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
      padding: window.innerWidth <= 480 ? '6px 10px' : '8px 12px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: isPrimary ? `0 3px 5px ${keyColor}44` : 'none',
      fontSize: window.innerWidth <= 480 ? '0.75rem' : '0.8rem',
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
  <div className="container" style={{ position: 'relative', zIndex: 2 }}>
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <motion.h1 
        style={{ 
          fontSize: window.innerWidth <= 480 ? '2rem' : window.innerWidth <= 768 ? '2.5rem' : 'clamp(2.5rem, 5vw, 3.8rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '24px',
          color: '#1f2937',
          position: 'relative',
          padding: window.innerWidth <= 480 ? '0 16px' : '0'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Professional Placement
      </motion.h1>
      <motion.p 
        style={{ 
          fontSize: window.innerWidth <= 480 ? '1rem' : window.innerWidth <= 768 ? '1.125rem' : '1.3rem',
          marginBottom: '36px',
          color: '#6b7280',
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
        Available in individual, batch, and corporate training formats. Get hands-on experience and guaranteed job placement support.
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
                  padding: window.innerWidth <= 480 ? '8px 16px' : '12px 24px',
                  border: activeCategory === category.id ? '2px solid #4facfe' : '2px solid #e2e8f0',
                  borderRadius: '25px',
                  background: activeCategory === category.id ? '#4facfe' : 'white',
                  color: activeCategory === category.id ? 'white' : '#4a5568',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: window.innerWidth <= 480 ? '0.8rem' : '0.9rem',
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

          {/* Loading State */}
          {loading && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>⏳</div>
              <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>Loading programs...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
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

          {/* Programs Grid */}
          {!loading && !error && (
            <motion.div 
              style={coursesGridStyles}
              className="courses-grid"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredCard(program.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card 
                  style={courseCardStyles(hoveredCard === program.id)}
                  className="course-card"
                  hover={false}
                >
                  {/* Program Header */}
                  <div style={courseHeaderStyles}>
                    <div style={courseMetaStyles}>
                      <span style={levelTagStyles}>{program.level || 'All Levels'}</span>
                    </div>
                    <div style={studentsCountStyles}>
                      {program.students || 0} students
                    </div>
                  </div>

                  {/* Program Content */}
                  <div style={courseContentStyles}>
                    <div>
                      <h3 style={courseTitleStyles}>
                        <span style={{ fontSize: '1.2rem' }}>{program.icon || '🎓'}</span>
                        {program.title}
                      </h3>
                     
                      {/* Technologies/Curriculum */}
                      <div style={technologiesStyles}>
                        <div style={techTagsStyles}>
                          {(program.technologies || program.curriculum || []).map((tech, i) => (
                            <motion.span 
                              key={i} 
                              style={techTagStyles(hoveredTech === `${program.id}-${i}`)}
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.1 }}
                              onMouseEnter={() => setHoveredTech(`${program.id}-${i}`)}
                              onMouseLeave={() => setHoveredTech(null)}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Program Details */}
                      <div style={courseDetailsStyles}>
                        <div style={detailItemStyles}>
                          <span style={detailLabelStyles}>💰 Price:</span>
                          <div style={priceContainerStyles}>
                            <span style={priceStyles}>{program.price || 'Contact for pricing'}</span>
                            <span style={originalPriceStyles}>{program.originalPrice}</span>
                          </div>
                        </div>
                        <div style={detailItemStyles}>
                          <span style={detailLabelStyles}>⏱️ Duration:</span>
                          <span style={detailValueStyles}>{program.duration || 'Flexible'}</span>
                        </div>
                        <div style={{...detailItemStyles, borderBottom: 'none'}}>
                          <span style={detailLabelStyles}>⭐ Rating:</span>
                          <span style={detailValueStyles}>{program.rating || 4.5}/5.0</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div style={featuresStyles}>
                        <h4 style={techTitleStyles}>Program Features:</h4>
                        <div style={featureTagsStyles}>
                          {(program.features || []).map((feature, i) => (
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
                        <strong>Next Batch Starts:</strong> {program.nextStart || 'Contact for dates'}
                      </div>
                      
                      <div style={courseActionsStyles}>
                        <motion.button 
                          style={actionButtonStyles('primary')}
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: '0 5px 10px rgba(79, 70, 229, 0.4)'
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe2mqWXkm0W43PxgYna5nFPwCOMshtsYhc9NPEBQCocdTiCEQ/viewform?usp=header', '_blank')}
                        >
                          Enroll Now
                        </motion.button>
                        
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
            
            {/* No programs found state */}
            {filteredPrograms.length === 0 && (
              <div style={{ 
                gridColumn: '1 / -1',
                textAlign: 'center', 
                padding: '60px 0',
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎓</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#1f2937' }}>
                  No programs found
                </h3>
                <p style={{ color: '#6b7280' }}>
                  {activeCategory === 'all' 
                    ? 'No programs available at the moment.' 
                    : `No programs available in the ${categories.find(c => c.id === activeCategory)?.name} category.`
                  }
                </p>
              </div>
            )}
          </motion.div>
          )}
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