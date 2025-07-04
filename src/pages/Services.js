import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
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
    <section className="services" id="services" style={{ 
      padding: '80px 0', 
      background: '#f9fafb',
      position: 'relative',
      zIndex: 1,
      opacity: 1,
      visibility: 'visible'
    }}>
      <div className="services-container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 24px',
        position: 'relative',
        zIndex: 1 
      }}>
        <motion.div 
          ref={ref}
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 className="services-title" style={{ 
            fontSize: '2.5rem', 
            marginBottom: '16px', 
            color: '#1f2937',
            fontWeight: '600'
          }}>
            Our Services
          </h2>
          <p className="services-subtitle" style={{ 
            fontSize: '1.25rem', 
            color: '#6b7280', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Comprehensive solutions for your tech career and business needs
          </p>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px' 
          }}
        >
          {services.map(service => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`service-card service-${service.color}`} style={{
                textAlign: 'center',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e5e7eb'
              }}>
                <motion.div 
                  className="service-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  style={{ 
                    fontSize: '3rem', 
                    marginBottom: '16px', 
                    display: 'block' 
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="service-title" style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '16px', 
                  color: '#1f2937',
                  fontWeight: '600'
                }}>
                  {service.title}
                </h3>
                <p className="service-description" style={{ 
                  marginBottom: '24px', 
                  lineHeight: '1.6',
                  color: '#6b7280'
                }}>
                  {service.description}
                </p>
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