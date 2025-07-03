import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../common/Card';
import Button from '../common/Button';
import './ITConsultancy.css';

const ITConsultancy = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      id: 1,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation solutions to modernize your business operations.',
      icon: '🔄',
      features: [
        'Cloud Migration Strategy',
        'Legacy System Modernization',
        'Process Automation',
        'Digital Workflow Design'
      ],
      color: 'blue'
    },
    {
      id: 2,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      icon: '💻',
      features: [
        'Web Applications',
        'Mobile App Development',
        'API Development',
        'Database Design'
      ],
      color: 'teal'
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud services including migration, optimization, and management.',
      icon: '☁️',
      features: [
        'AWS/Azure/GCP Setup',
        'Cloud Architecture Design',
        'DevOps Implementation',
        'Security & Compliance'
      ],
      color: 'orange'
    },
    {
      id: 4,
      title: 'Data Analytics & AI',
      description: 'Harness the power of data with advanced analytics and AI-driven insights.',
      icon: '📊',
      features: [
        'Business Intelligence',
        'Machine Learning Models',
        'Data Visualization',
        'Predictive Analytics'
      ],
      color: 'purple'
    }
  ];

  const vendorServices = [
    {
      id: 1,
      title: 'Vendor Recruitment',
      description: 'Connect with top-tier IT vendors for specialized project requirements.',
      icon: '🤝',
      benefits: [
        'Pre-vetted vendor network',
        'Quality assurance',
        'Competitive pricing',
        'Project management support'
      ]
    },
    {
      id: 2,
      title: 'Partnership Program',
      description: 'Join our vendor network and access exclusive project opportunities.',
      icon: '🔗',
      benefits: [
        'Regular project assignments',
        'Skill development support',
        'Performance-based rewards',
        'Long-term partnerships'
      ]
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

  return (
    <section className="it-consultancy" id="consultancy">
      <div className="consultancy-container">
        <motion.div 
          ref={ref}
          className="consultancy-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="consultancy-title">IT Consultancy & Solutions</h2>
          <p className="consultancy-subtitle">
            Strategic technology consulting to accelerate your digital transformation journey
          </p>
        </motion.div>

        <motion.div 
          className="consultancy-services"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`consultancy-service-card service-${service.color}`}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4 className="features-title">Key Features:</h4>
                  <ul className="features-list">
                    {service.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
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
        </motion.div>

        <motion.div 
          className="vendor-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="vendor-header">
            <h3 className="vendor-title">Vendor Partnership & Recruitment</h3>
            <p className="vendor-subtitle">
              We offer comprehensive vendor recruitment services and partnership opportunities
            </p>
          </div>

          <div className="vendor-services">
            {vendorServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: (index + 4) * 0.15, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <Card className="vendor-service-card">
                  <div className="vendor-service-header">
                    <motion.div 
                      className="vendor-icon"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h4 className="vendor-service-title">{service.title}</h4>
                  </div>
                  
                  <p className="vendor-service-description">{service.description}</p>
                  
                  <div className="vendor-benefits">
                    <h5 className="benefits-title">Benefits:</h5>
                    <ul className="benefits-list">
                      {service.benefits.map((benefit, i) => (
                        <motion.li 
                          key={i} 
                          className="benefit-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                          <span className="benefit-arrow">→</span>
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="primary" className="vendor-cta">
                      {service.id === 1 ? 'Find Vendors' : 'Join Network'}
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="consultancy-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Business?</h3>
            <p className="cta-text">
              Let's discuss how our IT consultancy services can help accelerate your digital transformation
            </p>
            <div className="cta-actions">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" size="large">
                  Schedule Consultation
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="secondary" size="large">
                  View Case Studies
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ITConsultancy;