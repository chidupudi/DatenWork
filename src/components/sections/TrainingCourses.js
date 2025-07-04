import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../common/Card';
import Button from '../common/Button';
import './TrainingCourses.css';

const TrainingCourses = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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

  return (
    <section className="training-courses" id="training" style={{
      background: '#ffffff',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
      opacity: 1,
      visibility: 'visible'
    }}>
      <div className="training-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.div 
          ref={ref}
          className="training-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}
        >
          <h2 className="training-title" style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            marginBottom: '16px',
            color: '#1f2937',
            background: 'linear-gradient(135deg, #4f46e5 0%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '600'
          }}>
            Comprehensive Training Programs
          </h2>
          <p className="training-subtitle" style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Industry-focused courses designed to make you job-ready with cutting-edge skills
          </p>
        </motion.div>

        <motion.div 
          className="training-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="training-card" style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 25px rgba(0, 0, 0, 0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                minHeight: '420px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #f59e0b 100%)'
                }} />
                
                <motion.div 
                  className="course-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: '3rem',
                    textAlign: 'center',
                    marginBottom: '16px',
                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                    padding: '24px 24px 0'
                  }}
                >
                  {course.icon}
                </motion.div>
                
                <div className="course-content" style={{ padding: '0 24px 24px' }}>
                  <h3 className="course-title" style={{
                    fontSize: '1.5rem',
                    marginBottom: '12px',
                    color: '#1f2937',
                    fontWeight: '600'
                  }}>
                    {course.title}
                  </h3>
                  
                  <p className="course-description" style={{
                    marginBottom: '24px',
                    color: '#6b7280',
                    lineHeight: '1.6'
                  }}>
                    {course.description}
                  </p>
                  
                  <div className="course-details" style={{ marginBottom: '24px' }}>
                    <div className="course-meta" style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '16px',
                      marginBottom: '16px'
                    }}>
                      <span className="course-duration" style={{
                        fontSize: '0.875rem',
                        color: '#6b7280'
                      }}>
                        <strong style={{ color: '#1f2937' }}>Duration:</strong> {course.duration}
                      </span>
                      <span className="course-level" style={{
                        fontSize: '0.875rem',
                        color: '#6b7280'
                      }}>
                        <strong style={{ color: '#1f2937' }}>Level:</strong> {course.level}
                      </span>
                    </div>
                    
                    <div className="course-technologies" style={{
                      fontSize: '0.875rem',
                      color: '#6b7280'
                    }}>
                      <strong style={{
                        color: '#1f2937',
                        display: 'block',
                        marginBottom: '8px'
                      }}>Technologies:</strong>
                      <div className="tech-tags" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginTop: '8px'
                      }}>
                        {course.technologies.map((tech, i) => (
                          <motion.span 
                            key={i} 
                            className="tech-tag"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.1 }}
                            style={{
                              background: '#ede9fe',
                              color: '#6366f1',
                              padding: '4px 12px',
                              borderRadius: '8px',
                              fontSize: '0.75rem',
                              fontWeight: '500',
                              border: '1px solid #c7d2fe'
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="course-actions" style={{
                    display: 'flex',
                    gap: '12px',
                    marginTop: 'auto'
                  }}>
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
      
      {/* Mobile Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .training-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          .course-content {
            padding: 16px !important;
          }
          
          .course-actions {
            flex-direction: column !important;
          }
          
          .course-meta {
            flex-direction: column !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TrainingCourses;