import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../common/Card';
import Button from '../common/Button';
import { useCountAnimation } from '../../hooks/useCountAnimation';
import './PlacementServices.css';

const PlacementServices = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [placementCount, startPlacementCount] = useCountAnimation(850, 2000);
  const [companiesCount, startCompaniesCount] = useCountAnimation(120, 2000);
  const [salaryCount, startSalaryCount] = useCountAnimation(45, 2000);

  React.useEffect(() => {
    if (inView) {
      startPlacementCount();
      startCompaniesCount();
      startSalaryCount();
    }
  }, [inView, startPlacementCount, startCompaniesCount, startSalaryCount]);

  const services = [
    {
      id: 1,
      title: 'Resume Building',
      description: 'Professional resume creation that highlights your skills and gets you noticed.',
      icon: '📄',
      features: ['ATS-optimized format', 'Industry-specific templates', 'Personal review session']
    },
    {
      id: 2,
      title: 'Interview Preparation',
      description: 'Comprehensive interview coaching with mock sessions and feedback.',
      icon: '🎤',
      features: ['Technical interview prep', 'HR round coaching', 'Mock interview sessions']
    },
    {
      id: 3,
      title: 'Job Matching',
      description: 'AI-powered job matching based on your skills and career preferences.',
      icon: '🎯',
      features: ['Smart job recommendations', 'Salary negotiation support', 'Career path guidance']
    },
    {
      id: 4,
      title: 'Industry Connections',
      description: 'Direct connections with hiring managers and industry professionals.',
      icon: '🤝',
      features: ['Partner company network', 'Industry meetups', 'Mentorship programs']
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="placement-services" id="placements">
      <div className="placement-container">
        <motion.div 
          ref={ref}
          className="placement-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="placement-title">Guaranteed Placement Services</h2>
          <p className="placement-subtitle">
            From training to placement, we ensure your success with 100% job guarantee
          </p>
        </motion.div>

        <motion.div 
          className="placement-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="stat-number">{placementCount}+</div>
            <div className="stat-label">Successful Placements</div>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="stat-number">{companiesCount}+</div>
            <div className="stat-label">Partner Companies</div>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="stat-number">{salaryCount}L+</div>
            <div className="stat-label">Highest Package</div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="placement-services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="placement-service-card">
                <div className="service-header">
                  <motion.div 
                    className="service-icon"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="service-feature"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <span className="feature-check">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="service-cta">
                    Learn More
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="placement-guarantee"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <div className="guarantee-content">
            <h3 className="guarantee-title">100% Job Guarantee</h3>
            <p className="guarantee-text">
              We're so confident in our training that we offer a money-back guarantee 
              if you don't get placed within 6 months of course completion.
            </p>
            <div className="guarantee-actions">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" size="large">
                  Get Started Today
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="secondary" size="large">
                  View Success Stories
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementServices;