import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../common/Card';
import Button from '../common/Button';

const TrainingCourses = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'Master React, Node.js, and modern web technologies with hands-on projects.',
      duration: '6 months',
      level: 'Beginner to Advanced',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      icon: '💻'
    },
    {
      id: 2,
      title: 'Data Science & AI',
      description: 'Learn Python, machine learning, and AI with real-world applications.',
      duration: '8 months',
      level: 'Intermediate',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      icon: '🤖'
    },
    {
      id: 3,
      title: 'DevOps & Cloud',
      description: 'Master AWS, Docker, Kubernetes, and CI/CD pipelines.',
      duration: '4 months',
      level: 'Intermediate',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
      icon: '☁️'
    },
    {
      id: 4,
      title: 'Cybersecurity',
      description: 'Comprehensive security training covering ethical hacking and defense.',
      duration: '5 months',
      level: 'Beginner to Advanced',
      technologies: ['Penetration Testing', 'Network Security', 'CISSP', 'CEH'],
      icon: '🔒'
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Main section styles
  const trainingSectionStyles = {
    background: '#ffffff',
    padding: '80px 0',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    opacity: 1,
    visibility: 'visible'
  };

  // Background patterns
  const backgroundOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.05) 0%, transparent 50%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="hexagon" width="28" height="24" patternUnits="userSpaceOnUse"><polygon points="14,2 26,9 26,18 14,25 2,18 2,9" fill="none" stroke="rgba(99,102,241,0.03)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23hexagon)"/></svg>')
    `,
    zIndex: 0
  };

  const decorativeCircleStyles = {
    position: 'absolute',
    top: '10%',
    right: '5%',
    width: '200px',
    height: '200px',
    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
    borderRadius: '50%',
    filter: 'blur(40px)',
    zIndex: 0
  };

  const trainingContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1
  };

  const trainingHeaderStyles = {
    textAlign: 'center',
    marginBottom: '64px'
  };

  const trainingTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : 'clamp(2rem, 4vw, 2.5rem)',
    marginBottom: '16px',
    color: '#1f2937',
    background: 'linear-gradient(135deg, #4f46e5 0%, #f59e0b 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const trainingSubtitleStyles = {
    fontSize: '1.25rem',
    color: '#6b7280',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const trainingGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: window.innerWidth <= 768 ? '24px' : '32px'
  };

  const trainingCardStyles = (isHovered) => ({
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: isHovered 
      ? '0 8px 12px rgba(0, 0, 0, 0.1), 0 20px 40px rgba(0, 0, 0, 0.15)'
      : '0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 25px rgba(0, 0, 0, 0.08)',
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative',
    minHeight: '420px',
    display: 'flex',
    flexDirection: 'column',
    transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
  });

  const topGradientStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #f59e0b 100%)'
  };

  const courseIconStyles = (isHovered) => ({
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '16px',
    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
    padding: '24px 24px 0',
    transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
    transition: 'transform 0.2s ease'
  });

  const courseContentStyles = {
    padding: '0 24px 24px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  };

  const courseTitleStyles = {
    fontSize: '1.5rem',
    marginBottom: '12px',
    color: '#1f2937',
    fontWeight: '600'
  };

  const courseDescriptionStyles = {
    marginBottom: '24px',
    color: '#6b7280',
    lineHeight: '1.6'
  };

  const courseDetailsStyles = {
    marginBottom: '24px'
  };

  const courseMetaStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: window.innerWidth <= 768 ? '8px' : '16px',
    marginBottom: '16px',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row'
  };

  const metaItemStyles = {
    fontSize: '0.875rem',
    color: '#6b7280'
  };

  const metaLabelStyles = {
    color: '#1f2937',
    fontWeight: '600'
  };

  const courseTechnologiesStyles = {
    fontSize: '0.875rem',
    color: '#6b7280'
  };

  const techLabelStyles = {
    color: '#1f2937',
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600'
  };

  const techTagsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '8px'
  };

  const techTagStyles = (isHovered) => ({
    background: '#ede9fe',
    color: '#6366f1',
    padding: '4px 12px',
    borderRadius: '8px',
    fontSize: '0.75rem',
    fontWeight: '500',
    border: '1px solid #c7d2fe',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.1s ease',
    cursor: 'pointer'
  });

  const courseActionsStyles = {
    display: 'flex',
    gap: '12px',
    marginTop: 'auto',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row'
  };

  return (
    <section style={trainingSectionStyles} id="training">
      <div style={backgroundOverlayStyles} />
      <div style={decorativeCircleStyles} />
      
      <div style={trainingContainerStyles}>
        <motion.div 
          ref={ref}
          style={trainingHeaderStyles}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 style={trainingTitleStyles}>
            Comprehensive Training Programs
          </h2>
          <p style={trainingSubtitleStyles}>
            Industry-focused courses designed to make you job-ready with cutting-edge skills
          </p>
        </motion.div>

        <motion.div 
          style={trainingGridStyles}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <Card 
                style={trainingCardStyles(hoveredCourse === course.id)}
                hover={false} // Disable Card's built-in hover
              >
                <div style={topGradientStyles} />
                
                <motion.div 
                  style={courseIconStyles(hoveredCourse === course.id)}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {course.icon}
                </motion.div>
                
                <div style={courseContentStyles}>
                  <h3 style={courseTitleStyles}>
                    {course.title}
                  </h3>
                  
                  <p style={courseDescriptionStyles}>
                    {course.description}
                  </p>
                  
                  <div style={courseDetailsStyles}>
                    <div style={courseMetaStyles}>
                      <span style={metaItemStyles}>
                        <span style={metaLabelStyles}>Duration:</span> {course.duration}
                      </span>
                      <span style={metaItemStyles}>
                        <span style={metaLabelStyles}>Level:</span> {course.level}
                      </span>
                    </div>
                    
                    <div style={courseTechnologiesStyles}>
                      <span style={techLabelStyles}>Technologies:</span>
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
                  </div>
                  
                  <div style={courseActionsStyles}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ flex: 1 }}
                    >
                      <Button variant="primary" size="medium" style={{ width: '100%' }}>
                        Learn More
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ flex: 1 }}
                    >
                      <Button variant="outline" size="medium" style={{ width: '100%' }}>
                        View Curriculum
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingCourses;