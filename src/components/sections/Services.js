import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import './Services.css';

const Services = () => {
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
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive solutions for your tech career and business needs
          </p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <Card key={service.id} className={`service-card service-${service.color}`}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Button variant="outline" className="service-button">
                {service.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;