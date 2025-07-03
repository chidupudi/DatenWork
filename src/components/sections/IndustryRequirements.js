import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../common/Card';
import './IndustryRequirements.css';

const IndustryRequirements = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
        return 'urgent-immediate';
      case 'This Week':
        return 'urgent-week';
      case 'Next Week':
        return 'urgent-next-week';
      default:
        return 'urgent-month';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section className="industry-requirements" id="requirements">
      <div className="requirements-container">
        <motion.div 
          ref={ref}
          className="requirements-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="requirements-title">Current Industry Requirements</h2>
          <p className="requirements-subtitle">
            Live job opportunities from our partner companies across various industries
          </p>
        </motion.div>

        <motion.div 
          className="requirements-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {requirements.map((req, index) => (
            <motion.div
              key={req.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="requirement-card">
              <div className="requirement-header">
                <div className="requirement-meta">
                  <span className="industry-tag">{req.industry}</span>
                  <span className={`urgency-badge ${getUrgencyColor(req.urgency)}`}>
                    {req.urgency}
                  </span>
                </div>
                <div className="openings-count">
                  {req.openings} openings
                </div>
              </div>

              <div className="requirement-content">
                <h3 className="job-title">{req.title}</h3>
                <p className="company-name">{req.company}</p>
                
                <div className="job-details">
                  <div className="detail-item">
                    <span className="detail-label">📍 Location:</span>
                    <span className="detail-value">{req.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">💼 Experience:</span>
                    <span className="detail-value">{req.experience}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">💰 Package:</span>
                    <span className="detail-value">{req.package}</span>
                  </div>
                </div>

                <div className="skills-section">
                  <h4 className="skills-title">Required Skills:</h4>
                  <div className="skills-tags">
                    {req.skills.map((skill, i) => (
                      <motion.span 
                        key={i} 
                        className="skill-tag"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="requirement-actions">
                  <motion.button 
                    className="apply-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                  </motion.button>
                  <motion.button 
                    className="details-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="requirements-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="cta-content">
            <h3 className="cta-title">Ready to Apply?</h3>
            <p className="cta-text">
              Join our training program and get direct access to these opportunities
            </p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryRequirements;