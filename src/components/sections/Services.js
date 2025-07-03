import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../common/Card';
import Button from '../common/Button';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      id: 1,
      title: 'Training Programs',
      description: 'Comprehensive courses in cutting-edge technologies with hands-on projects and industry mentorship.',
      icon: '🎓',
      buttonText: 'Learn More',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Placement Services',
      description: 'Guaranteed job placements with top tech companies through our extensive partner network.',
      icon: '💼',
      buttonText: 'Find Jobs',
      color: 'teal'
    },
    {
      id: 3,
      title: 'IT Consultancy',
      description: 'Strategic technology consulting to help businesses scale and optimize their digital infrastructure.',
      icon: '🚀',
      buttonText: 'Partner With Us',
      color: 'orange'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <motion.div 
          ref={ref}
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive solutions for your tech career and business needs
          </p>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map(service => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`service-card service-${service.color}`}>
                <motion.div 
                  className="service-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="service-button">
                    {service.buttonText}
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;