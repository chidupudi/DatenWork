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
    <section className="training-courses" id="training">
      <div className="training-container">
        <motion.div 
          ref={ref}
          className="training-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="training-title">
            Comprehensive Training Programs
          </h2>
          <p className="training-subtitle">
            Industry-focused courses designed to make you job-ready with cutting-edge skills
          </p>
        </motion.div>

        <motion.div 
          className="training-grid"
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
            >
              <Card className="training-card">
                <motion.div 
                  className="course-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {course.icon}
                </motion.div>
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  
                  <div className="course-details">
                    <div className="course-meta">
                      <span className="course-duration">
                        <strong>Duration:</strong> {course.duration}
                      </span>
                      <span className="course-level">
                        <strong>Level:</strong> {course.level}
                      </span>
                    </div>
                    
                    <div className="course-technologies">
                      <strong>Technologies:</strong>
                      <div className="tech-tags">
                        {course.technologies.map((tech, i) => (
                          <motion.span 
                            key={i} 
                            className="tech-tag"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="course-actions">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="primary" size="medium">
                        Learn More
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" size="medium">
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