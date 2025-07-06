import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../common/Card';
import Button from '../common/Button';

const ITConsultancy = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredVendor, setHoveredVendor] = useState(null);

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
  },
  {
    id: 5,
    title: 'Need Custom Solutions?',
    description: 'Have specific requirements? Our expert sales team will design a tailored solution for your unique business needs.',
    icon: '🤝',
    features: [
      'Free consultation & project assessment',
      'Custom pricing for your requirements',
      'Dedicated project manager assigned',
      '24/7 support throughout the project'
    ],
    color: 'contact', // New color for contact card
    isContactCard: true // Flag to identify this as contact card
  }
];
const vendorServices = [
  {
    id: 1,
    title: 'Talent Scouting Services',
    description: 'Need specific talent with particular skill sets? We scout and deliver qualified professionals tailored to your exact requirements.',
    icon: '🎯',
    benefits: [
      'Custom talent acquisition based on your specifications',
      'Pre-screened candidates with verified skills',
      'Flexible team sizes - from 1 to 100+ professionals',
      'Rapid deployment within 2-4 weeks',
      'Skills assessment and technical interviews',
      'Performance guarantee and replacement support'
    ]
  },
  {
    id: 2,
    title: 'Dedicated Team Solutions',
    description: 'Scale your workforce instantly with our dedicated teams matched to your technology stack and project requirements.',
    icon: '👥',
    benefits: [
      'Full-stack development teams',
      'Specialized skill-based squads (DevOps, AI/ML, etc.)',
      'Project-based or long-term engagements',
      'Seamless integration with your existing team',
      'Regular progress reports and KPI tracking',
      'Flexible scaling up or down as needed'
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

  // Main section styles
  const consultancySectionStyles = {
    background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
    padding: '80px 0',
    position: 'relative',
    overflow: 'hidden'
  };

  // Background patterns
  const backgroundOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.06) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.06) 0%, transparent 40%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="consultancy-triangles" width="30" height="26" patternUnits="userSpaceOnUse"><polygon points="15,2 28,24 2,24" fill="none" stroke="rgba(99,102,241,0.03)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23consultancy-triangles)"/></svg>')
    `,
    zIndex: 0
  };

  const decorativeCircleStyles = {
    position: 'absolute',
    bottom: '20%',
    right: '15%',
    width: '300px',
    height: '300px',
    background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    zIndex: 0
  };

  const consultancyContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 16px' : '0 24px',
    position: 'relative',
    zIndex: 1
  };

  const consultancyHeaderStyles = {
    textAlign: 'center',
    marginBottom: '64px'
  };

  const consultancyTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
    marginBottom: '16px',
    color: '#1f2937',
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const consultancySubtitleStyles = {
    fontSize: '1.25rem',
    color: '#6b7280',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const servicesGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: window.innerWidth <= 768 ? '16px' : '24px',
    marginBottom: '80px'
  };

const getServiceColor = (color) => {
  const colors = {
    blue: { border: '#4f46e5', bg: '#ede9fe' },
    teal: { border: '#14b8a6', bg: '#f0fdfa' },
    orange: { border: '#f59e0b', bg: '#fef3c7' },
    purple: { border: '#8b5cf6', bg: '#f3e8ff' },
    contact: { border: '#dc2626', bg: '#fef2f2' } // Red theme for contact card
  };
  return colors[color] || colors.blue;
};

  const serviceCardStyles = (service, isHovered) => {
    const colors = getServiceColor(service.color);
    return {
      position: 'relative',
      overflow: 'hidden',
      border: 'none',
      boxShadow: isHovered 
        ? '0 8px 12px rgba(0, 0, 0, 0.1), 0 20px 40px rgba(0, 0, 0, 0.12)'
        : '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      minHeight: '420px'
    };
  };

  const serviceTopBorderStyles = (color) => {
    const borderColor = getServiceColor(color).border;
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: `linear-gradient(135deg, ${borderColor} 0%, ${borderColor}cc 100%)`
    };
  };

  const serviceIconStyles = (isHovered) => ({
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '16px',
    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
    transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
    transition: 'transform 0.2s ease'
  });

  const serviceTitleStyles = {
    fontSize: '1.5rem',
    marginBottom: '16px',
    color: '#1f2937',
    fontWeight: '600',
    textAlign: 'center'
  };

  const serviceDescriptionStyles = {
    marginBottom: '24px',
    color: '#6b7280',
    lineHeight: '1.6',
    textAlign: 'center'
  };

  const serviceFeaturesStyles = {
    marginBottom: '32px'
  };

  const featuresTitleStyles = {
    fontSize: '0.875rem',
    color: '#1f2937',
    fontWeight: '600',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const featuresListStyles = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const featureItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
    fontSize: '0.875rem',
    color: '#6b7280',
    padding: '8px',
    borderRadius: '8px',
    background: '#f9fafb',
    border: '1px solid #e5e7eb'
  };

  const featureCheckStyles = {
    color: '#059669',
    fontWeight: 'bold',
    fontSize: '1rem'
  };

  const serviceCtaStyles = {
    width: '100%',
    marginTop: 'auto'
  };

  // Vendor section styles
  const vendorSectionStyles = {
    marginBottom: '80px'
  };

  const vendorHeaderStyles = {
    textAlign: 'center',
    marginBottom: '48px'
  };
const vendorTitleStyles = {
  fontSize: window.innerWidth <= 768 ? '2rem' : '3rem',
  marginBottom: '16px',
  color: '#1f2937',
  fontWeight: '600'
};

const vendorSubtitleStyles = {
  fontSize: '1.125rem',
  color: '#6b7280',
  maxWidth: '700px', // Increased width for longer text
  margin: '0 auto',
  lineHeight: '1.6'
};
  const vendorServicesStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: window.innerWidth <= 768 ? '24px' : '32px'
  };

  const vendorServiceCardStyles = (isHovered) => ({
    background: '#ffffff',
    border: isHovered ? '2px solid #4f46e5' : '2px solid #e5e7eb',
    boxShadow: isHovered 
      ? '0 12px 24px rgba(79, 70, 229, 0.15)'
      : '0 8px 16px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    transform: isHovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
    borderRadius: '16px',
    padding: '24px'
  });

  const vendorServiceHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px'
  };

  const vendorIconStyles = (isHovered) => ({
    fontSize: '2.5rem',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
    transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
    transition: 'transform 0.2s ease'
  });

  const vendorServiceTitleStyles = {
    fontSize: '1.25rem',
    color: '#1f2937',
    fontWeight: '600',
    margin: 0
  };

  const vendorServiceDescriptionStyles = {
    marginBottom: '24px',
    color: '#6b7280',
    lineHeight: '1.6'
  };

  const vendorBenefitsStyles = {
    marginBottom: '32px'
  };

  const benefitsTitleStyles = {
    fontSize: '0.875rem',
    color: '#1f2937',
    fontWeight: '600',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const benefitsListStyles = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const benefitItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
    fontSize: '0.875rem',
    color: '#6b7280',
    padding: '8px 12px',
    borderLeft: '3px solid #4f46e5',
    background: '#ede9fe'
  };

  const benefitArrowStyles = {
    color: '#4f46e5',
    fontWeight: 'bold',
    fontSize: '1rem'
  };

  const vendorCtaStyles = {
    width: '100%',
    marginTop: 'auto'
  };

  // CTA section styles
  const consultancyCtaStyles = {
    textAlign: 'center',
    padding: window.innerWidth <= 768 ? '32px' : '48px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
    color: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 25px 50px rgba(79, 70, 229, 0.25)',
    position: 'relative',
    overflow: 'hidden'
  };

  const ctaPatternStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="circuit" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 0 5 L 2 5 L 2 3 L 8 3 L 8 7 L 10 7" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23circuit)"/></svg>')`,
    opacity: 0.3
  };

  const ctaContentStyles = {
    position: 'relative',
    zIndex: 1
  };

  const ctaTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '3rem',
    fontWeight: '700',
    marginBottom: '16px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  };

  const ctaTextStyles = {
    fontSize: window.innerWidth <= 768 ? '1rem' : '1.125rem',
    marginBottom: '32px',
    opacity: 0.9,
    lineHeight: '1.6',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const ctaActionsStyles = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    alignItems: window.innerWidth <= 768 ? 'center' : 'flex-start'
  };

  return (
    <section style={consultancySectionStyles} id="consultancy">
      <div style={backgroundOverlayStyles} />
      <div style={decorativeCircleStyles} />
      
      <div style={consultancyContainerStyles}>
        <motion.div 
          ref={ref}
          style={consultancyHeaderStyles}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 style={consultancyTitleStyles}>IT Consultancy & Solutions</h2>
          <p style={consultancySubtitleStyles}>
            Strategic technology consulting to accelerate your digital transformation journey
          </p>
        </motion.div>

        <motion.div 
          style={servicesGridStyles}
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
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <Card 
                style={serviceCardStyles(service, hoveredService === service.id)}
                hover={false}
              >
                <div style={serviceTopBorderStyles(service.color)} />
                
                <div style={serviceIconStyles(hoveredService === service.id)}>
                  {service.icon}
                </div>
                <h3 style={serviceTitleStyles}>{service.title}</h3>
                <p style={serviceDescriptionStyles}>{service.description}</p>
                
                <div style={serviceFeaturesStyles}>
                  <h4 style={featuresTitleStyles}>Key Features:</h4>
                  <ul style={featuresListStyles}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={featureItemStyles}>
                        <span style={featureCheckStyles}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
               <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  style={serviceCtaStyles}
>
  {service.isContactCard ? (
    <Button variant="primary">
      Contact Sales Team
    </Button>
  ) : (
    <Button variant="outline">
      Learn More
    </Button>
  )}
</motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          style={vendorSectionStyles}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div style={vendorHeaderStyles}>
            <h3 style={vendorTitleStyles}>Talent Scouting & Team Solutions</h3>
<p style={vendorSubtitleStyles}>
  Need specific talent with particular skill sets? We scout, assess, and deliver qualified professionals tailored to your exact project requirements and team size needs.
</p>
          </div>

          <div style={vendorServicesStyles}>
            {vendorServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: (index + 4) * 0.15, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
                onMouseEnter={() => setHoveredVendor(service.id)}
                onMouseLeave={() => setHoveredVendor(null)}
              >
                <Card 
                  style={vendorServiceCardStyles(hoveredVendor === service.id)}
                  hover={false}
                >
                  <div style={vendorServiceHeaderStyles}>
                    <motion.div 
                      style={vendorIconStyles(hoveredVendor === service.id)}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h4 style={vendorServiceTitleStyles}>{service.title}</h4>
                  </div>
                  
                  <p style={vendorServiceDescriptionStyles}>{service.description}</p>
                  
                  <div style={vendorBenefitsStyles}>
                    <h5 style={benefitsTitleStyles}>Benefits:</h5>
                    <ul style={benefitsListStyles}>
                      {service.benefits.map((benefit, i) => (
                        <motion.li 
                          key={i} 
                          style={benefitItemStyles}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                          <span style={benefitArrowStyles}>→</span>
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={vendorCtaStyles}
                  >
                    <Button variant="primary">
  {service.id === 1 ? 'Request Talent' : 'Build My Team'}
</Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          style={consultancyCtaStyles}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <div style={ctaPatternStyles} />
          <div style={ctaContentStyles}>
            <h3 style={ctaTitleStyles}>Ready to Transform Your Business?</h3>
            <p style={ctaTextStyles}>
              Let's discuss how our IT consultancy services can help accelerate your digital transformation
            </p>
            <div style={ctaActionsStyles}>
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